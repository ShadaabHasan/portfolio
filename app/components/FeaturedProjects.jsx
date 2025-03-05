import Link from 'next/link'
import React from 'react'

const FeaturedProjects = () => {
  return (
    <>
      <section className="padding-top-featuredproj" id='featuredproj'>
                    <div className="container mx-auto">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold">{"{Featured Projects}"}</h2>
                            <p className="mt-4 text-lg text-muted-foreground grey">A showcase of my recent projects, demonstrating my skills in AI, machine learning, and more.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 p-5 mx-10">

                            {/* project 1 */}

                            <div className="h-full">
                                <div className="bg-card rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                                    <div className="relative">
                                        <img alt="Portfolio Website" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform hover:scale-105 duration-300" src='/projects/portfolio.jpg'/>
                                        
                                    </div>

                                    <div className="p-6 space-y-4">
                                        <div>
                                            <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
                                            {/* <div className="inline-block rounded-full bg-primary/10 px-2 py-1 text-xs text-primary mb-2">Featured Project</div> */}
                                            <p className="text-muted-foreground">A modern portfolio website built with Next.js to showcase projects, skills, and experience.</p>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">Next.js</span>
                                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">React</span>
                                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">TypeScript</span>
                                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">Tailwind CSS</span>
                                        </div>
                                        <div className="flex gap-4 pt-2">
                                            <a target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors border border-input h-9 px-4 py-2" href="https://github.com/ShadaabHasan/portfolio">GitHub</a>
                                            <a target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-9 px-4 py-2" href="">Live Demo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* project 2 */}
                            <div className="h-full">
                                <div className="bg-card rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                                    <div className="relative">
                                        <img alt="Skin-cancer-detection-system" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform hover:scale-105 duration-300" src='/projects/skin-cancer-detection-system-image.jpeg'/>
                                    </div>
                                    <div className="p-6 space-y-4">
                                        <div>
                                            <h3 className="text-xl font-semibold mb-2">Skin Cancer Detection System</h3>
                                            {/* <div className="inline-block rounded-full bg-primary/10 px-2 py-1 text-xs text-primary mb-2">Featured Project</div> */}
                                            <p className="text-muted-foreground">An ML project for skin cancer detection using image analysis and feature extraction.</p>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">Python</span>
                                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">Artificial Intelligence</span>
                                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">Machine Learning</span>
                                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">CNN</span>
                                            {/* <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">CNN</span> */}
                                        </div>
                                        <div className="flex gap-4 pt-2">
                                            <a target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2" href="https://github.com/ShadaabHasan/Skin-cancer-recognition-system">GitHub</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* project 3 */}
                            <div className="h-full" >
                                <div className="bg-card rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                                    <div className="relative">
                                        <img alt="Startup-sage" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform hover:scale-105 duration-300" src="/projects/startup-sage-image.jpeg"/>
                                    </div>
                                    <div className="p-6 space-y-4">
                                        <div>
                                            <h3 className="text-xl font-semibold mb-2">Startup Sage</h3>
                                            {/* <div className="inline-block rounded-full bg-primary/10 px-2 py-1 text-xs text-primary mb-2">Featured Project</div> */}
                                            <p className="text-muted-foreground">An all-in-one app designed to empower startups and drive their growth and success.</p>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">Python</span>
                                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">Flutter</span>
                                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">TensorFlow</span>
                                            {/* <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">Firebase</span> */}
                                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">Flask</span>
                                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">Machine Learning</span>
                                        </div>
                                        <div className="flex gap-4 pt-2">
                                            <a target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2" href="https://github.com/MustafaAkolawala/Accenture-DedSec">GitHub</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 text-center padding-top-portfolio-button">
                            <Link to={"/AllProjects"} className="inline-flex h-12 items-center justify-center rounded-lg border border-input bg-background px-8 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors" href='/AllProjects'>View All Projects</Link>
                        </div>
                    </div>
                </section> 
    </>
  )
}

export default FeaturedProjects
