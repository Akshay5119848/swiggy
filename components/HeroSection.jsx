import React from "react";
import SearchBar from "./SearchBar";
import FoodDelivery from "./FoodDelivery";
import Dineout from "./Dineout";

const HeroSection = () => {
  return (
    <section className="bg-orange-500 text-white px-4 py-8 md:py-12">
      <div className="text-center max-w-2xl mx-auto mb-6">
        <h1 className="text-3xl md:text-4xl font-bold">
          Order food. Discover best restaurants. Swiggy it!
        </h1>
      </div>
      <SearchBar />
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-24">
        <FoodDelivery />
        <Dineout />
      </div>
    </section>
  );
};

export default HeroSection;
