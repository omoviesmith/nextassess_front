import Link from "next/link";
import { MdHome } from "react-icons/md";
import { ImPencil } from "react-icons/im";
import { FaChevronRight } from "react-icons/fa6";
import Image from "next/image";
import { BiSolidLike, BiSolidDislike, BiSolidPencil } from "react-icons/bi";
import { MdRefresh, MdDownload, MdOutlineGridOn, MdOutlineList, MdOutlineClose } from "react-icons/md";
import { IoSaveSharp } from "react-icons/io5";

export default function ProgrammaticView() {
    return (<>
        <div className="flex justify-between items-center flex-col md:flex-row gap-3">
            <div className="flex items-center gap-3 bg-white rounded-md py-3 px-5 text-[#202123] font-semibold">
                <Link href='/admin'>
                    <button className="flex items-center gap-2 text-[#202123] font-semibold">
                        <MdHome className="w-5 h-5" /> Home
                    </button>
                </Link>
                <FaChevronRight className="w-3 h-3" />
                <Link href='/admin/assessment/programmatic'>
                    <button className="flex items-center gap-2 text-[#202123] font-semibold">
                        Programmatic Assessment
                    </button>
                </Link>
                <FaChevronRight className="w-3 h-3" />
                <p className="flex items-center gap-2 text-[#202123] font-semibold">Historical Tale: A Tale of Two Cities</p>
            </div>
            <button className="flex items-center gap-2 bg-white rounded-md py-3 px-7 text-[#202123] font-semibold">
                <ImPencil className="w-4 h-4" /> Edit
            </button>
        </div>
        <div className="flex items-start gap-6 mt-8">
            <div className="md:w-1/5 hidden md:block bg-white rounded-md p-2">
                <div className="flex justify-between mb-1 mt-3">
                    <div className="flex gap-2">
                        <MdOutlineGridOn />
                        <MdOutlineList />
                    </div>
                    <MdOutlineClose />
                </div>
                <div className="flex gap-0 rounded-lg bg-white border border-[#A9A9A9] mt-2">
                    <div className="m-0 w-2/5">
                        <Image className="h-full" src='/assessment-1.png' width={76} height={100} />
                    </div>
                    <div className="m-0 w-3/5 py-3 pr-1">
                        <h1 className="text-[9px] font-semibold leading-3">Historical Tale: A Tale of Two Cities</h1>
                        <p className="mt-2 mb-2 text-[#666666] text-[3px] font-normal leading-[6px]">In the midst of the turbulent period of the French Revolution, Charles Dickens weaves a mesmerizing tale of love, sacrifice, and redemption in "A Tale of Two Cities". The novel unfolds against the backdrop of unrest and social upheaval, with vivid descriptions of London and Paris during the late 18th century.</p>
                        <div className="flex items-center gap-3">
                            <div>
                                <Image src='/account.png' width={9} height={9} />
                            </div>
                            <div>
                                <h6 className="font-semibold text-[4px] leading-[11px] m-0">by Richard Smith</h6>
                                <p className="m-0 text-[#666666] text-[2px]">Last Edited 1 minute ago</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col rounded-lg bg-white border border-[#A9A9A9] mt-5">
                    <div className="m-0">
                        <Image className="h-full w-full" src='/assessment-3.png' width={186} height={37} />
                    </div>
                    <div className="m-0 py-3 px-1">
                        <h1 className="text-[9px] text-center font-semibold leading-[11px]">Historical Tale: A Tale of Two Cities</h1>
                        <p className="mt-2 mb-2 text-center text-[#666666] text-[3px] font-normal leading-[6px]">In the midst of the turbulent period of the French Revolution, Charles Dickens weaves a mesmerizing tale of love, sacrifice, and redemption in "A Tale of Two Cities". The novel unfolds against the backdrop of unrest and social upheaval, with vivid descriptions of London and Paris during the late 18th century.</p>
                    </div>
                </div>
                <div className="flex flex-col rounded-lg bg-white border border-[#A9A9A9] mt-5">
                    <div className="m-0">
                        <Image className="h-full w-full" src='/assessment-3.png' width={186} height={37} />
                    </div>
                    <div className="m-0 py-3 px-1">
                        <h1 className="text-[9px] text-center font-semibold leading-[11px] mb-2">The Shoemaker’s Garret</h1>
                        <div className="flex gap-8 md:gap-4 items-start mb-1">
                            <div className="m-0 w-[10%]">
                                <div className="flex justify-center items-center rounded-full bg-[#DADBF1] w-[14px] h-[14px]">
                                    <span className="text-black text-center text-[5px] font-semibold">1</span>
                                </div>
                            </div>
                            <div className="w-[88%]">
                                <h3 className="text-black text-[5px] font-semibold leading-[11px] mb-0">The Shoemaker's Solitude</h3>
                                <p className="text-[#666666] text-[3px] font-normal leading-[6px]">The shoemaker toils silently in his garret, immersed in the solitude of his relentless work. His faded surroundings bear testimony to a life of seclusion and resilience.</p>
                            </div>
                        </div>
                        <div className="flex gap-8 md:gap-4 items-start mb-1">
                            <div className="m-0 w-[10%]">
                                <div className="flex justify-center items-center rounded-full bg-[#DADBF1] w-[14px] h-[14px]">
                                    <span className="text-black text-center text-[5px] font-semibold">2</span>
                                </div>
                            </div>
                            <div className="w-[88%]">
                                <h3 className="text-black text-[5px] font-semibold leading-[11px] mb-0">A Glimmer of Light</h3>
                                <p className="text-[#666666] text-[3px] font-normal leading-[6px]">A ray of light pierces through the darkness, bringing a momentary respite to the gloom that envelops the shoemaker's garret. It illuminates the worn tools and scraps of leather, casting a poignant glow on his unfinished creations.</p>
                            </div>
                        </div>
                        <div className="flex gap-8 md:gap-4 items-start mb-1">
                            <div className="m-0 w-[10%]">
                                <div className="flex justify-center items-center rounded-full bg-[#DADBF1] w-[14px] h-[14px]">
                                    <span className="text-black text-center text-[5px] font-semibold">3</span>
                                </div>
                            </div>
                            <div className="w-[88%]">
                                <h3 className="text-black text-[5px] font-semibold leading-[11px] mb-0">Moment of Recognition</h3>
                                <p className="text-[#666666] text-[3px] font-normal leading-[6px]">The shoemaker toils silently in his garret, immersed in the solitude of his relentless work. His faded surroundings bear testimony to a life of seclusion and resilience.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col rounded-lg bg-white border border-[#A9A9A9] mt-5">
                    <div className="m-0">
                        <Image className="h-full w-full" src='/assessment-3.png' width={186} height={37} />
                    </div>
                    <div className="m-0 py-3 px-1">
                        <h1 className="text-[9px] text-center font-semibold leading-[11px]">The Mystery of the Unfinished Shoe</h1>
                        <div className="grid grid-rows-3 md:grid-rows-2 grid-flow-col gap-4 mt-5">
                            <div class="md:row-span-2 bg-[#DADBF1] rounded-md p-3">
                                <h4 className="mb-2 text-[5px] font-semibold leading-[6px]">A Glimpse of Recognition</h4>
                                <p className="text-[#666666] font-normal text-[3px] leading-[6px]">As the visitor seeks to unlock the mystery of the shoe, the shoemaker's hesitant responses provide a glimpse into the enigma of his past, shrouded in layers of solitude and longing.As the visitor seeks to unlock the mystery of the shoe, the shoemaker's hesitant responses provide a glimpse into the  layers of solitude and longing.</p>
                            </div>
                            <div class="m-0 bg-[#DADBF1] rounded-md p-3">
                                <h4 className="mb-2 text-[5px] font-semibold leading-[6px]">Forgotten Artistry</h4>
                                <p className="text-[#666666] font-normal text-[3px] leading-[6px]">The intricate details of the unfinished shoe bear witness to the forgotten artistry of the shoemaker. Each stitch and curve holds a story, waiting to be unraveled.</p>
                            </div>
                            <div class="bg-[#DADBF1] rounded-md p-3">
                                <h4 className="mb-2 text-[5px] font-semibold leading-[6px]">Lost Memory</h4>
                                <p className="text-[#666666] font-normal text-[3px] leading-[6px]">The shoemaker's struggle to recollect his craft mirrors the fragments of forgotten memories that lay dormant within him. The unfinished shoe becomes a poignant symbol of his fractured past.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:ml-[6.5%] md:w-1/2">
                <div className="flex gap-5 rounded-lg bg-white border border-[#A9A9A9] mt-0">
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
                <div className="flex flex-col rounded-lg bg-white border border-[#A9A9A9] mt-5">
                    <div className="m-0">
                        <Image className="h-full w-full" src='/assessment-3.png' width={600} height={500} />
                    </div>
                    <div className="m-0 py-8 px-3">
                        <h1 className="text-[32px] text-center font-semibold leading-10">Historical Tale: A Tale of Two Cities</h1>
                        <p className="mt-2 mb-2 text-center text-[#666666] text-xs font-normal leading-5">In the midst of the turbulent period of the French Revolution, Charles Dickens weaves a mesmerizing tale of love, sacrifice, and redemption in "A Tale of Two Cities". The novel unfolds against the backdrop of unrest and social upheaval, with vivid descriptions of London and Paris during the late 18th century.</p>
                    </div>
                </div>
                <div className="flex flex-col rounded-lg bg-white border border-[#A9A9A9] mt-5">
                    <div className="m-0">
                        <Image className="h-full w-full" src='/assessment-3.png' width={600} height={500} />
                    </div>
                    <div className="m-0 py-8 px-3">
                        <h1 className="text-[32px] text-center font-semibold leading-10 mb-4">The Shoemaker’s Garret</h1>
                        <div className="flex gap-8 md:gap-4 items-start mb-4">
                            <div className="m-0 w-[10%]">
                                <div className="flex justify-center items-center rounded-full bg-[#DADBF1] w-[60px] h-[60px]">
                                    <span className="text-black text-center text-2xl font-semibold">1</span>
                                </div>
                            </div>
                            <div className="w-[88%]">
                                <h3 className="text-black text-2xl font-semibold leading-[50px] mb-0">The Shoemaker's Solitude</h3>
                                <p className="text-[#666666] text-sm font-normal leading-[26px]">The shoemaker toils silently in his garret, immersed in the solitude of his relentless work. His faded surroundings bear testimony to a life of seclusion and resilience.</p>
                            </div>
                        </div>
                        <div className="flex gap-8 md:gap-4 items-start mb-4">
                            <div className="m-0 w-[10%]">
                                <div className="flex justify-center items-center rounded-full bg-[#DADBF1] w-[60px] h-[60px]">
                                    <span className="text-black text-center text-2xl font-semibold">2</span>
                                </div>
                            </div>
                            <div className="w-[88%]">
                                <h3 className="text-black text-2xl font-semibold leading-[50px] mb-0">A Glimmer of Light</h3>
                                <p className="text-[#666666] text-sm font-normal leading-[26px]">A ray of light pierces through the darkness, bringing a momentary respite to the gloom that envelops the shoemaker's garret. It illuminates the worn tools and scraps of leather, casting a poignant glow on his unfinished creations.</p>
                            </div>
                        </div>
                        <div className="flex gap-8 md:gap-4 items-start mb-4">
                            <div className="m-0 w-[10%]">
                                <div className="flex justify-center items-center rounded-full bg-[#DADBF1] w-[60px] h-[60px]">
                                    <span className="text-black text-center text-2xl font-semibold">3</span>
                                </div>
                            </div>
                            <div className="w-[88%]">
                                <h3 className="text-black text-2xl font-semibold leading-[50px] mb-0">Moment of Recognition</h3>
                                <p className="text-[#666666] text-sm font-normal leading-[26px]">The shoemaker toils silently in his garret, immersed in the solitude of his relentless work. His faded surroundings bear testimony to a life of seclusion and resilience.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col rounded-lg bg-white border border-[#A9A9A9] mt-5">
                    <div className="m-0">
                        <Image className="h-full w-full" src='/assessment-3.png' width={600} height={500} />
                    </div>
                    <div className="m-0 py-8 px-3">
                        <h1 className="text-[32px] text-center font-semibold leading-10">The Mystery of the Unfinished Shoe</h1>
                        <div className="grid grid-rows-3 md:grid-rows-2 grid-flow-col gap-4 mt-5">
                            <div class="md:row-span-2 bg-[#DADBF1] rounded-md p-3">
                                <h4 className="mb-2 text-2xl font-semibold leading-7">A Glimpse of Recognition</h4>
                                <p className="text-[#666666] font-normal text-sm leading-[26px]">As the visitor seeks to unlock the mystery of the shoe, the shoemaker's hesitant responses provide a glimpse into the enigma of his past, shrouded in layers of solitude and longing.As the visitor seeks to unlock the mystery of the shoe, the shoemaker's hesitant responses provide a glimpse into the  layers of solitude and longing.</p>
                            </div>
                            <div class="m-0 bg-[#DADBF1] rounded-md p-3">
                                <h4 className="mb-2 text-2xl font-semibold leading-7">Forgotten Artistry</h4>
                                <p className="text-[#666666] font-normal text-sm leading-[26px]">The intricate details of the unfinished shoe bear witness to the forgotten artistry of the shoemaker. Each stitch and curve holds a story, waiting to be unraveled.</p>
                            </div>
                            <div class="bg-[#DADBF1] rounded-md p-3">
                                <h4 className="mb-2 text-2xl font-semibold leading-7">Lost Memory</h4>
                                <p className="text-[#666666] font-normal text-sm leading-[26px]">The shoemaker's struggle to recollect his craft mirrors the fragments of forgotten memories that lay dormant within him. The unfinished shoe becomes a poignant symbol of his fractured past.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-6 gap-1 md:gap-3 mt-5">
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