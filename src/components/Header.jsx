import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faUser,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
          {/* Column 1: Logo */}
          <div className="flex items-center space-x-3">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="hidden md:flex space-x-20">
            <Link
              to="/"
              className="text-gray-700 hover:text-black focus:underline dark:text-white font-medium font-poppins"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="text-gray-700 hover:text-black focus:underline dark:text-white font-medium font-poppins"
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-black focus:underline dark:text-white font-medium font-poppins"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-black focus:underline dark:text-white font-medium font-poppins"
            >
              Contact
            </Link>
          </div>

          {/* Column 3: Icons */}
          <div className="flex items-center space-x-4">
            {/* Replace with real icons or use react-icons */}
            <span className="text-gray-700 dark:text-white cursor-pointer">
              <FontAwesomeIcon
                icon={faUser}
                className="text-gray-700 dark:text-white cursor-pointer"
              />
            </span>
            <span className="text-gray-700 dark:text-white cursor-pointer">
              <FontAwesomeIcon
                icon={faSearch}
                className="text-gray-700 dark:text-white cursor-pointer"
              />
            </span>
            <span className="text-gray-700 dark:text-white cursor-pointer">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="text-gray-700 dark:text-white cursor-pointer"
              />
            </span>
            <span className="text-gray-700 dark:text-white cursor-pointer">
              <FontAwesomeIcon icon={faHeart} />
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Header;