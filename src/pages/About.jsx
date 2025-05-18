import React from 'react'
import { Link } from 'react-router-dom';
import introBannerIcon from '../assets/furniro-icon.svg';
import aboutImage from '../assets/img/img-about.jpg';
import handMadeImage from '../assets/img/img-handmade.jpg';
import postOne from '../assets/img/img-post-1.jpg';
import postTwo from '../assets/img/img-post-2.jpg';
import postThree from '../assets/img/img-post-3.jpg';
import postFour from '../assets/img/img-post-4.jpg';
import postFive from '../assets/img/img-post-5.jpg';


function About() {
  return (
    <>
          {/* Hero Section */}
            <section className="hero-section bg-shop-hero-img bg-cover bg-center w-full min-h-full lg:h-[316px] md:h-[400px] h-[300px] overflow-x-hidden flex items-center justify-center">
        <div>
            <img src={introBannerIcon} alt="Intro-Banner-Icon" className="lg:ml-7 md:ml-3 ml-0" />
          <h2 class="font-medium lg:text-5xl md:text-4xl text-3xl">About</h2>
          <div class="flex items-center py-2">
            <h6 class="lg:text-base md:text-sm text-xs font-semibold">Home</h6>
            &nbsp;&gt;&nbsp;
            <h6 class="lg:text-base md:text-sm text-xs font-light">About</h6>
          </div>
        </div>
      </section>
          {/* /Hero Section */}
       {/* Section about Products */}
           <section className="about-section">
        <div className="container max-w-[1440px] mx-auto">
           {/* Grid  */}
           <div className="grid lg:grid-cols-12 grid-cols-1 gap-5">
             {/* Content/Image Column  */}
               <div className="lg:col-span-8 p-8">
                <div>
                <img src={aboutImage} alt="About-One" className="w-full" />
                <div className="flex items-center gap-5 py-3">
                  <div className="flex items-center gap-2">
               <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.99977 9.25C7.72977 9.25 7.26977 5.81 7.26977 5.81C6.99977 4.02 7.81977 2 9.96977 2C12.1298 2 12.9498 4.02 12.6798 5.81C12.6798 5.81 12.2698 9.25 9.99977 9.25ZM9.99977 11.82L12.7198 10C15.1098 10 17.2398 12.33 17.2398 14.53V17.02C17.2398 17.02 13.5898 18.15 9.99977 18.15C6.34977 18.15 2.75977 17.02 2.75977 17.02V14.53C2.75977 12.28 4.69977 10.05 7.22977 10.05L9.99977 11.82Z" fill="#9F9F9F"/>
             </svg>
               <h5 className="text-[#9F9F9F] lg:text-base md:text-sm text-xs font-medium"><Link to='/users/admin'>Admin</Link></h5>
            </div>
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.66699 15.8334C1.66699 17.25 2.75033 18.3334 4.16699 18.3334H15.8337C17.2503 18.3334 18.3337 17.25 18.3337 15.8334V9.16669H1.66699V15.8334ZM15.8337 3.33335H14.167V2.50002C14.167 2.00002 13.8337 1.66669 13.3337 1.66669C12.8337 1.66669 12.5003 2.00002 12.5003 2.50002V3.33335H7.50033V2.50002C7.50033 2.00002 7.16699 1.66669 6.66699 1.66669C6.16699 1.66669 5.83366 2.00002 5.83366 2.50002V3.33335H4.16699C2.75033 3.33335 1.66699 4.41669 1.66699 5.83335V7.50002H18.3337V5.83335C18.3337 4.41669 17.2503 3.33335 15.8337 3.33335Z" fill="#9F9F9F"/>
                </svg>
           <h5 className="text-[#9F9F9F] lg:text-base md:text-sm text-xs font-medium">14 Oct 2022</h5>
           </div>
           <div className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.8966 21.968C12.3666 21.97 11.8566 21.758 11.4826 21.382L3.64564 13.547C3.44131 13.3434 3.28363 13.0978 3.18349 12.8272C3.08335 12.5567 3.04314 12.2676 3.06564 11.98L3.56564 5.41401C3.60018 4.93599 3.80617 4.48652 4.1457 4.14827C4.48524 3.81002 4.93549 3.60574 5.41364 3.57301L11.9796 3.07301C12.0316 3.06201 12.0826 3.06201 12.1346 3.06201C12.6646 3.06201 13.1716 3.27201 13.5446 3.64801L21.3826 11.482C21.5684 11.6677 21.7158 11.8883 21.8164 12.131C21.917 12.3737 21.9687 12.6338 21.9687 12.8965C21.9687 13.1592 21.917 13.4194 21.8164 13.6621C21.7158 13.9048 21.5684 14.1253 21.3826 14.311L14.3106 21.382C14.1254 21.5683 13.905 21.716 13.6623 21.8166C13.4196 21.9172 13.1594 21.9687 12.8966 21.968ZM8.65364 6.65401C8.32475 6.65411 8.00096 6.73531 7.71094 6.89042C7.42093 7.04554 7.17364 7.26978 6.99099 7.54329C6.80834 7.8168 6.69596 8.13113 6.6638 8.45845C6.63164 8.78576 6.68069 9.11595 6.80662 9.41978C6.93255 9.72361 7.13146 9.99169 7.38574 10.2003C7.64002 10.4089 7.94181 10.5516 8.26439 10.6157C8.58698 10.6798 8.92039 10.6633 9.2351 10.5678C9.54982 10.4723 9.83611 10.3006 10.0686 10.068L10.0756 10.062L10.0826 10.055L10.0746 10.062C10.3526 9.78158 10.5414 9.42513 10.6171 9.03759C10.6928 8.65006 10.6522 8.24877 10.5002 7.88432C10.3482 7.51986 10.0918 7.20855 9.76318 6.98961C9.43457 6.77066 9.04851 6.65389 8.65364 6.65401Z" fill="#9F9F9F"/>
              </svg>
         <h5 className="text-[#9F9F9F] lg:text-base md:text-sm text-xs font-medium">Wood</h5>
         </div>
                </div>
                <div>
                  <h2 className="font-semibold lg:text-4xl md:text-2xl text-xl pb-3">Going all-in with millennial design</h2>
                  <p className="lg:text-[0.9375rem] text-[0.7rem] text-[#9F9F9F] pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                  <button className="font-semibold border-b-2 border-black mb-4 lg:text-base md:text-sm text-xs">Read more</button>
                </div>
              </div>
              <div>
                <img src={handMadeImage} alt="Handmade" className="w-full" />
                <div className="flex items-center gap-5 py-3">
                  <div className="flex items-center gap-2">
               <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.99977 9.25C7.72977 9.25 7.26977 5.81 7.26977 5.81C6.99977 4.02 7.81977 2 9.96977 2C12.1298 2 12.9498 4.02 12.6798 5.81C12.6798 5.81 12.2698 9.25 9.99977 9.25ZM9.99977 11.82L12.7198 10C15.1098 10 17.2398 12.33 17.2398 14.53V17.02C17.2398 17.02 13.5898 18.15 9.99977 18.15C6.34977 18.15 2.75977 17.02 2.75977 17.02V14.53C2.75977 12.28 4.69977 10.05 7.22977 10.05L9.99977 11.82Z" fill="#9F9F9F"/>
             </svg>
               <h5 className="text-[#9F9F9F] lg:text-base md:text-sm text-xs font-medium"><Link to='/users/admin'>Admin</Link></h5>
            </div>
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.66699 15.8334C1.66699 17.25 2.75033 18.3334 4.16699 18.3334H15.8337C17.2503 18.3334 18.3337 17.25 18.3337 15.8334V9.16669H1.66699V15.8334ZM15.8337 3.33335H14.167V2.50002C14.167 2.00002 13.8337 1.66669 13.3337 1.66669C12.8337 1.66669 12.5003 2.00002 12.5003 2.50002V3.33335H7.50033V2.50002C7.50033 2.00002 7.16699 1.66669 6.66699 1.66669C6.16699 1.66669 5.83366 2.00002 5.83366 2.50002V3.33335H4.16699C2.75033 3.33335 1.66699 4.41669 1.66699 5.83335V7.50002H18.3337V5.83335C18.3337 4.41669 17.2503 3.33335 15.8337 3.33335Z" fill="#9F9F9F"/>
                </svg>
           <h5 className="text-[#9F9F9F] lg:text-base md:text-sm text-xs font-medium">14 Oct 2022</h5>
           </div>
           <div className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.8966 21.968C12.3666 21.97 11.8566 21.758 11.4826 21.382L3.64564 13.547C3.44131 13.3434 3.28363 13.0978 3.18349 12.8272C3.08335 12.5567 3.04314 12.2676 3.06564 11.98L3.56564 5.41401C3.60018 4.93599 3.80617 4.48652 4.1457 4.14827C4.48524 3.81002 4.93549 3.60574 5.41364 3.57301L11.9796 3.07301C12.0316 3.06201 12.0826 3.06201 12.1346 3.06201C12.6646 3.06201 13.1716 3.27201 13.5446 3.64801L21.3826 11.482C21.5684 11.6677 21.7158 11.8883 21.8164 12.131C21.917 12.3737 21.9687 12.6338 21.9687 12.8965C21.9687 13.1592 21.917 13.4194 21.8164 13.6621C21.7158 13.9048 21.5684 14.1253 21.3826 14.311L14.3106 21.382C14.1254 21.5683 13.905 21.716 13.6623 21.8166C13.4196 21.9172 13.1594 21.9687 12.8966 21.968ZM8.65364 6.65401C8.32475 6.65411 8.00096 6.73531 7.71094 6.89042C7.42093 7.04554 7.17364 7.26978 6.99099 7.54329C6.80834 7.8168 6.69596 8.13113 6.6638 8.45845C6.63164 8.78576 6.68069 9.11595 6.80662 9.41978C6.93255 9.72361 7.13146 9.99169 7.38574 10.2003C7.64002 10.4089 7.94181 10.5516 8.26439 10.6157C8.58698 10.6798 8.92039 10.6633 9.2351 10.5678C9.54982 10.4723 9.83611 10.3006 10.0686 10.068L10.0756 10.062L10.0826 10.055L10.0746 10.062C10.3526 9.78158 10.5414 9.42513 10.6171 9.03759C10.6928 8.65006 10.6522 8.24877 10.5002 7.88432C10.3482 7.51986 10.0918 7.20855 9.76318 6.98961C9.43457 6.77066 9.04851 6.65389 8.65364 6.65401Z" fill="#9F9F9F"/>
              </svg>
         <h5 className="text-[#9F9F9F] lg:text-base md:text-sm text-xs font-medium">Handmade</h5>
         </div>
                </div>
                <div>
                  <h2 className="font-semibold lg:text-4xl md:text-2xl text-xl pb-3">Exploring new ways of decorating</h2>
                  <p className="lg:text-[0.9375rem] text-[0.7rem] text-[#9F9F9F] pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                  <button className="font-semibold border-b-2 border-black lg:text-base md:text-sm text-xs">Read more</button>
                </div>
              </div>
               </div>
             {/* /Content/Image Column  */}
              {/* Left Side Bar Categories  */}
              <div className="lg:col-span-4 p-8">
                <div className="relative w-full max-w-md">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="absolute inset-y-0 right-3 flex items-center text-gray-500">
             <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M23.5 23.5L18.2663 18.257M21.1666 11.25C21.1666 13.88 20.1219 16.4024 18.2621 18.2621C16.4024 20.1219 13.88 21.1666 11.25 21.1666C8.61992 21.1666 6.09757 20.1219 4.23784 18.2621C2.3781 16.4024 1.33331 13.88 1.33331 11.25C1.33331 8.61992 2.3781 6.09757 4.23784 4.23784C6.09757 2.3781 8.61992 1.33331 11.25 1.33331C13.88 1.33331 16.4024 2.3781 18.2621 4.23784C20.1219 6.09757 21.1666 8.61992 21.1666 11.25V11.25Z" stroke="black" stroke-width="2" stroke-linecap="round"/>
                </svg>
                   </span>
                </div>
                   <div className="bg-gray-50 p-6 rounded-lg shadow-md w-64">
                    <h3 className="lg:text-2xl text-xl py-5 px-10 font-medium">Categories</h3>
                    <ul>
                       {/* Category Item  */}
                      <li className="flex justify-between items-center lg:py-4 py-2">
                        <span className="text-[#9F9F9F] lg:text-base md:text-sm text-xs">Crafts</span>
                        <span className="text-[#9F9F9F] lg:text-base md:text-sm text-xs">2</span>
                      </li>
                      <li className="flex justify-between items-center lg:py-4 py-2">
                        <span className="text-[#9F9F9F] lg:text-base md:text-sm text-xs">Design</span>
                        <span className="text-[#9F9F9F] lg:text-base md:text-sm text-xs">8</span>
                      </li>
                      <li className="flex justify-between items-center lg:py-4 py-2">
                        <span className="text-[#9F9F9F] lg:text-base md:text-sm text-xs">Handmade</span>
                        <span className="text-[#9F9F9F] lg:text-base md:text-sm text-xs">7</span>
                      </li>
                      <li className="flex justify-between items-center lg:py-4 py-2">
                        <span className="text-[#9F9F9F] lg:text-base md:text-sm text-xs">Interior</span>
                        <span className="text-[#9F9F9F] lg:text-base md:text-sm text-xs">1</span>
                      </li>
                      <li className="flex justify-between items-center lg:py-4 py-2">
                        <span className="text-[#9F9F9F] lg:text-base md:text-sm text-xs">Wood</span>
                        <span className="text-[#9F9F9F] lg:text-base md:text-sm text-xs">6</span>
                      </li>
                    </ul>
                  </div>
                  <div className="py-24">
                    <h3 className="lg:text-2xl text-xl py-5 px-10 font-medium">Recent Posts</h3>
                    <div className="flex items-center gap-3 pb-8">
                      <div>
                        <img src={postOne} alt="Post-1" />
                      </div>
                      <div>
                        <h5 className="lg:text-base text-sm">Going all-in with<br /> millennial design</h5>
                        <p className="text-[#9F9F9F] lg:text-sm text-xs">03 Aug 2022</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 pb-8">
                      <div>
                        <img src={postTwo} alt="Post-2" />
                      </div>
                      <div>
                        <h5 className="lg:text-base text-sm">Exploring new ways<br /> of decorating</h5>
                        <p className="text-[#9F9F9F] lg:text-sm text-xs">03 Aug 2022</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 pb-8">
                      <div>
                        <img src={postThree} alt="Post-3" />
                      </div>
                      <div>
                        <h5 className="lg:text-base text-sm">Handmade pieces<br /> that took time to make</h5>
                        <p className="text-[#9F9F9F] lg:text-sm text-xs">03 Aug 2022</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 pb-8">
                      <div>
                        <img src={postFour} alt="Post-4" />
                      </div>
                      <div>
                        <h5 className="lg:text-base text-sm">Modern home in<br /> Milan</h5>
                        <p className="text-[#9F9F9F] lg:text-sm text-xs">03 Aug 2022</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 pb-8">
                      <div>
                        <img src={postFive} alt="Post-5" />
                      </div>
                      <div>
                        <h5 className="lg:text-base text-sm">Colorful office<br /> redesign</h5>
                        <p className="text-[#9F9F9F] lg:text-sm text-xs">03 Aug 2022</p>
                      </div>
                    </div>
                  </div>
                
              </div>
              {/* /Left Side Bar Categories  */}
           </div>
           {/* /Grid  */}
        </div>
       </section>
      {/* /Section about Products */}
          
    </>
  )
}

export default About;
