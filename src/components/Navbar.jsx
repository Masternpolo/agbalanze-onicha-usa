import Logo from '../assets/Logo.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from 'react';



const list = ['Home', 'About', 'Events', 'Members', 'Gallery', 'Contact']

function navbar() {

    const [openMenu, setOpenMenu] = useState(false)

    const toggleNav = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <>
            <header className='bg-primary'>
                <nav className="px-8 min-h-12 bg-primary md:px-10 lg:px-16 xl:px-20 flex flex-col justify-between items-start md:flex-row md:items-center lg:flex-row lg:items-center">
                    <div className="">
                        <img className='w-10 lg:w-20 mt-1 md:my-4' src={Logo} alt="" />
                    </div>

                    <RxHamburgerMenu onClick={() => toggleNav()} className={`${openMenu ? 'hidden' : 'block'} w-10 h-10 absolute top-1 right-8 text-white md:hidden`} />
                    <IoClose onClick={() => toggleNav()} className={` ${openMenu ? 'sm:block' : 'hidden'} w-10 h-10 absolute top-1 right-8 text-white`} />

                    <ul className={` ${openMenu ? 'block' : 'hidden'} flex flex-col text-white h-screen gap-3 pt-6 md:pt-0 md:flex md:flex-row md:h-10 lg:flex-row lg:gap-4 lg:h-10 `}>
                        {
                            list.map((item, index) => (
                                <a key={index} className='font-semibold text-xl py-0.5 w-72 hover:border-2 focus:bg-orange-300 md:border-0 md:py-1 md:text-center md:rounded-2xl md:focus:bg-orange-400 md:hover:bg-white md:active:bg-orange-300 md:w-24 h-10 hover:text-black' href={(index === 0) ? '/' : `/${item.toLowerCase()}`}>{item}</a>
                            ))
                        }
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default navbar