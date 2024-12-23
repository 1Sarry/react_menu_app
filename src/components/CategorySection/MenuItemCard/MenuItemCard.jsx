import React from "react";

const MenuItemCard = ({ image, name, desc, price }) => {
  return (
    <div
      id="section1"
      className="flex flex-col items-center justify-center gap-4"
    >
      <div className="relative group category-img max-w-[270px] max-h-[320px] rounded-[20px] overflow-hidden cursor-pointer">
        <img
          className="w-full h-full rounded-[20px] object-cover object-center transform transition-transform duration-500 group-hover:scale-110 "
          src={image}
          alt="food menu image"
          style={{
            aspectRatio: "0.84375", 
          }}
        />

        <div className="absolute inset-0 bg-hover-color opacity-0 transition-opacity duration-500 group-hover:opacity-30"></div>
      </div>
      <div className="category-name ">
        <h4 className="text-2xl font-forum text-center">{name}</h4>
      </div>
      <div className="category-desc text-sm max-w-[270px] text-center">
        {desc}
      </div>
      <div className="category-price text-xl text-small-txt font-semibold">{price}</div>
    </div>
  );
};

export default MenuItemCard;
