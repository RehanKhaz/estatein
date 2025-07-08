'use client'
import { useState } from 'react'
import { Mail, Phone } from 'lucide-react'
import Image from 'next/image'

const PropertyContact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    propertyType: '',
    bathrooms: '',
    bedrooms: '',
    budget: '',
    contactMethodPhone: '',
    contactMethodEmail: '',
    message: '',
    agree: false
  })

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!formData.agree) {
      alert('Please agree to the terms & policy before submitting.')
      return
    }
    console.log('Submitting form:', formData)
    alert('Form submitted successfully!')
  }

  // Reusable input field component
  const TextInput = ({ label, id, name, type = 'text', placeholder }) => (
    <div className='space-y-3 w-full col-span-1'>
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
        className='secondary-color rounded-lg w-full text-[1.1em] flex-between gap-2 border-[.5px] border-neutral-800 outline-none text-white placeholder:text-neutral-400 px-4 py-3'
      />
    </div>
  )

  // Reusable select field component
  const SelectInput = ({ label, id, name, options, containerClass }) => (
    <div className={`${containerClass} space-y-3 col-span-1 w-full`}>
      <label htmlFor={id} className='text-lg text-white'>
        {label}
      </label>
      <select
        id={id}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className='secondary-color rounded-lg text-[1.1em] flex-between gap-2 border-[.5px] border-neutral-800 outline-none text-neutral-400 w-full px-4 py-3'
      >
        <option value=''>Select {label}</option>
        {options}
      </select>
    </div>
  )

  // Reusable contact method input
  const ContactMethodInput = ({ icon, name, type, placeholder }) => (
    <div className='secondary-color w-full rounded-lg flex items-center gap-2 border-[.5px] border-neutral-800 px-4 py-3'>
      {icon}
      <input
        name={name}
        type={type}
        value={formData[name]}
        onChange={handleChange}
        placeholder={placeholder}
        className='text-neutral-400 text-xl gap-3 w-full bg-transparent outline-none'
      />
    </div>
  )

  return (
    <section id='categories' className='common-padding  gap-8'>
      {/* Image */}
      <div className='flex'>
        <Image
          src={'/assets/fluorescent.png'}
          className='size-fit object-cover'
          width={300}
          height={100}
          alt='Fluorescent'
        />
      </div>

      {/* Heading & Description */}
      <div className='space-y-4'>
        <h3 className='text-[2.3em] max-md:text-[1.8em]'>
          Let's Make it Happen
        </h3>
        <p className='text-[17px] max-w-7xl text-normal leading-[1.3em]'>
          Ready to take the first step toward your dream property? Fill out the
          form below, and our real estate wizards will work their magic to find
          your perfect match. Don't wait; let's embark on this exciting journey
          together.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className='p-8 max-md:p-4 mt-4 border-[.5px] border-neutral-600 rounded-lg'
      >
        <div className=' grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-6 max-md:gap-4'>
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
            label='Location'
            id='location'
            name='location'
            options={null}
          />

          <SelectInput
            label='Property Type'
            id='propertyType'
            name='propertyType'
            options={null}
          />

          <SelectInput
            label='No of Bathrooms'
            id='bathrooms'
            name='bathrooms'
            options={null}
          />

          <SelectInput
            label='No of Bedrooms'
            id='bedrooms'
            name='bedrooms'
            options={null}
          />

          <SelectInput
            label='Budget'
            id='budget'
            name='budget'
            containerClass='md:col-span-2'
            options={null}
          />
          <div className='md:col-span-2 w-full'>
            <label className='text-lg text-white'>
              Preferred Contact Method
            </label>
            <div className='grid grid-cols-2 gap-3'>
              <ContactMethodInput
                icon={<Phone className='text-neutral-400' size={20} />}
                name='contactMethodPhone'
                type='tel'
                placeholder='Enter your Number'
              />
              <ContactMethodInput
                icon={<Mail className='text-neutral-400' size={20} />}
                name='contactMethodEmail'
                type='email'
                placeholder='Enter your Email'
              />
            </div>
          </div>

          <div className='space-y-3 col-span-4 max-md:col-span-2 max-sm:col-span-1 w-full'>
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
        </div>

        <div className='mt-3 flex flex-col md:flex-row justify-between items-center gap-2'>
          <div className='flex items-center gap-2'>
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
            className='w-full md:w-auto accent-color rounded-lg text-[1.1em] gap-2 border-[.5px] border-neutral-800 outline-none text-center text-white placeholder:text-neutral-400 px-4 py-3 cursor-pointer'
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  )
}

export default PropertyContact
