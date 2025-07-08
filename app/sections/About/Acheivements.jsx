import { achievments } from '@/app/db'
import Image from 'next/image'

const Acheivements = () => {
  return (
    <section id='OurWork' className='common-padding space-y-4'>
      <Image
        src={'/assets/fluorescent.png'}
        className='size-fit object-cover'
        width={300}
        height={100}
        alt='Fluorescent'
      />
      <h3>Our Acheivements</h3>
      <p className=' text-[18px] text-normal leading-[1.3em] '>
        Our story is one of continuous growth and evolution. We started as a
        small team with big dreams, determined to create a real <br className='max-md:hidden' /> estate
        platform that transcended the ordinary.
      </p>
      <br className='max-md:hidden' />
      <div className='grid grid-cols-3 max-md:grid-cols-1 gap-4'>
        {achievments.map((achievment, i) => {
          const { title, description } = achievment
          return (
            <div className='p-1 max-lg:p-0.5 secondary-color rounded-lg'>
              <div className='px-8 max-lg:px-4 max-lg:py-4 py-6 border-[.5px] border-neutral-800 bg-[#141414] h-full rounded-lg space-y-2 flex justify-center   flex-col'>
                <h4 className='text-[1.2em] leading-[1.2em] text-white'>
                  {title}
                </h4>
                <p className='text-[16px]  '> {description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Acheivements
