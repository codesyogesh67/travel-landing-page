import Image from "next/image"

const Testimonial = () => {
    return (

        <div className="mt-10 md:mt-20 z-40 relative h-[500px] xs:h-[600px] 2xl:h-[700px]">
            <Image src="/woman.png" layout="fill" objectFit="cover" />

            <div className="absolute w-full h-full bg-black/50 md:bg-transparent ">
                <div className="px-10 h-full w-full flex justify-center items-center">
                    <div className="container px-6 flex flex-col md:flex-row md:justify-end justify-between items-center xl:mt-[-150px]">
                        <div className="md:w-2/5 flex flex-col justify-center items-center md:items-start text-white">
                            {/* title */}
                            <div className="text-[30px] py-2 font-md">
                                <p className="text-center md:text-left leading-9">
                                    A truly wonderful experience
                                    </p>
                            </div>
                            {/* text */}
                            <p className="text-center text-xs font-[500px] md:text-left mt-6 leading-5">
                                Brilliant for anyone looking to get away from the hustle and bustle of city life or detox from their tech for a few days. I could have stayed another week!

                            <br />
                                <br />
                            They really have thought about everything here down to the finest details.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial