import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const BrandSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <div>
      <section className="-mt-5 mb-20">
        <div className="max-w-screen-2xl mx-3 px-6">
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
                onSwiper={setSwiperInstance}
                onSlideChange={(swiper) => {
                  setActiveIndex(swiper.realIndex);
                }}
              >
                <SwiperSlide className="cursor-grab active:cursor-grabbing">
                  <div className="flex flex-col md:flex-row items-center bg-neutral-100">
                    <img 
                      src="/assets/Khwaahish-Store-img.jpg" 
                      alt="Legacy of Khwaahish"
                      className="w-full md:w-[85rem] h-[530px] object-cover"
                    />
                    <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0 text-center">
                      <h3 className="text-5xl mb-4 font-medium text-center px-20 tracking-wider leading-tight" id="bigfont">Legacy of Khwaahish</h3>
                      <p className="text-gray-500 px-14 text-sm tracking-wider leading-5">20+ Years of Crafting Unforgettable Jewellery—Blending Tradition with Modern Flair</p>
                    </div>
                  </div>
                </SwiperSlide>
                
                <SwiperSlide className="cursor-grab active:cursor-grabbing">
                  <div className="flex flex-col md:flex-row items-center bg-neutral-100">
                    <img 
                      src="/assets/Curators-Tale-with-watermark-img.jpg" 
                      alt="Curator's Tale"
                      className="w-full md:w-[85rem] h-[530px] object-cover"
                    />
                    <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0 text-center">
                      <h3 className="text-5xl mb-2 tracking-wider" id="bigfont">Curator&apos;s Tale</h3>
                      <p className="text-gray-500 px-14 text-sm tracking-wider leading-6">Our brand represents our desire to create exquisite, beautiful and high-quality diamond jewellery that is as special as you.<br></br>Explore our collection at the Queen of Hearts Galleria and experience a world of Diamond Jewellery, truly Different by Design.</p>
                    </div>
                  </div>
                </SwiperSlide>
                
                <SwiperSlide className="cursor-grab active:cursor-grabbing">
                  <div className="flex flex-col md:flex-row items-center bg-neutral-100">
                    <img 
                      src="/assets/brand.png" 
                      alt="Brand Promise"
                      className="w-full md:w-[85rem] h-[530px] object-fill"
                    />
                    <div className="md:w-1/2 md:pl-2 mt-4 md:mt-0 text-center">
                      <h3 className="text-5xl mb-2 tracking-wider px-5" id="bigfont">The Brand Promise</h3>
                      <p className="text-gray-500 px-14 text-sm tracking-wider leading-6">Pure, Natural Diamonds. Designed to Reflect the Real You. </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="absolute -bottom-12 left-0 right-0 flex justify-center items-center space-x-1 z-10">
                <div className="swiper-button-prev !text-black !font-extrabold transition-transform !static !w-8 !h-8 !mt-0 after:!text-xl cursor-pointer"></div>
                {[...Array(3)].map((_, index) => (
                  <span
                    key={index}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      index === activeIndex ? 'w-8 bg-black' : 'w-2 bg-gray-400'
                    }`}
                    onClick={() => {
                      if (swiperInstance) {
                        swiperInstance.slideTo(index);
                        setActiveIndex(index);
                      }
                    }}
                  ></span>
                ))}
                <div className="swiper-button-next !text-black !font-extrabold transition-transform !static !w-8 !h-8 !mt-0 after:!text-xl cursor-pointer"></div>
              </div>
            </div>

            {/* For mobile screens */}
            <div className="md:hidden space-y-8">
              <div className="flex flex-col items-center bg-neutral-100">
                <img 
                  src="/assets/Khwaahish-Store-img.jpg" 
                  alt="Legacy of Khwaahish"
                  className="w-full h-[300px] object-cover"
                />
                <div className="w-full p-6 text-center">
                  <h3 className="text-3xl mb-4 font-medium tracking-wider leading-tight" id="bigfont">Legacy of Khwaahish</h3>
                  <p className="text-gray-500 text-sm tracking-wider leading-5">20+ Years of Crafting Unforgettable Jewellery—Blending Tradition with Modern Flair</p>
                </div>
              </div>

              <div className="flex flex-col items-center bg-neutral-100">
                <img 
                  src="/assets/Curators-Tale-with-watermark-img.jpg" 
                  alt="Curator's Tale"
                  className="w-full h-[300px] object-cover"
                />
                <div className="w-full p-6 text-center">
                  <h3 className="text-3xl mb-2 tracking-wider" id="bigfont">Curator&apos;s Tale</h3>
                  <p className="text-gray-500 text-sm tracking-wider leading-6">Our brand represents our desire to create exquisite, beautiful and high-quality diamond jewellery that is as special as you. Explore our collection at the Queen of Hearts Galleria and experience a world of Diamond Jewellery, truly Different by Design.</p>
                </div>
              </div>

              <div className="flex flex-col items-center bg-neutral-100">
                <img 
                  src="/assets/brand.png" 
                  alt="Brand Promise"
                  className="w-full h-[300px] object-fill"
                />
                <div className="w-full p-6 text-center">
                  <h3 className="text-3xl mb-2 tracking-wider" id="bigfont">The Brand Promise</h3>
                  <p className="text-gray-500 text-sm tracking-wider leading-6">Pure, Natural Diamonds. Designed to Reflect the Real You.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandSlider;
