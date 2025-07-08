import React from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { faqs } from '../../db'

const FAQ = () => {
  return (
    <section id='faqs' className='common-padding space-y-4 mt-4'>
      <Image
        src={'/assets/fluorescent.png'}
        className='size-fit object-cover'
        width={300}
        height={100}
        alt='Fluorescent'
      />
      <h3 className='captalize'>Frequently Asked Questions</h3>
      <div className='w-full flex-between  max-md:flex-col'>
        <p className=' text-[14px] leading-[1.3em] '>
          Find answers to common questions about Estatein's services, property
          listings, and the real estate process. <br className='max-md:hidden' /> We're here to provide clarity
          and assist you every step of the way.
        </p>
        <br />
        <button className='secondary-color max-md:w-full  rounded-lg'>
          View All Testimonials
        </button>
      </div>
      <br />
      <div className='grid grid-cols-3 max-md:grid-cols-1 gap-4'>
        {faqs.map((faq, i) => {
          const { question, answer } = faq
          return <div className='px-8 max-lg:px-4 py-6 border-[.5px] border-neutral-800 rounded-lg space-y-2 max-md:space-y-1 flex justify-between  flex-col'>
                          <h4 className='text-[1.2em] leading-[1.2em] text-white'>
                {question}
              </h4>
              <p className='text-[16px]  '> {answer}</p>
              <button className='secondary-color w-fit max-md:w-full border-[.5px] border-neutral-800 rounded-lg '>
                Read More
              </button>
             </div>
        })}
      </div>
      <hr className='w-full text-neutral-600' />
      <div className='flex-between max-sm:flex-col gap-3'>
        <p>
          <span className='text-white text-lg'>01</span> of 60
        </p>
        <div className='flex-center gap-3'>
          <button className='p-2 secondary-color rounded-full'>
            <ArrowLeft size={20} className='text-white' />
          </button>
          <button className='p-2 secondary-color rounded-full'>
            <ArrowRight size={20} className='text-white' />
          </button>
        </div>
      </div>
    </section>
  )
}

export default FAQ
