import React from 'react'
import ContactForm from './components/Form'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Wgermany from './components/Wgermany'
import AvgSalary from './components/AvgSalary'
import Demand from './components/Demand'
import Guide from './components/Guide'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Foot from './components/Foot'

const App = () => {
  return (
    <>
    <Nav/>
    <Hero/>
    <Wgermany/>
    <AvgSalary/>
    <Demand/>
    <Guide/>
    <Faq/>
    <Footer/>
    <Foot/>
      {/* <ContactForm/> */}
    </>
  )
}

export default App
