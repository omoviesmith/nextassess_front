'use client'

import Link from "next/link";
import { ImPencil } from "react-icons/im";
import { IoMdArrowBack } from "react-icons/io";
import { useRouter } from 'next/navigation'
import { BiSolidLike, BiSolidDislike, BiSolidPencil } from "react-icons/bi";
import { MdRefresh, MdDownload } from "react-icons/md";
import { IoSaveSharp } from "react-icons/io5";

export default function ViewAssessment({ data }) {
    const router = useRouter();
    // const responseData = {
    //     "assessment_description": "This assessment requires students to solve complex problems using discrete mathematics concepts learned in DMTH137. Students will analyze given scenarios, apply appropriate mathematical theories, and provide detailed solutions and justifications. The problems will include real-world applications, ensuring students can translate theoretical knowledge into practical solutions.",
    //     "assessment_unit": "DMTH137 Discrete Mathematics I",
    //     "due_date": "01/11/2023",
    //     "learning_outcome": [
    //         "Apply discrete mathematics theories to analyze and solve real-world problems.",
    //         "Develop critical thinking and problem-solving skills.",
    //         "Communicate mathematical concepts and solutions effectively."
    //     ],
    //     "marking_rubric": [
    //         {
    //             "credit": "Good understanding and application of discrete mathematics concepts.",
    //             "criteria": "Understanding of Concepts",
    //             "distinction": "Very good understanding, application, and integration of concepts in problem-solving.",
    //             "fail": "Shows minimal understanding of the key discrete mathematics concepts.",
    //             "high_distinction": "Excellent, insightful understanding and innovative application of discrete mathematics concepts.",
    //             "pass_grade": "Demonstrates adequate understanding of the concepts.",
    //             "weighting": "30%"
    //         },
    //         {
    //             "credit": "Solid analysis and correct problem-solving approaches.",
    //             "criteria": "Analysis and Problem Solving",
    //             "distinction": "Comprehensive and detailed analysis with advanced problem-solving.",
    //             "fail": "Analysis is superficial with major errors in problem-solving.",
    //             "high_distinction": "Exceptional analysis and creative, effective problem-solving.",
    //             "pass_grade": "Basic analysis with some correct problem-solving approaches.",
    //             "weighting": "40%"
    //         },
    //         {
    //             "credit": "Provides clear and logical justifications for solutions.",
    //             "criteria": "Justification and Reasoning",
    //             "distinction": "Strong, detailed justifications and well-reasoned arguments.",
    //             "fail": "Provides little to no justification for solutions.",
    //             "high_distinction": "Outstanding, insightful justifications and sophisticated reasoning.",
    //             "pass_grade": "Some justification provided, though it may lack depth.",
    //             "weighting": "20%"
    //         },
    //         {
    //             "credit": "Well-organized report, clear and easy to follow.",
    //             "criteria": "Presentation and Clarity",
    //             "distinction": "Very well-organized, excellent clarity and presentation.",
    //             "fail": "Report is poorly organized and difficult to understand.",
    //             "high_distinction": "Exceptionally well-presented, impeccable clarity and professional quality.",
    //             "pass_grade": "Report is organized with minor clarity issues.",
    //             "weighting": "10%"
    //         }
    //     ],
    //     "methodology": "d. Case study analysis and recommendations\n1. Review the provided case study, focusing on the discrete mathematics concepts discussed in the course.\n2. Identify the key problems or challenges presented in the case study.\n3. Apply relevant mathematical theories and methods to analyze the problems.\n4. Develop a set of recommendations or solutions based on your analysis.\n5. Justify your solutions with detailed mathematical reasoning and evidence from the course materials.\n6. Prepare a report presenting your analysis, solutions, and justifications clearly and concisely.",
    //     "overview_and_rationale": "This assessment is designed to evaluate students' understanding and application of discrete mathematics concepts in real-world scenarios, ensuring they develop critical thinking and problem-solving skills. By focusing on applied problem-solving and analysis, this assessment aligns with the learning outcomes of DMTH137, emphasizing the practical application of mathematical theories. The assessment is structured to be resistant to generative AI by requiring personalized responses and demonstrations of the problem-solving process, ensuring that students engage deeply with the material and develop skills that are essential in the workforce.",
    //     "percentage_weighting": "30%",
    //     "title_assessment": "DMTH137 Discrete Mathematics I: Applied Problem Solving and Analysis",
    //     "year_level": "First Year (AQF Level 7)"
    // }
    return (
        <>
            <div className="flex justify-end items-center md:flex-row flex-col gap-5 my-4">
                <Link href='/admin/assessment/edit'>
                    <button className="flex items-center gap-2 bg-white rounded-md py-3 px-7 text-[#202123] font-semibold">
                        <ImPencil className="w-4 h-4" /> Edit
                    </button>
                </Link>
            </div>
            <div className="md:w-1/2 mx-auto bg-white rounded-[10px] border border-[#A9A9A9] mt-5">
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
                <div className="py-4 cursor-pointer flex justify-center items-center bg-white flex-col gap-1 border border-[#A9A9A9] rounded-lg">
                    <MdRefresh className="w-7 h-7 text-[#FF0000]" />
                    <p className="text-[#FF0000] text-center text-[13px]">Try Again</p>
                </div>
                <div className="py-4 cursor-pointer flex justify-center items-center bg-white flex-col gap-1 border border-[#A9A9A9] rounded-lg">
                    <IoSaveSharp className="w-7 h-7" />
                    <p className="text-[#666666] text-center text-[13px]">Save</p>
                </div>
                <div className="py-4 cursor-pointer flex justify-center items-center bg-white flex-col gap-1 border border-[#A9A9A9] rounded-lg">
                    <BiSolidPencil className="w-7 h-7" />
                    <p className="text-[#666666] text-center text-[13px]">Edit</p>
                </div>
                <div className="py-4 cursor-pointer flex justify-center items-center bg-white flex-col gap-1 border border-[#A9A9A9] rounded-lg">
                    <MdDownload className="w-7 h-7" />
                    <p className="text-[#666666] text-center text-[13px]">Download</p>
                </div>
            </div>
        </>
    );
}
