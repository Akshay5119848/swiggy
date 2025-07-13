const SearchBar = () => {
    return (
      <div className="flex justify-center gap-2">
        <input
          type="text"
          placeholder="Enter your delivery location"
          className="p-2 rounded w-64 text-black bg-white"
        />
        <input
          type="text"
          placeholder="Search for restaurant, item or more"
          className="p-2 rounded w-64 text-black bg-white"
        />
        <button className="bg-white text-orange-500 px-4 py-2 rounded">Search</button>
      </div>
    );
  };
  
  export default SearchBar;
  