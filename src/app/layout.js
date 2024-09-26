// import { Inter } from "next/font/google";
// import { Toaster } from "react-hot-toast";
// import "./globals.css";
// import { UserProvider } from "@/context/UserContext";

// const inter = Inter({ subsets: ["latin"] });

// // export const metadata = {
// //   title: "NextAssess ",
// //   description: "Assignment Generator",
// // };

// // export default function RootLayout({ children }) {
// //   return (
// //     <html lang="en">
// //       <body className={inter.className}>
// //         <Toaster position="top-right" />
// //         <UserProvider>
// //           {children}
// //         </UserProvider>
// //       </body>
// //     </html>
// //   );
// // }

import { CookiesProvider } from 'react-cookie';
import { UserProvider } from '@/context/UserContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css'; // Ensure global styles are imported
import { Inter } from 'next/font/google'; // Example for importing Inter font

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

export const metadata = {
  title: "NextAssess",
  description: "Assignment Generator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CookiesProvider>
          <UserProvider>
            {children}
            <ToastContainer position="top-right" />
          </UserProvider>
        </CookiesProvider>
      </body>
    </html>
  );
}
