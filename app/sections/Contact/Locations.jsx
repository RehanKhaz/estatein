import { officeLocation } from '@/app/db'
import { Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'

const Locations = () => {
  return (
    <section id='officelocation' className='common-padding space-y-5 max-lg:space-y-3'>
      <Image
        src={'/assets/fluorescent.png'}
        className='size-fit object-cover'
        width={300}
        height={100}
        alt='Fluorescent'
      />
      <h3 className='text-[2.3em] max-md:text-[1.8em]'>
        Discover Our Office Locations
      </h3>
      <p className='text-[17px] max-w-7xl text-normal leading-[1.3em]'>
        Estatein is here to serve you across multiple locations. Whether you're
        looking to meet our team, discuss real estate opportunities, or simply
        drop by for a chat, we have offices conveniently located to serve your
        needs. Explore the categories below to find the Estatein office nearest
        to you
      </p>
      <div className='mt-5 secondary-color w-fit space-x-2 max-md:space-x-1 rounded-xl px-3 py-2'>
        <button className='bg-[#141414] rounded-xl border-neutral-800 w-[8em] max-md:w-fit border-[.5px]'>
          All
        </button>
        <button className=' rounded-xl border-neutral-800 border-[.5px] w-[8em] max-md:w-fit'>
          Regional
        </button>
        <button className=' rounded-xl border-neutral-800 w-[8em] max-md:w-fit border-[.5px]'>
          International
        </button>
      </div>
      <div className='grid  grid-cols-2 max-md:grid-cols-1 gap-[1em]'>
        {officeLocation.map((office, i) => {
          const { description, title, status } = office
          return (
            <div
              className='p-8 max-lg:p-4 max-sm:p-3 flex-col flex justify-between border-[.5px] space-y-3 border-neutral-800 rounded-xl'
              key={i}
            >
              <h4 className='text-white text-xl max-md:text-[1em] tracking-tight'>
                {status}
              </h4>
              <h3 className='text-[1.6em] tracking-wide text-white font-semibold'>
                {' '}
                {title}
              </h3>
              <p className='text-[16px] leading-[1.4em]'> {description}</p>
              <div className=' grid grid-cols-3 max-lg:grid-cols-2 mt-4 items-center gap-2'>
                <div className='flex-center p-2  rounded-lg max-lg:w-full max-sm:w-auto gap-2 border-[.5px] border-neutral-700 secondary-color'>
                  <Mail className='text-white ' size={20} />
                  <p className='text-white text-[15px]'>info@estatein.com</p>
                </div>
                <div className='flex-center p-2 rounded-lg gap-2 border-[.5px] border-neutral-700 secondary-color'>
                  <Phone className='text-white ' size={20} />
                  <p className='text-white text-[13.5px]'>+1 (123) 456-7890</p>
                </div>
                <div className='flex-center max-lg:col-span-2 p-2 rounded-lg gap-2 border-[.5px] border-neutral-700 secondary-color'>
                  <MapPin className='text-white ' size={20} />
                  <p className='text-white text-[15px]'>Metropolls</p>
                </div>
              </div>
              <button className='accent-color mt-2 w-full rounded-lg'>
                Get Direction
              </button>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Locations
