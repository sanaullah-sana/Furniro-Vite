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
      className="bg-white rounded-md shadow p-4 flex flex-col group"
    >
      {/* Image Wrapper with Overlay */}
      <div className="relative aspect-w-4 aspect-h-3">
        <img
          src={currElem.images[0]}
          alt={currElem.title}
          className="object-cover w-full h-full rounded-md transition-opacity duration-300 group-hover:opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 rounded-md cursor-pointer">
          <button className="bg-white text-[#B88E2F] font-semibold text-sm px-4 py-2 rounded shadow hover:bg-gray-800 hover:text-white transition-colors duration-300">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-4">
        <h4 className="font-semibold text-lg">{currElem.title}</h4>
        <h6 className="text-sm text-gray-500">ID: {currElem.id}</h6>
        <h6 className="text-sm text-gray-500">Category: {currElem.category?.name}</h6>
        <p className="text-sm text-gray-600">{currElem.description.slice(0, 40)}...</p>

        {/* Price */}
        <div className="flex items-center gap-4 mt-2">
          <h5 className="text-lg font-semibold">${currElem.price}</h5>
          <h6 className="text-sm text-[#B0B0B0] line-through">
            ${Math.round(currElem.price * 1.4)}
          </h6>
        </div>
      </div>
    </div>
  ))}
</div>


    </>
  );
}

export default Shop;