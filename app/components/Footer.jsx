import React, { useState } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { Copy, Check } from 'lucide-react';

const Footer = () => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('mouhamad_haydar@outlook.com')
            .then(() => {
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
            })
            .catch(err => {
                console.error('Failed to copy email: ', err);
            });
    };

    return (
        <div className='mt-20 mb-5'>
            <div className='text-center'>
                <Image src={assets.logo} alt='' className='w-36 mx-auto mb-2' />

                <div 
                    className='w-max flex items-center gap-2 mx-auto relative group cursor-pointer hover:text-blue-500 transition-colors duration-300'
                    onClick={handleCopyEmail}
                >
                    <Image src={assets.mail_icon} alt='' className='w-6' />
                    <span>mouhamad_haydar@outlook.com</span>
                    <div className='ml-2 w-5 h-5 flex items-center justify-center'>
                        {isCopied ? (
                            <Check className='w-4 h-4 text-green-500 animate-bounce' />
                        ) : (
                            <Copy className='w-4 h-4 group-hover:opacity-100 transition-opacity duration-300' />
                        )}
                    </div>
                </div>
            </div>

            <div className='text-center sm:flex sm:items-center sm:justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p className='mb-4 sm:mb-0'>© 2025 Mohammed Haydar. All rights reserved.</p>
                <ul className='flex justify-center gap-6 sm:gap-10 mt-4 sm:mt-0'>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/yourusername" className='hover:text-blue-500 transition duration-300'>
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mohammed-haydar/" className='hover:text-blue-500 transition duration-300'>
                            LinkedIn
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;