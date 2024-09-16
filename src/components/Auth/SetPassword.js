'use client'

import Image from "next/image";
import { MdLockOpen } from "react-icons/md";
import { LuEye, LuEyeOff  } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa6";
import Modal from "../Modal/Modal";
import { useState } from "react";
import SignIn from "./SignIn";
import { showToast } from 'react-next-toast';

export default function SetPassword({ isOpen, onClose }) {
    const [showTempPassword, setShowTempPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showcPassword, setShowcPassword] = useState(false);
    const [showSignin, setShowSignin] = useState(false);
    const [loading, setLoading] = useState(false);
    
    // Validation states
    const [errors, setErrors] = useState({});
    function handleSignin() {
        setShowSignin(true);
    }
    function handleCloseSignin() {
        setShowSignin(false);
        onClose();
    }
    function validateForm(formValues) {
        const newErrors = {};
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[.@$!%*?&])[A-Za-z\d.@$!%*?&]{8,}$/;
        if (!formValues.username) {
            newErrors.username = "Username is required.";
        }
        if (!formValues.tempPassword) {
            newErrors.tempPassword = "Temprary Password is required.";
        }
        if (!formValues.password) {
            newErrors.password = "Password is required.";
        } else if (formValues.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters.";
        } else if (!passwordRegex.test(formValues.password)) {
            newErrors.password = "Password must contain at least one uppercase letter, one number, and one special character.";
        }

        if (formValues.password !== formValues.cPassword) {
            newErrors.cPassword = "Passwords do not match.";
        }

        return newErrors;
    }
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const formData = new FormData(e.target);
            const formValues = {
                username: formData.get('username'),
                tempPassword: formData.get('tempPassword'),
                password: formData.get('password'),
                cPassword: formData.get('cPassword')
            };

            const newErrors = validateForm(formValues);

            if (Object.keys(newErrors).length === 0) {
                setLoading(true);
                const reqPayload = {
                    username: formData.get('username'),
                    temp_password: formData.get('tempPassword'),
                    new_password: formData.get('password')
                }
                const res = await fetch('https://5uzhjd2hd7.ap-southeast-2.awsapprunner.com/api/update-password-confirm', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(reqPayload)
                });
                const parsedResponse = await res.json();
                console.log('parsedResponse', parsedResponse);
                if (res.ok) {
                    setLoading(false);
                    showToast.success('Password updated successfully! Please login to continue!');
                    setShowSignin(true);
                } else {
                    setLoading(false);
                    showToast.error('Something went wrong. Please try again!');
                } 
            } else {
                setLoading(false);
                showToast.error('Something went wrong. Please try again!');
                setErrors(newErrors);
            }
        } catch (error) {
            setLoading(false);
            showToast.error('Something went wrong. Please try again!');
        }
    }
    return (<>
    {
        showSignin ? (
            <SignIn isOpen={showSignin} onClose={handleCloseSignin} />
        ) : (
            <Modal isOpen={isOpen} onClose={onClose}>
                <div>
                    <h2 className="font-bold text-center text-4xl md:text-5xl">Update Password</h2>
                    <p className="text-center text-base font-semibold mt-3">Please reset your password</p>
                    <div className="flex justify-center my-3">
                        <Image src='/sun.svg' width='20' height='20' />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <FaRegUser className="relative top-8 left-5" />
                            <input required className="rounded-md outline-none pl-12 pr-5 py-3 w-full" name="username" type="text" placeholder="Username" />
                            {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
                        </div>
                        <div className="relative mt-5">
                            <MdLockOpen className="absolute top-4 left-5" />
                            <input required className="rounded-md outline-none pl-12 pr-5 py-3 w-full" name="tempPassword" type={showTempPassword ? 'text' : 'password'} placeholder="Temp Password" />
                            <div className="cursor-pointer absolute top-[39%] right-[10px]" onClick={()=> setShowTempPassword(!showTempPassword)}>
                                { showTempPassword ? <LuEyeOff /> : <LuEye /> }
                            </div>
                            {errors.tempPassword && <p className="text-red-500 text-sm">{errors.tempPassword}</p>}
                        </div>
                        <div className="relative mt-5">
                            <MdLockOpen className="absolute top-4 left-5" />
                            <input required className="rounded-md outline-none pl-12 pr-5 py-3 w-full" name="password" type={showPassword ? 'text' : 'password'} placeholder="New Password" />
                            <div className="cursor-pointer absolute top-[39%] right-[10px]" onClick={()=> setShowPassword(!showPassword)}>
                                { showPassword ? <LuEyeOff /> : <LuEye /> }
                            </div>
                            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                        </div>
                        <div className="relative mt-5">
                            <MdLockOpen className="absolute top-4 left-5" />
                            <input required className="rounded-md outline-none pl-12 pr-5 py-3 w-full" name="cPassword" type={showcPassword ? 'text' : 'password'} placeholder="Confirm Password" />
                            <div className="cursor-pointer absolute top-[39%] right-[10px]" onClick={()=> setShowcPassword(!showcPassword)}>
                                { showcPassword ? <LuEyeOff /> : <LuEye /> }
                            </div>
                            {errors.cPassword && <p className="text-red-500 text-sm">{errors.cPassword}</p>}
                        </div>
                        <button type="submit" disabled={loading} className="bg-[#CBFFFE] rounded-lg w-full py-3 mt-6 text-lg font-bold">Update</button>
                    </form>
                </div>
            </Modal>
        )
    }
    </>)
}