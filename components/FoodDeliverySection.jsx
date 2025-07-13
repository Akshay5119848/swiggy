import React, { useEffect, useState } from "react";
import RestaurantCard from "./components/RestaurantCard";

const mockFoodData = [
  {
    info: {
      id: "1",
      name: "Burger Point",
      avgRating: "4.2",
      sla: { slaString: "30 MINS" },
      cuisines: ["Burgers", "Fast Food"],
      locality: "Sector 14",
      cloudinaryImageId: "eqkq8y3twht9ukf3gc8z",
    },
  },
  {
    info: {
      id: "2",
      name: "Pizza Hub",
      avgRating: "4.0",
      sla: { slaString: "25 MINS" },
      cuisines: ["Pizza", "Italian"],
      locality: "MG Road",
      cloudinaryImageId: "uup6yzpq7xk4cqdrkqpl",
    },
  },
];

const FoodDeliverySection = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Simulating fetch or API call
    setRestaurants(mockFoodData);
  }, []);

  return (
    <section id="food-delivery-section" className="py-12 px-4">
      <h2 className="text-2xl font-bold mb-4">Food Delivery Restaurants</h2>
      <div className="flex flex-wrap justify-center">
        {restaurants.map((item) => (
          <RestaurantCard key={item.info.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default FoodDeliverySection;
