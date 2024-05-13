'use client'

import Image from "next/image";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";
import { useRouter } from 'next/navigation'
import { MdOutlineCalendarToday, MdAdUnits, MdMenuBook } from "react-icons/md";

export default function Describe() {
    const router = useRouter();
    function handleSubmit(e) {
        e.preventDefault();
        router.push('/admin/assessment/view');
    }
    return (
        <div>
            <div onClick={()=> router.back()}>
                <button className="flex items-center gap-2 bg-white rounded-md py-3 px-5 text-[#202123] font-semibold">
                    <IoMdArrowBack className="w-5 h-5" /> Back
                </button>
            </div>
            <div className="my-0">
                <h1 className="text-center text-[#202123] font-bold text-5xl leading-[64px] font-serif mb-1">Describe Assessment</h1>
                <p className="text-[#202123] text-center font-semibold text-base leading-[18px]">Describe your assessment in detail </p>
                <div className="flex justify-center mt-2">
                    <Image src='/sun.svg' width='20' height='20' />
                </div>
            </div>
            <form onSubmit={handleSubmit} className=" md:w-1/2 mx-auto">
                <div>
                    <MdOutlineCalendarToday className="relative top-8 left-5" />
                    <input required className="rounded-md outline-none pl-12 pr-5 py-3 w-full" type="text" placeholder="Your level" />
                </div>
                <div>
                    <MdAdUnits className="relative top-8 left-5" />
                    <input required className="rounded-md outline-none pl-12 pr-5 py-3 w-full" type="text" placeholder="Course / Unit" />
                </div>
                <div>
                    <MdMenuBook className="relative top-8 left-5" />
                    <input required className="rounded-md outline-none pl-12 pr-5 py-3 w-full" type="text" placeholder="Learning Outcomes" />
                </div>
                <div className="mt-4">
                    <textarea rows={3} className="rounded-md outline-none px-5 py-3 w-full" placeholder="Describe Assessment"></textarea>
                </div>
                <div className="mt-3">
                    <button type="submit" className={`w-full text-center rounded-lg py-3 px-6 font-bold text-base bg-[#CBFFFE]`}>Submit</button>
                </div>
            </form>
        </div>
    )
}