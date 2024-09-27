// // components/Assessment/Table.js
// 'use client';

// import React, { useState, useMemo } from "react";
// import PropTypes from 'prop-types';
// import SearchBar from "./SearchBar";
// import FiltersButton from "./FilterButton";
// import AssessmentsTable from "./AssessmentsTable";
// import Pagination from "./Pagination";

// const Table = React.memo(({ assessments, pagination }) => {
//   const { current_page, items_per_page, total_items } = pagination;
//   const total_pages = Math.ceil(total_items / items_per_page);

//   const [searchQuery, setSearchQuery] = useState('');

//   const filteredAssessments = useMemo(() => {
//     if (!searchQuery) return assessments;
//     const lowerCaseQuery = searchQuery.toLowerCase();
//     return assessments.filter(assessment =>
//       assessment.title_assessment.toLowerCase().includes(lowerCaseQuery) ||
//       assessment.year_level.toLowerCase().includes(lowerCaseQuery) ||
//       (assessment.assessment_unit || '').toLowerCase().includes(lowerCaseQuery)
//     );
//   }, [assessments, searchQuery]);

//   return (
//     <>
//       <div className="flex justify-between mt-6">
//         <FiltersButton />
//         <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
//       </div>
//       <div className="mt-8">
//         <AssessmentsTable assessments={filteredAssessments} />
//         <Pagination currentPage={current_page} totalPages={total_pages} itemsPerPage={items_per_page} />
//       </div>
//     </>
//   );
// });

// Table.propTypes = {
//   assessments: PropTypes.array.isRequired,
//   pagination: PropTypes.shape({
//     current_page: PropTypes.number.isRequired,
//     items_per_page: PropTypes.number.isRequired,
//     total_items: PropTypes.number.isRequired,
//   }).isRequired,
// };

// export default Table;

// components/Assessment/Table.js  latest copy
// 'use client';

// import React, { useState, useMemo } from "react";
// import PropTypes from 'prop-types';
// import SearchBar from "./SearchBar";
// import FiltersButton from "./FiltersButton";
// import AssessmentsTable from "./AssessmentsTable";
// import Pagination from "./Pagination";

// const Table = React.memo(({ assessments, pagination }) => {
//   const { current_page, items_per_page, total_items } = pagination;
//   const total_pages = Math.ceil(total_items / items_per_page);

//   const [searchQuery, setSearchQuery] = useState('');

//   const filteredAssessments = useMemo(() => {
//     if (!searchQuery) return assessments;
//     const lowerCaseQuery = searchQuery.toLowerCase();
//     return assessments.filter(assessment =>
//       assessment.title_assessment.toLowerCase().includes(lowerCaseQuery) ||
//       assessment.year_level.toLowerCase().includes(lowerCaseQuery) ||
//       (assessment.assessment_unit || '').toLowerCase().includes(lowerCaseQuery)
//     );
//   }, [assessments, searchQuery]);

//   return (
//     <>
//       <div className="flex justify-between mt-6">
//         <FiltersButton />
//         <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
//       </div>
//       <div className="mt-8">
//         <AssessmentsTable assessments={filteredAssessments} />
//         <Pagination currentPage={current_page} totalPages={total_pages} itemsPerPage={items_per_page} />
//       </div>
//     </>
//   );
// });

// Table.propTypes = {
//   assessments: PropTypes.array.isRequired,
//   pagination: PropTypes.shape({
//     current_page: PropTypes.number.isRequired,
//     items_per_page: PropTypes.number.isRequired,
//     total_items: PropTypes.number.isRequired,
//   }).isRequired,
// };

// export default Table;

// // Table.js (with debouncing)
// 'use client';

// import React, { useState, useMemo, useEffect } from "react";
// import useAssessmentStore from '@/stores/assessmentStore';
// import SearchBar from "./SearchBar";
// import FiltersButton from "./FiltersButton";
// import AssessmentsTable from "./AssessmentsTable";

// export default function Table() {
//     const assessments = useAssessmentStore((state) => state.assessments);
//     const [searchInput, setSearchInput] = useState('');
//     const [searchQuery, setSearchQuery] = useState('');

//     useEffect(() => {
//         const handler = setTimeout(() => {
//             setSearchQuery(searchInput);
//         }, 300); // Adjust the delay as needed

//         return () => {
//             clearTimeout(handler);
//         };
//     }, [searchInput]);

