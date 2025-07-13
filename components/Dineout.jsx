import React from "react";

const Dineout = () => {
  const scrollToSection = () => {
    const target = document.getElementById("dineout-section");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      onClick={scrollToSection}
      className="cursor-pointer bg-white text-black p-6 rounded-lg shadow hover:shadow-xl transition"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
        alt="Dineout"
        className="w-16 h-16 mb-4"
      />
      <h2 className="text-lg font-bold">DINEOUT</h2>
      <p className="text-sm">EAT OUT & SAVE MORE</p>
      <p className="text-orange-500 font-bold mt-2">UPTO 50% OFF</p>
    </div>
  );
};

export default Dineout;
