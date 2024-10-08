// "use client"

// import { createContext, useContext, useState, useEffect } from 'react';

// const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         const cookieUser = document.cookie.split('; ').find(row => row.startsWith('user='));
//         if (cookieUser) {
//             setUser(JSON.parse(cookieUser.split('=')[1]));
//         }
//     }, []);

//     return (
//         <UserContext.Provider value={{ user, setUser }}>
//             {children}
//         </UserContext.Provider>
//     );
// };

// export const useUser = () => {
//     return useContext(UserContext);
// };


// "use client";

// import { createContext, useContext, useState, useEffect } from 'react';
// import { useCookies } from 'react-cookie';

// const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//     const [cookies, setCookie, removeCookie] = useCookies(['user']);
//     const [user, setUserState] = useState(null);

//     useEffect(() => {
//         if (cookies.user) {
//             try {
//                 const parsedUser = JSON.parse(cookies.user);
//                 setUserState(parsedUser);
//             } catch (error) {
//                 console.error('Failed to parse user cookie:', error);
//                 setUserState(null);
//             }
//         } else {
//             setUserState(null);
//         }
//     }, [cookies.user]);

//     const setUser = (newUser) => {
//         if (newUser) {
//             setUserState(newUser);
//             setCookie('user', JSON.stringify(newUser), {
//                 path: '/',
//                 secure: true,       // Ensures cookie is sent over HTTPS
//                 sameSite: 'strict', // Helps mitigate CSRF attacks
//             });
//         } else {
//             setUserState(null);
//             removeCookie('user', { path: '/' });
//         }
//     };

//     return (
//         <UserContext.Provider value={{ user, setUser }}>
//             {children}
//         </UserContext.Provider>
//     );
// };

// export const useUser = () => {
//     return useContext(UserContext);
// };

// UserContext.js
"use client";

import { createContext, useContext, useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [cookies, setCookie, removeCookie] = useCookies(['user'], {
        doNotParse: true,
    });
    const [user, setUserState] = useState(null);
    const [loading, setLoading] = useState(true); // Initialize loading state

    useEffect(() => {
        if (cookies.user) {
            try {
                const parsedUser = JSON.parse(cookies.user);
                setUserState(parsedUser);
                console.log('User set from cookie:', parsedUser);
            } catch (error) {
                console.error('Failed to parse user cookie:', error);
                setUserState(null);
                // Remove the malformed cookie to prevent continuous errors
                removeCookie('user', { path: '/' });
            }
        } else {
            setUserState(null);
        }
        setLoading(false); // Set loading to false after processing cookies
    }, [cookies.user, removeCookie]);

    const setUser = (newUser) => {
        if (newUser) {
            setUserState(newUser);
            // Ensure the user object is stringified before setting the cookie
            setCookie('user', JSON.stringify(newUser), {
                path: '/',
                secure: false,        // Ensure cookie is sent over HTTPS
                sameSite: 'lax',      // Helps mitigate CSRF attacks
                // Optionally, set an expiration date
                // expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 1 week
            });
            console.log('User cookie set:', newUser);
        } else {
            setUserState(null);
            removeCookie('user', { path: '/' });
            console.log('User logged out, cookie removed');
        }
    };

    return (
        <UserContext.Provider value={{ user, setUser, loading }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};
// "use client";

// import { createContext, useContext, useState, useEffect } from 'react';
// import { useCookies } from 'react-cookie';

// const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//     const [cookies, setCookie, removeCookie] = useCookies(['user'],{
//         doNotParse: true,
//     });
//     const [user, setUserState] = useState(null);

//     useEffect(() => {
//         if (cookies.user) {
//             try {
//                 const parsedUser = JSON.parse(cookies.user);
//                 setUserState(parsedUser);
//                 console.log('User set from cookie:', parsedUser);
//             } catch (error) {
//                 console.error('Failed to parse user cookie:', error);
//                 setUserState(null);
//                 // Remove the malformed cookie to prevent continuous errors
//                 removeCookie('user', { path: '/' });
//             }
//         } else {
//             setUserState(null);
//         }
//     }, [cookies.user, removeCookie]);

//     const setUser = (newUser) => {
//         if (newUser) {
//             setUserState(newUser);
//             // Ensure the user object is stringified before setting the cookie
//             setCookie('user', JSON.stringify(newUser), {
//                 path: '/',
//                 secure: false,        // Ensures cookie is sent over HTTPS
//                 sameSite: 'lax',  // Helps mitigate CSRF attacks
//                 // Optionally, set an expiration date
//                 // expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 1 week
//             });
//             console.log('User cookie set:', newUser);
//         } else {
//             setUserState(null);
//             removeCookie('user', { path: '/' });
//             console.log('User logged out, cookie removed');
//         }
//     };

//     return (
//         <UserContext.Provider value={{ user, setUser }}>
//             {children}
//         </UserContext.Provider>
//     );
// };

// export const useUser = () => {
//     return useContext(UserContext);
// };