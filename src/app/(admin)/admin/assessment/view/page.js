import Link from "next/link";
import { MdHome } from "react-icons/md";
import { ImPencil } from "react-icons/im";
import { FaChevronRight } from "react-icons/fa6";
import Image from "next/image";
import { BiSolidLike, BiSolidDislike, BiSolidPencil } from "react-icons/bi";
import { MdRefresh, MdDownload } from "react-icons/md";
import { IoSaveSharp } from "react-icons/io5";

export default function Assessment() {
    return (<>
        <div className="flex justify-between items-center">
            <div  className="flex items-center gap-3 bg-white rounded-md py-3 px-5 text-[#202123] font-semibold">
                <Link href='/admin'>
                    <button className="flex items-center gap-2 text-[#202123] font-semibold">
                        <MdHome className="w-5 h-5" /> Home
                    </button>
                </Link>
                <FaChevronRight className="w-3 h-3" />
                <Link href='/admin/upload'>
                    <button className="flex items-center gap-2 text-[#202123] font-semibold">
                        Upload Assessment
                    </button>
                </Link>
                <FaChevronRight className="w-3 h-3" />
                <p className="flex items-center gap-2 text-[#202123] font-semibold">Historical Tale: A Tale of Two Cities</p>
            </div>
            <button className="flex items-center gap-2 bg-white rounded-md py-3 px-7 text-[#202123] font-semibold">
                <ImPencil className="w-4 h-4" /> Edit
            </button>
        </div>
        <div className="flex gap-6 mt-5">
            <div className="md:w-1/2">
                <div className="md:w-3/4 mx-auto bg-[#CBFFFE] rounded-[48px] p-4">
                    <h6 className="text-[#3C3838] font-semibold text-2xl leading-9 text-center">AI-Integrated Assessment</h6>
                </div>
                <div className="flex gap-5 rounded-lg bg-white border border-[#A9A9A9] mt-5">
                    <div className="m-0 w-2/5">
                        <Image className="h-full" src='/assessment-1.png' width={300} height={200} />
                    </div>
                    <div className="m-0 w-3/5 py-6 pr-4">
                        <h1 className="text-[34px] font-semibold leading-10">Historical Tale: A Tale of Two Cities</h1>
                        <p className="mt-2 mb-2 text-[#666666] text-xs font-normal leading-5">In the midst of the turbulent period of the French Revolution, Charles Dickens weaves a mesmerizing tale of love, sacrifice, and redemption in "A Tale of Two Cities". The novel unfolds against the backdrop of unrest and social upheaval, with vivid descriptions of London and Paris during the late 18th century.</p>
                        <div className="flex items-center gap-3">
                            <div>
                                <Image src='/account.png' width={33} height={33} />
                            </div>
                            <div>
                                <h6 className="font-semibold text-[17px] leading-10 m-0">by Richard Smith</h6>
                                <p className="m-0 text-[#666666] text-[10px]">Last Edited 1 minute ago</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-5 rounded-lg bg-white border border-[#A9A9A9] mt-5">
                    <div className="grid grid-cols-4 gap-0 w-full">
                        <div className="p-3 rounded-tl-lg border border-[#A9A9A9] font-semibold text-xl text-center"></div>
                        <div className="p-3 border border-[#A9A9A9] font-semibold text-xl text-center">1</div>
                        <div className="p-3 border border-[#A9A9A9] font-semibold text-xl text-center">2</div>
                        <div className="p-3 rounded-tr-lg border border-[#A9A9A9] font-semibold text-xl text-center">3</div>
                        <div className="p-3 border border-[#A9A9A9] font-semibold text-base">The Shoemaker's Solitude</div>
                        <div className="p-3 border border-[#A9A9A9] text-[#666666] font-normal text-xs">The shoemaker toils silently in his garret, immersed in the solitude of his relentless work.</div>
                        <div className="p-3 border border-[#A9A9A9] text-[#666666] font-normal text-xs">The shoemaker toils silently in his garret, immersed in the solitude of his relentless work.</div>
                        <div className="p-3 border border-[#A9A9A9] text-[#666666] font-normal text-xs">The shoemaker toils silently in his garret, immersed in the solitude of his relentless work.</div>
                        <div className="p-3 rounded-bl-lg border border-[#A9A9A9] font-semibold text-base">The Shoemaker's Solitude</div>
                        <div className="p-3 border border-[#A9A9A9] text-[#666666] font-normal text-xs">The shoemaker toils silently in his garret, immersed in the solitude of his relentless work.</div>
                        <div className="p-3 border border-[#A9A9A9] text-[#666666] font-normal text-xs">The shoemaker toils silently in his garret, immersed in the solitude of his relentless work.</div>
                        <div className="p-3 rounded-br-lg border border-[#A9A9A9] text-[#666666] font-normal text-xs">The shoemaker toils silently in his garret, immersed in the solitude of his relentless work.</div>
                    </div>
                </div>
                <div className="grid grid-cols-6 gap-3 mt-5">
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
            </div>
            <div className="md:w-1/2">
                <div className="md:w-3/4 mx-auto bg-[#CBFFFE] rounded-[48px] p-4">
                    <h6 className="text-[#3C3838] font-semibold text-2xl leading-9 text-center">Human-Centric Assessment</h6>
                </div>
                <div className="flex flex-col rounded-lg bg-white border border-[#A9A9A9] mt-5">
                    <div className="m-0">
                        <Image className="h-full w-full" src='/assessment-2.png' width={600} height={500} />
                    </div>
                    <div className="m-0 py-1 px-3">
                        <h1 className="text-[32px] text-center font-semibold leading-10">Historical Tale: A Tale of Two Cities</h1>
                        <p className="mt-2 mb-2 text-center text-[#666666] text-xs font-normal leading-5">In the midst of the turbulent period of the French Revolution, Charles Dickens weaves a mesmerizing tale of love, sacrifice, and redemption in "A Tale of Two Cities". The novel unfolds against the backdrop of unrest and social upheaval, with vivid descriptions of London and Paris during the late 18th century.</p>
                        <div className="flex items-center justify-center gap-3">
                            <div>
                                <Image src='/account.png' width={33} height={33} />
                            </div>
                            <div>
                                <h6 className="font-semibold text-[17px] leading-10 m-0">by Richard Smith</h6>
                                <p className="m-0 text-[#666666] text-[10px]">Last Edited 1 minute ago</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-5 rounded-lg bg-white border border-[#A9A9A9] mt-5">
                    <div className="grid grid-cols-4 gap-0 w-full">
                        <div className="p-3 rounded-tl-lg border border-[#A9A9A9] font-semibold text-xl text-center"></div>
                        <div className="p-3 border border-[#A9A9A9] font-semibold text-xl text-center">1</div>
                        <div className="p-3 border border-[#A9A9A9] font-semibold text-xl text-center">2</div>
                        <div className="p-3 rounded-tr-lg border border-[#A9A9A9] font-semibold text-xl text-center">3</div>
                        <div className="p-3 border border-[#A9A9A9] font-semibold text-base">The Shoemaker's Solitude</div>
                        <div className="p-3 border border-[#A9A9A9] text-[#666666] font-normal text-xs">The shoemaker toils silently in his garret, immersed in the solitude of his relentless work.</div>
                        <div className="p-3 border border-[#A9A9A9] text-[#666666] font-normal text-xs">The shoemaker toils silently in his garret, immersed in the solitude of his relentless work.</div>
                        <div className="p-3 border border-[#A9A9A9] text-[#666666] font-normal text-xs">The shoemaker toils silently in his garret, immersed in the solitude of his relentless work.</div>
                        <div className="p-3 rounded-bl-lg border border-[#A9A9A9] font-semibold text-base">The Shoemaker's Solitude</div>
                        <div className="p-3 border border-[#A9A9A9] text-[#666666] font-normal text-xs">The shoemaker toils silently in his garret, immersed in the solitude of his relentless work.</div>
                        <div className="p-3 border border-[#A9A9A9] text-[#666666] font-normal text-xs">The shoemaker toils silently in his garret, immersed in the solitude of his relentless work.</div>
                        <div className="p-3 rounded-br-lg border border-[#A9A9A9] text-[#666666] font-normal text-xs">The shoemaker toils silently in his garret, immersed in the solitude of his relentless work.</div>
                    </div>
                </div>
                <div className="grid grid-cols-6 gap-3 mt-5">
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
            </div>
        </div>
    </>)
}