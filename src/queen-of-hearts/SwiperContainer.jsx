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

  return (
    <section ref={swiperRef} className="py-10">
      <div className="max-w-screen-3xl mx-auto px-4 sm:px-8 lg:px-14">
        <div className="relative">
          {/* For larger screens */}
          <div className="hidden md:block">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="relative"
              onSlideChange={(swiper) => {
                const dots = document.querySelectorAll('.slide-dot');
                dots.forEach((dot, index) => {
                  if (index === swiper.realIndex) {
                    dot.classList.add('w-7', 'bg-black');
                    dot.classList.remove('w-2', 'bg-gray-400');
                  } else {
                    dot.classList.remove('w-7', 'bg-black');
                    dot.classList.add('w-2', 'bg-gray-400');
                  }
                });
              }}
            >
              <SwiperSlide className="cursor-grab active:cursor-grabbing">
                <div className="flex flex-col md:flex-row items-center bg-neutral-100">
                  <div className="w-full md:w-2/3">
                    <img 
                      src="/assets/Khwaahish-Store-img.jpg" 
                      alt="Slide 1"
                      className="w-full h-[300px] sm:h-[400px] md:h-[530px] object-cover"
                    />
                  </div>
                  <div className="w-full md:w-1/3 p-4 md:p-8 ">
                    <h3 className="text-2xl sm:text-3xl md:text-[2.6rem] mb-4 text-center tracking-widest md:px-3 leading-9" id="box">Legacy of Khwaahish</h3>
                    <p className="text-gray-500 text-xs sm:text-sm tracking-widest leading-6 md:px-2 text-center">20+ Years of Crafting Unforgettable Jewellery—Blending Tradition with Modern Flair</p>
                  </div>
                </div>
              </SwiperSlide>
              
              <SwiperSlide className="cursor-grab active:cursor-grabbing">
                <div className="flex flex-col md:flex-row items-center bg-neutral-100">
                  <div className="w-full md:w-2/3">
                    <img 
                      src="/assets/Curators-Tale-with-watermark-img.jpg" 
                      alt="Slide 2"
                      className="w-full h-[300px] sm:h-[400px] md:h-[530px] object-cover"
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
                <div className="flex flex-col md:flex-row items-center bg-neutral-100">
                  <div className="w-full md:w-2/3">
                    <img 
                      src="/assets/brand.png" 
                      alt="Slide 3"
                      className="w-full h-[300px] sm:h-[400px] md:h-[530px] object-cover"
                    />
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
                <span
                  key={index}
                  className={`slide-dot h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    index === 0 ? 'w-7 bg-black' : 'w-2 bg-gray-400'
                  }`}
                  onClick={() => {
                    const swiper = document.querySelector('.swiper').swiper;
                    swiper.slideTo(index);
                    const dots = document.querySelectorAll('.slide-dot');
                    dots.forEach((dot, i) => {
                      if (i === index) {
                        dot.classList.add('w-7', 'bg-black');
                        dot.classList.remove('w-2', 'bg-gray-400');
                      } else {
                        dot.classList.remove('w-7', 'bg-black');
                        dot.classList.add('w-2', 'bg-gray-400');
                      }
                    });
                  }}
                ></span>
              ))}
              <div className="swiper-button-next !text-black !font-extrabold transition-transform !static !w-8 !h-8 !mt-0 after:!text-xl cursor-pointer"></div>
            </div>
          </div>

          {/* For mobile screens */}
          <div className="md:hidden space-y-6">
            <div className="flex flex-col items-center bg-neutral-100">
              <img 
                src="/assets/Khwaahish-Store-img.jpg" 
                alt="Legacy of Khwaahish"
                className="w-full h-[250px] sm:h-[300px] object-cover"
              />
              <div className="w-full p-4 sm:p-6 text-center">
                <h3 className="text-2xl sm:text-3xl mb-3 font-medium tracking-wider leading-tight" id="bigfont">Legacy of Khwaahish</h3>
                <p className="text-gray-500 text-xs sm:text-sm tracking-wider leading-5">20+ Years of Crafting Unforgettable Jewellery—Blending Tradition with Modern Flair</p>
              </div>
            </div>

            <div className="flex flex-col items-center bg-neutral-100">
              <img 
                src="/assets/Curators-Tale-with-watermark-img.jpg" 
                alt="Curator's Tale"
                className="w-full h-[250px] sm:h-[300px] object-cover"
              />
              <div className="w-full p-4 sm:p-6 text-center">
                <h3 className="text-2xl sm:text-3xl mb-2 tracking-wider" id="bigfont">Curator&apos;s Tale</h3>
                <p className="text-gray-500 text-xs sm:text-sm tracking-wider leading-6">Our brand represents our desire to create exquisite, beautiful and high-quality diamond jewellery that is as special as you. Explore our collection at the Queen of Hearts Galleria and experience a world of Diamond Jewellery, truly Different by Design.</p>
              </div>
            </div>

            <div className="flex flex-col items-center bg-neutral-100">
              <img 
                src="/assets/brand.png" 
                alt="Brand Promise"
                className="w-full h-[250px] sm:h-[300px] object-cover"
              />
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
