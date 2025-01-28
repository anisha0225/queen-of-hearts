import React from 'react'

const PacheCollection = () => {
  return (
    <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Black square with line */}
      <div className="absolute top-0 -right-[1vw] sm:-right-[3.4vw] md:-right-[1.4vw] lg:-right-[1vw] xl:-right-[3.2vw] hidden sm:flex items-center">
        <div className="w-2 sm:w-3 h-2 sm:h-3 bg-black"></div>
        <div className="h-[1px] sm:h-[1.5px] bg-black w-24 sm:w-44"></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-16">
        {/* Text content - Moved above for screens below 1024px */}
        <div className="w-full sm:w-[60vw] md:w-[90vw] lg:w-[90vw] xl:w-1/2 px-4 space-y-4 sm:space-y-8 lg:px-1 order-1 lg:order-2">
          {/* First text with lines */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-[11vw] lg:text-[5.4rem] font-medium text-center text-gray-700" id="parthen">Pache</p>
            <div className="flex items-center">
              <div className="h-[2px] sm:h-[2.4px] bg-gray-900 w-[8vw] lg:w-14"></div>
              <p className="text-[2vw] lg:text-xl font-medium text-center px-2 sm:px-4 text-gray-800 tracking-[0.6rem] sm:tracking-[0.9rem]">collection</p>
              <div className="h-[2px] sm:h-[2.4px] bg-gray-900 w-[8vw] lg:w-14"></div>
            </div>
          </div>

          {/* Second text */}
          <div className="flex flex-col gap-3">
            <h1 className="text-center text-gray-800 font-medium text-[2.5vw] lg:text-xl tracking-[0.15rem] sm:tracking-[0.2rem]">Precious Jewellery for Men</h1>
            <p className="text-gray-500 text-center leading-6 text-[1.5vw] lg:text-sm tracking-wider sm:tracking-widest">
              PACHE offers precious jewellery that scream prestige, modernism, and exclusivity that goes beyond clichés and shakes up trends. Simple yet complex pieces that are sleek and sublime, is the highlight of this collection. To all the men out there, come find your expression through PACHE to be your liberated self. Indulge yourselves and stay enchanted!
            </p>
          </div>
        </div>

        {/* Image - Moved below for screens below 1024px */}
        <div className="w-full lg:w-1/2 mx-4 sm:mx-8 lg:ml-20 order-2 lg:order-1">
          <img 
            src="/assets/Pache-Intro-Img.png" 
            alt="Pache Collection"
            className="w-full h-[57vw] lg:h-[47vw] xl:h-[40rem] object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default PacheCollection
