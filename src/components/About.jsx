import { motion } from 'motion/react';
import React, { useState } from 'react'

const About = () => {

    const [ishovered, setIshovered] = useState(false);

    return (
        <div className='bg-dull-green py-20 rounded-t-2xl  font-[NeueMontreal]'>
            <div className='px-5'>
                <h1 className='text-[4.4vw] leading-none mb-[6vw]'>
                    Ochi is a strategic presentation agency for forward-thinking businesses that need to <span className='underline'>rause funds</span>, <span className='underline'>sell products,</span> <span className='underline'>explain complex ideas,</span> and <span className='underline'>hire great people.</span>
                </h1>
            </div>
            <hr />
            <div className='flex flex-col md:flex-row justify-between items-start pt-5 pb-20 px-10 '>
                <h1 className='mb-10'>What you can expect:</h1>
                <div className='md:w-1/2 flex flex-col sm:flex-row justify-between pr-20'>
                    <div className='sm:w-1/2'>
                        <h1 className='mb-10'>We partner with the companies and startups who make the world go round — they drive the net-zero economy. revolutionize crypto treasury management, build photonic chips, and open Michelin-starred restaurants</h1>
                        <h1>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, covincing and captivating</h1>
                    </div>
                    <div className='flex flex-col justify-end'>
                        <h1 className='mb-5'>S:</h1>
                        <a className='underline' href="/">Instagram</a>
                        <a className='underline' href="/">Behance</a>
                        <a className='underline' href="/">Facebook</a>
                        <a className='underline' href="/">LinkedIn</a>
                    </div>
                </div>
            </div>
            <hr />
            <div className='flex flex-col md:flex-row gap-10 justify-between px-10 py-5'>
                <div className='md:w-1/2'>
                    <h1 className='font-bold text-2xl sm:text-4xl md:text-5xl mb-5'>Our approach:</h1>
                    <a
                        onMouseEnter={() => setIshovered(true)}
                        onMouseLeave={() => setIshovered(false)}
                        className='rounded-full py-4 pl-4 pr-10 uppercase relative flex items-center w-fit bg-dark text-white text-xs md:text-md group ' href="/">
                        read more
                        <div className={`w-2.5 absolute left-[75%] transition-all duration-500 group-hover:w-6 group-hover:-translate-x-[30%] aspect-square bg-dull-white rounded-full overflow-hidden flex items-center justify-center`}>
                            <i className='ri-arrow-right-up-long-line hidden text-sm text-black transition-all duration-700 group-hover:flex'></i>
                        </div>
                    </a>
                </div>
                <div className='w-full md:w-1/2'>
                    <div className={`w-full rounded overflow-hidden transition-transform duration-300 ${ishovered ? 'scale-95' : ''}`}>
                        <img className={`w-full h-full object-cover object-center transition-transform duration-500 ${ishovered ? 'scale-125' :''}`} src="./Images/ourstory.jpg" alt="approach" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
