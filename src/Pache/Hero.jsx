

import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchType, setSearchType] = useState('sku');
  const [showIcons, setShowIcons] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const scrollToTopRef = useRef(null);
  const searchOverlayRef = useRef(null);
  const fixedButtonRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const openLocation = () => window.open('https://www.google.com/maps/place/Khwaahish+Diamond+Jewellery/@13.0313087,80.2542243,17z/data=!3m1!4b1!4m6!3m5!1s0x3a5267b22f01d055:0x4fceee85310a87f!8m2!3d13.0313087!4d80.2567992!16s%2Fg%2F1vc80773?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D', '_blank');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  //Scroll-To-Top  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
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

  return (
    <>
      {/* eShop Button */}
      <Link to="/gulz">
        <div className="fixed -right-11 top-52 z-[9999]">
          <p
            className="fixed-shop-button flex items-center bg-yellow-600 text-white w-28 h-12 p-2 transition-all duration-300 hover:bg-white hover:text-black border-2 border-transparent hover:border-yellow-700 rotate-90"
          >
            <img src="/assets/sh_1.png" alt="Logo" className="h-6 mr-2 " />
            eShop
          </p>
        </div>
      </Link>

      {/* Scroll to Top Button */}
      <div 
        ref={scrollToTopRef}
        className="fixed right-4 md:right-10 lg:right-20 bottom-4 md:bottom-6 lg:bottom-9 z-[9999]"
        style={{ opacity: 0 }}
      >
        <button
          className="bg-blue-950 text-white p-3 md:p-3 lg:p-5 rounded-lg transition-all duration-300 hover:text-black"
          onClick={scrollToTop}
        >
          <img src="/assets/colored-logo.png" alt="Scroll to Top" className="h-3 md:h-3 lg:h-3" />
        </button>
      </div>

      <div className='relative justify-center flex flex-col items-center pb-10 z-[-1]'>
        <picture>
          <source media="(min-width: 1280px)" srcSet="/assets/live-life-platinum.jpg" />
          <source media="(min-width: 1024px)" srcSet="/assets/live-life-platinum.jpg" />
          <source media="(min-width: 768px)" srcSet="/assets/live-life-platinum.jpg" />
          <source media="(max-width: 767px)" srcSet="/assets/Pache-Collection_Reel_Thumbnail-final.jpg" />
          <img 
            className="w-screen h-full max-w-full min-h-[60vw] sm:h-[170vh] md:h-[50vw] lg:h-[40vw] xl:h-[60vw] object-cover md:-mt-20 lg:-mt-12 sm:-mt-52 -mt-[28vw] z-[-2]"
            src="/assets/Pache-Collection_Reel_Thumbnail-final.jpg"
            alt="Hero Banner"
          />
        </picture>

      
      </div>
    </>
  );
};

export default Hero;
