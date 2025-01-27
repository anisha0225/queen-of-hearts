import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchType, setSearchType] = useState('sku');
  const searchOverlayRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const openLocation = () => window.open('https://www.google.com/maps/place/Khwaahish+Diamond+Jewellery/@13.0313087,80.2542243,17z/data=!3m1!4b1!4m6!3m5!1s0x3a5267b22f01d055:0x4fceee85310a87f!8m2!3d13.0313087!4d80.2567992!16s%2Fg%2F1vc80773?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D', '_blank');

  // GSAP Navbar Background Animation
  useEffect(() => {
    const navbar = document.querySelector('#gsap-navbar');
    const navbarImages = document.querySelectorAll('#gsap-navbar img');
    const navbarLinks = document.querySelectorAll('#gsap-navbar a');
    const divide = document.querySelector('#divide');

    navbar.style.backgroundColor = 'transparent';

    gsap.to(navbar, {
      backgroundColor: 'white',
      scrollTrigger: {
        trigger: navbar,
        start: 'top top',
        end: '+=100',
        toggleActions: 'play none none reverse',
        scrub: true,
      },
    });

    gsap.to(navbarLinks, {
      filter: 'brightness(0)',
      scrollTrigger: {
        trigger: navbar,
        start: 'top top',
        end: '+=100',
        toggleActions: 'play none none reverse',
        scrub: true,
      },
    });

    gsap.to(navbarImages, {
      filter: 'brightness(0)',
      scrollTrigger: {
        trigger: navbar,
        start: 'top top',
        end: '+=100',
        toggleActions: 'play none none reverse',
        scrub: true,
      },
    });

    gsap.to(divide, {
      filter: 'brightness(0)',
      scrollTrigger: {
        trigger: navbar,
        start: 'top top',
        end: '+=100',
        toggleActions: 'play none none reverse',
        scrub: true,
      },
    });
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
      {/* Mobile Navbar */}
      <div className="md:hidden">
        <div className="fixed top-0 left-0 w-full bg-white text-black py-2 z-20">
          <Link to="/" className="block text-center font-medium text-xs px-2 py-1">
            VISIT BRAND WEBSITE
          </Link>
        </div>
        
        <div className="fixed top-8 left-0 w-full bg-black text-white py-2 z-20">
          <div className="whitespace-nowrap px-4">
            <marquee direction="left" className="text-xs">
              We Ship Worldwide | Free Shipping Across India. For further details, Please call: +91 9884039111 | We design, manufacture & retail jewellery using NATURAL DIAMONDS only | All our Jewels are BIS Hallmarked & Diamonds are ethically sourced & certified by world-renowned Gemological Institutes.
            </marquee>
          </div>
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:block fixed top-0 left-0 w-full bg-black text-white py-2 z-20">
        <div className="overflow-hidden relative">
          <Link to="/" className="absolute top-0 left-0 z-30 text-white font-medium text-sm px-5 py-1 bg-black hover:underline" style={{textDecorationThickness: '1px', textUnderlineOffset: '6px'}}>
            VISIT BRAND WEBSITE
          </Link>
          <div className="whitespace-nowrap px-20">
            <marquee direction="left" className="text-sm">
              We Ship Worldwide | Free Shipping Across India. For further details, Please call: +91 9884039111 | We design, manufacture & retail jewellery using NATURAL DIAMONDS only | All our Jewels are BIS Hallmarked & Diamonds are ethically sourced & certified by world-renowned Gemological Institutes.
            </marquee>
          </div>
        </div>
      </div>

      <div id="gsap-navbar" className="fixed top-10 left-0 w-full mt-8 md:mt-0 lg:mt-0 py-2 md:py-2 lg:py-2 sm:py-2 px-2 sm:px-6 flex items-center justify-between z-20 bg-transparent text-white" style={{ transition: 'background-color 0.4s ease' }}>
        <div className="flex items-center" onClick={toggleMenu}>
          <img src="/assets/output-onlinepngtools.png" alt="Left Logo" className="h-7 sm:h-8 mr-2 sm:mr-4 px-2 sm:px-10 cursor-pointer"/>
        </div>

        <div className="flex items-center">
        
            <img src="/assets/download.svg" alt="Middle Logo" className="h-8 sm:h-14 cursor-pointer" />
        
          <div className="border-l border-white h-4 sm:h-6 mx-2 sm:mx-4" id="divide"></div>
          <a href="/" className="font-medium text-base md:text-2xl sm:text-xl text-white">
            QUEEN OF HEARTS
          </a>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4 px-2 sm:px-8">
          <img src="/assets/search-removebg-preview.png" alt="Search" className="h-4 sm:h-6 cursor-pointer" onClick={toggleSearch} />
          <img src="/assets/arrows.png" alt="Location" className="h-4 sm:h-6 cursor-pointer" onClick={openLocation} />
        </div>
      </div>

      {/*Menu*/}
      {isMenuOpen && (
                <div className="menu fixed top-0 left-0 w-full h-full bg-white text-black z-30 shadow-lg overflow-y-auto md:w-[24rem] lg:w-[24rem] sm:w-full max-w-full" style={{ width: window.innerWidth <= 478 ? '100%' : '24rem' }}>

          <div className="p-4">
            <button
              onClick={toggleMenu}
              className="text-xl font-bold hover:text-gray-500 py-2 px-4 flex justify-end items-center w-full"
            >
              <img
                src="/assets/close.png"
                alt="Close"
                className="h-5 ml-auto cursor-pointer transition-transform duration-300 ease-in-out transform hover:rotate-180"
              />
            </button>

            <p className="text-gray-500 p-2 text-xs sm:text-sm leading-8 tracking-widest">
              Queen of Hearts - Chennai&apos;s crown jewel of partywear, where lightweight don&apos;t mean low on drama. Our sub-brands are curated in-house, designed to excite & appeal to the lifestyle of those who appreciate craft & all things precious.
            </p>
            <h4 className="text-lg sm:text-xl font-medium px-2 py-2 text-gray-900 tracking-widest">
              Curated Brands
              <span className="block border-b-2 border-black w-1/3"></span>
            </h4>

            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  to="/gulz"
                  className="text-gray-900 hover:text-yellow-600 hover:underline hover:underline-offset-4 transition-all duration-500 text-sm sm:text-m"
                >
                  Gulz - Trendy & Chic Diamonds
                </Link>
              </li>
              <li>
                <Link
                  to="/fazza"
                  className="text-gray-900 hover:text-yellow-600 hover:underline hover:underline-offset-4 transition-all duration-500 text-sm sm:text-m"
                >
                  Fazza - Gorgeous Polki
                </Link>
              </li>
              <li>
                <Link
                  to="/festara"
                  className="text-gray-900 hover:text-yellow-600 hover:underline hover:underline-offset-4 transition-all duration-500 text-sm sm:text-m"
                >
                  Festara - Romancing Gemstone
                </Link>
              </li>
              <li>
                <Link
                  to="/pache"
                  className="text-gray-900 hover:text-yellow-600 hover:underline hover:underline-offset-4 transition-all duration-500 text-sm sm:text-m"
                >
                  Pache - Precious Jewellery For Men
                </Link>
              </li>
            </ul>
            <Link
              to="/"
              className="text-gray-900 hover:text-yellow-600 hover:underline hover:underline-offset-4 transition-all duration-500 mt-10 block text-base sm:text-lg"
            >
              VISIT BRAND WEBSITE
            </Link>
          </div>
        </div>
      )}

      {/* Search Bar Overlay */}
      {isSearchOpen && (
        <div
          ref={searchOverlayRef}
          className="fixed top-0 left-0 w-full bg-white z-40 flex flex-col items-center pt-4 border-b-8 border-yellow-600"
        >
          <div className="flex items-center space-x-2 mb-4 mt-16">
            <button
              onClick={() => setSearchType('sku')}
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${searchType === 'sku' ? 'bg-yellow-600 border-yellow-600' : 'bg-gray-300 border-gray-300'}`}
            ></button>
            <span className="text-sm sm:text-m font-medium">Search By SKU</span>

            <button
              onClick={() => setSearchType('style')}
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${searchType === 'style' ? 'bg-yellow-600 border-yellow-600' : 'bg-gray-300 border-gray-300'}`}
            ></button>
            <span className="text-sm sm:text-m font-medium">Search By Style</span>
          </div>

          {searchType === 'sku' ? (
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-0 px-4 sm:px-0">
              <input
                type="text"
                placeholder="Search By SKU"
                className="p-2 border rounded border-yellow-600 relative placeholder:italic text-sm focus:border-gray-700 focus:shadow-[0px_4px_8px_rgba(0,0,0,0.4)] focus:outline-none w-full sm:w-[35rem]"
              />
              <div className="relative w-full sm:w-auto">
                <button
                  className="w-full sm:w-auto px-5 border rounded shadow bg-yellow-600 font-bold text-transparent transition-colors duration-300"
                  style={{
                    textShadow: '0px 0.1px 0.5px rgba(222, 156, 0, 3.1)',
                    height: '2.4rem',
                  }}
                >
                  <span className="hover:text-white transition-all duration-500 text-sm">SEARCH</span>
                </button>

                <div className="hidden sm:block absolute left-[-0.5rem] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[10px] border-r-yellow-600"></div>
              </div>
            </div>
          ) : (
            <div className="flex items-center px-4 sm:px-0">
              <select
                className="p-2 border border-yellow-600 rounded text-sm text-gray-500 w-full sm:w-[60rem]"
              >
                <option value="">Select Style</option>
                <option value="style1">Style 1</option>
                <option value="style2">Style 2</option>
                <option value="style3">Style 3</option>
              </select>
            </div>
          )}

          <button
            onClick={toggleSearch}
            className="absolute top-4 right-4 text-gray-500 hover:text-black transition-transform duration-300 transform hover:rotate-180"
          >
            <img
              src="/assets/close.png"
              alt="Close"
              className="h-6 cursor-pointer"
            />
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
