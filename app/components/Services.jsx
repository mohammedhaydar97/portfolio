import { assets, serviceData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'  // Add this import

const Services = () => {
    return (
        <div id="services" className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg'>
                What I offer
            </h4>
            <h2 className='text-center text-5xl'>
                My Services
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10'>
                {serviceData.map(({ icon, title, description, link }, index) => (
                    <div
                        className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500'
                        key={index}>
                        <Image src={icon} alt='' className='w-10' width={40} height={40} />
                        <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                        <p className='text-sm text-gray-600 leading-5'>
                            {description}
                        </p>
                        <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                            Read more <Image alt="" src={assets.right_arrow} className='w-4' width={16} height={16} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services