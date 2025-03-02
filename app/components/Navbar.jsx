import React from 'react'
import { useRouter } from 'next/navigation';
import { useState } from "react";


const navbar = () => {
  const router = useRouter(); // Initialize router

  const goToHome = () => {
    router.push('/'); // Force navigation to homepage
  };
  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
      <nav className="fixed top-0 w-full max-w-full backdrop-blur z-50 border-b border-border text-white flex-wrap">
        <div className="container mx-auto px-14">
          <div className="flex flex-wrap h-16 items-center justify-between">
            <a className='text-xl font-bold' href='/' onClick={goToHome}>Shadaab Hasan | Portfolio </a>
              <div className="hidden md:flex items-center space-x-4">
                <a className="" href="/#home">{"Home"}</a>
                <span className="">|</span>
                <a className="" href="/AboutMe">{"About"}</a>
                <span className="">|</span>
                <a className="" href="/AllProjects">{"Projects"}</a>
                <span className="">|</span>
                <a className='' href='/Contact'>{"Contact"}</a>
              </div>
          </div>
          {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white text-2xl focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
        </div>

        

         {/* Mobile Menu */}
        {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4">
          <a href="/#home" className="text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</a>
          <a href="/AboutMe" className="text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>About</a>
          <a href="/AllProjects" className="text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="/Contact" className="text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
        
      </nav>
    </>
  )
}

export default navbar
