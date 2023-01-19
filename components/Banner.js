import Image from "next/image"

const Banner = () => {
    return (
        <>
            <div className="z-40 relative h-[500px] xs:h-[600px] 2xl:h-[700px]">
                <Image src="/hero.png" layout="fill" objectFit="cover" />

                <div className="absolute w-full h-full bg-black/50 md:bg-transparent ">
                    <div className="px-10 h-full w-full flex justify-center items-center">
                        <div className="container px-6 flex flex-col md:flex-row justify-between items-center xl:mt-[-150px]">
                            <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start text-white">
                                {/* title */}
                                <div className="text-[40px] lg:text-[40px] py-2 font-bold">
                                    <p className="text-center md:text-left">
                                        Leave the office behind and <span className="text-orange">unwind</span>
                                    </p>
                                </div>
                                {/* text */}
                                <p className="text-center md:text-left mt-6">We are here to help you take care of your legality with the best service especially for you.</p>
                                {/* button */}
                                <button className="bg-btn_background w-40 mt-10 p-4 border rounded-[5px] text-white hover:bg-orange hover:border-orange">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-[-350px] md:bottom-[-180px] lg:bottom-[-50px] w-full">
                    <div className="w-full md:flex md:justify-center">
                        <div className="md:max-w-[750px] lg:max-w-[1050px] bg-white">
                            <div className="px-6 py-8 shadow-lg ">
                                <div className="grid md:grid-cols-4 lg:grid-cols-5 grid-cols-1 gap-6 md:gap-5 lg:gap-3">

                                    <input placeholder="I want to go." className="bg-cyan p-2 px-4 rounded-[4px] mr-2" />
                                    <input placeholder="Check in" className="bg-cyan p-2 px-4 rounded-[4px] mr-2" />
                                    <input placeholder="Check out" className="bg-cyan p-2 px-4 rounded-[4px] mr-2" />
                                    <input placeholder="Travellers" className="bg-cyan p-2 px-4 rounded-[4px] mr-2" />
                                    <button className="bg-green text-white py-3 px-5 text-sm rounded-[4px] md:col-start-2 md:col-end-4 lg:col-start-5 lg:col-end-6">Find available cabins</button>

                                </div>

                            </div></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner