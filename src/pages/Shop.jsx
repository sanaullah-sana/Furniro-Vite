// src/Shop.jsx
import React, { useEffect } from "react";
import introBannerIcon from "../assets/furniro-icon.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/ProductsData";

function Shop() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.prodsData.data);
  const status = useSelector((state) => state.prodsData.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section bg-shop-hero-img bg-cover bg-center w-full min-h-full lg:h-[316px] md:h-[400px] h-[300px] overflow-x-hidden flex items-center justify-center">
        <div className="text-center">
          <img src={introBannerIcon} alt="Intro-Banner-Icon" className="mx-auto mb-2" />
          <h2 className="font-medium lg:text-5xl md:text-4xl text-3xl">Shop</h2>
          <div className="flex items-center justify-center py-2">
            <h6 className="lg:text-base md:text-sm text-xs font-semibold">Home</h6>
            &nbsp;&gt;&nbsp;
            <h6 className="lg:text-base md:text-sm text-xs font-light">Shop</h6>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <h2 className="text-4xl font-semibold text-center font-poppins my-4">Our Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="bg-white rounded-md shadow p-4 flex flex-col group no-underline"
          >
            {/* Image */}
            <div className="relative h-64">
              <img
                src={product.images[0]}
                alt={product.title}
                className="object-cover w-full h-full rounded-md transition-opacity duration-300 group-hover:opacity-70"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 rounded-md cursor-pointer">
                <button className="hidden lg:flex items-center gap-2 bg-white text-[#B88E2F] font-semibold text-sm px-4 py-2 rounded shadow hover:bg-gray-800 hover:text-white transition-colors duration-300 group">
                  Add to Cart
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.5l1.35 9.45a1.5 1.5 0 001.49 1.29h10.92a1.5 1.5 0 001.49-1.29l1.35-9.45h1.5M6 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm12 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="mt-4">
              <h4 className="font-semibold text-lg">{product.title}</h4>
              <h6 className="text-sm text-gray-500">ID: {product.id}</h6>
              <h6 className="text-sm text-gray-500 capitalize">
                Category: {product.category?.name}
              </h6>
              <p className="text-sm text-gray-600">{product.description.slice(0, 40)}...</p>

              {/* Price + Button */}
              <div className="flex items-center gap-4 mt-2 flex-wrap">
                <h5 className="text-lg font-semibold">${product.price}</h5>
                <h6 className="text-sm text-[#B0B0B0] line-through">
                  ${Math.round(product.price * 1.4)}
                </h6>
                <button className="block lg:hidden bg-gray-800 text-white font-semibold text-sm px-4 py-2 rounded shadow hover:bg-[#B88E2F] flex items-center gap-2 group">
                  Add to Cart
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.5l1.35 9.45a1.5 1.5 0 001.49 1.29h10.92a1.5 1.5 0 001.49-1.29l1.35-9.45h1.5M6 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm12 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Shop;
