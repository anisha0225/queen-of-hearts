import React, { useRef, useState } from 'react'

const MovingSection = () => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="py-16 sm:py-10 text-center w-full lg:py-2 md:py-16 ">
      <p className="text-base sm:text-xl text-gray-800 mb-3 tracking-widest px-4 sm:px-0">
        Queen Of Hearts- Chennai&apos;s crown jewel of partywear, where lightweight doesn&apos;t mean low on drama.
      </p>
      <p className="text-[3.1vw] sm:text-[2.4vw] md:text-[1.4vw] lg:text-[1vw] text-gray-500 tracking-widest px-[4vw] md:px-[10vw] lg:px-[15vw] mb-[3vw] leading-relaxed z-[-2]">
        With 20 years of expertise, Khwaahish now introduces Queen of Hearts - a curated galleria of lightweight fine jewellery crafted for the modern lifestyle. We believe in jewellery that speaks for itself—bold, beautiful, and effortless. Our handpicked collections are designed to make you shine, without weighing you down. At Queen Of Hearts, every piece tells a story—and that story is yours.
      </p>

      <div className="relative w-full bg-zinc-100 h-auto sm:h-48 flex-col space-y-2 z-[-2]">
        <h2 className="text-sm sm:text-sm text-gray-700 text-center py-5 tracking-[0.1rem] px-4 leading-6">
          All our jewels are BIS Hallmarked and studded with natural diamonds certified by International Gemmological Institutes.
        </h2>

        <div className="relative w-[75%] sm:w-[50%] md:w-[55%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] mx-auto h-auto min-h-[5rem] ">
          {/* Left blur gradient */}
          <div className="absolute left-[-1rem] top-0 h-full sm:w-[5rem] md:w-[20rem] lg:w-[20rem] w-[15vw] bg-gradient-to-r from-zinc-100 to-transparent z-10"></div>
          
          <div 
            ref={sliderRef}
            className="overflow-hidden relative w-full h-full cursor-grab active:cursor-grabbing py-4"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <div className={`flex gap-2 xs:gap-3 sm:gap-4 md:gap-5 ${!isDragging && 'animate-scroll-icons'} whitespace-nowrap`}>
              {Array.from({ length: 12 }).map((_, index) => (
                <img
                  key={index}
                  src={`/assets/certification-${(index % 6) + 1}.png`} 
                  alt={`Icon ${(index % 6) + 1}`}
                  className="h-10 w-10 xs:h-12 xs:w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 mx-2 xs:mx-3 sm:mx-4 md:mx-6 lg:mx-8 inline-block select-none"
                  draggable="false"
                />
              ))}
              {Array.from({ length: 12 }).map((_, index) => (
                <img
                  key={`clone-${index}`}
                  src={`/assets/certification-${(index % 6) + 1}.png`}
                  alt={`Icon ${(index % 6) + 1}`} 
                  className="h-10 w-10 xs:h-12 xs:w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 mx-2 xs:mx-3 sm:mx-4 md:mx-6 lg:mx-8 inline-block select-none"
                  draggable="false"
                />
              ))}
              {Array.from({ length: 12 }).map((_, index) => (
                <img
                  key={`clone2-${index}`}
                  src={`/assets/certification-${(index % 6) + 1}.png`}
                  alt={`Icon ${(index % 6) + 1}`} 
                  className="h-10 w-10 xs:h-12 xs:w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 mx-2 xs:mx-3 sm:mx-4 md:mx-6 lg:mx-8 inline-block select-none"
                  draggable="false"
                />
              ))}
            </div>
          </div>

          {/* Right blur gradient */}
          <div className="absolute right-[-1rem] top-0 h-full sm:w-[5rem] md:w-[20rem] lg:w-[20rem] w-[15vw] bg-gradient-to-l from-zinc-100 to-transparent z-5"></div>
        </div>

        
      </div>
    </section>
  )
}

export default MovingSection
