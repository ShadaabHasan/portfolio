'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import Navbar from "../components/Navbar";



const page = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

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
        <form onSubmit={handleSubmit(onSubmit)} className="rounded-lg w-full max-w mt-9">
          <div className="mb-4">
            <label className="block text-gray-300">Your Name</label>
            <input type="text" {...register("name", { required: true })} className="w-full p-2 rounded bg-gray-700 text-white" placeholder="Your name"/>
            {errors.name && <p className="text-red-500 text-sm">Name is required.</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-300">Email</label>
            <input type="email" {...register("email", { required: true })} className="w-full p-2 rounded bg-gray-700 text-white" placeholder="your.email@example.com"/>
            {errors.email && <p className="text-red-500 text-sm">Email is required.</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-300">Message</label>
            <textarea {...register("message", { required: true })} className="w-full p-2 rounded bg-gray-700 text-white" placeholder="Your message..."></textarea>
            {errors.message && <p className="text-red-500 text-sm">Message is required.</p>}
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

