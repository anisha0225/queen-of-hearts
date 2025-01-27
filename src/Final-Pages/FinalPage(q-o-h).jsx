import React from 'react'
import MovingSection from '../same-containers/MovingSection'
import Hero from '../queen-of-hearts/Hero'
import GulzContainer from '../queen-of-hearts/GulzContainer'
import FazzaContainer from '../queen-of-hearts/FazzaContainer'
import FesteraContainer from '../queen-of-hearts/FesteraContainer'
import PacheContainer from '../queen-of-hearts/PacheContainer'
import BrandSlider from '../same-containers/BrandSlider'
import Galleria from '../queen-of-hearts/Galleria'
import Footer from '../queen-of-hearts/Footer'
import Navbar from '../queen-of-hearts/Navbar'
import Header from '../queen-of-hearts/Header'
const FinalPage1 = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
      <Hero/>
      <MovingSection/>
      <GulzContainer/>
      <FazzaContainer/>
      <FesteraContainer/>
      <PacheContainer/>
      <BrandSlider/>
      <Galleria/>
      <Footer/>
    </div>
  )
}

export default FinalPage1
