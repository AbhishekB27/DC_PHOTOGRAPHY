 import React from "react";
// import Swiper core and required modules
import {Autoplay, Pagination} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import slider from "./images/slider";

const ImageSlider = () => {
  return (
    <>
    <Swiper
       spaceBetween={30}
       centeredSlides={true}
       autoplay={{
         delay: 2500,
         disableOnInteraction: false,
       }}
       pagination={{
         clickable: true,
       }}
       modules={[Autoplay, Pagination]}
        className="w-full"
      >
        {
          slider.map(item => {
            return (
              <SwiperSlide
      className="flex justify-center items-center">
        {" "}
        <img
          className="w-[35rem] h-[17.5rem] lg:h-[25rem] object-cover object-center rounded-md"
          src={item}
          alt="img"
        />
      </SwiperSlide>
            )
          })
        }
      
      {/* <SwiperSlide
      className="flex justify-center items-center">
        {" "}
        <img
          className="w-[35rem] h-[17.5rem] lg:h-[25rem] object-cover object-center rounded-md"
          src={DCP3}
          alt="img"
        />
      </SwiperSlide>
      <SwiperSlide
      className="flex justify-center items-center">
        {" "}
        <img
          className="w-[35rem] h-[17.5rem] lg:h-[25rem] object-cover object-center rounded-md"
          src={DCP4}
          alt="img"
        />
      </SwiperSlide> */}
    </Swiper>
    </>
    
  );
};

export default ImageSlider;
