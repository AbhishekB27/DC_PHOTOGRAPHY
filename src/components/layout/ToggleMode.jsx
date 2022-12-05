import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";

const themeMode = ({ setTheme, theme }) => {
  const handletheme = () => {
    setTheme(!theme);
  };
  return (
    <div
      className={`flex relative justify-center w-[85px] h-[40px] items-center gap-2 rounded-lg px-[4px] py-[3px] bg-[#e2fdff] text-[#5465ff] dark:bg-[#e2fdff] dark:text-[#002733]`}
    >
      <button
        id="toggle"
        onClick={handletheme}
        className={`absolute outline-none text-base  ${
          theme ? "rotate-[360deg]" : "rotate-[-360deg]"
        } bg-[#5465ff] dark:bg-[#002733] ${
          theme ? "translate-x-[70%]" : "translate-x-[-70%]"
        } transition-all duration-500 px-[4px] py-[3px] rounded-lg text-[#e2fdff]`}
      >
        {" "}
        <FontAwesomeIcon
          className={`text-2xl transition-all duration-700`}
          icon={theme ? faSun : faMoon}
        />{" "}
      </button>
      <label
        className={`absolute cursor-pointer font-medium text-xs ${
          theme ? "translate-x-[-55%]" : "translate-x-[55%]"
        } transition-all duration-500 flex flex-col`}
        htmlFor="toggle"
      >
        {" "}
        <span>{theme ? "LIGHT" : "DARK"}</span>
        <span>MODE</span>{" "}
      </label>
    </div>
  );
};

export default themeMode;
