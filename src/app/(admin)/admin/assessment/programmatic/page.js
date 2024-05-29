'use client'

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";
import { useRouter } from 'next/navigation'
import { MdOutlineCalendarToday, MdNumbers, MdBlurCircular } from "react-icons/md";
import { IoBulbOutline } from "react-icons/io5";
import { TbChevronDown, TbChevronUp } from "react-icons/tb";
import Markdown from "@/components/Markdown/Markdown";

export default function Programmatic() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);
    const [learningOutcome, setLearningOutcome] = useState('');
    const [additionalNote, setAdditionalNote] = useState('');
    const [ratio, setRatio] = useState(50);

    const handleSliderChange = (event) => {
        setRatio(event.target.value);
    };
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const handleItemClick = (value) => {
        setSelectedValue(value);
        setIsOpen(false);
    };
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);
    function handleSubmit(e) {
        e.preventDefault();
        router.push('/assessments');
    }
    return (
        <div>
            <Link href='/admin'>
                <button className="flex items-center gap-2 bg-white rounded-md py-3 px-5 text-[#202123] font-semibold">
                    <IoMdArrowBack className="w-5 h-5" /> Back
                </button>
            </Link>
            <div className="my-0">
                <h1 className="text-center text-[#202123] font-bold text-5xl leading-[64px] font-serif mb-1">Programmatic Assessment</h1>
                <p className="text-[#202123] text-center font-semibold text-base leading-[18px]">Describe your assessment in detail</p>
                <div className="flex justify-center mt-2">
                    <Image src='/sun.svg' alt="sun" width='20' height='20' />
                </div>
            </div>
            <form onSubmit={handleSubmit} className=" md:w-1/2 mx-auto">
                <div>
                    <MdOutlineCalendarToday className="relative top-8 left-5" />
                    <input required className="rounded-md outline-none pl-12 pr-5 py-3 w-full" type="text" placeholder="Program" />
                </div>
                <div>
                    <IoBulbOutline className="relative top-8 left-5" />
                    <input required className="rounded-md outline-none pl-12 pr-5 py-3 w-full" type="text" placeholder="Units/Courses Incluses" />
                </div>
                <div>
                    <div className="relative inline-block text-left mt-3 w-full" ref={dropdownRef}>
                        <div>
                            <button
                                onClick={toggleDropdown}
                                type="button"
                                className={`flex gap-3 items-center justify-between w-full rounded-md shadow-sm px-4 py-3 bg-white text-base font-normal focus:outline-none text-black`}
                            >
                                <span className="flex items-center gap-3">
                                    <MdBlurCircular className="text-black" /> {selectedValue ? selectedValue : "Length of Program"}
                                </span>
                                {isOpen ? <TbChevronUp className="text-black" /> : <TbChevronDown className="text-black" />}
                            </button>
                        </div>

                        {isOpen && (
                            <div className="origin-top-right z-10 absolute w-full right-0 mt-1 rounded-md shadow-lg bg-white focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu" tabIndex="-1" id="dropdown-menu">
                                <div className="py-1" role="none">
                                    <span className="block cursor-pointer px-4 py-2 text-sm text-black hover:bg-gray-100 hover:text-gray-900" role="menuitem" tabIndex="-1" id="dropdown-item-1" onClick={() => handleItemClick('1 year')}>
                                        1 year
                                    </span>
                                    <span className="block cursor-pointer px-4 py-2 text-sm text-black hover:bg-gray-100 hover:text-gray-900" role="menuitem" tabIndex="-1" id="dropdown-item-2" onClick={() => handleItemClick('2 years')}>
                                        2 years
                                    </span>
                                    <span className="block cursor-pointer px-4 py-2 text-sm text-black hover:bg-gray-100 hover:text-gray-900" role="menuitem" tabIndex="-1" id="dropdown-item-3" onClick={() => handleItemClick('3 years')}>
                                        3 years
                                    </span>
                                    <span className="block cursor-pointer px-4 py-2 text-sm text-black hover:bg-gray-100 hover:text-gray-900" role="menuitem" tabIndex="-1" id="dropdown-item-2" onClick={() => handleItemClick('4 years')}>
                                        4 years
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div>
                    <MdNumbers className="relative top-8 left-5" />
                    <input required className="rounded-md outline-none pl-12 pr-5 py-3 w-full" type="number" placeholder="No. of Assessments" />
                </div>
                <div className="mt-4 mb-8 relative">
                    <label htmlFor="ratio" className="block mb-2 text-md font-medium text-gray-900">
                        Ratio of Human-Centric to AI-Integrated Assessments:
                    </label>
                    <label className="block text-center text-gray-500" id="ratio-value">
                        {`${ratio}/${100 - ratio}`}
                    </label>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        step="10"
                        id="ratio"
                        name="ratio"
                        className="w-full bg-gray-200 appearance-none h-3 p-0 border border-gray-200 rounded-md focus:outline-none focus:ring-0 focus:border-blue-500"
                        value={ratio}
                        onChange={handleSliderChange}
                    />
                </div>
                <div className="mt-4">
                    <Markdown placeholder='Learning Outcomes of Program' value={learningOutcome} setValue={setLearningOutcome} />
                </div>
                <div className="mt-4">
                    <Markdown placeholder='Additional Note' value={additionalNote} setValue={setAdditionalNote} />
                </div>
                <div className="mt-3">
                    <button type="submit" className={`w-full text-center rounded-lg py-3 px-6 font-bold text-base bg-[#CBFFFE]`}>Submit</button>
                </div>
            </form>
        </div>
    )
}