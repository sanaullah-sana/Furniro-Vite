import React from "react";
import swiperBanner1 from "../assets/img/swiper-banner.jpg";
import swiperBanner2 from "../assets/img/swiper-banner-2.jpg";
import swiperBanner3 from "../assets/img/swiper-banner-3.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
function Slider() {
  return (
    <>
      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="mySwiper md:my-8 my-16"
      >
        <SwiperSlide className="text-center">
          <img src={swiperBanner1} alt="Swipper-Banner-1" />
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <img src={swiperBanner2} alt="Swipper-Banner-1" />
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <img src={swiperBanner3} alt="Swipper-Banner-1" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;