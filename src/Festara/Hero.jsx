import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import { BrowserRouter as Link } from 'react-router-dom';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const scrollToTopRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShowScrollTop(true);
        gsap.to(scrollToTopRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: "power2.in"
        });
      } else {
        gsap.to(scrollToTopRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => setShowScrollTop(false)
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fixed Button Animation
  useEffect(() => {
    const button = document.querySelector('.fixed-shop-button');
    
    const handleMouseEnter = () => {
      gsap.to(button, {
        backgroundColor: 'white',
        color: 'black',
        borderColor: '#B45309',
        duration: 0.3
      });
      button.querySelector('img').src = '/assets/sh.png';
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        backgroundColor: '#C78C06',
        color: 'white',
        borderColor: 'transparent',
        duration: 0.3
      });
      button.querySelector('img').src = '/assets/sh_1.png';
    };

    if (button) {
      button.addEventListener('mouseenter', handleMouseEnter);
      button.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (button) {
        button.removeEventListener('mouseenter', handleMouseEnter);
        button.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <>
      <div className='relative justify-center flex flex-col items-center pb-10'>
        <picture>
          <source media="(min-width: 1024px)" srcSet="/assets/Festara-New-Hero-Banner-Desktop.jpg" />
          <source media="(min-width: 768px)" srcSet="/assets/Festara-New-Hero-Banner-Desktop.jpg" />
          <source media="(min-width: 640px)" srcSet="/assets/Festara-New-Hero-Banner-Desktop.jpg" />
          <img 
            className='w-[35rem] md:w-[96rem] h-[65vh] md:h-[80vh] lg:h-[120vh] object-cover md:mt-10'
            src='/assets/Festara-Page-New-Hero-Banner-Mobile.jpg'
            alt="Hero Banner"
          />
        </picture>

        <div className='flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 w-full max-w-7xl mx-auto'>
          <h2 className='text-4xl md:text-6xl lg:text-9xl -my-2 md:-my-4 lg:-my-9' id="festara">Festara</h2>
          <p className='pt-4 md:pt-8 lg:pt-12 leading-7 font-centuryGothic w-full md:w-[90%] lg:w-[90%] xl:w-[87%] text-center text-[#757575] text-sm md:text-m lg:text-m tracking-widest'>
            Festara celebrates life's most daring moments with a vivid assortment of beautiful gemstone jewelry. Each piece sparkles with beauty, illuminating your surroundings with every movement.
          </p>
        </div>

        <div className="w-full">
          {/* eShop Button */}
          <div className="fixed -right-11 top-52 z-50 md:block">
            <a href="/gulz" className="fixed-shop-button flex items-center bg-yellow-600 text-white w-28 h-12 p-2 transition-all duration-300 border-2 border-transparent rotate-90">
              <img src="/assets/sh_1.png" alt="Logo" className="h-6 mr-2" />
              eShop
            </a>
          </div>

          {/* Scroll to Top Button */}
          <div 
            ref={scrollToTopRef}
            className="fixed right-4 md:right-10 lg:right-20 bottom-4 md:bottom-6 lg:bottom-9 z-50"
            style={{ opacity: 0 }}
          >
            <button
              className="bg-blue-950 text-white p-3 md:p-3 lg:p-5 rounded-lg transition-all duration-300 hover:text-black"
              onClick={scrollToTop}
            >
              <img src="/assets/colored-logo.png" alt="Scroll to Top" className="h-3 md:h-3 lg:h-3" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;