import { useRef, useState } from "react";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, FreeMode } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Helmet } from "react-helmet";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

const SwiperDemo = () => {
  const swiperRef = useRef();
  const [isDragging, setIsDragging] = useState(false);

  return (
    <>
      <Helmet>
        <title>Our Brand Story & Heritage | Gulz Jewelry</title>
        <meta name="description" content="Discover the legacy of Khwaahish Diamonds, our brand promise, and the curator&apos;s tale. Experience our fusion of traditional Indian craftsmanship with contemporary design." />
        <meta name="keywords" content="Gulz jewelry heritage, Khwaahish Diamonds, Indian jewelry craftsmanship, luxury diamond jewelry, ethical diamonds, handcrafted jewelry" />
        <meta property="og:title" content="Our Brand Story & Heritage | Gulz Jewelry" />
        <meta property="og:description" content="Discover the legacy of Khwaahish Diamonds, our brand promise, and the curator&apos;s tale. Experience our fusion of traditional Indian craftsmanship with contemporary design." />
        <meta name="twitter:title" content="Our Brand Story & Heritage | Gulz Jewelry" />
        <meta name="twitter:description" content="Discover the legacy of Khwaahish Diamonds, our brand promise, and the curator&apos;s tale. Experience our fusion of traditional Indian craftsmanship with contemporary design." />
      </Helmet>

      <div className="w-full min-h-[20vw] flex justify-center items-center bg-[#F7ECEB] lg:mt-0 xl:-mt-6 md:-mt-32">
        {/* Desktop View with Swiper */}
        <div className="relative w-[95%] lg:w-[90%] xl:w-[85%] 2xl:w-[80%] h-auto min-h-[10vw] lg:min-h-[60vw] xl:min-h-[40vw] hidden lg:block lg:mt-6 xl:mt-10">
          <button 
            className="absolute left-2 lg:left-[-3%] xl:left-[-5%] top-1/2 z-10 cursor-pointer p-2 transition-all duration-300"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <IoIosArrowBack size={24} className="text-amber-950" />
          </button>
          <button
            className="absolute right-2 lg:right-[-3%] xl:right-[-5%] top-1/2 z-10 cursor-pointer p-2 transition-all duration-300"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <IoIosArrowForward size={24} className="text-amber-950" />
          </button>
          <SwiperComponent
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            modules={[Navigation, Autoplay, FreeMode]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            freeMode={{
              enabled: true,
              sticky: false,
              momentumRatio: 0.25
            }}
            grabCursor={true}
            onSliderMove={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            className={`w-full h-full ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
          >
            <SwiperSlide className="w-full h-full">
              <div className="flex flex-col lg:flex-row h-full items-center">
                <div className="w-full lg:w-[50%] xl:w-[55%] 2xl:w-[60%] h-[300px] lg:h-full flex items-center justify-center">
                  <img className="w-full h-full object-contain lg:object-cover" src="/assets/eshop/swipe1.avif" alt="Legacy of Khwaahish - Traditional Indian Jewelry Craftsmanship" />
                </div>
                <div className="w-full lg:w-[50%] xl:w-[45%] 2xl:w-[40%] p-4 lg:p-6 xl:p-8 flex flex-col justify-center">
                  <h1 className="text-xl sm:text-2xl xl:text-[1.75rem] font-light uppercase text-amber-950 tracking-[0.2rem] lg:tracking-[0.4rem]">Legacy of <br /> Khwaahish</h1>
                  <p className="mt-4 lg:mt-7 font-light leading-relaxed lg:leading-loose tracking-wide lg:tracking-widest text-sm text-gray-800">Launched by the mother brand Khwaahish Diamonds, Gulz also showcases the unmistakable Indian finesse that is an integral part of every creation. While all jewellery pieces is conceived, designed and crafted in India, the brand is fearless to experiment newer horizons.</p>
                  <p className="mt-4 lg:mt-7 font-light leading-relaxed lg:leading-loose tracking-wide lg:tracking-widest text-sm text-gray-800">The fusion of traditional techniques and contemporary design is what has always set us apart. The end product is a delightful synergy between the designer&apos;s vision and the craftsmen&apos;s great skill – all done with painstaking attention to detail and achieving an impeccable finish.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <div className="flex flex-col lg:flex-row h-full items-center">
                <div className="w-full lg:w-[50%] xl:w-[55%] 2xl:w-[60%] h-[300px] lg:h-full flex items-center justify-center">
                  <img className="w-full h-full object-contain lg:object-cover" src="/assets/eshop/swipe2.avif" alt="The Curator&apos;s Tale - Luxury Diamond Jewelry Collection" />
                </div>
                <div className="w-full lg:w-[50%] xl:w-[45%] 2xl:w-[40%] p-4 lg:p-6 xl:p-8 flex flex-col justify-center">
                  <h1 className="text-xl sm:text-2xl xl:text-[1.75rem] font-light uppercase text-amber-950 tracking-[0.2rem] lg:tracking-[0.4rem]">The Curator&apos;s Tale</h1>
                  <p className="mt-4 lg:mt-9 font-light leading-relaxed lg:leading-loose tracking-wide lg:tracking-widest text-sm text-gray-800">Our brand represents our desire to create exquisite, beautiful and high-quality diamond jewellery that is as special as you.</p>
                  <p className="mt-4 lg:mt-6 font-light leading-relaxed lg:leading-loose tracking-wide lg:tracking-widest text-sm text-gray-800">Explore our collection at the Queen of Hearts Galleria and experience a world of Diamond Jewellery, truly Different by Design.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <div className="flex flex-col lg:flex-row h-full items-center">
                <div className="w-full lg:w-[50%] xl:w-[55%] 2xl:w-[60%] h-[300px] lg:h-full flex items-center justify-center">
                  <img className="w-full h-full object-contain lg:object-cover" src="/assets/eshop/swipe3.png" alt="The Brand Promise - Ethically Sourced Diamond Jewelry" />
                </div>
                <div className="w-full lg:w-[50%] xl:w-[45%] 2xl:w-[40%] p-4 lg:p-6 xl:p-8 flex flex-col justify-center">
                  <h1 className="text-xl sm:text-2xl xl:text-[1.75rem] font-light uppercase text-amber-950 tracking-[0.2rem] lg:tracking-[0.4rem]">The Brand Promise</h1>
                  <p className="mt-4 lg:mt-10 font-light leading-relaxed lg:leading-loose tracking-wide lg:tracking-widest text-sm text-gray-800">Natural diamonds and precious gemstones that have been sourced ethically only find way to the hands of our craftsmen. Each of it goes through a rigorous process of checking and authentication, which is a non compromising factor for our brand. Each jewellery piece thus created carries the Gulz promise of quality – certified as is by International Gemmological Labs.</p>
                </div>
              </div>
            </SwiperSlide>
          </SwiperComponent>
        </div>

        {/* Mobile View with Column Layout */}
        <div className="w-full px-12 py-8 flex flex-col gap-8 lg:hidden">
          <div className="flex flex-col gap-6">
            <div className="w-full h-[250px] sm:h-[300px] md:h-[520px]">
              <img className="w-full h-full object-cover" src="/assets/eshop/swipe1.avif" alt="Legacy of Khwaahish - Traditional Indian Jewelry Craftsmanship" />
            </div>
            <div className="px-4 text-center">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-light uppercase text-amber-950 tracking-widest">Legacy of Khwaahish</h1>
              <p className="mt-4 font-light leading-relaxed tracking-wide text-sm sm:text-base md:text-lg">Launched by the mother brand Khwaahish Diamonds, Gulz also showcases the unmistakable Indian finesse that is an integral part of every creation. While all jewellery pieces is conceived, designed and crafted in India, the brand is fearless to experiment newer horizons.</p>
              <p className="mt-4 font-light leading-relaxed tracking-wide text-sm sm:text-base md:text-lg">The fusion of traditional techniques and contemporary design is what has always set us apart. The end product is a delightful synergy between the designer&apos;s vision and the craftsmen&apos;s great skill – all done with painstaking attention to detail and achieving an impeccable finish.</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="w-full h-[250px] sm:h-[300px] md:h-[520px]">
              <img className="w-full h-full object-cover" src="/assets/eshop/swipe2.avif" alt="The Curator&apos;s Tale - Luxury Diamond Jewelry Collection" />
            </div>
            <div className="px-4 text-center">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-light uppercase text-amber-950 tracking-widest">The Curator&apos;s Tale</h1>
              <p className="mt-4 font-light leading-relaxed tracking-wide text-sm sm:text-base md:text-lg">Our brand represents our desire to create exquisite, beautiful and high-quality diamond jewellery that is as special as you.</p>
              <p className="mt-4 font-light leading-relaxed tracking-wide text-sm sm:text-base md:text-lg">Explore our collection at the Queen of Hearts Galleria and experience a world of Diamond Jewellery, truly Different by Design.</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
              <div className="grid grid-cols-2 md:grid-cols-3 w-full h-full">
                <div className="border-[0.00001rem] flex flex-col items-center justify-center p-4">
                  <img src="/assets/Promise-Sec-Icons-1.svg" alt="Icon 1" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"/>
                  <p className="text-[8px] sm:text-[10px] md:text-xs mt-2 px-2 md:px-6 text-center">BIS Hallmarked</p>
                </div>
                <div className="border-[0.00001rem] border-gray-200 bg-gray-800/10 flex flex-col items-center justify-center p-4">
                  <img src="/assets/Promise-Sec-Icons-2.svg" alt="Icon 2" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"/>
                  <p className="text-[8px] sm:text-[10px] md:text-xs mt-2 px-2 md:px-6 text-center">Assured time maintanance</p>
                </div>
                <div className="border-[0.00001rem] border-gray-200 flex flex-col items-center justify-center p-4">
                  <img src="/assets/Promise-Sec-Icons-3.svg" alt="Icon 3" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"/>
                  <p className="text-[8px] sm:text-[10px] md:text-xs mt-2 px-2 md:px-6 text-center">Life time Exchange</p>
                </div>
                <div className="border-[0.00001rem] border-gray-200 bg-gray-800/10 flex flex-col items-center justify-center p-4">
                  <img src="/assets/Promise-Sec-Icons-4.svg" alt="Icon 4" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"/>
                  <p className="text-[8px] sm:text-[10px] md:text-xs mt-2 px-2 md:px-6 text-center">Free 1 year warranty</p>
                </div>
                <div className="border-[0.00001rem] border-gray-200 flex flex-col items-center justify-center p-4">
                  <img src="/assets/Promise-Sec-Icons-5.svg" alt="Icon 5" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"/>
                  <p className="text-[8px] sm:text-[10px] md:text-xs mt-2 px-2 md:px-6 text-center">Different by Design Unique designs with a World</p>
                </div>
                <div className="border-[0.00001rem] border-gray-200 bg-gray-800/10 flex flex-col items-center justify-center p-4">
                  <img src="/assets/Promise-Sec-Icons-6.svg" alt="Icon 6" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"/>
                  <p className="text-[8px] sm:text-[10px] md:text-xs mt-2 px-2 md:px-6 text-center">0% Deduction old Gold exchange</p>
                </div>
                <div className="border-[0.00001rem] border-gray-200 flex flex-col items-center justify-center p-4">
                  <img src="/assets/Promise-Sec-Icons-7.svg" alt="Icon 7" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"/>
                  <p className="text-[8px] sm:text-[10px] md:text-xs mt-2 px-2 md:px-6 text-center">Free and insured shipping across India</p>
                </div>
                <div className="border-[0.00001rem] border-gray-200 bg-gray-800/10 flex flex-col items-center justify-center p-4">
                  <img src="/assets/Promise-Sec-Icons-8.svg" alt="Icon 8" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"/>
                  <p className="text-[8px] sm:text-[10px] md:text-xs mt-2 px-2 md:px-6 text-center">Personalized Shopping Experience</p>
                </div>
                <div className="col-span-2 md:col-span-1 border-[0.00001rem] border-gray-200 flex flex-col items-center justify-center p-4">
                  <img src="/assets/Promise-Sec-Icons-9.png" alt="Icon 9" className="w-24 h-5 sm:w-32 sm:h-7 md:w-28 md:h-9"/>
                  <p className="text-[8px] sm:text-[10px] md:text-xs mt-2 px-2 md:px-6 text-center">&quot;Natural Diamonds&quot; Certification by International Gemological Laboratories</p>
                </div>
              </div>
              <div className="px-4 text-center">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-light uppercase text-amber-950 tracking-widest">The Brand Promise</h1>
                <p className="mt-4 font-light leading-relaxed tracking-wide text-sm sm:text-base md:text-lg">Natural diamonds and precious gemstones that have been sourced ethically only find way to the hands of our craftsmen. Each of it goes through a rigorous process of checking and authentication, which is a non compromising factor for our brand. Each jewellery piece thus created carries the Gulz promise of quality – certified as is by International Gemmological Labs.</p>
              </div>
            </div>
        </div>

        
      </div>
    </>
  );
};

export default SwiperDemo;
