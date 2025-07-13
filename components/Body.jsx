import React from "react";
import RestaurantCard from "./RestaurantCard";
import UseRestaurantData from "./UseRestaurantData";
import Search from "./search";
import HeroSection from "./HeroSection";

function Body() {
  const {
    restArray,
    allRestaurant,
    setAllRestaurants,
    loading,
    error,
  } = UseRestaurantData();

  const handleFilterByRating = () => {
    const filteredList = restArray.filter((res) => res.info.avgRating >= 4.5);
    setAllRestaurants(filteredList);
  };

  const handleFilterByOffers = () => {
    const filteredList = restArray.filter(
      (res) =>
        res.info.aggregatedDiscountInfoV3?.header || res.info.offerTags
    );
    setAllRestaurants(filteredList);
  };

  const handleFilterNewOnSwiggy = () => {
    const filteredList = restArray.filter((res) => {
      const totalRatings =
        parseInt(res.info.totalRatingsString?.replace(/\D/g, "")) || 0;
      if (totalRatings < 500 && totalRatings > 0) return true;
      if (
        res.info.aggregatedDiscountInfoV3?.header?.includes("FIRST_ORDER")
      )
        return true;
      if (!res.info.avgRating && totalRatings > 0) return true;
      return false;
    });
    setAllRestaurants(filteredList);
  };

  const handleResetFilter = () => {
    setAllRestaurants(restArray);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl font-semibold text-gray-700">
          Fetching delicious food for you...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl font-semibold text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <>
      <HeroSection />

      <div className="container mx-auto px-4 py-8">
        <h1 className="font-bold text-3xl text-gray-800 mb-6 text-center">
          Restaurants with online food delivery in Dhanbad
        </h1>

        {/* Filters */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
          <Search restArray={restArray} setAllRestaurants={setAllRestaurants} />
          <button
            onClick={handleFilterByRating}
            className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
          >
            Rating 4.5+
          </button>
          <button
            onClick={handleFilterByOffers}
            className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
          >
            Offers
          </button>
          <button
            onClick={handleFilterNewOnSwiggy}
            className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
          >
            New on Swiggy
          </button>
          <button
            onClick={handleResetFilter}
            className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400 transition"
          >
            Reset
          </button>
        </div>

        {/* Restaurant Cards */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6">
          {allRestaurant.length === 0 && restArray.length > 0 ? (
            <p className="text-xl text-gray-600 w-full text-center mt-10">
              No restaurants found matching your search.
            </p>
          ) : (
            allRestaurant.map((item) => (
              <RestaurantCard key={item.info.id} item={item} />
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Body;
