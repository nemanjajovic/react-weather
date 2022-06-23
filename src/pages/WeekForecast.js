import React from "react";

import Header from "../components/Header";

const WeekForecast = () => {
  // Week forecast API call, just change the q=belgrade to any city name
  // https://api.openweathermap.org/data/2.5/forecast?q=belgrade&units=metric&cnt=7&appid=6e75a0730264c2386f68ef0d04cad813

  return (
    <div>
      <Header />
    </div>
  );
};

export default WeekForecast;
