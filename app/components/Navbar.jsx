import React from 'react'

const navbar = () => {
  return (
    <>
      <div className="relative min-h-screen flex flex-col">
        <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-border">
          <div class="container mx-auto px-4">
          <div class="flex h-16 items-center justify-between">
              <a className='text-xl font-bold' href='/'>Shadaab Hasan | Portfolio </a>
              <a className="text-foreground/60 hover:text-foreground" href="/">Home</a>
              <a className="text-foreground/60 hover:text-foreground" href="/about/">About</a>
              <a className="text-foreground/60 hover:text-foreground" href="/projects/">Projects</a>
              <a className="text-foreground/60 hover:text-foreground" href="/contact/">Contact</a>
              </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default navbar
