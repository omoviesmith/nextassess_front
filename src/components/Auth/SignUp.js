'use client'

import Image from "next/image";
import { FaRegUser } from "react-icons/fa6";
import { MdMailOutline, MdPhoneAndroid } from "react-icons/md";
import { MdLockOpen } from "react-icons/md";
import { LuEye, LuEyeOff  } from "react-icons/lu";
import Modal from "../Modal/Modal";
import { useState } from "react";
import SignIn from "./SignIn";

export default function SignUp({ isOpen, onClose }) {
    const [showPassword, setShowPassword] = useState(false);
    const [showcPassword, setShowcPassword] = useState(false);
    const [success, setSuccess] = useState(false);
    const [showSignin, setShowSignin] = useState(false);
    function handleSignin() {
        setShowSignin(true);
    }
    function handleCloseSignin() {
        setShowSignin(false);
        onClose();
    }
    function handleSubmit(e) {
        e.preventDefault();
        setSuccess(true);
    }
    return (<>
    {
        showSignin ? (
            <SignIn isOpen={showSignin} onClose={handleCloseSignin} />
        ) : (
            <Modal isOpen={isOpen} onClose={onClose}>
                {
                    success ? (
                        <div className="pt-24">
                            <h2 className="font-bold text-center  text-4xl md:text-5xl">Congratulations</h2>
                            <p className="text-center text-base font-semibold mt-3">Your account has been created successfully please sign in</p>
                            <button className="bg-[#CBFFFE] rounded-lg w-full py-3 mt-6 text-lg font-bold" onClick={handleSignin}>Sign In</button>
                        </div>
                    ) : (
                        <div>
                            <h2 className="font-bold text-center  text-4xl md:text-5xl">Sign up</h2>
                            <p className="text-center text-base font-semibold mt-3">Create your account</p>
                            <div className="flex justify-center my-3">
                                <Image src='/sun.svg' width='20' height='20' />
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <FaRegUser className="relative top-8 left-5" />
                                    <input className="rounded-md outline-none pl-12 pr-5 py-3 w-full" type="text" placeholder="Username" />
                                </div>
                                <div>
                                    <MdMailOutline className="relative top-8 left-5" />
                                    <input className="rounded-md outline-none pl-12 pr-5 py-3 w-full" type="email" placeholder="Email Address" />
                                </div>
                                <div>
                                    <MdPhoneAndroid className="relative top-8 left-5" />
                                    <input className="rounded-md outline-none pl-12 pr-5 py-3 w-full" type="tel" placeholder="Mobile Number" />
                                </div>
                                <div className="relative mt-5">
                                    <MdLockOpen className="absolute top-4 left-5" />
                                    <input required className="rounded-md outline-none pl-12 pr-5 py-3 w-full" type={showPassword ? 'text' : 'password'} placeholder="Password" />
                                    <div className="cursor-pointer absolute top-[39%] right-[10px]" onClick={()=> setShowPassword(!showPassword)}>
                                        { showPassword ? <LuEyeOff /> : <LuEye /> }
                                    </div>
                                </div>
                                <div className="relative mt-5">
                                    <MdLockOpen className="absolute top-4 left-5" />
                                    <input required className="rounded-md outline-none pl-12 pr-5 py-3 w-full" type={showcPassword ? 'text' : 'password'} placeholder="Confirm Password" />
                                    <div className="cursor-pointer absolute top-[39%] right-[10px]" onClick={()=> setShowcPassword(!showcPassword)}>
                                        { showcPassword ? <LuEyeOff /> : <LuEye /> }
                                    </div>
                                </div>
                                <button type="submit" className="bg-[#CBFFFE] rounded-lg w-full py-3 mt-6 text-lg font-bold">Create</button>
                                <div className="flex justify-center mt-2">
                                    <p className="text-sm font-semibold text-[#202123]">Already have an account? <span className="text-[#FF0000] cursor-pointer" onClick={handleSignin}>Sign in!</span></p>
                                </div>
                            </form>
                        </div>
                    )
                }
            </Modal>
        )
    }
    </>)
}