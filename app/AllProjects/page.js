'use client'

import React from 'react'
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import { useEffect, useState } from "react";


const AllProject = () => {
    
    const [isBottom, setIsBottom] = useState(false);
    
      useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.innerHeight + window.scrollY;
          const pageHeight = document.documentElement.scrollHeight;
          
          // Check if the user has reached the bottom
          setIsBottom(scrollPosition >= pageHeight - 400);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);  }, []);
  return (
    <>
    <Navbar/>
    <div className='red-footer'>
    <div className={`transition-all duration-300 ${isBottom ? "m-5" : "m-0"}`}>
    
    <div className='min-h-screen bg-gradient-to-br from-slate-900 to-rose-800 text-white pb-20 rounded-b-3xl'>
        <div className="container mx-auto padding-top-project">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold">All Projects</h2>
                <p className="mt-4 text-lg text-muted-foreground grey">A showcase of my recent projects, demonstrating my skills in AI, machine learning, and more.</p>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-20 p-5 mt-6 mx-2 md:mx-20">

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
                                <div className="flex flex-wrap gap-2 w-full">
                                <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">HTML</span>
                                <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">Tailwind CSS</span>
                            </div></div>
                            <div className="flex gap-4 pt-2">
                                <a target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors border border-input h-9 px-4 py-2" href="https://github.com/ShadaabHasan/portfolio">GitHub</a>
                                <a target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-9 px-4 py-2" href="https://shadaabhasan.vercel.app/">Live Demo</a>
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
                                    <p className="text-muted-foreground">An ML project for skin cancer detection using image analysis and feature extraction. </p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">Python</span>
                                <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">Artificial Intelligence</span>
                                <div className="flex flex-wrap gap-2 w-full">
                                <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">Machine Learning</span>
                                <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">CNN</span>
                                {/* <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">CNN</span> */}
                            </div> </div>
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
                        <div className="p-6 space-y-4 flex-col flex-grow">
                            <div className='flex-grow'>
                                <h3 className="text-xl font-semibold mb-2">Startup Sage</h3>
                                    {/* <div className="inline-block rounded-full bg-primary/10 px-2 py-1 text-xs text-primary mb-2">Featured Project</div> */}
                                    <p className="text-muted-foreground">An all-in-one app designed to empower startups and drive their growth and success.</p>
                            </div>
                            <div className="flex flex-wrap gap-2 ">
                                <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">Python</span>
                                <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">Flutter</span>
                                <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">TensorFlow</span>
                                {/* <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">Firebase</span> */}
                                <div className="flex flex-wrap gap-2 w-full">
                                <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">Flask</span>
                                <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">Machine Learning</span>
                            </div></div>
                            <div className="flex gap-4 pt-2 mt-auto">
                                <a target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2" href="https://github.com/MustafaAkolawala/Accenture-DedSec">GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* project 4 */}
                <div className="h-full" >
                <div className="bg-card rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                    <div className="relative">
                        <img alt="Hotel Booking Analysis" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform hover:scale-105 duration-300" src='/projects/hotel-booking-1.jpg'/>
                    </div>
                    <div className="p-6 space-y-4">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Hotel Booking Analysis</h3>
                            {/* <div className="inline-block rounded-full bg-primary/10 px-2 py-1 text-xs text-primary mb-2">Featured Project</div> */}
                            <p className="text-muted-foreground">A data-driven project analyzing hotel booking trends to optimize operations.</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">R</span>
                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">Exploratory Data Analysis</span>
                            <div className="flex flex-wrap gap-2 w-full">
                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">Data Visualization</span>
                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">Machine Learning</span>
                        </div></div>
                        <div className="flex gap-4 pt-2">
                            <a target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors border border-input h-9 px-4 py-2" href="https://github.com/ShadaabHasan/Big-data-hotel-booking-analysis">GitHub</a>
                        </div>
                    </div>
                </div>
                </div>

                {/* project 5 */}
                <div className='h-full'>
                <div className="bg-card rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                    <div className="relative">
                        <img alt="Literature Review" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform hover:scale-105 duration-300" src='/projects/literature-review-1.jpg'/>
                    </div>
                    <div className="p-6 space-y-4">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">SummarAIze</h3>
                            {/* <div className="inline-block rounded-full bg-primary/10 px-2 py-1 text-xs text-primary mb-2">Featured Project</div> */}
                            <p className="text-muted-foreground">An NLP based review and summarization tool for research papers and more.</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">Natural Language Processing</span>
                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">Python</span>
                            <div className="flex flex-wrap gap-2 w-full">
                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">BART</span>
                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">TensorFlow</span>
                            </div>                        
                        </div>
                        <div className="flex gap-4 pt-2">
                            <a target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors border border-input h-9 px-4 py-2" href="https://github.com/ShadaabHasan/SummarAIze">GitHub</a>
                        </div>
                    </div>
                </div>
                </div>
                {/* project 6 */}
                <div className='h-full'>
                <div className="bg-card rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                    <div className="relative">
                        <img alt="F1 Data z" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform hover:scale-105 duration-300" src='/projects/f1-illustrate.png'/>
                    </div>
                    <div className="p-6 space-y-4">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">F1 Data Visualization</h3>
                            {/* <div className="inline-block rounded-full bg-primary/10 px-2 py-1 text-xs text-primary mb-2">Featured Project</div> */}
                            <p className="text-muted-foreground">Formula 1 race data analysis of driver performance, lap time trends and more.</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">R</span>
                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">Exploratory Data Analysis</span>
                            <div className="flex flex-wrap gap-2 w-full">
                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">Data Visualization</span>
                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">SQL</span>
                        </div></div>
                        <div className="flex gap-4 pt-2">
                            <a target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors border border-input h-9 px-4 py-2" href="https://github.com/ShadaabHasan/F1-Data-z">GitHub</a>
                        </div>
                    </div>
                </div>
                </div>

                {/* project 7 */}
                <div className='h-full'>
                <div className="bg-card rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                    <div className="relative">
                        <img alt="Student Feedback Analysis" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform hover:scale-105 duration-300" src='/projects/student-feedback_re.png'/>
                    </div>
                    <div className="p-6 space-y-4">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Student Feedback Analysis</h3>
                            {/* <div className="inline-block rounded-full bg-primary/10 px-2 py-1 text-xs text-primary mb-2">Featured Project</div> */}
                            <p className="text-muted-foreground">Under Development.</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {/* <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">Next.js</span>
                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">React</span>
                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">TypeScript</span>
                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">Tailwind CSS</span> */}
                        </div>
                        <div className="flex gap-4 pt-2">
                            <a target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors border border-input h-9 px-4 py-2" href="https://github.com/ShadaabHasan/portfolio">GitHub</a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div className='red-footer text-white mt-16'>
        <Footer />
    </div>
    </div>
    </>
  )
}

export default AllProject
