import React from 'react'

const navbar = () => {
  return (
    <>
      <nav className="fixed top-0 w-full backdrop-blur z-50 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <a className='text-xl font-bold' href='/'>Shadaab Hasan | Portfolio </a>
              <div className="hidden md:flex items-center space-x-4">
                <a className="" href="#home">Home</a>
                <span className="">|</span>
                <a className="" href="#Aboutme1">About</a>
                <span className="">|</span>
                <a className="" href="#featuredproj">Projects</a>
                <span className="">|</span>
                <a className="" href="/contact/">Contact</a>
                {/* <span className="">|</span> */}
                {/* <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-9 w-4" type="button" aria-haspopup="menu" aria-expanded="false" data-state="closed">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0">
                              <circle cx="12" cy="12" r="4"></circle>
                              <path d="M12 2v2"></path>
                              <path d="M12 20v2"></path>
                              <path d="m4.93 4.93 1.41 1.41"></path>
                              <path d="m17.66 17.66 1.41 1.41"></path>
                              <path d="M2 12h2"></path>
                              <path d="M20 12h2"></path>
                              <path d="m6.34 17.66-1.41 1.41"></path>
                              <path d="m19.07 4.93-1.41 1.41"></path>
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100">
                              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                          </svg>
                          <span className="sr-only">Toggle theme</span>
                      </button> */}
              </div>
              {/* <button className="md:hidden p-2" aria-label="Toggle menu">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
                          <line x1="4" x2="20" y1="12" y2="12"></line>
                          <line x1="4" x2="20" y1="6" y2="6"></line>
                          <line x1="4" x2="20" y1="18" y2="18"></line>
                      </svg>
                  </button> */}
          {/* </div> */}
          </div>
        </div>

        {/* mobile menu */}
        
        
      </nav>
    </>
  )
}

export default navbar
