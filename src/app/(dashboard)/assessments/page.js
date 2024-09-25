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


import Loading from "@/components/Loading/Loading";
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
 * Fetches assessment data from the API using the provided shardId.
 * @param {string} shardId - The shard ID for tenant isolation.
 * @param {number} page - The current page number for pagination.
 * @param {number} perPage - Number of items per page.
 * @returns {Object|null} - The fetched data or null if an error occurs.
 */
const fetchData = async (shardId, page = 1, perPage = 10) => {
  try {
    const cookieStore = cookies();
    const userCookie = cookieStore.get('user');
    const user = userCookie ? JSON.parse(userCookie.value) : null;

    if (!user || !user.tenantId) {
      throw new Error('User is not authenticated or tenant ID is missing.');
    }

    const endpoint = `https://pqwsf4zp7s.ap-southeast-2.awsapprunner.com/api/assessments/${shardId}?page=${page}&per_page=${perPage}`;

    const res = await fetch(endpoint, {
      cache: 'no-store', // Ensure fresh data on every request
      headers: {
        'X-Tenant-ID': user.tenantId,
        'Content-Type': 'application/json'
      }
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data;

  } catch (error) {
    console.error('Error fetching assessments:', error);
    return null;
  }
};

/**
 * Assessment Page Component
 * @param {Object} props - The component props.
 * @param {Object} props.params - The route parameters.
 * @param {Object} props.searchParams - The query parameters.
 * @returns {JSX.Element} - The rendered component.
 */
export default async function Assessment({ params, searchParams }) {
  // Extract shardId from searchParams or params
  const shardId = searchParams.shardId || params.shardId;

  // Optionally, extract page and per_page from searchParams for pagination
  const page = parseInt(searchParams.page, 10) || 1;
  const perPage = parseInt(searchParams.per_page, 10) || 10;

  // Handle case where shardId might be missing
  if (!shardId) {
    return (
      <div className="p-4">
        <h2 className="text-xl font-semibold text-red-500">Shard ID Missing</h2>
        <p className="text-gray-700">No shard ID provided. Please provide a valid shard ID to view assessments.</p>
      </div>
    );
  }

  // Fetch the assessment data
  const data = await fetchData(shardId, page, perPage);

  // Handle fetch error or data absence
  if (!data) {
    return (
      <div className="p-4">
        <h2 className="text-xl font-semibold text-red-500">Error</h2>
        <p className="text-gray-700">Unable to load assessments. Please try again later.</p>
      </div>
    );
  }

  // Destructure assessments and pagination from the response
  const { assessments, pagination } = data;

  // Extract user information for the greeting
  const cookieStore = cookies();
  const userCookie = cookieStore.get('user');
  const user = userCookie ? JSON.parse(userCookie.value) : null;

  return (
    <div className="p-4">
      {/* Header Section */}
      <div className="flex justify-between items-center flex-col md:flex-row gap-3 mb-6">
        <div>
          <h3 className="text-[#101828] text-3xl font-semibold">
            Welcome back, {user?.firstName || 'User'}
          </h3>
          <p className="text-[#475467] text-base font-normal mt-2">
            Track and manage your assessments.
          </p>
        </div>
        <Link href='/admin'>
          <button className="text-sm text-white font-semibold bg-[#7F56D9] rounded-lg py-[10px] px-4 hover:bg-[#5e3bbd] transition-colors">
            + Create New Assessment
          </button>
        </Link>
      </div>

      {/* Table Section */}
      {assessments.length > 0 ? (
        <Table data={assessments} pagination={pagination} />
      ) : (
        <div className="text-center text-gray-500">
          No assessments found. Create Assessments
        </div>
      )}

      {/* Pagination Controls (Optional) */}
      {pagination.total_items > pagination.items_per_page && (
        <div className="flex justify-center mt-4">
          {/* Implement pagination controls here */}
          {/* Example: Previous and Next buttons */}
          <Pagination
            currentPage={pagination.current_page}
            totalPages={Math.ceil(pagination.total_items / pagination.items_per_page)}
            baseUrl={`/assessments?shardId=${shardId}`}
          />
        </div>
      )}
    </div>
  );
}

/**
 * Pagination Component (Optional)
 * 
 * You can create a separate Pagination component to handle page navigation.
 * Here's a simple example:
 */

const Pagination = ({ currentPage, totalPages, baseUrl }) => {
  return (
    <div className="flex space-x-2">
      {/* Previous Button */}
      <Link href={`${baseUrl}&page=${currentPage - 1}`}>
        <button
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded ${
            currentPage === 1
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-[#7F56D9] text-white hover:bg-[#5e3bbd]'
          }`}
        >
          Previous
        </button>
      </Link>

      {/* Current Page Indicator */}
      <span className="px-4 py-2">
        Page {currentPage} of {totalPages}
      </span>

      {/* Next Button */}
      <Link href={`${baseUrl}&page=${currentPage + 1}`}>
        <button
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded ${
            currentPage === totalPages
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-[#7F56D9] text-white hover:bg-[#5e3bbd]'
          }`}
        >
          Next
        </button>
      </Link>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  baseUrl: PropTypes.string.isRequired,
};