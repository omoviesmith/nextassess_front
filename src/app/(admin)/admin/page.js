'use client'

import Image from "next/image";
import Link from "next/link";
import { MdHome } from "react-icons/md";

export default function Admin() {
    return (
        <div>
            <div>
                <Link href='/assessments'>
                    <button className="flex items-center gap-2 bg-white rounded-md py-3 px-5 text-[#202123] font-semibold">
                        <MdHome className="w-5 h-5" /> Home
                    </button>
                </Link>
            </div>
            <div className="my-0">
                <div className="flex justify-center">
                    <Image className="w-14 h-14" src='/bulb-icon.png' width={64} height={64} />
                </div>
                <h1 className="text-center text-[#202123] font-bold text-5xl leading-[64px] font-serif my-0">Create with AI</h1>
                <p className="text-[#202123] text-center font-semibold text-base leading-[18px]">Assessment reform, at scale, in a single click</p>
                <div className="flex justify-center my-3">
                    <Image src='/sun.svg' width='20' height='20' />
                </div>
                <div className="grid grid-col-1 md:grid-cols-3 gap-6 w-4/5 md:w-3/4 mx-auto">
                    <Link href='/admin/assessment/upload' className="m-0 cursor-pointer shadow-[0px 4px 19.5px 0px #0000001A] relative">
                        <div className="bg-[#CBFFFE] rounded-tl-xl rounded-tr-xl flex justify-center items-center p-3 h-48">
                            <svg width="293" height="196" viewBox="0 0 293 196" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 14C0 6.26802 6.26801 0 14 0H279C286.732 0 293 6.26801 293 14V196H0V14Z" fill="#CBFFFE"></path><path d="M42 73.4702C42 68.5178 46.4542 64.7551 51.337 65.5828L145.163 81.4876C146.048 81.6377 146.952 81.6377 147.837 81.4876L241.663 65.5828C246.546 64.7551 251 68.5178 251 73.4702V178.032C251 183.149 246.264 186.95 241.269 185.843L148.231 165.219C147.091 164.966 145.909 164.966 144.769 165.219L51.7314 185.843C46.7363 186.95 42 183.149 42 178.032V73.4702Z" fill="#AAF2F1"></path><rect x="65" y="101" width="164" height="5" rx="2.5" fill="white"></rect><rect x="65" y="127" width="164" height="5" rx="2.5" fill="white"></rect><rect x="65" y="114" width="85" height="5" rx="2.5" fill="white"></rect><rect x="65" y="140" width="85" height="5" rx="2.5" fill="white"></rect><rect x="157" y="114" width="72" height="5" rx="2.5" fill="white"></rect><rect x="157" y="140" width="72" height="5" rx="2.5" fill="white"></rect></svg>
                        </div>
                        <div className="bg-white py-4 px-4">
                            <h3 className="text-[#3C3838] text-lg font-semibold leading-[27px]">Upload Assessment</h3>
                            <p className="text-[#898686] font-medium mt-0 leading-6">Upload anything regarding document and PDF files</p>
                        </div>
                    </Link>
                    <Link href='/admin/assessment/describe' className="m-0 cursor-pointer shadow-[0px 4px 19.5px 0px #0000001A] relative">
                        <div className="bg-[#CBFFFE] rounded-tl-xl rounded-tr-xl flex justify-center items-center p-3 h-48">
                            <svg width="293" height="196" viewBox="0 0 278 196" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_103_355)"><path d="M139 -32L152.742 55.7158L208.5 -13.3775L176.543 69.4574L259.378 37.5L190.284 93.2584L278 107L190.284 120.742L259.378 176.5L176.543 144.543L208.5 227.378L152.742 158.284L139 246L125.258 158.284L69.5 227.378L101.457 144.543L18.6225 176.5L87.7158 120.742L0 107L87.7158 93.2584L18.6225 37.5L101.457 69.4574L69.5 -13.3775L125.258 55.7158L139 -32Z" fill="#AAF2F1"></path></g><rect x="33" y="81" width="209" height="35" rx="5" fill="white"></rect><rect x="90" y="90" width="130" height="5" rx="2.5" fill="#91FBF8"></rect><rect x="90" y="101" width="67" height="5" rx="2.5" fill="#91FBF8"></rect><rect x="163" y="101" width="57" height="5" rx="2.5" fill="#91FBF8"></rect><defs><clipPath id="clip0_103_355"><rect width="278" height="196" fill="white"></rect></clipPath></defs></svg>
                        </div>
                        <div className="bg-white py-4 px-4">
                            <h3 className="text-[#3C3838] text-lg font-semibold leading-[27px]">Describe Assessment</h3>
                            <p className="text-[#898686] font-medium mt-0 leading-6">Describe your assessment and see the magic</p>
                        </div>
                    </Link>
                    <Link href='/admin/assessment/programmatic' className="m-0 shadow-[0px 4px 19.5px 0px #0000001A] relative">
                        <div className="bg-[#CBFFFE] rounded-tl-xl rounded-tr-xl flex justify-center items-center p-3 h-48">
                            <svg width="293" height="196" viewBox="0 0 293 196" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 14C0 6.26802 6.26801 0 14 0H279C286.732 0 293 6.26801 293 14V196H0V14Z" fill="#CBFFFE"></path><path d="M82 0L89.4145 47.3287L119.5 10.0481L102.257 54.7432L146.952 37.5L109.671 67.5855L157 75L109.671 82.4145L146.952 112.5L102.257 95.2568L119.5 139.952L89.4145 102.671L82 150L74.5855 102.671L44.5 139.952L61.7432 95.2568L17.0481 112.5L54.3287 82.4145L7 75L54.3287 67.5855L17.0481 37.5L61.7432 54.7432L44.5 10.0481L74.5855 47.3287L82 0Z" fill="#AAF2F1"></path><path d="M221 0L227.327 40.3871L253 8.57438L238.286 46.7142L276.426 32L244.613 57.673L285 64L244.613 70.327L276.426 96L238.286 81.2858L253 119.426L227.327 87.6129L221 128L214.673 87.6129L189 119.426L203.714 81.2858L165.574 96L197.387 70.327L157 64L197.387 57.673L165.574 32L203.714 46.7142L189 8.57438L214.673 40.3871L221 0Z" fill="#AAF2F1"></path><path d="M42 70.2826C42 66.5948 44.5209 63.3849 48.1035 62.5106L144.603 38.9628C145.85 38.6587 147.15 38.6587 148.397 38.9628L244.896 62.5106C248.479 63.3849 251 66.5948 251 70.2826V180C251 184.418 247.418 188 243 188H146.5H50C45.5817 188 42 184.418 42 180V70.2826Z" fill="#AAF2F1"></path><rect x="65" y="101" width="164" height="5" rx="2.5" fill="white"></rect><rect x="65" y="153" width="164" height="5" rx="2.5" fill="white"></rect><rect x="65" y="127" width="164" height="5" rx="2.5" fill="white"></rect><rect x="65" y="114" width="85" height="5" rx="2.5" fill="white"></rect><rect x="65" y="140" width="85" height="5" rx="2.5" fill="white"></rect><rect x="157" y="114" width="72" height="5" rx="2.5" fill="white"></rect><rect x="157" y="140" width="72" height="5" rx="2.5" fill="white"></rect></svg>
                        </div>
                        <div className="bg-white py-4 px-4">
                            <h3 className="text-[#3C3838] text-lg font-semibold leading-[27px]">Programmatic Assessment</h3>
                            <p className="text-[#898686] font-medium mt-0 leading-6">Upload any thing regarding document and pdf files</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}