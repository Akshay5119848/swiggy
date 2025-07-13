import React from "react";

const offers = [
  {
    id: 1,
    title: "50% OFF on first order",
    code: "FIRST50",
    description: "Valid only for new users. Upto ₹100 off.",
    image: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
  },
  {
    id: 2,
    title: "Flat ₹75 OFF",
    code: "SAVE75",
    description: "On orders above ₹299. Limited period.",
    image: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
  },
  {
    id: 3,
    title: "20% Cashback via Paytm",
    code: "PAYTM20",
    description: "Max cashback ₹50. Pay using Paytm Wallet.",
    image: "https://cdn-icons-png.flaticon.com/512/196/196566.png",
  },
  {
    id: 4,
    title: "Free Delivery on ₹149+",
    code: "FREEDEL",
    description: "Enjoy free delivery for orders above ₹149.",
    image: "https://cdn-icons-png.flaticon.com/512/814/814513.png",
  },
];

function Offers() {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-600">
            Grab the Best Offers Now!
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Exclusive discounts and cashback on your favorite meals.
          </p>
        </div>

        {/* Offer Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="h-20 mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800 text-center">
                {offer.title}
              </h2>
              <p className="text-center text-gray-500 mt-2">{offer.description}</p>
              <div className="mt-4 text-center">
                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">
                  Use Code: {offer.code}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Offers;
