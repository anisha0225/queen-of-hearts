import React from 'react'


const AdCampaign = () => {
  return (
    <div className='flex flex-col items-center pb-16 overflow-hidden' >
        <div className='flex flex-col items-center justify-center px-4 sm:px-0 '>
        <div className="flex items-center justify-center mb-3">
        <hr className="w-8 sm:w-16 h-0.5 bg-gray-700 border-0 rounded" />
        <span className="text-lg sm:text-[1.8rem] text-gray-700 mx-2 sm:mx-4 tracking-widest">Our Ad Campaign</span>
        <hr className="w-8 sm:w-16 h-0.5 bg-gray-700 border-0 rounded" />
      </div>
        <video autoPlay muted controls className='w-screen py-4' src="/assets/videoplayback.mp4" />
       
        
        </div>

        <section className="py-16 sm:py-12 text-center w-full">
          <p className="text-lg sm:text-xl text-gray-800 mb-3 tracking-widest px-4 sm:px-0">
            Queen Of Hearts- Chennai&apos;s crown jewel of partywear, where lightweight doesn&apos;t mean low on drama.
          </p>
          <p className="text-xs sm:text-sm text-gray-500 tracking-widest px-4 sm:px-40 mb-10 leading-8">
            With 20 years of expertise, Khwaahish now introduces Queen of Hearts - a curated galleria of lightweight fine jewellery crafted for the modern lifestyle. We believe in jewellery that speaks for itself—bold, beautiful, and effortless. Our handpicked collections are designed to make you shine, without weighing you down. At Queen Of Hearts, every piece tells a story—and that story is yours.
          </p>

          <div className="relative w-full bg-zinc-100 h-auto sm:h-44 flex-col space-y-2">
            <h2 className="text-sm sm:text-sm text-gray-700 text-center py-5 tracking-[0.1rem] px-4 leading-6">
              All our jewels are BIS Hallmarked and studded with natural diamonds certified by International Gemmological Institutes.
            </h2>

            <div className="relative w-full h-20">
              <div className="absolute left-0 right-0 top-0 bottom-0 flex justify-between z-10">
              <div className="w-[5rem] md:w-[80rem] lg:w-[80rem] bg-gradient-to-r from-zinc-100 via-zinc-100 to-transparent"></div>
              <div className="w-[5rem] md:w-[80rem] lg:w-[80rem] bg-gradient-to-l from-zinc-100 via-zinc-100 to-transparent"></div>
              </div>

              <div className="overflow-hidden relative w-full h-20">
                <div className="absolute flex gap-3 sm:gap-5 animate-scroll-icons whitespace-nowrap">
                  {Array.from({ length: 12 }).map((_, index) => (
                    <img
                      key={index}
                      src={`/assets/certification-${(index % 6) + 1}.png`} 
                      alt={`Icon ${(index % 6) + 1}`}
                      className="h-14 w-14 sm:h-16 sm:w-16 mx-3 sm:mx-10 inline-block"
                    />
                  ))}
                  {Array.from({ length: 12 }).map((_, index) => (
                    <img
                      key={`clone-${index}`}
                      src={`/assets/certification-${(index % 6) + 1}.png`}
                      alt={`Icon ${(index % 6) + 1}`} 
                      className="h-12 w-12 sm:h-16 sm:w-16 mx-4 sm:mx-14 inline-block"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        
    </div>
  )
}

export default AdCampaign