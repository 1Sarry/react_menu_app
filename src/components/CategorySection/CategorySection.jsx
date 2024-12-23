import React, { useEffect, useState } from "react";
import MenuItemCard from "../MenuItemCard/MenuItemCard";
import menuData from "../../assets/Data/menu.json";

const CategorySection = () => {
  const [saladItems, setSaladItems] = useState([]);
  useEffect(() => {
    // fetch menu items from the JSON file
    const menuItems = menuData.values.slice(1).map((item) => ({
      name: item[0],
      image: item[1],
      price: item[2],
      category: item[3],
    }));
    console.log(menuItems);
    //filter Salads category
    const salads = menuItems.filter((item) => item.category === "Salads 🥗");
    setSaladItems(salads);
  }, []);
  return (
    <div id="section1" className="py-20 flex justify-center">
      <div className="w-11/12 lg:w-3/4">
        <h2 className="pb-10 text-center font-forum text-6xl">Best Salad Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {saladItems.map((salad, index) => (
            <MenuItemCard
              key={index}
              image={salad.image}
              name={salad.name}
              desc="delicious salads are here, come and test"
              price={salad.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
