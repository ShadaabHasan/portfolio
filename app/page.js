'use client'

import Navbar from "./components/Navbar";
import Home1 from "./components/Home1";
import Aboutme1 from "./components/Aboutme1";
import FeaturedProjects from "./components/FeaturedProjects";
import Footer from "./components/Footer";
import AllProjects from "./components/AllProjects";
import {BrowserRouter as Router, Switch, Route, Routes} from "react-router-dom";

export default function Home() {
  return (
    <>
    <div className="bg-gradient-to-br from-slate-900 to-emerald-900 shadow-xl ring-gray-900/5 text-white">

      {/* <Router> */}
          <Navbar />
          <Home1 />
          <Aboutme1 />
          <FeaturedProjects>
            {/* <Routes> */}
              {/* <Route path="/AllProjects" element={<AllProjects />} /> */}
            {/* </Routes> */}
          </FeaturedProjects>
          <Footer />
      {/* </Router> */}
    </div>
    
    </>
  );
}
