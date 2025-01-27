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
      '/assets/Fazza-Carousel-Imgs-1.jpg',
      '/assets/Fazza-Carousel-Imgs-5.jpg',
      '/assets/Fazza-Carousel-Imgs-4.jpg',
    ],

    // Second Set  
    [
      '/assets/Fazza-Carousel-Imgs-7.jpg',
      '/assets/Fazza-Carousel-Imgs-6.jpg',
      '/assets/Fazza-Carousel-Imgs-8.jpg',
    ],
    [
      '/assets/Fazza-Carousel-Imgs-9.jpg',
      '/assets/Fazza-Carousel-Imgs-3.jpg',
      '/assets/Fazza-Carousel-Imgs-2.jpg',
    ],
  ];

  // Flatten array for different views
  const mobileSlides = slides.flat();
  const tabletSlides = mobileSlides.reduce((acc, curr, i) => {
    if (i % 2 === 0) {
      acc.push([curr, mobileSlides[(i + 1) % mobileSlides.length]]);
    }
    return acc;
  }, []);
  
  const swiperRef = useRef(null);

  return (
    <div className="flex flex-col items-center pb-8 ">
      <div className="flex flex-col items-center justify-center px-4 sm:px-0">
        <div className="flex items-center justify-center mb-3">
          <hr className="w-8 sm:w-16 h-0.5 bg-gray-700 border-0 rounded" />
          <span className="text-lg sm:text-3xl text-gray-700 mx-2 sm:mx-4">Jewels at a Glance</span>
          <hr className="w-8 sm:w-16 h-0.5 bg-gray-700 border-0 rounded" />
        </div>
        <p className='pt-4 md:pt-8 lg:pt-2 leading-7 font-centuryGothic w-full md:w-[80%] lg:w-[80%] xl:w-[75%] text-center text-[#757575] text-sm md:text-m lg:text-m tracking-widest'>
        A tribute to timeless elegance with pure, uncut diamonds that exude boldness, capturing your unique essence in every sparkle. All designs can be customized as per your requirements.
        </p>
      </div>

      <div className="w-full overflow-hidden pb-8 -z-10">
        <section className="py-4 sm:py-2 md:py-4 ">
          <div className="relative">
            {/* For desktop (1024px and above) */}
            <div className="hidden lg:block ">
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
                  const dots = document.querySelectorAll('.slide-dot-desktop');
                  dots.forEach((dot, index) => {
                    if (index === swiper.realIndex) {
                      dot.classList.add('w-8', 'bg-black');
                      dot.classList.remove('w-2', 'bg-gray-900');
                    } else {
                      dot.classList.remove('w-8', 'bg-black');
                      dot.classList.add('w-2', 'bg-gray-900');
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
                    className={`slide-dot-desktop h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      index === 0 ? 'w-8 bg-black' : 'w-2 bg-gray-900'
                    }`}
                    onClick={() => {
                      if (swiperRef.current) {
                        swiperRef.current.slideToLoop(index);
                      }
                    }}
                  ></span>
                ))}
                <div className="swiper-button-next !text-black !font-extrabold transition-transform !static !w-8 !h-8 !mt-0 after:!text-xl cursor-pointer"></div>
              </div>
            </div>

            {/* For tablet (765px to 1024px) */}
            <div className="hidden md:block lg:hidden">
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
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
                  const dots = document.querySelectorAll('.slide-dot-tablet');
                  dots.forEach((dot, index) => {
                    if (index === swiper.realIndex) {
                      dot.classList.add('w-8', 'bg-black');
                      dot.classList.remove('w-2', 'bg-gray-900');
                    } else {
                      dot.classList.remove('w-8', 'bg-black');
                      dot.classList.add('w-2', 'bg-gray-900');
                    }
                  });
                }}
              >
                {tabletSlides.map((pair, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex gap-5">
                      {pair.map((src, i) => (
                        <div key={i} className="flex-1">
                          <img
                            src={src}
                            alt={`Slide ${index * 2 + i + 1}`}
                            className="w-full h-[400px] object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="absolute -bottom-12 left-0 right-0 flex justify-center items-center space-x-1 z-10">
                <div className="swiper-button-prev !text-black !font-extrabold transition-transform !static !w-8 !h-8 !mt-0 after:!text-xl cursor-pointer"></div>
                {tabletSlides.map((_, index) => (
                  <span
                    key={index}
                    className={`slide-dot-tablet h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      index === 0 ? 'w-8 bg-black' : 'w-2 bg-gray-900'
                    }`}
                    onClick={() => {
                      if (swiperRef.current) {
                        swiperRef.current.slideToLoop(index);
                      }
                    }}
                  ></span>
                ))}
                <div className="swiper-button-next !text-black !font-extrabold transition-transform !static !w-8 !h-8 !mt-0 after:!text-xl cursor-pointer"></div>
              </div>
            </div>

            {/* For mobile screens (below 765px) */}
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
                      dot.classList.remove('w-2', 'bg-gray-900');
                    } else {
                      dot.classList.remove('w-8', 'bg-black');
                      dot.classList.add('w-2', 'bg-gray-900');
                    }
                  });
                }}
              >
                {mobileSlides.map((src, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={src}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-[420px] object-cover"
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
                      index === 0 ? 'w-8 bg-black' : 'w-2 bg-gray-900'
                    }`}
                    onClick={() => {
                      if (swiperRef.current) {
                        swiperRef.current.slideToLoop(index);
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
