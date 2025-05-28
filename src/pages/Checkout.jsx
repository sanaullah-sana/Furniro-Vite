import React from 'react'
import introBannerIcon from '../assets/furniro-icon.svg';

function Checkout() {
  return (
    <>
         {/* Hero Section */}
         <section className="hero-section bg-shop-hero-img bg-cover bg-center w-full min-h-full lg:h-[316px] md:h-[400px] h-[300px] overflow-x-hidden flex items-center justify-center">
     <div>
         <img src={introBannerIcon} alt="Intro-Banner-Icon" className="lg:ml-15 md:ml-9 ml-5" />
       <h2 className="font-medium lg:text-5xl md:text-4xl text-3xl">Checkout</h2>
       <div className="flex items-center py-2">
         <h6 className="lg:text-base md:text-sm text-xs font-semibold">Home</h6>
         &nbsp;&gt;&nbsp;
         <h6 className="lg:text-base md:text-sm text-xs font-light">Checkout</h6>
       </div>
     </div>
   </section>
       {/* /Hero Section */}
    </>
  )
}

export default Checkout;
