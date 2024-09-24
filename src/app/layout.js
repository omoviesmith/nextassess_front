import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { UserProvider } from "@/context/UserContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextAssess ",
  description: "Assignment Generator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-right" />
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
