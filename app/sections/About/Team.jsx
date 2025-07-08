import { team } from '@/app/db'
import { Send, TwitterIcon } from 'lucide-react'
import Image from 'next/image'

const Team = () => {
  return (
    <section id='team' className='my-[2em] common-padding'>
      <Image
        src={'/assets/fluorescent.png'}
        className='size-fit object-cover'
        width={300}
        height={100}
        alt='Fluorescent'
      />
      <h3 className='text-[2em]'>Navigating the Estatein Experience</h3>
      <p className=' text-[17px] max-w-7xl text-normal leading-[1.3em] mt-2 '>
        At Estatein, we've designed a straightforward process to help you find
        and purchase your dream property with ease. Here's a step-by-step <br />{' '}
        guide to how it all works.
      </p>
      <br />
      <div className='grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1 '>
        {team.map((t, i) => {
          const { role, name, image } = t
          return (
            <div
              key={i}
              className='p-4 max-md:p-2 rounded-xl border-[.5px] flex-center flex-col justify-between gap-3 border-neutral-500 h-full'
            >
              <Image src={image} width={400} height={600} alt={name} />
              <div className='px-6 max-lg:px-4 rounded-3xl w-fit bg-[#703BF7] mt-[-2em] py-2'>
                <TwitterIcon size={30} className='text-white' />
              </div>
              <h3 className='text-2xl text-center '>{name}</h3>
              <h4 className='text-lg text-neutral-500 leading-[1em] text-center'>{role}</h4>
              <button className='secondary-color w-full rounded-3xl border-[.5px] border-neutral-500 flex-wrap gap-2 flex items-center md:justify-center justify-between'>
                <h3 className='text-[1.1em] '>Say Hello 👋</h3>
                <div className='p-2 flex-center bg-[#703BF7]  rounded-full'>
                  <Send size={20} />
                </div>
              </button>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Team
