import { motion } from 'motion/react'
import React from 'react'


const Marquee = () => {

    return (
        <div data-scroll data-scroll-section data-scroll-speed="0.0005" className='bg-dark-green w-full rounded-t-2xl text-dull-white font-[FoundersGrotesk] overflow-hidden'>
            <div className='flex py-10'>
                {
                    [1, 2, 3].map((val) =>
                        <motion.div
                            animate={{ translateX: "-100%" }}
                            transition={{ duration: 5, ease: "linear", repeat: Infinity }}
                            key={val} className='w-fit'>
                            <h1 className='text-[25vw] whitespace-nowrap uppercase pr-[4vw] leading-none'>We are ochi</h1>
                        </motion.div>
                    )
                }
            </div>
        </div>
    )
}

export default Marquee
