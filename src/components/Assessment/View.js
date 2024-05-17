'use client'

import Link from "next/link";
import { ImPencil } from "react-icons/im";
import { BiSolidLike, BiSolidDislike, BiSolidPencil } from "react-icons/bi";
import { MdRefresh, MdDownload } from "react-icons/md";
import { IoSaveSharp } from "react-icons/io5";
import { IoMdArrowBack } from "react-icons/io";
import generatePDF, { Resolution, Margin } from "react-to-pdf";

export default function ViewAssessment({ data, setConvertResponse, tryAgain, type }) {
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
                windowWidth: 1500,
            }
        }
    };
    const getTargetElement = () => document.getElementById("container");
    const downloadPdf = () => {
        generatePDF(getTargetElement, options)
    };
    return (
        <>
            <div className="flex justify-between items-center md:flex-row flex-col gap-5 my-4">
                <div onClick={()=> setConvertResponse()}>
                    <button className="flex items-center gap-2 bg-white rounded-md py-3 px-5 text-[#202123] font-semibold">
                        <IoMdArrowBack className="w-5 h-5" /> Back
                    </button>
                </div>
                <Link href='/admin/assessment/edit'>
                    <button className="flex items-center gap-2 bg-white rounded-md py-3 px-7 text-[#202123] font-semibold">
                        <ImPencil className="w-4 h-4" /> Edit
                    </button>
                </Link>
            </div>
            <div id="container" className="mx-auto md:w-3/5 bg-white rounded-[10px] border border-[#A9A9A9] mt-5">
                <div className="p-8">
                    <h1 className="text-black text-3xl font-bold leading-[50px] mb-3">
                        {data?.title_assessment}
                    </h1>
                    <p className="text-[#666666] font-normal text-[15px] leading-[26px]">
                        {data?.overview_and_rationale}
                    </p>
                </div>
                <div className="m-0 h-[1px] bg-[#A9A9A9]"></div>
                <div className="p-8">
                    <p className="text-[#666666] font-normal text-[15px] leading-[26px]">
                        {data?.methodology}
                    </p>
                </div>
                <div className="m-0 h-[1px] bg-[#A9A9A9]"></div>
                <div className="p-8">
                    <h6 className="text-[#666666] font-bold text-[15px] leading-[26px]">
                        Subject:{" "}
                    </h6>
                    <p className="text-[#666666] font-normal text-[15px] leading-[26px] mb-3">
                        {data?.assessment_unit}
                    </p>
                    <h6 className="text-[#666666] font-bold text-[15px] leading-[26px]">
                        Weight:{" "}
                    </h6>
                    <p className="text-[#666666] font-normal text-[15px] leading-[26px] mb-3">
                        {data?.percentage_weighting}
                    </p>
                    <h6 className="text-[#666666] font-bold text-[15px] leading-[26px]">
                        Due Date:{" "}
                    </h6>
                    <p className="text-[#666666] font-normal text-[15px] leading-[26px] mb-3">
                        {data?.due_date}
                    </p>
                    <h6 className="text-[#666666] font-bold text-[15px] leading-[26px]">
                        Description:{" "}
                    </h6>
                    <p className="text-[#666666] font-normal text-[15px] leading-[26px] mb-3">
                        {data?.assessment_description}
                    </p>
                    <h6 className="text-[#666666] font-bold text-[15px] leading-[26px]">
                        Learning Outcomes
                    </h6>
                    <ul className="m-0 list-disc">
                        {
                            data?.learning_outcome.map((outcome, index) => (
                                <li key={index} className="text-[#666666] font-normal text-sm leading-[26px]">
                                    {outcome}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="m-0 h-[1px] bg-[#A9A9A9]"></div>
                <div className="w-full py-8 px-4">
                    <div className="overflow-x-auto">
                        <div className="min-w-full">
                            <table className="w-full min-w-max  table-fixed">
                                <thead>
                                    <tr>
                                        <th scope="col" className="py-3 px-1 md:px-3 w-32 font-semibold text-xl text-center uppercase border border-[#A9A9A9]">

                                        </th>
                                        <th scope="col" className="py-3 px-1 md:px-3 w-24 font-semibold text-xl text-center uppercase border border-[#A9A9A9]">
                                            1
                                        </th>
                                        <th scope="col" className="py-3 px-1 md:px-3 w-20 font-semibold text-xl text-center uppercase border border-[#A9A9A9]">
                                            2
                                        </th>
                                        <th scope="col" className="py-3 px-1 md:px-3 w-24 font-semibold text-xl text-center uppercase border border-[#A9A9A9]">
                                            3
                                        </th>
                                        <th scope="col" className="py-3 px-1 md:px-3 w-24 font-semibold text-xl text-center uppercase border border-[#A9A9A9]">
                                            4
                                        </th>
                                        <th scope="col" className="py-3 px-1 md:px-3 w-24 font-semibold text-xl text-center uppercase border border-[#A9A9A9]">
                                            5
                                        </th>
                                        <th scope="col" className="py-3 px-1 md:px-3 w-24 font-semibold text-xl text-center uppercase border border-[#A9A9A9]">
                                            6
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    {data?.marking_rubric.map((item, index) => (
                                        <tr key={index} className='bg-white'>
                                            <td className="py-3 px-1 md:px-3 font-normal md:font-semibold text-base border border-[#A9A9A9]">
                                                {item.criteria}
                                            </td>
                                            <td className="py-3 px-1 md:px-3 font-normal text-xs text-[#666666] border border-[#A9A9A9]">
                                                {item.credit}
                                            </td>
                                            <td className="py-3 px-1 md:px-3 font-normal text-xs text-[#666666] border border-[#A9A9A9]">
                                                {item.weighting}
                                            </td>
                                            <td className="py-3 px-1 md:px-3 font-normal text-xs text-[#666666] border border-[#A9A9A9]">
                                                {item.distinction}
                                            </td>
                                            <td className="py-3 px-1 md:px-3 font-normal text-xs text-[#666666] border border-[#A9A9A9]">
                                                {item.high_distinction}
                                            </td>
                                            <td className="py-3 px-1 md:px-3 font-normal text-xs text-[#666666] border border-[#A9A9A9]">
                                                {item.fail}
                                            </td>
                                            <td className="py-3 px-1 md:px-3 font-normal text-xs text-[#666666] border border-[#A9A9A9]">
                                                {item.pass_grade}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-6 gap-1 md:gap-3 mt-5 md:w-1/2 mx-auto">
                <div className="py-4 cursor-pointer flex justify-center items-center bg-white flex-col gap-1 border border-[#A9A9A9] rounded-lg">
                    <BiSolidLike className="w-7 h-7" />
                    <p className="text-[#666666] text-center text-[13px]">Like</p>
                </div>
                <div className="py-4 cursor-pointer flex justify-center items-center bg-white flex-col gap-1 border border-[#A9A9A9] rounded-lg">
                    <BiSolidDislike className="w-7 h-7" />
                    <p className="text-[#666666] text-center text-[13px]">Unlike</p>
                </div>
                <div onClick={()=> tryAgain(type)} className="py-4 cursor-pointer flex justify-center items-center bg-white flex-col gap-1 border border-[#A9A9A9] rounded-lg">
                    <MdRefresh className="w-7 h-7 text-[#FF0000]" />
                    <p className="text-[#FF0000] text-center text-[13px]">Try Again</p>
                </div>
                <div className="py-4 cursor-pointer flex justify-center items-center bg-white flex-col gap-1 border border-[#A9A9A9] rounded-lg">
                    <IoSaveSharp className="w-7 h-7" />
                    <p className="text-[#666666] text-center text-[13px]">Save</p>
                </div>
                <Link href='/admin/assessment/edit' className="py-4 cursor-pointer flex justify-center items-center bg-white flex-col gap-1 border border-[#A9A9A9] rounded-lg">
                    <BiSolidPencil className="w-7 h-7" />
                    <p className="text-[#666666] text-center text-[13px]">Edit</p>
                </Link>
                <div onClick={()=> downloadPdf()} className="py-4 cursor-pointer flex justify-center items-center bg-white flex-col gap-1 border border-[#A9A9A9] rounded-lg">
                    <MdDownload className="w-7 h-7" />
                    <p className="text-[#666666] text-center text-[13px]">Download</p>
                </div>
            </div>
        </>
    );
}
