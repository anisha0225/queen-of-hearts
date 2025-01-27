import React from 'react'

// import MovingSection from './queen-of-hearts/MovingSection'
// import Hero from './queen-of-hearts/Hero'
// import GulzContainer from './queen-of-hearts/GulzContainer'
// import FazzaContainer from './queen-of-hearts/FazzaContainer'
// import FesteraContainer from './queen-of-hearts/FesteraContainer'
// import PacheContainer from './queen-of-hearts/PacheContainer'
// import SwiperContainer from './queen-of-hearts/SwiperContainer'
// import Galleria from './queen-of-hearts/Galleria'
// import Footer from './queen-of-hearts/Footer'
// import Navbar from './queen-of-hearts/Navbar'
import {Route,Routes} from "react-router-dom"
import FinalPage from './FinalPage(festara)'
import FinalPage1 from './FinalPage(q-o-h)'
import FinalPage2 from './FinalPage(Gulz)'
import FinalPage3 from './FinalPage(Fazza)'
import FinalPage4 from './FinalPage(Pache)'
const App = () => {

  return (
    <div>
  <>
  <Routes>
    <Route path="/" element={<FinalPage1/>}/>
    <Route path="/festara" element={<FinalPage/>}/>
    <Route path="/gulz" element={<FinalPage2/>}/>
    <Route path="/fazza" element={<FinalPage3/>}/>
    <Route path="/pache" element={<FinalPage4/>}/>

  </Routes>
  </>
    </div>
  )
}

export default App
