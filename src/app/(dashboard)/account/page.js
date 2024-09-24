'use client'

import Image from "next/image";
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import AccountForm from "@/components/AccountForm/AccountForm";
import { MdOutlineEdit } from "react-icons/md";
import { useUser } from "@/context/UserContext";

export default function Account() {
    const { user } = useUser();
    const [editType, setEditType] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    function handleEdit(type) {
        setEditType(type);
        setIsOpen(true);
    }
    return (
        <>
            <h3 className="text-[#101828] text-3xl font-semibold">My Account</h3>
            <p className="text-[#475467] text-base font-normal mt-2">Track, manage and forecast your presentations.</p>
            <div className="mt-8">
                <div className="bg-white p-8 rounded-2xl flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="m-0 rounded-full">
                            <Image src='/account.png' width={120} height={120} />
                        </div>
                        <div>
                            <h3 className="text-[#061C3D] text-[22px] leading-7 font-semibold">{user && user.fullName}</h3>
                            <h6 className="text-[#42526B] font-medium text-base leading-[25px] my-2">{user && user.institutionName}</h6>
                            <p className="text-[#42526B] leading-[25px] text-base font-normal">{user && user.cityState}, {user && user.postalCode} {user && user.country}</p>
                        </div>
                    </div>
                    <button onClick={() => handleEdit('institute')} className="flex gap-2 items-center border border-[#D1D1D1] rounded-3xl py-[6px] px-[17px] text-[#0B63E5]">
                        <MdOutlineEdit className="w-4 h-4" /> Edit
                    </button>
                </div>
                <div className="bg-white p-8 rounded-2xl my-6">
                    <div className="flex justify-between">
                        <h2 className="text-[#9167E5] font-semibold leading-7 text-[22px]">Personal Information</h2>
                        <button onClick={() => handleEdit('personal')} className="flex gap-2 items-center border border-[#D1D1D1] rounded-3xl py-[6px] px-[17px] text-[#0B63E5]">
                            <MdOutlineEdit className="w-4 h-4" /> Edit
                        </button>
                    </div>
                    <div className="flex mt-8 mb-2 gap-6 justify-between md:w-1/2">
                        <div>
                            <h3 className="text-[#061C3D] text-lg leading-7 font-semibold">First Name</h3>
                            <p className="text-[#42526B] font-medium text-sm leading-[25px] mt-1">{user && user.firstName}</p>
                        </div>
                        <div>
                            <h3 className="text-[#061C3D] text-lg leading-7 font-semibold">Last Name</h3>
                            <p className="text-[#42526B] font-medium text-sm leading-[25px] mt-1">{user && user.lastName}</p>
                        </div>
                    </div>
                    <div className="flex mt-8 mb-2 gap-6 justify-between md:w-1/2">
                        <div>
                            <h3 className="text-[#061C3D] text-lg leading-7 font-semibold">Email address</h3>
                            <p className="text-[#42526B] font-medium text-sm leading-[25px] mt-1">{user && user.emailAddress}</p>
                        </div>
                        <div>
                            <h3 className="text-[#061C3D] text-lg leading-7 font-semibold">Phone</h3>
                            <p className="text-[#42526B] font-medium text-sm leading-[25px] mt-1">{user && user.phone}</p>
                        </div>
                    </div>
                    <div className="flex mt-8 mb-2 gap-6 justify-between md:w-1/2">
                        <div>
                            <h3 className="text-[#061C3D] text-lg leading-7 font-semibold">Bio</h3>
                            <p className="text-[#42526B] font-medium text-sm leading-[25px] mt-1">{user && user.bio}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-8 rounded-2xl my-6">
                    <div className="flex justify-between">
                        <h2 className="text-[#9167E5] font-semibold leading-7 text-[22px]">Contact Information</h2>
                        <button onClick={() => handleEdit('contact')} className="flex gap-2 items-center border border-[#D1D1D1] rounded-3xl py-[6px] px-[17px] text-[#0B63E5]">
                            <MdOutlineEdit className="w-4 h-4" /> Edit
                        </button>
                    </div>
                    <div className="flex mt-8 mb-2 gap-6 justify-between md:w-1/2">
                        <div>
                            <h3 className="text-[#061C3D] text-lg leading-7 font-semibold">Country</h3>
                            <p className="text-[#42526B] font-medium text-sm leading-[25px] mt-1">{user && user.country}</p>
                        </div>
                        <div>
                            <h3 className="text-[#061C3D] text-lg leading-7 font-semibold">City/State</h3>
                            <p className="text-[#42526B] font-medium text-sm leading-[25px] mt-1">{user && user.cityState}</p>
                        </div>
                    </div>
                    <div className="flex mt-8 mb-2 gap-6 justify-between md:w-1/2">
                        <div>
                            <h3 className="text-[#061C3D] text-lg leading-7 font-semibold">Postal Code</h3>
                            <p className="text-[#42526B] font-medium text-sm leading-[25px] mt-1">{user && user.postalCode}</p>
                        </div>
                        <div>
                            <h3 className="text-[#061C3D] text-lg leading-7 font-semibold">TAX ID</h3>
                            <p className="text-[#42526B] font-medium text-sm leading-[25px] mt-1">{user && user.taxId}</p>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && <AccountForm isOpen={isOpen} onClose={() => setIsOpen(false)} editType={editType} />}
        </>
    );
}