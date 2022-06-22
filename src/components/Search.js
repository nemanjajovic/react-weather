import React from "react";

import { useStateContext } from "../context/ContextProvider";

const Search = () => {
  const { location, searchLocation, setLocation, inputRef } = useStateContext();

  return (
    <div>
      <div className="search">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDown={searchLocation}
          placeholder="Enter location"
          ref={inputRef}
        />
      </div>
    </div>
  );
};

export default Search;
