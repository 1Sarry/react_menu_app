import React, { useEffect, useState } from "react";
import MenuItemCard from "./MenuItemCard/MenuItemCard";

const CategorySection = () => {
  const [saladItems, setSaladItems] = useState([]);
  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        // Fetch the menu.json file from the public folder
        const response = await fetch("/menu.json");
        if (!response.ok) {
          throw new Error("Failed to fetch menu data");
        }
        const saladData = await response.json();
        const menuItems = saladData.values.slice(1).map((item) => ({
          name: item[0],
          image: item[1],
          price: item[2],
          category: item[3],
        }));
        const salads = menuItems.filter(
          (item) => item.category === "Salads 🥗"
        );
        setSaladItems(salads);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    fetchMenuData();
  }, []);

  return (
    <div id="section1" className="py-20 flex justify-center">
      <div className="w-11/12 lg:w-3/4">
        <h2 className="pb-10 text-center font-forum text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Best Salad Menu
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {saladItems?.map((salad, index) => (
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
