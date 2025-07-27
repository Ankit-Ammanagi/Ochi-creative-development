import React, { useEffect, useState } from 'react'

const Cursorfollow = () => {
    const [rotate, setRotate] = useState(0)

    useEffect(() => {
        function handleMouse(e) {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            console.log(mouseX, mouseY)

            const deltaX = window.innerWidth - mouseX;
            const deltaY = window.innerHeight - mouseY;

            const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            console.log(angle)
            setRotate(angle-180)
        }

        window.addEventListener("mousemove", handleMouse)
        return () => {
            window.removeEventListener("mousemove", handleMouse)
        }
    }, [])


    return (
        <div data-scroll className='w-full relative'>
            <div className='w-full'>
                <img src="./Images/eyebg.jpg" alt="" />
            </div>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-5'>
                <div className='w-50 bg-white  aspect-square rounded-full relative'>
                    <div className='w-[65%] aspect-square rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark flex justify-center items-center overflow-hidden'>
                        <div style={{ transform: `rotate(${rotate}deg)` }} className='w-full bg-red-300 h-8'>
                            <div className='h-full aspect-square rounded-full bg-white'></div>
                        </div>
                    </div>
                </div>
                <div className='w-50 bg-white  aspect-square rounded-full relative'>
                    <div className='w-[65%] aspect-square rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark flex justify-center items-center overflow-hidden'>
                        <div style={{ transform: `rotate(${rotate}deg)` }} className='w-full bg-red-300 h-8'>
                            <div className='h-full aspect-square rounded-full bg-white'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cursorfollow
