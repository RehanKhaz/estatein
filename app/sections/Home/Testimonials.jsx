import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { testimonials } from '@/app/db'

const Testimonials = () => {
  return (
    <section id='testimonials' className='common-padding space-y-4 mt-4'>
      <Image
        src={'/assets/fluorescent.png'}
        className='size-fit object-cover'
        width={300}
        height={100}
        alt='Fluorescent'
      />
      <h3 className='text-[2em] max-md:text-[1.5em]'>What Our Client Says</h3>

      <div className='w-full flex justify-between items-start max-md:flex-col max-md:gap-3'>
        <p className='text-[14px] leading-[1.6em] max-md:text-[13px] max-md:leading-[1.5em]'>
          Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.
        </p>
        <button className='secondary-color px-4 py-2 text-sm mt-2 rounded-lg max-md:w-full'>
          View All Testimonials
        </button>
      </div>

      <div className='grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4'>
        {testimonials.map((testimonial, i) => {
          const { name, location, review, title, image } = testimonial
          return (
            <div
              key={i}
              className='px-4 py-4 border-[.5px] border-neutral-800 rounded-lg space-y-4 flex flex-col justify-between'
            >
              <div className='flex flex-wrap items-center gap-2'>
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <div key={index} className='secondary-color rounded-full p-2'>
                    <Image
                      src={'/assets/Star.png'}
                      className='size-fit object-cover'
                      width={20}
                      height={20}
                      alt='Star'
                    />
                  </div>
                ))}
              </div>
              <h4 className='text-[1.5em] max-md:text-[1.2em] font-semibold tracking-wide text-white'>
                {title}
              </h4>
              <p className='text-[15px] max-md:text-[14px] text-white tracking-wide'>
                {review}
              </p>
              <div className='flex gap-3 items-center'>
                <Image
                  src={image}
                  className='rounded-full object-cover'
                  width={50}
                  height={50}
                  alt={title}
                />
                <div className='flex flex-col'>
                  <h4 className='text-lg text-white max-md:text-base'>{name}</h4>
                  <p className='text-sm max-md:text-xs'>{location}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <hr className='w-full text-neutral-600' />

      <div className='flex justify-between items-center max-sm:flex-col gap-3'>
        <p>
          <span className='text-white text-lg'>01</span> of 60
        </p>
        <div className='flex gap-3'>
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

export default Testimonials