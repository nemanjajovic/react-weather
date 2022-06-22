import React from "react";

import { useStateContext } from "../context/ContextProvider";

const Header = () => {
  const { data, searchLocation, location, setLocation, inputRef } =
    useStateContext();
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
      <div className="top">
        <div className="location">{data.name ? <p>{data.name}</p> : null}</div>
        <div className="temp">
          {/* Added +1 degree for better accuracy, disable if necessary */}
          {data.main ? (
            <h2>{parseInt(data.main.temp.toFixed(0)) + 1}°C</h2>
          ) : null}
        </div>
        <div className="description">
          {data.weather ? <p>{data.weather[0].main}</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Header;
