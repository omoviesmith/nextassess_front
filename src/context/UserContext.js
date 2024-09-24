"use client"

import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const cookieUser = document.cookie.split('; ').find(row => row.startsWith('user='));
        if (cookieUser) {
            setUser(JSON.parse(cookieUser.split('=')[1]));
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};