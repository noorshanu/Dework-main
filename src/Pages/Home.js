import React from 'react'
import About from '../Components/About/About'
import Hero from '../Components/Hero/Hero'
import Navbar from '../Components/Navbar/Navbar'
import Features from '../Components/Features/Feauters'
import Find from '../Components/Find/Find'
import Partners from '../Components/Partners/Partners'
import Footer from '../Components/Footer/Footer'
import WhyUs from '../Components/WhyUs/WhyUs'

function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Features/>
    <Find/>
    <WhyUs/>
    <Partners/>
    <Footer/>
    </>
  )
}

export default Home