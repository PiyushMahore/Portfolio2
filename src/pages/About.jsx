import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import { BsArrowRight } from "react-icons/bs";
import profile from '../../public/profile.jpg'

function About() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entrie) => {
            if (entrie.isIntersecting) {
                entrie.target.classList.add('aboutAnimation2')
            }
        })
    })

    useEffect(() => {
        const element = document.getElementById('about')
        observer.observe(element)
        const element2 = document.getElementById('about2')
        observer.observe(element2)
    }, [])

    const observer2 = new IntersectionObserver((entries) => {
        entries.forEach((entrie) => {
            if (entrie.isIntersecting) {
                entrie.target.classList.add('aboutAnimation')
            } else {
                entrie.target.classList.remove('aboutAnimation')
            }
        })
    })

    useEffect(() => {
        const element = document.getElementById('aboutImg')
        observer2.observe(element)
    }, [])

    return (
        <div className='about w-full min-h-screen flex justify-center gap-12 lg:gap-16 lg:flex-row flex-col-reverse pt-16 mt-10 2xl:ml-20 ml-auto mr-auto gutter-spacing items-center xl:items-start'>
            <div id='aboutImg' className='lg:w-fit z-10 text-center lg:mb-0 mb-52'>
                <img className='relative z-50 border-2 border-[#fff] rounded-xl overflow-hidden' src={profile} alt="" />
                <img className='relative bottom-56 z-10 right-32 rotating2 xl:flex hidden' src="https://janna-react.vercel.app/images/effect-1.svg" alt="" />
            </div>
            <div className='lg:w-1/2 pt-10 flex items-start'>
                <div id='about' className='flex items-start flex-col gap-3 px-2'>
                    <span className='px-3 py-1.5 bg-[#052c65] rounded uppercase'>
                        about me
                    </span>
                    <div className='text-4xl lg:text-5xl text-left font-semibold'>
                        I AM AVAILABLE FOR <span className='text-[#0788ff]'>FULL STACK</span> PROJECTS
                    </div>
                    <p className='mt-3 text-left'>
                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    </p>
                    <button className='my-6 text-xl py-3 px-8 bg-[#0d6efd] rounded-full cursor-pointer hover:bg-[#040c16] hover:border-white border-2 border-[#0d6efd] transition-all duration-[.35s] ease-out'>
                        <Link className='flex items-center gap-3 justify-center' to='contact' smooth={true} duration={800}>
                            Get in touch <BsArrowRight />
                        </Link>
                    </button>
                </div>
                <div id='about2' className='rotating xl:flex hidden w-full relative -top-9 '>
                    <img src="https://janna-react.vercel.app/images/effect-2.svg" alt="" />
                </div>
            </div>
        </div >
    )
}

export default About