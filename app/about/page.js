import React from 'react'
import Hero from '../sections/About/Hero'
import Values from '../sections/About/Values'
import Acheivements from '../sections/About/Acheivements'
import Experience from '../sections/About/Experience'
import Team from '../sections/About/Team'
import Clients from '../sections/About/Clients'
import CTABanner from '../components/CTABanner'

const About = () => {
  return <>
  <Hero />
  <Values />
  <Acheivements />
  <Experience />
  <Team />
  <Clients />
  <CTABanner />
  </>
}

export default About
