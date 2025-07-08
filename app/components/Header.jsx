'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'
import { X, Menu } from 'lucide-react'
import { navList } from '../db'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const headerRef = useRef(null)
  const location = usePathname()

  useEffect(() => {
    const handleClickOutside = e => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header ref={headerRef} className='secondary-color w-dvw'>
      <div className='flex common-padding items-center transition-all duration-300 ease-in-out justify-between w-full'>
        {/* Logo */}
        <Image
          src='/assets/logo.png'
          className='object-cover  md:size-fit max-md:h-[2.2em] w-fit'
          width={200}
          height={100}
          alt='Logo'
        />

        {/* Close button for mobile menu */}
        {isMenuOpen && (
          <button
            onClick={() => setIsMenuOpen(false)}
            className='absolute z-[60] md:hidden right-2.5 accent-background'
            aria-label='Close menu'
          >
            <X className='size-8 text-white' />
          </button>
        )}

        {/* Navigation links */}
        <nav
          className={`${
            isMenuOpen
              ? 'flex-col transform h-dvh transition-all duration-1000 delay-75 ease-in-out z-20 fixed   top-0 left-0 w-full gradient py-4 justify-center bg-[#0E0E10] flex px-10'
              : 'max-md:hidden h-0'
          } flex md:items-center gap-2 `}
        >
          {navList.map((item, i) => {
            const path = i === 0 ? '/' : `/${item.toLowerCase()}`
            const isActive = location === path
            return (
              <Link
                key={i}
                href={path}
                onClick={() => setIsMenuOpen(false)}
                className={`cursor-pointer px-4 py-2 ${
                  isActive
                    ? 'bg-[#141414] border-[.2px] border-neutral-500'
                    : ''
                } hover:bg-[#141414] hover:border-[.5px] border-neutral-300 text-white/80 max-md:w-full tracking-wider max-md:px-4 max-md:py-3 rounded-xl font-normal transition-colors duration-[3000] delay-200 ease-in-out max-md:text-3xl text-[1em]`}
              >
                {item}
              </Link>
            )
          })}
        </nav>

        {/* Mobile menu toggle */}
        <div className='flex-center gap-1'>
          <Link href={'/contact'}>
            <button className='bg-[#141414] rounded-lg hover:accent-color text-[20px] transition-colors duration-initial ease-in-out max-md:text-[18px]'>
              Contact Us
            </button>
          </Link>
          <button
            aria-label='Toggle menu'
            onClick={() => setIsMenuOpen(prev => !prev)}
            className='cursor-pointer !p-1 md:hidden'
          >
            {isMenuOpen ? (
              <X className='size-8 text-white' />
            ) : (
              <Menu className='size-8 text-white' />
            )}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
