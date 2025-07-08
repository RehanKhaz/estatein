'use client'
import { X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const TopBar = () => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <div
      className={`bg-[#262626] ${
        isOpen ? 'flex-center' : 'hidden'
      }  relative h-[3em] common-padding`}
    >
      <Image
        src={'/assets/abstractdesign.png'}
        width={700}
        height={200}
        alt='abstract design'
        className='absolute pointer-events-none h-full w-full top-0 opacity-50 left-0'
        draggable={false}
      />
      <p className='text-white max-md:text-[16px] leading-[120%] max-md:text-center text-[18px]'>
        ✨Discover Your Dream Property <br className='sm:hidden' /> with Estatein.
      </p>
      <button
        onClick={() => setIsOpen(false)}
        className='px-2 py-2  secondary-color absolute right-4 -translate-y-1/2 top-1/2 rounded-full'
      >
        <X size={16} />
      </button>
    </div>
  )
}

export default TopBar
