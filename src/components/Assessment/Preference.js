'use client'

import Image from "next/image";
import { useState } from "react";
import { showToast } from 'react-next-toast';
import ViewAssessment from "./View";
import { IoMdArrowBack } from "react-icons/io";
import { MdErrorOutline } from "react-icons/md";

export default function AssessmentPreference({ text, setUploadResponse }) {
    const [response, setResponse] = useState(null);
    const [type, setType] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    function reset() {
        setResponse(null);
        setType(null);
        setLoading(false);
        setError(false);
    }
    async function handleSubmit(apiType) {
        setType(apiType);
        setLoading(true);
        try {
            const requestPayload = {text};
            const url = apiType === 'ai' ? 
                'https://e4eap2uqdz.ap-southeast-2.awsapprunner.com/api/ai-assessment' : 
                'https://e4eap2uqdz.ap-southeast-2.awsapprunner.com/api/human-assessment';
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestPayload)
            });
            const parsedResponse = await res.json();
            if (res.ok) {
                setLoading(false);
                setResponse(parsedResponse);
                showToast.success('Assessment generated successfully.');
            } else {
                setLoading(false);
                setError(true);
                console.error('Error while generating assessment!', response.statusText);
            } 
        } catch (error) {
            setLoading(false);
            setError(true);
            console.error('Error while generating assessment!:', error);
        }
    }
    return (<>
        {
            (!response && !loading && !error) ? (<>
                <div onClick={()=> setUploadResponse()}>
                    <button className="flex items-center gap-2 bg-white rounded-md py-3 px-5 text-[#202123] font-semibold">
                        <IoMdArrowBack className="w-5 h-5" /> Back
                    </button>
                </div>
                <div className="my-0">
                    <div className="flex justify-center">
                        <Image className="w-14 h-14" src='/bulb-icon.png' width={64} height={64} />
                    </div>
                    <h1 className="text-center text-[#202123] font-bold text-5xl leading-[64px] font-serif my-2">Assessment Preference</h1>
                    <p className="text-[#202123] text-center font-semibold text-base leading-[18px]">Choose whether this assessment will integrate AI, or focus on human-centric skills</p>
                    <div className="flex justify-center my-3">
                        <Image src='/sun.svg' width='20' height='20' />
                    </div>
                    <div className="md:w-1/2 w-4/5 mx-auto mt-5">
                        <div onClick={()=>handleSubmit('ai')} className="flex md:flex-row flex-col rounded-xl w-full cursor-pointer relative">
                            {(loading && type === 'ai') && <span className="animate-ping absolute inline-flex h-3 w-3 right-0 rounded-full bg-sky-400 opacity-75"></span>}
                            <div className="bg-[#CBFFFE] p-4 rounded-tl-xl rounded-tr-xl md:rounded-tr-none md:rounded-bl-xl md:w-1/2 flex justify-center items-center">
                                <svg width="100%" height="110" viewBox="0 0 309 110" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 14C0 6.26801 6.26801 0 14 0H309V110H14C6.26802 110 0 103.732 0 96V14Z" fill="#CBFFFE"></path><path d="M245.473 28.671C213.179 11.4695 69.0354 27.1708 1 37.1717V57.6736C23.5521 60.6739 87.873 70.3747 164.74 85.176C260.823 103.678 285.839 50.1729 245.473 28.671Z" fill="#AAF2F1"></path><rect x="66" y="19" width="169" height="70" rx="5" fill="white"></rect><rect x="85" y="32" width="130" height="9" rx="4.5" fill="#91FBF8"></rect><rect x="85" y="48" width="67" height="9" rx="4.5" fill="#91FBF8"></rect><rect x="148" y="64" width="67" height="9" rx="4.5" fill="#91FBF8"></rect><rect x="158" y="48" width="57" height="9" rx="4.5" fill="#91FBF8"></rect><rect x="85" y="64" width="57" height="9" rx="4.5" fill="#91FBF8"></rect><path d="M255.062 22.5345C255.384 21.6639 256.616 21.6639 256.938 22.5345L260.162 31.2473C260.263 31.521 260.479 31.7368 260.753 31.8381L269.465 35.0621C270.336 35.3843 270.336 36.6157 269.465 36.9379L260.753 40.1619C260.479 40.2632 260.263 40.479 260.162 40.7527L256.938 49.4655C256.616 50.3361 255.384 50.3361 255.062 49.4655L251.838 40.7527C251.737 40.479 251.521 40.2632 251.247 40.1619L242.535 36.9379C241.664 36.6157 241.664 35.3843 242.535 35.0621L251.247 31.8381C251.521 31.7368 251.737 31.521 251.838 31.2473L255.062 22.5345Z" fill="#84BEBD"></path><path d="M275.562 24.5345C275.884 23.6639 277.116 23.6639 277.438 24.5345L278.906 28.5029C279.008 28.7766 279.223 28.9924 279.497 29.0937L283.465 30.5621C284.336 30.8843 284.336 32.1157 283.465 32.4379L279.497 33.9063C279.223 34.0076 279.008 34.2234 278.906 34.4971L277.438 38.4655C277.116 39.3361 275.884 39.3361 275.562 38.4655L274.094 34.4971C273.992 34.2234 273.777 34.0076 273.503 33.9063L269.535 32.4379C268.664 32.1157 268.664 30.8843 269.535 30.5621L273.503 29.0937C273.777 28.9924 273.992 28.7766 274.094 28.5029L275.562 24.5345Z" fill="#84BEBD"></path><path d="M271.062 13.5345C271.384 12.6639 272.616 12.6639 272.938 13.5345L274.271 17.1379C274.373 17.4117 274.588 17.6275 274.862 17.7288L278.465 19.0621C279.336 19.3843 279.336 20.6157 278.465 20.9379L274.862 22.2712C274.588 22.3725 274.373 22.5883 274.271 22.8621L272.938 26.4655C272.616 27.3361 271.384 27.3361 271.062 26.4655L269.729 22.8621C269.627 22.5883 269.412 22.3725 269.138 22.2712L265.535 20.9379C264.664 20.6157 264.664 19.3843 265.535 19.0621L269.138 17.7288C269.412 17.6275 269.627 17.4117 269.729 17.1379L271.062 13.5345Z" fill="#84BEBD"></path></svg>
                            </div>
                            <div className="px-4 py-4 bg-white md:rounded-bl-none rounded-bl-xl md:rounded-tr-xl rounded-br-xl md:w-1/2">
                                <h6 className="text-[#3C3838] text-lg font-semibold leading-7">AI-Integrated Assessment</h6>
                                <p className="mt-1 text-[#898686] font-normal text-sm leading-6">Include the use of AI in the assessment. Allows students to use AI as a collaborator, in ethical and safe ways.</p>
                            </div>
                        </div>
                        <div onClick={()=>handleSubmit('human')} className="flex md:flex-row flex-col rounded-xl mt-5 md:mt-3 w-full cursor-pointer relative">
                            {(loading && type === 'human') && <span className="animate-ping absolute inline-flex h-3 w-3 right-0 rounded-full bg-sky-400 opacity-75"></span>}
                            <div className="bg-[#CBFFFE] p-4 rounded-tl-xl rounded-tr-xl md:rounded-tr-none md:rounded-bl-xl md:w-1/2 flex justify-center items-center">
                                <svg width="100%" height="110" viewBox="0 0 309 110" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 14C0 6.26801 6.26801 0 14 0H309V110H14C6.26802 110 0 103.732 0 96V14Z" fill="#CBFFFE"></path><path d="M245.473 28.671C213.179 11.4695 69.0354 27.1708 1 37.1717V57.6736C23.5521 60.6739 87.873 70.3747 164.74 85.176C260.823 103.678 285.839 50.1729 245.473 28.671Z" fill="#AAF2F1"></path><rect x="66" y="19" width="169" height="70" rx="5" fill="white"></rect><rect x="85" y="32" width="130" height="9" rx="4.5" fill="#91FBF8"></rect><rect x="85" y="48" width="67" height="9" rx="4.5" fill="#91FBF8"></rect><rect x="148" y="64" width="67" height="9" rx="4.5" fill="#91FBF8"></rect><rect x="158" y="48" width="57" height="9" rx="4.5" fill="#91FBF8"></rect><rect x="85" y="64" width="57" height="9" rx="4.5" fill="#91FBF8"></rect><path d="M255.062 22.5345C255.384 21.6639 256.616 21.6639 256.938 22.5345L260.162 31.2473C260.263 31.521 260.479 31.7368 260.753 31.8381L269.465 35.0621C270.336 35.3843 270.336 36.6157 269.465 36.9379L260.753 40.1619C260.479 40.2632 260.263 40.479 260.162 40.7527L256.938 49.4655C256.616 50.3361 255.384 50.3361 255.062 49.4655L251.838 40.7527C251.737 40.479 251.521 40.2632 251.247 40.1619L242.535 36.9379C241.664 36.6157 241.664 35.3843 242.535 35.0621L251.247 31.8381C251.521 31.7368 251.737 31.521 251.838 31.2473L255.062 22.5345Z" fill="#84BEBD"></path><path d="M275.562 24.5345C275.884 23.6639 277.116 23.6639 277.438 24.5345L278.906 28.5029C279.008 28.7766 279.223 28.9924 279.497 29.0937L283.465 30.5621C284.336 30.8843 284.336 32.1157 283.465 32.4379L279.497 33.9063C279.223 34.0076 279.008 34.2234 278.906 34.4971L277.438 38.4655C277.116 39.3361 275.884 39.3361 275.562 38.4655L274.094 34.4971C273.992 34.2234 273.777 34.0076 273.503 33.9063L269.535 32.4379C268.664 32.1157 268.664 30.8843 269.535 30.5621L273.503 29.0937C273.777 28.9924 273.992 28.7766 274.094 28.5029L275.562 24.5345Z" fill="#84BEBD"></path><path d="M271.062 13.5345C271.384 12.6639 272.616 12.6639 272.938 13.5345L274.271 17.1379C274.373 17.4117 274.588 17.6275 274.862 17.7288L278.465 19.0621C279.336 19.3843 279.336 20.6157 278.465 20.9379L274.862 22.2712C274.588 22.3725 274.373 22.5883 274.271 22.8621L272.938 26.4655C272.616 27.3361 271.384 27.3361 271.062 26.4655L269.729 22.8621C269.627 22.5883 269.412 22.3725 269.138 22.2712L265.535 20.9379C264.664 20.6157 264.664 19.3843 265.535 19.0621L269.138 17.7288C269.412 17.6275 269.627 17.4117 269.729 17.1379L271.062 13.5345Z" fill="#84BEBD"></path></svg>
                            </div>
                            <div className="px-4 py-4 bg-white md:rounded-bl-none rounded-bl-xl md:rounded-tr-xl rounded-br-xl md:w-1/2">
                                <h6 className="text-[#3C3838] text-lg font-semibold leading-7">Human-Centric Assessment</h6>
                                <p className="mt-1 text-[#898686] font-normal text-sm leading-6">Focus on skills that can not be easily replicated with AI. Ideal for when assessing the students human skill set matters most.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>) : (
                loading ? (
                    <div className="flex flex-col justify-center items-center min-h-[90vh]">
                        <div className="flex justify-center items-center">
                            <div className="loader">
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </div>
                        </div>
                        <h6 className="text-[#3C3838] text-lg font-semibold leading-7 my-3 text-center">NextAssess takes care of everything, so you can concentrate on what matters most – teaching and student success</h6>
                        <p className="text-[#6a6a6a] text-base font-semibold leading-7 my-3">Assessment Reform in a Single Click.</p>
                    </div>
                ) : (
                    error ? (
                        <div className="flex flex-col justify-center items-center min-h-[90vh]">
                            <MdErrorOutline className="text-5xl text-red-500" />
                            <h6 className="text-[#3C3838] text-lg font-semibold leading-7 my-3">Something went wrong while generating assessment!</h6>
                            <div onClick={()=> reset()}>
                                <button className="flex items-center gap-2 bg-white rounded-md py-3 px-5 text-[#202123] font-semibold">
                                    <IoMdArrowBack className="w-5 h-5" /> Back
                                </button>
                            </div>
                        </div>
                    ) : (
                        <ViewAssessment data={response} setConvertResponse={()=> setResponse(null)} tryAgain={()=> handleSubmit(type)} type={type} />
                    )
                )
            )
        }
    </>)
}