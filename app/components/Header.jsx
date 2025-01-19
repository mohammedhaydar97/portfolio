import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const Header = () => {
    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center'>
            <Image src={assets.profile_img} alt="" className='rounded-full w-32' />
            <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-10'>
                I'm Mohammed Haydar
                <Image src={assets.hand_icon} alt="" className='w-6' />
            </h3>
            <h1 className='text-3xl sm:text-6xl lg:text-[66px] mb-10'>
                Full Stack Developer And Project Manager
            </h1>
            <p className='max-w-2xl mx-auto'>
                I am a full stack developer and project manager with over 5 years of experience in multiple companies and roles.
            </p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <a href="#contact" className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-black text-white'>
                    contact me <Image src={assets.right_arrow_white} alt="" className="w-4" />
                </a>
                <a href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>
                    my resume <Image src={assets.download_icon} alt="" className="w-4" />
                </a>
            </div>
        </div>
    );
};

export default Header;