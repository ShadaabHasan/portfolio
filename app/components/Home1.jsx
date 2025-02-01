import React from 'react'

const Home = () => {
  return (
    <>
        <div className="relative min-h-screen flex flex-col">
       <div className="main-section bg-black">
            <h1 className="mt-0 flex font-bold text-5xl ">Hi, I'm Shadaab Hasan</h1>
            <p className="mt-6 text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl">A passionate and aspiring Data Scientist</p>
            <p className='mt-2'>Check out my work or connect with me:</p>
            <div>
                <a href="#projects" className="btn btn-primary mt-2">Projects</a>
                <a href="#contact" className="btn btn-secondary">Contact Me</a>
            </div>
      </div> 
    </div>
    </>
  )
}

export default Home
