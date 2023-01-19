
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';
import Avatar from '@mui/material/Avatar';


const Navbar = () => {
    const [showSideBar, setShowSideBar] = useState(false)

    const links = [
        { title: 'Our cabins' },
        { title: 'Get inspired' },
        { title: 'Gift a stay' },
        { title: 'About us' },
    ]

    return (
        <div className="w-full">
            <header className="flex items-center justify-center py-6 px-10">
                <nav className="container flex items-center justify-between gap-8 text-black px-6 ">

                    <p className="cursor-pointer"><span className="text-light-green font-medium">UNWIND</span><span className="text-green font-bold">CABINS</span></p>
                    <ul className="hidden lg:flex flex-1 gap-8 justify-end items-center">
                        {links.map(({ title }) => (
                            <li className="text-[14px] hover:text-green cursor-pointer hover:border-b-2 hover:border-green" key={title}>{title}</li>
                        ))}
                        <Avatar src="/no-image.png" className="text-black text-center hover:opacity-90" />


                    </ul>
                    <div className="flex-1 lg:hidden flex justify-end cursor-pointer">
                        {
                            showSideBar ? (
                                <IoClose onClick={() => setShowSideBar(!showSideBar)} />
                            ) : (
                                    <RxHamburgerMenu onClick={() => setShowSideBar(!showSideBar)} />
                                )
                        }

                    </div>

                </nav>
                {showSideBar && (
                    <nav
                        className="lg:hidden z-50 absolute h-[500px] top-[54px] flex flex-col items-center py-4 flex flex-col items-center justify-center w-full bg-black text-sm text-white"
                        aria-label="mobile">
                        {links.map(({ title }) => (
                            <a key={title} href="#hero" className="w-full py-8 text-center hover:opacity-90">{title}</a>

                        ))}



                    </nav>

                )}
            </header>
        </div>




    )
}

export default Navbar