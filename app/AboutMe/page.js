'use client'

import React from 'react'
import Navbar from '../components/Navbar'
import { useEffect, useState } from "react";
import Footer from '../components/Footer';


const page = () => {

        const [isBottom, setIsBottom] = useState(false);
        
          useEffect(() => {
            const handleScroll = () => {
              const scrollPosition = window.innerHeight + window.scrollY;
              const pageHeight = document.documentElement.scrollHeight;
              
              // Check if the user has reached the bottom
              setIsBottom(scrollPosition >= pageHeight - 100);
            };
        
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);  }, []);
  return (
    <>
      <Navbar />
      <div className='purple-footer text-white'>
        <div className={`transition-all duration-300 ${isBottom ? "m-5" : "m-0"}`}>
            <div className='bg-gradient-to-br from-gray-900 to-black rounded-b-3xl text-white pb-20'>
                <div className="container mx-auto padding-top-project">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
                    </div>
                    <div className='main-section1'>
                        <div className="w-1/2 mx-20">
                            <div className="mt-36 max-w-4xl text-4xl font-bold text-white leading-relaxed">
                                <p>Hey! I'm Shadaab Hasan.</p>
                            </div>
                            <div className='text-gray-400 text-xl mt-5 w-11/12'>
                                <p>
                                    An aspiring Data Scientist currently pursuing BE Computer Engineering.
                                    I love building AI-driven applications, exploring new technologies, and solving real-world problems
                                    through data and machine learning.
                                </p>
                            </div>                            
                        </div>
                        <div className='flex w-1/2 justify-center mt-28'>
                            <img src="/projects/coding-stuff.gif" alt="Shadaab Hasan GIF" className="w-auto h-80 rounded-3xl"/>
                        </div>
                    </div>

                    {/* section2 */}
                    
                    <div className='main-section1 mt-32'>
                    <div className='flex w-1/2 justify-center'>
                            <img src="/projects/coding-stuff1.gif" alt="Shadaab Hasan GIF" className="w-auto h-80 rounded-3xl"/>
                        </div>
                        <div className="w-1/2 mx-20">
                        <div className="grid lg:grid-cols-1 gap-8 items-start">
                            <div className="rounded-xl bg-card text-card-foreground shadow lg:col-span-2 p-6 hover:shadow-md transition-shadow py-11">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 rounded-lg bg-primary/10 bg-slate-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap w-6 h-6 text-primary">
                                            <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                                            <path d="M22 10v6"></path>
                                            <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                                        </svg>
                                    </div>
                                    <h3 className="inline-flex items-center text-2xl font-semibold ">Education</h3>
                                </div>
                                <div>
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-5">
                                    <div>
                                    <h3 className="font-semibold text-lg">B.E. Computer Engineering</h3>
                                    <p className="text-muted-foreground text-sm text-gray-400">Rizvi College of Engineering</p>
                                    </div>
                                    <div className="text-right">
                                    <p className="text-sm text-muted-foreground">2021 - 2025</p>
                                    <p className="text-sm font-medium text-primary">CGPA: 7.77</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-5">
                                
                                    <div>
                                    <h3 className="font-semibold text-lg">HSC</h3>
                                    <p className="text-muted-foreground text-sm text-gray-400">Mithibai College, Major in IT</p>
                                    </div>
                                    <div className="text-right">
                                    <p className="text-sm text-muted-foreground">2021 - 2025</p><p className="text-sm font-medium text-primary">88.35%</p>
                                    </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-5">
                                
                                    <div>
                                    <h3 className="font-semibold text-lg">CISCE</h3>
                                    <p className="text-muted-foreground text-sm text-gray-400">SVKM’s Chatrabhuj Narsee Memorial School</p>
                                    </div>
                                    <div className="text-right">
                                    <p className="text-sm text-muted-foreground">2021 - 2025</p><p className="text-sm font-medium text-primary">89.45%</p>
                                    </div>
                                    </div>
                            </div>
                            
                            
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
      </div>
      
    </>
  )
}

export default page
