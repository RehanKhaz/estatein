import { investmentData, ourValues } from '@/app/db'
import Image from 'next/image'

const Investment = () => {
  return (
    <section className='common-padding my-5 min-h-[60vh] flex-center'>
      <div className='flex-between max-lg:flex-col gap-8 max-md:gap-4'>
        <div className='space-y-5 max-lg:space-y-2 w-[35%] max-lg:w-full'>
          <Image
            src={'/assets/fluorescent.png'}
            className='size-fit object-cover'
            width={300}
            height={100}
            alt='Fluorescent'
          />
          <h3 className='text-[2.3em]'>Smart Investments Informed Decisions</h3>
          <p className=' text-[18px] text-normal leading-[1.3em]'>
            Building a real estate portfolio requires a strategic approach.
            Estatein's Investment Advisory Service empowers you to make smart
            investments and informed decisions.
          </p>
          <div className='p-6 max-lg:p-5 space-y-3 rounded-xl relative max-md:p-3 secondary-color'>
            <Image
              src={'/assets/abstractdesign.png'}
              alt='Abstract Design'
              width={1600}
              height={400}
              className='absolute top-0 left-0 h-full w-full z-[-40]'
            />
            <h4 className='text-2xl text-white tracking-wide'>
              {'Unlock Your Investment Friends'}
            </h4>
            <p className='text-[15px] leading-[1.4em]'>
              Explore our Property Management Service categories and let us
              handle the complexities while you enjoy the benefits of property
              ownership.
            </p>
            <button className='bg-[#141414] w-full  rounded-lg border-[.5px] border-neutral-800'>
              Learn More
            </button>
          </div>
        </div>
        <div className=' h-full w-[65%] px-2 max-lg:w-full secondary-color py-2 rounded-xl'>
          <div className=' p-10 h-full max-md:p-5 bg-[#141414] grid grid-cols-2 max-md:grid-cols-1 gap-4 rounded-xl'>
            {investmentData.map((value, i) => {
              const { title, description, image } = value
              return (
                <div className={`space-y-4 px-3 py-3 border-[2px] rounded-2xl border-[#1A1A1A] `} key={i}>
                  <div className='flex items-center gap-2'>
                      <Image src={image} width={50} height={50} alt={title} />
                    <h4 className='text-[1.3em] text-white tracking-wide'>
                      {title}
                    </h4>
                  </div>
                  <p className='text-[15px] leading-[1.4em]'>{description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Investment
