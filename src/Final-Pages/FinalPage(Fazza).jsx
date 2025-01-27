import React from 'react'
import Hero from '../Fazza/Hero';
import Jewels from '../Fazza/Jewels'
import MovingSection from '../same-containers/MovingSection'

import BrandSlider from '../same-containers/BrandSlider'
import VisitStore from '../same-containers/VisitStore'
import Footer from '../Fazza/Footer'
import Navbar from '../Fazza/Navbar'
import Header from '../Fazza/Header'
import AdCampaign from '../same-containers/AdCampaign'
const FinalPage3 = () => {
  return (
    <div>
    <Navbar/>
    <Header/>
      <Hero/>
      <Jewels/>
      <AdCampaign/>
      <MovingSection/>
      <BrandSlider/>
      <VisitStore/>
      <Footer/>
    </div>
  )
}

export default FinalPage3
