import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto ">
        <div className="flex flex-col sm:flex-row flex-wrap">
          {/* Logo with link */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 lg:justify-start flex lg:items-center ">
            <div className="flex items-center lg:justify-start text-center justify-center sm:justify-start mx-auto">
              <img src="/assets/i-2.png" alt="Khwaahish Logo" className="px-5 h-14 sm:h-14" />
              <div className="mx-4 h-10 w-px bg-gray-900"></div>
              <Link to="/" className="text-gray-900 text-xl">QUEEN OF HEARTS</Link>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="w-full xs:w-1/2 sm:w-1/2 lg:w-1/4 mb-8 ">
            <h3 className="text-sm font-semibold mb-4 text-gray-700 text-center sm:text-left">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center sm:justify-start">
                <img src="/assets/telephone.png" alt="Phone" className="h-4 w-4 mr-2" />
                <span className="text-sm tracking-wider text-gray-600">+91 9884039111</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <img src="/assets/email.png" alt="Email" className="h-4 w-4 mr-2" />
                <a href="mailto:info@khwaahish.com" className="hover:text-yellow-700 text-sm tracking-wider text-gray-600">
                  admin@khwaahish.com
                </a>
              </div>
              <div className="flex justify-center sm:justify-start space-x-4 py-4">
                <a href="https://www.instagram.com/khwaahishdiamonds/?fbclid=IwAR0_UCtUEmZOzJTlxbIS5rWrWCF-1oDDlczHZU8dTUAOaVEHX2g4kbwco_A" className="hover:opacity-75">
                  <img src="/assets/i-b.png" alt="Instagram" className="h-5 w-5" />
                </a>
                <a href="https://www.facebook.com/khwaahishdiamondschennai" className="hover:opacity-75">
                  <img src="/assets/f-b.png" alt="Facebook" className="h-5 w-5" />
                </a>
                <a href="https://www.youtube.com/channel/UCLI3kQ273vEJqY64yJ9rzDQ" className="hover:opacity-75">
                  <img src="/assets/y-b.png" alt="YouTube" className="h-5 w-5" />
                </a>
                <a href="https://api.whatsapp.com/send?phone=919884039111&text=Hi%20Khwaahish%20Team,%20I%20am%20interested%20in%20visiting%20the%20store%20on%20an%20appointment%20basis.%20Please%20get%20in%20touch%20with%20me%20at%20the%20earliest." className="hover:opacity-75">
                  <img src="/assets/w-b.png" alt="WhatsApp" className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Address Section */}
          <div className="w-full xs:w-1/2 sm:w-1/2 lg:w-1/4 mb-8">
            <h3 className="text-sm font-semibold mb-4 text-gray-700 text-center sm:text-left">Address</h3>
            <div className="flex items-center justify-center sm:justify-start">
              <img src="/assets/location-pin.png" alt="Phone" className="h-4 w-4 mr-2" />
              <a href="https://www.google.com/search?q=khwaahishdiamonds&sei=NB-QZ-3yK_6jseMP0bP0wAQ" className="text-sm tracking-widest text-gray-600 text-center sm:text-left">
                No: 53/2, C.P. Ramaswamy Road,<br/>
                Abiramapuram,Chennai,<br/>
                Tamil Nadu 600018
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="w-full xs:w-1/2 sm:w-1/2 lg:w-1/4 mb-8">
            <h3 className="text-sm font-semibold mb-4 text-gray-700 text-center sm:text-left">Quick Links</h3>
            <ul className="flex flex-row flex-wrap justify-center sm:flex-col sm:justify-start gap-4 sm:gap-2 text-sm">
              <li><a href="/collections" className="text-gray-600 hover:text-yellow-700 tracking-wider">Blog</a></li>
              <li><a href="/about" className="text-gray-600 hover:text-yellow-700 tracking-wider">Our Story</a></li>
              <li><a href="/services" className="text-gray-600 hover:text-yellow-700 tracking-wider">Privacy Policy</a></li>
              <li><a href="/blog" className="text-gray-600 hover:text-yellow-700 tracking-wider">Contact Us</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-yellow-700 tracking-wider">Terms and Conditions</a></li>
            </ul>
          </div>

          {/* Payment Section */}
          <div className="w-full flex flex-col items-center lg:flex-col lg:items-start mt-8 px-6">
            <img src="/assets/payment-gateway-logos.avif" alt="Store" className="w-full sm:w-96 rounded-lg mb-4 h-8" />
            <div className="flex flex-col sm:flex-row items-center text-m text-gray-500">
              <span>© 2025</span>
              <div className="hidden sm:block mx-2 h-4 w-px bg-gray-300"></div>
              <a href="/sitemap" className="text-yellow-700 px-2">HTML Sitemap</a>
              <p className="text-sm text-gray-500">Designed for Khwaahish, All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
