import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Gallery from "./Gallery";
import HeorSection from "./HeorSection";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

const MyApp = () => {
  const [theme, setTheme] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme(false);
    } else {
      setTheme(true);
    }
  }, []);

  useEffect(() => {
    if (theme === false) {
      document.documentElement.classList.add("dark");
      // console.log("if"+ theme)
    } else {
      document.documentElement.classList.remove("dark");
      // console.log("else"+theme)
    }
  }, [theme]);
  return (
    <div className="box-border grid relative dark:bg-[#002733] dark:text-[#e2fdff] bg-[#5465ff] text-[#e2fdff] min-h-screen h-auto p-1">
      <Header setTheme={setTheme} theme={theme} />
      <HeorSection/>
      <Gallery/>
      {/* <Routes>
        <Route path="/" element={<HeorSection/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
      </Routes> */}
      {/* <Footer/> */}
    </div>
  );
};

export default MyApp;
