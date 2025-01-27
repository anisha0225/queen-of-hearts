import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

gsap.registerPlugin(ScrollTrigger)

const SwiperContainer = () => {
  const swiperRef = useRef(null)
  const [activeIndex, setActiveIndex] = React.useState(0)
  const swiperInstanceRef = useRef(null)

  const handleDotClick = (index) => {
    if (swiperInstanceRef.current) {
      swiperInstanceRef.current.slideTo(index)
      setActiveIndex(index)
    }
  }

  const handleContainerClick = (index) => {
    handleDotClick(index)
  }

  return (
    <section ref={swiperRef} className="py-10 mb-16 ">
      <div className="max-w-screen-3xl mx-auto px-4 sm:px-8 lg:px-14">
        <div className="relative">
          {/* For larger screens (above 1025px) */}
          <div className="hidden min-[1026px]:block">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                disabledClass: 'opacity-100' // Override disabled state opacity
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              loop={false}
              className="relative [&_.swiper-button-disabled]:!text-black" // Force black color even when disabled
              onSwiper={(swiper) => {
                swiperInstanceRef.current = swiper
              }}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.realIndex)
              }}
            >
              {/* Rest of the SwiperSlides remain exactly the same */}
              <SwiperSlide className="cursor-grab active:cursor-grabbing">
                <div className="flex flex-col md:flex-row items-center bg-neutral-100 w-[100%] justify-center text-center mx-auto" onClick={() => handleContainerClick(0)}>
                  <div className="w-full md:w-2/3">
                    <img 
                      src="/assets/Khwaahish-Store-img.jpg" 
                      alt="Slide 1"
                      className="w-full h-[300px] sm:h-[400px] md:h-[540px] object-cover"
                    />
                  </div>
                  <div className="w-full md:w-1/3 p-4 md:p-8 ">
                    <h3 className="text-2xl sm:text-3xl md:text-[2.6rem] mb-4 text-center tracking-widest md:px-3 leading-9" id="box">Legacy of Khwaahish</h3>
                    <p className="text-gray-500 text-xs sm:text-sm tracking-widest leading-6 md:px-2 text-center">20+ Years of Crafting Unforgettable Jewellery—Blending Tradition with Modern Flair</p>
                  </div>
                </div>
              </SwiperSlide>
              
              <SwiperSlide className="cursor-grab active:cursor-grabbing">
                <div className="flex flex-col md:flex-row items-center bg-neutral-100 w-[100%] justify-center text-center mx-auto" onClick={() => handleContainerClick(1)}>
                  <div className="w-full md:w-2/3">
                    <img 
                      src="/assets/Curators-Tale-with-watermark-img.jpg" 
                      alt="Slide 2"
                      className="w-full h-[300px] sm:h-[400px] md:h-[540px] object-cover"
                    />
                  </div>
                  <div className="w-full md:w-1/3 p-4 md:p-8">
                    <h3 className="text-2xl sm:text-3xl md:text-[2.6rem] mb-2 tracking-widest text-center" id="box">Curator&apos;s Tale</h3>
                    <p className="text-gray-500 text-xs sm:text-sm tracking-wider leading-9 mb-5 md:mt-5 text-center">Our brand represents our desire to create exquisite, beautiful and high-quality diamond jewellery that is as special as you.</p>
                    <p className="text-gray-500 text-xs sm:text-sm tracking-wider leading-7 text-center">Explore our collection at the Queen of Hearts Galleria and experience a world of Diamond Jewellery, truly Different by Design.</p>
                  </div>
                </div>
              </SwiperSlide>
              
              <SwiperSlide className="cursor-grab active:cursor-grabbing">
              <div className="flex flex-col md:flex-row items-center bg-neutral-100 w-[100%] justify-center text-center mx-auto">
                  <div className="w-full md:w-2/3">
                    <div className="w-full h-[300px] sm:h-[400px] md:h-[540px] border-[0.0005rem] border-gray-300">
                      <div className="grid grid-cols-3 h-full">
                        <div className="border-[0.0005rem] border-gray-300 bg-white flex flex-col items-center justify-center">
                          <img src="/assets/Promise-Sec-Icons-1.svg" alt="Icon 1" className="w-10 h-10"/>
                          <p className="text-xs mt-2 px-6">BIS Hallmarked</p>
                        </div>
                        <div className="border-[0.0005rem] border-gray-300 bg-neutral-100 flex flex-col items-center justify-center">
                          <img src="/assets/Promise-Sec-Icons-2.svg" alt="Icon 2" className="w-10 h-10"/>
                          <p className="text-xs mt-2 px-6">Assured time maintanance</p>
                        </div>
                        <div className="border-[0.0005rem] border-gray-300 bg-white flex flex-col items-center justify-center">
                          <img src="/assets/Promise-Sec-Icons-3.svg" alt="Icon 3" className="w-10 h-10"/>
                          <p className="text-xs mt-2 px-6">Life time Exchange</p>
                        </div>
                        <div className="border-[0.0005rem] border-gray-300 bg-neutral-100 flex flex-col items-center justify-center">
                          <img src="/assets/Promise-Sec-Icons-4.svg" alt="Icon 4" className="w-10 h-10"/>
                          <p className="text-xs mt-2 px-6">Free 1 year warranty</p>
                        </div>
                        <div className="border-[0.0005rem] border-gray-300 bg-white flex flex-col items-center justify-center">
                          <img src="/assets/Promise-Sec-Icons-5.svg" alt="Icon 5" className="w-10 h-10"/>
                          <p className="text-xs mt-2 px-6">Different by Design Unique designs with a World</p>
                        </div>
                        <div className="border-[0.0005rem] border-gray-300 bg-neutral-100 flex flex-col items-center justify-center">
                          <img src="/assets/Promise-Sec-Icons-6.svg" alt="Icon 6" className="w-10 h-10"/>
                          <p className="text-xs mt-2 px-6">0% Deduction old Gold exchange</p>
                        </div>
                        <div className="border-[0.0005rem] border-gray-300 bg-white flex flex-col items-center justify-center">
                          <img src="/assets/Promise-Sec-Icons-7.svg" alt="Icon 7" className="w-10 h-10"/>
                          <p className="text-xs mt-2 px-6">Free and insured shipping across India</p>
                        </div>
                        <div className="border-[0.0005rem] border-gray-300 bg-neutral-100 flex flex-col items-center justify-center">
                          <img src="/assets/Promise-Sec-Icons-8.svg" alt="Icon 8" className="w-10 h-10"/>
                          <p className="text-xs mt-2 px-6">Personalized Shopping Experience</p>
                        </div>
                        <div className="border-[0.0005rem] border-gray-300 bg-white flex flex-col items-center justify-center">
                          <img src="/assets/Promise-Sec-Icons-9.png" alt="Icon 9" className="w-28 h-9"/>
                          <p className="text-xs mt-2 px-6">&quot;Natural Diamonds&quot; Certification by International Gemological Laboratories</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 p-4 md:p-8">
                    <h3 className="text-2xl sm:text-3xl md:text-[2.6rem] mb-2 tracking-widest text-center" id="box">The Brand Promise</h3>
                    <p className="text-gray-500 text-xs sm:text-sm tracking-wider leading-6 text-center md:mt-5">Pure, Natural Diamonds. Designed to Reflect the Real You. </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="absolute -bottom-12 left-0 right-0 flex justify-center items-center space-x-1 z-10">
              <div className="swiper-button-prev !text-black !font-extrabold transition-transform !static !w-8 !h-8 !mt-0 after:!text-xl cursor-pointer"></div>
              {[...Array(3)].map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'w-7 bg-black' : 'w-2 bg-gray-900'
                  }`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
              <div className="swiper-button-next !text-black !font-extrabold transition-transform !static !w-8 !h-8 !mt-0 after:!text-xl cursor-pointer"></div>
            </div>
          </div>

          {/* Mobile version remains exactly the same */}
          <div className="min-[1026px]:hidden space-y-20">
            <div className="flex flex-col items-center bg-neutral-100 shadow-md w-[93%] justify-center text-center mx-auto">
              <img 
                src="/assets/Khwaahish-Store-img.jpg" 
                alt="Legacy of Khwaahish"
                className="w-full h-[280px] sm:h-[390px] md:h-[530px] object-cover "
              />
              <div className="w-full p-4 sm:p-6 text-center">
                <h3 className="text-2xl sm:text-3xl mb-3 font-medium tracking-wider leading-tight" id="bigfont">Legacy of Khwaahish</h3>
                <p className="text-gray-500 text-xs sm:text-sm tracking-wider leading-5">20+ Years of Crafting Unforgettable Jewellery—Blending Tradition with Modern Flair</p>
              </div>
            </div>

            <div className="flex flex-col items-center bg-neutral-100 shadow-md w-[93%] justify-center text-center mx-auto">
              <img 
                src="/assets/Curators-Tale-with-watermark-img.jpg" 
                alt="Curator's Tale"
                className="w-full h-[280px] sm:h-[390px] md:h-[530px] object-cover"
              />
              <div className="w-full p-4 sm:p-6 text-center">
                <h3 className="text-2xl sm:text-3xl mb-2 tracking-wider" id="bigfont">Curator&apos;s Tale</h3>
                <p className="text-gray-500 text-xs sm:text-sm tracking-wider leading-5">Our brand represents our desire to create exquisite, beautiful and high-quality diamond jewellery that is as special as you. <br></br><br></br>Explore our collection at the Queen of Hearts Galleria and experience a world of Diamond Jewellery, truly Different by Design.</p>
              </div>
            </div>

            <div className="flex flex-col items-center shadow-md w-[93%] justify-center text-center mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 w-full">
                <div className="border-[0.00001rem] border-gray-200 flex bg-white flex-col items-center justify-center p-4">
                  <img src="/assets/Promise-Sec-Icons-1.svg" alt="Icon 1" className="w-8 h-8 md:w-10 md:h-10"/>
                  <p className="text-[10px] md:text-xs mt-2 px-2 md:px-6">BIS Hallmarked</p>
                </div>
                <div className="border-[0.00001rem] border-gray-200 bg-neutral-100 flex flex-col items-center justify-center p-4">
                  <img src="/assets/Promise-Sec-Icons-2.svg" alt="Icon 2" className="w-8 h-8 md:w-10 md:h-10"/>
                  <p className="text-[10px] md:text-xs mt-2 px-2 md:px-6">Assured time maintanance</p>
                </div>
                <div className="border-[0.00001rem] border-gray-200 flex bg-white flex-col items-center justify-center p-4">
                  <img src="/assets/Promise-Sec-Icons-3.svg" alt="Icon 3" className="w-8 h-8 md:w-10 md:h-10"/>
                  <p className="text-[10px] md:text-xs mt-2 px-2 md:px-6">Life time Exchange</p>
                </div>
                <div className="border-[0.00001rem] border-gray-200 bg-neutral-100 flex flex-col items-center justify-center p-4">
                  <img src="/assets/Promise-Sec-Icons-4.svg" alt="Icon 4" className="w-8 h-8 md:w-10 md:h-10"/>
                  <p className="text-[10px] md:text-xs mt-2 px-2 md:px-6">Free 1 year warranty</p>
                </div>
                <div className="border-[0.00001rem] border-gray-200 flex bg-white flex-col items-center justify-center p-4">
                  <img src="/assets/Promise-Sec-Icons-5.svg" alt="Icon 5" className="w-8 h-8 md:w-10 md:h-10"/>
                  <p className="text-[10px] md:text-xs mt-2 px-2 md:px-6">Different by Design Unique designs with a World</p>
                </div>
                <div className="border-[0.00001rem] border-gray-200 bg-neutral-100 flex flex-col items-center justify-center p-4">
                  <img src="/assets/Promise-Sec-Icons-6.svg" alt="Icon 6" className="w-8 h-8 md:w-10 md:h-10"/>
                  <p className="text-[10px] md:text-xs mt-2 px-2 md:px-6">0% Deduction old Gold exchange</p>
                </div>
                <div className="border-[0.00001rem] border-gray-200 flex bg-white flex-col items-center justify-center p-4">
                  <img src="/assets/Promise-Sec-Icons-7.svg" alt="Icon 7" className="w-8 h-8 md:w-10 md:h-10"/>
                  <p className="text-[10px] md:text-xs mt-2 px-2 md:px-6">Free and insured shipping across India</p>
                </div>
                <div className="border-[0.00001rem] border-gray-200 bg-neutral-100 flex flex-col items-center justify-center p-4">
                  <img src="/assets/Promise-Sec-Icons-8.svg" alt="Icon 8" className="w-8 h-8 md:w-10 md:h-10"/>
                  <p className="text-[10px] md:text-xs mt-2 px-2 md:px-6">Personalized Shopping Experience</p>
                </div>
                <div className="col-span-2 md:col-span-1 border-[0.00001rem] bg-white border-gray-200 flex flex-col items-center justify-center p-4">
                  <img src="/assets/Promise-Sec-Icons-9.png" alt="Icon 9" className="w-32 h-7 md:w-28 md:h-9"/>
                  <p className="text-[10px] md:text-xs mt-2 px-2 md:px-6">&quot;Natural Diamonds&quot; Certification by International Gemological Laboratories</p>
                </div>
              </div>
              <div className="w-full p-4 sm:p-6 text-center">
                <h3 className="text-2xl sm:text-3xl mb-2 tracking-wider" id="bigfont">The Brand Promise</h3>
                <p className="text-gray-500 text-xs sm:text-sm tracking-wider leading-6">Pure, Natural Diamonds. Designed to Reflect the Real You. </p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}

export default SwiperContainer
