import React from "react";
import AboutI from './images/AboutI.png'

const About = () => {
  return (
    <div className="w-full relative grid place-items-center">
        <img className="absolute right-[40%] top-[13.5rem] md:top-auto md:bottom-0 camera w-[12rem] h-[20rem]" src={AboutI} alt="" />
      <div className="container relative flex md:flex-row flex-col mt-5">
        <div className="text-2xl flex md:z-10 md:flex-col justify-center items-center gap-3 md:h-[28rem] md:w-[20rem] text-[#5465ff] dark:text-[#14213d] bg-[#edf2f4] first-letter:text-4xl font-medium border-b-2 border-[#edf2f4]">
          <div className="md:flex flex-col justify-center items-center">
            <span>A</span>
            <span>B</span>
            <span>O</span>
            <span>U</span>
            <span>T</span>
          </div>
          <div className="md:flex flex-col justify-center items-center">
            <span>U</span>
            <span>S</span>
          </div>
        </div>
        <div className="border-none lg:border-solid  lg:border-2 border-[#edf2f4]">
          <div className="tracking-wide first-letter:text-4xl text-start font-medium px-2">
          Hi there, welcome! It's great to have you here! Dc Photography is an Indian Wedding
            Photography Studio where you can find the best wedding Shoots and
            Prewedding shoots vedio makers and top class crew , with best prices
            and reviews . Whether you are looking for the top photographers, or
            just some ideas and inspiration for your wedding. DC Photographers
            can help you solve your wedding shoots troubles woes through its
            unique features. With a checklist, detailed Plan , inspiration
            gallery where you won't need to spend hours planning on wedding
            photos and shoots anymore.We have Presence across nation.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
