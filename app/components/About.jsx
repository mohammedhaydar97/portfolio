import { assets, infoList, techStackData, toolsData } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const About = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Function to chunk array into groups of 5
    const chunkArray = (arr, size) => {
        return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
            arr.slice(i * size, i * size + size)
        );
    };

    // Generate consistent delays based on item position
    const generatePositionBasedDelays = (count) => {
        return Array.from({ length: count }, (_, i) => (i % 5) * 0.2);
    };

    const toolsChunks = chunkArray(toolsData, 5);
    const techStackChunks = chunkArray(techStackData, 5);
    const toolsDelays = generatePositionBasedDelays(toolsData.length);
    const techStackDelays = generatePositionBasedDelays(techStackData.length);

    return (
        <div id="about" className='w-full px-[12%] py-10 scroll-mt-10'>
            <style jsx global>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }
                .float-item {
                    animation: float 3s ease-in-out infinite;
                }
                .float-item:hover {
                    animation-play-state: paused;
                    transform: translateY(-5px) scale(1.1);
                }
            `}</style>

            <h4 className='text-center mb-2 text-lg'>Introduction</h4>
            <h2 className='text-center text-5xl'>About Me</h2>
            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <div>
                    <Image
                        src={assets.user_image}
                        alt='user'
                        className='w-full rounded-3xl'
                        width={500}
                        height={500}
                    />
                </div>
                <div className='flex-1'>
                    <p className='mb-10 max-w-2xl'>
                        I am an experienced Full Stack Developer Developer and Project Manager with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with and growth.
                    </p>
                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <li className='border-[0.5px] border-g rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black'
                                key={index}>
                                <Image
                                    src={icon}
                                    alt={title}
                                    className='w-7 mt-3'
                                />
                                <h3 className='my-4 font-semibold text-gray-700'>
                                    {title}
                                </h3>
                                <p className='text-gray-600 text-sm'>{description}</p>
                            </li>
                        ))}
                    </ul>

                    <h4 className='my-6 text-gray-700'>Tools i use</h4>
                    <div className='space-y-3'>
                        {toolsChunks.map((chunk, chunkIndex) => (
                            <ul key={chunkIndex} className='flex items-center gap-3 sm:gap-5'>
                                {chunk.map((tool, index) => {
                                    const globalIndex = chunkIndex * 5 + index;
                                    return (
                                        <li 
                                            key={index}
                                            className={`float-item flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:shadow-md`}
                                            style={isClient ? { 
                                                animationDelay: `${toolsDelays[globalIndex]}s`,
                                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                                            } : undefined}
                                        >
                                            <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
                                        </li>
                                    );
                                })}
                            </ul>
                        ))}
                    </div>

                    <h4 className='my-6 text-gray-700'>My Tech Stack</h4>
                    <div className='space-y-3'>
                        {techStackChunks.map((chunk, chunkIndex) => (
                            <ul key={chunkIndex} className='flex items-center gap-3 sm:gap-5'>
                                {chunk.map((tool, index) => {
                                    const globalIndex = chunkIndex * 5 + index;
                                    return (
                                        <li 
                                            key={index}
                                            className={`float-item flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:shadow-md`}
                                            style={isClient ? { 
                                                animationDelay: `${techStackDelays[globalIndex]}s`,
                                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                                            } : undefined}
                                        >
                                            <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
                                        </li>
                                    );
                                })}
                            </ul>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;