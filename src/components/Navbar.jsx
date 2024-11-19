import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { LuMenu } from "react-icons/lu";

function Navbar() {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    const handleScrool = () => {
        const nav = document.getElementsByClassName('nav')[0]
        window.scrollY == 0 ? nav.style.backgroundColor = "transparent" : nav.style.backgroundColor = "#040c16"
    }

    window.addEventListener('scroll', handleScrool)

    return (
        <div className='nav fixed w-full top-0 left-0 py-5 flex justify-between items-center lg:px-[10%] px-3'>
            <div className='text-[34px] font-bold'>
                PIYUSH
            </div>

            {/* WEB */}

            <div className='items-center lg:flex hidden'>
                <ul className='flex text-sm list-none pr-12'>
                    <li className='pr-10'>
                        <Link to='home' className='cursor-pointer'>
                            HOME
                        </Link>
                    </li>
                    <li className='pr-10'>
                        <Link to='about' className='cursor-pointer'>
                            ABOUT ME
                        </Link>
                    </li>
                    <li className='pr-10'>
                        <Link to='projects' className='cursor-pointer'>
                            PROJECTS
                        </Link>
                    </li>
                    <li>
                        <Link to='contact' className='cursor-pointer'>
                            CONTACT
                        </Link>
                    </li>
                </ul>
                <div>
                    <button className='text-xl py-3 px-8 bg-[#0d6efd] rounded-full cursor-pointer hover:bg-transparent hover:border-white border-2 border-[#0d6efd] transition-all duration-[.35s] ease-out'>
                        <Link to='contact'>
                            Lets' Talk
                        </Link>
                    </button>
                </div>
            </div>

            {/* MOBILE */}

            <div className='lg:hidden'>
                <div className='border-2 rounded py-1 px-2 border-gray-600'>
                    <LuMenu onClick={handleNav} size={25} />
                </div>
                <div className={`${nav ? "flex" : "hidden"} bg-[#040c16] list-none flex-col absolute mt-6 left-0 w-full items-start py-5 px-5 border-t border-gray-600 gap-5`}>
                    <li>
                        <Link to='home' smooth={true} duration={100}>
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link to='about' smooth={true} duration={300}>
                            ABOUT ME
                        </Link>
                    </li>
                    <li>
                        <Link to='projects' smooth={true} duration={500}>
                            PROJECTS
                        </Link>
                    </li>
                    <li>
                        <Link to='contact' smooth={true} duration={700}>
                            CONTACT
                        </Link>
                    </li>
                </div>
            </div>
        </div>
    )
}

export default Navbar
