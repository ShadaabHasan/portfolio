'use client'

import React from 'react'
import Navbar from '../components/Navbar'
import { useEffect, useState } from "react";
import Footer from '../components/Footer';
import DownloadResume from './DownloadResume';


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
      <div className='black-footer text-white'>
        <div className={`transition-all duration-300 ${isBottom ? "m-5" : "m-0"}`}>
            <div className='bg-gradient-to-br from-gray-900 to-slate-800 rounded-b-3xl text-white pb-20'>
                <div className="container mx-auto padding-top-project">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
                    </div>
                    <div className='main-section1'>
                        <div className="w-1/2 mt-16 md:mt-32 mx-5 md:mx-28 p-5 rounded-xl hover:shadow-md">
                            <div className="max-w-4xl text-2xl md:text-4xl font-bold text-white leading-relaxed">
                                <p>Hey! I'm Shadaab Hasan.</p>
                            </div>
                            <div className='text-gray-400 text-sm md:text-xl mt-5 w-11/12'>
                                <p>
                                    An aspiring Data Scientist currently pursuing BE Computer Engineering.
                                    I love building AI-driven applications, exploring new technologies, and solving real-world problems
                                    through data and machine learning.
                                </p>
                            </div>
                            <DownloadResume />                            
                        </div>
                        <div className='flex w-1/2 justify-center mt-12 md:mt-28'>
                            <img src="/projects/coding-stuff.gif" alt="Shadaab Hasan GIF" className="w-36 md:w-auto h-40 md:h-80 mt-36 md:mt-0 rounded-3xl"/>
                        </div>
                    </div>

                    {/* section2 */}
                    
                    <div className='main-section1 mt-32'>
                    <div className='flex w-1/2 justify-center'>
                            <img src="/projects/coding-stuff1.gif" alt="Shadaab Hasan GIF" className="w-36 md:w-auto h-40 md:h-80 mt-36 md:mt-5 rounded-3xl"/>
                        </div>
                        <div className="w-1/2 mx-5 md:mx-28">
                        <div className="grid lg:grid-cols-1 gap-8 items-start">
                            <div className="rounded-xl bg-card text-card-foreground lg:col-span-2 p-6 hover:shadow-md transition-shadow py-11">
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
                                    <p className="text-sm text-muted-foreground">2019 - 2021</p><p className="text-sm font-medium text-primary">88.35%</p>
                                    </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-5">
                                
                                    <div>
                                    <h3 className="font-semibold text-lg">CISCE</h3>
                                    <p className="text-muted-foreground text-sm text-gray-400">SVKM’s Chatrabhuj Narsee Memorial School</p>
                                    </div>
                                    <div className="text-right">
                                    <p className="text-sm text-muted-foreground">2009 - 2019</p><p className="text-sm font-medium text-primary">89.45%</p>
                                    </div>
                                    </div>
                            </div>
                            
                            
                        </div>
                        </div>
                    </div>

                    {/* section 3 */}
                    <div className='main-section1 mt-24'>
                    <div className="w-1/2 mx-0 md:mx-20">
                        <div className="grid lg:grid-cols-1 gap-8 items-start">
                            <div className="rounded-xl bg-card mt-12 text-card-foreground lg:col-span-2 p-6 hover:shadow-md transition-shadow py-11">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 rounded-lg bg-primary/10 bg-slate-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap w-6 h-6 text-primary">
                                        <path d="M12 10.4V20M12 10.4C12 8.15979 12 7.03969 11.564 6.18404C11.1805 5.43139 10.5686 4.81947 9.81596 4.43597C8.96031 4 7.84021 4 5.6 4H4.6C4.03995 4 3.75992 4 3.54601 4.10899C3.35785 4.20487 3.20487 4.35785 3.10899 4.54601C3 4.75992 3 5.03995 3 5.6V16.4C3 16.9601 3 17.2401 3.10899 17.454C3.20487 17.6422 3.35785 17.7951 3.54601 17.891C3.75992 18 4.03995 18 4.6 18H7.54668C8.08687 18 8.35696 18 8.61814 18.0466C8.84995 18.0879 9.0761 18.1563 9.29191 18.2506C9.53504 18.3567 9.75977 18.5065 10.2092 18.8062L12 20M12 10.4C12 8.15979 12 7.03969 12.436 6.18404C12.8195 5.43139 13.4314 4.81947 14.184 4.43597C15.0397 4 16.1598 4 18.4 4H19.4C19.9601 4 20.2401 4 20.454 4.10899C20.6422 4.20487 20.7951 4.35785 20.891 4.54601C21 4.75992 21 5.03995 21 5.6V16.4C21 16.9601 21 17.2401 20.891 17.454C20.7951 17.6422 20.6422 17.7951 20.454 17.891C20.2401 18 19.9601 18 19.4 18H16.4533C15.9131 18 15.643 18 15.3819 18.0466C15.15 18.0879 14.9239 18.1563 14.7081 18.2506C14.465 18.3567 14.2402 18.5065 13.7908 18.8062L12 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        </path> 
                                        </svg>
                                    </div>
                                    <h3 className="inline-flex items-center text-2xl font-semibold ">Publications</h3>
                                </div>
                                <div>
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-5">
                                    <div>
                                        <a href='https://www.jetir.org/view?paper=JETIR2406947'> 
                                    <h3 className="font-semibold text-lg">Skin Cancer Recognition System</h3></a>
                                    <p className="text-muted-foreground text-sm text-gray-400">Journal of Emerging Technologies and Innovative Research</p>
                                    </div>
                                    <div className="text-right">
                                    <p className="text-sm text-muted-foreground">Jun 29, 2024</p>
                                    {/* <p className="text-sm font-medium text-primary">CGPA: 7.77</p> */}
                                    </div>
                                    </div>
                                </div>
                                
                            </div>
                            
                            
                        </div>
                        </div>
                        <div className='flex w-1/2 justify-center ml-8 md:ml-0'>
                            <img src="/projects/coding-stuff5.gif" alt="Shadaab Hasan GIF" className="w-36 md:w-auto h-40 md:h-80 mt-36 md:mt-5 rounded-3xl"/>
                        </div>
                    </div>

                {/* section 4 */}
                <div className='main-section1 mt-24'>
                <div className='flex w-1/2 justify-center'>
                            <img src="/projects/coding-stuff6.gif" alt="Shadaab Hasan GIF" className="w-auto md:w-auto h-60 md:h-80 mt-36 md:mt-10 rounded-3xl"/>
                        </div>
                    <div className="w-1/2 mx-2 mr-14 md:mx-20">
                        <div className="grid lg:grid-cols-1 gap-8 items-start">
                            <div className="rounded-xl bg-card mt-4 text-card-foreground lg:col-span-2 p-6 hover:shadow-md transition-shadow py-11">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 rounded-lg bg-primary/10 bg-slate-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap w-6 h-6 text-primary">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 12L11 14L15 10M12 3L13.9101 4.87147L16.5 4.20577L17.2184 6.78155L19.7942 7.5L19.1285 10.0899L21 12L19.1285 13.9101L19.7942 16.5L17.2184 17.2184L16.5 19.7942L13.9101 19.1285L12 21L10.0899 19.1285L7.5 19.7942L6.78155 17.2184L4.20577 16.5L4.87147 13.9101L3 12L4.87147 10.0899L4.20577 7.5L6.78155 6.78155L7.5 4.20577L10.0899 4.87147L12 3Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g>
                                        </svg>
                                    </div>
                                    <h3 className="inline-flex items-center text-2xl font-semibold ">Certifications</h3>
                                </div>
                                <div>
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-5">
                                    <div>
                                        <a href='https://www.coursera.org/account/accomplishments/certificate/C6TSEDWSJ24X'> 
                                    <h3 className="font-semibold text-lg">Applied Machine Learning in Python</h3></a>
                                    <p className="text-muted-foreground text-sm text-gray-400">University of Michigan</p>
                                    </div>
                                    <div className="text-right">
                                    <p className="text-sm text-muted-foreground">Nov 14, 2022</p>
                                    {/* <p className="text-sm font-medium text-primary">CGPA: 7.77</p> */}
                                    </div>
                                    
                                    </div>

                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-5">
                                    <div>
                                        <a href='https://www.credly.com/badges/1ff729b5-7ab3-4936-a8ed-18c362e89538/linked_in_profile'> 
                                    <h3 className="font-semibold text-lg">AWS Academy Cloud Foundations</h3></a>
                                    <p className="text-muted-foreground text-sm text-gray-400">Amazon Web Services (AWS)</p>
                                    </div>
                                    <div className="text-right">
                                    <p className="text-sm text-muted-foreground">Apr 4, 2024</p>
                                    {/* <p className="text-sm font-medium text-primary">CGPA: 7.77</p> */}
                                    </div>
                                    
                                    </div>

                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-5">
                                    <div>
                                        <a href='https://www.linkedin.com/in/shadaab-hasan-4a9b92271/details/certifications/1725463226053/single-media-viewer/?profileId=ACoAAEKPfUEBMawgeASsNZZZLZBbvvHHuZlIud0'> 
                                    <h3 className="font-semibold text-lg">
                                    AI&ML Workshop</h3></a>
                                    <p className="text-muted-foreground text-sm text-gray-400">Techobytes Technologies</p>
                                    </div>
                                    <div className="text-right">
                                    <p className="text-sm text-muted-foreground">Mar 10, 2024</p>
                                    {/* <p className="text-sm font-medium text-primary">CGPA: 7.77</p> */}
                                    </div>
                                    
                                    </div>

                                </div>
                                
                            </div>
                            
                            
                        </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
        <div className='mt-16'>
        <Footer />

        </div>
      </div>
      
    </>
  )
}

export default page
