import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/ProductsData";
import { useNavigate } from "react-router-dom";
import introBannerIcon from '../assets/furniro-icon.svg';

function SingleProduct() {
    const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.prodsData.data);
  const status = useSelector((state) => state.prodsData.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const product = products.find((prod) => prod.id === parseInt(id));

  if (!product) {
    return <div className="text-center p-6 text-lg">Loading product...</div>;
  }

  return (
    <>
          {/* Hero Section */}
          <section className="hero-section bg-shop-hero-img bg-cover bg-center w-full min-h-full lg:h-[316px] md:h-[400px] h-[300px] overflow-x-hidden flex items-center justify-center text-center px-4">
            <div>
              <img src={introBannerIcon} alt="Intro-Banner-Icon" className="mx-auto mb-2" />
              <h2 className="font-medium lg:text-5xl md:text-4xl text-3xl">Product Details</h2>
              <div className="flex justify-center items-center py-2 text-xs sm:text-sm">
                <h6 className="font-semibold">Home</h6>
                &nbsp;&gt;&nbsp;
                <h6 className="font-light">Product Details</h6>
              </div>
            </div>
          </section>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Product Image */}
        <div className="w-full">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-auto max-h-[500px] object-cover rounded-md"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{product.title}</h2>
          <p className="text-sm sm:text-base text-gray-600">
            Category: <span className="capitalize">{product.category?.name}</span>
          </p>
          <p className="text-xl sm:text-2xl font-semibold text-[#B88E2F]">Price: 
            ${product.price}
          </p>
          <p className="text-gray-700 text-sm sm:text-base">
            {product.description}
          </p>

          {/* Add to Cart Button */}
          <button onClick={() => navigate(`/cart/${product.id}`)} className="cursor-pointer bg-[#B88E2F] hover:bg-black text-white font-medium px-6 py-3 rounded-md transition duration-300 w-full sm:w-auto">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default SingleProduct;
