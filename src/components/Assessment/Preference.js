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
                                <svg xmlns="http://www.w3.org/2000/svg" width="263" height="68" viewBox="0 0 263 68" fill="none">
                                    <path d="M244.473 7.67098C212.179 -9.53053 68.0354 6.17085 0 16.1717V36.6736C22.5521 39.6739 86.873 49.3747 163.74 64.176C259.823 82.6776 284.839 29.1729 244.473 7.67098Z" fill="#AAF2F1" />
                                </svg>
                                <div className="absolute left-[25%] md:left-[11%] w-auto h-auto top-[18%] md:top-[35%] flex justify-center items-center">
                                    <svg className="absolute" xmlns="http://www.w3.org/2000/svg" width="169" height="70" viewBox="0 0 169 70" fill="none">
                                        <rect width="169" height="50" rx="5" fill="white" />
                                    </svg>
                                    <svg className="relative" xmlns="http://www.w3.org/2000/svg" width="165" height="44" viewBox="0 0 165 44" fill="none">
                                        <rect x="0.5" width="160" height="5" rx="2.5" fill="#CBFFFE" />
                                        <rect x="0.5" y="10" width="85" height="5" rx="2.5" fill="#CBFFFE" />
                                        <rect x="87.5" y="10" width="72" height="5" rx="2.5" fill="#CBFFFE" />
                                        <rect x="0.5" y="20" width="85" height="5" rx="2.5" fill="#CBFFFE" />
                                        <rect x="87.5" y="20" width="72" height="5" rx="2.5" fill="#CBFFFE" />
                                    </svg>
                                    <svg className="absolute left-[100%] top-[0]" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                        <path d="M14.0621 1.5345C14.3843 0.663886 15.6157 0.663887 15.9379 1.53451L19.1619 10.2473C19.2632 10.521 19.479 10.7368 19.7527 10.8381L28.4655 14.0621C29.3361 14.3843 29.3361 15.6157 28.4655 15.9379L19.7527 19.1619C19.479 19.2632 19.2632 19.479 19.1619 19.7527L15.9379 28.4655C15.6157 29.3361 14.3843 29.3361 14.0621 28.4655L10.8381 19.7527C10.7368 19.479 10.521 19.2632 10.2473 19.1619L1.5345 15.9379C0.663886 15.6157 0.663887 14.3843 1.53451 14.0621L10.2473 10.8381C10.521 10.7368 10.7368 10.521 10.8381 10.2473L14.0621 1.5345Z" fill="#84BEBD" />
                                    </svg>
                                </div>
                            </div>
                            <div className="px-4 py-4 bg-white md:rounded-bl-none rounded-bl-xl md:rounded-tr-xl rounded-br-xl md:w-1/2">
                                <h6 className="text-[#3C3838] text-lg font-semibold leading-7">AI-Integrated Assessment</h6>
                                <p className="mt-1 text-[#898686] font-normal text-sm leading-6">Include the use of AI in the assessment. Allows students to use AI as a collaborator, in ethical and safe ways.</p>
                            </div>
                        </div>
                        <div onClick={()=>handleSubmit('human')} className="flex md:flex-row flex-col rounded-xl mt-5 md:mt-3 w-full cursor-pointer relative">
                            {(loading && type === 'human') && <span className="animate-ping absolute inline-flex h-3 w-3 right-0 rounded-full bg-sky-400 opacity-75"></span>}
                            <div className="bg-[#CBFFFE] p-4 rounded-tl-xl rounded-tr-xl md:rounded-tr-none md:rounded-bl-xl md:w-1/2 flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="263" height="68" viewBox="0 0 263 68" fill="none">
                                    <path d="M244.473 7.67098C212.179 -9.53053 68.0354 6.17085 0 16.1717V36.6736C22.5521 39.6739 86.873 49.3747 163.74 64.176C259.823 82.6776 284.839 29.1729 244.473 7.67098Z" fill="#AAF2F1" />
                                </svg>
                                <div className="absolute left-[25%] md:left-[11%] w-auto h-auto top-[18%] md:top-[35%] flex justify-center items-center">
                                    <svg className="absolute" xmlns="http://www.w3.org/2000/svg" width="169" height="70" viewBox="0 0 169 70" fill="none">
                                        <rect width="169" height="50" rx="5" fill="white" />
                                    </svg>
                                    <svg className="relative" xmlns="http://www.w3.org/2000/svg" width="165" height="44" viewBox="0 0 165 44" fill="none">
                                        <rect x="0.5" width="160" height="5" rx="2.5" fill="#CBFFFE" />
                                        <rect x="0.5" y="10" width="85" height="5" rx="2.5" fill="#CBFFFE" />
                                        <rect x="87.5" y="10" width="72" height="5" rx="2.5" fill="#CBFFFE" />
                                        <rect x="0.5" y="20" width="85" height="5" rx="2.5" fill="#CBFFFE" />
                                        <rect x="87.5" y="20" width="72" height="5" rx="2.5" fill="#CBFFFE" />
                                    </svg>
                                    <svg className="absolute left-[100%] top-[0]" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                        <path d="M14.0621 1.5345C14.3843 0.663886 15.6157 0.663887 15.9379 1.53451L19.1619 10.2473C19.2632 10.521 19.479 10.7368 19.7527 10.8381L28.4655 14.0621C29.3361 14.3843 29.3361 15.6157 28.4655 15.9379L19.7527 19.1619C19.479 19.2632 19.2632 19.479 19.1619 19.7527L15.9379 28.4655C15.6157 29.3361 14.3843 29.3361 14.0621 28.4655L10.8381 19.7527C10.7368 19.479 10.521 19.2632 10.2473 19.1619L1.5345 15.9379C0.663886 15.6157 0.663887 14.3843 1.53451 14.0621L10.2473 10.8381C10.521 10.7368 10.7368 10.521 10.8381 10.2473L14.0621 1.5345Z" fill="#84BEBD" />
                                    </svg>
                                </div>
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
                        <div>
                            <Image src='/loading.gif' height={48} width={71} />
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