'use client'

import { ImPencil } from "react-icons/im";
import { MdRefresh, MdDownload, MdAdUnits, MdOutlineLineWeight } from "react-icons/md";
import { IoSaveSharp } from "react-icons/io5";
import { IoMdArrowBack } from "react-icons/io";
import { useState } from "react";
import { TiTick } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";
import { showToast } from "react-next-toast";
import Modal from "./Modal/Modal";

export default function EditAssessment({ data, back = () => { window.history.back(); }, tryAgain, downloadPdf }) {
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isEditing, setIsEditing] = useState({
        id: null,
        title_assessment: false,
        overview: false,
        methodology: false,
        assessment_unit: false,
        percentage_weighting: false,
        due_date: false,
        learningOutcomes: -1,
        marking_rubric: -1,
        assessment_description: -1,
        descriptionIndex: -1, // Added to track item index being edited
        sectionKey: null,
    });

    const [formData, setFormData] = useState({
        id: data?.id,
        title_assessment: data?.title_assessment || '',
        overview_and_rationale: data?.overview_and_rationale || '',
        methodology: data?.methodology || '',
        assessment_unit: data?.assessment_unit || '',
        percentage_weighting: data?.percentage_weighting || '',
        due_date: data?.due_date || '',
        assessment_description: data?.assessment_description || [],
        learning_outcome: data?.learning_outcome || [],
        marking_rubric: data?.marking_rubric || [],
    });

    const [tempData, setTempData] = useState({ ...formData });

    const handleEditClick = (field, sectionIndex = null, itemIndex = null, sectionKey = null) => {
        setShowModal(true);
        if (field === 'assessment_description') {
            setIsEditing({ ...isEditing, [field]: 0 });
        } else {
            setIsEditing({ ...isEditing, [field]: field === 'learningOutcomes' ? 0 : !isEditing[field] });
        }
        setTempData({ ...formData });
    };

    const handleChange = (e, field) => {
        setTempData({ ...tempData, [field]: e.target.value });
    };

    const handleLearningOutcomeChange = (e) => {
        const updatedLearningOutcomes = e.target.value.split('\n');
        setTempData({ ...tempData, learning_outcome: updatedLearningOutcomes });
    };

    const handleRubricChange = (index, field, value) => {
        const updatedRubric = [...tempData.marking_rubric];
        updatedRubric[index] = { ...updatedRubric[index], [field]: value };
        setTempData({ ...tempData, marking_rubric: updatedRubric });
    };

    const handleTextareaChange = (e) => {
        const lines = e.target.value.split('\n');
        let updatedDescription = [];
        let currentSection = {};
        let currentKey = "";

        lines.forEach(line => {
            if (line.trim() !== "") {
                if (!currentKey) {
                    currentKey = line.trim();
                    currentSection[currentKey] = [];
                } else {
                    currentSection[currentKey].push(line.trim());
                }
            } else {
                if (currentKey) {
                    updatedDescription.push(currentSection);
                    currentSection = {};
                    currentKey = "";
                }
            }
        });

        if (currentKey) {
            updatedDescription.push(currentSection);
        }

        setTempData({ ...tempData, assessment_description: updatedDescription });
    };

    const handleSave = async (field) => {
        if (field === 'learningOutcomes') {
            setFormData({ ...formData, learning_outcome: tempData.learning_outcome });
            setIsEditing({ ...isEditing, learningOutcomes: -1 });
        } else if (field === 'marking_rubric') {
            setFormData({ ...formData, marking_rubric: tempData.marking_rubric });
            setIsEditing({ ...isEditing, marking_rubric: -1 });
        } else if (field === 'assessment_description') {
            setFormData({ ...formData, assessment_description: tempData.assessment_description });
            setIsEditing({ ...isEditing, assessment_description: -1, descriptionIndex: -1 });
        } else {
            setFormData({ ...tempData });
            setIsEditing({ ...isEditing, [field]: false });
        }
        setLoading(true);
        try {
            const res = await fetch(`https://e4eap2uqdz.ap-southeast-2.awsapprunner.com/api/assessments/${formData.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
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
        setIsEditing({ ...isEditing, [field]: field === 'marking_rubric' || field === 'assessment_description' ? -1 : false, descriptionIndex: -1 });
    };
    return (<>
        <div onClick={() => back()}>
            <button className="flex items-center gap-2 bg-white rounded-md py-3 px-5 text-[#202123] font-semibold">
                <IoMdArrowBack className="w-5 h-5" /> Back
            </button>
        </div>
        <div className="my-7">
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
                                <h1 className="text-black text-3xl font-bold mb-3">
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
                <div className="p-4 bg-[#E8E9FC] rounded flex items-start gap-4 mt-4">
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
                                <div>
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
                <div className="p-4 bg-[#E8E9FC] rounded flex items-start gap-4 mt-4">
                    {
                        isEditing.methodology ? (
                            <Modal isOpen={showModal} onClose={() => handleCancel('methodology')}>
                                <div className="w-full">
                                    <h6 className="text-black font-bold text-[15px] leading-[26px]">
                                        Methodology:{" "}
                                    </h6>
                                    <textarea rows={5} className="border-gray-300 border rounded px-5 py-3 w-full"
                                        value={tempData.methodology}
                                        onChange={(e) => handleChange(e, 'methodology')} />
                                    <div className="flex gap-2 md:w-1/2 mx-auto mt-2">
                                        <button
                                            className="w-full text-center rounded-lg py-2 px-3 font-semibold text-sm bg-[#CBFFFE]"
                                            onClick={() => handleSave('methodology')}
                                        >
                                            Save
                                        </button>
                                        <button
                                            className="w-full text-center rounded-lg text-black py-2 px-3 font-semibold text-sm border border-black"
                                            onClick={() => handleCancel('methodology')}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </Modal>
                        ) : (
                            <>
                                <div>
                                    <h6 className="text-black font-bold text-[15px] leading-[26px]">
                                        Methodology:{" "}
                                    </h6>
                                    <p dangerouslySetInnerHTML={{ __html: formData?.methodology?.replace(/\n/g, '<br />') }} className="text-[#666666] font-normal text-[15px] leading-[26px]">
                                    </p>
                                </div>
                                <div className="w-[10%] flex justify-center">
                                    <div onClick={() => handleEditClick('methodology')} className="flex justify-center cursor-pointer items-center border border-black rounded-full w-10 h-10">
                                        <ImPencil className="text-sm" />
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
                <div className="p-4 bg-[#E8E9FC] rounded flex justify-between items-start gap-4 mt-4">
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
                                <div>
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
                <div className="p-4 bg-[#E8E9FC] rounded flex justify-between items-start gap-4 mt-4">
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
                                <div>
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
                <div className="p-4 bg-[#E8E9FC] rounded flex justify-between items-start gap-4 mt-4">
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
                                <div>
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
                        <h6 className="text-black font-bold text-[15px] leading-[26px] capitalize">
                            Assessment Description
                        </h6>
                        {
                            isEditing.assessment_description < 1 && (
                                <div className="w-[10%] flex justify-center">
                                    <div className="flex justify-center cursor-pointer items-center border border-black rounded-full w-10 h-10 ml-2"
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
                                <textarea
                                    value={tempData.assessment_description.map(section =>
                                        Object.keys(section).map(key =>
                                            [key, ...section[key]].join('\n')
                                        ).join('\n\n')
                                    ).join('\n\n')}
                                    onChange={(e) => handleTextareaChange(e)}
                                    className="w-full border border-gray-300 rounded px-2 py-1"
                                    rows="10"
                                />
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
                        <div>
                            <ul>
                                {formData.assessment_description.map((item, sectionIndex) => (
                                    <div key={sectionIndex}>
                                        {Object.keys(item).map((sectionKey) => (
                                            <div key={sectionKey} className="mb-1">
                                                <h6 className="text-[#666666] font-bold text-[15px] leading-[26px] capitalize">
                                                    {sectionKey.replace(/_/g, ' ')}
                                                </h6>
                                                <ul>
                                                    {
                                                        item[sectionKey].map((listItem, itemIndex) => (
                                                            <li key={`${sectionIndex}-${sectionKey}-${itemIndex}`} className="text-[#666666] font-normal text-[15px] leading-[26px] mb-1">
                                                                {listItem}
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                <div className="p-4 bg-[#E8E9FC] rounded mt-4">
                    <div className="flex items-start justify-between gap-4">
                        <h6 className="text-black font-bold text-[15px] leading-[26px]">
                            Learning Outcomes:
                        </h6>
                        {isEditing.learningOutcomes === -1 && (
                            <div className="flex justify-center cursor-pointer items-center border border-black rounded-full w-10 h-10 ml-2"
                                onClick={() => {setIsEditing({ ...isEditing, learningOutcomes: 0 }); setShowModal(true)}}
                            >
                                <ImPencil className="text-sm" />
                            </div>
                        )}
                    </div>
                    {isEditing.learningOutcomes !== -1 ? (
                        <Modal isOpen={showModal} onClose={() => handleCancel('learningOutcomes')}>
                            <div>
                                <textarea
                                    value={tempData.learning_outcome.join('\n')}
                                    onChange={handleLearningOutcomeChange}
                                    className="w-full border border-gray-300 rounded px-2 py-1"
                                    rows="10"
                                />
                                <div className="flex gap-3 mt-3">
                                    <button
                                        onClick={() => handleSave('learningOutcomes')}
                                        className="w-full text-center rounded-lg py-2 px-3 font-semibold text-sm bg-[#CBFFFE]"
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={() => handleCancel('learningOutcomes')}
                                        className="w-full text-center rounded-lg text-black py-2 px-3 font-semibold text-sm border border-black"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </Modal>
                    ) : (
                        <ul className="m-0 list-disc mt-3 pl-4">
                            {formData.learning_outcome.map((outcome, index) => (
                                <li key={index} className="text-[#666666] font-normal text-sm leading-[26px] mb-1">
                                    {outcome}
                                </li>
                            ))}
                        </ul>
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
                                        <th scope="col" className="py-3 px-1 md:px-3 w-32 font-normal md:font-semibold text-sm uppercase border border-[#A9A9A9]">
                                            Criteria
                                        </th>
                                        <th scope="col" className="py-3 px-1 md:px-3 w-24 font-normal md:font-semibold text-sm uppercase border border-[#A9A9A9]">
                                            Weighting
                                        </th>
                                        <th scope="col" className="py-3 px-1 md:px-3 w-20 font-normal md:font-semibold text-sm uppercase border border-[#A9A9A9]">
                                            Fail
                                        </th>
                                        <th scope="col" className="py-3 px-1 md:px-3 w-24 font-normal md:font-semibold text-sm uppercase border border-[#A9A9A9]">
                                            Pass Grade
                                        </th>
                                        <th scope="col" className="py-3 px-1 md:px-3 w-24 font-normal md:font-semibold text-sm uppercase border border-[#A9A9A9]">
                                            Credit
                                        </th>
                                        <th scope="col" className="py-3 px-1 md:px-3 w-24 font-normal md:font-semibold text-sm uppercase border border-[#A9A9A9]">
                                            Distinction
                                        </th>
                                        <th scope="col" className="py-3 px-1 md:px-3 w-24 font-normal md:font-semibold text-sm uppercase border border-[#A9A9A9]">
                                            High Distinction
                                        </th>
                                        <th scope="col" className="py-3 px-1 md:px-3 w-24 font-normal md:font-semibold text-sm uppercase border border-[#A9A9A9]">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {formData.marking_rubric.map((item, index) => (
                                        <tr key={index} className='bg-white'>
                                            <td className="py-3 px-1 md:px-3 font-normal md:font-semibold text-sm border border-[#A9A9A9]">
                                                {isEditing.marking_rubric === index ? (
                                                    <input
                                                        type="text"
                                                        value={tempData.marking_rubric[index].criteria}
                                                        onChange={(e) => handleRubricChange(index, 'criteria', e.target.value)}
                                                        className="rounded-md outline-none px-2 py-2 w-full"
                                                    />
                                                ) : (
                                                    item.criteria
                                                )}
                                            </td>
                                            <td className="py-3 px-1 md:px-3 font-normal text-xs text-[#666666] border border-[#A9A9A9]">
                                                {isEditing.marking_rubric === index ? (
                                                    <input
                                                        type="text"
                                                        value={tempData.marking_rubric[index].weighting}
                                                        onChange={(e) => handleRubricChange(index, 'weighting', e.target.value)}
                                                        className="rounded-md outline-none px-2 py-2 w-full"
                                                    />
                                                ) : (
                                                    item.weighting
                                                )}
                                            </td>
                                            <td className="py-3 px-1 md:px-3 font-normal text-xs text-[#666666] border border-[#A9A9A9]">
                                                {isEditing.marking_rubric === index ? (
                                                    <input
                                                        type="text"
                                                        value={tempData.marking_rubric[index].fail}
                                                        onChange={(e) => handleRubricChange(index, 'fail', e.target.value)}
                                                        className="rounded-md outline-none px-2 py-2 w-full"
                                                    />
                                                ) : (
                                                    item.fail
                                                )}
                                            </td>
                                            <td className="py-3 px-1 md:px-3 font-normal text-xs text-[#666666] border border-[#A9A9A9]">
                                                {isEditing.marking_rubric === index ? (
                                                    <input
                                                        type="text"
                                                        value={tempData.marking_rubric[index].pass_grade}
                                                        onChange={(e) => handleRubricChange(index, 'pass_grade', e.target.value)}
                                                        className="rounded-md outline-none px-2 py-2 w-full"
                                                    />
                                                ) : (
                                                    item.pass_grade
                                                )}
                                            </td>
                                            <td className="py-3 px-1 md:px-3 font-normal text-xs text-[#666666] border border-[#A9A9A9]">
                                                {isEditing.marking_rubric === index ? (
                                                    <input
                                                        type="text"
                                                        value={tempData.marking_rubric[index].credit}
                                                        onChange={(e) => handleRubricChange(index, 'credit', e.target.value)}
                                                        className="rounded-md outline-none px-2 py-2 w-full"
                                                    />
                                                ) : (
                                                    item.credit
                                                )}
                                            </td>
                                            <td className="py-3 px-1 md:px-3 font-normal text-xs text-[#666666] border border-[#A9A9A9]">
                                                {isEditing.marking_rubric === index ? (
                                                    <input
                                                        type="text"
                                                        value={tempData.marking_rubric[index].distinction}
                                                        onChange={(e) => handleRubricChange(index, 'distinction', e.target.value)}
                                                        className="rounded-md outline-none px-2 py-2 w-full"
                                                    />
                                                ) : (
                                                    item.distinction
                                                )}
                                            </td>
                                            <td className="py-3 px-1 md:px-3 font-normal text-xs text-[#666666] border border-[#A9A9A9]">
                                                {isEditing.marking_rubric === index ? (
                                                    <input
                                                        type="text"
                                                        value={tempData.marking_rubric[index].high_distinction}
                                                        onChange={(e) => handleRubricChange(index, 'high_distinction', e.target.value)}
                                                        className="rounded-md outline-none px-2 py-2 w-full"
                                                    />
                                                ) : (
                                                    item.high_distinction
                                                )}
                                            </td>
                                            <td className="py-3 px-1 md:px-3 font-normal text-xs text-[#666666] border border-[#A9A9A9]">
                                                {isEditing.marking_rubric === index ? (
                                                    <div className="flex gap-2">
                                                        <button
                                                            className="p-2 bg-green-500 text-white rounded"
                                                            onClick={() => handleSave('marking_rubric', index)}
                                                        >
                                                            <TiTick />
                                                        </button>
                                                        <button
                                                            className="p-2 bg-red-500 text-white rounded"
                                                            onClick={() => handleCancel('marking_rubric')}
                                                        >
                                                            <RxCross1 />
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <div
                                                        className="flex justify-center cursor-pointer items-center border border-black rounded-full w-10 h-10 ml-2"
                                                        onClick={() => setIsEditing({ ...isEditing, marking_rubric: index })}
                                                    >
                                                        <ImPencil className="text-sm" />
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-1 md:gap-3 mt-5 justify-center md:w-1/4 mx-auto">
                <div onClick={() => tryAgain()} className="py-4 cursor-pointer flex justify-center items-center bg-white flex-col gap-1 border border-[#A9A9A9] rounded-lg">
                    <MdRefresh className="w-7 h-7 text-[#FF0000]" />
                    <p className="text-[#FF0000] text-center text-[13px]">Try Again</p>
                </div>
                <div className="py-4 cursor-pointer flex justify-center items-center bg-white flex-col gap-1 border border-[#A9A9A9] rounded-lg">
                    <IoSaveSharp className="w-7 h-7" />
                    <p className="text-[#666666] text-center text-[13px]">Save</p>
                </div>
                <div onClick={() => downloadPdf()} className="py-4 cursor-pointer flex justify-center items-center bg-white flex-col gap-1 border border-[#A9A9A9] rounded-lg">
                    <MdDownload className="w-7 h-7" />
                    <p className="text-[#666666] text-center text-[13px]">Download</p>
                </div>
            </div>
        </div>
    </>);
}
