import { motion } from "motion/react"

const FeaturedProducts = () => {
    const featuredProjects = [
        {
            title: "salience labs",
            img: "./Images/Salience.png",
            btnText: [
                "brand identity",
                "pitch deck"
            ]
        },
        {
            title: "cardboard spaceship",
            img: "./Images/spaceship.png",
            btnText: [
                "brand template",
                "sales deck",
                "social media templates"
            ]
        },
        {
            title: "ah2 & matt horn",
            img: "./Images/Frame.png",
            btnText: [
                "pitch deck"
            ]
        },
        {
            title: "fyde",
            img: "./Images/Fyde.png",
            btnText: [
                "audit",
                "copywrite",
                "pitch deck",
                "slides design"
            ]
        }
    ]

    return (
        <div className='w-full mt-5 font-[NeueMontreal]'>
            <div className='w-full bg-dull-white sm:p-2 md:p-4 lg:p-6'>
                <h1 className='text-xl pl-5 md:text-3xl lg:text-5xl mb-5'>Featured projects</h1>
                <hr />
                <div className='w-full p-5'>
                    <div className='grid gap-8 sm:grid-cols-2 overflow-hidden'>
                        {
                            featuredProjects.map((value, index) => {
                                const position = index % 2 === 0 ? "left-full" : "left-0";
                                return (
                                    <div key={index} className='flex flex-col gap-2'>
                                        <div className='flex items-center gap-2'>
                                            <div className='w-3 h-3 rounded-full bg-dark'></div>
                                            <h1 className='text-md uppercase'>{value.title}</h1>
                                        </div>
                                        <div className='w-full relative my-2 group'>
                                            <div className="w-full">
                                                <div className='w-full rounded-lg overflow-hidden cursor-pointer group-hover:scale-90 transition-transform duration-500'>
                                                    <img className='w-full h-full object-cover object-center group-hover:scale-125 transition-transform duration-500' src={value.img} alt="" />
                                                </div>
                                            </div>
                                            <div className={`absolute top-1/2 max-sm:left-1/2 z-10 ${position} -translate-x-1/2 -translate-y-1/2 cursor-pointer`}>
                                                <h1 className="text-dull-green whitespace-nowrap flex uppercase text-6xl md:text-9xl font-[FoundersGrotesk]">
                                                    {
                                                        Array.from(value.title).map((char, index) => {
                                                            const delay = `${index * 0.2}`
                                                            return (
                                                                <div key={index} className="overflow-hidden">
                                                                    <span
                                                                        className={`
                                                                        inline-block 
                                                                        translate-y-full group-hover:translate-y-0 transition-transform 
                                                                        duration-500 
                                                                        ease-[cubic-bezier(.3,.86,.36,.95)]
                                                                        delay-[${delay}]a`}
                                                                    >
                                                                        {char === " " ? "\u00A0" : char}
                                                                    </span>
                                                                </div>
                                                            )
                                                        })}
                                                </h1>
                                            </div>

                                        </div>
                                        <div className='flex flex-wrap gap-4'>
                                            {
                                                (value.btnText).map((value, index) =>
                                                    <a key={index} className='text-sm whitespace-nowrap uppercase border px-3 py-1 rounded-full transition-all duration-300 hover:bg-dark hover:text-white' href="/">
                                                        {value}
                                                    </a>
                                                )
                                            }
                                        </div>
                                    </div>)
                            }
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProducts
