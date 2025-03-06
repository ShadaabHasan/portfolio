import React from 'react'
import { useRouter } from 'next/navigation';
import { useState } from "react";
import {motion, AnimatePresence} from "framer-motion"


const navbar = () => {
  const router = useRouter(); // Initialize router
  const [isOpen, setIsOpen] = useState(false);

  const goToHome = () => {
    router.push('/'); // Force navigation to homepage
  };


  return (
    <>
      <nav className="fixed top-0 w-full max-w-full backdrop-blur z-50 border-b border-border text-white">
        <div className="container mx-auto px-2 md:px-14">
          <div className="flex h-16 items-center justify-between">
            <a className='text-lg font-bold sm:text-lg md:text-xl lg:text-xl' href='/' onClick={goToHome}>Shadaab Hasan | Portfolio </a>
              <div className="hidden md:flex items-center space-x-6">
                <a className="hover:text-gray-300" href="/#home">{"Home"}</a>
                <span className="">|</span>
                <a className="hover:text-gray-300" href="/AboutMe">{"About"}</a>
                <span className="">|</span>
                <a className="hover:text-gray-300" href="/AllProjects">{"Projects"}</a>
                <span className="">|</span>
                <a className="hover:text-gray-300" href='/Contact'>{"Contact"}</a>
              </div>
               {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-2xl focus:outline-none mr-4" onClick={() => setIsOpen(!isOpen)}>
          <motion.div initial={false} animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.2, ease: "easeInOut" }}>
          {isOpen ? "✖" : "☰"}
          </motion.div>
        </button>
          </div>
         
        </div>
        </nav>

        

         {/* Mobile Menu */}
         <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-[rgba(56,56,56,0.75)] backdrop-blur-lg flex flex-col justify-center text-white text-2xl z-50">
            <div className='flex flex-col space-y-8 items-start mx-10'>  
            <a href="/#home" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</a>
            <a href="/AboutMe" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>About</a>
            <a href="/AllProjects" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="/Contact" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Contact</a>
            </div>
            {/* Close Button inside Menu */}
            <button className="absolute top-0 right-6 mt-4 text-white text-3xl" onClick={() => setIsOpen(false)}>
            <motion.div initial={false} animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.4, ease: "easeInOut" }}>
              {isOpen ? "✖" : "☰"}
            </motion.div>
              
            </button>
          </motion.div>
        )}
      </AnimatePresence>
        
    </>
  )
}

export default navbar
