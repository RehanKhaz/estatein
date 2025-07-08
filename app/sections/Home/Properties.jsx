import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { properties } from '@/app/db'

const Properties = () => {
  return (
    <section id='properties' className='common-padding space-y-4 max-md:space-y-2 mt-4'>
      <Image
        src={'/assets/fluorescent.png'}
        className='size-fit object-cover'
        width={300}
        height={100}
        alt='Fluorescent'
      />
      <h3 className='text-[2em] max-md:text-[1.5em]'>Featured Properties</h3>

      <div className='w-full flex justify-between items-start max-md:flex-col max-md:gap-3'>
        <p className='text-[14px] leading-[1.6em] max-md:text-[13px] max-md:leading-[1.5em]'>
          Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through <br className='max-md:hidden' /> Estatein. Click "View Details" for more information.
        </p>
        <button className='secondary-color mt-3 rounded-lg px-4 py-2 text-sm'>
          View All Properties
        </button>
      </div>

      <div className='grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4'>
        {properties.map((property, i) => {
          const { title, description, image, bedRoom, bathRoom, price } = property
          return (
            <div
              key={i}
              className='px-4 py-3 max-md:px-3 border-[.5px] border-neutral-800 rounded-lg space-y-3'
            >
              <Image
                src={image}
                className='w-full object-cover rounded-lg'
                width={600}
                height={1000}
                alt={title}
              />
              <h4 className='text-2xl font-semibold tracking-wide text-white max-md:text-xl'>
                {title}
              </h4>
              <p className='text-sm max-md:text-[15px]'>{description}</p>
              <div className='grid grid-cols-3 gap-2 max-sm:grid-cols-2'>
                <div className='px-2 flex-center flex-col gap-1 border-neutral-700 rounded-lg secondary-color py-1'>
                  <Image
                    src={'/assets/Bed.png'}
                    width={20}
                    height={20}
                    alt='bed'
                  />
                  <p className='text-sm max-md:text-[12px] text-white'>{bedRoom}-BedRoom</p>
                </div>
                <div className='px-2 flex-center flex-col gap-1 border-neutral-700 rounded-lg secondary-color py-1'>
                  <Image
                    src={'/assets/Bath.png'}
                    width={20}
                    height={20}
                    alt='Bath'
                  />
                  <p className='text-sm max-md:text-[12px] text-white'>{bathRoom}-BathRoom</p>
                </div>
                <div className='px-2 flex-center flex-col gap-1 border-neutral-700 rounded-lg secondary-color py-1 max-sm:col-span-2 sm:col-span-1'>
                  <Image
                    src={'/assets/Villa.png'}
                    width={20}
                    height={20}
                    alt='Villa'
                  />
                  <p className='text-sm max-md:text-[12px] text-white'>Villa</p>
                </div>
              </div>
              <div className='flex justify-between items-center max-lg:flex-col max-lg:items-start gap-2'>
                <div className='flex flex-col gap-1 max-lg:flex-row max-lg:items-center'>
                  <p className='text-sm'>Price</p>
                  <h3 className='font-semibold text-xl max-md:text-lg'>${price}</h3>
                </div>
                <button className='accent-color  text-white  rounded-lg w-full max-sm:w-full max-lg:w-auto'>
                  View Property Details
                </button>
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

export default Properties
