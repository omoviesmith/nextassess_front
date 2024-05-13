import Sidebar from "@/components/Sidebar/Sidebar";
import SidebarSm from "@/components/Sidebar/SidebarSm";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextAssess",
  description: "Assignment Generator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <div className="flex flex-col md:flex-row bg-[#F9F5FF] min-h-screen py-8 px-3 md:px-8">
          <div className="w-1/4 hidden md:block">
            <Sidebar />
          </div>
          <div className="block md:hidden">
            <SidebarSm />
          </div>
          <div className="relative md:w-3/4">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
