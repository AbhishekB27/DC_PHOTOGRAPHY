import React from "react";
import ExhibitionI from "./images/ExhibitionI.svg";

const Exhibition = () => {
  return (
    <div className="w-full grid place-items-center">
      <div className="container flex flex-col justify-center items-center">
        <img className="w-[30rem] h-[30rem]" src={ExhibitionI} alt="" />
      </div>
    </div>
  );
};

export default Exhibition;
