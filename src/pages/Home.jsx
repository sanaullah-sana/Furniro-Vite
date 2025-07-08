import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../store/ProductsData";
import introImg from "../assets/img/intro-section-img.jpg";
import varietyOne from "../assets/img/bedroom.jpg";
import varietyTwo from "../assets/img/dining.jpg";
import varietyThree from "../assets/img/living.jpg";
import Slider from "../components/Slider";
import { Link } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector((state) => state.prodsData.data.slice(0, 6));
  const status = useSelector((state) => state.prodsData.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="w-screen">
          <div className="relative">
            <img
              src={introImg}
              alt="Intro-Banner-Image"
              className="lg:w-full h-auto object-cover"
              width={1200}
              height={700}
            />
            <div className="absolute lg:top-40 lg:right-15 md:top-24 top-0 right-8 bg-[#FFF3E3] lg:w-[643px] lg:h-[443px] md:w-[300px] md:h-[250px] w-[250px] h-[230px] lg:py-12 lg:px-10 py-6 px-5">
              <h3 className="font-semibold lg:text-base lg:tracking-widest lg:mb-3 mb-1 md:text-sm text-xs font-poppins">
                New Arrival
              </h3>
              <h1 className="font-semibold lg:text-[3.25rem] lg:leading-[55px] text-[#B88E2F] lg:mb-4 mb-2 text-2xl font-poppins">
                Discover Our
                <br /> New Collection
              </h1>
              <p className="font-medium lg:text-lg lg:leading-[24px] lg:mb-6 text-[0.7rem] font-poppins">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                <br className="lg:block hidden" /> elit tellus, luctus nec
                ullamcorper mattis.
              </p>
              <button
                onClick={() => navigate("/shop")}
                className="bg-[#B88E2F] lg:py-4 lg:px-12 py-2 px-6 mt-4 text-white lg:text-base font-semibold text-xs font-poppins"
              >
                Buy Now
              </button>
            </div>
          </div>
        </section>

        {/* Slider */}
        <Slider />

        {/* Varieties Section */}
<section className="varieties-section">
  <div className="container max-w-[1183px] mx-auto my-10 px-4">
    <div>
      <h3 className="font-bold lg:text-[2rem] md:text-[1.5rem] text-[1rem] text-center">
        Browse The Range
      </h3>
      <p className="text-center lg:text-[1.25rem] md:text-base text-[0.7rem]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
      <div className="hover:scale-105 hover:shadow-lg transition-transform duration-300">
        <img
          src={varietyOne}
          alt="Dining"
          className="w-full h-auto object-cover rounded-md"
        />
        <h4 className="text-center lg:pt-5 pt-2 lg:text-2xl text-base font-semibold">
          Dining
        </h4>
      </div>

      <div className="hover:scale-105 hover:shadow-lg transition-transform duration-300">
        <img
          src={varietyTwo}
          alt="Living"
          className="w-full h-auto object-cover rounded-md"
        />
        <h4 className="text-center lg:pt-5 pt-2 lg:text-2xl text-base font-semibold">
          Living
        </h4>
      </div>

      <div className="hover:scale-105 hover:shadow-lg transition-transform duration-300">
        <img
          src={varietyThree}
          alt="Bedroom"
          className="w-full h-auto object-cover rounded-md"
        />
        <h4 className="text-center lg:pt-5 pt-2 lg:text-2xl text-base font-semibold">
          Bedroom
        </h4>
      </div>
    </div>
  </div>
</section>


        {/* Featured Products */}
        <h2 className="text-4xl font-semibold text-center font-poppins my-4">Our Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="bg-white rounded-md shadow p-4 flex flex-col group"
            >
              <div className="relative aspect-w-4 aspect-h-3">
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

              <div className="mt-4">
                <h4 className="font-semibold text-lg">{product.title}</h4>
                <h6 className="text-sm text-gray-500">ID: {product.id}</h6>
                <h6 className="text-sm text-gray-500 capitalize">Category: {product.category?.name}</h6>
                <p className="text-sm text-gray-600">{product.description.slice(0, 40)}...</p>
                <div className="flex items-center gap-4 mt-2">
                  <h5 className="text-lg font-semibold">${product.price}</h5>
                  <h6 className="text-sm text-[#B0B0B0] line-through">${Math.round(product.price * 1.4)}</h6>
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

        {/* Show More Button */}
        <div className="text-center mt-6 mb-10">
          <button
            onClick={() => navigate("/shop")}
            className="relative overflow-hidden border border-[#B88E2F] lg:px-18 px-5 lg:py-3 py-2 font-semibold lg:text-base text-sm text-[#B88E2F] group cursor-pointer"
          >
            <span className="relative z-10 text-[#B88E2F] group-hover:text-white transition duration-300">
              Show More
            </span>
            <span className="absolute inset-0 bg-[#B88E2F] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></span>
          </button>
        </div>
      </main>
    </>
  );
}

export default Home;
