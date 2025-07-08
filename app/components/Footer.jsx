'use client'
import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
  Mail,
  Send
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { toast } from 'sonner'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleSubscribe = e => {
    e.preventDefault()
    toast.success('Thanks for Subscription!')
    setEmail('')
  }

  // Navigation data: each section with items containing label and link
  const navSections = [
    {
      title: 'Home',
      items: [
        { label: 'Hero Section', link: '#homeHero' },
        { label: 'Features', link: '#features' },
        { label: 'Properties', link: '#properties' },
        { label: 'Testimonials', link: '#testimonials' },
        { label: 'FAQ', link: '#faqs' }
      ]
    },
    {
      title: 'About',
      items: [
        { label: 'Our Story', link: '#OurStory' },
        { label: 'Our Works', link: '#OurWork' },
        { label: 'How It Works', link: '#HowItWork' },
        { label: 'Our Team', link: '#team' },
        { label: 'Our Clients', link: '#clients' }
      ]
    },
    {
      title: 'Properties',
      items: [
        { label: 'Portfolio', link: '#properties' },
        { label: 'Categories', link: '#categories' }
      ]
    },
    {
      title: 'Services',
      items: [
        { label: 'Valuation Mastery', link: '#valuation' },
        { label: 'Strategic Mastery', link: '#strategic' },
        { label: 'Negotiation Wizardry', link: '#negotiation' },
        { label: 'Closing Success', link: '#closing' },
        { label: 'Property Management', link: '#property' }
      ]
    },
    {
      title: 'Contact',
      items: [
        { label: 'Contact', link: '#contact' },
        { label: 'Our Office', link: '#officelocation' }
      ]
    }
  ]

  return (
    <footer className='common-padding flex flex-wrap flex-between w-full space-y-12'>
      <div className='flex flex-wrap justify-between w-full  gap-8'>
        {/* Logo and subscription */}
        <div className='space-y-4 max-lg:w-full '>
          <Link href='/'>
              <Image
                src='/assets/logo.png'
                className='object-cover'
                width={100}
                height={200}
                alt='Logo'
              />
          </Link>
          <form
            onSubmit={handleSubscribe}
            className='border-neutral-700 w-full mt-4 text-neutral-400 px-4 py-2 border-[1px] rounded-lg gap-2 flex items-center'
          >
            <Mail size={20} />
            <input
              type='email'
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder='Enter your Email'
              className='outline-none placeholder:text-neutral-400 border-none text-lg bg-transparent flex-1'
            />
            <button type='submit'>
              <Send size={23} className='text-white' />
            </button>
          </form>
        </div>

        {/* Navigation sections */}
        <nav className='flex flex-wrap  gap-8'>
          {navSections.map((section, idx) => (
            <div key={idx} className='space-y-3'>
              <h5 className='text-lg text-neutral-300 tracking-wide'>
                {section.title}
              </h5>
              {section.items.map((item, i) => (
                <Link
                  key={i}
                  href={item.link}
                  className='text-white block text-[16px] transition-colors duration-200 hover:text-neutral-400'
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </nav>
      </div>

      {/* Bottom bar */}
      <div className='flex flex-col md:flex-row justify-between items-center w-full border-t border-neutral-700 pt-6'>
        <div className='flex flex-col md:flex-row items-center gap-4 text-neutral-400'>
          <span>@2025 Estatein. All Rights Reserved.</span>
          <p>
            Terms & policies
          </p>
        </div>
        <div className='flex items-center gap-4 mt-4 md:mt-0'>
          <a
            href='https://facebook.com/yourpage'
            target='_blank'
            rel='noopener noreferrer'
            className='p-2 secondary-color flex-center rounded-full'
          >
            <FacebookIcon size={20} className='text-white' />
          </a>
          <a
            href='https://youtube.com/yourchannel'
            target='_blank'
            rel='noopener noreferrer'
            className='p-2 secondary-color flex-center rounded-full'
          >
            <YoutubeIcon size={20} className='text-white' />
          </a>
          <a
            href='https://linkedin.com/in/yourprofile'
            target='_blank'
            rel='noopener noreferrer'
            className='p-2 secondary-color flex-center rounded-full'
          >
            <LinkedinIcon size={20} className='text-white' />
          </a>
          <a
            href='https://twitter.com/yourhandle'
            target='_blank'
            rel='noopener noreferrer'
            className='p-2 secondary-color flex-center rounded-full'
          >
            <TwitterIcon size={20} className='text-white' />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
