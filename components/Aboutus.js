import Image from "next/image"


const Aboutus = () => {
    return (
        <div className="h-full px-10 w-full flex justify-center mt-10 md:mt-20">
            <div className="container flex flex-col lg:flex-row-reverse justify-between px-6">


                <div className="flex-1 flex  mb-4">
                    <iframe src="https://www.youtube.com/embed/eGJEdlq7MAE"
                        frameborder='0'
                        allow='autoplay; encrypted-media'
                        allowfullscreen
                        title='video'
                        width='560'
                        height='315'
                        className="rounded-[20px] shadow-xl"
                    />
                </div>
                <div className="flex-1 flex flex-col justify-center md:justify-start md:items-start">


                    {/* title */}

                    <p className="text-lg font-bold text-left lg:text-center pt-3 pb-1 self-start">
                        Get ready to unwind</p>
                    <div className="w-[100px] h-[2px] bg-orange mb-4 self-start" />

                    {/* text */}
                    <p className="text-xs md:text-left mt-2 w-4/5 leading-5">
                        A cabin getaway can be a wonderful way to relax and reconnect with nature. Many cabin rentals are
                        located in beautiful, secluded areas, surrounded by trees and other natural beauty.
                        A cabin getaway can be a wonderful way to escape the hustle and bustle of daily life and reconnect with nature.</p>

                    <p className="text-xs mt-6">Learn more {">"}</p>

                </div>
            </div>
        </div>

    )
}


export default Aboutus