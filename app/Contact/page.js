'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
// import { useRef } from 'react';
import Footer from '../components/Footer';
import useIsBottom from "../hooks/useIsBottom";
import SocialLinks from "../components/SocialLinks";

const ContactPage = () => {
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm();  // const onSubmit = data => console.log(data);
  // console.log(errors);
  // const textAreaRef = useRef(null);

  const autoExpand = (event) => {
    const textarea = event.target; 
    textarea.style.height = "auto";  // Reset height
    textarea.style.height = `${textarea.scrollHeight}px`; // Expand to fit content
  };

  async function onSubmit(data) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      alert(result.message);

      if (response.ok) reset(); // clear the form after a successful send
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
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
      Fill out the form below and I'll get back to you as soon as possible.
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

          <button type="submit" className="btn btn-secondary-contact">
            Send Message
          </button>
          
          
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

