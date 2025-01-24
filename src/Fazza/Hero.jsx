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

  // GSAP Menu Animation
  useEffect(() => {
    const menuTimeline = gsap.timeline();
    
    if (isMenuOpen) {
      menuTimeline
        .fromTo('.menu', 
          { x: '-100%' },
          { x: '0%', duration: 0.6, ease: 'power3.out' }
        )
        .fromTo('.menu p',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4 },
          '-=0.2'
        )
        .fromTo('.menu h4',
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.3 },
          '-=0.2'
        )
        .fromTo('.menu ul li',
          { 
            opacity: 0,
            x: -30,
            rotation: -5
          },
          { 
            opacity: 1,
            x: 0,
            rotation: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: 'power2.out'
          },
          '-=0.1'
        );
    } else {
      menuTimeline
        .to('.menu ul li',
          {
            opacity: 0,
            x: -50,
            rotation: -10,
            duration: 0.3,
            stagger: 0.05,
            ease: 'power2.in'
          }
        )
        .to('.menu h4',
          {
            opacity: 0,
            x: -30,
            duration: 0.3,
            ease: 'power2.in'
          },
          '-=0.2'
        )
        .to('.menu p',
          {
            opacity: 0,
            x: -30,
            duration: 0.3,
            ease: 'power2.in'
          },
          '-=0.2'
        )
        .to('.menu',
          {
            x: '-100%',
            duration: 0.5,
            ease: 'power3.inOut',
            onComplete: () => {
              gsap.set(['.menu ul li', '.menu h4', '.menu p'], {clearProps: 'all'});
            }
          },
          '-=0.2'
        );
    }
  }, [isMenuOpen]);

  // GSAP Search Overlay Height Animation
  useEffect(() => {
    if (isSearchOpen) {
      gsap.fromTo(
        searchOverlayRef.current,
        { height: '16rem' },
        { height: searchType === 'sku' ? '16rem' : '13rem', duration: 0.5, ease: 'power2.in' }
      );
    } else {
      gsap.to(searchOverlayRef.current, {
        height: 0,
        duration: 0.5,
        ease: 'power2.in',
      });
    }
  }, [isSearchOpen, searchType]);

  return (
    <>
      <div className='relative justify-center flex flex-col items-center pb-10'>
        <picture>
          <source media="(min-width: 1024px)" srcSet="/assets/Fazza-New-Hero-Banner-Desktop.jpg" />
          <source media="(min-width: 768px)" srcSet="/assets/Fazza-New-Hero-Banner-Desktop.jpg" />
          <source media="(min-width: 640px)" srcSet="/assets/Fazza-New-Hero-Banner-Desktop.jpg" />
          <img 
            className='w-[35rem] md:w-[96rem] h-[65vh] md:h-[80vh] lg:h-[120vh] object-cover md:mt-10'
            src='/assets/Fazza-Landing-Page-New-Hero-Banner-Mobile.jpg'
            alt="Hero Banner"
          />
        </picture>

        <div className='flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 w-full max-w-7xl mx-auto'>
          <img className='h-80 w-80 -mt-16 md:-mt-10 lg:-mt-44' id="fazza" src="/assets/Fazza-Golden-Logo.svg"/>
          <p className='lg:-mt-12 -mt-14 leading-7 font-centuryGothic w-full md:w-[90%] lg:w-[90%] xl:w-[87%] text-center text-[#757575] text-sm md:text-m lg:text-m tracking-widest'>
          Every item of Fazza jewellery is more than just an accessory; it is a timeless treasure that adds long-term value to any woman's collection. Fazza designs with the goal of making traditional Polki jewellery more accessible, combining the charm of heritage with modern elegance in each piece.
          </p>
        </div>

        <div className="w-full">
          {/* eShop Button */}
          <Link to="/gulz">
            <div className="fixed -right-11 top-52 z-50">
              <p
                className="fixed-shop-button flex items-center bg-yellow-600 text-white w-28 h-12 p-2 transition-all duration-300 hover:bg-white hover:text-black border-2 border-transparent hover:border-yellow-700 rotate-90"
              >
                <img src="/assets/sh_1.png" alt="Logo" className="h-6 mr-2" />
                eShop
              </p>
            </div>
          </Link>

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