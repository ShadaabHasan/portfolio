'use client'

import React from 'react'
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import ProjectCard from "../components/ProjectCard";
import { projects } from "@/data/projects";
import { useEffect, useState } from "react";

const AllProjects = () => {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;

      // Check if the user has reached the bottom
      setIsBottom(scrollPosition >= pageHeight - 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <div className='red-footer'>
        <div className={`transition-all duration-300 ${isBottom ? "m-5" : "m-0"}`}>
          <div className='min-h-screen bg-gradient-to-br from-slate-900 to-rose-800 text-white pb-20 rounded-b-3xl'>
            <div className="container mx-auto padding-top-project">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold">All Projects</h2>
                <p className="mt-4 text-lg grey">
                  A showcase of my recent projects, demonstrating my skills in AI, machine learning, and more.
                </p>
              </div>

              {/* Every project in data/projects.js, featured or not */}
              <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-20 p-5 mt-6 mx-2 md:mx-20">
                {projects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
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

export default AllProjects