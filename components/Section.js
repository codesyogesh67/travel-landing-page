
import { AiFillDatabase } from "react-icons/ai";
import Image from "next/image";

const Section = () => {

    const lists = [
        {
            id: 1,
            image: "/image4.png",
            subtitle: "For those who love",
            title: "To Explore nature",

            text: "Discover some of the most beautiful scenery – from the wonders of Snowdonia to the famous beauty of the Scottish Highlands.",

        },
        {
            id: 1,
            image: "/image4.png",
            subtitle: "For those who love",
            title: "To Explore nature",

            text: "Discover some of the most beautiful scenery – from the wonders of Snowdonia to the famous beauty of the Scottish Highlands.",

        }, {
            id: 1,
            image: "/image4.png",
            subtitle: "For those who love",
            title: "To Explore nature",

            text: "Discover some of the most beautiful scenery – from the wonders of Snowdonia to the famous beauty of the Scottish Highlands.",

        },
    ]


    return (
        <div className="mt-10 md:mt-20 px-10 w-full flex justify-center">
            <div className="container px-6 flex flex-col justify-center items-start md:items-center">

                <p className="text-xl font-bold text-left lg:text-center pt-3 pb-1 self-start">Inspirations for next getaway</p>
                <div className="w-[100px] h-[2px] bg-orange mb-3 self-start" />
                <p className="text-left py-2 text-sm self-start">We’ve curated some amazing experiences to help you find your next getaway.</p>

                <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] py-4 pt-10 md:pt-20  gap-12 w-full">
                    {lists.map(({ id, image, subtitle, text, title }) => (
                        <div className="border-1 border-black-500/5 shadow-md flex flex-col rounded-[10px]" key={title}>
                            <Image src={image} width="500" height="500" alt="Default image" />
                            <div className="p-4 bg-dark-green text-white rounded-b-[10px]">
                                <p className="text-[8px] text-2x-light-green uppercase">{subtitle}</p>
                                <p className="py-1 font-bold">{title}</p>

                                <p className="py-2 text-xs">{text}</p>

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default Section