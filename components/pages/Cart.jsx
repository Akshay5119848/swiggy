import React from "react";
import { useSelector, useDispatch } from "react-redux";
import{clearCart} from "../../src/utils/CartSlice";
import{removeItem} from "../../src/utils/CartSlice";
function Cart() {
  const items = useSelector((state) => state.cart.items); // ✅ define items
  const dispatch = useDispatch();

  const IMG_CDN = "https://media-assets.swiggy.com/swiggy/image/upload/";

  if (items.length === 0) {
    return (
      <div className="p-6 text-center text-xl font-semibold">
        🛒 Your Cart is currently empty!
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>
      <button
        className="mb-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        onClick={() => dispatch(clearCart())}
      >
        Clear Cart
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((food, index) => {
          const price = (food.price || food.defaultPrice || 0) / 100;
          const imageUrl = food.imageId
            ? `${IMG_CDN}${food.imageId}`
            : "https://via.placeholder.com/100x80.png?text=No+Image";

          return (
            <div key={index} className="bg-white shadow rounded p-4">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{food.name}</h3>
                  <p className="text-sm text-gray-500 mb-1">₹{price}</p>
                  <div className="flex gap-2">
                   
                    <button
                      className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                      onClick={() => dispatch(removeItem(food.id))}
                    >
                      Remove
                    </button>
                  </div>
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

export default Cart;
