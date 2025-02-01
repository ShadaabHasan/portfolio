'use client'

import Navbar from "./components/Navbar";
import Home1 from "./components/Home1"

export default function Home() {
  return (
    <>
    <div className="bg-white dark:bg-gray-800 shadow-xl ring-gray-900/5 text-white">
      <Navbar />
      <Home1 />
    </div>
    
    </>
  );
}
