// "use client";

// import React, { useEffect } from 'react';
// import Loading from "@/components/Loading/Loading";
// import useAssessmentStore from '@/stores/assessmentStore';
// import dynamic from "next/dynamic";
// import Link from "next/link";
// import PropTypes from 'prop-types';
// import { useUser } from '@/context/UserContext'; // Updated import

// // Dynamically import the Table component with a loading state
// const Table = dynamic(() => import('@/components/Assessment/Table'), {
//   ssr: false,
//   loading: () => <Loading />
// });

// /**
//  * Assessment Page Component
//  * @param {Object} props - The component props.
//  * @param {Object} props.params - The route parameters.
//  * @param {Object} props.searchParams - The query parameters.
//  * @returns {JSX.Element} - The rendered component.
//  */
// export default function Assessment({ params, searchParams }) {
//   const { user } = useUser(); // Updated to use UserContext
//   const { setAssessments, assessments, pagination } = useAssessmentStore();

//   // Extract tenantId, page, and per_page from searchParams
//   const page = parseInt(searchParams.page, 10) || 1;
//   const perPage = parseInt(searchParams.per_page, 10) || 10;

//   // Retrieve tenantId from user context
//   const tenantId = user?.tenantId || null;

//   useEffect(() => {
//     const fetchData = async () => {
//       if (!user || !tenantId) {
//         console.error('User or TenantId missing.');
//         return;
//       }

//       // Use environment variable for API base URL
//       const API_BASE_URL = "https://pqwsf4zp7s.ap-southeast-2.awsapprunner.com"; // Ensure to set this in your .env file
//       const endpoint = `${API_BASE_URL}/api/assessments/${tenantId}?page=${page}&per_page=${perPage}`;

//       console.log(endpoint)

//       try {
//         const res = await fetch(endpoint, {
//           cache: 'no-store',
//           headers: {
//             'X-Tenant-ID': tenantId,
//             'Content-Type': 'application/json'
//           }
//         });
//         console.log(`Fetched response status: ${res.statusText}`)
//         if (!res.ok) {
//           throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
//         }

//         const data = await res.json();
//         setAssessments(data);
//       } catch (error) {
//         console.error('Error fetching assessments:', error);
//       }
//     };

//     // Fetch data only if assessments are not yet loaded or need to be refreshed
//     if (assessments.length === 0) {
//       fetchData();
//     }
//   }, [assessments.length, setAssessments, tenantId, page, perPage, user]);

//   // Handle cases where user or tenantId might be missing
//   if (!user || !tenantId) {
//     return (
//       <div className="p-4">
//         <h2 className="text-xl font-semibold text-red-500">Access Denied</h2>
//         <p className="text-gray-700">You must be logged in to view your assessments.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="p-4">
//       {/* Header Section */}
//       <div className="flex justify-between items-center flex-col md:flex-row gap-3">
//         <div>
//           <h3 className="text-[#101828] text-3xl font-semibold">Welcome back, {user.firstName}</h3>
//           <p className="text-[#475467] text-base font-normal mt-2">Track and manage your assessments.</p>
//         </div>
//         <Link href='/admin' className="flex justify-end w-full md:w-auto">
//           <button className="text-sm text-white font-semibold bg-[#7F56D9] rounded-lg py-[10px] px-4"> + Create New Assessment</button>
//         </Link>
//       </div>

//       {/* Table Section */}
//       <Table />

//       {/* Pagination Controls */}
//       {pagination && pagination.total_items > pagination.items_per_page && (
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

// Assessment.propTypes = {
//   params: PropTypes.object,
//   searchParams: PropTypes.object,
// };

// /**
//  * Pagination Component
//  * @param {Object} props - The component props.
//  * @param {number} props.currentPage - The current page number.
//  * @param {number} props.totalPages - The total number of pages.
//  * @param {string} props.tenantId - The tenant ID for the endpoint.
//  * @param {number} props.perPage - Number of items per page.
//  * @returns {JSX.Element} - The rendered pagination controls.
//  */
// function Pagination({ currentPage, totalPages, tenantId, perPage }) {
//   return (
//     <div className="flex space-x-2">
//       {/* Previous Button */}
//       {currentPage > 1 ? (
//         <Link href={`/assessments?tenantId=${tenantId}&page=${currentPage - 1}&per_page=${perPage}`}>
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


// "use client";

// import React, { useEffect } from 'react';
// import Loading from "@/components/Loading/Loading";
// import useAssessmentStore from '@/stores/assessmentStore';
// import dynamic from "next/dynamic";
// import Link from "next/link";
// import PropTypes from 'prop-types';
// import { useUser } from '@/context/UserContext';

// // Dynamically import the Table component with a loading state
// const Table = dynamic(() => import('@/components/Assessment/Table'), {
//   ssr: false,
//   loading: () => <Loading />,
// });

// /**
//  * Assessment Page Component
//  * @param {Object} props - The component props.
//  * @param {Object} props.params - The route parameters.
//  * @param {Object} props.searchParams - The query parameters.
//  * @returns {JSX.Element} - The rendered component.
//  */
// export default function Assessment({ params, searchParams }) {
//   const { user, loading } = useUser(); // Destructure loading from context
//   const { setAssessments, assessments, pagination } = useAssessmentStore();

//   // Extract tenantId, page, and per_page from searchParams
//   const page = parseInt(searchParams.page, 10) || 1;
//   const perPage = parseInt(searchParams.per_page, 10) || 10;

//   // Retrieve tenantId from user context
//   const tenantId = user?.tenantId || null;

//   useEffect(() => {
//     const fetchData = async () => {
//       if (!user || !tenantId) {
//         console.error('User or TenantId missing.');
//         return;
//       }

