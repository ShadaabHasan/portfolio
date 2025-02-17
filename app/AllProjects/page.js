'use client'

import React from 'react'
import Navbar from "../components/Navbar";

const AllProject = () => {
  return (
    <>
    <Navbar/>
      <div className='min-h-screen bg-gradient-to-br from-slate-900 to-rose-500 text-white'>
      <div className="container mx-auto padding-top-project">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold">All Projects</h2>
                            <p className="mt-4 text-lg text-muted-foreground grey">A showcase of my recent projects, demonstrating my skills in AI, machine learning, and more.</p>
                        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-5 mt-6 ">
                              <div className="h-full">
                                  <div className="bg-card rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                                      <div className="relative">
                                          <img alt="Portfolio Website" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform hover:scale-105 duration-300" src='/projects/portfolio.jpg'/>
                                          
                                      </div>
                                      <div className="p-6 space-y-4">
                                          <div>
                                              <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
                                              {/* <div className="inline-block rounded-full bg-primary/10 px-2 py-1 text-xs text-primary mb-2">Featured Project</div> */}
                                              <p className="text-muted-foreground">A modern and dynamic portfolio website built with Next.js, featuring a sleek UI, fast performance, and seamless navigation to showcase projects, skills, and experience effectively.</p>
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
                              <div className="h-full">
                                  <div className="bg-card rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                                      <div className="relative">
                                          <img alt="Skin-cancer-detection-system" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform hover:scale-105 duration-300" src='/projects/skin-cancer-detection-system-image.jpeg'/>
                                      </div>
                                      <div className="p-6 space-y-4">
                                          <div>
                                              <h3 className="text-xl font-semibold mb-2">Skin Cancer Detection System</h3>
                                              {/* <div className="inline-block rounded-full bg-primary/10 px-2 py-1 text-xs text-primary mb-2">Featured Project</div> */}
                                              <p className="text-muted-foreground">AA computer vision project for early skin cancer detection analyzes skin lesion images through acquisition, preprocessing, and feature extraction (color, texture, shape). Using ML/DL algorithms like CNNs, the model is trained on labeled datasets, validated, and tested for accuracy and generalization to ensure reliable performance.</p>
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
                              <div className="h-full" >
                                  <div className="bg-card rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                                      <div className="relative">
                                          <img alt="Startup-sage" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform hover:scale-105 duration-300" src="/projects/startup-sage-image.jpeg"/>
                                      </div>
                                      <div className="p-6 space-y-4">
                                          <div>
                                              <h3 className="text-xl font-semibold mb-2">Startup Sage</h3>
                                              {/* <div className="inline-block rounded-full bg-primary/10 px-2 py-1 text-xs text-primary mb-2">Featured Project</div> */}
                                              <p className="text-muted-foreground">An all-encompassing companion for startup success. This application was designed and developed with a singular goal in mind: to empower startups and businesses on their journey to growth and prosperity.</p>
                                          </div>
                                          <div className="flex flex-wrap gap-2">
                                              <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">Python</span>
                                              <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">Flutter</span>
                                              <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">TensorFlow</span>
                                              <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">Firebase</span>
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
        </div>
        </div>
    </>
  )
}

export default AllProject
