import React, { useState } from "react";

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = () => {
    // Implement your search logic here
    // For now, let's assume a sample result
    const mockResult = ["Result 1", "Result 2", "Result 3"];

    // Simulate search result
    setSearchResult(mockResult.length > 0 ? mockResult : null);
  };

  return (
    <div className="flex flex-col items-end p-4 w-[350px]  absolute right-0 top-12">
      <div className="flex justify-between border h-10 pl-2 mb-4 rounded-xl">
        <input
          type="text"
          placeholder={props.placeholderText}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className=" w-[250px] outline-none"
        />
        <button
          onClick={handleSearch}
          className="bg-[#63B76C] text-sm text-white rounded-e-xl px-2 hover:bg-[#358046]"
        >
          Search
        </button>
      </div>

      {searchResult !== null ? (
        <div className="mt-4">
          <h2 className="text-xl font-bold">Search Results:</h2>
          <ul>
            {searchResult.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="hidden">No results found.</p>
      )}
    </div>
  );
};

export default SearchBar;
