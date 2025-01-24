import React, { useRef } from 'react'

const Galleria = () => {
  const galleriaRef = useRef(null)

  return (
    <section ref={galleriaRef} className="text-center w-full h-auto flex-col py-8 sm:py-16">
      {/* Header Section */}
      <div className="flex items-center justify-center mb-4 sm:mb-8">
        <hr className="w-6 sm:w-8 lg:w-16 h-0.5 bg-gray-700 border-0 rounded" />
        <span className="text-base sm:text-lg lg:text-3xl text-gray-700 mx-2 sm:mx-4">
          THE GALLERIA
        </span>
        <hr className="w-6 sm:w-8 lg:w-16 h-0.5 bg-gray-700 border-0 rounded" />
      </div>

      {/* Description */}
      <p className="text-sm sm:text-base lg:text-lg text-gray-800 mb-2 sm:mb-4 tracking-wide px-4 sm:px-0">
        Khwaahish Diamond Jewellery, Chennai
      </p>
      <p className="text-xs sm:text-sm lg:text-base text-gray-500 tracking-wide px-4 sm:px-16 lg:px-72 mb-6 sm:mb-8 leading-5 sm:leading-6">
        Located in the heart of Chennai, Queen Of Hearts, Jewels Galleria, brings the finest accessible
        diamond jewellery to life. Explore curated collections in a space designed for luxury and
        personalised service.
      </p>

      {/* Image Section */}
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-0">
        <img
          src="/assets/Khwaahish-Store-img.jpg"
          alt="Khwaahish Galleria"
          className="w-full max-w-5xl h-[250px] sm:h-[350px] lg:h-[35rem] mx-auto border-4 sm:border-8 border-gray-100 cursor-pointer transition-transform"
          onClick={() => document.getElementById('imageModal').classList.remove('hidden')}
        />

        {/* Modal */}
        <div
          id="imageModal"
          className="hidden fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center"
        >
          <div className="relative w-full h-full flex items-center justify-center px-2 sm:px-4">
            <img
              id="modalImage"
              src="/assets/Khwaahish-Store-img.jpg"
              alt="Khwaahish Galleria"
              className="max-w-[95%] sm:max-w-[90%] max-h-[90vh] object-contain cursor-zoom-in transition-transform"
              onClick={(e) => {
                const img = e.target;
                if (img.classList.contains('zoomed')) {
                  img.style.transform = 'scale(1)';
                  img.classList.remove('zoomed');
                  img.classList.add('cursor-zoom-in');
                  img.classList.remove('cursor-zoom-out');
                } else {
                  img.style.transform = 'scale(2)';
                  img.classList.add('zoomed');
                  img.classList.remove('cursor-zoom-in');
                  img.classList.add('cursor-zoom-out');
                }
              }}
              onMouseMove={(e) => {
                const img = e.target;
                if (img.classList.contains('zoomed')) {
                  const rect = img.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const xPercent = (x / rect.width) * 100;
                  const yPercent = (y / rect.height) * 100;
                  img.style.transformOrigin = `${xPercent}% ${yPercent}%`;
                }
              }}
            />

            {/* Modal Buttons */}
            <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex space-x-2 sm:space-x-4">
              {/* Zoom Button */}
              <button
                className="p-1.5 sm:p-2 bg-white rounded-full hover:bg-gray-100"
                onClick={() => {
                  const img = document.getElementById('modalImage');
                  if (img.classList.contains('zoomed')) {
                    img.style.transform = 'scale(1)';
                    img.classList.remove('zoomed');
                  } else {
                    img.style.transform = 'scale(2)';
                    img.classList.add('zoomed');
                  }
                }}
              >
                <svg
                  className="w-4 h-4 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              {/* Fullscreen Button */}
              <button
                className="p-1.5 sm:p-2 bg-white rounded-full hover:bg-gray-100"
                onClick={() => {
                  const elem = document.getElementById('modalImage');
                  if (!document.fullscreenElement) {
                    elem.requestFullscreen();
                  } else {
                    document.exitFullscreen();
                  }
                }}
              >
                <svg
                  className="w-4 h-4 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                  />
                </svg>
              </button>

              {/* Share Button */}
              <button
                className="p-1.5 sm:p-2 bg-white rounded-full hover:bg-gray-100"
                onClick={() => {
                  if (navigator.share) {
                    navigator
                      .share({
                        title: 'Khwaahish Galleria',
                        text: 'Check out our beautiful jewelry store!',
                        url: window.location.href,
                      })
                      .catch(console.error);
                  } else {
                    navigator.clipboard.writeText(window.location.href).then(() =>
                      alert('Link copied to clipboard!')
                    );
                  }
                }}
              >
                <svg
                  className="w-4 h-4 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
              </button>

              {/* Close Button */}
              <button
                className="p-1.5 sm:p-2 bg-white rounded-full hover:bg-gray-100"
                onClick={() => {
                  const modal = document.getElementById('imageModal');
                  modal.classList.add('hidden');
                }}
              >
                <svg
                  className="w-4 h-4 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Galleria
