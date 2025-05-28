import React from "react";
import footerLogo from "../assets/footer-logo.svg";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer className="max-w-[1440px] mx-auto py-10 px-28">
        <div className="container">
          {/* Grid  */}
          <div className="grid lg:grid-cols-12 sm:grid-cols-12 grid-cols-1 lg:gap-5 sm:gap-3 gap-1">
            {/* Footer Column 1  */}
            <div className="lg:col-span-3 md:col-span-6 col-span-12">
              <Link to="/">
                <img src={footerLogo} alt="Footer Logo" />
              </Link>
              <address className="not-italic md:text-base text-sm text-[#9F9F9F] py-8">
                <a
                  href="https://maps.app.goo.gl/Vyih3Q1YkisWEyRs7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  400 University Drive Suite 200 Coral
                  <br className="md:block hidden" /> Gables,
                  <br className="md:block hidden" />
                  FL 33134 USA
                </a>
              </address>

              <p className="md:text-base text-sm text-black lg:py-16 pb-5">
                &copy; Copyright 2025 furino. All rights reverved By Sana
              </p>
            </div>
            {/* /Footer Column 1  */}
            {/* Footer Links  */}
            <div className="lg:col-span-3 md:col-span-6 col-span-12">
              <h3 className="text-[#9F9F9F] lg:text-base md:text-sm text-xs text-center font-bold">
                Links
              </h3>
              <ul className="text-center lg:my-8 md:my-5 my-3 lg:leading-[3rem] md:leading-[2rem] leading-[1.5rem]">
                <li>
                  <Link
                    to="/"
                    className="font-bold lg:text-base md:text-sm text-xs"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop"
                    className="font-bold lg:text-base md:text-sm text-xs"
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="font-bold lg:text-base md:text-sm text-xs"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="font-bold lg:text-base md:text-sm text-xs"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            {/* /Footer Links  */}
            {/* Footer Help Links  */}
            <div className="lg:col-span-3 md:col-span-6 col-span-12">
              <h3 className="text-[#9F9F9F] lg:text-base md:text-sm text-xs text-center font-bold">
                Help
              </h3>
              <ul className="text-center lg:my-8 md:my-5 my-3 lg:leading-[3rem] md:leading-[2rem] leading-[1.5rem]">
                <li>
                  <Link
                    to="/payment-options"
                    className="font-bold lg:text-base md:text-sm text-xs"
                  >
                    Payment Options
                  </Link>
                </li>
                <li>
                  <Link
                    to="returns"
                    className="font-bold lg:text-base md:text-sm text-xs"
                  >
                    Returns
                  </Link>
                </li>
                <li>
                  <Link
                    to="privacy-policy"
                    className="font-bold lg:text-base md:text-sm text-xs"
                  >
                    Privacy Policies
                  </Link>
                </li>
              </ul>
            </div>
            {/* /Footer Help Links  */}
            {/* Footer Newsletter  */}
            <div className="lg:col-span-3 md:col-span-6 col-span-12">
              <h3 className="text-[#9F9F9F] lg:text-base md:text-sm text-xs text-center font-bold">
                Newsletter
              </h3>
              <div className="flex md:flex-row flex-col items-center border-b border-gray-400 py-2 w-full max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="appearance-none bg-transparent border-none w-full text-gray-700 py-2 px-2 leading-tight focus:outline-none lg:text-sm text-xs"
                />
                <button
                  className="flex-shrink-0 text-black lg:text-sm text-xs py-2 px-4 rounded"
                  type="button"
                >
                  SUBSCRIBE
                </button>
              </div>
            </div>
            {/* /Footer Newsletter  */}
          </div>
          {/* /Grid  */}
        </div>
      </footer>
    </>
  );
}

export default Footer;