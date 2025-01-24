import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

  return (
    <div className="h-[60vh] md:h-screen w-full relative">
                 {isMenuOpen && (
        <div className="menu fixed top-0 left-0 w-full md:w-[24rem] lg:w-[24rem] sm:w-full h-full bg-[#f7ebeb] text-[#4F2426] z-30 shadow-lg overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-[#4F2426] [&::-webkit-scrollbar-thumb]:rounded">
          <div className="p-4">
            <button
              onClick={toggleMenu}
              className="text-xl font-bold hover:text-gray-500 px-4 flex justify-end items-center w-full"
            >
              <img
                src="/assets/eshop/output-onlinejpgtools-removebg-preview.png"
                alt="Close"
                className="h-5 ml-auto cursor-pointer transition-transform duration-300 ease-in-out transform hover:rotate-180"
              />
            </button>

           

            <h4 className="text-lg sm:text-xl font-semibold px-1 text-[#4F2426] tracking-widest">
              Categories
              <span className="block border-b-2 border-[#4F2426] w-14 mt-2"></span>
            </h4>

            <ul className="mt-6 space-y-4 px-2">
              <li>
                <Link
                  to="/gulz"
                  className="text-gray-800 hover:text-[#4F2426] hover:underline hover:underline-offset-4 transition-all duration-500 text-[0.95rem] tracking-widest"
                >
                  Diamond Rings
                </Link>
              </li>

              <li>
              <Link
                  to="/gulz"
                  className="text-gray-800 hover:text-[#4F2426] hover:underline hover:underline-offset-4 transition-all duration-500 text-[0.95rem] tracking-widest"
                >
                  Diamond Earrings
                </Link>
              </li>
              <li>
              <Link
                  to="/gulz"
                  className="text-gray-800 hover:text-[#4F2426] hover:underline hover:underline-offset-4 transition-all duration-500 text-[0.95rem] tracking-widest"
                >
                  Diamond Bracelets
                </Link>
              </li>
              <li>
              <Link
                  to="/gulz"
                  className="text-gray-800 hover:text-[#4F2426] hover:underline hover:underline-offset-4 transition-all duration-500 text-[0.95rem] tracking-widest"
                >
                  Diamond Necklaces
                </Link>
                </li>
                <li>
                <Link
                  to="/gulz"
                  className="text-gray-800 hover:text-[#4F2426] hover:underline hover:underline-offset-4 transition-all duration-500 text-[0.95rem] tracking-widest"
                >
                Lucky Charms for Kids
                </Link>
                </li>
              
              <div className="text-gray-700 text-[0.95rem] sm:text-[0.95rem] leading-6 py-8 tracking-widest">
              Queen of Hearts - Chennai&apos;s crown jewel of partywear, where lightweight don&apos;t mean low on drama. Our sub-brands are curated in-house, designed to excite & appeal to the lifestyle of those who appreciate craft & all things precious.
            </div>
            <h4 className="text-lg sm:text-xl font-semibold px-1 text-[#4F2426] tracking-widest">
              Currated Brands
              <span className="block border-b-2 border-[#4F2426] w-14 mt-2"></span>
            </h4>
            
            <li>
                <Link
                  to="/gulz"
                  className="text-gray-800 hover:text-[#4F2426] hover:underline hover:underline-offset-4 transition-all duration-500 text-[0.95rem] tracking-widest"
                >
                  Gulz-Trendy & Chic Diamonds
                </Link>
              </li>

              <li>
              <Link
                  to="/fazza"
                  className="text-gray-800 hover:text-[#4F2426] hover:underline hover:underline-offset-4 transition-all duration-500 text-[0.95rem] tracking-widest"
                >
                  Fazza-Gorgeous Polki
                </Link>
              </li>
              <li>
              <Link
                  to="/festara"
                  className="text-gray-800 hover:text-[#4F2426] hover:underline hover:underline-offset-4 transition-all duration-500 text-[0.95rem] tracking-widest"
                >
                  Festara-Romancing Gemstones
                </Link>
              </li>
              <li>
              <Link
                  to="/gulz"
                  className="text-gray-800 hover:text-[#4F2426] hover:underline hover:underline-offset-4 transition-all duration-500 text-[0.95rem] tracking-widest"
                >
                  Pache-Precious Jewellery for Men
                </Link>
              </li>
              
        
            </ul>
            
            <Link
              to="/"
              className="text-[#4F2426] hover:text-yellow-600 hover:underline hover:underline-offset-4 transition-all duration-500 mt-10 block text-base sm:text-lg"
            >
              VISIT BRAND WEBSITE
            </Link>
          </div>
        </div>
      )}
      <div className=" h-20 w-full absolute top-0 left-0">
        <div className="block md:hidden py-2 w-full bg-[#f7ebeb]">
          <a href="#" className="text-[#4F2426] uppercase text-xs md:text-base text-center block hover:underline transition-all duration-300">
            Visit Brand Website
          </a>
        </div>
        <div className="w-full h-8 md:h-10 bg-[#4F2426]/50 p-2 px-4 md:px-8">
          <div className="h-full w-full relative">
            <a href="#" className="text-white uppercase text-xs md:text-base hidden md:block hover:underline transition-all duration-300">
              Visit Brand Website
            </a>
            <div className="w-[80%] md:w-[35%] h-full absolute left-1/2 -translate-x-1/2 top-0">
              <marquee className="text-white text-xs md:text-base">
                Free & Insured Shipping Across India | International Shipping
                +91 9884039111
              </marquee>
            </div>
          </div>
        </div>
        <div className="h-16 md:h-[12vh] w-full flex items-center justify-between p-2 px-4 md:px-8">
          <div className="h-6 w-6 md:h-8 md:w-8 cursor-pointer" onClick={toggleMenu}>
            <img
              className="h-full w-full object-contain"
              src="/assets/eshop/menu-white.svg"
              alt=""
            />
          </div>

          <div className="flex justify-center items-center gap-1 md:gap-2">
            <a href="/gulz" className="h-fit w-16 md:w-28 pr-2">
              <img src="/assets/eshop/Gulz-Logo.svg" alt="" />
            </a>
            
            <a href="/" className="text-white text-sm md:text-2xl pl-2 md:pl-3 border-l border-white">
              QUEEN OF HEARTS
            </a>
            
          </div>

          <div className="w-12 md:w-16 flex justify-between">
            <i className="ri-search-line text-xl md:text-2xl text-white"></i>
            <i className="ri-user-3-fill text-xl md:text-2xl text-white"></i>
          </div>
        </div>
      </div>

      <img
        className="hidden md:block h-full w-full object-cover object-left-top"
        src="/assets/eshop/headerPc.avif"
        alt=""
      />
      
  
      <img
        className="md:hidden h-full w-full object-cover object-left-top"
        src="/assets/eshop/header.avif"
        alt=""
      />

 
    </div>
  );
};

export default Header;
