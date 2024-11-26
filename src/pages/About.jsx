import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import { BsArrowRight } from "react-icons/bs";
import profile from '../../public/profile.jpg';
import effct1 from '../assets/effect2.svg';
import effct2 from '../assets/effect1.svg';

function About() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entrie) => {
            if (entrie.isIntersecting) {
                entrie.target.classList.add('aboutAnimation2')
            }
        })
    })

    useEffect(() => {
        const elements = document.querySelectorAll('.aboutt')
        elements.forEach((element) => {
            observer.observe(element)
        })
    }, [])

    const observer2 = new IntersectionObserver((entries) => {
        entries.forEach((entrie) => {
            if (entrie.isIntersecting) {
                entrie.target.classList.add('aboutAnimation')
            }
        })
    })

    useEffect(() => {
        const elements = document.querySelectorAll('.aboutImg')
        elements.forEach((element) => {
            observer2.observe(element)
        })
    }, [])

    return (
        <div className='about w-full min-h-screen flex justify-center gap-12 lg:gap-16 lg:flex-row flex-col-reverse pt-16 mt-10 2xl:ml-20 ml-auto mr-auto gutter-spacing items-center xl:items-start'>
            <div className='lg:w-fit z-10 text-center lg:mb-0 mb-52'>
                <img className='aboutImg relative z-50 border-2 border-[#fff] rounded-xl overflow-hidden' src={profile} alt="" />
                <div className='aboutImg relative bottom-56 z-10 right-32 xl:flex hidden'>
                    <img className='rotating2' src={effct1} alt="" />
                </div>
            </div>
            <div className='lg:w-1/2 pt-10 flex items-start'>
                <div className='flex items-start flex-col gap-3 px-2'>
                    <span className='aboutt px-3 py-1.5 bg-[#052c65] rounded uppercase'>
                        about me
                    </span>
                    <div className='aboutt text-4xl lg:text-5xl text-left font-semibold'>
                        I AM AVAILABLE FOR <span className='text-[#0788ff]'>FULL STACK</span> PROJECTS
                    </div>
                    <p className='aboutt mt-3 text-left'>
                        I am a MERN Stack Developer skilled in building modern, scalable, and efficient web applications. With expertise in MongoDB, Express.js, React.js, and Node.js, I specialize in creating seamless full-stack solutions. I have experience in developing RESTful APIs, dynamic front-end interfaces, and managing databases to deliver high-quality, responsive, and user-friendly applications.                    </p>
                    <button className='aboutt my-6 text-xl py-3 px-8 bg-[#0d6efd] rounded-full cursor-pointer hover:bg-[#040c16] hover:border-white border-2 border-[#0d6efd] transition-all duration-[.35s] ease-out'>
                        <Link className='flex items-center gap-3 justify-center' to='contact' smooth={true} duration={800}>
                            Get in touch <BsArrowRight />
                        </Link>
                    </button>
                </div>
                <div className='xl:flex hidden w-full relative -top-9 aboutt'>
                    <img className='rotating' src={effct2} alt="" />
                </div>
            </div>
        </div >
    )
}

export default About