//     const filteredAssessments = useMemo(() => {
//         if (!searchQuery) return assessments;
//         const lowerCaseQuery = searchQuery.toLowerCase();
//         return assessments.filter(assessment =>
//             assessment.title_assessment.toLowerCase().includes(lowerCaseQuery) ||
//             assessment.year_level.toLowerCase().includes(lowerCaseQuery) ||
//             (assessment.assessment_unit || '').toLowerCase().includes(lowerCaseQuery)
//         );
//     }, [assessments, searchQuery]);

//     return (
//         <>
//             <div className="flex justify-between mt-6">
//                 <FiltersButton />
//                 <SearchBar searchQuery={searchInput} setSearchQuery={setSearchInput} />
//             </div>
//             <div className="mt-8">
//                 <AssessmentsTable assessments={filteredAssessments} />
//             </div>
//         </>
//     );
// }

// 'use client';

// import Link from "next/link";
// import DeleteAssessment from "./Delete";
// import { useEffect, useState, useMemo } from "react";
// import useAssessmentStore from '@/stores/assessmentStore';
// import AssessmentsTable from "./AssessmentsTable";
// import SearchBar from "./SearchBar";
// import FiltersButton from "./FiltersButton";

// export default function Table() {
//     // const assessments = useAssessmentStore((state) => state.assessments);
//     // const [searchQuery, setSearchQuery] = useState('');
//     const assessments = useAssessmentStore((state) => state.assessments);
//     const [searchInput, setSearchInput] = useState('');
//     const [searchQuery, setSearchQuery] = useState('');

//     useEffect(() => {
//         const handler = setTimeout(() => {
//             setSearchQuery(searchInput);
//         }, 300); // Adjust the delay as needed

//         return () => {
//             clearTimeout(handler);
//         };
//     }, [searchInput]);

//     // const filteredAssessments = useMemo(() => {
//     //     if (!searchQuery) return assessments;
//     //     const lowerCaseQuery = searchQuery.toLowerCase();
//     //     return assessments.filter(assessment =>
//     //         assessment.title_assessment.toLowerCase().includes(lowerCaseQuery) ||
//     //         assessment.year_level.toLowerCase().includes(lowerCaseQuery) ||
//     //         (assessment.assessment_unit || '').toLowerCase().includes(lowerCaseQuery)
//     //     );
//     // }, [assessments, searchQuery]);

//     const filteredAssessments = useMemo(() => {
//         if (!searchQuery) return assessments;
//         const lowerCaseQuery = searchQuery.toLowerCase();
//         return assessments.filter(assessment =>
//             assessment.title_assessment.toLowerCase().includes(lowerCaseQuery) ||
//             assessment.year_level.toLowerCase().includes(lowerCaseQuery) ||
//             (assessment.assessment_unit || '').toLowerCase().includes(lowerCaseQuery)
//         );
//     }, [assessments, searchQuery]);

//     return (
//         <>
//             <div className="flex justify-between mt-6">
//               <FiltersButton />
//               <SearchBar searchQuery={searchInput} setSearchQuery={setSearchInput} />
//                 {/* <button className="flex gap-3 py-[10px] px-4 items-center bg-white text-[#344054] text-sm font-semibold rounded-lg border-[1px] border-[#D0D5DD]">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
//                         <g clipPath="url(#clip0_16_13075)">
//                             <path d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z" fill="#323232" />
//                         </g>
//                         <defs>
//                             <clipPath id="clip0_16_13075">
//                                 <rect width="24" height="24" fill="white" />
//                             </clipPath>
//                         </defs>
//                     </svg>
//                     More Filters
//                 </button>
//                 <div className="relative w-1/2 md:w-auto">
//                     <svg className="absolute top-3 left-3" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
//                         <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="#667085" />
//                     </svg>
//                     <input 
//                         placeholder="Search" 
//                         type="text" 
//                         className="rounded-lg w-full border-[1px] border-[#D0D5DD] py-[10px] pr-4 pl-10 outline-none" 
//                         aria-label="Search Assessments"
//                         value={searchQuery}
//                         onChange={(e) => setSearchQuery(e.target.value)}
//                     />
//                 </div> */}
//             </div>
//             <div className="mt-8">

