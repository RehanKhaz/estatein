import { Urbanist } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import TopBar from './components/TopBar'
import Footer from './components/Footer'
import { Toaster } from 'sonner'

const urbanist = Urbanist({
  variable: '--font-urbanist',
  subsets: ['latin'],
  weight: '400'
})

export const metadata = {
  title: 'Estatein | Buy your Dream Property',
  description: 'Your Property should be your first Priority.'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={` ${urbanist.className} antialiased`}>
        <TopBar />
        <Header />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  )
}
