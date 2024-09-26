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
import Providers from '@/components/Providers'; // Adjust the path if necessary
import { Inter } from 'next/font/google'; // Example for importing Inter font
import './globals.css'; // Ensure global styles are imported

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

export const metadata = {
  title: "NextAssess",
  description: "Assignment Generator",
  // You can add more metadata as needed
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
