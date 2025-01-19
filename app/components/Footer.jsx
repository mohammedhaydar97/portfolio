import React from 'react';
import Image from 'next/image'; // Assuming you're using Next.js for the Image component
import { assets } from '@/assets/assets';

const Footer = () => {
    return (
        <div className='mt-20 mb-5'>
            <div className='text-center'>
                <Image src={assets.logo} alt='' className='w-36 mx-auto mb-2' />

                <div className='w-max flex items-center gap-2 mx-auto'>
                    <Image src={assets.mail_icon} alt='' className='w-6' />
                    <span>greatstackdev@gmail.com</span>
                </div>
            </div>

            <div className='text-center sm:flex sm:items-center sm:justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p className='mb-4 sm:mb-0'>© 2025 William Mark. All rights reserved.</p>
                <ul className='flex justify-center gap-6 sm:gap-10 mt-4 sm:mt-0'>
                    <li>
                        <a target="_blank" href="https://instagram.com/greatstackdev" className='hover:text-blue-500 transition duration-300'>
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://instagram.com/greatstackdev" className='hover:text-blue-500 transition duration-300'>
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://instagram.com/greatstackdev" className='hover:text-blue-500 transition duration-300'>
                            Twitter
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;