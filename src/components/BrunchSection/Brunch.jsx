import React, { useEffect, useState } from "react";
import BrunchCard from "./BrunchCards/BrunchCard";

const Brunch = () => {
  const [brunchItems, setBrunchItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/menu.json");
      const brunchData = await response.json();
      const filteredItems = brunchData.values.filter(
        (item) => item[3] === "Brunch 🥖"
      );
      setBrunchItems(
        filteredItems.map(([name, image, price, category]) => ({
          name,
          image,
          price,
          category,
        }))
      );
    };
    fetchData();
  }, []);
  return (
    <div id="section2" className="bg-balck-custom py-20 flex justify-center items-center">
      <div className="w-11/12 lg:w-3/4">
          <h2 className="title text-white pb-20 text-center font-forum text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Brunch Menu List
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {brunchItems?.map((item, index) => (
              <BrunchCard
                key={index}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            ))}
          </div>
      </div>
    </div>
  );
};

export default Brunch;
