import React from 'react'
import { Helmet } from 'react-helmet'
import "../App.css"
const Trending = () => {
  return (
    <>
      <Helmet>
        <title>Trending Diamond Rings Collection | Gulz Jewelry</title>
        <meta name="description" content="Discover our trending collection of diamond rings - from classic styles to contemporary designs. Find the perfect ring to match your signature style." />
        <meta name="keywords" content="trending rings, diamond rings, luxury jewelry, classic rings, contemporary rings, Gulz Jewelry" />
        <meta property="og:title" content="Trending Diamond Rings Collection | Gulz Jewelry" />
        <meta property="og:description" content="Discover our trending collection of diamond rings - from classic styles to contemporary designs. Find the perfect ring to match your signature style." />
      </Helmet>

      <div className='bg-[#F7ECEB] min-h-[50vw]  lg:mb-0 md:-mb-90 sm:-mb-0 py-4 sm:py-4 md:py-8'>
        <div className='mx-auto w-[90%] sm:w-[90%] md:w-[80%] flex flex-col md:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-1'>
          <div className='w-full md:w-1/2 min-h-[20vw] sm:h-[75vw] md:h-[60vh] lg:h-[40vw] '>
            <picture>
              <source 
                srcSet="/assets/eshop/trending.avif"
                type="image/avif"
                media="(min-width: 768px)"
              />
              <source 
                srcSet="/assets/eshop/trending.avif"
                type="image/avif"
                media="(min-width: 640px)"
              />
              <img 
                className='h-full w-full object-cover object-left-top rounded-sm'
                src="/assets/eshop/trending.avif"
                alt="Trending diamond rings collection"
                loading="lazy"
                sizes="(max-width: 640px) 95vw, (max-width: 768px) 90vw, 40vw"
              />
            </picture>
          </div>
          <div className='w-full md:w-1/2 flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-24'>
            <div>
              <h1 className='text-xl sm:text-2xl md:text-4xl lg:text-6xl font-light text-amber-950 tracking-normal' id="parthen">What&apos;s Trending</h1>
              <p className='mt-4 sm:mt-6 md:mt-8 lg:mt-10 tracking-wide font-light text-xs sm:text-sm md:text-base text-gray-700'>
                Find your wardrobe essential or a new everyday favourite with our array of diamond rings. From classic styles to trendy designs, to dazzling ones and minimalist ones for understated elegance, you will find many to suit your signature style.
              </p>
              <button className='mt-4 sm:mt-6 md:mt-8 lg:mt-10 tracking-[.3rem] leading-loose font-light border-b border-amber-950 float-right text-sm sm:text-base'>
                EXPLORE ALL RINGS
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Trending