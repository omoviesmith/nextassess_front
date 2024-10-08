'use client'

import Image from "next/image";
import { FaRegUser } from "react-icons/fa6";
import { MdLockOpen } from "react-icons/md";
import { LuEye, LuEyeOff } from "react-icons/lu";
import Modal from "../Modal/Modal";
import { useState, useEffect } from "react";
import SignUp from "./SignUp";
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify'; // Updated import
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS
import SetPassword from "./SetPassword";
import { useUser } from "@/context/UserContext";

export default function SignIn({ isOpen, onClose }) {
    const { user, setUser } = useUser();
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [showForgetPassword, setShowForgetPassword] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const [loading, setLoading] = useState(false);
    
    // Validation states
    const [errors, setErrors] = useState({});
    
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
    
    function validateForm(formValues) {
        const newErrors = {};

        if (!formValues.username) {
            newErrors.username = "Username is required.";
        }

        if (!formValues.password) {
            newErrors.password = "Password is required.";
        }

        return newErrors;
    }
    
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const formData = new FormData(e.target);
            const formValues = {
                username: formData.get('username'),
                password: formData.get('password')
            };
            const newErrors = validateForm(formValues);
            if (Object.keys(newErrors).length === 0) {
                setLoading(true);
                const res = await fetch('https://5uzhjd2hd7.ap-southeast-2.awsapprunner.com/api/login', {
                    method: 'POST',
                    body: formData
                });
                
                const parsedResponse = await res.json();
                if (res.ok) {
                    setLoading(false);
                    toast.success('Logged in successfully!');
                    console.log('User Details:', parsedResponse.user_details);
                    setUser(parsedResponse.user_details); // Uses UserContext to set user
                    router.push('/assessments');
                } else {
                    setLoading(false);
                    toast.error(parsedResponse.message || 'Something went wrong. Please try again!');
                }
            } else {
                setLoading(false);
                toast.error('Please fix the errors in the form.');
                setErrors(newErrors);
            }
        } catch (error) {
            setLoading(false);
            toast.error('Something went wrong. Please try again!');
            console.error('Login error:', error);
        }
    }
    
    // Redirect if already logged in
    useEffect(() => {
        if (user) {
            router.push('/assessments');
        }
    }, [user, router]);

    return (
        <>
            {
                showForgetPassword ? (
                    <SetPassword isOpen={showForgetPassword} onClose={handleCloseForgetPassword} />
                ) : showSignup ? (
                    <SignUp isOpen={showSignup} onClose={handleCloseSignup} />
                ) : (
                    <Modal isOpen={isOpen} onClose={onClose}>
                        <div>
                            <h2 className="font-bold text-center text-4xl md:text-5xl">Sign in</h2>
                            <p className="text-center text-base font-semibold mt-3">Sign in into your account</p>
                            <div className="flex justify-center my-3">
                                <Image src='/sun.svg' alt="Sun Icon" width='20' height='20' />
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="relative">
                                    <FaRegUser className="absolute top-1/2 transform -translate-y-1/2 left-5 text-gray-400" />
                                    <input 
                                        required 
                                        className="rounded-md outline-none pl-12 pr-5 py-3 w-full" 
                                        name="username" 
                                        type="text" 
                                        placeholder="Username" 
                                        aria-label="Username"
                                    />
                                    {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
                                </div>
                                <div className="relative mt-5">
                                    <MdLockOpen className="absolute top-1/2 transform -translate-y-1/2 left-5 text-gray-400" />
                                    <input 
                                        required 
                                        className="rounded-md outline-none pl-12 pr-10 py-3 w-full" 
                                        name="password" 
                                        type={showPassword ? 'text' : 'password'} 
                                        placeholder="Password" 
                                        aria-label="Password"
                                    />
                                    <div 
                                        className="cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-5" 
                                        onClick={()=> setShowPassword(!showPassword)}
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => { if (e.key === 'Enter') setShowPassword(!showPassword); }}
                                    >
                                        { showPassword ? <LuEyeOff /> : <LuEye /> }
                                    </div>
                                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                                </div>
                                <div className="flex justify-end mt-2">
                                    <span 
                                        onClick={handleShowForgetPassword} 
                                        className="text-sm font-semibold text-[#202123] underline cursor-pointer"
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => { if (e.key === 'Enter') handleShowForgetPassword(); }}
                                    >
                                        Update Password!
                                    </span>
                                </div>
                                <button 
                                    type="submit" 
                                    disabled={loading} 
                                    className="bg-[#CBFFFE] rounded-lg w-full py-3 mt-6 text-lg font-bold"
                                >
                                    {loading ? 'Submitting...' : 'Submit'}
                                </button>
                                <div className="flex justify-center mt-2">
                                    <p className="text-sm font-semibold text-[#202123]">
                                        Don’t have an account? 
                                        <span 
                                            className="text-[#FF0000] cursor-pointer" 
                                            onClick={handleSignup} 
                                            role="button"
                                            tabIndex={0}
                                            onKeyDown={(e) => { if (e.key === 'Enter') handleSignup(); }}
                                        >
                                            {" "}Sign up!
                                        </span>
                                    </p>
                                </div>
                            </form>
                        </div>
                        {/* ToastContainer is already included in layout.js */}
                    </Modal>
                )
            }
        </>
    )
}