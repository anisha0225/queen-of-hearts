import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const testimonialData = [
    {
      logo: "",
      data: "Seeing the spectacular designs at Khwaahish , my heart really desires to shop there very soon. This entire line is very customized, so lightweight and beautiful.. I am just loving them ",
      image: "/assets/eshop/testimonialPersons/swathi-rekha.avif",
      name: "Swathi Rekha",
      role: "Entrepreneur",
    },
    {
      logo: "",
      data: "I love the new collection Gulz… its simply beautiful. Every single piece is gorgeous, wearable and extremely well made. The entire look and feel is very international by all means. Khwaahish is family to me and their pieces are just stunning. ",
      image: "/assets/eshop/testimonialPersons/jyothi.avif",
      name: "Jyoti",
      role: "Entrepreneur",
    },
    {
      logo: "",
      data: "When it comes to Khwaahish.. its my go to place for smart jewellery. And regarding the collection, I love love the jacket chandelier diamond earrings and the other unique designs. It's so wearable and it's so me.  ",
      image: "/assets/eshop/testimonialPersons/pratibha.avif",
      name: "Pratibha  ",
      role: "Entrepreneur",
    },
    {
      logo: "",
      data: "With Khwaahish my journey started very long ago right from their inception in 2003. This collection  is something very different .. very sleek and elegant pieces. I love all the stuff at Khwaahish usually and its difficult to choose my favourite today. ",
      image: "/assets/eshop/testimonialPersons/Chhavi.avif",
      name: "Dr. Chhavi Kalra  ",
      role: "Singer/Artist",
    },
    {
      logo: "",
      data: "Khwaahish are our family jewellers for every right reason.. Their new collection Gulz, is so very fresh and some of the designs are very interesting too! I am sure I'll find many favourites among them as usual.",
      image: "/assets/eshop/testimonialPersons/Dimple.avif",
      name: "Dimple",
      role: "Home Maker",
    },
  ];

  const [swipe, setSwipe] = useState(window.innerWidth < 768 ? 1 : 3);

  React.useEffect(() => {
    const handleResize = () => {
      setSwipe(window.innerWidth < 768 ? 1 : 3);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDotClick = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <div className="w-full md:h-[110vh] bg-[#F7ECEB]">
    <h1 className="text-xl sm:text-2xl md:text-[1.7rem] text-center sm:mt-3 md:-mt-4 uppercase text-[#4F2426] tracking-[0.2rem] sm:tracking-[0.4rem] mb-6">
          Testimonals
          <span className="flex border-b-2 border-[#58282a] w-16 sm:w-20 md:w-24 mt-2 mx-auto "></span>
        </h1>

      <Swiper
        ref={swiperRef}
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={swipe}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-[90%] md:w-[80%] mx-auto"
      >
        <SwiperSlide>
          <div className="h-[55vh] cursor-pointer w-full md:w-[25vw] text-center bg-white p-8 flex flex-col justify-between">
            <div>
              <div className=" h-12 w-12 ">
                <img
                  className="w-full h-full object-contain"
                  src="/assets/eshop/testtimonialLogo.svg"
                  alt=""
                />
              </div>
              <p className="text-left mt-3 font-light text-[0.85rem] tracking-wider leading-6 text-gray-700">
                Seeing the spectacular designs at Khwaahish , my heart really
                desires to shop there very soon. This entire line is very
                customized, so lightweight and beautiful.. I am just loving
                them".{" "}
              </p>
            </div>

            <div className="w-full flex gap-5 items-center">
              <div className=" h-20 w-20 bg-red-500 rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/assets/eshop/testtimonialPersons/swathi-rekha.avif"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-amber-900 text-xl text-left">Swathi Rekha</h3>
                <p className="text-sm text-left font-light">Entrepreneur</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-[55vh] cursor-pointer w-full md:w-[25vw] text-center bg-white p-8 flex flex-col justify-between">
            <div>
              <div className=" h-12 w-12 ">
                <img
                  className="w-full h-full object-contain"
                  src="/assets/eshop/testtimonialLogo.svg"
                  alt=""
                />
              </div>
              <p className="text-left mt-3 font-light text-[0.85rem] tracking-widesr leading-6 text-gray-700">
                I love the new collection Gulz… its simply beautiful. Every single piece is gorgeous, wearable and extremely well made. The entire look and feel is very international by all means. Khwaahish is family to me and their pieces are just stunning.
              </p>
            </div>

            <div className="w-full flex gap-5 items-center">
              <div className=" h-20 w-20 bg-red-500 rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/assets/eshop/testtimonialPersons/jyothi.avif"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-amber-900 text-xl text-left">Jyoti</h3>
                <p className="text-sm text-left font-light">Entrepreneur</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-[55vh] cursor-pointer w-full md:w-[25vw] text-center bg-white p-8 flex flex-col justify-between">
            <div>
              <div className=' h-12 w-12 '>
                <img className='w-full h-full object-contain' src="/assets/eshop/testtimonialLogo.svg" alt="" />
              </div>
              <p className="text-left mt-3 font-light text-[0.85rem] tracking-wider leading-6 text-gray-700">
                When it comes to Khwaahish.. its my go to place for smart
                jewellery. And regarding the collection, I love love the jacket
                chandelier diamond earrings and the other unique designs. It's so
                wearable and it's so me.
              </p>
            </div>

            <div className='w-full flex gap-5 items-center'>
              <div className=" h-20 w-20 bg-red-500 rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/assets/eshop/testtimonialPersons/Pratibha.avif"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-amber-900 text-xl text-left">Pratibha</h3>
                <p className="text-sm text-left font-light">Entrepreneur</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-[55vh] cursor-pointer w-full md:w-[25vw] text-center bg-white p-8 flex flex-col justify-between">
            <div>
              <div className=' h-12 w-12 '>
                <img className='w-full h-full object-contain' src="/assets/eshop/testtimonialLogo.svg" alt="" />
              </div>
              <p className="text-left mt-3 font-light text-[0.85rem] tracking-wider leading-6 text-gray-700">
                With Khwaahish my journey started very long ago right from their
                inception in 2003. This collection is something very different
                .. very sleek and elegant pieces. I love all the stuff at
                Khwaahish usually and its difficult to choose my favourite today.
              </p>
            </div>

            <div className='w-full flex gap-5 items-center'>
              <div className=" h-20 w-20 bg-red-500 rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/assets/eshop/testtimonialPersons/Chhavi.avif"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-amber-900 text-xl text-left">Dr. Chhavi Kalra</h3>
                <p className="text-sm text-left font-light">Singer/Artist</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-[55vh] cursor-pointer w-full md:w-[25vw] text-center bg-white p-8 flex flex-col justify-between">
            <div>
              <div className=' h-12 w-12 '>
                <img className='w-full h-full object-contain' src="/assets/eshop/testtimonialLogo.svg" alt="" />
              </div>
              <p className="text-left mt-3 font-light text-[0.85rem] tracking-wider leading-6 text-gray-700">
                Khwaahish are our family jewellers for every right reason.. Their new collection Gulz, is so very fresh and some of the designs are very interesting too! I am sure I'll find many favourites among them as usual.
              </p>
            </div>

            <div className='w-full flex gap-5 items-center'>
              <div className=" h-20 w-20 bg-red-500 rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/assets/eshop/testtimonialPersons/Dimple.avif"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-amber-900 text-xl text-left">Dimple</h3>
                <p className="text-sm text-left font-light">Home Maker</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="md:flex hidden justify-center gap-2 mt-4">
        <div
          onClick={() => handleDotClick(0)}
          className={`h-3 w-3 rounded-full cursor-pointer ${
            activeIndex % 2 === 0
              ? "bg-amber-800"
              : "bg-gray-300 border "
          }`}
        ></div>
        <div
          onClick={() => handleDotClick(1)} 
          className={`h-3 w-3 rounded-full cursor-pointer ${
            activeIndex % 2 === 1
              ? "bg-amber-800"
              : "bg-gray-300 border "
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Testimonial;
