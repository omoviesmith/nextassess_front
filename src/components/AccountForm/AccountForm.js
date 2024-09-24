'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa6";
import { MdMailOutline, MdPhoneAndroid } from "react-icons/md";
import Modal from "../Modal/Modal";
import { showToast } from "react-next-toast";
import { useUser } from "@/context/UserContext";

export default function AccountForm({ isOpen, onClose, editType }) {
    const { user, setUser } = useUser();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [formValues, setFormValues] = useState({}); // State to hold form values

    useEffect(() => {
        // Populate form values from user prop when the modal opens
        if (user) {
            if (editType === 'personal') {
                setFormValues({
                    fullName: user.fullName || '',
                    firstName: user.firstName || '',
                    lastName: user.lastName || '',
                    emailAddress: user.emailAddress || '',
                    phone: user.phone || '',
                    bio: user.bio || '',
                });
            } else if (editType === 'institute') {
                setFormValues({
                    institutionName: user.institutionName || '',
                });
            } else if (editType === 'contact') {
                setFormValues({
                    country: user.country || '',
                    cityState: user.cityState || '',
                    postalCode: user.postalCode || '',
                    taxId: user.taxId || '',
                });
            }
        }
    }, [user, editType]);

    function validateForm(formValues, editType) {
        const newErrors = {};
        if (!formValues.institutionName && editType === 'institute') {
            newErrors.institutionName = "Institution Name is required.";
        }

        if (editType === 'personal') {
            if (!formValues.firstName) {
                newErrors.firstName = "First Name is required.";
            }
            if (!formValues.lastName) {
                newErrors.lastName = "Last Name is required.";
            }
            if (!formValues.emailAddress) {
                newErrors.emailAddress = "Email is required.";
            } else if (!/\S+@\S+\.\S+/.test(formValues.emailAddress)) {
                newErrors.emailAddress = "Email is invalid.";
            }
            if (!formValues.phone) {
                newErrors.phone = "Mobile Number is required.";
            }
        }

        return newErrors;
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            // Validate form values
            const newErrors = validateForm(formValues, editType);
            console.log(newErrors);
            if (Object.keys(newErrors).length === 0) {
                setLoading(true);
                const reqPayload = {
                    body: formValues,
                    requestContext: {
                        stage: 'api'
                    },
                    headers: {
                        Host: '5uzhjd2hd7.ap-southeast-2.awsapprunner.com'
                    }
                }
                const res = await fetch(`https://5uzhjd2hd7.ap-southeast-2.awsapprunner.com/api/update_tenant/${user.tenantId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(reqPayload),
                });
    
                const parsedResponse = await res.json();
                if (res.ok) {
                    setLoading(false);
                    showToast.success('Account updated successfully!');
                    setUser(prevUser => ({
                        ...prevUser,
                        ...formValues,
                    }));
                    setTimeout(() => onClose(), 2000);
                } else {
                    setLoading(false);
                    showToast.error('Submission failed. Please try again.');
                }
            }
        } catch (e) {
            console.error(e);
            setErrors({ general: "An error occurred. Please try again." });
            setLoading(false);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prev => ({ ...prev, [name]: value })); // Update form values on input change
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <h2 className="font-bold text-center text-4xl md:text-5xl">Edit Profile</h2>
            <div className="flex justify-center my-3">
                <Image src="/sun.svg" width="20" height="20" />
            </div>
            <form onSubmit={handleSubmit}>
                {editType === 'institute' && (
                    <div>
                        <FaRegUser className="relative top-8 left-5" />
                        <input
                            className="rounded-md outline-none pl-12 pr-5 py-3 w-full"
                            type="text"
                            name="institutionName"
                            placeholder="Institution Name"
                            value={formValues.institutionName || ''} // Pre-fill the field
                            onChange={handleChange}
                        />
                        {errors.institutionName && (
                            <p className="text-red-500 text-sm">{errors.institutionName}</p>
                        )}
                    </div>
                )}
                {editType === 'personal' && (
                    <>
                        <div className="flex justify-between items-center gap-3">
                            <div>
                                <FaRegUser className="relative top-8 left-5" />
                                <input
                                    className="rounded-md outline-none pl-12 pr-5 py-3 w-full"
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    value={formValues.firstName || ''} // Pre-fill the field
                                    onChange={handleChange}
                                />
                                {errors.firstName && (
                                    <p className="text-red-500 text-sm">{errors.firstName}</p>
                                )}
                            </div>
                            <div>
                                <FaRegUser className="relative top-8 left-5" />
                                <input
                                    className="rounded-md outline-none pl-12 pr-5 py-3 w-full"
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    value={formValues.lastName || ''} // Pre-fill the field
                                    onChange={handleChange}
                                />
                                {errors.lastName && (
                                    <p className="text-red-500 text-sm">{errors.lastName}</p>
                                )}
                            </div>
                        </div>
                        <div>
                            <MdMailOutline className="relative top-8 left-5" />
                            <input
                                className="rounded-md outline-none pl-12 pr-5 py-3 w-full"
                                type="email"
                                name="emailAddress"
                                placeholder="Email Address"
                                value={formValues.emailAddress || ''} // Pre-fill the field
                                onChange={handleChange}
                            />
                            {errors.emailAddress && (
                                <p className="text-red-500 text-sm">{errors.emailAddress}</p>
                            )}
                        </div>
                        <div>
                            <MdPhoneAndroid className="relative top-8 left-5" />
                            <input
                                className="rounded-md outline-none pl-12 pr-5 py-3 w-full"
                                type="tel"
                                name="phone"
                                placeholder="Mobile Number"
                                value={formValues.phone || ''} // Pre-fill the field
                                onChange={handleChange}
                            />
                            {errors.phone && (
                                <p className="text-red-500 text-sm">{errors.phone}</p>
                            )}
                        </div>
                        <div className="mt-3">
                            <textarea
                                className="rounded-md outline-none px-3 w-full"
                                name="bio"
                                rows={5}
                                placeholder="Enter bio..."
                                value={formValues.bio || ''} // Pre-fill the field
                                onChange={handleChange}
                            ></textarea>
                            {errors.bio && (
                                <p className="text-red-500 text-sm">{errors.bio}</p>
                            )}
                        </div>
                    </>
                )}
                {editType === 'contact' && (
                    <>
                        <div className="flex justify-between items-center gap-3">
                            <div>
                                <MdPhoneAndroid className="relative top-8 left-5" />
                                <input
                                    className="rounded-md outline-none pl-12 pr-5 py-3 w-full"
                                    type="text"
                                    name="country"
                                    placeholder="Country"
                                    value={formValues.country || ''} // Pre-fill the field
                                    onChange={handleChange}
                                />
                                {errors.country && (
                                    <p className="text-red-500 text-sm">{errors.country}</p>
                                )}
                            </div>
                            <div>
                                <MdPhoneAndroid className="relative top-8 left-5" />
                                <input
                                    className="rounded-md outline-none pl-12 pr-5 py-3 w-full"
                                    type="text"
                                    name="cityState"
                                    placeholder="City/State"
                                    value={formValues.cityState || ''} // Pre-fill the field
                                    onChange={handleChange}
                                />
                                {errors.cityState && (
                                    <p className="text-red-500 text-sm">{errors.cityState}</p>
                                )}
                            </div>
                        </div>
                        <div className="flex justify-between items-center gap-3">
                            <div>
                                <MdPhoneAndroid className="relative top-8 left-5" />
                                <input
                                    className="rounded-md outline-none pl-12 pr-5 py-3 w-full"
                                    type="text"
                                    name="postalCode"
                                    placeholder="Postal Code"
                                    value={formValues.postalCode || ''} // Pre-fill the field
                                    onChange={handleChange}
                                />
                                {errors.postalCode && (
                                    <p className="text-red-500 text-sm">{errors.postalCode}</p>
                                )}
                            </div>
                            <div>
                                <MdPhoneAndroid className="relative top-8 left-5" />
                                <input
                                    className="rounded-md outline-none pl-12 pr-5 py-3 w-full"
                                    type="text"
                                    name="taxId"
                                    placeholder="Tax ID"
                                    value={formValues.taxId || ''} // Pre-fill the field
                                    onChange={handleChange}
                                />
                                {errors.taxId && (
                                    <p className="text-red-500 text-sm">{errors.taxId}</p>
                                )}
                            </div>
                        </div>
                    </>
                )}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-[#CBFFFE] rounded-lg w-full py-3 mt-6 text-lg font-bold"
                        disabled={loading}
                    >
                        {loading ? 'Updating...' : 'Update'}
                    </button>
                </div>
            </form>
        </Modal>
    );
}
