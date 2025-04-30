import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const Header = () => {
    const [typedText, setTypedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [currentRole, setCurrentRole] = useState(0);
    const roles = [
        { text: "Full Stack Developer", color: "text-[#328e6e]" },
        { text: "Project Manager", color: "text-blue-500" }
    ];
    const name = "I'm Mohammed Haydar";

    useEffect(() => {
        let timeout;
        const currentText = roles[currentRole].text;
        
        if (!isDeleting && currentIndex < currentText.length) {
            timeout = setTimeout(() => {
                setTypedText(prev => prev + currentText[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 80);
        } else if (isDeleting && currentIndex > 0) {
            timeout = setTimeout(() => {
                setTypedText(prev => prev.slice(0, -1));
                setCurrentIndex(prev => prev - 1);
            }, 30);
        } else if (currentIndex === currentText.length) {
            timeout = setTimeout(() => {
                setIsDeleting(true);
            }, 2000);
        } else if (isDeleting && currentIndex === 0) {
            timeout = setTimeout(() => {
                setIsDeleting(false);
                setCurrentRole(prev => (prev + 1) % roles.length);
            }, 300);
        }

        return () => clearTimeout(timeout);
    }, [currentIndex, isDeleting, currentRole]);

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
            <h1 className='text-3xl sm:text-6xl lg:text-[66px] mb-10 min-h-[100px] sm:min-h-[150px] lg:min-h-[180px]'>
                <div className='flex items-center justify-center'>
                    {name}
                    <Image 
                        src={assets.hand_icon} 
                        alt="" 
                        className='w-8 ml-2 animate-bounce' 
                        style={{ animationDuration: '2s' }}
                    />
                </div>
                <div className={roles[currentRole].color}>
                    {typedText}
                    <span className='animate-pulse text-black'>|</span>
                </div>
            </h1>
          
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