import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX - 5, y: event.clientY - 5 });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div
        className="cursor-circle"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
      <div className='w-full bg-custom-gradient px-3 sm:px-[4%] md:px-[5%] lg:px-[6%] xl:px-[7%] 2xl:px-[7%]'>
        <Navbar />
        <Home />
        <About />
      </div>
      <div className='bg-[#0788FF1A] px-3 sm:px-[4%] md:px-[5%] lg:px-[6%] xl:px-[7%] 2xl:px-[7%]'>
        <Skills />
      </div>
      <div className='px-3 sm:px-[4%] md:px-[5%] lg:px-[6%] xl:px-[7%] 2xl:px-[7%]'>
        <Projects />
      </div>
      <div className='px-3 sm:px-[4%] md:px-[5%] lg:px-[1%] xl:px-[7%] 2xl:px-[7%]'>
        <Contact />
      </div>
    </div>
  )
}

export default App
