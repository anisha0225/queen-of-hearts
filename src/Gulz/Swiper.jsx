import React, { useRef } from "react";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Helmet } from "react-helmet";
import "swiper/css";
import "swiper/css/navigation";

const SwiperDemo = () => {
  const swiperRef = useRef();

  return (
    <>
      <Helmet>
        <title>Our Brand Story & Heritage | Gulz Jewelry</title>
        <meta name="description" content="Discover the legacy of Khwaahish Diamonds, our brand promise, and the curator's tale. Experience our fusion of traditional Indian craftsmanship with contemporary design." />
        <meta name="keywords" content="Gulz jewelry heritage, Khwaahish Diamonds, Indian jewelry craftsmanship, luxury diamond jewelry, ethical diamonds, handcrafted jewelry" />
        <meta property="og:title" content="Our Brand Story & Heritage | Gulz Jewelry" />
        <meta property="og:description" content="Discover the legacy of Khwaahish Diamonds, our brand promise, and the curator's tale. Experience our fusion of traditional Indian craftsmanship with contemporary design." />
        <meta name="twitter:title" content="Our Brand Story & Heritage | Gulz Jewelry" />
        <meta name="twitter:description" content="Discover the legacy of Khwaahish Diamonds, our brand promise, and the curator's tale. Experience our fusion of traditional Indian craftsmanship with contemporary design." />
      </Helmet>

      <div className="w-full min-h-screen flex justify-center items-center bg-[#F7ECEB] md:-mt-20">
        {/* Desktop View with Swiper */}
        <div className="relative h-[70vh] w-[80vw] hidden md:block">
          <button 
            className="absolute left-[-5%] top-1/2 z-10 cursor-pointer p-2 transition-all duration-300"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <IoIosArrowBack size={24} className="text-amber-950" />
          </button>
          <button
            className="absolute right-[-5%] top-1/2 z-10 cursor-pointer p-2 transition-all duration-300"
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
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            className="w-full h-full"
          >
            <SwiperSlide className="w-[50vw] h-full flex justify-between items-center">
              <div className="w-[100%] h-full flex">
                <div className="w-[60%] h-full">
                  <img className="w-full h-full object-cover" src="/assets/eshop/swipe1.avif" alt="Legacy of Khwaahish - Traditional Indian Jewelry Craftsmanship" />
                </div>
                <div className="w-[40%] h-full px-10 flex flex-col justify-center">
                  <h1 className="text-2xl md:text-[1.75rem] font-light uppercase text-amber-950 tracking-[0.4rem]">Legacy of <br /> Khwaahish</h1>
                  <p className="mt-7 font-light leading-loose tracking-widest text-sm text-gray-800">Launched by the mother brand Khwaahish Diamonds, Gulz also showcases the unmistakable Indian finesse that is an integral part of every creation. While all jewellery pieces is conceived, designed and crafted in India, the brand is fearless to experiment newer horizons.</p>
                  <p className="mt-7 font-light leading-loose tracking-widest text-sm text-gray-800">The fusion of traditional techniques and contemporary design is what has always set us apart. The end product is a delightful synergy between the designer's vision and the craftsmen's great skill – all done with painstaking attention to detail and achieving an impeccable finish.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-[50vw] h-full flex justify-between items-center">
              <div className="w-[100%] h-full flex">
                <div className="w-[60%] h-full">
                  <img className="w-full h-full object-cover" src="/assets/eshop/swipe2.avif" alt="The Curator's Tale - Luxury Diamond Jewelry Collection" />
                </div>
                <div className="w-[40%] h-full px-10 flex flex-col justify-center">
                  <h1 className="text-2xl md:text-[1.75rem] font-light uppercase text-amber-950 tracking-[0.4rem] md:-mt-5">The Curator's Tale</h1>
                  <p className="mt-9 font-light leading-loose tracking-widest text-sm text-gray-800">Our brand represents our desire to create exquisite, beautiful and high-quality diamond jewellery that is as special as you.</p>
                  <p className="mt-6 font-light leading-loose tracking-widest text-sm text-gray-800">Explore our collection at the Queen of Hearts Galleria and experience a world of Diamond Jewellery, truly Different by Design.</p>
                </div>

              </div>
            </SwiperSlide>
            <SwiperSlide className="w-[50vw] h-full flex justify-between items-center">
              <div className="w-[100%] h-full flex">
                <div className="w-[60%] h-full">
                  <img className="w-full h-full object-cover" src="/assets/eshop/swipe3.png" alt="The Brand Promise - Ethically Sourced Diamond Jewelry" />
                </div>
                <div className="w-[40%] h-full px-10 flex flex-col justify-center">
                  <h1 className="text-2xl md:text-[1.75rem] font-light uppercase text-amber-950 tracking-[0.4rem]">The Brand Promise</h1>
                  <p className="mt-10 font-light leading-loose tracking-widest text-sm text-gray-800">Natural diamonds and precious gemstones that have been sourced ethically only find way to the hands of our craftsmen. Each of it goes through a rigorous process of checking and authentication, which is a non compromising factor for our brand. Each jewellery piece thus created carries the Gulz promise of quality – certified as is by International Gemmological Labs.</p>
                </div>
              </div>
            </SwiperSlide>
          </SwiperComponent>
        </div>

        {/* Mobile View with Column Layout */}
        <div className="w-full px-4 py-8 flex flex-col gap-8 md:hidden">
          <div className="flex flex-col gap-6">
            <div className="w-full h-[300px]">
              <img className="w-full h-full object-cover" src="/assets/eshop/swipe1.avif" alt="Legacy of Khwaahish - Traditional Indian Jewelry Craftsmanship" />
            </div>
            <div className="px-4">
              <h1 className="text-2xl font-light uppercase text-amber-950 tracking-widest">Legacy of Khwaahish</h1>
              <p className="mt-4 font-light leading-relaxed tracking-wide">Launched by the mother brand Khwaahish Diamonds, Gulz also showcases the unmistakable Indian finesse that is an integral part of every creation. While all jewellery pieces is conceived, designed and crafted in India, the brand is fearless to experiment newer horizons.</p>
              <p className="mt-4 font-light leading-relaxed tracking-wide">The fusion of traditional techniques and contemporary design is what has always set us apart. The end product is a delightful synergy between the designer's vision and the craftsmen's great skill – all done with painstaking attention to detail and achieving an impeccable finish.</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="w-full h-[300px]">
              <img className="w-full h-full object-cover" src="/assets/eshop/swipe2.avif" alt="The Curator's Tale - Luxury Diamond Jewelry Collection" />
            </div>
            <div className="px-4">
              <h1 className="text-2xl font-light uppercase text-amber-950 tracking-widest">The Curator's Tale</h1>
              <p className="mt-4 font-light leading-relaxed tracking-wide">Our brand represents our desire to create exquisite, beautiful and high-quality diamond jewellery that is as special as you.</p>
              <p className="mt-4 font-light leading-relaxed tracking-wide">Explore our collection at the Queen of Hearts Galleria and experience a world of Diamond Jewellery, truly Different by Design.</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="w-full h-[300px]">
              <img className="w-full h-full object-cover" src="/assets/eshop/swipe3.png" alt="The Brand Promise - Ethically Sourced Diamond Jewelry" />
            </div>
            <div className="px-4">
              <h1 className="text-2xl font-light uppercase text-amber-950 tracking-widest">The Brand Promise</h1>
              <p className="mt-4 font-light leading-relaxed tracking-wide">Natural diamonds and precious gemstones that have been sourced ethically only find way to the hands of our craftsmen. Each of it goes through a rigorous process of checking and authentication, which is a non compromising factor for our brand. Each jewellery piece thus created carries the Gulz promise of quality – certified as is by International Gemmological Labs.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SwiperDemo;
