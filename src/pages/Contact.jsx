import React, { useEffect, useState } from 'react'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import x from '../assets/x.svg'
import profile from '../../public/profile.jpg'

function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entrie) => {
            if (entrie.isIntersecting) {
                entrie.target.classList.add('textAnimate')
            }
        })
    })

    useEffect(() => {
        const element = document.getElementById('textAnimation')
        observer.observe(element)
    }, [])

    const observer2 = new IntersectionObserver((entries) => {
        entries.forEach((entrie) => {
            if (entrie.isIntersecting) {
                entrie.target.classList.add('contactAnimate')
            }
        })
    })

    useEffect(() => {
        const element = document.getElementById('contactAnimation')
        observer2.observe(element)
    }, [])

    const observer3 = new IntersectionObserver((entries) => {
        entries.forEach((entrie) => {
            if (entrie.isIntersecting) {
                entrie.target.classList.add('logoAnimate')
            }
        })
    })

    useEffect(() => {
        const element = document.getElementById('logoAnimation')
        observer3.observe(element)
    }, [])

    const submitForm = (e) => {
        e.preventDefault()
        if (name && email && subject && message) {
            alert('Form Submitted Successfully')
            setName('')
            setEmail('')
            setSubject('')
            setMessage('')
            console.log(name, email, subject, message);
        } else {
            alert('Please fill all the fields')
        }
    }

    return (
        <form onSubmit={submitForm} className='contact min-h-screen my-[100px] containerr'>
            <div className='border border-[rgba(7,136,255,.2)] rounded bg-[rgba(7,136,255,.1)] shadow-lg shadow-[rgba(7,136,255,.2)]'>
                <div className='flex p-5 lg:p-12'>
                    <div className='w-[55%] hidden lg:flex'>
                    </div>
                    <div id='textAnimation' className='w-full flex items-start flex-col gap-2.5 lg:ml-8'>
                        <h1 className='font-bold text-3xl lg:text-5xl text-left'>
                            Let’s Discuss
                        </h1>
                        <h6 className='font-medium text-[#fff] opacity-[.85] text-base max-w-[500px] text-left'>
                            I’m always open to new opportunities. Feel free to contact me!
                        </h6>
                    </div>
                </div>
                <div className='bg-[rgba(7,_136,_255,_.2)] flex lg:flex-row-reverse flex-col'>
                    <div className='w-full grid justify-items-start items-center lg:py-12 lg:px-12 py-8 gap-6'>
                        <div className='w-full flex md:flex-row flex-col sm:gap-0 gap-5'>
                            <div className='flex flex-col items-start gap-2 w-full px-4'>
                                <label className='text-sm' htmlFor="name">YOUR NAME</label>
                                <input value={name} onChange={(e) => setName(e.target.value)} className='w-full bg-[hsla(0,0%,100%,.05)] border border-[hsla(0,0%,100%,.15)] px-[0.75rem] py-[0.575rem] rounded-lg focus:outline-none' type="text" name="name" placeholder='Name *' />
                            </div>
                            <div className='flex flex-col items-start gap-2 w-full px-4'>
                                <label className='text-sm' htmlFor="name">YOUR EMAIL</label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} className='w-full bg-[hsla(0,0%,100%,.05)] border border-[hsla(0,0%,100%,.15)] px-[0.75rem] py-[0.575rem] rounded-lg focus:outline-none' type="text" name="name" placeholder='Email *' />
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='flex flex-col items-start gap-2 w-full px-4'>
                                <label className='text-sm' htmlFor="name">SUBJECT</label>
                                <input value={subject} onChange={(e) => setSubject(e.target.value)} className='w-full bg-[hsla(0,0%,100%,.05)] border border-[hsla(0,0%,100%,.15)] px-[0.75rem] py-[0.575rem] rounded-lg focus:outline-none' type="text" name="name" placeholder='Subject *' />
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='flex flex-col items-start gap-2 w-full px-4'>
                                <label className='text-sm' htmlFor="name">YOUR MESSAGE</label>
                                <textarea value={message} onChange={(e) => setMessage(e.target.value)} className='w-full bg-[hsla(0,0%,100%,.05)] border border-[hsla(0,0%,100%,.15)] px-[0.75rem] py-[0.575rem] rounded-lg focus:outline-none' type="" name="name" placeholder='Your message *' rows={4} ></textarea>
                            </div>
                        </div>
                        <div className='w-full px-6'>
                            <button type='submit' className='w-full text-lg py-2.5 bg-[#0d6efd] rounded-full cursor-pointer hover:bg-[#040c16] hover:border-white border-2 border-[#0d6efd] transition-all duration-[.35s] ease-out'>
                                SEND MESSAGE
                            </button>
                        </div>
                    </div>

                    <div className='lg:w-[45%] w-full !lg:p-12 lg:px-14 px-5 pb-12'>
                        <div className='w-full lg:flex hidden rounded-2xl overflow-hidden box-border -mt-[45%]'>
                            <img className='h-full w-full' src={profile} alt="" />
                        </div>
                        <div id='contactAnimation' className='flex flex-col lg:items-start gap-4 lowercase lg:mt-10'>
                            <div className='flex flex-col gap-1.5 items-start'>
                                <h5 className='text-gray-200'>
                                    Write an e-mail
                                </h5>
                                <h3 className='text-2xl font-bold'>
                                    piyush.mahoree@gmail.com
                                </h3>
                            </div>
                            <div className='flex flex-col gap-1.5 items-start'>
                                <h5 className='text-gray-200'>
                                    Make a call
                                </h5>
                                <h3 className='text-2xl font-bold'>
                                    +91 913 148 3566
                                </h3>
                            </div>
                        </div>
                        <div id='logoAnimation' className='flex gap-2 lg:gap-4 mt-10'>
                            <a href="https://github.com/PiyushMahore" className='w-11 hover:scale-110 duration-200 ease-in'>
                                <img className='bg-[#fff] rounded-full border-2 border-[#fff]' src={github} />
                            </a>
                            <a href="https://x.com/Piyush_Mahore_" className='w-11 hover:scale-110 duration-200 ease-in'>
                                <img className='bg-[#fff] rounded-full border-2 border-[#fff]' src={x} />
                            </a>
                            <a href="https://www.linkedin.com/in/piyush-mahore-51602a2b1/" className='w-11 hover:scale-110 duration-200 ease-in'>
                                <img className='bg-[#fff] rounded-full border-2 border-[#fff]' src={linkedin} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Contact