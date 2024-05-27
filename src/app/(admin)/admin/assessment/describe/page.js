'use client'

import Image from "next/image";
import { IoMdArrowBack } from "react-icons/io";
import { useRouter } from 'next/navigation'
import { MdOutlineCalendarToday, MdAdUnits, MdMenuBook } from "react-icons/md";
import { MdOutlineLineWeight } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { TbChevronDown, TbChevronUp } from "react-icons/tb";
import AssessmentPreference from "@/components/Assessment/Preference";

export default function Describe() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);
    const [response, setResponse] = useState(false);
    const [text, setText] = useState(null);
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
        const formData = new FormData(e.target);
        const formValues = {
            year_level: selectedValue,
            assessment_unit: formData.get('assessment_unit'),
            percentage_weighting: formData.get('percentage_weighting'),
            learning_outcome: formData.get('learning_outcome'),
            marking_rubric: formData.get('marking_rubric')
        };
        setText(JSON.stringify(formValues));
        setResponse(true);
    }
    return (
        <div>
            {
                !response ? (<>
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
                        <div className="relative inline-block text-left mt-3 w-full" ref={dropdownRef}>
                                <div>
                                    <button
                                        onClick={toggleDropdown}
                                        type="button"
                                        className={`flex gap-3 items-center justify-between w-full rounded-md shadow-sm px-4 py-3 bg-white text-base font-normal focus:outline-none text-black`}
                                    >
                                            <span className="flex items-center gap-3">
                                                <MdOutlineCalendarToday className="text-black" /> {selectedValue ? selectedValue : "Your level"}
                                            </span>
                                            { isOpen ? <TbChevronUp className="text-black" /> : <TbChevronDown className="text-black" /> }
                                    </button>
                                </div>

                                {isOpen && (
                                    <div className="origin-top-right absolute w-full z-10 right-0 mt-1 rounded-md shadow-lg bg-white focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu" tabIndex="-1" id="dropdown-menu">
                                        <div className="py-1" role="none">
                                        {['1st year (undergraduate)', '2nd year (undergraduate)', '3rd year (undergraduate)', '4th year + (undergraduate)', 'postgraduate coursework', 'postgraduate research', 'phD'].map((item, index) => (
                                            <span key={index} className="block cursor-pointer px-4 py-2 text-sm text-black hover:bg-gray-100 hover:text-gray-900" role="menuitem" tabIndex="-1" onClick={() => handleItemClick(item)}>
                                                {item}
                                            </span>
                                        ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div>
                            <MdAdUnits className="relative top-8 left-5" />
                            <input required className="rounded-md outline-none pl-12 pr-5 py-3 w-full" type="text" name="assessment_unit" placeholder="Course / Unit" />
                        </div>
                        <div>
                            <MdOutlineLineWeight className="relative top-8 left-5" />
                            <input required className="rounded-md outline-none pl-12 pr-5 py-3 w-full" type="text" name="percentage_weighting" placeholder="Weighting" />
                        </div>
                        <div>
                            <MdMenuBook className="relative top-8 left-5" />
                            <textarea rows={3} required className="rounded-md outline-none pl-12 pr-5 py-3 w-full" type="text" name="learning_outcome" placeholder="Learning Outcomes" />
                        </div>
                        <div className="mt-4">
                            <textarea rows={3} className="rounded-md outline-none px-5 py-3 w-full" name="marking_rubric" placeholder="Additional Requirements (optional)"></textarea>
                        </div>
                        <div className="mt-3">
                            <button type="submit" className={`w-full text-center rounded-lg py-3 px-6 font-bold text-base bg-[#CBFFFE]`}>Submit</button>
                        </div>
                    </form>
                </>) : (
                    <AssessmentPreference text={text} setUploadResponse={() => setResponse(false)} />
                )
            }
        </div>
    )
}