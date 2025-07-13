const OfferCard = ({ title, subtitle, offer, img }) => {
    return (
      <div className="bg-white text-black rounded-xl p-4 shadow-md flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
          <p>{subtitle}</p>
          <p className="text-orange-500 font-semibold mt-2">{offer}</p>
          <button className="mt-3 bg-orange-500 text-white px-4 py-1 rounded">Explore →</button>
        </div>
        <img src={img} alt="offer" className="w-24 h-24 object-cover rounded" />
      </div>
    );
  };
  
  export default OfferCard;
  