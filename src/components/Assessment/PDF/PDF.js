'use client'

import { forwardRef } from "react";
import './pdf.css'

const PDF = forwardRef((props, ref) => {
    return (
        <div id="container" ref={ref} className="w-full edit-container bg-white container-pdf rounded-[10px] border border-[#A9A9A9] mt-5 hidden">
            <div className="p-8">
                <h1 className="text-black text-3xl font-bold mb-3">
                    {props?.data?.title_assessment}
                </h1>
            </div>
            <div className="m-0 h-[1px] bg-[#A9A9A9]"></div>
            <div className="px-8 py-6">
                <h6 className="text-black font-bold text-[15px] leading-[26px] mb-2">
                    Overview And Rationale:{" "}
                </h6>
                <p className="text-[#666666] font-normal text-[15px] leading-[26px]">
                    {props?.data?.overview_and_rationale}
                </p>
            </div>
            <div className="m-0 h-[1px] bg-[#A9A9A9]"></div>
            <div className="px-8 py-6">
                <h6 className="text-black font-bold text-[15px] leading-[26px]">
                    Assessment Unit:{" "}
                </h6>
                <p className="text-[#666666] font-normal text-[15px] leading-[26px] mb-3">
                    {props?.data?.assessment_unit}
                </p>
            </div>
            <div className="m-0 h-[1px] bg-[#A9A9A9]"></div>
            <div className="px-8 py-6">
                <h6 className="text-black font-bold text-[15px] leading-[26px]">
                    Weighting:{" "}
                </h6>
                <p className="text-[#666666] font-normal text-[15px] leading-[26px] mb-3">
                    {props?.data?.percentage_weighting}
                </p>
            </div>
            <div className="m-0 h-[1px] bg-[#A9A9A9]"></div>
            <div className="px-8 py-6">
                <h6 className="text-black font-bold text-[15px] leading-[26px]">
                    Due Date:{" "}
                </h6>
                <p className="text-[#666666] font-normal text-[15px] leading-[26px] mb-3">
                    {props?.data?.due_date}
                </p>
            </div>
            <div className="m-0 h-[1px] bg-[#A9A9A9]"></div>
            <div className="px-8 py-6">
                <h6 className="text-black font-bold text-[15px] leading-[26px]">
                    Assessment Description:{" "}
                </h6>
                <div className="assessment-description pl-4" dangerouslySetInnerHTML={{ __html: props?.data?.assessment_description }}></div>
            </div>
            <div className="m-0 h-[1px] bg-[#A9A9A9]"></div>
            <div className="px-8 py-6">
                <h6 className="text-black font-bold text-[15px] leading-[26px]">
                    Submission Requirements
                </h6>
                <div className="pl-4" dangerouslySetInnerHTML={{ __html: props?.data?.submission_requirements }}></div>
            </div>
            <div className="m-0 h-[1px] bg-[#A9A9A9]"></div>
            <div className="w-full py-8 px-4">
                <h6 className="text-black font-bold text-[15px] leading-[26px] mb-2">
                    Marking Rubric:{" "}
                </h6>
                <div className="overflow-x-auto">
                    <div className="min-w-full">
                        <table className="w-full min-w-max  table-fixed">
                            <thead>
                                <tr>
                                    <th scope="col" className="py-3 px-1 md:px-1 w-32 font-normal md:font-semibold text-sm uppercase border border-[#A9A9A9]">
                                        Criteria
                                    </th>
                                    <th scope="col" className="py-3 px-1 md:px-1 w-24 font-normal md:font-semibold text-sm uppercase border border-[#A9A9A9]">
                                        Weighting
                                    </th>
                                    <th scope="col" className="py-3 px-1 md:px-1 w-20 font-normal md:font-semibold text-sm uppercase border border-[#A9A9A9]">
                                        Fail
                                    </th>
                                    <th scope="col" className="py-3 px-1 md:px-1 w-24 font-normal md:font-semibold text-sm uppercase border border-[#A9A9A9]">
                                        Pass Grade
                                    </th>
                                    <th scope="col" className="py-3 px-1 md:px-1 w-24 font-normal md:font-semibold text-sm uppercase border border-[#A9A9A9]">
                                        Credit
                                    </th>
                                    <th scope="col" className="py-3 px-1 md:px-1 w-24 font-normal md:font-semibold text-sm uppercase border border-[#A9A9A9]">
                                        Distinction
                                    </th>
                                    <th scope="col" className="py-3 px-1 md:px-1 w-24 font-normal md:font-semibold text-sm uppercase border border-[#A9A9A9]">
                                        High Distinction
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="">
                                {props?.data?.marking_rubric.map((item, index) => (
                                    <tr key={index} className='bg-white'>
                                        <td className="py-3 px-1 md:px-1 font-normal md:font-semibold text-sm border border-[#A9A9A9]">
                                            {item.criteria}
                                        </td>
                                        <td className="py-3 px-1 md:px-1 font-normal text-xs text-[#666666] border border-[#A9A9A9]">
                                            {item.weighting}
                                        </td>
                                        <td className="py-3 px-1 md:px-1 font-normal text-xs text-[#666666] border border-[#A9A9A9]">
                                            {item.fail}
                                        </td>
                                        <td className="py-3 px-1 md:px-1 font-normal text-xs text-[#666666] border border-[#A9A9A9]">
                                            {item.pass_grade}
                                        </td>
                                        <td className="py-3 px-1 md:px-1 font-normal text-xs text-[#666666] border border-[#A9A9A9]">
                                            {item.credit}
                                        </td>
                                        <td className="py-3 px-1 md:px-1 font-normal text-xs text-[#666666] border border-[#A9A9A9]">
                                            {item.distinction}
                                        </td>
                                        <td className="py-3 px-1 md:px-1 font-normal text-xs text-[#666666] border border-[#A9A9A9]">
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
    );
})

export default PDF;
