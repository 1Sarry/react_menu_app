import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Drinks.scss";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import DrinkCards from "./DrinkCards/DrinkCards";

const Drinks = () => {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const fetchDrinkData = async () => {
      try {
        // Fetch the menu.json file from the public folder
        const response = await fetch("/menu.json");
        if (!response.ok) {
          throw new Error("Failed to fetch menu data");
        }
        const drinkData = await response.json();
        const menuItems = drinkData.values.slice(1).map((item) => ({
          name: item[0],
          image: item[1],
          price: item[2],
          category: item[3],
        }));
        const dri = menuItems.filter((item) => item.category === "Drinks ☕️");
        setDrinks(dri);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    fetchDrinkData();
  }, []);
  return (
    <div id="section3" className="py-20 flex justify-center">
      <div className="w-11/12 lg:w-3/4">
        <h2 className="pb-10 text-center font-forum text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Drinks</h2>
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          pagination={{ clickable: true }}
          navigation={false}
          autoplay={{ delay: 2000 }}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="w-full py-20"
        >
          {drinks?.map((drink, index) => (
            <SwiperSlide key={index}>
              <DrinkCards
                key={index}
                name={drink.name}
                image={drink.image}
                price={drink.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Drinks;
