
import { AiFillDatabase } from "react-icons/ai";
import Image from "next/image";

const Features = () => {

    const lists = [
        {
            id: 1,
            image: "/image1.png",
            location: "Hampshire-england",
            title: "Rustic county retreat",
            price: "210",
            text: "Step outside and take in the stunning views. Our cabin sits on a quiet and secluded property, providing the perfect setting for a peaceful retreat.",
            starts: "4",
            reviews: "82"
        },
        {
            id: 2,
            image: "/image2.png",
            location: "Hampshire-england",
            title: "Rustic county retreat",
            price: "210",
            text: "Step outside and take in the stunning views. Our cabin sits on a quiet and secluded property, providing the perfect setting for a peaceful retreat.",
            starts: "4",
            reviews: "82"
        },
        {
            id: 3,
            image: "/image3.png",
            location: "Hampshire-england",
            title: "Rustic county retreat",
            price: "210",
            text: "Step outside and take in the stunning views. Our cabin sits on a quiet and secluded property, providing the perfect setting for a peaceful retreat.",
            starts: "4",
            reviews: "82"
        },

    ]


    return (
        <div className="mt-[400px] md:mt-56 lg:mt-28 px-10 w-full flex justify-center">
            <div className="container px-6 flex flex-col justify-center items-start md:items-center">

                <p className="text-xl font-bold text-left lg:text-center pt-3 pb-1 self-start">Discover our idyllic countryside cabins</p>
                <div className="w-[100px] h-[2px] bg-orange mb-3 self-start" />
                <p className="text-left py-2 text-sm self-start">We are here to help you take care of your legality with the best service especially for you.</p>

                <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] py-4 pt-10 md:pt-20 gap-12 w-full">
                    {lists.map(({ id, image, text, title, location, price, reviews, stars }) => (
                        <div className="border-1 border-black-500/5 shadow-md flex flex-col rounded-[10px]" key={title}>
                            <Image src={image} width="500" height="500" alt="Default image" />
                            <div className="p-4 bg-extra-dark-green text-white rounded-b-[10px]">
                                <p className="text-xs uppercase">{location}</p>
                                <div className="flex text-sm font-bold items-center justify-between">
                                    <p className="py-1">{title}</p>
                                    <p className="py-2">${price}</p>
                                </div>
                                <p className="py-2 text-xs">{text}</p>
                                <div className="flex text-xs">
                                    <p className="">{stars}</p>
                                    <p className="">{reviews} reviews</p>
                                </div>
                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default Features