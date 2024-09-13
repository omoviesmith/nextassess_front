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

        if (!formValues.firstName) {
            newErrors.firstName = "First Name is required.";
        }

        if (!formValues.lastName) {
            newErrors.lastName = "Last Name is required.";
        }

        if (!formValues.email) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
            newErrors.email = "Email is invalid.";
        }

        if (!formValues.phone) {
            newErrors.phone = "Mobile Number is required.";
        }

        if (!formValues.password) {
            newErrors.password = "Password is required.";
        } else if (formValues.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters.";
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
                firstName: formData.get('firstName'),
                lastName: formData.get('lastName'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                password: formData.get('password'),
                cPassword: formData.get('cPassword')
            };

            const newErrors = validateForm(formValues);

            if (Object.keys(newErrors).length === 0) {
                setLoading(true);
                const reqPayload = {
                    tenantName: formData.get('firstName'),
                    tenantAddress: '',
                    tenantEmail: formData.get('email'),
                    tenantPhone: formData.get('phone'),
                    tenantTier: 'Basic',
                    adminUser: {
                        firstName: formData.get('firstName'),
                        lastName: formData.get('lastName'),
                        email: formData.get('email'),
                        phone: formData.get('phone'),
                        password: formData.get('password')
                    },
                    requestContext: {
                        stage: "api"
                    },
                    headers: {
                        Host: "5uzhjd2hd7.ap-southeast-2.awsapprunner.com"
                    }
                }
                const res = await fetch('https://5uzhjd2hd7.ap-southeast-2.awsapprunner.com/register_tenant', {
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
                    setSuccess(true);
                    showToast.success('Account has been registered successfully!');
                } else {
                    setLoading(false);
                    console.error('Error while signup!', response.statusText);
                } 
            } else {
                setLoading(false);
                setErrors(newErrors);
            }
        } catch (error) {
            setLoading(false);
            console.error('Error while signup:', error);
        }
    }

    return (
        <>
            {showSignin ? (
                <SignIn isOpen={showSignin} onClose={handleCloseSignin} />
            ) : (
                <Modal isOpen={isOpen} onClose={onClose}>
                    {success ? (
                        <div className="pt-24">
                            <h2 className="font-bold text-center text-4xl md:text-5xl">Congratulations</h2>
                            <p className="text-center text-base font-semibold mt-3">Your account has been created successfully, please sign in</p>
                            <button className="bg-[#CBFFFE] rounded-lg w-full py-3 mt-6 text-lg font-bold" onClick={handleSignin}>Sign In</button>
                        </div>
                    ) : (
                        <div>
                            <h2 className="font-bold text-center text-4xl md:text-5xl">Sign up</h2>
                            <p className="text-center text-base font-semibold mt-3">Create your account</p>
                            <div className="flex justify-center my-3">
                                <Image src='/sun.svg' width='20' height='20' />
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="flex justify-between items-center gap-3">
                                    <div>
                                        <FaRegUser className="relative top-8 left-5" />
                                        <input className="rounded-md outline-none pl-12 pr-5 py-3 w-full" type="text" name="firstName" placeholder="First Name" />
                                        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                                    </div>
                                    <div>
                                        <FaRegUser className="relative top-8 left-5" />
                                        <input className="rounded-md outline-none pl-12 pr-5 py-3 w-full" type="text" name="lastName" placeholder="Last Name" />
                                        {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                                    </div>
                                </div>
                                <div>
                                    <MdMailOutline className="relative top-8 left-5" />
                                    <input className="rounded-md outline-none pl-12 pr-5 py-3 w-full" type="email" name="email" placeholder="Email Address" />
                                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                                </div>
                                <div>
                                    <MdPhoneAndroid className="relative top-8 left-5" />
                                    <input className="rounded-md outline-none pl-12 pr-5 py-3 w-full" type="tel" name="phone" placeholder="Mobile Number" />
                                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                                </div>
                                <div className="relative mt-5">
                                    <MdLockOpen className="absolute top-4 left-5" />
                                    <input className="rounded-md outline-none pl-12 pr-5 py-3 w-full" type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" />
                                    <div className="cursor-pointer absolute top-[39%] right-[10px]" onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <LuEyeOff /> : <LuEye />}
                                    </div>
                                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                                </div>
                                <div className="relative mt-5">
                                    <MdLockOpen className="absolute top-4 left-5" />
                                    <input className="rounded-md outline-none pl-12 pr-5 py-3 w-full" type={showcPassword ? 'text' : 'password'} name="cPassword" placeholder="Confirm Password" />
                                    <div className="cursor-pointer absolute top-[39%] right-[10px]" onClick={() => setShowcPassword(!showcPassword)}>
                                        {showcPassword ? <LuEyeOff /> : <LuEye />}
                                    </div>
                                    {errors.cPassword && <p className="text-red-500 text-sm">{errors.cPassword}</p>}
                                </div>
                                <button type="submit" disabled={loading} className="bg-[#CBFFFE] rounded-lg w-full py-3 mt-6 text-lg font-bold">Create</button>
                                <div className="flex justify-center mt-2">
                                    <p className="text-sm font-semibold text-[#202123]">Already have an account? <span className="text-[#FF0000] cursor-pointer" onClick={handleSignin}>Sign in!</span></p>
                                </div>
                            </form>
                        </div>
                    )}
                </Modal>
            )}
        </>
    );
}
