
import React, { useState } from "react";

function Search({ restArray, setAllRestaurants }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const input = e.target.value;
    setQuery(input);

    const filtered = restArray.filter((res) =>
      res.info?.name?.toLowerCase().includes(input.toLowerCase())
    );

    setAllRestaurants(filtered);
  };

  return (
    <input
      type="text"
      placeholder="Search restaurants..."
      className="px-4 py-2 border border-gray-300 rounded-md shadow-sm w-64"
      value={query}
      onChange={handleSearch}
    />
  );
}

export default Search;
