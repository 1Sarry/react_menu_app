import React from "react";
import Header from "../components/Header/Header";
import CategorySection from "../components/CategorySection/CategorySection";
import Banner from "../components/Banner/Banner";
import Drinks from "../components/DrinksSection/Drinks";
import Brunch from "../components/BrunchSection/Brunch";
import Footer from "../components/Footer/Footer"
const Home = () => {
  return (
    <>
      <Banner />
      <Header />
      <CategorySection />
      <Brunch />
      <Drinks />
      <Footer />
    </>
  );
};

export default Home;
