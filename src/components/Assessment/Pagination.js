// 'use client';

// import React from 'react';
// import PropTypes from 'prop-types';
// import { useRouter, useSearchParams } from 'next/navigation';

// const Pagination = React.memo(({ currentPage, totalPages, itemsPerPage }) => {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const handlePageChange = (newPage) => {
//     if (newPage < 1 || newPage > totalPages) return;

//     const params = new URLSearchParams(Array.from(searchParams.entries()));
//     if (newPage === 1) {
//       params.delete('page');
//     } else {
//       params.set('page', newPage);
//     }
//     router.push(`?${params.toString()}`);
//   };

//   const handlePerPageChange = (e) => {
//     const newPerPage = parseInt(e.target.value, 10);
//     const params = new URLSearchParams(Array.from(searchParams.entries()));
//     params.set('per_page', newPerPage);
//     params.delete('page'); // Reset to first page when per_page changes
//     router.push(`?${params.toString()}`);
//   };

//   return (
//     <div className="flex flex-col md:flex-row justify-between items-center mt-6 space-y-4 md:space-y-0">
//       <div className="flex items-center space-x-2">
//         <button
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//           className={`px-4 py-2 rounded-md ${
//             currentPage === 1
//               ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
//               : 'bg-blue-500 text-white hover:bg-blue-600'
//           }`}
//         >
//           Previous
//         </button>
//         <span className="text-gray-700">
//           Page {currentPage} of {totalPages}
//         </span>
//         <button
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className={`px-4 py-2 rounded-md ${
//             currentPage === totalPages
//               ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
//               : 'bg-blue-500 text-white hover:bg-blue-600'
//           }`}
//         >
//           Next
//         </button>
//       </div>
//       <div className="flex items-center space-x-2">
//         <label htmlFor="perPage" className="text-gray-700">Items per page:</label>
//         <select
//           id="perPage"
//           value={itemsPerPage}
//           onChange={handlePerPageChange}
//           className="border border-gray-300 rounded-md px-2 py-1"
//         >
//           <option value={5}>5</option>
//           <option value={10}>10</option>
//           <option value={20}>20</option>
//           <option value={50}>50</option>
//         </select>
//       </div>
//     </div>
//   );
// });

// Pagination.propTypes = {
//   currentPage: PropTypes.number.isRequired,
//   totalPages: PropTypes.number.isRequired,
//   itemsPerPage: PropTypes.number.isRequired,
// };

// export default Pagination;


// components/Assessment/Pagination.js
'use client';

import React from 'react';
import PropTypes from 'prop-types';
import { useRouter, useSearchParams } from 'next/navigation';

const Pagination = React.memo(({ currentPage, totalPages, itemsPerPage }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;

    const params = new URLSearchParams(Array.from(searchParams.entries()));
    if (newPage === 1) {
      params.delete('page');
    } else {
      params.set('page', newPage);
    }

    router.push(`?${params.toString()}`);
  };

  const handlePerPageChange = (e) => {
    const newPerPage = parseInt(e.target.value, 10);
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    params.set('per_page', newPerPage);
    params.delete('page'); // Reset to first page when per_page changes
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center mt-6 space-y-4 md:space-y-0">
      <div className="flex items-center space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md ${
            currentPage === 1
              ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          Previous
        </button>
        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-md ${
            currentPage === totalPages
              ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          Next
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <label htmlFor="perPage" className="text-gray-700">Items per page:</label>
        <select
          id="perPage"
          value={itemsPerPage}
          onChange={handlePerPageChange}
          className="border border-gray-300 rounded-md px-2 py-1"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </div>
    </div>
  );
});

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
};

export default Pagination;