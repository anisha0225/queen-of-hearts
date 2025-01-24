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

      <div className='bg-[#F7ECEB] md:min-h-screen w-full py-2'>
        <div className='mx-auto w-[90%] md:w-[80%] flex flex-col md:flex-row justify-center items-center gap-8'>
          <div className='h-[50vh] md:h-[100%] w-full md:w-1/2'>
            <img 
              className='h-full w-full object-cover object-left-top' 
              src="/assets/eshop/trending.avif" 
              alt="Trending diamond rings collection" 
            />
          </div>
          <div className='w-full md:w-1/2 flex flex-col justify-center px-4 md:px-24'>
            <div>
              <h1 className='text-2xl md:text-6xl font-light  text-amber-950 tracking-normal' id="parthen">What's Trending</h1>
              <p className='mt-6 md:mt-10 tracking-wide font-light text-sm md:text-base text-gray-700 '>
                Find your wardrobe essential or a new everyday favourite with our array of diamond rings. From classic styles to trendy designs, to dazzling ones and minimalist ones for understated elegance, you will find many to suit your signature style.
              </p>
              <button className='mt-6 md:mt-10 tracking-[.3rem] leading-loose font-light border-b border-amber-950 float-right'>
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