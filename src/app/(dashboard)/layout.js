import Sidebar from "@/components/Sidebar/Sidebar";
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
        <div className="flex bg-[#F9F5FF] min-h-screen p-8">
          <div className="w-1/4">
            <Sidebar />
          </div>
          <div className="relative w-3/4">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
