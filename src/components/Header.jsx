import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

import { FiUser } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="bg-white">
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
              {["/", "/shop", "/about", "/contact"].map((path, i) => (
                <li key={i}>
                  <Link
                    to={path}
                    className="text-gray-700 hover:text-black focus:underline dark:text-white font-medium font-poppins"
                  >
                    {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-5 text-gray-700 dark:text-white">
            <FiUser size={22} className="cursor-pointer" />
            <CiSearch size={24} className="cursor-pointer" />
<Link to="/cart/:id" className="relative">
  <BsCart3 size={22} className="cursor-pointer" />
  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
    1
  </span>
</Link>

            <AiOutlineHeart size={22} className="cursor-pointer" />
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-gray-700 dark:text-white focus:outline-none"
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-label="Toggle navigation menu"
          >
            {isNavOpen ? <IoClose size={26} /> : <RxHamburgerMenu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation (links + icons) */}
        {isNavOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 space-y-4 border-t border-gray-200 dark:border-gray-700">
            {/* Navigation Links */}
            <ul className="flex flex-col space-y-3 mt-4">
              {["/", "/shop", "/about", "/contact"].map((path, i) => (
                <li key={i}>
                  <Link
                    to={path}
                    className="text-gray-700 hover:text-black dark:text-white font-medium font-poppins"
                    onClick={() => setIsNavOpen(false)}
                  >
                    {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Icons */}
            <div className="flex space-x-6 justify-center text-gray-700 dark:text-white">
              <FiUser size={22} className="cursor-pointer" />
              <CiSearch size={24} className="cursor-pointer" />
              <Link to="/cart" onClick={() => setIsNavOpen(false)}>
                <BsCart3 size={22} className="cursor-pointer" />
              </Link>
              <AiOutlineHeart size={22} className="cursor-pointer" />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
