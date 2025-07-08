import React from 'react'
import Banner from '../sections/Services/Banner'
import Features from '../components/Features'
import PropertyValues from '../sections/Services/PropertyValues'
import Management from '../sections/Services/Management'
import Investment from '../sections/Services/Investment'
import CTABanner from '../components/CTABanner'
import { features } from '../db'

const Services = () => {
  return (
    <>
    <Banner title={'Elevate Your Real Estate Experience'} description={'Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams.'} />
    <Features data={features} />
    <PropertyValues />
    <Management />
    <Investment />
    <CTABanner />
    </>
  )
}

export default Services