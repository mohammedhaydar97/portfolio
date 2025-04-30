import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const Navbar = ({}) => {
    const [isScroll, setIscroll] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY) {
                setIscroll(true);
            } else {
                setIscroll(false);
            }
        });
        return () => {
            window.removeEventListener('scroll', null);
        };
    }, []);

    const sideMenuRef = useRef(null);

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(0)';
    };

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(100%)';
    };

    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
                <Image src={assets.header_bg_color} alt='Background' className='w-full' />
            </div>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>
                {/* Logo on the left */}
                <a href="#top" className="flex-shrink-0">
                    <Image src={assets.logo} alt="Logo" width={150} height={150} />
                </a>
                
                {/* Centered navigation links */}
                <div className="flex-1 flex justify-center">
                    <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"}`}>
                        <li><a className='' href="#top">Home</a></li>
                        <li><a className='' href="#about">About me</a></li>
                        <li><a className='' href="#services">Services</a></li>
                        <li><a className='' href="#work">My Work</a></li>
                        <li><a className='' href="#contact">Contact me</a></li>
                    </ul>
                </div>
                
                {/* This empty div balances the logo space on the right */}
                <div className="flex-shrink-0 w-[150px]"></div>
            
                {/* Mobile menu */}
                <button className="md:hidden" onClick={openMenu}>
                    {/* Your mobile menu button icon here */}
                    <span>Menu</span>
                </button>
                
                <ul 
                    ref={sideMenuRef} 
                    className='flex md:hidden flex-col gap-4 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-transform duration-500 transform translate-x-full'
                    style={{ transform: 'translateX(100%)' }}
                >
                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <Image src={assets.close_black} alt='' className='w-5 cursor-pointer' />
                    </div>
                    <li><a className='' onClick={closeMenu} href="#top">Home</a></li>
                    <li><a className='' onClick={closeMenu} href="#about">About me</a></li>
                    <li><a className='' onClick={closeMenu} href="#services">Services</a></li>
                    <li><a className='' onClick={closeMenu} href="#work">My Work</a></li>
                    <li><a className='' onClick={closeMenu} href="#contact">Contact me</a></li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;