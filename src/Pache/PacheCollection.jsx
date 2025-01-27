import React from 'react'

const PacheCollection = () => {
  return (
    <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Black square with line */}
      <div className="absolute top-0 right-0 hidden sm:flex items-center">
        <div className="w-2 sm:w-3 h-2 sm:h-3 bg-black"></div>
        <div className="h-[1px] sm:h-[1.5px] bg-black w-24 sm:w-44"></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-16">
        {/* Left side - Image */}
        <div className="w-full lg:w-1/2 mx-4 sm:mx-8 lg:ml-20">
          <img 
            src="/assets/Pache-Intro-Img.png" 
            alt="Pache Collection"
            className="w-full h-[20rem] sm:h-[30rem] lg:h-[40rem] object-cover"
          />
        </div>

        {/* Right side - Text content */}
        <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 px-4 sm:px-8 lg:mr-16 mt-8 lg:mt-0">
          {/* First text with lines */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-4xl sm:text-5xl lg:text-[5.4rem] font-medium text-center text-gray-700" id="parthen">Pache</p>
            <div className="flex items-center">
              <div className="h-[2px] sm:h-[2.4px] bg-gray-900 w-10 sm:w-14"></div>
              <p className="text-lg sm:text-xl font-medium text-center px-2 sm:px-4 text-gray-800 tracking-[0.6rem] sm:tracking-[0.9rem]">collection</p>
              <div className="h-[2px] sm:h-[2.4px] bg-gray-900 w-10 sm:w-14"></div>
            </div>
          </div>

          {/* Second text */}
          <div className="flex flex-col gap-3">
            <h1 className="text-center text-gray-800 font-medium text-lg sm:text-xl tracking-[0.15rem] sm:tracking-[0.2rem]">Precious Jewellery for Men</h1>
            <p className="text-gray-500 text-center leading-6 text-xs sm:text-sm tracking-wider sm:tracking-widest">
              PACHE offers precious jewellery that scream prestige, modernism, and exclusivity that goes beyond clichés and shakes up trends. Simple yet complex pieces that are sleek and sublime, is the highlight of this collection. To all the men out there, come find your expression through PACHE to be your liberated self. Indulge yourselves and stay enchanted!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PacheCollection
