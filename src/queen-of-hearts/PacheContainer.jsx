import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Link } from 'react-router-dom';

const PacheContainer = () => {
  const pacheRef = useRef(null)

  useEffect(() => {
    const buttons = document.querySelectorAll('#gsap-buy-now')
    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          backgroundColor: 'white',
          color: 'black',
          borderColor: '#C78C06', 
          scale: 1.1,
          duration: 0.3,
          ease: 'power2.out'
        })
      })

      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          backgroundColor: '#C78C06',
          color: 'white',
          borderColor: 'transparent',
          scale: 1,
          duration: 0.3,
          ease: 'power2.in'
        })
      })
    })

    return () => {
      buttons.forEach(button => {
        button.removeEventListener('mouseenter', () => {})
        button.removeEventListener('mouseleave', () => {})
      })
    }
  }, [])

  return (
    <section ref={pacheRef} className="text-center w-full h-auto flex-col mt-10 md:mt-10 lg:mt-10 sm:py-1">
      <div className="flex items-center justify-center mb-6 sm:mb-8">
        <hr className="w-6 sm:w-16 h-0.5 bg-gray-700 border-0 rounded" />
        <span className="text-xl sm:text-3xl text-gray-700 mx-2 sm:mx-4">Pache</span>
        <hr className="w-6 sm:w-16 h-0.5 bg-gray-700 border-0 rounded" />
      </div>

      <p className="text-[3vw] md:text-[1.4vw] lg:text-[1vw] text-gray-500 tracking-widest text-center px-[4vw] md:px-[10vw] lg:px-[15vw] mb-[3vw] leading-relaxed">
        Our timeless designs are for those who appreciate the finer things in life, offering the perfect balance of precision & class.
      </p>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-16">
        <div className="bg-neutral-100 rounded-2xl sm:rounded-3xl shadow-md overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-4/6">
              <img
                src="/assets/1200X800-Queen-of-hearts-carousel-banner-images-Pache.jpg"
                alt="Pache Jewellery"
                className="w-full h-full lg:h-[40rem] object-cover"
              />
            </div>

            <div className="w-full lg:w-1/3 flex flex-col justify-center items-center p-6 lg:p-8">
              <h3 className="text-2xl lg:text-5xl text-gray-900 mb-3 lg:mb-4 tracking-widest" id="box">Pache</h3>
              <p className="text-xs lg:text-lg text-gray-500 mb-4 lg:mb-6 tracking-widest">
                Precious Jewellery for Men
              </p>
              <Link to="/fazza">
              <button 
                id="gsap-buy-now"
                className="bg-yellow-700 text-white text-[3vw] md:text-[1.4vw] lg:text-[1vw] py-[1.5vw] md:py-[1vw] lg:py-[0.7vw] px-[5vw] md:px-[3vw] lg:px-[2vw] rounded-[6vw] md:rounded-[3vw] lg:rounded-[2vw] shadow-md border-2 border-transparent transition-all duration-300 hover:scale-105"
              >
                EXPLORE MORE
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PacheContainer
