'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
// import { useRef } from 'react';
import Footer from '../components/Footer';
import useIsBottom from "../hooks/useIsBottom";
import SocialLinks from "../components/SocialLinks";
import { useState } from "react";

const ContactPage = () => {
  
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  // The message shown under the button after sending, e.g. { type: "success", text: "..." }
  const [status, setStatus] = useState(null);
  // console.log(errors);
  // const textAreaRef = useRef(null);

  const autoExpand = (event) => {
    const textarea = event.target; 
    textarea.style.height = "auto";  // Reset height
    textarea.style.height = `${textarea.scrollHeight}px`; // Expand to fit content
  };

    async function onSubmit(data) {
    setStatus(null); // clear any old message

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setStatus({ type: response.ok ? "success" : "error", text: result.message });

      if (response.ok) reset(); // clear the form after a successful send
    } catch (error) {
      console.error("Error:", error);
      setStatus({ type: "error", text: "Something went wrong. Please try again." });
    }
  }
  
  const isBottom = useIsBottom(400);

  return (
    <>
    <div className='purple-footer text-white'>
    <div className={`transition-all duration-300 ${isBottom ? "m-5" : "m-0"}`}>

    <div className='min-h-screen bg-gradient-to-br from-slate-900 to-fuchsia-900 text-white rounded-3xl'>
      <div className='text-5xl md:text-8xl pt-28 pb-2 pl-10 md:pb-2 md:pl-40'>
        <p>{"{Get in touch}"}</p>
      </div>
      <div className='text-lg md:text-2xl text-gray-500 pl-10 mr-10 md:pl-44 md:mr-96'>
        <p>Fill out the form below and I'll get back to you as soon as possible.</p>
        <p className='mt-3 text-base md:text-lg'>
          Or email me directly at{" "}
          <a href="mailto:shadaabhasan7@gmail.com" className="text-white underline hover:text-gray-300">
            shadaabhasan7@gmail.com
          </a>
        </p>
        <p className='mt-1 text-base md:text-lg'>Based in Galway, Ireland.</p>
      </div>
      <div className='pl-10 mr-10 md:pl-44 md:mr-96'>
          <form className="w-full max-w mt-9" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-300"></label>
            <input type="text" {...register("name", { required: true })} 
            className="w-full bg-transparent py-2 mt-3 rounded border-b-2 border-gray-500 text-white focus:outline-none focus:ring-0" 
            placeholder="Full Name"
            />
            {errors.name && <p className="text-red-500 text-sm">Name is required.</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-300"></label>
            <input type="email" {...register("email", { required: true })} 
            className="w-full py-2 mt-3 bg-transparent rounded border-b-2 border-gray-500 text-white focus:outline-none focus:ring-0" 
            placeholder="your.email@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm">Email is required.</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-300"></label>
            <textarea
               {...register("message", { required: true })} 
               className="w-full py-2 mt-3 rounded bg-transparent border-b-2 border-gray-500 text-white transition-all resize-none overflow-hidden focus:outline-none focus:ring-0"
              rows="1"
              onInput={autoExpand}
              placeholder="Your message..."
              
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">Message is required.</p>}  
          </div>

          <button type="submit" className="btn btn-secondary-contact" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p className={`mt-4 text-sm ${status.type === "success" ? "text-green-400" : "text-red-400"}`}>
              {status.text}
            </p>
          )}
          
          
          <SocialLinks className="mt-7 ml-1" />
        </form>
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

export default ContactPage

