import { heroOffers } from '@/app/db'
import Image from 'next/image'

const Hero = () => {
  return (
    <section id='homeHero' className='md:grid grid-cols-2  flex-col-reverse flex  min-h-[100vh]  max-md:gap-3'>
      <div className='h-full w-full common-padding  flex-center flex-col gap-y-3'>
        <h2 className='max-lg:text-[3em] max-md:text-[2.3em] max-sm:text-[2em] leading-[1em]'>Discover your Dream Property with Estatain</h2>
        <p>
          Your journey to finding the perfect property begins here. Explore our
          listings to find the home that matches your dreams.
        </p>
        <div className='flex max-md:flex-col w-full  gap-4 max-md:gap-2'>
          <button className='bg-[#141414] max-sm:w-full rounded-lg border-[.3px] border-neutral-50'>
            Learn More
          </button>
          <button className='rounded-lg max-sm:w-full accent-color '>
            Browse Properties
          </button>
        </div>

        <div className='grid grid-cols-3 max-md:gap-1 w-full max-md:grid-cols-2 gap-3'>
          {heroOffers.map((offer, i) => {
            const { amount, desc } = offer
            return (
              <div key={i} className={`px-4 ${i ==2 && 'max-md:col-span-2'} max-md:px-2 py-2 rounded-lg border-[.2px] border-neutral-500 w-full secondary-color text-white space-y-1`}>
                <h2 className='text-[2.2em] max-md:text-[1.5em] font-semibold text-center'> {amount}</h2>
                <p className='text-[15px] text-center'>{desc}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className='bg-[#191919] flex w-full h-full max-md:p-3 '>
        <Image src="/assets/home_hero_img.png" width={1000} alt='Building Image' className='object-cover w-full h-full rounded-2xl size-fit pointer-events-none' height={1000} />
      </div>
    </section>
  )
}

export default Hero
