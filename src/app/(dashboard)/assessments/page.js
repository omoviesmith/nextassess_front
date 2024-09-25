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
 * Fetches assessment data from the API using the provided shardId, page, and perPage.
 * @param {string} shardId - The shard ID for tenant isolation.
 * @param {number} page - The current page number for pagination.
 * @param {number} perPage - Number of items per page.
 * @param {string} tenantId - The tenant ID for header.
 * @returns {Object|null} - The fetched data or null if an error occurs.
 */
const fetchData = async (shardId, page = 1, perPage = 10, tenantId) => {
  if (!shardId || !tenantId) {
    console.error('Missing shardId or tenantId.');
    return null;
  }

  const endpoint = `https://pqwsf4zp7s.ap-southeast-2.awsapprunner.com/api/assessments/${shardId}?page=${page}&per_page=${perPage}`;

  try {
    const res = await fetch(endpoint, {
      cache: 'no-store', // Ensure fresh data on every request
      headers: {
        'X-Tenant-ID': tenantId,
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
  // Extract shardId, page, and per_page from searchParams
  const shardId = searchParams.shardId;
  const page = parseInt(searchParams.page, 10) || 1;
  const perPage = parseInt(searchParams.per_page, 10) || 10;

  // Retrieve user and tenantId from cookies
  const cookieStore = cookies();
  const userCookie = cookieStore.get('user');
  const user = userCookie ? JSON.parse(userCookie.value) : null;
  const tenantId = user?.tenantId || null;

  // Handle cases where user or shardId might be missing
  if (!user || !tenantId) {
    return (
      <div className="p-4">
        <h2 className="text-xl font-semibold text-red-500">Access Denied</h2>
        <p className="text-gray-700">You must be logged in to view your assessments.</p>
      </div>
    );
  }

  if (!shardId) {
    return (
      <div className="p-4">
        <h2 className="text-xl font-semibold text-red-500">Shard ID Missing</h2>
        <p className="text-gray-700">No shard ID provided. Please provide a valid shard ID to view assessments.</p>
      </div>
    );
  }

  // Fetch the assessment data
  const data = await fetchData(shardId, page, perPage, tenantId);

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

  return (
    <div className="p-4">
      {/* Header Section */}
      {/* <div className="flex justify-between items-center flex-col md:flex-row gap-3 mb-6">
        <div>
          <h3 className="text-[#101828] text-3xl font-semibold">
            Welcome back, {user.firstName || 'User'}
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
      </div> */}
        <div className="flex justify-between items-center flex-col md:flex-row gap-3">
         <div>
           <h3 className="text-[#101828] text-3xl font-semibold">Welcome back, {user && user.firstName}</h3>
           <p className="text-[#475467] text-base font-normal mt-2">Track and manage your assessments.</p>
         </div>
         <Link href='/admin' className="flex justify-end w-full md:w-auto">
           <button className="text-sm text-white font-semibold bg-[#7F56D9] rounded-lg py-[10px] px-4"> + Create New Assessment</button>
         </Link>
       </div>

      {/* Filter and Search Section */}
      {/* (You can implement server-side filtering and searching if needed) */}

      {/* Table Section */}
      {assessments && assessments.length > 0 ? (
        <Table data={assessments} />
      ) : (
        <div className="text-center text-gray-500">
          No assessments found.
        </div>
      )}

      {/* Pagination Controls */}
      {pagination.total_items > pagination.items_per_page && (
        <div className="flex justify-center mt-4">
          <Pagination
            currentPage={pagination.current_page}
            totalPages={Math.ceil(pagination.total_items / pagination.items_per_page)}
            shardId={shardId}
            perPage={perPage}
          />
        </div>
      )}
    </div>
  );
}

/**
 * Pagination Component
 * @param {Object} props - The component props.
 * @param {number} props.currentPage - The current page number.
 * @param {number} props.totalPages - The total number of pages.
 * @param {string} props.shardId - The shard ID for the endpoint.
 * @param {number} props.perPage - Number of items per page.
 * @returns {JSX.Element} - The rendered pagination controls.
 */
function Pagination({ currentPage, totalPages, shardId, perPage }) {
  return (
    <div className="flex space-x-2">
      {/* Previous Button */}
      {currentPage > 1 ? (
        <Link href={`/assessments?shardId=${shardId}&page=${currentPage - 1}&per_page=${perPage}`}>
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
        <Link href={`/assessments?shardId=${shardId}&page=${currentPage + 1}&per_page=${perPage}`}>
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
  shardId: PropTypes.string.isRequired,
  perPage: PropTypes.number.isRequired,
};