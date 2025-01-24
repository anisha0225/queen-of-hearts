import React from 'react'
import { Helmet } from 'react-helmet'

const Benifit = () => {
  return (
    <>
      <Helmet>
        <title>E-Shop Benefits & Services | Gulz Jewelry</title>
        <meta name="description" content="Discover our premium e-shop benefits including free shipping, quality assurance, and lifetime exchange policy. Shop luxury jewelry with confidence." />
        <meta name="keywords" content="jewelry delivery, free shipping, jewelry quality, lifetime exchange, diamond jewelry, Gulz benefits" />
        <meta property="og:title" content="E-Shop Benefits & Services | Gulz Jewelry" />
        <meta property="og:description" content="Discover our premium e-shop benefits including free shipping, quality assurance, and lifetime exchange policy. Shop luxury jewelry with confidence." />
        <meta name="twitter:title" content="E-Shop Benefits & Services | Gulz Jewelry" />
        <meta name="twitter:description" content="Discover our premium e-shop benefits including free shipping, quality assurance, and lifetime exchange policy. Shop luxury jewelry with confidence." />
      </Helmet>

      <div className='min-h-[60vh] w-full bg-[#F7ECEB] py-8 md:py-10'>
       


<h1 className="text-xl sm:text-2xl md:text-[1.6rem] text-center mt-1 sm:mt-3 md:-mt-4 uppercase text-[#4F2426] tracking-[0.2rem] sm:tracking-[0.4rem]">
          E-shop Benefits
          <span className="flex border-b-2 border-[#58282a] w-16 sm:w-20 md:w-24 mt-2 mx-auto"></span>
        </h1>
        <div className='w-[95%] md:w-[90%] mt-6 md:mt-10 mx-auto flex flex-col md:flex-row justify-center items-stretch gap-6 md:gap-7 md:mt-5'>
          <div className='w-full md:w-[30%] flex flex-col p-4 md:p-10 gap-4 md:gap-5 items-center'>
            <div className='h-8 md:h-10 w-12 md:w-14'>
              <img className='h-full w-full object-contain' src="/assets/eshop/benifit1.svg" alt="Delivery and Returns Icon" />
            </div>
            <h2 className='text-center text-xl md:text-[1.4rem] font-light text-amber-900 tracking-[0.4rem]'>Delivery & Returns</h2>
            <p className='text-center font-light text-sm md:text-[0.9rem] tracking-widest leading-2 text-gray-600'>Complementary and secured shipping across India. 10 day complimentary Return policy within India. Your order will be shipped to you fully insured by reputed carriers.</p>
          </div>

          <div className='w-full md:w-[30%] flex flex-col p-4 md:p-10 gap-4 md:gap-5 items-center'>
            <div className='h-8 md:h-10 w-12 md:w-14'>
              <img className='h-full w-full object-contain' src="/assets/eshop/benifit2.svg" alt="Quality Assurance Icon" />
            </div>
            <h2 className='text-center text-xl md:text-[1.4rem] font-light text-amber-900 tracking-[0.4rem]'>Quality</h2>
            <p className='text-center font-light text-sm md:text-[0.9rem] tracking-widest leading-2 text-gray-600'>Exceptional quality of diamonds, gemstones and crafting techniques. We are recognised for our diamond expertise and unique craftsmanship. Every diamond and precious gemstone used is handpicked and ethically sourced by our inhouse team of experts.</p>
          </div>

          <div className='w-full md:w-[30%] flex flex-col p-4 md:p-10 gap-4 md:gap-5 items-center'>
            <div className='h-8 md:h-10 w-12 md:w-14'>
              <img className='h-full w-full object-contain' src="/assets/eshop/benifit3.svg" alt="Lifetime Exchange Icon" />
            </div>
            <h2 className='text-center text-xl md:text-[1.4rem] font-light text-amber-900 tracking-[0.4rem]'>Lifetime Exchange</h2>
            <p className='text-center font-light text-sm md:text-[0.9rem] tracking-widest leading-2 text-gray-600'>Exchange your old gold with us anytime and upgrade to a brand new piece of Jewellery. We follow a detailed process to assess the purity of old gold received and offer the best exchange value as per current market standards.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Benifit