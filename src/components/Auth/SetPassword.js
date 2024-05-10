'use client'

import Image from "next/image";
import { MdLockOpen } from "react-icons/md";
import { LuEye, LuEyeOff  } from "react-icons/lu";
import Modal from "../Modal/Modal";
import { useState } from "react";
import SignIn from "./SignIn";

export default function SetPassword({ isOpen, onClose }) {
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
                            <h2 className="font-bold text-center text-4xl md:text-5xl">Congratulations</h2>
                            <p className="text-center text-base font-semibold mt-3">Your new password has been Updated successfully </p>
                            <button className="bg-[#CBFFFE] rounded-lg w-full py-3 mt-6 text-lg font-bold" onClick={handleSignin}>Sign In</button>
                        </div>
                    ) : (
                        <div>
                            <h2 className="font-bold text-center text-4xl md:text-5xl">Reset Password</h2>
                            <p className="text-center text-base font-semibold mt-3">Please reset your password</p>
                            <div className="flex justify-center my-3">
                                <Image src='/sun.svg' width='20' height='20' />
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="relative mt-5">
                                    <MdLockOpen className="absolute top-4 left-5" />
                                    <input required className="rounded-md outline-none pl-12 pr-5 py-3 w-full" type={showPassword ? 'text' : 'password'} placeholder="New Password" />
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
                                <button type="submit" className="bg-[#CBFFFE] rounded-lg w-full py-3 mt-6 text-lg font-bold">Update</button>
                            </form>
                        </div>
                    )
                }
            </Modal>
        )
    }
    </>)
}