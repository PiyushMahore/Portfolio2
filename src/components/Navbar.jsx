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
        <div className='nav fixed w-full top-0 left-0 py-5 flex justify-between items-center lg:px-[7%] px-3 z-50'>
            <div className='text-[34px] font-bold'>
                PIYUSH
            </div>

            {/* WEB */}

            <div className='items-center lg:flex hidden'>
                <ul className='flex text-sm list-none pr-12'>
                    <li className='pr-10'>
                        <Link activeClass='active' smooth={true} duration={800} to='home' className='cursor-pointer'>
                            HOME
                        </Link>
                    </li>
                    <li className='pr-10'>
                        <Link activeClass='active' smooth={true} duration={800} to='about' className='cursor-pointer'>
                            ABOUT ME
                        </Link>
                    </li>
                    <li className='pr-10'>
                        <Link activeClass='active' smooth={true} duration={800} to='skills' className='cursor-pointer'>
                            SKILLS
                        </Link>
                    </li>
                    <li className='pr-10'>
                        <Link activeClass='active' smooth={true} duration={800} to='projects' className='cursor-pointer'>
                            PROJECTS
                        </Link>
                    </li>
                    <li>
                        <Link activeClass='active' to='contact' className='cursor-pointer' smooth={true} duration={800}>
                            CONTACT
                        </Link>
                    </li>
                </ul>
                <div>
                    <button className='text-xl py-3 px-8 bg-[#0d6efd] rounded-full cursor-pointer hover:bg-transparent hover:border-white border-2 border-[#0d6efd] transition-all duration-[.35s] ease-out'>
                        <Link to='contact' smooth={true} duration={800}>
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
                <div className={`${nav ? "translate-x-0" : "-translate-x-full"} flex transition-all duration-300 bg-[#040c16] list-none flex-col absolute mt-6 left-0 w-full items-start py-5 px-5 border-t border-gray-600 gap-5`}>
                    <li className={`${nav ? "opacity-100" : "opacity-0"} transition-all duration-[1500ms]`}>
                        <Link activeClass='active' to='home' smooth={true} duration={800}>
                            HOME
                        </Link>
                    </li>
                    <li className={`${nav ? "opacity-100" : "opacity-0"} transition-all duration-[1500ms]`}>
                        <Link activeClass='active' to='about' smooth={true} duration={800}>
                            ABOUT ME
                        </Link>
                    </li>
                    <li className={`${nav ? "opacity-100" : "opacity-0"} transition-all duration-[1500ms]`}>
                        <Link activeClass='active' to='skills' smooth={true} duration={800}>
                            SKILLS
                        </Link>
                    </li>
                    <li className={`${nav ? "opacity-100" : "opacity-0"} transition-all duration-[1500ms]`}>
                        <Link activeClass='active' to='projects' smooth={true} duration={800}>
                            PROJECTS
                        </Link>
                    </li>
                    <li className={`${nav ? "opacity-100" : "opacity-0"} transition-all duration-[1500ms]`}>
                        <Link activeClass='active' to='contact' smooth={true} duration={800}>
                            CONTACT
                        </Link>
                    </li>
                </div>
            </div>
        </div>
    )
}

export default Navbar
