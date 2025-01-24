import React from 'react'

import Header from "./Gulz/Header";

import Recomendation from "./Gulz/Recomendation";
import Collection from "./Gulz/Collection";
import Swiper from "./Gulz/Swiper";
import Trending from "./Gulz/Trending";
import Benifit from "./Gulz/Benifit";
import Testimonial from "./Gulz/Testimonial";
import Footer from "./Gulz/Footer";
import Nav from "./Gulz/Nav";
const FinalPage2 = () => {
  return (
    <div>
       <Nav />
      <Header />
      <Recomendation />
      <Collection />
      <Swiper />
      <Trending />
      <Benifit />
      <Testimonial />
      {/* <Test /> */}
      <Footer />
    </div>
  )
}

export default FinalPage2
