// "use client";

// import React, { useEffect, useState } from 'react';
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
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Extract tenantId, page, and per_page from searchParams
//   const page = parseInt(searchParams.page, 10) || 1;
//   const perPage = parseInt(searchParams.per_page, 10) || 10;

//   // Retrieve tenantId from user context
//   const tenantId = user?.tenantId || null;

//   useEffect(() => {
//     const fetchData = async () => {
//       if (!user || !tenantId) {
//         console.error('User or TenantId missing.');
//         setLoading(false);
//         setError('Access Denied. Please log in.');
//         return;
//       }

//       // Use environment variable for API base URL
//       const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://pqwsf4zp7s.ap-southeast-2.awsapprunner.com"; // Ensure to set this in your .env file
//       const endpoint = `${API_BASE_URL}/api/assessments/${tenantId}`;

//       console.log(`Fetching assessments from: ${endpoint} with tenant id ${tenantId}`);

//       try {
//         const res = await fetch(endpoint, {
//           cache: 'no-store',
//           headers: {
//             'X-Tenant-ID': tenantId,
//             'Content-Type': 'application/json',
//           }
//         });
//         console.log(`Fetched response status: ${res.status} ${res.statusText}`)
//         if (!res.ok) {
//           throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
//         }

//         const data = await res.json();
//         setAssessments(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching assessments:', error);
//         setError('Failed to load assessments.');
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [user, tenantId, page, perPage, setAssessments]);

//   if (loading) {
//     return <Loading />;
//   }

//   if (error) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <p className="text-xl text-red-500">{error}</p>
//       </div>
//     );
//   }

//   return (
//     <div>
//   <div className="flex justify-between items-center flex-col md:flex-row gap-3">
//     <div>
//       <h3 className="text-[#101828] text-3xl font-semibold">
//         Welcome, {user && user.firstName}
//       </h3>
//       <p className="text-[#475467] text-base font-normal mt-2">
//         Track and manage your assessments.
//       </p>
//     </div>
//     <Link href='/admin' className="flex justify-end w-full md:w-auto">
//       <button className="text-sm text-white font-semibold bg-[#7F56D9] rounded-lg py-[10px] px-4">
//         + Create New Assessment
//       </button>
//     </Link>
//   </div>
//   {assessments && assessments.length > 0 ? (
//     <Table />
//   ) : (
//     <div className="flex items-center justify-center h-64">
//       <p className="text-xl text-gray-500">No assessments found. Create one</p>
//     </div>
//   )}
// </div>

//   );
// }

// Assessment.propTypes = {
//   params: PropTypes.object,
//   searchParams: PropTypes.object
// };

// components/Assessment/Assessment.js
'use client';

import React, { useEffect, useState } from 'react';
import Loading from "@/components/Loading/Loading";
import useAssessmentStore from '@/stores/assessmentStore';
import dynamic from "next/dynamic";
import Link from "next/link";
import PropTypes from 'prop-types';
import { useUser } from '@/context/UserContext';
import { useRouter, useSearchParams } from 'next/navigation';

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
  const { user } = useUser();
  const setAssessments = useAssessmentStore((state) => state.setAssessments);
  const pagination = useAssessmentStore((state) => state.pagination);
  const { total_items, items_per_page, current_page } = pagination;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  // Extract page and per_page from searchParams
  const page = parseInt(searchParams.page, 10) || 1;
  const perPage = parseInt(searchParams.per_page, 10) || 10;

  // Retrieve tenantId from user context
  const tenantId = user?.tenantId || null;

  useEffect(() => {
    const fetchData = async () => {
      if (!user || !tenantId) {
        console.error('User or TenantId missing.');
        setLoading(false);
        setError('Access Denied. Please log in.');
        return;
      }

      // Use environment variable for API base URL
      const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://pqwsf4zp7s.ap-southeast-2.awsapprunner.com";
      const endpoint = `${API_BASE_URL}/api/assessments/${tenantId}?page=${page}&per_page=${perPage}`;

      console.log(`Fetching assessments from: ${endpoint} with tenant id ${tenantId}`);

      try {
        const res = await fetch(endpoint, {
          cache: 'no-store',
          headers: {
            'X-Tenant-ID': tenantId,
            'Content-Type': 'application/json',
          }
        });
        console.log(`Fetched response status: ${res.status} ${res.statusText}`)
        if (!res.ok) {
          throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        setAssessments(data); // setAssessments handles both assessments and pagination
        setLoading(false);
      } catch (error) {
        console.error('Error fetching assessments:', error);
        setError('Failed to load assessments.');
        setLoading(false);
      }
    };

    fetchData();
  }, [user, tenantId, page, perPage, setAssessments]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center flex-col md:flex-row gap-3">
        <div>
          <h3 className="text-[#101828] text-3xl font-semibold">
            Welcome, {user && user.firstName}
          </h3>
          <p className="text-[#475467] text-base font-normal mt-2">
            Track and manage your assessments.
          </p>
        </div>
        <Link href='/admin' className="flex justify-end w-full md:w-auto">
          <button className="text-sm text-white font-semibold bg-[#7F56D9] rounded-lg py-[10px] px-4">
            + Create New Assessment
          </button>
        </Link>
      </div>
      {pagination.total_items > 0 ? (
        <Table assessments={useAssessmentStore((state) => state.assessments)} pagination={pagination} />
      ) : (
        <div className="flex items-center justify-center h-64">
          <p className="text-xl text-gray-500">No assessments found. Create one</p>
        </div>
      )}
    </div>
  );
}

Assessment.propTypes = {
  params: PropTypes.object,
  searchParams: PropTypes.object
};