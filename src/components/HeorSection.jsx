import React from "react";
import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import Camera from "./images/DC_Camera.png";

const HeorSection = () => {
  return (
    <div className="w-full flex justify-center items-start lg:items-center py-2 min-h-[34.3rem] lg:min-h-[35.2rem] cursor-pointer">
      <div className="container flex flex-col lg:justify-center lg:flex-row gap-1">
        <div className="lg:relative h-full w-full lg:w-[50%] grid place-items-center lg:order-">
          <div className="hidden lg:block lg:absolute lg:w-full lg:h-full z-10 bg-gradient-to-r from-transparent via-transparent to-black/30"></div>
          <ImageSlider />
        </div>
        <div className="flex lg:relative flex-col lg:items-star lg:text-left lg:justify-center items-center lg:items-start lg:w-[50%] gap-2 lg:order-">
          <img
            className="camera absolute bottom-[1rem] md:bottom-auto lg:left-[3rem] h-[16rem] w-[16rem]"
            src={Camera}
            alt=""
          />
          <div className="absolute w-[5.5rem] h-[5.5rem] left-[15%] bottom-[25%] md:left-[15rem] lg:left-[3rem] lg:w-[8.5rem] lg:h-[8.5rem] bg-clip-padding backdrop-filter backdrop-blur-sm bg-gray-400 border-gray-100 bg-opacity-30 rounded-2xl rotate-45"></div>
          <div className="absolute w-[5.5rem] h-[5.5rem] bottom-[5%] md:right-[25rem] right-[13rem] lg:top-[-2rem] lg:left-[18rem] lg:w-[8.5rem] lg:h-[8.5rem] bg-clip-padding backdrop-filter backdrop-blur-sm bg-gray-400 border-gray-100 bg-opacity-30 rounded-2xl rotate-[-45deg]"></div>
          <div className="absolute w-[5.5rem] h-[5.5rem] right-[6rem]  bottom-[12rem] lg:bottom-[-1rem] lg:left-[20rem] lg:w-[8.5rem] lg:h-[8.5rem] bg-clip-padding backdrop-filter backdrop-blur-sm bg-gray-400 border-gray-100 bg-opacity-30 rounded-2xl rotate-[-45deg]"></div>
          <div className="lg:absolute lg:top-0 z-10 lg:left-[-4.5rem] lg:z-10 md:text-3xl text-xl lg:text-[40px] lg:leading-[44px] font-poppins">
            <div>Capture Life's Precious</div>
            <div> Moments with Our </div>
            <div>Photography Services!</div>
          </div>
          <p className="lg:absolute z-10 lg:right-0 grid gap-1 lg:bottom-0 lg:w-[75%] md:text-lg text-base">
            Are you looking for a way to capture the special moments in your
            life? Professional photography services can help you create
            beautiful visuals that you can look back on for years to come. From
            family portraits to landscape photography, our experienced
            photographers will help make your memories last a lifetime.
            <div className=" flex justify-center items-center w-full gap-5 lg:w-fit">
              <Link to="/contact">
                <button className="w-[5rem] lg:w-[6rem] lg:py-2 py-1 text-sm lg:text-base rounded-md font-medium bg-[#e2fdff] text-[#5465ff] dark:bg-[#e2fdff] dark:text-[#002733]">
                  HIRE US
                </button>
              </Link>
              <Link to="/gallery">
                <button className="w-[5rem] lg:w-[6rem] lg:py-2 py-1 text-sm lg:text-base rounded-md font-medium bg-[#e2fdff] text-[#5465ff] dark:bg-[#e2fdff] dark:text-[#002733]">
                  GALLERY
                </button>
              </Link>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeorSection;
