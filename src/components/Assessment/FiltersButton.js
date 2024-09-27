// FiltersButton.js
// 'use client';

// import React from 'react';

// const FiltersButton = () => {
//     return (
//         <button className="flex gap-3 py-[10px] px-4 items-center bg-white text-[#344054] text-sm font-semibold rounded-lg border-[1px] border-[#D0D5DD]">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
//                 <g clipPath="url(#clip0_16_13075)">
//                     <path d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z" fill="#323232" />
//                 </g>
//                 <defs>
//                     <clipPath id="clip0_16_13075">
//                         <rect width="24" height="24" fill="white" />
//                     </clipPath>
//                 </defs>
//             </svg>
//             More Filters
//         </button>
//     );
// };

// export default React.memo(FiltersButton);

// components/Assessment/FiltersButton.js
'use client';

import React from 'react';

const FiltersButton = React.memo(() => {
  return (
    <button className="flex gap-3 py-[10px] px-4 items-center bg-white text-[#344054] text-sm font-semibold rounded-lg border-[1px] border-[#D0D5DD]">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
  );
});

export default FiltersButton;