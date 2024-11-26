import React, { useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-scroll'
import { BsArrowRight } from "react-icons/bs";
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import x from '../assets/x.svg'
import profile from '../../public/profile.jpg'

function Home() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entrie) => {
            if (entrie.isIntersecting) {
                entrie.target.classList.add('homeAnimation')
            } else {
                entrie.target.classList.remove('homeAnimation')
            }
        })
    })

    useEffect(() => {
        const element = document.getElementById('home')
        observer.observe(element)
    }, [])

    return (
        <div className='home min-h-screen flex items-center lg:flex-row flex-col lg:mt-24 mt-32 mb-10 sm:mb-0 px-[calc(var(--bs-gutter-x)*0.5)]'>
            <div id='home' className='flex lg:gap-5 gap-4 flex-col items-start lg:w-1/2 w-full'>
                <span className='px-3 py-1.5 bg-[#052c65] rounded uppercase'>
                    piyush mahore
                </span>
                <h1 className='font-bold text-4xl lg:text-5xl'>Hay! I’m Piyush</h1>
                <TypeAnimation
                    className='uppercase font-bold text-[#0788ff] text-4xl lg:text-5xl'
                    sequence={[
                        "I'm a Frontend",
                        1000,
                        "I'm a Full-Stack",
                        1000,
                        "I'm Developer",
                        1000,
                    ]}
                    wrapper="div"
                    speed={50}
                    repeat={Infinity}
                />
                <p className='text-left text-base lg:text-xl lg:mt-4 pr-10'>
                    Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.
                </p>
                <div className='mt-2 flex items-center gap-5 sm:flex-row flex-col w-full'>
                    <button className='sm:w-fit w-full text-xl py-3 px-8 bg-[#0d6efd] rounded-full cursor-pointer hover:bg-[#040c16] hover:border-white border-2 border-[#0d6efd] transition-all duration-[.35s] ease-out'>
                        <Link activeClass='active' smooth={true} duration={1200} className='flex items-center gap-3 justify-center' to='contact'>
                            Get in touch <BsArrowRight />
                        </Link>
                    </button>
                    <div className='flex justify-center gap-3 lg:gap-5'>
                        <a href="https://github.com/PiyushMahore" className='w-12 hover:scale-110 duration-200 ease-in'>
                            <img className='bg-[#fff] rounded-full border-2 border-[#fff]' src={github} />
                        </a>
                        <a href="https://x.com/Piyush_Mahore_" className='w-12 hover:scale-110 duration-200 ease-in'>
                            <img className='bg-[#fff] rounded-full border-2 border-[#fff]' src={x} />
                        </a>
                        <a href="https://www.linkedin.com/in/piyush-mahore-51602a2b1/" className='w-12 hover:scale-110 duration-200 ease-in'>
                            <img className='bg-[#fff] rounded-full border-2 border-[#fff]' src={linkedin} />
                        </a>
                    </div>
                </div>
            </div>
            <div className='lg:w-1/2 w-full py-12 lg:py-0 sm:mb-16 lg:mb-0'>
                <div className='box-border flex justify-center rounded-3xl xl:rounded-full overflow-hidden'>
                    <img className='w-full h-full md:w-4/5 xl:w-full bg-center bg-cover' src={profile} alt='IMG' />
                </div>
            </div>
        </div>
    )
}

export default Home