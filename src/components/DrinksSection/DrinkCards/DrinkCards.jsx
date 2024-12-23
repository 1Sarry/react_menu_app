import React from "react";
import salad from "../../../assets/Images/salad1.jpg";

const DrinkCards = ({ name, image, price }) => {
  return (
    <div>
      <div className="card-wrapper flex flex-col items-center justify-center text-2xl font-forum text-center">
        <div className="image-price relative">
          <div className="drink-img w-[200px] h-[200px] rounded-full">
            <img
              className="w-full h-full rounded-full object-cover object-center border-t-[10px] border-l-[10px] border-r-[10px] border-b-[10px] 
    border-t-small-txt border-l-small-txt  border-r-bg-gray border-b-bg-gray "
              src={image}
              alt="Drinks"
            />
          </div>
          <div className="drink-price absolute w-20 h-20 rounded-full bg-hover-color flex items-center justify-center left-32 -bottom-2">
            <h4 className="text-balck text-xl font-bold">{price}</h4>
          </div>
        </div>
        <div className="drink-info">
          <div className="drink-title pt-4 text-2xl font-forum text-center font-semibold">
            {name}
          </div>
          <div className="drink-desc pt-4 text-sm max-w-[200px] text-center font-sans font-normal">
            Brewed espresso, Ice, honey, milk, syrup,
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinkCards;
