import Loading from "@/components/Loading/Loading";
import dynamic from "next/dynamic";
import Link from "next/link";
import { cookies } from 'next/headers';

const Table = dynamic(() => import('@/components/Assessment/Table'), {
  ssr: false,
  loading: () => <Loading />
});

const fetchData = async () => {
  try {
    const cookieStore = cookies();
    const userCookie = cookieStore.get('user');
    const user = userCookie ? JSON.parse(userCookie.value) : null;
    const res = await fetch('https://cqzb53kpam.ap-southeast-2.awsapprunner.com/api/assessments', {
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

export default async function Assessment() {
  const cookieStore = cookies();
  const userCookie = cookieStore.get('user');
  const user = userCookie ? JSON.parse(userCookie.value) : null;
  const data = await fetchData();
  return (
    <div>
      <div className="flex justify-between items-center flex-col md:flex-row gap-3">
        <div>
          <h3 className="text-[#101828] text-3xl font-semibold">Welcome back, {user && user.firstName}</h3>
          <p className="text-[#475467] text-base font-normal mt-2">Track and manage your assessments.</p>
        </div>
        <Link href='/admin' className="flex justify-end w-full md:w-auto">
          <button className="text-sm text-white font-semibold bg-[#7F56D9] rounded-lg py-[10px] px-4"> + Create New Assessment</button>
        </Link>
      </div>
      <Table data={data} />
    </div>
  );
}