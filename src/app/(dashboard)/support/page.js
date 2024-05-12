import { FaRegHeart } from "react-icons/fa";
import { TbRefresh } from "react-icons/tb";
import { FiSlash, FiPlusCircle, FiCreditCard, FiMail } from "react-icons/fi";

export default function Support() {
    return (
        <div>
            <p className="text-[#7F56D9] text-base font-semibold text-center">Support</p>
            <h3 className="text-[#101828] text-3xl font-semibold text-center">Ask us anything</h3>
            <p className="text-[#475467] text-base font-normal mt-2 text-center">Need something cleared up? Here are our most frequently asked questions.</p>
            <div className="flex justify-center mt-6">
                <div className="relative">
                    <svg className="absolute top-3 left-3" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="#667085" />
                    </svg>
                    <input placeholder="Search" type="text" className="rounded-lg border-[1px] border-[#D0D5DD] py-[10px] pr-4 pl-10 outline-none" />
                </div>
            </div>
            <div className="mt-8 rounded-[18px] bg-white px-8 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="mb-6">
                        <div className="bg-[#F4EBFF] rounded-full w-12 h-12 flex justify-center items-center">
                            <FaRegHeart className="text-[#7F56D9]" />
                        </div>
                        <h4 className="font-semibold text-lg leading-[30px] text-[#101828] mt-3 mb-2">Is there a free trial available?</h4>
                        <p className="text-[#475467] font-normal text-base leading-6 m-0">Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.</p>
                    </div>
                    <div className="mb-6">
                        <div className="bg-[#F4EBFF] rounded-full w-12 h-12 flex justify-center items-center">
                            <TbRefresh className="text-[#7F56D9]" />
                        </div>
                        <h4 className="font-semibold text-lg leading-[30px] text-[#101828] mt-3 mb-2">Can I change my plan later?</h4>
                        <p className="text-[#475467] font-normal text-base leading-6 m-0">Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.</p>
                    </div>
                    <div className="mb-6">
                        <div className="bg-[#F4EBFF] rounded-full w-12 h-12 flex justify-center items-center">
                            <FiSlash className="text-[#7F56D9]" />
                        </div>
                        <h4 className="font-semibold text-lg leading-[30px] text-[#101828] mt-3 mb-2">What is your cancellation policy?</h4>
                        <p className="text-[#475467] font-normal text-base leading-6 m-0">We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.</p>
                    </div>
                    <div className="mb-6">
                        <div className="bg-[#F4EBFF] rounded-full w-12 h-12 flex justify-center items-center">
                            <FiPlusCircle className="text-[#7F56D9]" />
                        </div>
                        <h4 className="font-semibold text-lg leading-[30px] text-[#101828] mt-3 mb-2">Can other info be added to an invoice?</h4>
                        <p className="text-[#475467] font-normal text-base leading-6 m-0">Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
                    </div>
                    <div className="mb-6">
                        <div className="bg-[#F4EBFF] rounded-full w-12 h-12 flex justify-center items-center">
                            <FiCreditCard className="text-[#7F56D9]" />
                        </div>
                        <h4 className="font-semibold text-lg leading-[30px] text-[#101828] mt-3 mb-2">How does billing work?</h4>
                        <p className="text-[#475467] font-normal text-base leading-6 m-0">Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.</p>
                    </div>
                    <div className="mb-6">
                        <div className="bg-[#F4EBFF] rounded-full w-12 h-12 flex justify-center items-center">
                            <FiMail className="text-[#7F56D9]" />
                        </div>
                        <h4 className="font-semibold text-lg leading-[30px] text-[#101828] mt-3 mb-2">How do I change my account email?</h4>
                        <p className="text-[#475467] font-normal text-base leading-6 m-0">You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop.</p>
                    </div>
                </div>
                <div className="mx-6 mt-6">
                    <div className="bg-[#F9F5FF] rounded-2xl p-8 flex justify-between items-start">
                        <div>
                            <h3 className="text-[#101828] text-xl font-semibold leading-[30px] mb-3">Still have questions?</h3>
                            <p className="text-[#475467] text-sm font-normal leading-7">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                        </div>
                        <button className="text-base text-white font-semibold bg-[#7F56D9] rounded-lg py-[10px] px-4">Get in touch</button>
                    </div>
                </div>
            </div>
        </div>
    );
}