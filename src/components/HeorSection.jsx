import React from "react";
import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";

const HeorSection = () => {
  return (
    <div className="w-full flex justify-center items-start lg:items-center py-2 min-h-[34.3rem] lg:min-h-[35rem] cursor-pointer">
      <div className="container flex flex-col lg:justify-center lg:flex-row gap-1">
        <div className="h-full w-full lg:w-[50%] grid place-items-center lg:order-2">
         <ImageSlider/>
        </div>
        <div className="flex flex-col lg:items-star lg:text-left lg:justify-center items-center lg:items-start lg:w-[50%] gap-2 lg:order-1">
          <div className="md:text-3xl text-xl lg:text-[40px] lg:leading-[44px] font-poppins">
            <div>Capture Life's Precious Moments</div>
            <div> with Our Photography Services!</div>
          </div>
          <p className="md:text-lg text-base">
            Are you looking for a way to capture the special moments in your
            life? Professional photography services can help you create
            beautiful visuals that you can look back on for years to come. From
            family portraits to landscape photography, our experienced
            photographers will help make your memories last a lifetime. Let us
            help you capture those special moments today!
          </p>
          <div className=" flex gap-5 w-fit">
            <Link to='/contact'>
            <button className="w-[5rem] lg:w-[6rem] lg:py-2 py-1 text-sm lg:text-base rounded-md font-medium bg-[#e2fdff] text-[#5465ff] dark:bg-[#e2fdff] dark:text-[#002733]">HIRE US</button>
            </Link>
            <Link to='/gallery'>
            <button className="w-[5rem] lg:w-[6rem] lg:py-2 py-1 text-sm lg:text-base rounded-md font-medium bg-[#e2fdff] text-[#5465ff] dark:bg-[#e2fdff] dark:text-[#002733]">GALLERY</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeorSection;
