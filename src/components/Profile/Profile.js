'use client'

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";
// import { MdBlurCircular } from "react-icons/md";
// import { TbChevronDown, TbChevronUp } from "react-icons/tb";
// import { useUser } from '@/context/UserContext';

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/UserContext';
import { TbChevronDown, TbChevronUp } from "react-icons/tb";

export default function Profile() {
    const { setUser } = useUser();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    const handleLogout = () => {
        // 1. Clear the user context
        setUser(null);
        // 2. Cookies are removed by setUser(null) in UserContext
        // 3. Redirect to the main page
        router.push('/');
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div>
            <div className="relative inline-block text-left mt-3 w-full" ref={dropdownRef}>
                <div>
                    <button
                        onClick={toggleDropdown}
                        type="button"
                        className={`flex gap-3 items-center justify-between w-full rounded-md shadow-sm text-base font-normal focus:outline-none text-black`}
                    >
                        <div className="m-0 rounded-full">
                            <Image src='/account.png' width={40} height={40} />
                        </div>
                        {isOpen ? <TbChevronUp className="text-black" /> : <TbChevronDown className="text-black" />}
                    </button>
                </div>

                {isOpen && (
                    <div className="origin-top-right z-10 w-44 absolute right-0 mt-1 rounded-md shadow-lg bg-white focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu" tabIndex="-1" id="dropdown-menu">
                        <div className="py-1" role="none">
                            <span onClick={toggleDropdown} className="block cursor-pointer px-4 py-2 text-sm text-black hover:bg-gray-100 hover:text-gray-900" role="menuitem" tabIndex="-1" id="dropdown-item-1">
                                <Link href='/account'>My Account</Link>
                            </span>
                            <span onClick={toggleDropdown} className="block cursor-pointer px-4 py-2 text-sm text-black hover:bg-gray-100 hover:text-gray-900" role="menuitem" tabIndex="-1" id="dropdown-item-2">
                                <Link href='/support'>Support</Link>
                            </span>
                            <span onClick={() => {toggleDropdown();handleLogout();}}
                                className="block cursor-pointer px-4 py-2 text-sm text-black hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                                tabIndex="-1"
                                id="dropdown-item-3">
                                <Link href='/'>Logout</Link>
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}