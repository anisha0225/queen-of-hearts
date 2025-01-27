import React from 'react'

const VisitStore = () => {
  return (
    <div className='relative flex justify-center min-h-[300px] h-[45vh] sm:h-[60vh] md:h-[80vh] bg-cover bg-center items-center bg-[url("/public/assets/khwaahish-inner-view.jpg")] overflow-hidden w-full '>
      <div className='absolute w-[95%] max-w-[1200px] min-h-[180px] h-auto py-8 bg-black/60'>
        <div className='relative flex flex-col justify-center items-center text-white px-4 sm:px-8 md:px-12 lg:px-20'>
          <div className='w-full max-w-[800px]'>
            <h4 className='font-centuryGothic text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-medium leading-snug'>
              VISIT OUR STORE NOW TO VIEW THIS COLLECTION
            </h4>
          </div>
          <div className='text-center mt-6 sm:mt-8 md:mt-10'>
            <a 
              href="https://www.google.com/maps/place/Khwaahish+Diamond+Jewellery/@13.0313087,80.2542243,17z/data=!3m1!4b1!4m6!3m5!1s0x3a5267b22f01d055:0x4fceee85310a87f!8m2!3d13.0313087!4d80.2567992!16s%2Fg%2F1vc80773?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3" 
              target="_blank" 
              rel="noopener noreferrer"
              className='inline-block'
            >
              <i className="ri-map-pin-fill text-xl sm:text-2xl md:text-3xl mr-5 cursor-pointer hover:text-gray-300 transition-colors"></i>
            </a>
            <a 
              href="tel:+91988403911"
              className='inline-block'
            >
              <i className="ri-phone-fill text-xl sm:text-2xl md:text-3xl cursor-pointer hover:text-gray-300 transition-colors"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VisitStore