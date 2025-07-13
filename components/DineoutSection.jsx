import React, { useEffect, useState } from "react";
import RestaurantCard from "./components/RestaurantCard";

const mockDineoutData = [
  {
    info: {
      id: "3",
      name: "Spice Garden",
      avgRating: "4.5",
      sla: { slaString: "45 MINS" },
      cuisines: ["North Indian", "Mughlai"],
      locality: "Connaught Place",
      cloudinaryImageId: "z8zfs9vvf6vliz0dfbge",
    },
  },
  {
    info: {
      id: "4",
      name: "Cafe Delight",
      avgRating: "4.3",
      sla: { slaString: "35 MINS" },
      cuisines: ["Cafe", "Desserts"],
      locality: "Hauz Khas",
      cloudinaryImageId: "tv6czolcyyz4z7jkpgb3",
    },
  },
];

const DineoutSection = () => {
  const [dineoutRestaurants, setDineoutRestaurants] = useState([]);

  useEffect(() => {
    // Simulating fetch or API call
    setDineoutRestaurants(mockDineoutData);
  }, []);

  return (
    <section id="dineout-section" className="py-12 px-4 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Dineout Restaurants</h2>
      <div className="flex flex-wrap justify-center">
        {dineoutRestaurants.map((item) => (
          <RestaurantCard key={item.info.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default DineoutSection;
