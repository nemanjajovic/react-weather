import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import CurrentWeather from "./pages/CurrentWeather";
import WeekForecast from "./pages/WeekForecast";
import Search from "./components/Search";

function App() {
  return (
    <div className="app">
      <Search />
      <div className="links">
        <Link className="link-item" to={"/"}>
          Today's forecast
        </Link>
        <Link className="link-item" to={"/week-forecast"}>
          Week Forecast
        </Link>
      </div>
      <div className="container">
        <Routes>
          <Route path="/" element={<CurrentWeather />} />
          <Route path="/week-forecast" element={<WeekForecast />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
