import Image from 'next/image'

const CTABanner = () => {
  return (
    <section className='min-h-[50vh] flex-center border-y-neutral-600 max-sm:px-4 relative border-y-[.7px] my-5 common-padding overflow-hidden'>
      <Image src={'/assets/banner1.png'} alt='Banner1' width={600} height={600} className='object-cover absolute left-0 bottom-0 
      z-[-4]' />
      <Image src={'/assets/banner2.png'} alt='Banner2' width={600} height={600} className='object-cover absolute right-0 top-0 
      z-[-4]' />
      <div className='flex-between w-full max-md:flex-col'>
        <div className='space-y-3'>
          <h3>Start Your Real Estate Journey Today</h3>
          <p className='text-[16px] leading-[1.3em]'>
            Your dream property is just a click away. Whether you're looking for
            a new home, a strategic investment, or expert real estate advice,{' '}
            <br className='max-md:hidden' />
            Estatein is here to assist you every step of the way. Take the first
            step towards your real estate goals and explore our available <br />
            properties or get in touch with our team for personalized
            assistance.
          </p>
        </div>
        <br />
        <button className='accent-color max-md:w-full rounded-lg'>
          Explore Properties
        </button>
      </div>
    </section>
  )
}

export default CTABanner
