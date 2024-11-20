import React from 'react'
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import javascript from '../assets/javascript.svg'
import react from '../assets/react.svg'
import tailwind from '../assets/tailwind-css.svg'
import nodejs from '../assets/node-js.svg'
import express from '../assets/express.svg'
import mongodb from '../assets/mongodb.svg'

function Skills() {
    return (
        <div className='skills min-h-screen flex items-center justify-center flex-col pb-5 pt-10 gap-16'>
            <div className='px-4 py-1.5 bg-[rgba(7,_136,_255,_.2)] rounded uppercase text-3xl'>
                skills
            </div>
            <div className='h-full w-full flex flex-col justify-evenly gap-7'>
                <div className='flex flex-row justify-evenly w-full flex-wrap'>
                    <div className='flex items-center gap-4 lg:flex-row flex-col'>
                        <img className='h-28' src={html} alt="" />
                        <h6>HTML</h6>
                    </div>
                    <div className='flex items-center gap-4 lg:flex-row flex-col'>
                        <img className='h-28' src={css} alt="" />
                        <h6>CSS</h6>
                    </div>
                    <div className='flex items-center gap-4 lg:flex-row flex-col'>
                        <img className='h-28' src={javascript} alt="" />
                        <h6>JAVASCRIPT</h6>
                    </div>
                </div>
                <div className='flex flex-row justify-evenly w-full flex-wrap'>
                    <div className='flex items-center gap-4 lg:flex-row flex-col'>
                        <img className='h-28' src={react} alt="" />
                        <h6>REACT.JS</h6>
                    </div>
                    <div className='flex items-center gap-4 lg:flex-row flex-col'>
                        <img className='h-28' src={tailwind} alt="" />
                        <h6>TAILWIND CSS</h6>
                    </div>
                    <div className='flex items-center gap-4 lg:flex-row flex-col'>
                        <img className='h-28' src={nodejs} alt="" />
                        <h6>NODE.JS</h6>
                    </div>
                </div>
                <div className='flex flex-row justify-evenly w-full flex-wrap'>
                    <div className='flex items-center gap-4 lg:flex-row flex-col'>
                        <img className='h-28' src={express} alt="" />
                        <h6>EXPRESS.JS</h6>
                    </div>
                    <div className='flex items-center gap-4 lg:flex-row flex-col'>
                        <img className='h-28' src={mongodb} alt="" />
                        <h6>MONGODB</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
