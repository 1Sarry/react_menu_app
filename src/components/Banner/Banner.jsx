import React from "react";
import "./Banner.scss";
import decorator from "../../assets/Icons/Decorator.svg";
const Banner = () => {
  return (
    <div id="banner" className="relative flex items-center flex-col text-white justify-center w-full h-[530px] md:h-banner-md lg:h-banner-lg banner text-center">
      <div className="banner-content z-20 flex flex-col items-start justify-center">
        <div className="w-full font-bold text-xs sm:text-sm text-center text-small-txt tracking-wider uppercase">
          Taste the Difference
        </div>
        <div className="flex items-center justify-center w-full">
          <img className="w-32 h-12 " src={decorator} alt="" />
        </div>
        <div className="text-center w-full text-3xl md:text-5xl lg:text-6xl xl:text-8xl font-normal">
          Explore Our Menu
        </div>
      </div>
      <div className="overlay w-full h-full bg-black opacity-60 absolute"></div>
    </div>
  );
};

export default Banner;
