import React from 'react'

const Aboutme1 = () => {
  return (
    <>
      <main className="flex-grow container mx-auto px-4 pt-16 padding-top-aboutme" id='Aboutme1'>
            <main className="flex flex-col">
                <div className="relative overflow-hidden">
                    <div className="">
                        <div className="absolute right-0 top-0 w-96 h-10"></div>
                        <div className="absolute left-0 bottom-0 w-96 h-10"></div>
                    </div>
                    <div className="container mx-auto">
                        <div className="text-center mb-14 relative">
                            <div className="inline-flex items-center rounded-md px-2.5 py-0.5 text-3xl font-semibold transition-colors mb-4">
                                {"{About Me}"}
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-8">
                                Transforming complex data into useful insights 
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto grey">Computer Engineering student and aspiring Data Scientist building innovative solutions powered by AI/ML and data-driven decision-making.</p>
                        </div>
                        <div className="grid lg:grid-cols-5 gap-8 items-start mb-12 m-10">
                            <div className="rounded-xl border bg-card text-card-foreground shadow lg:col-span-2 p-6 hover:shadow-md transition-shadow py-11">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 rounded-lg bg-primary/10 bg-black">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap w-6 h-6 text-primary">
                                            <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                                            <path d="M22 10v6"></path>
                                            <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                                        </svg>
                                    </div>
                                    <h3 className="inline-flex items-center text-2xl font-semibold ">Background</h3>
                                </div>
                                <p className="inline-flex items-center text-muted-foreground leading-relaxed text-l">As a final-year Computer Engineering student at Rizvi College of Engineering, I am passionate about applying AI and data science to solve real-world problems. My expertise includes creating predictive models, exploring NLP for automating literature reviews, and developing scalable solutions in data science.</p>
                            </div>
                            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-3">
                                <div className="rounded-xl border bg-card text-card-foreground shadow p-6 hover:shadow-md transition-shadow">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-2 rounded-lg bg-purple-500/10 text-purple-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain w-6 h-6">
                                                <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                                                <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
                                                <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
                                                <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
                                                <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
                                                <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
                                                <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
                                                <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
                                                <path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-semibold">AI &amp; Machine Learning</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-purple-500/10 text-purple-500 hover:scale-105 transition-transform">NLP</div>
                                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-purple-500/10 text-purple-500 hover:scale-105 transition-transform">Data Science</div>
                                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-purple-500/10 text-purple-500 hover:scale-105 transition-transform">Machine Learning</div>
                                    </div>
                                </div>
                                <div className="rounded-xl border bg-card text-card-foreground shadow p-6 hover:shadow-md transition-shadow">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-2 rounded-lg bg-green-500/10 text-green-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code w-6 h-6">
                                                <polyline points="16 18 22 12 16 6"></polyline>
                                                <polyline points="8 6 2 12 8 18"></polyline>
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-semibold">Development</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-green-500/10 text-green-500 hover:scale-105 transition-transform">Full-Stack</div>
                                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-green-500/10 text-green-500 hover:scale-105 transition-transform">Django</div>
                                    </div>
                                </div>
                                <div className="rounded-xl border bg-card text-card-foreground shadow p-6 hover:shadow-md transition-shadow">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-terminal w-6 h-6">
                                                <polyline points="4 17 10 11 4 5"></polyline>
                                                <line x1="12" x2="20" y1="19" y2="19"></line>
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-semibold">Technologies</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-orange-500/10 text-orange-500 hover:scale-105 transition-transform">Python</div>
                                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-orange-500/10 text-orange-500 hover:scale-105 transition-transform">Tailwind css</div> 
                                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-orange-500/10 text-orange-500 hover:scale-105 transition-transform">SQL</div> 
                                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-orange-500/10 text-orange-500 hover:scale-105 transition-transform">React</div>
                                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-orange-500/10 text-orange-500 hover:scale-105 transition-transform">Next.js</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center relative z-10">
                            <a className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors group pointer-events-auto" href="/AboutMe">
                                Learn More About Me
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-4 h-4 ml-2 transition-transform group-hover:translate-x-1">
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div> 
            </main>
        </main>
    </>
  )
}

export default Aboutme1
