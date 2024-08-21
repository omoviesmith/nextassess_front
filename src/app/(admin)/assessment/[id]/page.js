import dynamic from "next/dynamic";
const EditAssessment = dynamic(() => import('@/components/Assessment/Edit'),{
  ssr: false
})

const fetchData = async (shardId,id) => {
    try {
      const res = await fetch(`https://cqzb53kpam.ap-southeast-2.awsapprunner.com/api/assessments/${shardId}/${id}`, {
        cache: 'no-store', // to ensure fresh data on every request
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