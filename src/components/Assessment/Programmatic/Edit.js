'use client'

import { useRouter } from "next/navigation";
import { ImPencil } from "react-icons/im";
import { IoMdArrowBack } from "react-icons/io";

export default function ProgrammaticEdit() {
    const router = useRouter();
    return (
        <>
            <div className="flex justify-between items-center md:flex-row flex-col gap-5 my-4">
                <div onClick={() => router.back()}>
                    <button className="flex items-center gap-2 bg-white rounded-md py-3 px-5 text-[#202123] font-semibold">
                        <IoMdArrowBack className="w-5 h-5" /> Back
                    </button>
                </div>
            </div>
            <div className="md:w-1/2 mx-auto bg-white rounded-[10px] border border-[#A9A9A9] mt-5">
                <div className="p-8">
                    <div className="flex justify-between items-center p-4 bg-[#E8E9FC] rounded">
                        <h1 className="text-black text-2xl font-semibold leading-[50px]">
                            Historical Tale: A Tale of Two Cities
                        </h1>
                        <div className="w-[10%] flex justify-center">
                            <div className="flex justify-center cursor-pointer items-center border border-black rounded-full w-10 h-10">
                                <ImPencil className="text-sm" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-[#E8E9FC] rounded mt-4">
                        <div>
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
                        <div className="w-[10%] flex justify-center">
                            <div className="flex justify-center cursor-pointer items-center border border-black rounded-full w-10 h-10">
                                <ImPencil className="text-sm" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between p-4 bg-[#E8E9FC] rounded mt-4">
                        <h1 className="leading-[50px] text-xl font-semibold">The Shoemaker’s Garret</h1>
                        <div className="w-[10%] flex justify-center">
                            <div className="flex justify-center cursor-pointer items-center border border-black rounded-full w-10 h-10">
                                <ImPencil className="text-sm" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between p-4 bg-[#E8E9FC] rounded mt-4">
                        <div className="w-[90%]">
                            <h3 className="font-semibold text-xl leading-[50px]">1 - The Shoemaker's Solitude</h3>
                            <p className="text-[#666666] leading-6 text-sm">The shoemaker toils silently in his garret, immersed in the solitude of his relentless work. His faded surroundings bear testimony to a life of seclusion and resilience.</p>
                        </div>
                        <div className="w-[10%] flex justify-center">
                            <div className="flex justify-center cursor-pointer items-center border border-black rounded-full w-10 h-10">
                                <ImPencil className="text-sm" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between p-4 bg-[#E8E9FC] rounded mt-4">
                        <div className="w-[90%]">
                            <h3 className="font-semibold text-xl leading-[50px]">2 - A Glimmer of Light</h3>
                            <p className="text-[#666666] leading-6 text-sm">A ray of light pierces through the darkness, bringing a momentary respite to the gloom that envelops the shoemaker's garret. It illuminates the worn tools and scraps of leather, casting a poignant glow on his unfinished creations.</p>
                        </div>
                        <div className="w-[10%] flex justify-center">
                            <div className="flex justify-center cursor-pointer items-center border border-black rounded-full w-10 h-10">
                                <ImPencil className="text-sm" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between p-4 bg-[#E8E9FC] rounded mt-4">
                        <div className="w-[90%]">
                            <h3 className="font-semibold text-xl leading-[50px]">3 - Moment of Recognition</h3>
                            <p className="text-[#666666] leading-6 text-sm">The shoemaker toils silently in his garret, immersed in the solitude of his relentless work. His faded surroundings bear testimony to a life of seclusion and resilience.</p>
                        </div>
                        <div className="w-[10%] flex justify-center">
                            <div className="flex justify-center cursor-pointer items-center border border-black rounded-full w-10 h-10">
                                <ImPencil className="text-sm" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}