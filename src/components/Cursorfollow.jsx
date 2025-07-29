import { useEffect, useRef, useState } from 'react'

const Cursorfollow = () => {
    const [rotateOne, setRotateOne] = useState(0)
    const [rotateTwo, setRotateTwo] = useState(0)
    const [leftDarkPos, setLeftDarkPos] = useState({})
    const [rightDarkPos, setRightDarkPos] = useState({})
    const eyeLeft = useRef(null)
    const eyeRight = useRef(null)

    useEffect(() => {
        function handleMouse(e) {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            function findAngle(eye, mouseX, mouseY) {
                if (!eye.current) return 0

                const rect = eye.current.getBoundingClientRect();

                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                const deltaX = centerX - mouseX;
                const deltaY = centerY - mouseY;

                const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

                return angle;
            }

            function findDarkPosition(mouseX, mouseY) {
                const top = (mouseY / window.innerHeight) * 36;
                const left = (mouseX / window.innerWidth) * 36;

                return { top, left }
            }

            setRotateOne(findAngle(eyeLeft, mouseX, mouseY))
            setRotateTwo(findAngle(eyeRight, mouseX, mouseY))
            setLeftDarkPos(findDarkPosition(mouseX, mouseY));
            setRightDarkPos(findDarkPosition(mouseX, mouseY));
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
                    <div style={{ top: `${leftDarkPos.top + 30}%`, left: `${leftDarkPos.left + 30}%`, transform: 'translate(-50%,-50%)' }} className='w-[65%] aspect-square rounded-full relative top-1/2 left-1/2 bg-dark flex justify-center items-center overflow-hidden'>
                        <div ref={eyeLeft} style={{ transform: `rotate(${rotateOne}deg)` }} className='w-full h-8'>
                            <div className='h-full aspect-square rounded-full bg-white'></div>
                        </div>
                    </div>
                </div>
                <div className='w-50 bg-white  aspect-square rounded-full relative'>
                    <div style={{ top: `${rightDarkPos.top + 30}%`, left: `${rightDarkPos.left + 30}%`, transform: 'translate(-50%,-50%)' }} className='w-[65%] aspect-square rounded-full relative top-1/2 left-1/2 bg-dark flex justify-center items-center overflow-hidden'>
                        <div ref={eyeRight} style={{ transform: `rotate(${rotateTwo}deg)` }} className='w-full h-8'>
                            <div className='h-full aspect-square rounded-full bg-white'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cursorfollow
