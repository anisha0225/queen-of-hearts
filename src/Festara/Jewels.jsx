


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import "../App.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect, useState, useRef } from 'react';

const Jewels = () => {
  const slides = [
    // First Set
    [
      '/assets/Festara-Carousal-Images-1.jpg',
      '/assets/Festara-Carousal-Images-6.jpg',
      '/assets/Festara-Carousal-Images-2.jpg',
    ],
    // Second Set  
    [
      '/assets/Festara-Carousal-Images-4.jpg',
      '/assets/Festara-Carousal-Images-3.jpg',
      '/assets/Festara-Carousal-Images-5.jpg',
    ]
  ];

  // Flatten array for mobile view
  const mobileSlides = slides.flat();
  const swiperRef = useRef(null);

  return (
    <div className="flex flex-col items-center pb-8">
      <div className="flex flex-col items-center justify-center px-4 sm:px-0">
        <div className="flex items-center justify-center mb-3">
          <hr className="w-8 sm:w-16 h-0.5 bg-gray-700 border-0 rounded" />
          <span className="text-lg sm:text-3xl text-gray-700 mx-2 sm:mx-4">Jewels at a Glance</span>
          <hr className="w-8 sm:w-16 h-0.5 bg-gray-700 border-0 rounded" />
        </div>
        <p className='pt-4 md:pt-8 lg:pt-2 leading-7 font-centuryGothic w-full md:w-[80%] lg:w-[80%] xl:w-[75%] text-center text-[#757575] text-sm md:text-m lg:text-m tracking-widest'>
          A dazzling showcase of handpicked gemstones, crafted to elevate your every moment with unmatched brilliance and boldness. All designs can be customized as per your requirements.
        </p>
      </div>

      <div className="w-full overflow-hidden pb-12">
        <section className="py-4 sm:py-4 md:py-4">
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
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => {
                  const dots = document.querySelectorAll('.slide-dot');
                  dots.forEach((dot, index) => {
                    if (index === swiper.realIndex) {
                      dot.classList.add('w-8', 'bg-black');
                      dot.classList.remove('w-2', 'bg-gray-400');
                    } else {
                      dot.classList.remove('w-8', 'bg-black');
                      dot.classList.add('w-2', 'bg-gray-400');
                    }
                  });
                }}
              >
                {slides.map((slideSet, setIndex) => (
                  <SwiperSlide key={setIndex} className="cursor-grab active:cursor-grabbing">
                    <div className="flex gap-5">
                      {slideSet.map((src, index) => (
                        <div key={index} className="flex-1">
                          <img
                            src={src}
                            alt={`Slide ${setIndex * 3 + index + 1}`}
                            className="w-full h-[500px] object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="absolute -bottom-12 left-0 right-0 flex justify-center items-center space-x-1 z-10">
                <div className="swiper-button-prev !text-black !font-extrabold transition-transform !static !w-8 !h-8 !mt-0 after:!text-xl cursor-pointer"></div>
                {slides.map((_, index) => (
                  <span
                    key={index}
                    className={`slide-dot h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      index === 0 ? 'w-8 bg-black' : 'w-2 bg-gray-400'
                    }`}
                    onClick={() => {
                      if (swiperRef.current) {
                        swiperRef.current.slideTo(index);
                      }
                    }}
                  ></span>
                ))}
                <div className="swiper-button-next !text-black !font-extrabold transition-transform !static !w-8 !h-8 !mt-0 after:!text-xl cursor-pointer"></div>
              </div>
            </div>

            {/* For mobile screens */}
            <div className="md:hidden relative">
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={10}
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
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => {
                  const dots = document.querySelectorAll('.slide-dot-mobile');
                  dots.forEach((dot, index) => {
                    if (index === swiper.realIndex) {
                      dot.classList.add('w-8', 'bg-black');
                      dot.classList.remove('w-2', 'bg-gray-400');
                    } else {
                      dot.classList.remove('w-8', 'bg-black');
                      dot.classList.add('w-2', 'bg-gray-400');
                    }
                  });
                }}
              >
                {mobileSlides.map((src, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={src}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-[300px] object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="absolute -bottom-12 left-0 right-0 flex justify-center items-center space-x-1 z-10">
                <div className="swiper-button-prev !text-black !font-extrabold transition-transform !static !w-8 !h-8 !mt-0 after:!text-xl cursor-pointer"></div>
                {mobileSlides.map((_, index) => (
                  <span
                    key={index}
                    className={`slide-dot-mobile h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      index === 0 ? 'w-8 bg-black' : 'w-2 bg-gray-400'
                    }`}
                    onClick={() => {
                      if (swiperRef.current) {
                        swiperRef.current.slideTo(index);
                      }
                    }}
                  ></span>
                ))}
                <div className="swiper-button-next !text-black !font-extrabold transition-transform !static !w-8 !h-8 !mt-0 after:!text-xl cursor-pointer"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Jewels;
