'use client'

import Image from "next/image";
import { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { MdOutlineFileCopy } from "react-icons/md";
import { useRouter } from 'next/navigation'
import { showToast } from 'react-next-toast';
import AssessmentPreference from "@/components/Assessment/Preference";

export default function Upload() {
    const router = useRouter();
    const [isClicked, setIsClicked] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [response, setResponse] = useState(false);
    const [text, setText] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);
    const simulateUploadProgress = () => {
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 10;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
            }
            setUploadProgress(progress);
        }, 200);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            simulateUploadProgress();
        }
    };
    const formatFileSize = (size) => {
        if (size < 1024 * 1024) {
            return `${(size / 1024).toFixed(2)} KB`;
        } else {
            return `${(size / (1024 * 1024)).toFixed(2)} MB`;
        }
    };
    async function getFileData(file) {
        try {
            const res = await fetch(`https://assessment-microservice-latest.onrender.com/api/files/convert/${file}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (res.ok) {
                showToast.success('File converted successfully')
                setResponse(true);
                const parsedResponse = await res.json();
                setText(parsedResponse.text_content);
            } else {
                showToast.error('Something went wrong while converting file!')
                console.error('Error:', res.statusText);
            }
        } catch (error) {
            showToast.error('Something went wrong while converting file!')
            console.log(error);
        }
    }
    async function handleSubmit(e) {
        e.preventDefault();
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);
            setIsClicked(true);
            try {
                const response = await fetch('https://assessment-microservice-latest.onrender.com/api/files/upload', {
                    method: 'POST',
                    body: formData
                });
                if (response.ok) {
                    showToast.success('File uploaded successfully');
                    await getFileData(selectedFile.name);
                    setIsClicked(false);
                } else {
                    showToast.error('Error uploading file')
                    setIsClicked(false);
                    console.error('Upload failed:', response.statusText);
                } 
            } catch (error) {
                showToast.error('Error uploading file')
                setIsClicked(false);
                console.error('Error uploading file:', error);
            }
        }
    }
    return (
        <div>
            <div onClick={()=> router.back()}>
                <button className="flex items-center gap-2 bg-white rounded-md py-3 px-5 text-[#202123] font-semibold">
                    <IoMdArrowBack className="w-5 h-5" /> Back
                </button>
            </div>
            {
                !response ? (
                    <>
                        <div className="my-0">
                            <h1 className="text-center text-[#202123] font-bold text-5xl leading-[64px] font-serif my-2">Upload Assessment</h1>
                            <p className="text-[#202123] text-center font-semibold text-base leading-[18px]">Describe your assessment in detail </p>
                            <div className="flex justify-center my-3">
                                <Image src='/sun.svg' width='20' height='20' />
                            </div>
                        </div>
                        <form onSubmit={handleSubmit} className=" md:w-1/2 mx-auto">
                            <div>
                                <label htmlFor="file-upload" className="file-upload-label">
                                    <div className="bg-white rounded-lg py-20 cursor-pointer px-6 border border-dashed border-[#FD8403] flex justify-center items-center flex-col">
                                        <Image className="m-0 h-12 w-[71px] mb-3" src='/icons/upload-icon.png' height={48} width={71} />
                                        <span className="block text-black font-medium leading-5">Browse your file</span>
                                        <span className="block text-black font-medium leading-5">Accepted (Word and PDF)</span>
                                        <input type="file" id="file-upload" className="hidden" accept=".doc, .docx, .pdf" onChange={handleFileChange} />
                                    </div>
                                </label>
                                {selectedFile && (
                                    <div className="mt-4 bg-white rounded-lg p-3 flex items-center gap-3">
                                        <MdOutlineFileCopy className="m-0 w-9 h-9" />
                                        <div className="w-full">
                                            <div className="flex justify-between">
                                                <p className="text-xs leading-3 font-medium">{selectedFile.name}</p>
                                                <span onClick={()=> {setSelectedFile(null); setUploadProgress(0);}} className="text-[#FD8403] font-semibold text-xs cursor-pointer">Cancel</span>
                                            </div>
                                            <div className="progress-container rounded-2xl h-[6px]">
                                                <div className="progress-bar h-full bg-[#FD8403] rounded-2xl" style={{ width: `${uploadProgress}%` }}></div>
                                            </div>
                                            <div>
                                                <span className="text-xs text-[#7A7A7A]">{formatFileSize(selectedFile.size)}</span>
                                                <span className="text-[#FD8403] ml-2 text-xs font-semibold">{uploadProgress.toFixed(2)}% uploaded</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="mt-8">
                                <button type="submit" disabled={selectedFile ? false : true} className={`w-full text-center rounded-lg py-3 px-6 font-bold text-base ${selectedFile ? 'bg-[#CBFFFE]' : 'bg-[#CCCCCC]'}`}>
                                    { isClicked ? 'Uploading...' : 'Submit' }
                                </button>
                            </div>
                        </form>
                    </>
                ) : (
                    <AssessmentPreference text={text} />
                )
            }
        </div>
    )
}