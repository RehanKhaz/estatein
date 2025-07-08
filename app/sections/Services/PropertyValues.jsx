import Image from 'next/image'
import { ourValues, propertyValues } from '@/app/db'

const PropertyValues = () => {
  return (
    <section className='common-padding'>
      <div className='py-6 space-y-4'>
        <Image
          src={'/assets/fluorescent.png'}
          className='size-fit object-cover'
          width={300}
          height={100}
          alt='Fluorescent'
        />
        <h3 className='text-[2.3em] max-md:text-[1.8em]'>
          Let's Make it Happen
        </h3>
        <p className='text-[17px] max-w-7xl text-normal leading-[1.3em] '>
          Selling your property should be a rewarding experience, and at
          Estatein, we make sure it is. Our Property Selling Service is designed
          to maximize the value of your property, ensuring you get the best deal
          possible. Explore the categories below to see how we can help you at
          every step of your selling journey
        </p>
      </div>
      <div className='mt-5 grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4'>
        {propertyValues.map((value, i) => {
          const { title, link, description, image } = value
          return (
            <div
              id={`${link}`}
              className={`space-y-4 max-md:space-y-2 py-5 px-5 rounded-lg
border-[2px]  border-[#1A1A1A] `}
              key={i}
            >
              <div className='flex items-center gap-3'>
                <div className='p-2 rounded-full border-[.5px] border-[#D485FA]'>
                  <Image src={image} width={35} height={35} alt={title} />
                </div>
                <h4 className='text-2xl   text-white tracking-wide'>{title}</h4>
              </div>
              <p className='text-[15px] leading-[1.4em]'>{description}</p>
            </div>
          )
        })}
        <div
          id='property'
          className='sm:col-span-2 rounded-lg relative border-[2px] flex-center flex-col  gap-2 border-[#1A1A1A] secondary-color p-5'
        >
          <Image
            src={'/assets/abstractdesign.png'}
            alt='Abstract Design'
            width={1600}
            height={400}
            className='absolute h-full w-full opacity-30 object-cover z-[40]'
          />
          <div className='w-full flex-between max-md:flex-col'>
            <div className='space-y-2'>
              <h4 className='text-2xl text-white tracking-wide'>
                Unlock the Value of Your Property Today
              </h4>
              <p className='text-[15px] leading-[1.4em]'>
                Ready to unlock the true value of your property? Explore our
                Property Selling Service categories and let us help you achieve
                the best deal possible for your valuable asset.
              </p>
            </div>
            <button className='bg-[#141414] mt-2 w-full rounded-lg'>Learn More</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PropertyValues
