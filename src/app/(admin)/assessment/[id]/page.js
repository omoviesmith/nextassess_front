import EditAssessment from "@/components/Assessment/Edit";

const fetchData = async (id) => {
    try {
      const res = await fetch(`https://e4eap2uqdz.ap-southeast-2.awsapprunner.com/api/assessments/${id}`, {
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

export default async function Edit({ params }) {
    const data = await fetchData(params.id);
    return (
        <div>
            <EditAssessment data={data} />
        </div>
    )
}