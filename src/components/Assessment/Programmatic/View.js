'use client'

import { ImPencil } from "react-icons/im";
import { IoMdArrowBack } from "react-icons/io";
import { useRouter } from 'next/navigation'
import { BiSolidLike, BiSolidDislike, BiSolidPencil } from "react-icons/bi";
import { MdRefresh, MdDownload } from "react-icons/md";
import { IoSaveSharp } from "react-icons/io5";
import { useState } from "react";
import ProgrammaticEdit from "./Edit";

export default function ProgrammaticView() {
    const router = useRouter();
    const [isEdit, setIsEdit] = useState(false);
    return (
        <>
            {
                !isEdit ? (<>
                    <div className="flex justify-between items-center md:flex-row flex-col gap-5 my-4">
                        <div onClick={() => router.back()}>
                            <button className="flex items-center gap-2 bg-white rounded-md py-3 px-5 text-[#202123] font-semibold">
                                <IoMdArrowBack className="w-5 h-5" /> Back
                            </button>
                        </div>
                        <div onClick={()=> setIsEdit(true)}>
                            <button className="flex items-center gap-2 bg-white rounded-md py-3 px-7 text-[#202123] font-semibold">
                                <ImPencil className="w-4 h-4" /> Edit
                            </button>
                        </div>
                    </div>
                    <div className="md:w-1/2 mx-auto bg-white rounded-[10px] border border-[#A9A9A9] mt-5">
                        <div className="p-8">
                            <h1 className="text-black text-2xl font-semibold leading-[50px] mb-3">
                                Historical Tale: A Tale of Two Cities
                            </h1>
                            <p className="text-[#666666] font-normal text-[15px] leading-[26px]">
                                Due date: Due on wattle by 5PM Friday 26 May
                            </p>
                            <p className="text-[#666666] font-normal text-[15px] leading-[26px] mb-3">
                                In the midst of the turbulent period of the French Revolution, Charles Dickens weaves a mesmerizing tale of love, sacrifice, and redemption in "A Tale of Two Cities". The novel unfolds against the backdrop of unrest and social upheaval, with vivid descriptions of London and Paris during the late 18th century.
                            </p>
                            <p className="text-[#666666] font-normal text-[15px] leading-[26px]">
                                In the midst of the turbulent period of the French Revolution, Charles Dickens weaves a mesmerizing tale of love, sacrifice, and redemption in "A Tale of Two Cities". The novel unfolds against the backdrop of unrest and social upheaval, with vivid descriptions of London and Paris during the late 18th century.In the midst of the turbulent period of the French Revolution, Charles Dickens weaves a mesmerizing tale of love, sacrifice, and redemption in "A Tale of Two Cities". The novel unfolds against the backdrop of unrest and social upheaval, with vivid descriptions of London and Paris during the late 18th century.
                            </p>
                        </div>
                        <div className="p-8">
                            <h1 className="mb-5 text-[40px] leading-[50px] font-semibold">The Shoemaker’s Garret</h1>
                            <div>
                                <div className="flex items-start justify-between gap-3">
                                    <div className="w-[10%] flex justify-center">
                                        <div className="flex justify-center items-center w-[60px] h-[60px] rounded-full bg-[#DADBF1]">
                                            <span className="font-semibold text-2xl leading-[50px]">1</span>
                                        </div>
                                    </div>
                                    <div className="w-[90%]">
                                        <h3 className="text-2xl font-semibold leading-[50px]">The Shoemaker's Solitude</h3>
                                        <p className="text-[#666666] leading-6 text-sm">The shoemaker toils silently in his garret, immersed in the solitude of his relentless work. His faded surroundings bear testimony to a life of seclusion and resilience.</p>
                                    </div>
                                </div>
                                <div className="flex items-start justify-between gap-3">
                                    <div className="w-[10%] flex justify-center">
                                        <div className="flex justify-center items-center w-[60px] h-[60px] rounded-full bg-[#DADBF1]">
                                            <span className="font-semibold text-2xl leading-[50px]">2</span>
                                        </div>
                                    </div>
                                    <div className="w-[90%]">
                                        <h3 className="text-2xl font-semibold leading-[50px]">A Glimmer of Light</h3>
                                        <p className="text-[#666666] leading-6 text-sm">A ray of light pierces through the darkness, bringing a momentary respite to the gloom that envelops the shoemaker's garret. It illuminates the worn tools and scraps of leather, casting a poignant glow on his unfinished creations.</p>
                                    </div>
                                </div>
                                <div className="flex items-start justify-between gap-3">
                                    <div className="w-[10%] flex justify-center">
                                        <div className="flex justify-center items-center w-[60px] h-[60px] rounded-full bg-[#DADBF1]">
                                            <span className="font-semibold text-2xl leading-[50px]">3</span>
                                        </div>
                                    </div>
                                    <div className="w-[90%]">
                                        <h3 className="text-2xl font-semibold leading-[50px]">Moment of Recognition</h3>
                                        <p className="text-[#666666] leading-6 text-sm">The shoemaker toils silently in his garret, immersed in the solitude of his relentless work. His faded surroundings bear testimony to a life of seclusion and resilience.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-6 gap-1 md:gap-3 mt-5 md:w-1/2 mx-auto">
                        <div className="py-4 cursor-pointer flex justify-center items-center bg-white flex-col gap-1 border border-[#A9A9A9] rounded-lg">
                            <BiSolidLike className="w-7 h-7" />
                            <p className="text-[#666666] text-center text-[13px]">Like</p>
                        </div>
                        <div className="py-4 cursor-pointer flex justify-center items-center bg-white flex-col gap-1 border border-[#A9A9A9] rounded-lg">
                            <BiSolidDislike className="w-7 h-7" />
                            <p className="text-[#666666] text-center text-[13px]">Unlike</p>
                        </div>
                        <div className="py-4 cursor-pointer flex justify-center items-center bg-white flex-col gap-1 border border-[#A9A9A9] rounded-lg">
                            <MdRefresh className="w-7 h-7 text-[#FF0000]" />
                            <p className="text-[#FF0000] text-center text-[13px]">Try Again</p>
                        </div>
                        <div className="py-4 cursor-pointer flex justify-center items-center bg-white flex-col gap-1 border border-[#A9A9A9] rounded-lg">
                            <IoSaveSharp className="w-7 h-7" />
                            <p className="text-[#666666] text-center text-[13px]">Save</p>
                        </div>
                        <div onClick={()=> setIsEdit(true)} className="py-4 cursor-pointer flex justify-center items-center bg-white flex-col gap-1 border border-[#A9A9A9] rounded-lg">
                            <BiSolidPencil className="w-7 h-7" />
                            <p className="text-[#666666] text-center text-[13px]">Edit</p>
                        </div>
                        <div className="py-4 cursor-pointer flex justify-center items-center bg-white flex-col gap-1 border border-[#A9A9A9] rounded-lg">
                            <MdDownload className="w-7 h-7" />
                            <p className="text-[#666666] text-center text-[13px]">Download</p>
                        </div>
                    </div>
                </>) : (
                    <ProgrammaticEdit />
                )
            }
        </>
    );
}
