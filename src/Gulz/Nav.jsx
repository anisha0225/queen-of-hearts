import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { BrowserRouter as Link } from 'react-router-dom';
const Nav = () => {
  const [show, setShow] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const menuTimeline = gsap.timeline();
    
    if (isMenuOpen) {
      menuTimeline
        .fromTo('.nav-menu', 
          { x: '-100%' },
          { x: '0%', duration: 0.6, ease: 'power3.out' }
        )
        .fromTo('.nav-menu p',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4 },
          '-=0.2'
        )
        .fromTo('.nav-menu h4',
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.3 },
          '-=0.2'
        )
        .fromTo('.nav-menu ul li',
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
        .to('.nav-menu ul li',
          {
            opacity: 0,
            x: -50,
            rotation: -10,
            duration: 0.3,
            stagger: 0.05,
            ease: 'power2.in'
          }
        )
        .to('.nav-menu h4',
          {
            opacity: 0,
            x: -30,
            duration: 0.3,
            ease: 'power2.in'
          },
          '-=0.2'
        )
        .to('.nav-menu p',
          {
            opacity: 0,
            x: -30,
            duration: 0.3,
            ease: 'power2.in'
          },
          '-=0.2'
        )
        .to('.nav-menu',
          {
            x: '-100%',
            duration: 0.5,
            ease: 'power3.inOut',
            onComplete: () => {
              gsap.set(['.nav-menu ul li', '.nav-menu h4', '.nav-menu p'], {clearProps: 'all'});
            }
          },
          '-=0.2'
        );
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercentage >= 2) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 z-[100] w-full shadow-md transition-transform duration-300 ${show ? 'visible' : 'hidden'}`}>
      <div className="block md:hidden py-2 w-full bg-[#f7ebeb]">
        <a href="#" className="text-[#4F2426] uppercase text-xs md:text-base text-center block hover:underline transition-all duration-300">Visit Brand Website</a>
      </div>
      <div className="w-full h-8 md:h-10 bg-[#4F2426] p-2 px-4 md:px-8">
        <div className="h-full w-full relative">
          <a href="#" className="text-white uppercase text-xs md:text-base hidden md:block hover:underline transition-all duration-300">Visit Brand Website</a>
          <div className="w-[80%] md:w-[35%] h-full absolute left-1/2 -translate-x-1/2 top-0">
            <marquee scrollamount="3" className="text-white text-xs md:text-base">
              Free & Insured Shipping Across India | International Shipping +919884039111
            </marquee>
          </div>
        </div>
      </div>
      <div className="h-16 md:h-[12vh] bg-[#f7ebeb] w-full flex items-center justify-between p-2 px-4 md:px-8">
        <div className="h-6 w-6 md:h-8 md:w-8 cursor-pointer" onClick={toggleMenu}>
      
          <img
            className="h-full w-full object-contain"
            src="/assets/eshop/menu.svg"
            alt=""
          />
      
        </div>

        <div className="flex justify-center items-center gap-1 md:gap-2">
          
          <a href="/gulz" className="h-fit w-16 md:w-28 pr-2">
            <img src="/assets/eshop/Gulz-brown.svg" alt="" />
          </a>
        
          <a href="/" className="text-[#4F2426] text-sm md:text-2xl pl-2 md:pl-3 border-l border-[#4F2426]">
            QUEENS OF HEARTS
          </a>
        </div>

        <div className="w-12 md:w-16 flex justify-between">
          <i className="ri-search-line text-xl md:text-2xl"></i>
          <i className="ri-user-3-fill text-xl md:text-2xl"></i>
        </div>
      </div>

      {isMenuOpen && (
        <div className="nav-menu fixed top-0 left-0 w-[24rem] h-full bg-[#f7ebeb] text-[#4F2426] z-30 shadow-lg overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#f7ebeb] [&::-webkit-scrollbar-thumb]:bg-[#4F2426] [&::-webkit-scrollbar-thumb]:rounded-full">
          <div className="px-8">
            <button
              onClick={toggleMenu}
              className="text-xl font-bold hover:text-gray-500 py-5 px-4 flex justify-end items-center w-full"
            >
              <img
                src="/assets/eshop/output-onlinejpgtools-removebg-preview.png"
                alt="Close"
                className="h-5 ml-auto cursor-pointer transition-transform duration-300 ease-in-out transform hover:rotate-180"
              />
            </button>

            <h4 className="text-lg sm:text-xl font-medium text-[#4F2426] tracking-widest -mt-5">
              Categories
              <span className="block border-b-2 border-[#58282a] w-14 mt-2"></span>
            </h4>

            <ul className="mt-6 space-y-6">
              <li>
                <a href="#" className="text-gray-700 hover:text-[#4F2426] hover:underline hover:underline-offset-2 transition-all duration-500 text-[0.95rem] tracking-widest">
                  Diamond Rings
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-[#4F2426] hover:underline hover:underline-offset-2 transition-all duration-500 text-[0.95rem] tracking-widest">
                  Diamond Earrings
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-[#4F2426] hover:underline hover:underline-offset-2 transition-all duration-500 text-[0.95rem] tracking-widest">
                  Diamond Bracelets
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-[#4F2426] hover:underline hover:underline-offset-2 transition-all duration-500 text-[0.95rem] tracking-widest">
                  Diamond Necklaces
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-[#4F2426] hover:underline hover:underline-offset-2 transition-all duration-500 text-[0.95rem] tracking-widest">
                  Lucky Charms for Kids
                </a>
              </li>
            </ul>

            <div className="text-gray-700 text-[0.95rem] sm:text-[0.95rem] leading-6 py-1 tracking-widest">
              Queen of Hearts - Chennai&apos;s crown jewel of partywear, where lightweight don&apos;t mean low on drama. Our sub-brands are curated in-house, designed to excite & appeal to the lifestyle of those who appreciate craft & all things precious.
            </div>

            <h4 className="text-lg sm:text-xl font-medium text-[#4F2426] tracking-widest mt-8">
              Currated Brands
              <span className="block border-b-2 border-[#4F2426] w-14 mt-2"></span>
            </h4>

            <ul className="mt-3 space-y-4">
              <li>
                <a href="/gulz" className="text-gray-700 hover:text-[#4F2426] hover:underline hover:underline-offset-4 transition-all duration-500 text-[0.95rem] tracking-widest">
                  Gulz - Trendy & Chic Diamonds
                </a>
              </li>
              <li>
                <a href="/gulz" className="text-gray-700 hover:text-[#4F2426] hover:underline hover:underline-offset-4 transition-all duration-500 text-[0.95rem] tracking-widest">
                  Fazza - Gorgeous Polki
                </a>
              </li>
              <li>
                <a href="/festara" className="text-gray-700 hover:text-[#4F2426] hover:underline hover:underline-offset-4 transition-all duration-500 text-[0.95rem] tracking-widest">
                  Festara - Romancing Gemstones
                </a>
              </li>
              <li>
                <a href="/gulz" className="text-gray-700 hover:text-[#4F2426] hover:underline hover:underline-offset-4 transition-all duration-500 text-[0.95rem] tracking-widest">
                  Pache - Precious Jewellery for Men
                </a>
              </li>
            </ul>

            <div className="pt-7 pb-7">
              <a href="#" className="text-gray-700 hover:text-[#4F2426] hover:underline hover:underline-offset-4 transition-all duration-500 block text-base">
                VISIT BRAND WEBSITE
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
