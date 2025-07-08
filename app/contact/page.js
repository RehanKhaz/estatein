import CTABanner from '../components/CTABanner'
import Features from '../components/Features'
import { contactData } from '../db'
import Form from '../sections/Contact/Form'
import Locations from '../sections/Contact/Locations'
import TeamGrid from '../sections/Contact/TeamGrid'
import Banner from '../sections/Services/Banner'

const Contact = () => {
  return (
    <>
      <Banner
        title={'Get in Touch with Estatein'}
        description={
          "Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation."
        }
      />
      <Features data={contactData} />
      <Form />
      <Locations />
      <TeamGrid />
      <CTABanner />
    </>
  )
}

export default Contact
