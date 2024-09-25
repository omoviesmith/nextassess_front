'use client'

import { ImPencil } from "react-icons/im";
import { MdRefresh, MdDownload, MdAdUnits, MdOutlineLineWeight } from "react-icons/md";
import { IoSaveSharp } from "react-icons/io5";
import { IoMdArrowBack } from "react-icons/io";
import { useRef, useState } from "react";
import { showToast } from "react-next-toast";
import Modal from "./Modal/Modal";
import { useReactToPrint } from "react-to-print";
import generatePDF, { Resolution, Margin } from "react-to-pdf";
import PDF from "./PDF/PDF";
import Markdown from "../Markdown/Markdown";
import { useUser } from "@/context/UserContext";

export default function EditAssessment({ data, back = () => { window?.history.back(); }, tryAgain, downloadPdf }) {
    const { user } = useUser();
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        onPrintError: (error) => console.log(error),
        print: async (printIframe) => {
            const document = printIframe.contentDocument;
            if (document) {
                const ticketElement = document.getElementsByClassName("container-pdf")[0];
                ticketElement.style.display = "block";
                const options = {
                    filename: `${data?.title_assessment}.pdf`,
                    method: "save",
                    resolution: Resolution.MEDIUM,
                    page: {
                        margin: Margin.MEDIUM,
                        format: "A4",
                        orientation: "portrait"
                    },
                    canvas: {
                        mimeType: "image/jpeg",
                        qualityRatio: 1
                    },
                    overrides: {
                        pdf: {
                            compress: true
                        },
                        canvas: {
                            useCORS: true,
                            windowWidth: 1400,
                        }
                    }
                };
                const getTargetElement = () => document.getElementsByClassName('container-pdf')[0];
                await generatePDF(getTargetElement, options)
            }
        },
    });
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isEditing, setIsEditing] = useState({
        id: null,
        title_assessment: false,
        overview: false,
        assessment_unit: false,
        percentage_weighting: false,
        due_date: false,
        submission_requirements: -1,
        marking_rubric: -1,
        assessment_description: -1,
        descriptionIndex: -1, // Added to track item index being edited
        sectionKey: null,
    });

    const [formData, setFormData] = useState({
        id: data?.id,
        title_assessment: data?.title_assessment || '',
        overview_and_rationale: data?.overview_and_rationale || '',
        assessment_unit: data?.assessment_unit || '',
        percentage_weighting: data?.percentage_weighting || '',
        due_date: data?.due_date || '',
        assessment_description: data?.assessment_description
            ? data?.assessment_description.map(section =>
                Object.entries(section).map(([key, value]) =>
                    `<div>
                        <h6 className='text-capitalize'>${key.replace(/_/g, ' ')}</h6>
                        <ul>${value.map(item => `<li>${item}</li>`).join('')}</ul>
                    </div>`
                ).join('')
            ).join('')
            : null,
        submission_requirements: `<ul>${data?.submission_requirements?.map(item => `<li>${item}</li>`).join('')}</ul>` || null,
        marking_rubric: data?.marking_rubric || [],
    });

    const [tempData, setTempData] = useState({ ...formData });

    const handleEditClick = (field, sectionIndex = null, itemIndex = null, sectionKey = null) => {
        setShowModal(true);
        if (field === 'assessment_description') {
            setIsEditing({ ...isEditing, [field]: 0 });
        } else {
            setIsEditing({ ...isEditing, [field]: field === 'submission_requirements' ? 0 : !isEditing[field] });
        }
        setTempData({ ...formData });
    };

    const handleChange = (e, field) => {
        setTempData({ ...tempData, [field]: e.target.value });
    };

    const handleSubmissionRequirementsChange = (value) => {
        setTempData({ ...tempData, submission_requirements: value })
        setFormData({ ...formData, submission_requirements: value })
    };

    const handleRubricChange = (index, field, value) => {
        const updatedRubric = [...tempData.marking_rubric];
        updatedRubric[index] = { ...updatedRubric[index], [field]: value };
        setTempData({ ...tempData, marking_rubric: updatedRubric });
    };

    const handleTextareaChange = (value) => {
        setTempData({ ...tempData, assessment_description: value });
        setFormData({ ...formData, assessment_description: value });
    };

    const handleSave = async (field) => {
        let requirementsArray = null;
        let assessmentDescriptionObject = null;
        if (field === 'submission_requirements') {
            const parser = new DOMParser();
            const htmlDoc = parser.parseFromString(tempData.submission_requirements, 'text/html');
            const listItems = htmlDoc.querySelectorAll('li');
            requirementsArray = Array.from(listItems).map(li => li.innerText);
            setIsEditing({ ...isEditing, submission_requirements: -1 });
        } else if (field === 'marking_rubric') {
            setFormData({ ...formData, marking_rubric: tempData.marking_rubric });
            setIsEditing({ ...isEditing, marking_rubric: -1 });
        } else if (field === 'assessment_description') {
            const parser = new DOMParser();
            const htmlDoc = parser.parseFromString(tempData.assessment_description, 'text/html');
            const sections = htmlDoc.querySelectorAll('div');
            assessmentDescriptionObject = Array.from(sections).reduce((acc, section) => {
                const key = section.querySelector('h6').innerText.replace(/ /g, '_');
                const values = Array.from(section.querySelectorAll('li')).map(li => li.innerText);
                acc[key] = values;
                return acc;
            }, {});
            setFormData({ ...formData, assessment_description: tempData.assessment_description });
            setIsEditing({ ...isEditing, assessment_description: -1, descriptionIndex: -1 });
        } else {
            setFormData({ ...tempData });
            setIsEditing({ ...isEditing, [field]: false });
        }
        setLoading(true);
        try {
            let requestBody;
            const updatedData = { [field]: tempData[field] };
            if(field === 'submission_requirements') {
                requestBody = { submission_requirements: requirementsArray };
            } else if (field === 'assessment_description') {
                requestBody = { assessment_description: [assessmentDescriptionObject] };
            } else {
                requestBody = updatedData;
            }
            const res = await fetch(`https://pqwsf4zp7s.ap-southeast-2.awsapprunner.com/api/assessments/${data.shardId}/${data.assessmentId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Tenant-ID': user.tenantId
                },
                body: JSON.stringify(requestBody)
            });
            const resData = await res.json();
            showToast.success('Edited successfully!');
            setLoading(false);
            setShowModal(false);
        } catch (error) {
            setLoading(false);
            showToast.error('Something went wrong while editing');
            throw new Error(error);
        }
    };
    

    const handleCancel = (field) => {
        setShowModal(false);
        setTempData({ ...formData });
        setLoading(false);
        setIsEditing({ ...isEditing, [field]: field === 'marking_rubric' || field === 'assessment_description' || field === 'submission_requirements' ? -1 : false, descriptionIndex: -1 });
    };
    return (<>
        <div onClick={() => back()}>
            <button className="flex items-center gap-2 bg-white rounded-md py-3 px-5 text-[#202123] font-semibold">
                <IoMdArrowBack className="w-5 h-5" /> Back
            </button>
        </div>
        <div className="my-7 edit-container">
            <div className="md:w-2/3 mx-auto bg-white rounded-[10px] border border-[#A9A9A9] p-7">
                <div className="flex justify-between items-center p-4 bg-[#E8E9FC] rounded">
                    {
                        isEditing.title_assessment ? (
                            <Modal isOpen={showModal} onClose={() => handleCancel('title_assessment')}>
                                <div className="w-full mb-3">
                                    <textarea rows={5} className="border-gray-300 border rounded px-5 py-3 w-full"
                                        value={tempData.title_assessment}
                                        onChange={(e) => handleChange(e, 'title_assessment')} />
                                    <div className="flex gap-3 md:w-1/2 mx-auto mt-2">
                                        <button
                                            className="w-full text-center rounded-lg py-2 px-3 font-semibold flex justify-center text-sm bg-[#CBFFFE]"
                                            onClick={() => handleSave('title_assessment')}
                                        >
                                            {loading && <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>}
                                            Save
                                        </button>
                                        <button
                                            className="w-full text-center rounded-lg text-black py-2 px-3 font-semibold text-sm border border-black"
                                            onClick={() => handleCancel('title_assessment')}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </Modal>
                        ) : (
                            <>
                                <h1 className="text-black text-3xl font-bold mb-3 w-[90%]">
                                    {formData?.title_assessment}
                                </h1>
                                <div className="w-[10%] flex justify-center">
                                    <div onClick={() => handleEditClick('title_assessment')} className="flex justify-center cursor-pointer items-center border border-black rounded-full w-10 h-10">
                                        <ImPencil className="text-sm" />
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
                <div className="p-4 bg-[#E8E9FC] rounded flex items-start mt-4">
                    {
                        isEditing.overview ? (
                            <Modal isOpen={showModal} onClose={() => handleCancel('overview')}>
                                <div className="w-full">
                                    <h6 className="text-black font-bold text-[15px] leading-[26px]">
                                        Overview And Rationale:{" "}
                                    </h6>
                                    <textarea rows={5} className="border-gray-300 border rounded px-5 py-3 w-full"
                                        value={tempData.overview_and_rationale}
                                        onChange={(e) => handleChange(e, 'overview_and_rationale')} />
                                    <div className="flex gap-2 md:w-1/2 mx-auto mt-2">
                                        <button
                                            className="w-full text-center rounded-lg py-2 px-3 font-semibold text-sm bg-[#CBFFFE]"
                                            onClick={() => handleSave('overview')}
                                        >
                                            Save
                                        </button>
                                        <button
                                            className="w-full text-center rounded-lg text-black py-2 px-3 font-semibold text-sm border border-black"
                                            onClick={() => handleCancel('overview')}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </Modal>
                        ) : (
                            <>
                                <div className=" w-[90%]">
                                    <h6 className="text-black font-bold text-[15px] leading-[26px]">
                                        Overview And Rationale:{" "}
                                    </h6>
                                    <p className="text-[#666666] font-normal text-[15px] leading-[26px]">
                                        {formData?.overview_and_rationale}
                                    </p>
                                </div>
                                <div className="w-[10%] flex justify-center">
                                    <div onClick={() => handleEditClick('overview')} className="flex justify-center cursor-pointer items-center border border-black rounded-full w-10 h-10">
                                        <ImPencil className="text-sm" />
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
                <div className="p-4 bg-[#E8E9FC] rounded flex justify-between items-start mt-4">
                    {
                        isEditing.assessment_unit ? (
                            <Modal isOpen={showModal} onClose={() => handleCancel('assessment_unit')}>
                                <div className="w-full">
                                    <h6 className="text-black font-bold text-[15px] leading-[26px]">
                                        Assessment Unit:{" "}
                                    </h6>
                                    <div>
                                        <MdAdUnits className="relative top-8 left-5" />
                                        <input required className="border border-gray-300 rounded pl-12 pr-5 py-3 w-full"
                                            type="text"
                                            value={tempData.assessment_unit}
                                            onChange={(e) => handleChange(e, 'assessment_unit')} />
                                    </div>
                                    <div className="flex gap-2 md:w-1/2 mx-auto mt-2">
                                        <button
                                            className="w-full text-center rounded-lg py-2 px-3 font-semibold text-sm bg-[#CBFFFE]"
                                            onClick={() => handleSave('assessment_unit')}
                                        >
                                            Save
                                        </button>
                                        <button
                                            className="w-full text-center rounded-lg text-black py-2 px-3 font-semibold text-sm border border-black"
                                            onClick={() => handleCancel('assessment_unit')}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </Modal>
                        ) : (
                            <>
                                <div className=" w-[90%]">
                                    <h6 className="text-black font-bold text-[15px] leading-[26px]">
                                        Assessment Unit:{" "}
                                    </h6>
                                    <p className="text-[#666666] font-normal text-[15px] leading-[26px] mb-3">
                                        {formData?.assessment_unit}
                                    </p>
                                </div>
                                <div className="w-[10%] flex justify-center">
                                    <div onClick={() => handleEditClick('assessment_unit')} className="flex justify-center cursor-pointer items-center border border-black rounded-full w-10 h-10">
                                        <ImPencil className="text-sm" />
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
                <div className="p-4 bg-[#E8E9FC] rounded flex justify-between items-start mt-4">
                    {
                        isEditing.percentage_weighting ? (
                            <Modal isOpen={showModal} onClose={() => handleCancel('percentage_weighting')}>
                                <div className="w-full">
                                    <h6 className="text-black font-bold text-[15px] leading-[26px]">
                                        Weighting:{" "}
                                    </h6>
                                    <div>
                                        <MdOutlineLineWeight className="relative top-8 left-5" />
                                        <input required className="border border-gray-300 rounded pl-12 pr-5 py-3 w-full"
                                            type="text"
                                            value={tempData.percentage_weighting}
                                            onChange={(e) => handleChange(e, 'percentage_weighting')} />
                                    </div>
                                    <div className="flex gap-2 md:w-1/2 mx-auto mt-2">
                                        <button
                                            className="w-full text-center rounded-lg py-2 px-3 font-semibold text-sm bg-[#CBFFFE]"
                                            onClick={() => handleSave('percentage_weighting')}
                                        >
                                            Save
                                        </button>
                                        <button
                                            className="w-full text-center rounded-lg text-black py-2 px-3 font-semibold text-sm border border-black"
                                            onClick={() => handleCancel('percentage_weighting')}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </Modal>
                        ) : (
                            <>
                                <div className=" w-[90%]">
                                    <h6 className="text-black font-bold text-[15px] leading-[26px]">
                                        Weighting:{" "}
                                    </h6>
                                    <p className="text-[#666666] font-normal text-[15px] leading-[26px] mb-3">
                                        {formData?.percentage_weighting}
                                    </p>
                                </div>
                                <div className="w-[10%] flex justify-center">
                                    <div onClick={() => handleEditClick('percentage_weighting')} className="flex justify-center cursor-pointer items-center border border-black rounded-full w-10 h-10">
                                        <ImPencil className="text-sm" />
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
                <div className="p-4 bg-[#E8E9FC] rounded flex justify-between items-start mt-4">
                    {
                        isEditing.due_date ? (
                            <Modal isOpen={showModal} onClose={() => handleCancel('due_date')}>
                                <div className="w-full">
                                    <h6 className="text-black font-bold text-[15px] leading-[26px]">
                                        Due Date:{" "}
                                    </h6>
                                    <div>
                                        <input required className="border border-gray-300 rounded px-3 py-3 w-full"
                                            type="date"
                                            value={tempData.due_date}
                                            onChange={(e) => handleChange(e, 'due_date')} />
                                    </div>
                                    <div className="flex gap-2 md:w-1/2 mx-auto mt-2">
                                        <button
                                            className="w-full text-center rounded-lg py-2 px-3 font-semibold text-sm bg-[#CBFFFE]"
                                            onClick={() => handleSave('due_date')}
                                        >
                                            Save
                                        </button>
                                        <button
                                            className="w-full text-center rounded-lg text-black py-2 px-3 font-semibold text-sm border border-black"
                                            onClick={() => handleCancel('due_date')}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </Modal>
                        ) : (
                            <>
                                <div className=" w-[90%]">
                                    <h6 className="text-black font-bold text-[15px] leading-[26px]">
                                        Due Date:{" "}
                                    </h6>
                                    <p className="text-[#666666] font-normal text-[15px] leading-[26px] mb-3">
                                        {formData?.due_date}
                                    </p>
                                </div>
                                <div className="w-[10%] flex justify-center">
                                    <div onClick={() => handleEditClick('due_date')} className="flex justify-center cursor-pointer items-center border border-black rounded-full w-10 h-10">
                                        <ImPencil className="text-sm" />
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
                <div className="p-4 bg-[#E8E9FC] rounded mt-4">
                    <div className="flex justify-between items-center">
                        <h6 className="text-black font-bold text-[15px] leading-[26px] capitalize w-[90%]">
                            Assessment Description
                        </h6>
                        {
                            isEditing.assessment_description < 1 && (
                                <div className="w-[10%] flex justify-center">
                                    <div className="flex justify-center cursor-pointer items-center border border-black rounded-full w-10 h-10"
                                        onClick={() => handleEditClick('assessment_description')}>
                                        <ImPencil className="text-sm" />
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    {isEditing.assessment_description !== -1 ? (
                        <Modal isOpen={showModal} onClose={() => handleCancel('assessment_description')}>
                            <div>
                                <Markdown value={tempData.assessment_description} setValue={handleTextareaChange} />
                                <div className="flex gap-3 mt-3">
                                    <button
                                        onClick={() => handleSave('assessment_description')}
                                        className="w-full text-center rounded-lg py-2 px-3 font-semibold text-sm bg-[#CBFFFE]"
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={() => handleCancel('assessment_description')}
                                        className="w-full text-center rounded-lg text-black py-2 px-3 font-semibold text-sm border border-black"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </Modal>
                    ) : (
                        <div className="assessment-description pl-4" dangerouslySetInnerHTML={{ __html: tempData.assessment_description }}></div>
                    )}
                </div>
                <div className="p-4 bg-[#E8E9FC] rounded mt-4">
                    <div className="flex items-start justify-between">
                        <h6 className="text-black font-bold text-[15px] leading-[26px] w-[90%]">
                            Submission Requirements:
                        </h6>
                        {isEditing.submission_requirements === -1 && (
                            <div className="w-[10%] flex justify-center">
                                <div className="flex justify-center cursor-pointer items-center border border-black rounded-full w-10 h-10 ml-2"
                                    onClick={() => { setIsEditing({ ...isEditing, submission_requirements: 0 }); setShowModal(true) }}
                                >
                                    <ImPencil className="text-sm" />
                                </div>
                            </div>
                        )}
                    </div>
                    {isEditing.submission_requirements !== -1 ? (
                        <Modal isOpen={showModal} onClose={() => handleCancel('submission_requirements')}>
                            <div>
                                <Markdown value={tempData.submission_requirements} setValue={handleSubmissionRequirementsChange} />
                                {/* <textarea
                                    value={tempData.submission_requirements.map(item => `• ${item}`).join('\n')}
                                    onChange={handleSubmissionRequirementsChange}
                                    className="w-full border border-gray-300 rounded px-2 py-1"
                                    rows="10"
                                /> */}
                                <div className="flex gap-3 mt-3">
                                    <button
                                        onClick={() => handleSave('submission_requirements')}
                                        className="w-full text-center rounded-lg py-2 px-3 font-semibold text-sm bg-[#CBFFFE]"
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={() => handleCancel('submission_requirements')}
                                        className="w-full text-center rounded-lg text-black py-2 px-3 font-semibold text-sm border border-black"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </Modal>
                    ) : (
                        <div className="mt-3 pl-4" dangerouslySetInnerHTML={{ __html: formData.submission_requirements }}></div>
                        // <ul className="m-0 list-disc mt-3 pl-4">
                        //     {formData.submission_requirements.map((outcome, index) => (
                        //         <li key={index} className="text-[#666666] font-normal text-sm leading-[26px] mb-1">
                        //             {outcome}
                        //         </li>
                        //     ))}
                        // </ul>
                    )}
                </div>

                <div className="w-full py-8">
                    <h6 className="text-black font-bold text-[15px] leading-[26px] mb-2">
                        Marking Rubric:{" "}
                    </h6>
                    <div className="overflow-x-auto">
                        <div className="min-w-full">
                            <table className="w-full min-w-max table-fixed">
                                <thead>
                                    <tr>
                                        <th scope="col" className="py-3 px-1 w-32 font-normal md:font-semibold text-sm uppercase border border-[#A9A9A9]">
                                            Criteria
                                        </th>
                                        <th scope="col" className="py-3 px-1 w-24 font-normal md:font-semibold text-sm uppercase border border-[#A9A9A9]">
                                            Weighting
                                        </th>
                                        <th scope="col" className="py-3 px-1 w-20 font-normal md:font-semibold text-sm uppercase border border-[#A9A9A9]">
                                            Fail
                                        </th>
                                        <th scope="col" className="py-3 px-1 w-24 font-normal md:font-semibold text-sm uppercase border border-[#A9A9A9]">
                                            Pass Grade
                                        </th>
                                        <th scope="col" className="py-3 px-1 w-24 font-normal md:font-semibold text-sm uppercase border border-[#A9A9A9]">
                                            Credit
                                        </th>
                                        <th scope="col" className="py-3 px-1 w-24 font-normal md:font-semibold text-sm uppercase border border-[#A9A9A9]">
                                            Distinction
                                        </th>
                                        <th scope="col" className="py-3 px-1 w-24 font-normal md:font-semibold text-sm uppercase border border-[#A9A9A9]">
                                            High Distinction
                                        </th>
                                        <th scope="col" className="py-3 px-1 w-24 font-normal md:font-semibold text-sm uppercase border border-[#A9A9A9]">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {formData.marking_rubric.map((item, index) => (<>
                                        <tr key={index} className='bg-white'>
                                            <td className="py-3 px-1 font-normal md:font-semibold text-sm border border-[#A9A9A9]">
                                                {item.criteria}
                                            </td>
                                            <td className="py-3 px-1 font-normal text-xs text-[#666666] border border-[#A9A9A9]">
                                                {item.weighting}
                                            </td>
                                            <td className="py-3 px-1 font-normal text-xs text-[#666666] border border-[#A9A9A9]">
                                                {item.fail}
                                            </td>
                                            <td className="py-3 px-1 font-normal text-xs text-[#666666] border border-[#A9A9A9]">
                                                {item.pass_grade}
                                            </td>
                                            <td className="py-3 px-1 font-normal text-xs text-[#666666] border border-[#A9A9A9]">
                                                {item.credit}
                                            </td>
                                            <td className="py-3 px-1 font-normal text-xs text-[#666666] border border-[#A9A9A9]">
                                                {item.distinction}
                                            </td>
                                            <td className="py-3 px-1 font-normal text-xs text-[#666666] border border-[#A9A9A9]">
                                                {item.high_distinction}
                                            </td>
                                            <td className="py-3 px-1 font-normal text-xs text-[#666666] border border-[#A9A9A9]">
                                                <div
                                                    className="flex justify-center cursor-pointer items-center border border-black rounded-full w-10 h-10 ml-2"
                                                    onClick={() => { setIsEditing({ ...isEditing, marking_rubric: index }); setShowModal(true); }}
                                                >
                                                    <ImPencil className="text-sm" />
                                                </div>
                                            </td>
                                        </tr>
                                    </>))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {
                isEditing.marking_rubric !== -1 && (
                    <Modal isOpen={showModal} onClose={() => handleCancel('marking_rubric')}>
                        <div className="mb-3">
                            <label className="mb-3 text-black text-sm font-semibold">Criteria</label>
                            <input
                                type="text"
                                value={tempData.marking_rubric[isEditing.marking_rubric].criteria}
                                onChange={(e) => handleRubricChange(isEditing.marking_rubric, 'criteria', e.target.value)}
                                className="border-gray-300 border rounded px-2 py-2 w-full"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="mb-3 text-black text-sm font-semibold">Weighting</label>
                            <input
                                type="text"
                                value={tempData.marking_rubric[isEditing.marking_rubric].weighting}
                                onChange={(e) => handleRubricChange(isEditing.marking_rubric, 'weighting', e.target.value)}
                                className="border-gray-300 border rounded px-2 py-2 w-full"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="mb-3 text-black text-sm font-semibold">Fail</label>
                            <input
                                type="text"
                                value={tempData.marking_rubric[isEditing.marking_rubric].fail}
                                onChange={(e) => handleRubricChange(isEditing.marking_rubric, 'fail', e.target.value)}
                                className="border-gray-300 border rounded px-2 py-2 w-full"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="mb-3 text-black text-sm font-semibold">Pass Grade</label>
                            <input
                                type="text"
                                value={tempData.marking_rubric[isEditing.marking_rubric].pass_grade}
                                onChange={(e) => handleRubricChange(isEditing.marking_rubric, 'pass_grade', e.target.value)}
                                className="border-gray-300 border rounded px-2 py-2 w-full"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="mb-3 text-black text-sm font-semibold">Credit</label>
                            <input
                                type="text"
                                value={tempData.marking_rubric[isEditing.marking_rubric].credit}
                                onChange={(e) => handleRubricChange(isEditing.marking_rubric, 'credit', e.target.value)}
                                className="border-gray-300 border rounded px-2 py-2 w-full"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="mb-3 text-black text-sm font-semibold">Distinction</label>
                            <input
                                type="text"
                                value={tempData.marking_rubric[isEditing.marking_rubric].distinction}
                                onChange={(e) => handleRubricChange(isEditing.marking_rubric, 'distinction', e.target.value)}
                                className="border-gray-300 border rounded px-2 py-2 w-full"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="mb-3 text-black text-sm font-semibold">High Distinction</label>
                            <input
                                type="text"
                                value={tempData.marking_rubric[isEditing.marking_rubric].high_distinction}
                                onChange={(e) => handleRubricChange(isEditing.marking_rubric, 'high_distinction', e.target.value)}
                                className="border-gray-300 border rounded px-2 py-2 w-full"
                            />
                        </div>
                        <div className="flex gap-3 mt-3 md:w-1/2 mx-auto">
                            <button
                                onClick={() => handleSave('marking_rubric', isEditing.marking_rubric)}
                                className="w-full text-center rounded-lg py-2 px-3 font-semibold text-sm bg-[#CBFFFE]"
                            >
                                Save
                            </button>
                            <button
                                onClick={() => { handleCancel('marking_rubric'); setIsEditing({ ...isEditing, marking_rubric: -1 }) }}
                                className="w-full text-center rounded-lg text-black py-2 px-3 font-semibold text-sm border border-black"
                            >
                                Cancel
                            </button>
                        </div>
                    </Modal>
                )
            }
            <div className="grid grid-cols-3 gap-1 md:gap-3 mt-5 justify-center md:w-1/4 mx-auto">
                <div onClick={() => tryAgain()} className="py-4 cursor-pointer flex justify-center items-center bg-white flex-col gap-1 border border-[#A9A9A9] rounded-lg">
                    <MdRefresh className="w-7 h-7 text-[#FF0000]" />
                    <p className="text-[#FF0000] text-center text-[13px]">Try Again</p>
                </div>
                <div className="py-4 cursor-pointer flex justify-center items-center bg-white flex-col gap-1 border border-[#A9A9A9] rounded-lg">
                    <IoSaveSharp className="w-7 h-7" />
                    <p className="text-[#666666] text-center text-[13px]">Save</p>
                </div>
                <div onClick={handlePrint} className="py-4 cursor-pointer flex justify-center items-center bg-white flex-col gap-1 border border-[#A9A9A9] rounded-lg">
                    <MdDownload className="w-7 h-7" />
                    <p className="text-[#666666] text-center text-[13px]">Download</p>
                </div>
            </div>
        </div>
        <PDF data={tempData} ref={componentRef} />
    </>);
}
