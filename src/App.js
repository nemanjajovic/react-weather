import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import { useStateContext } from "./context/ContextProvider";

import CurrentWeather from "./pages/CurrentWeather";
import WeekForecast from "./pages/WeekForecast";

function App() {
  const { inputRef, location, setLocation, searchLocation } = useStateContext();

  return (
    <div className="app">
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
      <div className="links">
        <Link className="link-item" to={"/"}>
          Today's forecast
        </Link>
        <Link className="link-item" to={"/week-forecast"}>
          Week Forecast
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<CurrentWeather />} />
        <Route path="/week-forecast" element={<WeekForecast />} />
      </Routes>
    </div>
  );
}

export default App;
