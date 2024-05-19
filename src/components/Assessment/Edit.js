'use client'

import { ImPencil } from "react-icons/im";
import { MdRefresh, MdDownload } from "react-icons/md";
import { IoSaveSharp } from "react-icons/io5";
import { IoMdArrowBack } from "react-icons/io";

export default function EditAssessment({ data, back, tryAgain, downloadPdf }) {
    return (<>
        <div onClick={() => back()}>
            <button className="flex items-center gap-2 bg-white rounded-md py-3 px-5 text-[#202123] font-semibold">
                <IoMdArrowBack className="w-5 h-5" /> Back
            </button>
        </div>
        <div className="my-7">
            <h1 className="text-black text-3xl font-bold leading-[50px] mb-3 mx-auto md:w-3/5">
                {data?.title_assessment}
            </h1>
            <div className="md:w-3/5 mx-auto bg-white rounded-[10px] border border-[#A9A9A9] p-7">
                <div className="p-4 bg-[#E8E9FC] rounded flex items-start gap-4">
                    <p className="text-[#666666] font-normal text-[15px] leading-[26px]">
                        {data?.overview_and_rationale}
                    </p>
                    <div className="w-[10%]">
                        <div className="flex justify-center cursor-pointer items-center border border-black rounded-full w-10 h-10">
                            <ImPencil className="text-sm" />
                        </div>
                    </div>
                </div>
                <div className="p-4 bg-[#E8E9FC] rounded flex items-start gap-4 mt-4">
                    <p className="text-[#666666] font-normal text-[15px] leading-[26px]">
                        {data?.methodology}
                    </p>
                    <div className="w-[10%]">
                        <div className="flex justify-center cursor-pointer items-center border border-black rounded-full w-10 h-10">
                            <ImPencil className="text-sm" />
                        </div>
                    </div>
                </div>
                <div className="p-4 bg-[#E8E9FC] rounded flex items-start gap-4 mt-4">
                    <div>
                        <h6 className="text-black font-bold text-[15px] leading-[26px]">
                            Subject:{" "}
                        </h6>
                        <p className="text-[#666666] font-normal text-[15px] leading-[26px] mb-3">
                            {data?.assessment_unit}
                        </p>
                        <h6 className="text-black font-bold text-[15px] leading-[26px]">
                            Weight:{" "}
                        </h6>
                        <p className="text-[#666666] font-normal text-[15px] leading-[26px] mb-3">
                            {data?.percentage_weighting}
                        </p>
                        <h6 className="text-black font-bold text-[15px] leading-[26px]">
                            Due Date:{" "}
                        </h6>
                        <p className="text-[#666666] font-normal text-[15px] leading-[26px] mb-3">
                            {data?.due_date}
                        </p>
                        <h6 className="text-black font-bold text-[15px] leading-[26px]">
                            Description:{" "}
                        </h6>
                        <p className="text-[#666666] font-normal text-[15px] leading-[26px]">
                            {data?.assessment_description}
                        </p>
                    </div>
                    <div className="w-[10%]">
                        <div className="flex justify-center cursor-pointer items-center border border-black rounded-full w-10 h-10">
                            <ImPencil className="text-sm" />
                        </div>
                    </div>
                </div>
                <div className="p-4 bg-[#E8E9FC] rounded mt-4">
                    <div className="flex items-start justify-between gap-4">
                        <h6 className="text-black font-bold text-[15px] leading-[26px]">
                            Learning Outcome:{" "}
                        </h6>
                        <div className="w-[10%]">
                            <div className="flex justify-center cursor-pointer items-center border border-black rounded-full w-10 h-10">
                                <ImPencil className="text-sm" />
                            </div>
                        </div>
                    </div>
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
                <div className="w-full py-8 px-4">
                    <div className="overflow-x-auto">
                        <div className="min-w-full">
                            <table className="w-full min-w-max  table-fixed">
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
                                    </tr>
                                </thead>
                                <tbody className="">
                                    {data?.marking_rubric.map((item, index) => (
                                        <tr key={index} className='bg-white'>
                                            <td className="py-3 px-1 md:px-3 font-normal md:font-semibold text-sm border border-[#A9A9A9]">
                                                {item.criteria}
                                            </td>
                                            <td className="py-3 px-1 md:px-3 font-normal text-xs text-[#666666] border border-[#A9A9A9]">
                                                {item.weighting}
                                            </td>
                                            <td className="py-3 px-1 md:px-3 font-normal text-xs text-[#666666] border border-[#A9A9A9]">
                                                {item.fail}
                                            </td>
                                            <td className="py-3 px-1 md:px-3 font-normal text-xs text-[#666666] border border-[#A9A9A9]">
                                                {item.pass_grade}
                                            </td>
                                            <td className="py-3 px-1 md:px-3 font-normal text-xs text-[#666666] border border-[#A9A9A9]">
                                                {item.credit}
                                            </td>
                                            <td className="py-3 px-1 md:px-3 font-normal text-xs text-[#666666] border border-[#A9A9A9]">
                                                {item.distinction}
                                            </td>
                                            <td className="py-3 px-1 md:px-3 font-normal text-xs text-[#666666] border border-[#A9A9A9]">
                                                {item.high_distinction}
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
                <div onClick={()=> tryAgain()} className="py-4 cursor-pointer flex justify-center items-center bg-white flex-col gap-1 border border-[#A9A9A9] rounded-lg">
                    <MdRefresh className="w-7 h-7 text-[#FF0000]" />
                    <p className="text-[#FF0000] text-center text-[13px]">Try Again</p>
                </div>
                <div className="py-4 cursor-pointer flex justify-center items-center bg-white flex-col gap-1 border border-[#A9A9A9] rounded-lg">
                    <IoSaveSharp className="w-7 h-7" />
                    <p className="text-[#666666] text-center text-[13px]">Save</p>
                </div>
                <div onClick={()=> downloadPdf()} className="py-4 cursor-pointer flex justify-center items-center bg-white flex-col gap-1 border border-[#A9A9A9] rounded-lg">
                    <MdDownload className="w-7 h-7" />
                    <p className="text-[#666666] text-center text-[13px]">Download</p>
                </div>
            </div>
        </div>
    </>);
}
