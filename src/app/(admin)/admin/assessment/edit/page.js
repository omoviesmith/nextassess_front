'use client'

import { ImPencil } from "react-icons/im";
import { MdRefresh, MdDownload } from "react-icons/md";
import { IoSaveSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { IoMdArrowBack } from "react-icons/io";

export default function Edit() {
    const router = useRouter();
    return (<>
        <div onClick={()=> router.back()}>
            <button className="flex items-center gap-2 bg-white rounded-md py-3 px-5 text-[#202123] font-semibold">
                <IoMdArrowBack className="w-5 h-5" /> Back
            </button>
        </div>
        <div className="my-7">
            <h1 className="text-black text-3xl font-bold leading-[50px] mb-3 mx-auto md:w-1/2">
                Historical Tale: A Tale of Two Cities
            </h1>
            <div className="md:w-1/2 mx-auto bg-white rounded-[10px] border border-[#A9A9A9] p-7">
                <div className="p-4 bg-[#E8E9FC] rounded flex items-start gap-4">
                    <p className="text-[#666666] font-normal text-[15px] leading-[26px]">
                        In the midst of the turbulent period of the French Revolution,
                        Charles Dickens weaves a mesmerizing tale of love, sacrifice, and
                        redemption in "A Tale of Two Cities". The novel unfolds against the
                        backdrop of unrest and social upheaval, with vivid descriptions of
                        London and Paris during the late 18th century.
                    </p>
                    <div className="w-[10%]">
                        <div className="flex justify-center cursor-pointer items-center border border-black rounded-full w-10 h-10">
                            <ImPencil className="text-sm" />
                        </div>
                    </div>
                </div>
                <div className="p-4 bg-[#E8E9FC] rounded flex items-start gap-4 mt-4">
                    <p className="text-[#666666] font-normal text-[15px] leading-[26px]">
                        In the midst of the turbulent period of the French Revolution,
                        Charles Dickens weaves a mesmerizing tale of love, sacrifice, and
                        redemption in "A Tale of Two Cities". The novel unfolds against the
                        backdrop of unrest and social upheaval, with vivid descriptions of
                        London and Paris during the late 18th century.In the midst of the
                        turbulent period of the French Revolution, Charles Dickens weaves a
                        mesmerizing tale of love, sacrifice, and redemption in "A Tale of
                        Two Cities". The novel unfolds against the backdrop of unrest and
                        social upheaval, with vivid descriptions of London and Paris during
                        the late 18th century.
                    </p>
                    <div className="w-[10%]">
                        <div className="flex justify-center cursor-pointer items-center border border-black rounded-full w-10 h-10">
                            <ImPencil className="text-sm" />
                        </div>
                    </div>
                </div>
                <div className="p-4 bg-[#E8E9FC] rounded flex items-start gap-4 mt-4">
                    <div>
                        <h6 className="text-black font-bold text-[15px] leading-[26px]">
                            Subject:{" "}
                        </h6>
                        <p className="text-[#666666] font-normal text-[15px] leading-[26px] mb-3">
                            Community Garden Design
                        </p>
                        <h6 className="text-black font-bold text-[15px] leading-[26px]">
                            Weight:{" "}
                        </h6>
                        <p className="text-[#666666] font-normal text-[15px] leading-[26px] mb-3">
                            5
                        </p>
                        <h6 className="text-black font-bold text-[15px] leading-[26px]">
                            Due Date:{" "}
                        </h6>
                        <p className="text-[#666666] font-normal text-[15px] leading-[26px] mb-3">
                            August 22, 2024
                        </p>
                        <h6 className="text-black font-bold text-[15px] leading-[26px]">
                            Description:{" "}
                        </h6>
                        <p className="text-[#666666] font-normal text-[15px] leading-[26px]">
                            In this project, we will collaborate with local stakeholders to
                            design and develop a community garden that reflects the unique needs
                            and preferences of the neighborhood. The garden will feature a
                            variety of plants, seating areas, and interactive elements to
                            encourage community engagement and environmental stewardship.
                        </p>
                    </div>
                    <div className="w-[10%]">
                        <div className="flex justify-center cursor-pointer items-center border border-black rounded-full w-10 h-10">
                            <ImPencil className="text-sm" />
                        </div>
                    </div>
                </div>
                <div className="p-4 bg-[#E8E9FC] rounded flex items-start gap-4 mt-4">
                    <div className="grid grid-cols-4 gap-0 w-full">
                        <div className="py-3 px-1 md:px-3 rounded-tl-lg border border-[#A9A9A9] font-semibold text-xl flex justify-end">
                            <div className="flex justify-center cursor-pointer items-center border border-black rounded-full w-8 h-8">
                                <ImPencil className="text-sm" />
                            </div>
                        </div>
                        <div className="py-3 px-1 md:px-3 border border-[#A9A9A9] font-semibold text-xl text-center flex justify-center gap-2">
                            1
                            <div className="flex justify-center cursor-pointer items-center border border-black rounded-full w-8 h-8">
                                <ImPencil className="text-sm" />
                            </div>
                        </div>
                        <div className="py-3 px-1 md:px-3 border border-[#A9A9A9] font-semibold text-xl text-center flex justify-center gap-2">
                            2
                            <div className="flex justify-center cursor-pointer items-center border border-black rounded-full w-8 h-8">
                                <ImPencil className="text-sm" />
                            </div>
                        </div>
                        <div className="py-3 px-1 md:px-3 border border-[#A9A9A9] font-semibold text-xl text-center flex justify-center gap-2">
                            3
                            <div className="flex justify-center cursor-pointer items-center border border-black rounded-full w-8 h-8">
                                <ImPencil className="text-sm" />
                            </div>
                        </div>
                        <div className="py-3 px-1 md:px-3 border border-[#A9A9A9] font-normal md:font-semibold text-base">
                            The Shoemaker's Solitude
                        </div>
                        <div className="py-3 px-1 md:px-3 border border-[#A9A9A9] text-[#666666] font-normal text-xs">
                            The shoemaker toils silently in his garret, immersed in the solitude
                            of his relentless work.
                        </div>
                        <div className="py-3 px-1 md:px-3 border border-[#A9A9A9] text-[#666666] font-normal text-xs">
                            The shoemaker toils silently in his garret, immersed in the solitude
                            of his relentless work.
                        </div>
                        <div className="py-3 px-1 md:px-3 border border-[#A9A9A9] text-[#666666] font-normal text-xs">
                            The shoemaker toils silently in his garret, immersed in the solitude
                            of his relentless work.
                        </div>
                        <div className="py-3 px-1 md:px-3 rounded-bl-lg border border-[#A9A9A9] font-normal md:font-semibold text-base">
                            The Shoemaker's Solitude
                        </div>
                        <div className="py-3 px-1 md:px-3 border border-[#A9A9A9] text-[#666666] font-normal text-xs">
                            The shoemaker toils silently in his garret, immersed in the solitude
                            of his relentless work.
                        </div>
                        <div className="py-3 px-1 md:px-3 border border-[#A9A9A9] text-[#666666] font-normal text-xs">
                            The shoemaker toils silently in his garret, immersed in the solitude
                            of his relentless work.
                        </div>
                        <div className="py-3 px-1 md:px-3 rounded-br-lg border border-[#A9A9A9] text-[#666666] font-normal text-xs">
                            The shoemaker toils silently in his garret, immersed in the solitude
                            of his relentless work.
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-1 md:gap-3 mt-5 justify-center md:w-1/4 mx-auto">
                <div className="py-4 cursor-pointer flex justify-center items-center bg-white flex-col gap-1 border border-[#A9A9A9] rounded-lg">
                    <MdRefresh className="w-7 h-7 text-[#FF0000]" />
                    <p className="text-[#FF0000] text-center text-[13px]">Try Again</p>
                </div>
                <div className="py-4 cursor-pointer flex justify-center items-center bg-white flex-col gap-1 border border-[#A9A9A9] rounded-lg">
                    <IoSaveSharp className="w-7 h-7" />
                    <p className="text-[#666666] text-center text-[13px]">Save</p>
                </div>
                <div className="py-4 cursor-pointer flex justify-center items-center bg-white flex-col gap-1 border border-[#A9A9A9] rounded-lg">
                    <MdDownload className="w-7 h-7" />
                    <p className="text-[#666666] text-center text-[13px]">Download</p>
                </div>
            </div>
        </div>
    </>);
}
