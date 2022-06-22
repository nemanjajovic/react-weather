import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import CurrentWeather from "./pages/CurrentWeather";
import WeekForecast from "./pages/WeekForecast";

function App() {
  return (
    <div className="app">
      {/* <h1>React weather</h1>
      <p className="subtitle">Type any city name and press Enter</p> */}
      <div className="link">
        <Link className="link-item" to={"/"}>
          Today's forecast
        </Link>
        <Link className="link-item" to={"/week-forecast"}>
          Week Forecast
        </Link>
      </div>
      {/* <CurrentWeather /> */}

      <Routes>
        <Route path="/" element={<CurrentWeather />} />
        <Route path="/week-forecast" element={<WeekForecast />} />
      </Routes>
    </div>
  );
}

export default App;
