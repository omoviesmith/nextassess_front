'use client'

import Image from "next/image";
import { FaRegUser } from "react-icons/fa6";
import Modal from "../Modal/Modal";
import SetPassword from "./SetPassword";
import { useState } from "react";

export default function ForgetPassword({ isOpen, onClose }) {
    const [showSetPassword, setShowSetPassword] = useState(false);
    function handleCloseSetPassword() {
        setShowSetPassword(false);
        onClose();
    }
    function handleSubmit(e) {
        e.preventDefault();
        setShowSetPassword(true);
    }
    return (<>
        <Modal isOpen={isOpen} onClose={onClose}>
            <div>
                <h2 className="font-bold text-center text-4xl md:text-5xl">Forget Password</h2>
                <p className="text-center text-base font-semibold mt-3">Please enter your email and we will send you the reset password</p>
                <div className="flex justify-center my-3">
                    <Image src='/sun.svg' width='20' height='20' />
                </div>
                <form onSubmit={handleSubmit} className="mt-10">
                    <div>
                        <FaRegUser className="relative top-8 left-5" />
                        <input className="rounded-md outline-none pl-12 pr-5 py-3 w-full" type="email" placeholder="Enter Email address" />
                    </div>
                    <button type="submit" className="bg-[#CBFFFE] rounded-lg w-full py-3 mt-6 text-lg font-bold">Send</button>
                </form>
            </div>
        </Modal>
        <SetPassword isOpen={showSetPassword} onClose={handleCloseSetPassword} />
    </>)
}