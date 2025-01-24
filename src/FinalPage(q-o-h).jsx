import React from 'react'
import MovingSection from './queen-of-hearts/MovingSection'
import Hero from './queen-of-hearts/Hero'
import GulzContainer from './queen-of-hearts/GulzContainer'
import FazzaContainer from './queen-of-hearts/FazzaContainer'
import FesteraContainer from './queen-of-hearts/FesteraContainer'
import PacheContainer from './queen-of-hearts/PacheContainer'
import SwiperContainer from './queen-of-hearts/SwiperContainer'
import Galleria from './queen-of-hearts/Galleria'
import Footer from './queen-of-hearts/Footer'
import Navbar from './queen-of-hearts/Navbar'
const FinalPage1 = () => {
  return (
    <div>
        <Navbar/>
      <Hero/>
      <MovingSection/>
      <GulzContainer/>
      <FazzaContainer/>
      <FesteraContainer/>
      <PacheContainer/>
      <SwiperContainer/>
      <Galleria/>
      <Footer/>
    </div>
  )
}

export default FinalPage1
