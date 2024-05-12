const billings = [
    {
      date: '12/12/2023',
      time: '10:00 AM',
      plan: 'Annual Plan',
      cost: '$149',
      status: 2
    },
    {
      date: '12/12/2023',
      time: '10:00 AM',
      plan: 'Monthly Plan',
      cost: '$29',
      status: 1
    },
    {
      date: '12/12/2023',
      time: '10:00 AM',
      plan: 'Monthly Plan',
      cost: '$29',
      status: 0
    },
    {
      date: '12/12/2023',
      time: '10:00 AM',
      plan: 'Monthly Plan',
      cost: '$29',
      status: 1
    },
    {
      date: '12/12/2023',
      time: '10:00 AM',
      plan: 'Monthly Plan',
      cost: '$29',
      status: 0
    },
  ]
  export default function Billing() {
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
        <h3 className="text-[#101828] text-3xl font-semibold">Billing History</h3>
        <p className="text-[#475467] text-base font-normal mt-2">Track, manage and forecast your presentations.</p>
        <div className="flex justify-end mt-6">
          <div className="relative">
            <svg className="absolute top-3 left-3" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="#667085"/>
            </svg>
            <input placeholder="Search" type="text" className="rounded-lg border-[1px] border-[#D0D5DD] py-[10px] pr-4 pl-10 outline-none" />
          </div>
        </div>
        <div className="mt-8">
          <table className="table-auto border-collapse overflow-auto md:w-full md:overflow-hidden border border-slate-300 rounded-lg">
            <thead>
              <tr>
                <th className="border-b border-t border-slate-300 p-3 text-start bg-[#F9FAFB] text-[#475467] text-xs font-semibold">Date</th>
                <th className="border-b border-t border-slate-300 p-3 text-start bg-[#F9FAFB] text-[#475467] text-xs font-semibold">Plan</th>
                <th className="border-b border-t border-slate-300 p-3 text-start bg-[#F9FAFB] text-[#475467] text-xs font-semibold">Cost</th>
                <th className="border-b border-t border-slate-300 p-3 text-start bg-[#F9FAFB] text-[#475467] text-xs font-semibold">Status</th>
                <th className="border-b border-t border-slate-300 p-3 text-start bg-[#F9FAFB] text-[#475467] text-xs font-semibold"></th>
              </tr>
            </thead>
            <tbody>
              {
                billings.map((billing, index) => (
                  <tr key={index}>
                    <td className="border-b border-slate-300 bg-white p-3">
                      <span className="block text-[#101828] text-sm font-normal">{ billing.date }</span>
                      <span className="block text-[#475467] text-sm font-normal">{ billing.time }</span>
                    </td>
                    <td className="border-b border-slate-300 bg-white p-3 text-sm font-medium text-[#101828]">{billing.plan}</td>
                    <td className="border-b border-slate-300 bg-white p-3">
                      <span className="block text-[#101828] text-sm">{billing.cost}</span>
                    </td>
                    <td className="border-b border-slate-300 bg-white p-3">
                      <div className="flex justify-start">
                        <span className={`block ${getStatusBgColorClass(billing.status)} py-[2px] px-2 text-xs font-medium rounded-2xl ${getStatusTextColorClass(billing.status)}`}>{getStatusText(billing.status)}</span>
                      </div>
                    </td>
                    <td className="border-b border-slate-300 bg-white p-3">
                      <div className="flex gap-2 justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <g clipPath="url(#clip0_16_7064)">
                            <path d="M19 9H15V3H9V9H5L12 16L19 9ZM5 18V20H19V18H5Z" fill="#323232"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_16_7064">
                              <rect width="24" height="24" fill="white"/>
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
      </div>
    );
  }