import React from 'react'
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <div className=''>
      <footer className="mx-10 md:mx-20 py-5">
                <div className="container py-8 mx-auto">
                    <div className="grid md:grid-cols-6 space-y-9 md:space-y-0">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold">Portfolio</h3>
                            <p className="text-sm text-foreground/60">
                        ©{new Date().getFullYear()} Shadaab Hasan.</p>
                    </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold">Quick Links</h3>
                            <nav className="flex flex-col space-y-2">
                                <a className="text-sm text-foreground/60 hover:text-foreground underline" href="/AboutMe">About</a>
                                <a className="text-sm text-foreground/60 hover:text-foreground underline" href="/AllProjects">Projects</a>
                                <a className="text-sm text-foreground/60 hover:text-foreground underline" href="/Contact">Contact</a>
                            </nav>
                        </div>
                        <SocialLinks />
                    </div>
                </div>
            </footer>

    </div>
  )
}

export default Footer
