import React from 'react'

const Home = () => {
  return (
    <>
        <div className="relative flex flex-col" id="home">
       <div className="main-section">
            <h1 className="mt-0 flex font-bold text-5xl ">Hi, I'm Shadaab Hasan</h1>
            <p className="mt-5 text-lg md:text-xl lg:text-xl text-muted-foreground max-w-3xl">A passionate and aspiring Data Scientist</p>
            <p className='mt-4 grey'>Check out my work or connect with me:</p>
            <div>
                <a href="/#featuredproj" className="btn btn-primary mt-2">Projects</a>
                <a href="/Contact" className="btn btn-secondary">Contact Me</a>
            </div>
      </div> 
    </div>
    </>
  )
}

export default Home
