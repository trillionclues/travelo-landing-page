import React, { useEffect } from 'react'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Recommend from './components/Recommend'
import Hero from './components/Hero'
import Services from './components/Services'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import scrollreveal from 'scrollreveal'

export default function App() {
  // scrollreveal animation
  useEffect(() => {
    const sR = scrollreveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true,
    })

    sR.reveal(
      `
      nav,
      #hero,
      #services,
      #recommend,
      #testimonials,
      footer
      `,
      {
        opacity: 0,
        interval: 300,
      }
    )
  }, [])

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Services />
      <Recommend />
      <Testimonials />
      <Footer />
    </>
  )
}
