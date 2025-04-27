import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const Header = () => {
    const [typedText, setTypedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const fullText = "Full Stack Developer And Project Manager";
    const nameText = "I'm Mohammed Haydar";

    // Typing and deleting effect for the main title
    useEffect(() => {
        let timeout;
        
        if (!isDeleting && currentIndex < fullText.length) {
            // Typing mode
            timeout = setTimeout(() => {
                setTypedText(prev => prev + fullText[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 100);
        } else if (isDeleting && currentIndex > 0) {
            // Deleting mode
            timeout = setTimeout(() => {
                setTypedText(prev => prev.slice(0, -1));
                setCurrentIndex(prev => prev - 1);
            }, 50); // Faster deletion speed
        } else if (currentIndex === fullText.length) {
            // Switch to deleting after 7 seconds of display
            timeout = setTimeout(() => {
                setIsDeleting(true);
            }, 7000);
        } else if (isDeleting && currentIndex === 0) {
            // Switch back to typing after deletion completes
            timeout = setTimeout(() => {
                setIsDeleting(false);
            }, 500); // Small pause before retyping
        }

        return () => clearTimeout(timeout);
    }, [currentIndex, isDeleting, fullText]);

    // Typing effect for the name (unchanged)
    const [nameDisplay, setNameDisplay] = useState('');
    const [nameIndex, setNameIndex] = useState(0);

    useEffect(() => {
        if (nameIndex < nameText.length) {
            const timeout = setTimeout(() => {
                setNameDisplay(prev => prev + nameText[nameIndex]);
                setNameIndex(prev => prev + 1);
            }, 100);

            return () => clearTimeout(timeout);
        }
    }, [nameIndex, nameText]);

    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center'>
            <div className='relative w-40 h-40 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg mb-6'>
                <Image 
                    src={assets.profile_img} 
                    alt="Mohammed Haydar" 
                    layout='fill'
                    objectFit='cover'
                    className='rounded-full'
                />
            </div>
            <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-10'>
                {nameDisplay}
                {nameIndex >= nameText.length && (
                    <Image src={assets.hand_icon} alt="" className='w-6 animate-bounce' />
                )}
            </h3>
            <h1 className='text-3xl sm:text-6xl lg:text-[66px] mb-10 min-h-[100px] sm:min-h-[150px] lg:min-h-[180px]'>
                {typedText}
                <span className='animate-pulse'>|</span>
            </h1>
            <p className='max-w-2xl mx-auto'>
                I am a full stack developer and project manager with over 5 years of experience in multiple companies and roles.
            </p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <a href="#contact" className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-black text-white'>
                    contact me <Image src={assets.right_arrow_white} alt="" className="w-4" />
                </a>
                <a href="/CV.PNG" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>
                    my resume <Image src={assets.download_icon} alt="" className="w-4" />
                </a>
            </div>
        </div>
    );
};

export default Header;