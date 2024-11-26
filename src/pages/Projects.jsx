import React, { useState, useRef, useEffect } from 'react'
import { GoArrowRight } from "react-icons/go";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import bookStore from "../../public/Book Store.png"
import dashboard from "../../public/Dashboard.png"
import eCommerce from "../../public/E-Commerce.png"
import expenseTracker from "../../public/Expense Tracker.png"
import uptimeMonitor from "../../public/Uptime Monitor.png"
import weatherApp from "../../public/Weather App.png"

function Projects() {
    const sliderRef = useRef();
    const [dotMapping, setDotMapping] = useState([0.5, 1.5, 2.5, 3.5, 4.5, 5.5]);
    const [initialSlide, setInitialSlide] = useState()

    const [projects, setProjects] = useState([
        {
            _id: 1,
            img: bookStore,
            title: "BOOK STORE",
            techStacks: "FIREBASE, REACT.JS, TAILWIND CSS",
            gitHubLink: "https://github.com/PiyushMahore/Book-Store",
            liveLink: "https://exclusive-bookstore.netlify.app/"
        }, {
            _id: 2,
            img: uptimeMonitor,
            title: "UPTIME MONITOR",
            techStacks: "NODE.JS, EXPRESS.JS, REACT.JS, TAILWIND CSS",
            gitHubLink: "https://github.com/PiyushMahore/Website-Uptime-Monitor",
            liveLink: "https://github.com/PiyushMahore/Website-Uptime-Monitor"
        }, {
            _id: 3,
            img: eCommerce,
            title: "E-COMMMERCE",
            techStacks: "REACT.JS, TAILWIND CSS",
            gitHubLink: "https://github.com/PiyushMahore/Ecommerce",
            liveLink: "https://exclusive-shopzee-ecommerce.netlify.app/"
        }, {
            _id: 4,
            img: weatherApp,
            title: "WEATHER APP",
            techStacks: "HTML, CSS, JAVASCRIPT",
            gitHubLink: "https://github.com/PiyushMahore/Weather-App",
            liveLink: "https://github.com/PiyushMahore/Weather-App"
        }, {
            _id: 5,
            img: expenseTracker,
            title: "EXPENSE TRACKER",
            techStacks: "REACT.JS, TAILWIND CSS",
            gitHubLink: "https://github.com/PiyushMahore/Expense-tracker",
            liveLink: "https://expens-tracke.netlify.app"
        }, {
            _id: 6,
            img: dashboard,
            title: "DASHBOARD",
            techStacks: "REACT.JS, TAILWIND CSS",
            gitHubLink: "https://github.com/PiyushMahore/Dashboard",
            liveLink: "https://github.com/PiyushMahore/Dashboard"
        },
    ])

    useEffect(() => {
        const updateInitialSlide = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth <= 1419 && screenWidth > 1230) {
                setInitialSlide(1);
            } else if (screenWidth <= 1230 && screenWidth > 1010) {
                setInitialSlide(0.5)
            } else if (screenWidth <= 1010 && screenWidth > 810) {
                setInitialSlide(1)
            } else if (screenWidth <= 810 && screenWidth > 610) {
                setInitialSlide(0.5)
            } else if (screenWidth <= 610 && screenWidth > 404) {
                setInitialSlide(1)
            } else if (screenWidth < 404) {
                setInitialSlide(0.5)
            } else {
                setInitialSlide(0.5); // Example for desktop
            }
        };

        updateInitialSlide();
        window.addEventListener("resize", updateInitialSlide);

        return () => {
            window.removeEventListener("resize", updateInitialSlide);
        };
    }, []);

    const settings = {
        infinite: true,
        speed: 800,
        slidesToShow: 3.5,
        slidesToScroll: 1,
        initialSlide: initialSlide,
        arrows: false,
        responsive: [
            {
                breakpoint: 1419,
                settings: {
                    infinite: true,
                    speed: 800,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 1230,
                settings: {
                    infinite: true,
                    speed: 800,
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 1010,
                settings: {
                    infinite: true,
                    speed: 800,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 810,
                settings: {
                    infinite: true,
                    speed: 800,
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 611,
                settings: {
                    infinite: true,
                    speed: 800,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 404,
                settings: {
                    infinite: true,
                    speed: 800,
                    slidesToShow: 0.5,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    };

    const onserver = new IntersectionObserver((entries) => {
        entries.forEach((entrie) => {
            entrie.target.classList.add('projectAnimation')
        })
    })

    useEffect(() => {
        const elements = document.querySelectorAll('.projects')
        elements.forEach((element) => {
            onserver.observe(element)
        })
    }, [])

    return (
        <div className='projects min-h-screen flex flex-col justify-center items-start gap-4 py-16'>
            <div className='px-3 py-1 bg-[rgba(7,_136,_255,_.2)] rounded uppercase text-xl'>
                MY WORK
            </div>
            <h1 className='font-bold text-3xl md:text-4xl'>
                RECENT PROJECT
            </h1>

            <div className='w-screen projects'>
                <Slider {...settings} ref={sliderRef}>
                    {/* Card */}
                    {
                        projects.map((project) => (
                            <div key={project._id} className='mt-7'>
                                <div className='h-[360px] w-[400px] bg-[#fff] p-3.5 rounded-xl overflow-hidden'>
                                    <div className='overflow-hidden rounded w-full h-[83%]'>
                                        <div className='w-full h-full overflow-hidden relative transform transition-transform duration-500 hover:scale-105'>
                                            <img className='w-full h-full bg-center bg-cover' src={project.img} alt="" />
                                            <button className='absolute hovereffect hover:bg-[rgba(0,_0,_0,_.5)] inset-0 opacity-0 hover:opacity-100'>
                                                <span className='px-3 py-1.5 bg-[#fff] text-[#040c16] rounded-md'>
                                                    <a href={project.liveLink}>
                                                        LIVE
                                                    </a>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='mt-3 flex items-center justify-between'>
                                        <div className='flex flex-col items-start gap-1'>
                                            <h3 className='text-[#040c16]'>
                                                {project.title}
                                            </h3>
                                            <h6 className='text-[#707476] text-start text-[10px] md:text-xs'>
                                                {project.techStacks}
                                            </h6>
                                        </div>
                                        <div className='bg-[#0788ff] rounded-full p-2 border-2 border-[#040c16] hover:bg-[#040c16] transition-all ease-in-out duration-300 cursor-pointer'>
                                            <a href={project.gitHubLink}>
                                                <GoArrowRight size={25} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div >
    )
}

export default Projects
