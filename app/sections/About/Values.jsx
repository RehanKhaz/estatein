import { ourValues } from '@/app/db'
import Image from 'next/image'

const Values = () => {
  return (
    <section id='OurStory' className='common-padding min-h-[60vh] flex-center'>
      <div className='flex-between max-lg:flex-col gap-8 max-md:gap-4'>
        <div className='space-y-5 w-[35%] max-lg:w-full'>
          <Image
            src={'/assets/fluorescent.png'}
            className='size-fit object-cover'
            width={300}
            height={100}
            alt='Fluorescent'
          />
          <h3>Our Values</h3>
          <p className=' text-[18px] text-normal leading-[1.3em] '>
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary.
          </p>
        </div>
        <div className='flex-1 h-full w-[65%] px-2 max-lg:w-full secondary-color py-2 rounded-xl'>
          <div className=' p-10 max-md:p-5 max-sm:p-2 bg-[#141414] grid grid-cols-2 max-md:grid-cols-1  gap-y-6 rounded-xl'>
            {ourValues.map((value, i) => {
              const { title, description, image } = value
              return (
                <div className={`space-y-4 max-md:border-[.4px] border-neutral-800 rounded-lg px-4 py-3  ${i == 1 | i == 3 && 'md:border-l-[2px] md:border-[#1A1A1A]'}  ${i > 1 && 'md:border-t-[2px]  md:border-[#1A1A1A]'} `}  key={i}>
                  <div className='flex items-center gap-3'>
                    <div className='p-2 rounded-full border-[.5px] border-[#D485FA]'>
                      <Image src={image} width={40} height={40} alt={title} />
                    </div>
                    <h4 className='text-2xl text-white tracking-wide'>{title}</h4>
                  </div>
                  <p className='text-[15px] leading-[1.4em]'>
                    {description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Values
