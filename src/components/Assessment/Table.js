'use client';

import Link from "next/link";
import DeleteAssessment from "./Delete";
import { useState } from "react";

export default function Table({ data = [] }) {
    // Client-side state for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Number of items per page

    // Calculate the index range for the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    // Handle page change
    const handleNextPage = () => {
        if (currentPage < Math.ceil(data.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    return (
        <>
            <div className="flex justify-between mt-6">
                <button className="flex gap-3 py-[10px] px-4 items-center bg-white text-[#344054] text-sm font-semibold rounded-lg border-[1px] border-[#D0D5DD]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g clipPath="url(#clip0_16_13075)">
                            <path d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z" fill="#323232" />
                        </g>
                        <defs>
                            <clipPath id="clip0_16_13075">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    More Filters
                </button>
                <div className="relative w-1/2 md:w-auto">
                    <svg className="absolute top-3 left-3" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="#667085" />
                    </svg>
                    <input placeholder="Search" type="text" className="rounded-lg w-full border-[1px] border-[#D0D5DD] py-[10px] pr-4 pl-10 outline-none" />
                </div>
            </div>
            <div className="mt-8">
                <div className="overflow-x-auto mx-w-full">
                    <table className="table-auto border-collapse overflow-auto md:w-full md:overflow-hidden border border-slate-300 rounded-tl-lg rounded-tr-lg">
                        <thead>
                            <tr>
                                <th className="border-b border-t border-slate-300 p-3 text-start bg-[#F9FAFB] text-[#475467] text-xs font-semibold">ID</th>
                                <th className="border-b border-t border-slate-300 p-3 text-start bg-[#F9FAFB] text-[#475467] text-xs font-semibold">Assessment Title</th>
                                <th className="border-b border-t border-slate-300 p-3 text-start bg-[#F9FAFB] text-[#475467] text-xs font-semibold">Year Level</th>
                                <th className="border-b border-t border-slate-300 p-3 text-start bg-[#F9FAFB] text-[#475467] text-xs font-semibold">Assessment Unit</th>
                                <th className="border-b border-t border-slate-300 p-3 text-start bg-[#F9FAFB] text-[#475467] text-xs font-semibold"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.length > 0 ? (
                                currentItems.map((assessment, index) => (
                                    <tr key={index}>
                                        <td className="border-b border-slate-300 bg-white p-3">
                                            <span className="block text-[#101828] text-sm font-normal">#{index + 1}</span>
                                        </td>
                                        <td className="border-b border-slate-300 bg-white p-3 text-sm font-medium text-[#101828]">
                                            {assessment.title_assessment}
                                        </td>
                                        <td className="border-b border-slate-300 bg-white p-3">
                                            <span className="block text-[#101828] text-sm">{assessment.year_level}</span>
                                        </td>
                                        <td className="border-b border-slate-300 bg-white p-3 min-w-36">
                                            {assessment.assessment_unit}
                                        </td>
                                        <td className="border-b border-slate-300 bg-white p-3">
                                            <div className="flex gap-2 justify-center">
                                                <DeleteAssessment shardId={assessment.shardId} id={assessment.id} />
                                                <Link href={`/assessment/${assessment.id}?shardId=${assessment.shardId}`}>
                                                    <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <g clipPath="url(#clip0_16_14087)">
                                                            <path d="M14.06 9.02L14.98 9.94L5.92 19H5V18.08L14.06 9.02ZM17.66 3C17.41 3 17.15 3.1 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C18.17 3.09 17.92 3 17.66 3ZM14.06 6.19L3 17.25V21H6.75L17.81 9.94L14.06 6.19Z" fill="#323232" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_16_14087">
                                                                <rect width="24" height="24" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td className="border-b border-slate-300 bg-white p-3" colSpan="5">
                                        <span className="block text-[#101828] text-sm font-normal text-center">No data found</span>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-between items-center p-3 border border-slate-300 bg-white rounded-bl-lg rounded-br-lg">
                    <button onClick={handlePreviousPage} disabled={currentPage === 1} className={`border border-[#D0D5DD] rounded-lg py-2 px-3 ${currentPage === 1 ? 'text-[#666]' : 'text-[#344054]'} font-semibold text-sm`}>Previous</button>
                    <span className="text-[#344054] text-sm font-medium">Page {currentPage} of {Math.ceil(data.length / itemsPerPage)}</span>
                    <button onClick={handleNextPage} disabled={currentPage === Math.ceil(data.length / itemsPerPage)} className={`border border-[#D0D5DD] rounded-lg py-2 px-3 ${currentPage === Math.ceil(data.length / itemsPerPage) ? 'text-[#666]' : 'text-[#344054]'} font-semibold text-sm`}>Next</button>
                </div>
            </div>
        </>
    );
}
