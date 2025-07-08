'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  })

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  // Reusable input field component
  const TextInput = ({ label, id, name, type = 'text', placeholder }) => (
    <div className='space-y-3 w-full'>
      <label htmlFor={id} className='text-lg text-white'>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={formData[name]}
        onChange={handleChange}
        placeholder={placeholder}
        className='secondary-color rounded-lg w-full text-[1.1em] flex-between gap-2 border-[.5px] border-neutral-800 outline-none  text-white placeholder:text-neutral-400 px-4 py-3'
      />
    </div>
  )

  // Reusable select field component
  const SelectInput = ({
    label,
    id,
    name,
    options,
    containerClass,
    placeholder
  }) => (
    <div className={` ${containerClass} space-y-3  w-full`}>
      <label htmlFor={id} className='text-lg text-white'>
        {label}
      </label>
      <select
        id={id}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        placeholder={placeholder}
        className='secondary-color rounded-lg text-[1.1em] flex-between gap-2 border-[.5px] border-neutral-800 outline-none text-neutral-400 placeholder:text-neutral-400 w-full px-4 py-3'
      >
        <option value=''>Select {label}</option>
        {options}
      </select>
    </div>
  )

  return (
    <section id='contact' className='common-padding my-5 space-y-4'>
      <Image
        src={'/assets/fluorescent.png'}
        className='size-fit object-cover'
        width={300}
        height={100}
        alt='Fluorescent'
      />
      <h3 className='text-[2.3em] max-md:text-[1.8em]'>Let's Connect</h3>
      <p className='text-[17px] max-w-7xl text-normal leading-[1.3em] '>
        We're excited to connect with you and learn more about your real estate
        goals. Use the form below to get in touch with Estatein. Whether you're
        a prospective client, partner, or simply curious about our services,
        we're here to answer your questions and provide the assistance you need.
      </p>
      <div className='p-8 max-md:p-5 max-sm:p-3 border-[2px] border-neutral-800 rounded-lg'>
        <div className=' grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4'>
          <TextInput
            label='First Name'
            id='firstName'
            name='firstName'
            placeholder='Enter First Name'
          />

          <TextInput
            label='Last Name'
            id='lastName'
            name='lastName'
            placeholder='Enter Last Name'
          />

          <TextInput
            label='Email'
            id='email'
            name='email'
            type='email'
            placeholder='Enter Email'
          />

          <TextInput
            label='Phone'
            id='phone'
            name='phone'
            type='tel'
            placeholder='Enter Phone'
          />
          <SelectInput
            label='Inquiry Type'
            id='inquiry'
            placeholder={'Select Inquiry Type'}
            name='inquiry'
            options={null}
          />
          <SelectInput
            label='How do you hear About Us ?'
            id='reference'
            name='reference'
            options={null}
          />
        </div>
        <div className='space-y-3 mt-4 col-span-4'>
          <label htmlFor='message' className='text-lg text-white'>
            Message
          </label>
          <textarea
            name='message'
            value={formData.message}
            onChange={handleChange}
            rows={4}
            id='message'
            placeholder='Enter your Message Here'
            className='secondary-color rounded-lg text-[1.1em] flex-between gap-2 border-[.5px] border-neutral-800 outline-none text-white placeholder:text-neutral-400 w-full px-4 py-3'
          />
        </div>

        <div className='flex md:justify-between mt-2 max-md:flex-col w-full gap-4'>
          <div className='flex items-center gap-2 mt-4'>
            <input
              name='agree'
              checked={formData.agree}
              onChange={handleChange}
              type='checkbox'
              id='agree'
              className='h-4 w-4'
            />
            <label htmlFor='agree' className='text-white text-base'>
              I agree to the Terms & Policy
            </label>
          </div>

          <button
            type='submit'
            className=' w-fit max-md:w-full accent-color rounded-lg text-[1.1em] gap-2 border-[.5px] border-neutral-800 outline-none text-center text-white placeholder:text-neutral-400 px-4 py-3 cursor-pointer'
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  )
}

export default Form
