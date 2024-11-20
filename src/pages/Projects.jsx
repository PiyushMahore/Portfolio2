import React from 'react'
import { GoArrowRight } from "react-icons/go";

function Projects() {
    return (
        <div className='projects min-h-screen flex flex-col justify-center items-start gap-4'>
            <div className='px-4 py-1.5 bg-[rgba(7,_136,_255,_.2)] rounded uppercase text-3xl'>
                skills
            </div>
            <h1 className='font-bold text-4xl'>
                RECENT PROJECT
            </h1>
            <div className='mt-7'>
                <div className='h-fit w-[400px] bg-[#fff] p-3.5 rounded-xl overflow-hidden'>
                    <div className='rounded overflow-hidden'>
                        <img className='bg-cover bg-center bg-no-repeat hover:scale-105 transition-all ease-in duration-300' src="https://janna-react.vercel.app/images/popup-project-1.jpg" alt="" />
                    </div>
                    <div className='mt-3 flex items-center justify-between'>
                        <div className='flex flex-col items-start gap-1'>
                            <h3 className='text-[#040c16]'>
                                Website Design
                            </h3>
                            <h6 className='text-[#707476]'>
                                Web Design, App Design
                            </h6>
                        </div>
                        <div className='bg-[#0788ff] rounded-full p-2 border-2 border-[#040c16] hover:bg-[#040c16] transition-all ease-in-out duration-300'>
                            <GoArrowRight size={25} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects