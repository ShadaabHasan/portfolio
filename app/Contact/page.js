'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { useRef } from 'react';
import Navbar from "../components/Navbar";



const page = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  const textAreaRef = useRef(null);

  const autoExpand = (event) => {
    const textarea = event.target; 
    textarea.style.height = "auto";  // Reset height
    textarea.style.height = `${textarea.scrollHeight}px`; // Expand to fit content
  };
 
  

  return (
    <>
    <Navbar />
    
    <div className='min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 text-white'>
      <div className='text-9xl padding-top-contact'>
        Contact Me
      </div>
      <div className='text-4xl padding-left-contact text-gray-500'>
      Want to get in touch? Fill out the form below and I'll get back to you as soon as possible.
      </div>
      <div className='padding-left-contact'>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w mt-9">
          <div className="mb-4">
            <label className="block text-gray-300"></label>
            <input type="text" {...register("name", { required: true })} className="w-full bg-transparent py-2 mt-3 rounded border-b-2 border-gray-500 text-white focus:outline-none focus:ring-0" placeholder="Full Name"/>
            {errors.name && <p className="text-red-500 text-sm">Name is required.</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-300"></label>
            <input type="email" {...register("email", { required: true })} className="w-full py-2 mt-3 bg-transparent rounded border-b-2 border-gray-500 text-white focus:outline-none focus:ring-0" placeholder="your.email@example.com"/>
            {errors.email && <p className="text-red-500 text-sm">Email is required.</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-300"></label>
            <textarea
              ref={textAreaRef} {...register("message", { required: true })} className="w-full py-2 mt-3 rounded bg-transparent border-b-2 border-gray-500 text-white transition-all resize-none overflow-hidden focus:outline-none focus:ring-0"
              rows="1"
              onInput={autoExpand}
              placeholder="Your message..."
            ></textarea>

          </div>

          <button type="submit" className="btn btn-secondary-contact">
            Send Message
          </button>
        </form>
      </div>
    </div>
      
    </>
  )
}

export default page