//                 <AssessmentsTable assessments={filteredAssessments} />
//                 {/* <div className="overflow-x-auto mx-w-full">
//                     <table 
//                         className="table-auto border-collapse overflow-auto md:w-full md:overflow-hidden border border-slate-300 rounded-tl-lg rounded-tr-lg" 
//                         aria-label="Assessments Table"
//                     >
//                         <thead>
//                             <tr>
//                                 <th className="border-b border-t border-slate-300 p-3 text-start bg-[#F9FAFB] text-[#475467] text-xs font-semibold">ID</th>
//                                 <th className="border-b border-t border-slate-300 p-3 text-start bg-[#F9FAFB] text-[#475467] text-xs font-semibold">Assessment Title</th>
//                                 <th className="border-b border-t border-slate-300 p-3 text-start bg-[#F9FAFB] text-[#475467] text-xs font-semibold">Year Level</th>
//                                 <th className="border-b border-t border-slate-300 p-3 text-start bg-[#F9FAFB] text-[#475467] text-xs font-semibold">Assessment Unit</th>
//                                 <th className="border-b border-t border-slate-300 p-3 text-start bg-[#F9FAFB] text-[#475467] text-xs font-semibold"></th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {filteredAssessments && filteredAssessments.length > 0 ? (
//                                 filteredAssessments.map((assessment, index) => (
//                                     <tr key={assessment.assessmentId}>
//                                         <td className="border-b border-slate-300 bg-white p-3">
//                                             <span className="block text-[#101828] text-sm font-normal">#{index + 1}</span>
//                                         </td>
//                                         <td className="border-b border-slate-300 bg-white p-3 text-sm font-medium text-[#101828]">
//                                             {assessment.title_assessment}
//                                         </td>
//                                         <td className="border-b border-slate-300 bg-white p-3">
//                                             <span className="block text-[#101828] text-sm">{assessment.year_level}</span>
//                                         </td>
//                                         <td className="border-b border-slate-300 bg-white p-3 min-w-36">
//                                             {assessment.assessment_unit || 'N/A'}
//                                         </td>
//                                         <td className="border-b border-slate-300 bg-white p-3">
//                                             <div className="flex gap-2 justify-center">
//                                                 <DeleteAssessment shardId={assessment.shardId} id={assessment.assessmentId} />
//                                                 <Link href={`/assessment/${assessment.assessmentId}?shardId=${assessment.shardId}`}>
//                                                     <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
//                                                         <g clipPath="url(#clip0_16_14087)">
//                                                             <path d="M14.06 9.02L14.98 9.94L5.92 19H5V18.08L14.06 9.02ZM17.66 3C17.41 3 17.15 3.1 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C18.17 3.09 17.92 3 17.66 3ZM14.06 6.19L3 17.25V21H6.75L17.81 9.94L14.06 6.19Z" fill="#323232" />
//                                                         </g>
//                                                         <defs>
//                                                             <clipPath id="clip0_16_14087">
//                                                                 <rect width="24" height="24" fill="white" />
//                                                             </clipPath>
//                                                         </defs>
//                                                     </svg>
//                                                 </Link>
//                                             </div>
//                                         </td>
//                                     </tr>
//                                 ))
//                             ) : (
//                                 <tr>
//                                     <td className="border-b border-slate-300 bg-white p-3" colSpan="5">
//                                         <span className="block text-[#101828] text-sm font-normal text-center">No data found</span>
//                                     </td>
//                                 </tr>
//                             )}
//                         </tbody>
//                     </table>
//                 </div> */}
//             </div>
//         </>
//     );
// }

import React, { useState, useMemo, useEffect } from "react";
import useAssessmentStore from '@/stores/assessmentStore';
import SearchBar from "./SearchBar";
import FiltersButton from "./FiltersButton";
import AssessmentsTable from "./AssessmentsTable";

export default function Table() {
    const assessments = useAssessmentStore((state) => state.assessments);
    const [searchInput, setSearchInput] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const handler = setTimeout(() => {
            setSearchQuery(searchInput);
        }, 800); // Adjust the delay as needed

        return () => {
            clearTimeout(handler);
        };
    }, [searchInput]);

    const filteredAssessments = useMemo(() => {
        if (!searchQuery) return assessments;
        const lowerCaseQuery = searchQuery.toLowerCase();
        return assessments.filter(assessment =>
            assessment.title_assessment.toLowerCase().includes(lowerCaseQuery) ||
            assessment.year_level.toLowerCase().includes(lowerCaseQuery) ||
            (assessment.assessment_unit || '').toLowerCase().includes(lowerCaseQuery)
        );
    }, [assessments, searchQuery]);

    return (
        <>
            <div className="flex justify-between mt-6">
                <FiltersButton />
                <SearchBar searchQuery={searchInput} setSearchQuery={setSearchInput} />
            </div>
            <div className="mt-8">
                <AssessmentsTable assessments={filteredAssessments} />
            </div>
        </>
    );
}