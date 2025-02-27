'use client'

import Navbar from "./components/Navbar";
import Home1 from "./components/Home1";
import Aboutme1 from "./components/Aboutme1";
import FeaturedProjects from "./components/FeaturedProjects";
import Footer from "./components/Footer";
import Scrollup from "./components/Scrollup";
// import { usePathname } from "next/navigation";


import { useEffect, useState } from "react";

// export default function ScrollEffectComponent() {
  

export default function Home() {
  // const pathname = usePathname();
  // const pageClass =
  // // pathname === "/" ? "home-page" :
  // pathname === "/AllProjects" ? "projects-page" :
  // pathname === "/contact" ? "contact-page" : "";

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
    <div className="total-bg text-white">
    <div className={`transition-all duration-300 ${isBottom ? "m-5" : "m-0"}`}>
    <div className="bg-gradient-to-br from-slate-900 to-emerald-900 shadow-xl ring-gray-900/5 text-white rounded-b-3xl">
      
      <Home1 />
      <Aboutme1 />
      <FeaturedProjects />
      <Scrollup />
    </div>
    </div>
    <Footer />  
    </div>
     
    </>
  );
}


