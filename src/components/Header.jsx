import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faUser,
  faHeart,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 relative">
      <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-8 w-auto" width={100} height={32} />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-20">
          <ul className="flex space-x-20">
            <li>
              <Link
                to="/"
                className="text-gray-700 hover:text-black focus:underline dark:text-white font-medium font-poppins"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="text-gray-700 hover:text-black focus:underline dark:text-white font-medium font-poppins"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-700 hover:text-black focus:underline dark:text-white font-medium font-poppins"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-black focus:underline dark:text-white font-medium font-poppins"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <FontAwesomeIcon
            icon={faUser}
            className="text-gray-700 dark:text-white cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="text-gray-700 dark:text-white cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="text-gray-700 dark:text-white cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faHeart}
            className="text-gray-700 dark:text-white cursor-pointer"
          />
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-gray-700 dark:text-white focus:outline-none"
          onClick={() => setIsNavOpen(!isNavOpen)}
          aria-label="Toggle navigation menu"
        >
          <FontAwesomeIcon icon={isNavOpen ? faTimes : faBars} size="lg" />
        </button>
      </div>

      {/* Mobile Navigation (links + icons) */}
      {isNavOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 space-y-4 border-t border-gray-200 dark:border-gray-700">
          {/* Navigation Links */}
          <ul className="flex flex-col space-y-3 mt-4">
            <li>
              <Link
                to="/"
                className="text-gray-700 hover:text-black dark:text-white font-medium font-poppins"
                onClick={() => setIsNavOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="text-gray-700 hover:text-black dark:text-white font-medium font-poppins"
                onClick={() => setIsNavOpen(false)}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-700 hover:text-black dark:text-white font-medium font-poppins"
                onClick={() => setIsNavOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-black dark:text-white font-medium font-poppins"
                onClick={() => setIsNavOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Icons */}
          <div className="flex space-x-6 justify-center text-gray-700 dark:text-white">
            <FontAwesomeIcon icon={faUser} className="cursor-pointer" />
            <FontAwesomeIcon icon={faSearch} className="cursor-pointer" />
            <FontAwesomeIcon icon={faShoppingCart} className="cursor-pointer" />
            <FontAwesomeIcon icon={faHeart} className="cursor-pointer" />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;