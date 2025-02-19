import React from 'react'
import { useRouter } from 'next/navigation';


const navbar = () => {
  const router = useRouter(); // Initialize router

  const goToHome = () => {
    router.push('/'); // Force navigation to homepage
  };

  return (
    <>
      <nav className="fixed top-0 w-full backdrop-blur z-50 border-b border-border text-white">
        <div className="container mx-auto px-14">
          <div className="flex h-16 items-center justify-between">
            <a className='text-xl font-bold' href='/' onClick={goToHome}>Shadaab Hasan | Portfolio </a>
              <div className="hidden md:flex items-center space-x-4">
                <a className="" href="/#home">{"{Home}"}</a>
                {/* <span className="">|</span> */}
                <a className="" href="/#Aboutme1">{"{About}"}</a>
                {/* <span className="">|</span> */}
                <a className="" href="/#featuredproj">{"{Projects}"}</a>
                {/* <span className="">|</span> */}
                <a className='' href='/Contact'>{"{Contact}"}</a>
              </div>
          </div>
        </div>

        {/* mobile menu */}
        
        
      </nav>
    </>
  )
}

export default navbar
