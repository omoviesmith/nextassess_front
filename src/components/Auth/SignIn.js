'use client'

import Image from "next/image";
import { FaRegUser } from "react-icons/fa6";
import { MdLockOpen } from "react-icons/md";
import { LuEye, LuEyeOff  } from "react-icons/lu";
import Modal from "../Modal/Modal";
import { useState } from "react";
import ForgetPassword from "./ForgetPassword";
import SignUp from "./SignUp";

export default function SignIn({ isOpen, onClose }) {
    const [showPassword, setShowPassword] = useState(false);
    const [showForgetPassword, setShowForgetPassword] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    function handleShowForgetPassword() {
        setShowForgetPassword(true);
    }
    function handleCloseForgetPassword() {
        setShowForgetPassword(false);
        onClose();
    }
    function handleSignup() {
        setShowSignup(true);
    }
    function handleCloseSignup() {
        setShowSignup(false);
        onClose();
    }
    return (<>
        {
            showForgetPassword ? (
                <ForgetPassword isOpen={showForgetPassword} onClose={handleCloseForgetPassword} />
            ) : showSignup ? (
                <SignUp isOpen={showSignup} onClose={handleCloseSignup} />
            ) : (
                <Modal isOpen={isOpen} onClose={onClose}>
                    <div>
                        <h2 className="font-bold text-center  text-4xl md:text-5xl">Sign in</h2>
                        <p className="text-center text-base font-semibold mt-3">Sign in into your account</p>
                        <div className="flex justify-center my-3">
                            <Image src='/sun.svg' width='20' height='20' />
                        </div>
                        <form>
                            <div>
                                <FaRegUser className="relative top-8 left-5" />
                                <input required className="rounded-md outline-none pl-12 pr-5 py-3 w-full" type="text" placeholder="Username / Email address" />
                            </div>
                            <div className="relative mt-5">
                                <MdLockOpen className="absolute top-4 left-5" />
                                <input required className="rounded-md outline-none pl-12 pr-5 py-3 w-full" type={showPassword ? 'text' : 'password'} placeholder="Password" />
                                <div className="cursor-pointer absolute top-[39%] right-[10px]" onClick={()=> setShowPassword(!showPassword)}>
                                    { showPassword ? <LuEyeOff /> : <LuEye /> }
                                </div>
                            </div>
                            <div className="flex justify-end mt-2">
                                <span onClick={handleShowForgetPassword} className="text-sm font-semibold text-[#202123] underline cursor-pointer">Forget Password?</span>
                            </div>
                            <button type="submit" className="bg-[#CBFFFE] rounded-lg w-full py-3 mt-6 text-lg font-bold">Submit</button>
                            <div className="flex justify-center mt-2">
                                <p className="text-sm font-semibold text-[#202123]">Don’t have an account? <span className="text-[#FF0000] cursor-pointer" onClick={handleSignup} >Sign up!</span></p>
                            </div>
                        </form>
                    </div>
                </Modal>
            )
        }
    </>)
}