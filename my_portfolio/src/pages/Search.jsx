import React, { useRef, useState } from "react";
import { handleSearch } from "../utils/search";

function Search() {
  const inputRef = useRef(null);

  const getSearchResult = () => {
    const query = inputRef.current.value;
    handleSearch(query)
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };
  return (
    <div className="flex justify-center flex-row">
      <input
        type="text"
        name="input"
        id="input"
        className="h-10 w-md rounded-lg border border-b-black"
        placeholder="Search"
        ref={inputRef}
      />
      <button
        className="h-10 ml-2.5 border border-black rounded-lg w-24 cursor-pointer"
        onClick={getSearchResult}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
