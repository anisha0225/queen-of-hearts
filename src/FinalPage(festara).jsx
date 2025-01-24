import Hero from './Festara/Hero';
import Jewels from './Festara/Jewels'
import AdCampaign from './Festara/AdCampaign'
import BrandSlider from './Festara/Sliders/BrandSlider'
import VisitStore from './Festara/VisitStore'
import Footer from './Festara/Footer'
import Navbar from './Festara/Navbar'
const FinalPage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Jewels/>
      <AdCampaign/>
      <BrandSlider/>
      <VisitStore/>
      <Footer/>
    </div>
  )
}

export default FinalPage