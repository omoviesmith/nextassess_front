// components/Assessment/AssessmentsTable.js
'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Link from "next/link";
import DeleteAssessment from "./Delete";

const AssessmentsTable = React.memo(({ assessments }) => {
  return (
    <div className="overflow-x-auto mx-w-full">
      <table 
        className="table-auto border-collapse overflow-auto md:w-full md:overflow-hidden border border-slate-300 rounded-tl-lg rounded-tr-lg" 
        aria-label="Assessments Table"
      >
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
          {assessments && assessments.length > 0 ? (
            assessments.map((assessment, index) => (
              <tr key={assessment.assessmentId}>
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
                  {assessment.assessment_unit || 'N/A'}
                </td>
                <td className="border-b border-slate-300 bg-white p-3">
                  <div className="flex gap-2 justify-center">
                    <DeleteAssessment shardId={assessment.shardId} id={assessment.assessmentId} />
                    <Link href={`/assessment/${assessment.assessmentId}?shardId=${assessment.shardId}`}>
                      <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
  );
});

AssessmentsTable.propTypes = {
  assessments: PropTypes.array.isRequired,
};

export default AssessmentsTable;

// // AssessmentsTable.js
// 'use client';

// import React from 'react';
// import Link from "next/link";
// import DeleteAssessment from "./Delete";

// const AssessmentsTable = React.memo(({ assessments }) => {
//     return (
//         <div className="overflow-x-auto mx-w-full">
//             <table 
//                 className="table-auto border-collapse overflow-auto md:w-full md:overflow-hidden border border-slate-300 rounded-tl-lg rounded-tr-lg" 
//                 aria-label="Assessments Table"
//             >
//                 <thead>
//                     <tr>
//                         <th className="border-b border-t border-slate-300 p-3 text-start bg-[#F9FAFB] text-[#475467] text-xs font-semibold">ID</th>
//                         <th className="border-b border-t border-slate-300 p-3 text-start bg-[#F9FAFB] text-[#475467] text-xs font-semibold">Assessment Title</th>
//                         <th className="border-b border-t border-slate-300 p-3 text-start bg-[#F9FAFB] text-[#475467] text-xs font-semibold">Year Level</th>
//                         <th className="border-b border-t border-slate-300 p-3 text-start bg-[#F9FAFB] text-[#475467] text-xs font-semibold">Assessment Unit</th>
//                         <th className="border-b border-t border-slate-300 p-3 text-start bg-[#F9FAFB] text-[#475467] text-xs font-semibold"></th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {assessments && assessments.length > 0 ? (
//                         assessments.map((assessment, index) => (
//                             <tr key={assessment.assessmentId}>
//                                 <td className="border-b border-slate-300 bg-white p-3">
//                                     <span className="block text-[#101828] text-sm font-normal">#{index + 1}</span>
//                                 </td>
//                                 <td className="border-b border-slate-300 bg-white p-3 text-sm font-medium text-[#101828]">
//                                     {assessment.title_assessment}
//                                 </td>
//                                 <td className="border-b border-slate-300 bg-white p-3">
//                                     <span className="block text-[#101828] text-sm">{assessment.year_level}</span>
//                                 </td>
//                                 <td className="border-b border-slate-300 bg-white p-3 min-w-36">
//                                     {assessment.assessment_unit || 'N/A'}
//                                 </td>
//                                 <td className="border-b border-slate-300 bg-white p-3">
//                                     <div className="flex gap-2 justify-center">
//                                         <DeleteAssessment shardId={assessment.shardId} id={assessment.assessmentId} />
//                                         <Link href={`/assessment/${assessment.assessmentId}?shardId=${assessment.shardId}`}>
//                                             <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
//                                                 <g clipPath="url(#clip0_16_14087)">
//                                                     <path d="M14.06 9.02L14.98 9.94L5.92 19H5V18.08L14.06 9.02ZM17.66 3C17.41 3 17.15 3.1 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C18.17 3.09 17.92 3 17.66 3ZM14.06 6.19L3 17.25V21H6.75L17.81 9.94L14.06 6.19Z" fill="#323232" />
//                                                 </g>
//                                                 <defs>
//                                                     <clipPath id="clip0_16_14087">
//                                                         <rect width="24" height="24" fill="white" />
//                                                     </clipPath>
//                                                 </defs>
//                                             </svg>
//                                         </Link>
//                                     </div>
//                                 </td>
//                             </tr>
//                         ))
//                     ) : (
//                         <tr>
//                             <td className="border-b border-slate-300 bg-white p-3" colSpan="5">
//                                 <span className="block text-[#101828] text-sm font-normal text-center">No data found</span>
//                             </td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>
//         </div>
//     );
// });

// export default AssessmentsTable;