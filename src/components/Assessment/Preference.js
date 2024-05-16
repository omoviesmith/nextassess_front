'use client'

import Image from "next/image";
import { useState } from "react";
import { showToast } from 'react-next-toast';
import ViewAssessment from "./View";

export default function AssessmentPreference({ text }) {
    const [response, setResponse] = useState(null);
    const [type, setType] = useState(null);
    const [loading, setLoading] = useState(false);
    async function handleSubmit(apiType) {
        setType(apiType);
        setLoading(true);
        showToast.info("Please wait, while we're generating assessment for you!");
        try {
            const requestPayload = {text};
            const url = apiType === 'ai' ? 
                'https://assessment-microservice-latest.onrender.com/api/generate-ai-assessment' : 
                'https://assessment-microservice-latest.onrender.com/api/generate-assessment';
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
                showToast.error('Error while generating assessment!');
                console.error('Error while generating assessment!', response.statusText);
            } 
        } catch (error) {
            setLoading(false);
            showToast.error('Error while generating assessment!')
            console.error('Error while generating assessment!:', error);
        }
    }
    return (<>
        {
            !response ? (
                <div className="my-0">
                    <div className="flex justify-center">
                        <Image className="w-14 h-14" src='/bulb-icon.png' width={64} height={64} />
                    </div>
                    <h1 className="text-center text-[#202123] font-bold text-5xl leading-[64px] font-serif my-2">AI Generated Assessment</h1>
                    <p className="text-[#202123] text-center font-semibold text-base leading-[18px]">Ask anything, get your Assessment</p>
                    <div className="flex justify-center my-3">
                        <Image src='/sun.svg' width='20' height='20' />
                    </div>
                    <div className="md:w-1/2 w-4/5 mx-auto mt-5">
                        <div onClick={()=>handleSubmit('ai')} className="flex md:flex-row flex-col rounded-xl w-full cursor-pointer relative">
                            {(loading && type === 'ai') && <span class="animate-ping absolute inline-flex h-3 w-3 right-0 rounded-full bg-sky-400 opacity-75"></span>}
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
                            <div className="px-4 py-6 bg-white md:rounded-bl-none rounded-bl-xl md:rounded-tr-xl rounded-br-xl md:w-1/2">
                                <h6 className="text-[#3C3838] text-lg font-semibold leading-7">AI-Integrated Assessment</h6>
                                <p className="mt-1 text-[#898686] font-semibold text-sm leading-6">Upload any thing regarding</p>
                            </div>
                        </div>
                        <div onClick={()=>handleSubmit('human')} className="flex md:flex-row flex-col rounded-xl mt-5 md:mt-3 w-full cursor-pointer relative">
                            {(loading && type === 'human') && <span class="animate-ping absolute inline-flex h-3 w-3 right-0 rounded-full bg-sky-400 opacity-75"></span>}
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
                            <div className="px-4 py-6 bg-white md:rounded-bl-none rounded-bl-xl md:rounded-tr-xl rounded-br-xl md:w-1/2">
                                <h6 className="text-[#3C3838] text-lg font-semibold leading-7">Human-Centric Assessment</h6>
                                <p className="mt-1 text-[#898686] font-semibold text-sm leading-6">Upload any thing regarding</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <ViewAssessment data={response} />
            )
        }
    </>)
}