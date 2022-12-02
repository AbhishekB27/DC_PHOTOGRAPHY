import {
  faCameraAlt,
  faCameraRetro,
  faCameraRotate,
  faVideoCamera,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faYoutube,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Hamburger from "./Hamburger";
import ToggleMode from "./ToggleMode";
import { Link } from "react-router-dom";

const Header = ({ setTheme, theme }) => {
  const [menu, setMenu] = useState(false);
  const [follow, setFollow] = useState(false);
  const handleFollowMe = () => {
    setFollow(!follow);
  };
  return (
    <header className="flex flex-col gap-1">
      <div className="flex justify-between items-center pb-1 border-b-2 border-[#e2fdff]">
        <div className="cursor-pointer">
          <FontAwesomeIcon className="text-xl" icon={faCameraRetro} />{" "}
          <span className="font-dancingScript text-xl font-extrabold tracking-wider">
            DC PHOTOGRAPHY
          </span>
        </div>
        <ToggleMode setTheme={setTheme} theme={theme} />
      </div>
      <div className="relative flex justify-between lg:flex-row-reverse">
        <Hamburger setMenu={setMenu} menu={menu} />
        <ol
          className={`absolute top-[2.8rem] lg:w-[50%] z-50 lg:static flex flex-col lg:flex-row justify-around bg-black/50 lg:bg-transparent w-full overflow-hidden transition-all duration-1000 ${
            !menu ? "h-[0] opacity-0" : "h-[34rem]"
          } lg:h-auto lg:opacity-100 `}
        >
          <Link to='/'>
            <li className="text-lg font-ubuntu font-semibold cursor-pointer lg:bg-gradient-to-r lg:from-[#e2fdff] lg:to-[#e2fdff] lg:bg-left-bottom lg:bg-no-repeat lg:bg-[length:0%_3px] lg:hover:bg-[length:100%_3px] lg:transition-all">
              HOME
            </li>
          </Link>
          <Link to='gallery'>
            <li className="text-lg font-ubuntu font-semibold cursor-pointer lg:bg-gradient-to-r lg:from-[#e2fdff] lg:to-[#e2fdff] lg:bg-left-bottom lg:bg-no-repeat lg:bg-[length:0%_3px] lg:hover:bg-[length:100%_3px] lg:transition-all">
              GALLERY
            </li>
          </Link>
          <Link to='/exhibition'>
            <li className="text-lg font-ubuntu font-semibold cursor-pointer lg:bg-gradient-to-r lg:from-[#e2fdff] lg:to-[#e2fdff] lg:bg-left-bottom lg:bg-no-repeat lg:bg-[length:0%_3px] lg:hover:bg-[length:100%_3px] lg:transition-all">
              EXHIBITION
            </li>
          </Link>
          <Link to='/contact'>
            <li className="text-lg font-ubuntu font-semibold cursor-pointer lg:bg-gradient-to-r lg:from-[#e2fdff] lg:to-[#e2fdff] lg:bg-left-bottom lg:bg-no-repeat lg:bg-[length:0%_3px] lg:hover:bg-[length:100%_3px] lg:transition-all">
              CONTACT
            </li>
          </Link>
          <Link to='/about'>
            <li className="text-lg font-ubuntu font-semibold cursor-pointer lg:bg-gradient-to-r lg:from-[#e2fdff] lg:to-[#e2fdff] lg:bg-left-bottom lg:bg-no-repeat lg:bg-[length:0%_3px] lg:hover:bg-[length:100%_3px] lg:transition-all">
              ABOUT
            </li>
          </Link>
        </ol>
        <div className=" lg:w-[50%] flex">
          <button
            onClick={handleFollowMe}
            className="relative group bg-[#e2fdff] px-2 grid place-items-center dark:text-[#002733] text-[#5465ff] font-medium text-base rounded-md"
          >
            <div
              className={`absolute z-10 ${
                follow ? "h-[8.5rem]" : "h-0 opacity-0"
              } p-2 right-0 top-[2.8rem] lg:top-[2rem] transition-all duration-500 flex flex-col gap-2 rounded-md text-2xl bg-[#e2fdff] dark:bg-[#e2fdff] dark:text-[#002733] text-[#5465ff]`}
            >
              {" "}
              <FontAwesomeIcon
                className="hover:scale-110 transition-all"
                icon={faInstagram}
              />{" "}
              <FontAwesomeIcon
                className="hover:scale-110 transition-all"
                icon={faTwitter}
              />{" "}
              <FontAwesomeIcon
                className="hover:scale-110 transition-all"
                icon={faFacebook}
              />{" "}
              <FontAwesomeIcon
                className="hover:scale-110 transition-all"
                icon={faYoutube}
              />{" "}
            </div>
            FOLLOW ME
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
