import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../src/utils/CartSlice";
function RestaurantMenu() {
  const { id } = useParams();
  const [menu, setMenu] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const MENU_API = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.59430&lng=85.13520&restaurantId=${id}`;

    async function fetchMenu() {
      try {
        const response = await axios.get(MENU_API);
        const data = response.data?.data?.cards;
        setMenu(data);
      } catch (err) {
        console.error("Error fetching menu:", err);
        setError("Menu not available. Try again later.");
      }
    }

    fetchMenu();
  }, [id]);

  if (error) {
    return <div className="text-center text-red-500 mt-10">{error}</div>;
  }

  if (!menu) {
    return (
      <div className="text-center mt-10">
        <span className="animate-ping inline-flex h-4 w-4 rounded-full bg-blue-400"></span>
        <p className="mt-2">Loading menu...</p>
      </div>
    );
  }

  const restaurantInfo = menu?.find((card) => card.card?.card?.info)?.card.card.info;

  const regularCards = menu.find((card) => card.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const menuItems = regularCards
    .filter((c) => c.card?.card?.itemCards?.length)
    .flatMap((c) => c.card.card.itemCards);

  const IMG_CDN = "https://media-assets.swiggy.com/swiggy/image/upload/";

  const dispatch = useDispatch()

  function handleAddItem(food){
      dispatch(addToCart(food))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => window.history.back()}
        className="mb-6 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold text-center mb-2">{restaurantInfo?.name}</h1>
      <p className="text-center text-gray-600 mb-8">
        {restaurantInfo?.cuisines?.join(", ")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {menuItems.map((item) => {
          const food = item.card.info;
          const imageUrl = food.imageId
            ? `${IMG_CDN}${food.imageId}`
            : "https://via.placeholder.com/100x80.png?text=No+Image";
          const price = (food.price || food.defaultPrice || 0) / 100;

          return (
            <div key={food.id} className="bg-white shadow rounded p-4">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{food.name}</h3>
                  <p className="text-sm text-gray-500 mb-1">₹{price}</p>
                  <p className="text-sm text-gray-700 mb-2">{food.description}</p>
                  <button
                    className="mt-2 px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition"
                    onClick={() => handleAddItem(food)}
                  >
                    Add +
                  </button>
                </div>

                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt={food.name}
                    className="w-32 h-24 object-cover rounded"
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RestaurantMenu;
