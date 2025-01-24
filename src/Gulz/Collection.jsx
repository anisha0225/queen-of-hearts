import React from "react";
import { Helmet } from "react-helmet";

const Collection = () => {
  return (
    <>
      <Helmet>
        <title>The Story Behind Our Collection | Gulz Jewelry</title>
        <meta name="description" content="Learn about the inspiration behind our collection - named after our founder and inspired by Persian culture. Each piece tells a unique story of heritage and craftsmanship." />
        <meta name="keywords" content="jewelry collection, Persian inspired jewelry, luxury diamond jewelry, Gulz story, jewelry heritage, handcrafted jewelry" />
        <meta property="og:title" content="The Story Behind Our Collection | Gulz Jewelry" />
        <meta property="og:description" content="Learn about the inspiration behind our collection - named after our founder and inspired by Persian culture. Each piece tells a unique story of heritage and craftsmanship." />
        <meta name="twitter:title" content="The Story Behind Our Collection | Gulz Jewelry" />
        <meta name="twitter:description" content="Learn about the inspiration behind our collection - named after our founder and inspired by Persian culture. Each piece tells a unique story of heritage and craftsmanship." />
      </Helmet>

      <div className="md:h-[130vh] w-full bg-[#F7ECEB] lg:-mt-10md:-mt-10">
        <h1 className="text-[1.2rem] md:text-[1.7rem] text-center font-light uppercase text-amber-950 tracking-[0.4rem]">
          Gulz collection - The <br className="md:hidden" /> Muse
          <span className="flex border-b-2 border-[#58282a] w-16 sm:w-20 md:w-24 mt-2 mx-auto"></span>
        </h1>

        <div className="flex items-center justify-center md:flex-col flex-col-reverse">
          <p className="text-center w-[90%] md:w-[60%] tracking-wider mx-auto text-xs md:text-sm font-light mt-4">
            "Gul" in Persian origin means Rose. Inspired and also named after one
            of the Founders Gulan Chetan, this collection's unique and captivating
            beauty is a story to be unfolded…
          </p>

          <div className="h-[70vh] md:h-[100vh] w-[90%] md:w-[80%] mt-3 mx-auto bg-red-500">
            <video
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              aria-label="Promotional video for Gulz Collection"
              src="/assets/videoplayback.mp4"
            ></video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collection;
