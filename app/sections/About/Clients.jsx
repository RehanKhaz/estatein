import { valueClients } from '@/app/db'
import { ArrowLeft, ArrowRight, Box, Flashlight, Zap } from 'lucide-react'
import Image from 'next/image'

const Clients = () => {
  return (
    <section
    id='clients'
      className='common-padding  space-y-4 my-5
    '
    >
      <Image
        src={'/assets/fluorescent.png'}
        className='size-fit object-cover'
        width={300}
        height={100}
        alt='Fluorescent'
      />
      <h3 className='text-[2.3em] max-md:text-[1.8em]'>Our Valued Clients</h3>
      <p className=' text-[17px] max-w-7xl text-normal leading-[1.3em] '>
        At Estatein, we've designed a straightforward process to help you find
        and purchase your dream property with ease. Here's a step-by-step <br />{' '}
        guide to how it all works.
      </p>

      <div className='grid grid-cols-2 max-md:grid-cols-1 max-md:gap-4 gap-[2em]'>
        {valueClients.map((client, i) => {
          const { since, companyName, domain, category, review } = client
          return (
            <div className='secondary-color h-full w-full p-2 max-sm:p-1 rounded-lg'>
              <div className='bg-[#141414] p-6 max-lg:p-4 flex flex-col justify-between max-md:p-3 h-full space-y-4 rounded-lg'>
                <div className='flex md:justify-between max-lg:flex-col w-full'>
                  <div className='lg:space-y-1'>
                    <p>Since {since}</p>
                    <h4 className='text-[1.5em] text-white'>{companyName}</h4>
                  </div>
                  <button className='secondary-color max-lg:w-full rounded-xl'>
                    Visit Website
                  </button>
                </div>
                <div className='grid grid-cols-2  mt-2 gap-4'>
                  {/* Domain */}
                  <div className='space-y-2 max-md:space-y-0.5 px-3'>
                    <div className='flex items-center gap-2'>
                      <Box size={30} className='text-neutral-400' />
                      <p className='text-xl max-lg:text-lg text-neutral-400'>Domain</p>
                    </div>
                    <h4 className='text-[1.2em] leading-[1.4em] max-lg:text-[1.1em] text-white'>{domain}</h4>
                  </div>
                  {/* Category */}
                  <div className='space-y-2 max-md:space-y-0.5 px-3 border-l-[.5px] border-neutral-500'>
                    <div className='flex items-center gap-2'>
                      <Zap size={30} className='text-neutral-400' />
                      <p className='text-xl max-lg:text-lg text-neutral-400'>Category</p>
                    </div>
                    <h4 className='text-[1.2em] max-lg:text-[1.1em] leading-[1.4em] text-white'>{category}</h4>
                  </div>
                </div>
                <div className='mt-3 space-y-3 border-[.5px] border-neutral-600 p-3 rounded-xl'>
                    <p className='text-xl'>
                        What they Said 😊
                    </p>

                    <p className='text-white leading-[1.3em]'>
                        {review}
                    </p>
                </div>
              </div>
            </div>
          )
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

export default Clients
