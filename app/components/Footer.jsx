import React, { useState } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { Copy, Check, Phone } from 'lucide-react';

const Footer = () => {
    const [isCopiedEmail, setIsCopiedEmail] = useState(false);
    const [isCopiedPhone, setIsCopiedPhone] = useState(false);

    const handleCopy = (text, setCopied) => {
        // Check if Clipboard API is available
        if (!navigator.clipboard) {
            // Fallback for browsers that don't support clipboard API
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            } catch (err) {
                console.error('Failed to copy: ', err);
            }
            document.body.removeChild(textArea);
            return;
        }

        navigator.clipboard.writeText(text)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
                // Fallback if modern method fails
                const textArea = document.createElement('textarea');
                textArea.value = text;
                document.body.appendChild(textArea);
                textArea.select();
                try {
                    document.execCommand('copy');
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                } catch (err) {
                    console.error('Fallback copy failed: ', err);
                }
                document.body.removeChild(textArea);
            });
    };

    const handleCopyEmail = () => {
        handleCopy('mouhamad_haydar@outlook.com', setIsCopiedEmail);
    };

    const handleCopyPhone = () => {
        handleCopy('+961 03395854', setIsCopiedPhone);
    };

    return (
        <div className='mt-20 mb-5'>
            <div className='text-center'>
                <Image src={assets.logo} alt='' className='w-36 mx-auto mb-2' />

                <div className='flex flex-col items-center gap-4'>
                    <div 
                        className='w-max flex items-center gap-2 relative group cursor-pointer hover:text-blue-500 transition-colors duration-300'
                        onClick={handleCopyEmail}
                    >
                        <Image src={assets.mail_icon} alt='' className='w-6' />
                        <span>mouhamad_haydar@outlook.com</span>
                        <div className='ml-2 w-5 h-5 flex items-center justify-center'>
                            {isCopiedEmail ? (
                                <Check className='w-4 h-4 text-green-500 animate-bounce' />
                            ) : (
                                <Copy className='w-4 h-4 group-hover:opacity-100 transition-opacity duration-300' />
                            )}
                        </div>
                    </div>

                    <a 
                        href="https://wa.me/96103395854" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='w-max flex items-center gap-2 relative group cursor-pointer hover:text-blue-500 transition-colors duration-300'
                    >
                        <Phone className='w-6' />
                        <span>+961 03395854</span>
                        <div 
                            className='ml-2 w-5 h-5 flex items-center justify-center'
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleCopyPhone();
                            }}
                        >
                            {isCopiedPhone ? (
                                <Check className='w-4 h-4 text-green-500 animate-bounce' />
                            ) : (
                                <Copy className='w-4 h-4 group-hover:opacity-100 transition-opacity duration-300' />
                            )}
                        </div>
                    </a>
                </div>
            </div>

            <div className='text-center sm:flex sm:items-center sm:justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p className='mb-4 sm:mb-0'>© 2025 Mohammed Haydar No rights reserved Take whatever you want. </p>
                <p className='mb-4 sm:mb-0'></p>
                
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