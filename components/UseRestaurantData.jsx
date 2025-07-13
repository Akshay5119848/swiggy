import { useEffect, useState } from "react";
import axios from "axios";

const SWIGGY_RESTAURANT_LIST_API =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.59430&lng=85.13520&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

const UseRestaurantData = () => {
  const [restArray, setRestArray] = useState([]);
  const [allRestaurant, setAllRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRestaurants() {
      try {
        setLoading(true);
        setError(null);

        const resp = await axios.get(SWIGGY_RESTAURANT_LIST_API);
        const cards = resp?.data?.data?.cards || [];
        const restaurantCard = cards.find(
          (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        const fetchedRestaurants =
          restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

        setRestArray(fetchedRestaurants);
        setAllRestaurants(fetchedRestaurants);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load restaurants. Please try again later.");
        setLoading(false);
      }
    }

    fetchRestaurants();
  }, []);

  return { restArray, allRestaurant, setAllRestaurants, loading, error };
};

export default UseRestaurantData;
