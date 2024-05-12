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
                <div className="bg-[#F9F5FF] admin-wrapper min-h-screen p-8">
                    <div className="relative">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
