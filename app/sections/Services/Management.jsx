import { propertyManagment } from '@/app/db'
import Image from 'next/image'

const Management = () => {
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
          EffortLess Property Managment
        </h3>
        <p className='text-[17px] max-w-7xl text-normal leading-[1.3em]'>
          Owning a property should be a pleasure, not a hassle. Estatein's
          Property Management Service takes the stress out of property
          ownership, offering comprehensive solutions tailored to your needs.
          Explore the categories below to see how we can make property
          management effortless for you
        </p>
      </div>
      <div className='mt-5 grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4'>
        {propertyManagment.map((value, i) => {
          const { title, description, image } = value
          return (
            <div
              className={`space-y-4 py-5 px-5 rounded-lg
border-[2px]  border-[#1A1A1A] `}
              key={i}
            >
              <div className='flex max-md:flex-col md:items-center gap-3'>
                <Image src={image} width={60} height={60} alt={title} />
                <h4 className='text-2xl text-white tracking-wide'>{title}</h4>
              </div>
              <p className='text-[15px] leading-[1.4em]'>{description}</p>
            </div>
          )
        })}
        <div className='sm:col-span-2 rounded-lg relative border-[2px] flex-center flex-col  gap-2 border-[#1A1A1A] secondary-color p-5'>
          <Image
            src={'/assets/abstractdesign.png'}
            alt='Abstract Design'
            width={1600}
            height={400}
            className='absolute h-full w-full opacity-30 object-cover z-[40]'
          />
          <div className='w-full flex-between'>
            <div className='space-y-2'>
              <h4 className='text-2xl font-semibold text-white tracking-wide'>
                Experience Effortless Property Managment
              </h4>
              <p className='text-[15px] leading-[1.4em]'>
                Ready to experience hassle-free property management? Explore our
                Property Management Service categories and let us handle the
                complexities while you enjoy the benefits of property ownership.
              </p>
            </div>
          </div>
          <button className='bg-[#141414] w-full rounded-lg'>Learn More</button>
        </div>
      </div>
    </section>
  )
}

export default Management
