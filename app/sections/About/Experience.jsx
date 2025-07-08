import { steps } from '@/app/db'
import Image from 'next/image'

const Experience = () => {
  return (
    <section id='HowItWork' className='common-padding mt-4 space-y-4'>
      <Image
        src={'/assets/fluorescent.png'}
        className='size-fit object-cover'
        width={300}
        height={100}
        alt='Fluorescent'
      />
      <h3 className='text-[2em]'>Navigating the Estatein Experience</h3>
      <p className=' text-[17px] max-w-7xl text-normal leading-[1.3em]'>
        At Estatein, we've designed a straightforward process to help you find
        and purchase your dream property with ease. Here's a step-by-step <br className='max-md:hidden' />{' '}
        guide to how it all works.
      </p>
      <div className='grid grid-cols-3 mt-8 max-md:mt-6  max-md:grid-cols-2 max-sm:grid-cols-1 gap-3'>
        {' '}
        {steps.map((step, i) => {
          const { title, description } = step
          return (
            <div className='flex  h-full w-full flex-col'>
              <div className='px-4 py-1 border-l-[1px] border-purple-700 text-white text-lg'>
                Step {i + 1}
              </div>
              <div className='px-6 max-lg:px-4 max-lg:py-3 max-md:px-3 h-full   w-full border-[.6px] border-neutral-600  rounded-lg rounded-tl-none py-5'>
                <h4 className='text-[1.3em] font-medium text-white'> {title} </h4>
                <p className='leading-[1.3em] text-[17px]'>{description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Experience
