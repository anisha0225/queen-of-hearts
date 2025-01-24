import React from 'react'


const VisitStore = () => {
  return (
    <div className='relative flex justify-center h-[45vh] md:h-[80vh] bg-cover bg-center items-center bg-[url("/public/assets/khwaahish-inner-view.jpg")] overflow-hidden'>
       <div className='absolute w-[90%] md:w-[900px] lg:w-[980px] h-[180px] sm:h-[230px] bg-black opacity-60'></div>
       <div className='relative flex-col justify-center items-center text-white py-4 sm:py-8  sm:px-48'>
       <div>
            <h4 className='font-centuryGothic text-[1.6rem] sm:text-3xl md:text-[2.5rem] text-center font-medium '>VISIT OUR STORE NOW TO VIEW THIS COLLECTION</h4>
        </div>
        <div className='text-center mt-4 sm:mt-6'>
          <a 
            href="https://www.google.com/maps/place/Khwaahish+Diamond+Jewellery/@13.0313087,80.2542243,17z/data=!3m1!4b1!4m6!3m5!1s0x3a5267b22f01d055:0x4fceee85310a87f!8m2!3d13.0313087!4d80.2567992!16s%2Fg%2F1vc80773?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className="ri-map-pin-fill text-2xl sm:text-3xl mr-5 cursor-pointer hover:text-gray-300"></i>
          </a>
          <a href="tel:+91988403911">
            <i className="ri-phone-fill text-2xl sm:text-3xl cursor-pointer hover:text-gray-300"></i>
          </a>
        </div>
       </div>
    </div>
  )
}

export default VisitStore