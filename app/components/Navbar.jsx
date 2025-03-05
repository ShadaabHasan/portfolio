import React from 'react'
import { useRouter } from 'next/navigation';
import { useState } from "react";
import {motion} from "framer-motion"


const navbar = () => {
  const router = useRouter(); // Initialize router

  const goToHome = () => {
    router.push('/'); // Force navigation to homepage
  };
  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
      <nav className="fixed top-0 w-full max-w-full backdrop-blur z-50 border-b border-border text-white flex-wrap">
        <div className="container mx-auto px-2 md:px-14">
          <div className="flex flex-wrap h-16 items-center justify-between">
            <a className='text-lg font-bold sm:text-lg md:text-xl lg:text-xl' href='/' onClick={goToHome}>Shadaab Hasan | Portfolio </a>
              <div className="hidden md:flex items-center space-x-4">
                <a className="" href="/#home">{"Home"}</a>
                <span className="">|</span>
                <a className="" href="/AboutMe">{"About"}</a>
                <span className="">|</span>
                <a className="" href="/AllProjects">{"Projects"}</a>
                <span className="">|</span>
                <a className='' href='/Contact'>{"Contact"}</a>
              </div>
               {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-2xl focus:outline-none mr-4" onClick={() => setIsOpen(!isOpen)}>
          <motion.div initial={false} animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.2, ease: "easeInOut" }}>
          {isOpen ? "✖" : "☰"}
          </motion.div>
        </button>
          </div>
         
        </div>

        

         {/* Mobile Menu */}
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }} className="md:hidden flex flex-col items-center space-y-4 py-4">
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 px-5 border-b-transparent">
          <a href="/#home" className="text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</a>
          {/* <span className="">|</span> */}
          <a href="/AboutMe" className="text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>About</a>
          {/* <span className="">|</span> */}
          <a href="/AllProjects" className="text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>Projects</a>
          {/* <span className="">|</span> */}
          <a href="/Contact" className="text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
        </motion.div>
      )}
        
      </nav>
    </>
  )
}

export default navbar
