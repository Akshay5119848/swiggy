// components/RestaurantCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const SWIGGY_IMAGE_BASE_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

function RestaurantCard({ item }) {
  if (!item || !item.info) {
    return (
      <div className="w-64 p-4 m-4 bg-gray-100 rounded-lg shadow-md animate-pulse h-64 flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  const {
    id,
    name,
    avgRating,
    sla,
    cuisines,
    locality,
    cloudinaryImageId,
  } = item.info;

  const rating = avgRating ? `${avgRating} ⭐` : "N/A";

  return (
    <Link to={`/restaurant/${id}`}>
      <div className="w-64 p-4 m-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
        <img
          src={`${SWIGGY_IMAGE_BASE_URL}${cloudinaryImageId}`}
          alt={name}
          className="w-full h-40 object-cover rounded-md mb-3"
        />
        <h2 className="font-bold text-lg text-gray-800 mb-1 truncate">{name}</h2>
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <span className="font-semibold mr-2">{rating}</span>
          {sla?.slaString && (
            <>
              <span className="text-gray-400">•</span>
              <span className="ml-2">{sla.slaString}</span>
            </>
          )}
        </div>
        <p className="text-gray-500 text-sm mb-1 truncate">
          {cuisines?.join(", ")}
        </p>
        <p className="text-gray-500 text-xs truncate">{locality}</p>
      </div>
    </Link>
  );
}

export default RestaurantCard;
