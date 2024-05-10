import Image from "next/image";

export default function Footer() {
    return (
        <footer className='bg-[#0B0D17] pt-12 pb-8 px-6'>
            <div className="w-full md:w-3/4 mx-auto">
                <div className="flex justify-center items-center">
                    <Image src='/dark-logo.png' width='100' height='100' />
                </div>
                <ul className="flex justify-center items-center flex-col md:flex-row gap-7 mt-6">
                    <li className="text-white cursor-pointer">About</li>
                    <li className="text-white cursor-pointer">Features</li>
                    <li className="text-white cursor-pointer">Pricing</li>
                    <li className="text-white cursor-pointer">Careers</li>
                    <li className="text-white cursor-pointer">Help</li>
                    <li className="text-white cursor-pointer">Privacy Policy</li>
                </ul>
                <div className="w-full h-[1px] bg-white mb-8 mt-12"></div>
                <div className="flex justify-between items-center flex-col-reverse gap-4 md:gap-0 md:flex-row">
                    <span className="text-[#D9DBE1] text-sm">© 2023 AccessMate. All rights reserved</span>
                    <ul className="flex items-center gap-5">
                        <li className="bg-gray-700 cursor-pointer rounded-full w-8 h-8 flex justify-center items-center">
                            <Image src='/instagram.svg' width='20' height='20' />
                        </li>
                        <li className="bg-gray-700 cursor-pointer rounded-full w-8 h-8 flex justify-center items-center">
                            <Image src='/dribble.svg' width='20' height='20' />
                        </li>
                        <li className="bg-gray-700 cursor-pointer rounded-full w-8 h-8 flex justify-center items-center">
                            <Image src='/twitter.svg' width='20' height='20' />
                        </li>
                        <li className="bg-gray-700 cursor-pointer rounded-full w-8 h-8 flex justify-center items-center">
                            <Image src='/youtube.svg' width='20' height='20' />
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}