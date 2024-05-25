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
                    <li className={`flex items-center gap-2 px-3 py-3 mb-2 rounded-md ${currentPath === '/support' ? 'bg-white text-[#2D68A2] active-link' : 'text-[#181A1B]'} text-[#181A1B] hover:bg-white hover:text-[#2D68A2]`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM17.46 7.12L14.68 8.27C14.17 6.91 13.1 5.83 11.73 5.33L12.88 2.55C14.98 3.35 16.65 5.02 17.46 7.12ZM10 13C8.34 13 7 11.66 7 10C7 8.34 8.34 7 10 7C11.66 7 13 8.34 13 10C13 11.66 11.66 13 10 13ZM7.13 2.54L8.3 5.32C6.92 5.82 5.83 6.91 5.32 8.29L2.54 7.13C3.35 5.02 5.02 3.35 7.13 2.54ZM2.54 12.87L5.32 11.72C5.83 13.1 6.91 14.18 8.29 14.68L7.12 17.46C5.02 16.65 3.35 14.98 2.54 12.87ZM12.88 17.46L11.73 14.68C13.1 14.17 14.18 13.09 14.68 11.71L17.46 12.88C16.65 14.98 14.98 16.65 12.88 17.46Z" fill="#323232"/>
                        </svg>
                        <Link className="text-sm transition-colors duration-200 font-medium" href='/support'>Support</Link>
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
                    <li className={`flex items-center gap-2 px-3 py-3 mb-2 rounded-md ${currentPath === '/account' ? 'bg-white text-[#2D68A2] active-link' : 'text-[#181A1B]'} text-[#181A1B] hover:bg-white hover:text-[#2D68A2]`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM5.07 16.28C5.5 15.38 8.12 14.5 10 14.5C11.88 14.5 14.51 15.38 14.93 16.28C13.57 17.36 11.86 18 10 18C8.14 18 6.43 17.36 5.07 16.28ZM16.36 14.83C14.93 13.09 11.46 12.5 10 12.5C8.54 12.5 5.07 13.09 3.64 14.83C2.62 13.49 2 11.82 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 11.82 17.38 13.49 16.36 14.83ZM10 4C8.06 4 6.5 5.56 6.5 7.5C6.5 9.44 8.06 11 10 11C11.94 11 13.5 9.44 13.5 7.5C13.5 5.56 11.94 4 10 4ZM10 9C9.17 9 8.5 8.33 8.5 7.5C8.5 6.67 9.17 6 10 6C10.83 6 11.5 6.67 11.5 7.5C11.5 8.33 10.83 9 10 9Z" fill="#323232"/>
                        </svg>
                        <Link className="text-sm transition-colors duration-200 font-medium" href='/account'>My Account</Link>
                    </li>
                    <li className={`flex items-center gap-2 px-3 py-3 mb-2 rounded-md ${currentPath === '/' ? 'bg-white text-[#2D68A2] active-link' : 'text-[#181A1B]'} text-[#181A1B] hover:bg-white hover:text-[#2D68A2]`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clipPath="url(#clip0_16_8621)">
                                <path d="M17 7L15.59 8.41L18.17 11H8V13H18.17L15.59 15.58L17 17L22 12L17 7ZM4 5H12V3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H12V19H4V5Z" fill="#323232"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_16_8621">
                                    <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <Link className="text-sm transition-colors duration-200 font-medium" href='/'>Logout</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
  