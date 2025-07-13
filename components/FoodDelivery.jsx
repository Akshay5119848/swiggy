import React from "react";

const FoodDelivery = () => {
  const scrollToSection = () => {
    const target = document.getElementById("food-delivery-section");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      onClick={scrollToSection}
      className="cursor-pointer bg-white text-black p-6 rounded-lg shadow hover:shadow-xl transition"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
        alt="Food Delivery"
        className="w-16 h-16 mb-4"
      />
      <h2 className="text-lg font-bold">FOOD DELIVERY</h2>
      <p className="text-sm">FROM RESTAURANTS</p>
      <p className="text-orange-500 font-bold mt-2">UPTO 60% OFF</p>
    </div>
  );
};

export default FoodDelivery;
