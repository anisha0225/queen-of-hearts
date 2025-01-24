import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const FesteraContainer = () => {
  const festaraRef = useRef(null)

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
    <section ref={festaraRef} className="text-center w-full h-auto flex-col py-4 sm:py-1">
      <div className="flex items-center justify-center mb-4 sm:mb-6">
        <hr className="w-6 sm:w-16 h-0.5 bg-gray-700 border-0 rounded" />
        <span className="text-xl sm:text-3xl text-gray-700 mx-2 sm:mx-4">Festara</span>
        <hr className="w-6 sm:w-16 h-0.5 bg-gray-700 border-0 rounded" />
      </div>

      <p className="text-xs sm:text-sm text-gray-500 tracking-widest leading-5 sm:leading-6 text-center px-4 sm:px-80 mb-8 sm:mb-12">
        Festara turns up the brightness! Gemstones that sparkle as boldly as you live. Shine with every step—because life&apos;s too short for dull jewellery. Your style, your vibe. Festara&apos;s vibrant gems are handpicked to match your kindred spirit.
      </p>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-16">
        <div className="bg-neutral-100 rounded-2xl sm:rounded-3xl shadow-md overflow-hidden">
          <div className="flex flex-col sm:flex-row">
            <div className="w-full sm:w-4/6">
              <img
                src="/assets/1200X800-Queen-of-hearts-carousel-banner-images-Festara.jpg"
                alt="Festara Jewellery"
                className="w-full h-48 sm:h-[40rem] object-cover"
              />
            </div>

            <div className="w-full sm:w-1/3 flex flex-col justify-center items-center p-6 sm:p-8">
              <h3 className="text-2xl sm:text-5xl text-gray-900 mb-3 sm:mb-4 tracking-widest" id="box">Festara</h3>
              <p className="text-xs sm:text-lg text-gray-500 mb-4 sm:mb-6 tracking-widest">
                A Mélange of Precious Gemstones
              </p>
              <button 
                id="gsap-buy-now"
                className="bg-yellow-700 text-white py-1.5 sm:py-2 px-5 sm:px-7 text-sm sm:text-base rounded-3xl shadow-md border-2 border-transparent transition-all duration-300"
              >
                EXPLORE MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FesteraContainer
