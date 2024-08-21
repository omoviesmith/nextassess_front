import dynamic from "next/dynamic";
const EditAssessment = dynamic(() => import('@/components/Assessment/Edit'),{
  ssr: false
})

const fetchData = async (shardId,id) => {
    try {
      console.log(`https://cqzb53kpam.ap-southeast-2.awsapprunner.com/api/assessments/${shardId}/${id}`);
      const res = await fetch(`https://cqzb53kpam.ap-southeast-2.awsapprunner.com/api/assessments/${shardId}/${id}`, {
        cache: 'no-store', // to ensure fresh data on every request
      });
      console.log(res);
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await res.json();
      console.log(data);
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