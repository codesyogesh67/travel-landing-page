import { AiOutlineFacebook, CiYoutube, AiOutlineInstagram, AiOutlineTwitter, AiOutlineLinkedin, AiOutlineYoutube } from "react-icons/ai";
import { FiTwitter, FiLinkedin } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";


const Footer = () => {
    const links = [{
        title: "About us",
        sublinks: ["Our story", "Why us", "How it works", "FAQ"]
    },
    {
        title: "Our cabins",
        sublinks: ["North of London", "Golden Hideaway", "Oak Treehouse", "Acacia Retreat", "Blue Lagoon"]
    }, {
        title: "Get inspired",
        sublinks: ["Explore nature", "Hiking trails", "Swimming", "Fishing"]
    },
    {
        title: "Support",
        sublinks: ["Help", "Contact Us", "Privacy Policy", "Terms of Service"]
    }
    ]
    return (
        <div className="mt-10 md:mt-20 px-10 w-full flex justify-center bg-black text-white">
            <div className="container px-6 flex flex-col justify-center items-start md:items-center">

                <div className="container p-6 py-10 pt-20 mr-4 grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-10">


                    {links.map(({ title, sublinks }) => (
                        <div className="" key={title}>
                            <p className="pb-3 text-sm">{title}</p>
                            {sublinks.map((each) => (
                                <ul className="border-red-500">
                                    <li className="py-1 text-xs">
                                        {each}
                                    </li>
                                </ul>
                            ))}

                        </div>
                    ))}
                </div>
                <div className="mt-4 flex flex-col lg:justify-between lg:items-end lg:flex-row w-full">
                    <div className="lg:w-1/2 mr-8">
                        <p className="py-4 text-xs text-2x-light-green">Sign up to our Newsletter </p>
                        <p className="text-xs leading-5">For a weekly curated collection of 3 things you can watch, read or listen to switch off from the busy everyday.</p>
                    </div>
                    <div className="flex-1 flex items-center mt-6 lg:mt-0">
                        <input placeholder="Enter your email.." className="flex-1 px-3 py-3 rounded-[6px] text-xs mr-2 placeholder:text-xs" />
                        <button className=" bg-yellow text-black px-4 py-3 text-xs rounded-[6px]">Join the mailing list</button>
                    </div>
                </div>

                <div className="w-full h-[0.01rem] bg-[#346769] my-10 mb-6" />
                <div className="flex flex-col sm:flex-row items-center justify-between w-full mb-6">
                    <p><span className="text-white text-lg font-medium">UNWIND</span><span className="text-light-green text-lg">CABINS</span></p>
                    <p className="text-xs text-cyan py-3 sm:py-0 ">2023 UnwindCabins</p>
                    <div className="flex">
                        <AiOutlineFacebook className="mr-2" />
                        <AiOutlineInstagram className="mr-2" />
                        <AiOutlineTwitter className="mr-2" />
                        <AiOutlineLinkedin className="mr-2" />
                        <AiOutlineYoutube className="mr-2" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer