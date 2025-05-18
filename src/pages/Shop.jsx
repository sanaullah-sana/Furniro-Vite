import React, { useState, useEffect } from "react";
import introBannerIcon from '../assets/furniro-icon.svg';

function Shop() {
  const [prods, setProds] = useState([]);

  const fetchData = async () => {
    let res = await fetch("https://api.escuelajs.co/api/v1/products");
    const products = await res.json();
    console.log(products);
    setProds(products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section class="hero-section bg-shop-hero-img bg-cover bg-center w-full min-h-full lg:h-[316px] md:h-[400px] h-[300px] overflow-x-hidden flex items-center justify-center">
  <div>
      <img src={introBannerIcon} alt="Intro-Banner-Icon" className="lg:ml-4 md:ml-3 ml-0" />
    <h2 class="font-medium lg:text-5xl md:text-4xl text-3xl">Shop</h2>
    <div class="flex items-center py-2">
      <h6 class="lg:text-base md:text-sm text-xs font-semibold">Home</h6>
      &nbsp;&gt;&nbsp;
      <h6 class="lg:text-base md:text-sm text-xs font-light">Shop</h6>
    </div>
  </div>
</section>
    {/* /Hero Section */}
            <h2 className="text-4xl font-semibold text-center font-poppins my-4">
          Our Products
        </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {prods.map((currElem) => (
          <div
            key={currElem.id}
            className="relative group bg-white rounded-lg shadow-md p-4"
          >
            {/* Product Image */}
            <img
              src={currElem.images[0]}
              alt={currElem.title}
              className="w-full h-48 object-cover pb-3 transition-opacity duration-300 group-hover:opacity-70 rounded"
            />

            {/* Hover Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 cursor-pointer rounded">
              <button className="bg-white text-[#B88E2F] font-semibold lg:text-base md:text-sm text-xs px-4 py-2 rounded shadow hover:bg-gray-800 hover:text-white transition-colors duration-300">
                Add to Cart
              </button>
            </div>

            {/* Title */}
            <h4 className="font-semibold lg:text-[1.5rem] md:text-lg text-base lg:mt-2 lg:pl-0 pl-2">
              {currElem.title}
            </h4>

            {/* ID */}
            <h6 className="lg:text-base md:text-sm text-xs text-gray-500 lg:pl-0 pl-2">
              ID: {currElem.id}
            </h6>

            {/* Category */}
            <h6 className="lg:text-base md:text-sm text-xs text-gray-500 lg:pl-0 pl-2">
              Category: {currElem.category?.name}
            </h6>

            {/* Description */}
            <h6 className="lg:text-base md:text-sm text-xs text-gray-500 lg:pl-0 pl-2">
              {currElem.description.slice(0, 40)}...
            </h6>

            {/* Price */}
            <div className="flex lg:flex-row flex-col lg:items-center items-start lg:gap-5 gap-0 lg:pl-0 pl-2">
              <h5 className="lg:text-xl md:text-lg text-base font-semibold">
                ${currElem.price}
              </h5>
              <h6 className="lg:text-base md:text-sm text-xs text-[#B0B0B0] line-through">
                ${Math.round(currElem.price * 1.4)}
              </h6>
            </div>
          </div>
        ))}
      </div>

    </>
  );
}

export default Shop;