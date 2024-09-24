import dynamic from "next/dynamic";
import { cookies } from 'next/headers';
const EditAssessment = dynamic(() => import('@/components/Assessment/Edit'),{
  ssr: false
})

const fetchData = async (shardId,id) => {
    try {
        const cookieStore = cookies();
        const userCookie = cookieStore.get('user');
        const user = userCookie ? JSON.parse(userCookie.value) : null;
        const res = await fetch(`https://cqzb53kpam.ap-southeast-2.awsapprunner.com/api/assessments/${shardId}/${id}`, {
        cache: 'no-store', // to ensure fresh data on every request
        headers: {
          'X-Tenant-ID': user.tenantId
        }
      });
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await res.json();
      return data;
    } catch (error) {
      return null;
    }
  };

export default async function Edit({ params, searchParams }) {
    const data = await fetchData(searchParams.shardId, params.id);
    return (
        <div>
            <EditAssessment data={data} />
        </div>
    )
}