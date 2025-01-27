import React from 'react'

import Video from "/assets/videoplayback.mp4"

const AdCampaign = () => {
  return (
    <div className='flex flex-col items-center pt-10 -mb-4 sm:-mb-0 lg:-mb-0 md:-mb-8 md:pb-0 sm:pb-0 lg:pb-4 overflow-hidden'>
      <div className='flex flex-col items-center justify-center px-4 sm:px-0'>
        <div className="flex items-center justify-center mb-3">
          <hr className="w-8 sm:w-16 h-0.5 bg-gray-700 border-0 rounded" />
          <span className="text-sm sm:text-[1.8rem] text-gray-700 mx-2 sm:mx-4 tracking-widest">Our Ad Campaign</span>
          <hr className="w-8 sm:w-16 h-0.5 bg-gray-700 border-0 rounded" />
        </div>
        <video autoPlay muted controls className='w-screen py-4' src={Video} />
       
      </div>

    </div>
  )
}

export default AdCampaign
