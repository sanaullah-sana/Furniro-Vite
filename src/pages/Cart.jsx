import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import introBannerIcon from '../assets/furniro-icon.svg';

function Cart() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [prods, setProds] = useState({});
  const [quantity, setQuantity] = useState(1);

  const fetchData = async () => {
    try {
      let res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
      const product = await res.json();
      setProds(product);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleIncrease = () => setQuantity(prev => prev + 1);
  const handleDecrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  const handleRemove = () => navigate('/');

  const totalPrice = Math.round(prods.price * quantity);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section bg-shop-hero-img bg-cover bg-center w-full min-h-full lg:h-[316px] md:h-[400px] h-[300px] overflow-x-hidden flex items-center justify-center text-center px-4">
        <div>
          <img src={introBannerIcon} alt="Intro-Banner-Icon" className="mx-auto mb-2" />
          <h2 className="font-medium lg:text-5xl md:text-4xl text-3xl">Cart</h2>
          <div className="flex justify-center items-center py-2 text-xs sm:text-sm">
            <h6 className="font-semibold">Home</h6>
            &nbsp;&gt;&nbsp;
            <h6 className="font-light">Cart</h6>
          </div>
        </div>
      </section>

      {/* Cart Content */}
      <div className="max-w-3xl mx-auto p-4">
        {/* Cart item */}
        <div className="flex flex-col sm:flex-row items-center gap-6 border rounded-lg p-4 shadow-md">
          {/* Image */}
          <img
            src={prods.images?.[0]}
            alt={prods.title}
            className="w-full sm:w-32 h-32 object-cover rounded-md"
          />

          {/* Title & Price */}
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-lg sm:text-xl font-semibold">{prods.title}</h2>
            <h3 className="text-base text-gray-600">Price: ${prods.price}</h3>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center gap-3 mt-2 sm:mt-0">
            <button
              onClick={handleDecrease}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 hover:border-gray-600"
            >
              −
            </button>
            <span className="font-medium">{quantity}</span>
            <button
              onClick={handleIncrease}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 hover:border-gray-600"
            >
              +
            </button>
          </div>

          {/* Remove Button */}
          <button
            onClick={handleRemove}
            className="mt-3 sm:mt-0 bg-gray-600 text-white px-3 py-2 rounded text-sm sm:text-base"
          >
            Delete
          </button>
        </div>

        {/* Total Price */}
        <div className="mt-4 text-right font-bold text-sm sm:text-base">
          Total Price: ${totalPrice}
        </div>

        {/* Checkout Button */}
        <div className="mt-4">
          <button
            onClick={() => navigate('/checkout')}
            className="cursor-pointer w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded font-semibold"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;



