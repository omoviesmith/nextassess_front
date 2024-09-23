'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Sidebar() {
    const currentPath = usePathname();
    return (
        <div className="py-3 px-1 rounded-lg border-2 border-[#EAECF0] fixed w-[22%] h-[88vh]">
            <div className="flex justify-center">
                <Image src='/logo-2.png' width='180' height='57' />
            </div>
            <div className="mt-8">
                <ul className="side-links">
                    <li className={`flex items-center gap-2 px-3 py-3 mb-2 rounded-md ${currentPath === '/assessments' ? 'bg-white text-[#2D68A2] active-link' : 'text-[#181A1B]'} hover:bg-white hover:text-[#2D68A2]`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="transition-colors duration-300">
                            <g clipPath="url(#clip0_16_6862)">
                                <path d="M9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17ZM19.5 19.1H4.5V5H19.5V19.1ZM19.5 3H4.5C3.4 3 2.5 3.9 2.5 5V19C2.5 20.1 3.4 21 4.5 21H19.5C20.6 21 21.5 20.1 21.5 19V5C21.5 3.9 20.6 3 19.5 3Z" fill="#323232"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_16_6862">
                                    <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <Link className="text-sm transition-colors duration-200 font-medium" href='/assessments'>Assessment Panel</Link>
                    </li>
                    <li className={`flex items-center gap-2 px-3 py-3 mb-2 rounded-md ${currentPath === '/subscription' ? 'bg-white text-[#2D68A2] active-link' : 'text-[#181A1B]'} text-[#181A1B] hover:bg-white hover:text-[#2D68A2]`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clipPath="url(#clip0_16_13016)">
                                <path d="M13 7.5H18V9.5H13V7.5ZM13 14.5H18V16.5H13V14.5ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM11 6H6V11H11V6ZM10 10H7V7H10V10ZM11 13H6V18H11V13ZM10 17H7V14H10V17Z" fill="#323232"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_16_13016">
                                    <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <Link className="text-sm transition-colors duration-200 font-medium" href='/subscription'>Billing & Subscription</Link>
                    </li>
                    <li className={`flex items-center gap-2 px-3 py-3 mb-2 rounded-md ${currentPath === '/courses' ? 'bg-white text-[#2D68A2] active-link' : 'text-[#181A1B]'} text-[#181A1B] hover:bg-white hover:text-[#2D68A2]`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="19" viewBox="0 0 23 19" fill="none">
                            <path d="M2 2H20V7H22V2C22 0.9 21.1 0 20 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H11V14H2V2Z" fill="#323232"/>
                            <path d="M14 8L8 4V12L14 8Z" fill="#323232"/>
                            <path d="M21.7102 14.43C21.7402 14.14 21.7502 13.85 21.7202 13.57L22.7902 12.72C22.8902 12.64 22.9102 12.51 22.8502 12.4L21.8202 10.61C21.7602 10.5 21.6302 10.46 21.5102 10.5L20.2302 11C20.0002 10.83 19.7502 10.69 19.4802 10.58L19.2802 9.22C19.2602 9.09 19.1602 9 19.0302 9H16.9602C16.8402 9 16.7302 9.09 16.7102 9.21L16.5102 10.57C16.2502 10.68 16.0002 10.83 15.7702 10.99L14.4902 10.49C14.3702 10.44 14.2402 10.49 14.1802 10.6L13.1502 12.39C13.0902 12.5 13.1102 12.63 13.2102 12.71L14.2802 13.57C14.2502 13.86 14.2402 14.15 14.2702 14.43L13.2002 15.28C13.1002 15.36 13.0802 15.49 13.1402 15.6L14.1702 17.39C14.2302 17.5 14.3602 17.54 14.4802 17.5L15.7502 17C15.9802 17.17 16.2302 17.31 16.5002 17.42L16.7002 18.78C16.7202 18.9 16.8202 18.99 16.9502 18.99H19.0202C19.1402 18.99 19.2502 18.9 19.2702 18.78L19.4702 17.42C19.7302 17.31 19.9802 17.16 20.2102 17L21.4902 17.5C21.6102 17.55 21.7402 17.5 21.8002 17.39L22.8302 15.6C22.8902 15.49 22.8702 15.36 22.7702 15.28L21.7102 14.43ZM18.0002 15.5C17.1702 15.5 16.5002 14.83 16.5002 14C16.5002 13.17 17.1702 12.5 18.0002 12.5C18.8302 12.5 19.5002 13.17 19.5002 14C19.5002 14.83 18.8302 15.5 18.0002 15.5Z" fill="#323232"/>
                        </svg>
                        <Link className="text-sm transition-colors duration-200 font-medium" href='/courses'>Courses</Link>
                    </li>
                    <li className={`flex items-center gap-2 px-3 py-3 mb-2 rounded-md ${currentPath === '/users' ? 'bg-white text-[#2D68A2] active-link' : 'text-[#181A1B]'} text-[#181A1B] hover:bg-white hover:text-[#2D68A2]`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
                            <path d="M15.6699 9.12988C17.0399 10.0599 17.9999 11.3199 17.9999 12.9999V15.9999H21.9999V12.9999C21.9999 10.8199 18.4299 9.52988 15.6699 9.12988Z" fill="#323232"/>
                            <path d="M13.9999 8C16.2099 8 17.9999 6.21 17.9999 4C17.9999 1.79 16.2099 0 13.9999 0C13.5299 0 13.0899 0.0999998 12.6699 0.24C13.4999 1.27 13.9999 2.58 13.9999 4C13.9999 5.42 13.4999 6.73 12.6699 7.76C13.0899 7.9 13.5299 8 13.9999 8Z" fill="#323232"/>
                            <path d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 2C9.1 2 10 2.9 10 4C10 5.1 9.1 6 8 6C6.9 6 6 5.1 6 4C6 2.9 6.9 2 8 2Z" fill="#323232"/>
                            <path d="M8 9C5.33 9 0 10.34 0 13V16H16V13C16 10.34 10.67 9 8 9ZM14 14H2V13.01C2.2 12.29 5.3 11 8 11C10.7 11 13.8 12.29 14 13V14Z" fill="#323232"/>
                        </svg>
                        <Link className="text-sm transition-colors duration-200 font-medium" href='/users'>Users</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
  