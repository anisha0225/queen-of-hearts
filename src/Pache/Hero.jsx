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
  const [showScrollTop, setShowScrollTop] = useState(false);
  const scrollToTopRef = useRef(null);
  const searchOverlayRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

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

  // Scroll-To-Top
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
    <div className='relative justify-center flex flex-col items-center pb-10'>
      <picture>
        <source media="(min-width: 1024px)" srcSet="/assets/live-life-platinum.jpg" />
        <source media="(min-width: 768px)" srcSet="/assets/live-life-platinum.jpg" />
        <source media="(min-width: 640px)" srcSet="/assets/live-life-platinum.jpg" />
        <img 
          className='w-[35rem] md:w-[96rem] h-[85vh] md:h-[80vh] lg:h-[120vh] object-cover md:mt-10'
          src='/assets/Pache-Collection_Reel_Thumbnail-final.jpg'
          alt="Hero Banner"
        />
      </picture>

    

      <div className="w-full">
        <Link to="/gulz">
          <div className="fixed -right-11 top-52 z-50">
            <p className="fixed-shop-button flex items-center bg-yellow-600 text-white w-28 h-12 p-2 transition-all duration-300 hover:bg-white hover:text-black border-2 border-transparent hover:border-yellow-700 rotate-90">
              <img src="/assets/sh_1.png" alt="Logo" className="h-6 mr-2" />
              eShop
            </p>
          </div>
        </Link>

        <div 
          ref={scrollToTopRef}
          className="fixed right-4 md:right-10 lg:right-20 bottom-4 md:bottom-6 lg:bottom-9 z-50"
          style={{ opacity: 0 }}
        >
          <button
            className="bg-blue-950 text-white p-3 md:p-3 lg:p-5 rounded-lg transition-all duration-300 hover:text-black"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img src="/assets/colored-logo.png" alt="Scroll to Top" className="h-3 md:h-3 lg:h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
