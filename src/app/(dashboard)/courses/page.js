import Link from "next/link";

const assessments = [
    {
        date: '12/12/2023',
        time: '10:00 AM',
        course: 'Upload Assessment',
        title: 'Historical Tale: A Tale of Two Cities',
        description: 'Brings all your news into one place',
    },
    {
        date: '12/12/2023',
        time: '10:00 AM',
        course: 'Describe Assessment',
        title: 'Design software',
        description: 'Super lightweight design app',
    },
    {
        date: '12/12/2023',
        time: '10:00 AM',
        course: 'Upload Assessment',
        title: 'Data prediction',
        description: 'AI and machine learning data',
    },
    {
        date: '12/12/2023',
        time: '10:00 AM',
        course: 'Upload Assessment',
        title: 'Productivity app',
        description: 'Time management and productivity',
    },
    {
        date: '12/12/2023',
        time: '10:00 AM',
        course: 'Describe Assessment',
        title: 'Web app integrations',
        description: 'Connect web apps seamlessly',
    },
]
export default function Courses() {
    return (
        <div>
            <div className="flex justify-between items-center md:flex-row flex-col gap-3">
                <div>
                    <h3 className="text-[#101828] text-3xl font-semibold">Welcome back, Nici</h3>
                    <p className="text-[#475467] text-base font-normal mt-2">Track, manage and forecast your courses.</p>
                </div>
                <Link href='/courses' className="flex justify-end w-full md:w-auto">
                    <button className="text-sm text-white font-semibold bg-[#7F56D9] rounded-lg py-[10px] px-4"> + Add New Course</button>
                </Link>
            </div>
            <div className="flex justify-between mt-6">
                <button className="flex gap-3 py-[10px] px-4 items-center bg-white text-[#344054] text-sm font-semibold rounded-lg border-[1px] border-[#D0D5DD]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g clipPath="url(#clip0_16_13075)">
                            <path d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z" fill="#323232" />
                        </g>
                        <defs>
                            <clipPath id="clip0_16_13075">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    More Filters
                </button>
                <div className="relative md:w-auto w-1/2">
                    <svg className="absolute top-3 left-3" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="#667085" />
                    </svg>
                    <input placeholder="Search" type="text" className="rounded-lg w-full border-[1px] border-[#D0D5DD] py-[10px] pr-4 pl-10 outline-none" />
                </div>
            </div>
            <div className="mt-8">
                <div className="overflow-x-auto mx-w-full">
                    <table className="table-auto border-collapse overflow-auto md:w-full md:overflow-hidden border border-slate-300 rounded-tl-lg rounded-tr-lg">
                        <thead>
                            <tr>
                                <th className="border-b border-t border-slate-300 p-3 text-start bg-[#F9FAFB] text-[#475467] text-xs font-semibold">Date</th>
                                <th className="border-b border-t border-slate-300 p-3 text-start bg-[#F9FAFB] text-[#475467] text-xs font-semibold">Course</th>
                                <th className="border-b border-t border-slate-300 p-3 text-start bg-[#F9FAFB] text-[#475467] text-xs font-semibold">Title</th>
                                <th className="border-b border-t border-slate-300 p-3 text-start bg-[#F9FAFB] text-[#475467] text-xs font-semibold"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                assessments.map((assessment, index) => (
                                    <tr className="w-full" key={index}>
                                        <td className="border-b border-slate-300 bg-white p-3">
                                            <span className="block text-[#101828] text-sm font-normal">{assessment.date}</span>
                                            <span className="block text-[#475467] text-sm font-normal">{assessment.time}</span>
                                        </td>
                                        <td className="border-b border-slate-300 bg-white p-3 text-sm font-medium text-[#101828]">Course</td>
                                        <td className="border-b border-slate-300 bg-white p-3">
                                            <span className="block text-[#101828] text-sm">{assessment.title}</span>
                                            <span className="block text-[#475467] text-sm">{assessment.description}</span>
                                        </td>
                                        <td className="border-b border-slate-300 bg-white p-3">
                                            <div className="flex gap-2 justify-center">
                                                <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <g clipPath="url(#clip0_16_11464)">
                                                        <path d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM8 9H16V19H8V9ZM15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5Z" fill="#323232" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_16_11464">
                                                            <rect width="24" height="24" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <g clipPath="url(#clip0_16_14087)">
                                                        <path d="M14.06 9.02L14.98 9.94L5.92 19H5V18.08L14.06 9.02ZM17.66 3C17.41 3 17.15 3.1 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C18.17 3.09 17.92 3 17.66 3ZM14.06 6.19L3 17.25V21H6.75L17.81 9.94L14.06 6.19Z" fill="#323232" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_16_14087">
                                                            <rect width="24" height="24" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <g clipPath="url(#clip0_16_7064)">
                                                        <path d="M19 9H15V3H9V9H5L12 16L19 9ZM5 18V20H19V18H5Z" fill="#323232" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_16_7064">
                                                            <rect width="24" height="24" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-between items-center p-3 border border-slate-300 bg-white rounded-bl-lg rounded-br-lg">
                    <button disabled className="border border-[#D0D5DD] rounded-lg py-2 px-3 text-[#666] font-semibold text-sm">Previous</button>
                    <span className="text-[#344054] text-sm font-medium">Page 1 of 10</span>
                    <button className="border border-[#D0D5DD] rounded-lg py-2 px-3 text-[#344054] font-semibold text-sm">Next</button>
                </div>
            </div>
        </div>
    );
}