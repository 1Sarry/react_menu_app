import React from "react";
import Header from "../components/Header/Header";
import MenuItemCard from "../components/MenuItemCard/MenuItemCard";
import CategorySection from "../components/CategorySection/CategorySection";
import Banner from "../components/Banner/Banner";

const Home = () => {
  return (
    <>
      <Banner />
      <Header />
      <CategorySection />
    </>
  );
};

export default Home;
