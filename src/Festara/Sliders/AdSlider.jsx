import React from "react";
import Slider from "react-slick";

function AdSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1,
    cssEase: "linear"
  };
  return (
    <div className="slider-container overflow-hidden relative">
      <div className="absolute left-0 right-0 top-0 bottom-0 flex justify-between z-10 pointer-events-none">
        <div className="w-[5rem] md:w-[80rem] lg:w-[80rem] bg-gradient-to-r from-[#F8F8F8] via-[#F8F8F8] to-transparent"></div>
        <div className="w-[5rem] md:w-[80rem] lg:w-[80rem] bg-gradient-to-l from-[#F8F8F8] via-[#F8F8F8] to-transparent"></div>
      </div>
      <Slider {...settings}>
        <div>
          <img src="https://emcgtdx36wv.exactdn.com/storage/2024/10/certification-1.png?lossy=0&webp=90&avif=90&ssl=1%22%20" className="h-16 w-16 mx-auto"/>
        </div>
        <div>
          <img src="https://emcgtdx36wv.exactdn.com/storage/2024/10/certification-2.png?lossy=0&webp=90&avif=90&ssl=1" className="h-16 w-16 mx-auto"/>
        </div>
        <div>
          <img src="https://emcgtdx36wv.exactdn.com/storage/2024/10/certification-3.png?lossy=0&webp=90&avif=90&ssl=1" className="h-16 w-16 mx-auto"/>
        </div>
        <div>
          <img src="https://emcgtdx36wv.exactdn.com/storage/2024/10/certification-4.png?lossy=0&webp=90&avif=90&ssl=1" className="h-16 w-16 mx-auto"/>
        </div>
        <div>
          <img src="https://emcgtdx36wv.exactdn.com/storage/2024/10/certification-5.png?lossy=0&webp=90&avif=90&ssl=1" className="h-16 w-16 mx-auto"/>
        </div>
        <div>
          <img src="https://emcgtdx36wv.exactdn.com/storage/2024/10/certification-6.png?lossy=0&webp=90&avif=90&ssl=1" className="h-16 w-16 mx-auto"/>
        </div>
      </Slider>
    </div>
  );
}

export default AdSlider;