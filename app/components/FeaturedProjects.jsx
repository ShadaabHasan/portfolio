import React from 'react'

const FeaturedProjects = () => {
  return (
    <div>
      <section className="py-20">
                    <div className="container mx-auto">
                        <div className="max-w-3xl mx-auto text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Projects</h2>
                            <p className="mt-4 text-lg text-muted-foreground">A selection of my recent work in cloud architecture and full-stack development</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                            <div className="h-full">
                                <div className="bg-card rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                                    <div className="relative h-48">
                                        <img alt="Portfolio Website" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform hover:scale-105 duration-300" src="/projects/portfolio.png"/>
                                    </div>
                                    <div className="p-6 space-y-4">
                                        <div>
                                            <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
                                            <div className="inline-block rounded-full bg-primary/10 px-2 py-1 text-xs text-primary mb-2">Featured Project</div>
                                            <p className="text-muted-foreground">A modern portfolio website built with Next.js and AWS services.</p>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">Next.js</span>
                                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">React</span>
                                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">TypeScript</span>
                                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">Tailwind CSS</span>
                                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">AWS</span>
                                        </div>
                                        <div className="flex gap-4 pt-2">
                                            <a target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2" href="https://github.com/bjornmelin/bjornmelin-platform-io">GitHub</a>
                                            <a target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2" href="https://bjornmelin.io">Live Demo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-full">
                                <div className="bg-card rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                                    <div className="relative h-48">
                                        <img alt="AIScout" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform hover:scale-105 duration-300" src="/projects/ai-scout.png"/>
                                    </div>
                                    <div className="p-6 space-y-4">
                                        <div>
                                            <h3 className="text-xl font-semibold mb-2">AIScout</h3>
                                            <div className="inline-block rounded-full bg-primary/10 px-2 py-1 text-xs text-primary mb-2">Featured Project</div>
                                            <p className="text-muted-foreground">Real-time AI/ML content aggregator and discovery platform. Automatically curates cutting-edge research papers, repositories, articles, and discussions about artificial intelligence, machine learning, and LLMs. Built with React, Python, and AWS.</p>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">React</span>
                                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">Python</span>
                                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">AWS</span>
                                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">Real-Time</span>
                                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">AI</span>
                                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">ML</span>
                                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">Technology</span>
                                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">AI-Research</span>
                                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">Content-Discovery</span>
                                        </div>
                                        <div className="flex gap-4 pt-2">
                                            <a target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2" href="https://github.com/BjornMelin/aiscout">GitHub</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-full" >
                                <div className="bg-card rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                                    <div className="relative h-48">
                                        <img alt="PDFusion" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform hover:scale-105 duration-300" src="/projects/pdfusion.png"/>
                                    </div>
                                    <div className="p-6 space-y-4">
                                        <div>
                                            <h3 className="text-xl font-semibold mb-2">PDFusion</h3>
                                            <div className="inline-block rounded-full bg-primary/10 px-2 py-1 text-xs text-primary mb-2">Featured Project</div>
                                            <p className="text-muted-foreground">A lightweight Python utility for effortlessly merging multiple PDF files into a single document.</p>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">Python</span>
                                            {/* <!-- <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">CLI</span> --> */}
                                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">PDF</span>
                                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">Automation</span>
                                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">Utilities</span>
                                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">Python-Library</span>
                                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">File-Management</span>
                                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">Command-Line-Tool</span>
                                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">Document-Management</span>
                                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">Batch-Processing</span>
                                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">Pypdf2</span>
                                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">PDF-Manipulation</span>
                                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">PDF-Merger</span>
                                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">Document-Processing</span>
                                            <span className="inline-flex items-center rounded-full font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 text-xs px-2 py-1">PDF-Tools</span>
                                        </div>
                                        <div className="flex gap-4 pt-2">
                                            <a target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2" href="https://github.com/BjornMelin/pdfusion">GitHub</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 text-center">
                            <a className="inline-flex h-12 items-center justify-center rounded-lg border border-input bg-background px-8 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors" href="/projects/">View All Projects</a>
                        </div>
                    </div>
                </section> 
    </div>
  )
}

export default FeaturedProjects
