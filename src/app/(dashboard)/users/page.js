import Link from "next/link";

const users = [
    {
        date: '12/12/2023',
        time: '10:00 AM',
        name: 'Nici Adam',
        email: 'Nici@gmail.com',
        status: 2
    },
    {
        date: '12/12/2023',
        time: '10:00 AM',
        name: 'Nici Adam',
        email: 'Nici@gmail.com',
        status: 1
    },
    {
        date: '12/12/2023',
        time: '10:00 AM',
        name: 'Nici Adam',
        email: 'Nici@gmail.com',
        status: 0
    },
    {
        date: '12/12/2023',
        time: '10:00 AM',
        name: 'Nici Adam',
        email: 'Nici@gmail.com',
        status: 1
    },
    {
        date: '12/12/2023',
        time: '10:00 AM',
        name: 'Nici Adam',
        email: 'Nici@gmail.com',
        status: 0
    },
]
export default function Users() {
    const getStatusText = (status) => {
        switch (status) {
            case 1:
                return 'Completed';
            case 0:
                return 'In Progress';
            default:
                return 'Cancelled';
        }
    };
    const getStatusBgColorClass = (status) => {
        switch (status) {
            case 1:
                return 'bg-[#F2F4F7]';
            case 0:
                return 'bg-[#ECFDF3]';
            default:
                return 'bg-[#FDECEC]';
        }
    };
    const getStatusTextColorClass = (status) => {
        switch (status) {
            case 1:
                return 'text-[#6941C6]';
            case 0:
                return 'text-[#027A48]';
            default:
                return 'text-[#FF0000]';
        }
    };
    return (
        <div>
            <div className="flex justify-between items-center md:flex-row flex-col gap-3">
                <div>
                    <h3 className="text-[#101828] text-3xl font-semibold">Welcome back, Nici</h3>
                    <p className="text-[#475467] text-base font-normal mt-2">Track, manage and forecast your users.</p>
                </div>
                <Link className="flex justify-end w-full md:w-auto" href='/users'>
                    <button className="text-sm text-white font-semibold bg-[#7F56D9] rounded-lg py-[10px] px-4"> + Add New User</button>
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
        <div className="relative w-1/2 md:w-auto">
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
                                <th className="border-b border-t border-slate-300 p-3 text-start bg-[#F9FAFB] text-[#475467] text-xs font-semibold">Name</th>
                                <th className="border-b border-t border-slate-300 p-3 text-start bg-[#F9FAFB] text-[#475467] text-xs font-semibold">Email</th>
                                <th className="border-b border-t border-slate-300 p-3 text-start bg-[#F9FAFB] text-[#475467] text-xs font-semibold">Status</th>
                                <th className="border-b border-t border-slate-300 p-3 text-start bg-[#F9FAFB] text-[#475467] text-xs font-semibold"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => (
                                    <tr key={index}>
                                        <td className="border-b border-slate-300 bg-white p-3">
                                            <span className="block text-[#101828] text-sm font-normal">{user.date}</span>
                                            <span className="block text-[#475467] text-sm font-normal">{user.time}</span>
                                        </td>
                                        <td className="border-b border-slate-300 bg-white p-3 text-sm font-medium text-[#101828]">{user.name}</td>
                                        <td className="border-b border-slate-300 bg-white p-3">
                                            <span className="block text-[#101828] text-sm">{user.email}</span>
                                        </td>
                                        <td className="border-b border-slate-300 bg-white p-3">
                                            <div className="flex justify-start">
                                                <span className={`block ${getStatusBgColorClass(user.status)} py-[2px] px-2 text-xs font-medium rounded-2xl ${getStatusTextColorClass(user.status)}`}>{getStatusText(user.status)}</span>
                                            </div>
                                        </td>
                                        <td className="border-b border-slate-300 bg-white p-3">
                                            <div className="flex gap-2 justify-start">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
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