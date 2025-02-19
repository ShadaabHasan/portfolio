import React from 'react'

const Home = () => {
  return (
    <>
        <div className="flex flex-col" id="home">
       <div className="main-section">
            <h1 className="mt-44 flex font-bold text-6xl ">{"Hi, I'm {Shadaab Hasan}"}</h1>
            <p className="mt-5 text-lg md:text-xl lg:text-xl text-muted-foreground max-w-3xl">A passionate and aspiring Data Scientist</p>
            <p className='mt-4 grey'>Check out my work or connect with me:</p>
            <div>
                <a href="/#featuredproj" className="btn btn-primary mt-2">Projects</a>
                <a href="/Contact" className="btn btn-secondary">Contact Me</a>
            </div>
            <div className='mt-32'>
            <span className="flex justify-center">scroll down / use arrow</span>
            <a href='/#Aboutme1'>
                <div className='flex justify-center py-4  '>
                  <svg width="50" height="50"  viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                      <path fillRule="evenodd" clipRule="evenodd" d="M11.1464 6.85355C11.3417 7.04882 11.6583 7.04882 11.8536 6.85355C12.0488 6.65829 12.0488 6.34171 11.8536 6.14645L7.85355 2.14645C7.65829 1.95118 7.34171 1.95118 7.14645 2.14645L3.14645 6.14645C2.95118 6.34171 2.95118 6.65829 3.14645 6.85355C3.34171 7.04882 3.65829 7.04882 3.85355 6.85355L7.5 3.20711L11.1464 6.85355ZM11.1464 12.8536C11.3417 13.0488 11.6583 13.0488 11.8536 12.8536C12.0488 12.6583 12.0488 12.3417 11.8536 12.1464L7.85355 8.14645C7.65829 7.95118 7.34171 7.95118 7.14645 8.14645L3.14645 12.1464C2.95118 12.3417 2.95118 12.6583 3.14645 12.8536C3.34171 13.0488 3.65829 13.0488 3.85355 12.8536L7.5 9.20711L11.1464 12.8536Z" fill="white"></path> 
                    </g>
                  </svg>                      
                </div>
              </a>
              </div>
      </div>
    </div>
    </>
  )
}

export default Home
