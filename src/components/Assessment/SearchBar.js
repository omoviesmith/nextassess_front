// // SearchBar.js
// 'use client';

// import React from 'react';

// const SearchBar = ({ searchQuery, setSearchQuery }) => {
//     return (
//         <div className="relative w-1/2 md:w-auto">
//             <svg className="absolute top-3 left-3" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
//                 <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="#667085" />
//             </svg>
//             <input 
//                 placeholder="Search" 
//                 type="text" 
//                 className="rounded-lg w-full border-[1px] border-[#D0D5DD] py-[10px] pr-4 pl-10 outline-none" 
//                 aria-label="Search Assessments"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//             />
//         </div>
//     );
// };

// export default React.memo(SearchBar);

// components/Assessment/SearchBar.js
// 'use client';

// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

// const SearchBar = React.memo(({ searchQuery, setSearchQuery }) => {
//   const [inputValue, setInputValue] = useState(searchQuery);

//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setSearchQuery(inputValue);
//     }, 300); // 300ms debounce delay

//     return () => {
//       clearTimeout(handler);
//     };
//   }, [inputValue, setSearchQuery]);

//   return (
//     <div className="relative w-1/2 md:w-auto">
//       <svg className="absolute top-3 left-3" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
//         <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="#667085" />
//       </svg>
//       <input 
//         placeholder="Search" 
//         type="text" 
//         className="rounded-lg w-full border-[1px] border-[#D0D5DD] py-[10px] pr-4 pl-10 outline-none" 
//         aria-label="Search Assessments"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//     </div>
//   );
// });

// SearchBar.propTypes = {
//   searchQuery: PropTypes.string.isRequired,
//   setSearchQuery: PropTypes.func.isRequired,
// };

// export default SearchBar;


// components/Assessment/SearchBar.js
'use client';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = React.memo(({ searchQuery, setSearchQuery }) => {
  const [inputValue, setInputValue] = useState(searchQuery);

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchQuery(inputValue);
    }, 300); // 300ms debounce delay

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue, setSearchQuery]);

  return (
    <div className="relative w-1/2 md:w-auto">
      <svg className="absolute top-3 left-3" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="#667085" />
      </svg>
      <input 
        placeholder="Search" 
        type="text" 
        className="rounded-lg w-full border-[1px] border-[#D0D5DD] py-[10px] pr-4 pl-10 outline-none" 
        aria-label="Search Assessments"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
});

SearchBar.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
};

export default SearchBar;