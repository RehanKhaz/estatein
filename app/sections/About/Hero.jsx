import { heroOffers } from '@/app/db'
import Image from 'next/image'

const Hero = () => {
  return (
    <section
      id='aboutHero'
      className='common-padding overflow-x-hidden flex items-center mt-6 min-h-[80vh]'
    >
      <div className='md:grid grid-cols-2  flex-col-reverse max-md:flex  min-h-[80vh] gap-[2em]  max-md:gap-4'>
        <div className='full flex justify-center flex-col gap-y-3'>
          <Image
            src={'/assets/fluorescent.png'}
            className='size-fit object-cover'
            width={300}
            height={100}
            alt='Fluorescent'
          />
          <h3>Our Journey</h3>
          <p className=' text-[18px] text-normal leading-[1.3em] '>
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary. Over the years, we've
            expanded our reach, forged valuable partnerships, and gained the
            trust of countless clients.
          </p>

          <div className='grid  grid-cols-3 max-md:grid-cols-2 gap-3 max-md:gap-1'>
            {heroOffers.map((offer, i) => {
              const { amount, desc } = offer
              return (
                <div
                  key={i}
                  className={`px-4 ${
                    i == 2 && 'max-md:col-span-2'
                  } max-md:px-2 py-2 rounded-lg border-[.2px] border-neutral-500 w-full secondary-color text-white space-y-1`}
                >
                  <h2 className='text-[2.2em] max-md:text-[1.5em] font-semibold text-center'>
                    {' '}
                    {amount}
                  </h2>
                  <p className='text-center text-[15px]'>{desc}</p>
                </div>
              )
            })}
          </div>
        </div>
        <div className='h-full flex-center w-full'>
          <Image
            src='/assets/About_hero_image.png'
            width={1000}
            alt='Building Image'
            className='object-cover w-full size-fit pointer-events-none'
            height={1000}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
