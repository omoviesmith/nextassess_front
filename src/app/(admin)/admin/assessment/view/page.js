import Link from "next/link";
import { MdHome } from "react-icons/md";
import { ImPencil } from "react-icons/im";
import { FaChevronRight } from "react-icons/fa6";
import Image from "next/image";
import { BiSolidLike, BiSolidDislike, BiSolidPencil } from "react-icons/bi";
import { MdRefresh, MdDownload } from "react-icons/md";
import { IoSaveSharp } from "react-icons/io5";

export default function Assessment() {
    return (
        <>
            <div className="flex justify-end items-center md:flex-row flex-col gap-5 mt-4">
                <Link href='/admin/assessment/edit'>
                    <button className="flex items-center gap-2 bg-white rounded-md py-3 px-7 text-[#202123] font-semibold">
                        <ImPencil className="w-4 h-4" /> Edit
                    </button>
                </Link>
            </div>
            <div className="md:w-1/2 mx-auto bg-white rounded-[10px] border border-[#A9A9A9] mt-5">
                <div className="p-8">
                    <h1 className="text-black text-3xl font-bold leading-[50px] mb-3">
                        Historical Tale: A Tale of Two Cities
                    </h1>
                    <p className="text-[#666666] font-normal text-[15px] leading-[26px]">
                        In the midst of the turbulent period of the French Revolution,
                        Charles Dickens weaves a mesmerizing tale of love, sacrifice, and
                        redemption in "A Tale of Two Cities". The novel unfolds against the
                        backdrop of unrest and social upheaval, with vivid descriptions of
                        London and Paris during the late 18th century.
                    </p>
                </div>
                <div className="m-0 h-[1px] bg-[#A9A9A9]"></div>
                <div className="p-8">
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
                </div>
                <div className="m-0 h-[1px] bg-[#A9A9A9]"></div>
                <div className="p-8">
                    <h6 className="text-[#666666] font-bold text-[15px] leading-[26px]">
                        Subject:{" "}
                    </h6>
                    <p className="text-[#666666] font-normal text-[15px] leading-[26px] mb-3">
                        Community Garden Design
                    </p>
                    <h6 className="text-[#666666] font-bold text-[15px] leading-[26px]">
                        Weight:{" "}
                    </h6>
                    <p className="text-[#666666] font-normal text-[15px] leading-[26px] mb-3">
                        5
                    </p>
                    <h6 className="text-[#666666] font-bold text-[15px] leading-[26px]">
                        Due Date:{" "}
                    </h6>
                    <p className="text-[#666666] font-normal text-[15px] leading-[26px] mb-3">
                        August 22, 2024
                    </p>
                    <h6 className="text-[#666666] font-bold text-[15px] leading-[26px]">
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
                <div className="m-0 h-[1px] bg-[#A9A9A9]"></div>
                <div className="grid grid-cols-4 gap-0 w-full p-8">
                    <div className="py-3 px-1 md:px-3 rounded-tl-lg border border-[#A9A9A9] font-semibold text-xl text-center"></div>
                    <div className="py-3 px-1 md:px-3 border border-[#A9A9A9] font-semibold text-xl text-center">
                        1
                    </div>
                    <div className="py-3 px-1 md:px-3 border border-[#A9A9A9] font-semibold text-xl text-center">
                        2
                    </div>
                    <div className="py-3 px-1 md:px-3 rounded-tr-lg border border-[#A9A9A9] font-semibold text-xl text-center">
                        3
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
                <div className="py-4 cursor-pointer flex justify-center items-center bg-white flex-col gap-1 border border-[#A9A9A9] rounded-lg">
                    <BiSolidPencil className="w-7 h-7" />
                    <p className="text-[#666666] text-center text-[13px]">Edit</p>
                </div>
                <div className="py-4 cursor-pointer flex justify-center items-center bg-white flex-col gap-1 border border-[#A9A9A9] rounded-lg">
                    <MdDownload className="w-7 h-7" />
                    <p className="text-[#666666] text-center text-[13px]">Download</p>
                </div>
            </div>
        </>
    );
}
