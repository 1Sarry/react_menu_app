import React from "react";

const BrunchCard = ({ name, image, price, category }) => {
  return (
    <div className="">
      <div className="brunch-card flex gap-4 items-center">
        <div className="content-img-wrap flex gap-6 justify-center items-center">
          <div className="w-[100px] h-[100px] rounded-[22px] flex-shrink-0">
            <img
              className="w-full h-full rounded-[22px] object-cover object-center"
              src={image}
              alt={name}
            />
          </div>
          <div className="brunch-content pb-4">
            <h5 className="brunch-title text-white   font-forum text-2xl">
              {name}
            </h5>
            <div className="brunch-desc text-card-desc text-base font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium.
            </div>
          </div>
        </div>
        <div className="brunch-price pl-4 text-small-txt font-semibold whitespace-nowrap">{price}</div>
      </div>
    </div>
  );
};

export default BrunchCard;
