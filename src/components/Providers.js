"use client";

import { CookiesProvider } from 'react-cookie';
import { UserProvider } from '@/context/UserContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Providers({ children }) {
  return (
    <CookiesProvider>
      <UserProvider>
        {children}
        <ToastContainer position="top-right" />
      </UserProvider>
    </CookiesProvider>
  );
}