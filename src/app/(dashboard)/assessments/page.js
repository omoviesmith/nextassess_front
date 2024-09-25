"use client";
import React, { useEffect } from 'react';
import Loading from "@/components/Loading/Loading";
import useAssessmentStore from '@/stores/assessmentStore';
import dynamic from "next/dynamic";
import Link from "next/link";
import { cookies } from 'next/headers';
import PropTypes from 'prop-types';

// Dynamically import the Table component with a loading state
const Table = dynamic(() => import('@/components/Assessment/Table'), {
  ssr: false,
  loading: () => <Loading />
});

/**
 * Assessment Page Component
 * @returns {JSX.Element} - The rendered component.
 */
export default function Assessment({ params, searchParams }) {
  const [cookies] = useCookies(['user']);
  const { setAssessments, assessments } = useAssessmentStore();

  // Extract tenantId, page, and per_page from searchParams
  const page = parseInt(searchParams.page, 10) || 1;
  const perPage = parseInt(searchParams.per_page, 10) || 10;

  // Retrieve user and tenantId from cookies
  const user = cookies.user ? JSON.parse(cookies.user) : null;
  const tenantId = user?.tenantId || null;

  useEffect(() => {
    const fetchData = async () => {
      if (!tenantId) {
        console.error('Missing tenantId.');
        return;
      }

      const endpoint = `https://pqwsf4zp7s.ap-southeast-2.awsapprunner.com/api/assessments/${tenantId}?page=${page}&per_page=${perPage}`;

      try {
        const res = await fetch(endpoint, {
          cache: 'no-store',
          headers: {
            'X-Tenant-ID': tenantId,
            'Content-Type': 'application/json'
          }
        });

        if (!res.ok) {
          throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        setAssessments(data);
      } catch (error) {
        console.error('Error fetching assessments:', error);
      }
    };

    if (assessments.length === 0) {
      fetchData();
    }
  }, [assessments, setAssessments, tenantId, page, perPage]);

  // Handle cases where user or tenantId might be missing
  if (!user || !tenantId) {
    return (
      <div className="p-4">
        <h2 className="text-xl font-semibold text-red-500">Access Denied</h2>
        <p className="text-gray-700">You must be logged in to view your assessments.</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      {/* Header Section */}
      <div className="flex justify-between items-center flex-col md:flex-row gap-3">
        <div>
          <h3 className="text-[#101828] text-3xl font-semibold">Welcome back, {user && user.firstName}</h3>
          <p className="text-[#475467] text-base font-normal mt-2">Track and manage your assessments.</p>
        </div>
        <Link href='/admin' className="flex justify-end w-full md:w-auto">
          <button className="text-sm text-white font-semibold bg-[#7F56D9] rounded-lg py-[10px] px-4"> + Create New Assessment</button>
        </Link>
      </div>

      {/* Table Section */}
      {assessments && assessments.length > 0 ? (
        <Table data={assessments} />
      ) : (
        <div className="text-center text-gray-500">
          No assessments found.
        </div>
      )}

      {/* Pagination Controls */}
      {/* Ensure that `pagination` data is available in your Zustand store or fetched accordingly */}
      {/* Example:
      {pagination.total_items > pagination.items_per_page && (
        <div className="flex justify-center mt-4">
          <Pagination
            currentPage={pagination.current_page}
            totalPages={Math.ceil(pagination.total_items / pagination.items_per_page)}
            tenantId={tenantId}
            perPage={perPage}
          />
        </div>
      )}
      */}
    </div>
  );
}

/**
 * Pagination Component
 * @param {Object} props - The component props.
 * @param {number} props.currentPage - The current page number.
 * @param {number} props.totalPages - The total number of pages.
 * @param {string} props.tenantId - The tenant ID for the endpoint.
 * @param {number} props.perPage - Number of items per page.
 * @returns {JSX.Element} - The rendered pagination controls.
 */
function Pagination({ currentPage, totalPages, tenantId, perPage }) {
  return (
    <div className="flex space-x-2">
      {/* Previous Button */}
      {currentPage > 1 ? (
        <Link href={`/assessments?tenantId=${tenantId}&page=${currentPage - 1}&per_page=${perPage}`}>
          <button className="px-4 py-2 rounded bg-[#7F56D9] text-white hover:bg-[#5e3bbd] transition-colors">
            Previous
          </button>
        </Link>
      ) : (
        <button className="px-4 py-2 rounded bg-gray-300 text-gray-600 cursor-not-allowed">
          Previous
        </button>
      )}

      {/* Page Indicator */}
      <span className="px-4 py-2 text-[#344054] text-sm font-medium">
        Page {currentPage} of {totalPages}
      </span>

      {/* Next Button */}
      {currentPage < totalPages ? (
        <Link href={`/assessments?tenantId=${tenantId}&page=${currentPage + 1}&per_page=${perPage}`}>
          <button className="px-4 py-2 rounded bg-[#7F56D9] text-white hover:bg-[#5e3bbd] transition-colors">
            Next
          </button>
        </Link>
      ) : (
        <button className="px-4 py-2 rounded bg-gray-300 text-gray-600 cursor-not-allowed">
          Next
        </button>
      )}
    </div>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  tenantId: PropTypes.string.isRequired,
  perPage: PropTypes.number.isRequired,
};

// import Loading from "@/components/Loading/Loading";
// import dynamic from "next/dynamic";
// import Link from "next/link";
// import { cookies } from 'next/headers';

// const Table = dynamic(() => import('@/components/Assessment/Table'), {
//   ssr: false,
//   loading: () => <Loading />
// });

// const fetchData = async () => {
//   try {
//     const cookieStore = cookies();
//     const userCookie = cookieStore.get('user');
//     const user = userCookie ? JSON.parse(userCookie.value) : null;
//     const res = await fetch('https://pqwsf4zp7s.ap-southeast-2.awsapprunner.com/api/assessments', {
//       cache: 'no-store', // to ensure fresh data on every request
//       headers: {
//         'X-Tenant-ID': user.tenantId
//       }
//     });
//     if (!res.ok) {
//       throw new Error('Failed to fetch data');
//     }
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     return null;
//   }
// };

// export default async function Assessment() {
//   const cookieStore = cookies();
//   const userCookie = cookieStore.get('user');
//   const user = userCookie ? JSON.parse(userCookie.value) : null;
//   const data = await fetchData();
//   return (
//     <div>
//       <div className="flex justify-between items-center flex-col md:flex-row gap-3">
//         <div>
//           <h3 className="text-[#101828] text-3xl font-semibold">Welcome back, {user && user.firstName}</h3>
//           <p className="text-[#475467] text-base font-normal mt-2">Track and manage your assessments.</p>
//         </div>
//         <Link href='/admin' className="flex justify-end w-full md:w-auto">
//           <button className="text-sm text-white font-semibold bg-[#7F56D9] rounded-lg py-[10px] px-4"> + Create New Assessment</button>
//         </Link>
//       </div>
//       <Table data={data} />
//     </div>
//   );
// }


// import Loading from "@/components/Loading/Loading";
// import { useEffect } from 'react';
// import useAssessmentStore from '@/stores/assessmentStore';
// import dynamic from "next/dynamic";
// import Link from "next/link";
// import { cookies } from 'next/headers';
// import PropTypes from 'prop-types';

// // Dynamically import the Table component with a loading state
// const Table = dynamic(() => import('@/components/Assessment/Table'), {
//   ssr: false,
//   loading: () => <Loading />
// });

// /**
//  * Fetches assessment data from the API using the provided tenantId, page, and perPage.
//  * @param {string} tenantId - The shard ID for tenant isolation.
//  * @param {number} page - The current page number for pagination.
//  * @param {number} perPage - Number of items per page.
//  * @param {string} tenantId - The tenant ID for header.
//  * @returns {Object|null} - The fetched data or null if an error occurs.
//  */
// const fetchData = async (page = 1, perPage = 10, tenantId) => {
//   if (!tenantId) {
//     console.error('Missing tenantId or tenantId.');
//     return null;
//   }

//   const endpoint = `https://pqwsf4zp7s.ap-southeast-2.awsapprunner.com/api/assessments/${tenantId}?page=${page}&per_page=${perPage}`;

//   try {
//     const res = await fetch(endpoint, {
//       cache: 'no-store', // Ensure fresh data on every request
//       headers: {
//         'X-Tenant-ID': tenantId,
//         'Content-Type': 'application/json'
//       }
//     });

//     if (!res.ok) {
//       throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
//     }

//     const data = await res.json();

//     // Update Zustand store
//     const { setAssessments } = useAssessmentStore.getState();
//     setAssessments(data);

//     return data;

//   } catch (error) {
//     console.error('Error fetching assessments:', error);
//     return null;
//   }
// };

// /**
//  * Assessment Page Component
//  * @param {Object} props - The component props.
//  * @param {Object} props.params - The route parameters.
//  * @param {Object} props.searchParams - The query parameters.
//  * @returns {JSX.Element} - The rendered component.
//  */
// export default async function Assessment({ params, searchParams }) {
//   // Extract tenantId, page, and per_page from searchParams
//   // const tenantId = searchParams.tenantId;
//   const page = parseInt(searchParams.page, 10) || 1;
//   const perPage = parseInt(searchParams.per_page, 10) || 10;

//   // Retrieve user and tenantId from cookies
//   const cookieStore = cookies();
//   const userCookie = cookieStore.get('user');
//   const user = userCookie ? JSON.parse(userCookie.value) : null;
//   const tenantId = user?.tenantId || null;

//   // Handle cases where user or tenantId might be missing
//   if (!user || !tenantId) {
//     return (
//       <div className="p-4">
//         <h2 className="text-xl font-semibold text-red-500">Access Denied</h2>
//         <p className="text-gray-700">You must be logged in to view your assessments.</p>
//       </div>
//     );
//   }

//   // if (!tenantId) {
//   //   return (
//   //     <div className="p-4">
//   //       <h2 className="text-xl font-semibold text-red-500">Shard ID Missing</h2>
//   //       <p className="text-gray-700">No shard ID provided. Please provide a valid shard ID to view assessments.</p>
//   //     </div>
//   //   );
//   // }

//   // Fetch the assessment data
//   const data = await fetchData(page, perPage, tenantId);

//   // Handle fetch error or data absence
//   if (!data) {
//     return (
//       <div className="p-4">
//         <h2 className="text-xl font-semibold text-red-500">Error</h2>
//         <p className="text-gray-700">Unable to load assessments. Please try again later.</p>
//       </div>
//     );
//   }

//   // Destructure assessments and pagination from the response
//   // const { assessments, pagination } = data;

//   //Update your `Assessment function` to use the Zustand store.
//   const { assessments, setAssessments } = useAssessmentStore();

//   useEffect(() => {
//     if (assessments.length === 0) {
//       fetchData().then((data) => {
//         if (data) {
//           setAssessments(data);
//         }
//       });
//     }
//   }, [assessments, setAssessments]);


//   return (
//     <div className="p-4">
//       {/* Header Section */}
//         <div className="flex justify-between items-center flex-col md:flex-row gap-3">
//          <div>
//            <h3 className="text-[#101828] text-3xl font-semibold">Welcome back, {user && user.firstName}</h3>
//            <p className="text-[#475467] text-base font-normal mt-2">Track and manage your assessments.</p>
//          </div>
//          <Link href='/admin' className="flex justify-end w-full md:w-auto">
//            <button className="text-sm text-white font-semibold bg-[#7F56D9] rounded-lg py-[10px] px-4"> + Create New Assessment</button>
//          </Link>
//        </div>

//       {/* Filter and Search Section */}
//       {/* (You can implement server-side filtering and searching if needed) */}

//       {/* Table Section */}
//       {assessments && assessments.length > 0 ? (
//         <Table data={assessments} />
//       ) : (
//         <div className="text-center text-gray-500">
//           No assessments found.
//         </div>
//       )}

//       {/* Pagination Controls */}
//       {pagination.total_items > pagination.items_per_page && (
//         <div className="flex justify-center mt-4">
//           <Pagination
//             currentPage={pagination.current_page}
//             totalPages={Math.ceil(pagination.total_items / pagination.items_per_page)}
//             tenantId={tenantId}
//             perPage={perPage}
//           />
//         </div>
//       )}
//     </div>
//   );
// }

// /**
//  * Pagination Component
//  * @param {Object} props - The component props.
//  * @param {number} props.currentPage - The current page number.
//  * @param {number} props.totalPages - The total number of pages.
//  * @param {string} props.tenant_id - The shard ID for the endpoint.
//  * @param {number} props.perPage - Number of items per page.
//  * @returns {JSX.Element} - The rendered pagination controls.
//  */
// function Pagination({ currentPage, totalPages, tenantId, perPage }) {
//   return (
//     <div className="flex space-x-2">
//       {/* Previous Button */}
//       {currentPage > 1 ? (
//         <Link href={`/assessments/${tenantId}&page=${currentPage - 1}&per_page=${perPage}`}>
//           <button className="px-4 py-2 rounded bg-[#7F56D9] text-white hover:bg-[#5e3bbd] transition-colors">
//             Previous
//           </button>
//         </Link>
//       ) : (
//         <button className="px-4 py-2 rounded bg-gray-300 text-gray-600 cursor-not-allowed">
//           Previous
//         </button>
//       )}

//       {/* Page Indicator */}
//       <span className="px-4 py-2 text-[#344054] text-sm font-medium">
//         Page {currentPage} of {totalPages}
//       </span>

//       {/* Next Button */}
//       {currentPage < totalPages ? (
//         <Link href={`/assessments?tenantId=${tenantId}&page=${currentPage + 1}&per_page=${perPage}`}>
//           <button className="px-4 py-2 rounded bg-[#7F56D9] text-white hover:bg-[#5e3bbd] transition-colors">
//             Next
//           </button>
//         </Link>
//       ) : (
//         <button className="px-4 py-2 rounded bg-gray-300 text-gray-600 cursor-not-allowed">
//           Next
//         </button>
//       )}
//     </div>
//   );
// }

// Pagination.propTypes = {
//   currentPage: PropTypes.number.isRequired,
//   totalPages: PropTypes.number.isRequired,
//   tenantId: PropTypes.string.isRequired,
//   perPage: PropTypes.number.isRequired,
// };



