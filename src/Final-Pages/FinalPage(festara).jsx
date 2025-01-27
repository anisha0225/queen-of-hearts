import Hero from '../Festara/Hero';
import Jewels from '../Festara/Jewels'
import BrandSlider from '../same-containers/BrandSlider'
import VisitStore from '../same-containers/VisitStore'
import Footer from '../Festara/Footer'
import Navbar from '../Festara/Navbar'
import Header from '../Festara/Header'
import MovingSection from '../same-containers/MovingSection'
import AdCampaign from '../same-containers/AdCampaign'

const FinalPage = () => {
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

export default FinalPage