//       // Use environment variable for API base URL
//       const API_BASE_URL = "https://pqwsf4zp7s.ap-southeast-2.awsapprunner.com" 
//       const endpoint = `${API_BASE_URL}/api/assessments/${tenantId}?page=${page}&per_page=${perPage}`;

//       console.log('Fetching assessments from:', endpoint); // Debugging log

//       try {
//         const res = await fetch(endpoint, {
//           cache: 'no-store',
//           headers: {
//             'X-Tenant-ID': tenantId,
//             'Content-Type': 'application/json',
//           },
//         });

//         if (!res.ok) {
//           throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
//         }

//         const data = await res.json();
//         setAssessments(data);
//         console.log('Fetched assessments:', data); // Debugging log
//       } catch (error) {
//         console.error('Error fetching assessments:', error);
//       }
//     };

//     // Fetch data only if assessments are not yet loaded or need to be refreshed
//     if (!loading && tenantId && assessments.length === 0) {
//       fetchData();
//     }
//   }, [assessments.length, setAssessments, tenantId, page, perPage, user, loading]);

//   // Handle loading state
//   if (loading) {
//     return <Loading />;
//   }

//   // Handle cases where user or tenantId might be missing
//   if (!user || !tenantId) {
//     return (
//       <div className="p-4">
//         <h2 className="text-xl font-semibold text-red-500">Access Denied</h2>
//         <p className="text-gray-700">You must be logged in to view your assessments.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="p-4">
//       {/* Header Section */}
//       <div className="flex justify-between items-center flex-col md:flex-row gap-3">
//         <div>
//           <h3 className="text-[#101828] text-3xl font-semibold">Welcome back, {user.firstName}</h3>
//           <p className="text-[#475467] text-base font-normal mt-2">Track and manage your assessments.</p>
//         </div>
//         <Link href='/admin' className="flex justify-end w-full md:w-auto">
//           <button className="text-sm text-white font-semibold bg-[#7F56D9] rounded-lg py-[10px] px-4"> + Create New Assessment</button>
//         </Link>
//       </div>

//       {/* Table Section */}
//       <Table />

//       {/* Pagination Controls */}
//       {pagination && pagination.total_items > pagination.items_per_page && (
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

// Assessment.propTypes = {
//   params: PropTypes.object,
//   searchParams: PropTypes.object,
// };

// /**
//  * Pagination Component
//  * @param {Object} props - The component props.
//  * @param {number} props.currentPage - The current page number.
//  * @param {number} props.totalPages - The total number of pages.
//  * @param {string} props.tenantId - The tenant ID for the endpoint.
//  * @param {number} props.perPage - Number of items per page.
//  * @returns {JSX.Element} - The rendered pagination controls.
//  */
// function Pagination({ currentPage, totalPages, tenantId, perPage }) {
//   return (
//     <div className="flex space-x-2">
//       {/* Previous Button */}
//       {currentPage > 1 ? (
//         <Link href={`/assessments?tenantId=${tenantId}&page=${currentPage - 1}&per_page=${perPage}`}>
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


"use client";

import React, { useEffect } from 'react';
import Loading from "@/components/Loading/Loading";
import useAssessmentStore from '@/stores/assessmentStore';
import dynamic from "next/dynamic";
import Link from "next/link";
import PropTypes from 'prop-types';
import { useUser } from '@/context/UserContext'; // Updated import

// Dynamically import the Table component with a loading state
const Table = dynamic(() => import('@/components/Assessment/Table'), {
  ssr: false,
  loading: () => <Loading />
});

/**
 * Assessment Page Component
 * @param {Object} props - The component props.
 * @param {Object} props.params - The route parameters.
 * @param {Object} props.searchParams - The query parameters.
 * @returns {JSX.Element} - The rendered component.
 */
export default function Assessment({ params, searchParams }) {
  const { user } = useUser(); // Updated to use UserContext
  const { setAssessments, assessments, pagination } = useAssessmentStore();

  // Extract tenantId, page, and per_page from searchParams
  const page = parseInt(searchParams.page, 10) || 1;
  const perPage = parseInt(searchParams.per_page, 10) || 10;

  // Retrieve tenantId from user context
  const tenantId = user?.tenantId || null;

  useEffect(() => {
    const fetchData = async () => {
      if (!user || !tenantId) {
        console.error('User or TenantId missing.');
        // Optionally, redirect to login or show a message
        return;
      }

      // Use environment variable for API base URL
      const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://pqwsf4zp7s.ap-southeast-2.awsapprunner.com"; // Ensure to set this in your .env file
      const endpoint = `${API_BASE_URL}/api/assessments/${tenantId}?page=${page}&per_page=${perPage}`;

      console.log(`Fetching assessments from: ${endpoint}`);

      try {
        const res = await fetch(endpoint, {
          cache: 'no-store',
          headers: {
            'X-Tenant-ID': tenantId,
            'Content-Type': 'application/json'
          }
        });
        console.log(`Fetched response status: ${res.status} ${res.statusText}`)
        if (!res.ok) {
          throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        setAssessments(data);
      } catch (error) {
        console.error('Error fetching assessments:', error);
        // Optionally, display an error message to the user
      }
    };

    fetchData();
  }, [user, tenantId, page, perPage, setAssessments]);

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl text-red-500">Access Denied. You must be logged in to view your assessments.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Assessments</h1>
      {assessments ? (
        <Table assessments={assessments} pagination={pagination} />
      ) : (
        <Loading />
      )}
      {/* Optionally, add a link to create a new assessment */}
      <Link href="/assessments/new" className="mt-4 inline-block text-blue-500 hover:underline">
        Create New Assessment
      </Link>
    </div>
  );
}

Assessment.propTypes = {
  params: PropTypes.object,
  searchParams: PropTypes.object
};