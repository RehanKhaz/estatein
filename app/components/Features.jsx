import React from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const Features = ({data}) => {
  return (
    <section id='features' className='px-4 max-md:px-2 py-2 secondary-color '>
      <div className='grid grid-cols-4 max-md:grid-cols-2 gap-1'>
        {data.map((feature, i) => {
          const { image, desc } = feature
          return <div className='px-4 max-sm:px-3 max-sm:py-4 py-6 relative h-full w-full rounded-xl flex-center flex-col gap-3 border-[.3px] bg-[#141414] border-neutral-800' key={i}>
            <div className='absolute top-4 right-4'>
              <ArrowUpRight size={30} className='text-neutral-700' />
            </div>
            <Image src={image} className='object-cover' width={70} height={70} alt='feature' />                                    
            <p className='text-neutral-300 text-center max-sm:text-[15px] leading-[1.3em]  text-[17px]'>
                {desc}
            </p>
          </div>
        })}
      </div>
    </section>
  )
}

export default Features
