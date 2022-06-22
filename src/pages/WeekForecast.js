import React from "react";

import { useStateContext } from "../context/ContextProvider";

const WeekForecast = () => {
  // Week forecast API call, just change the q=belgrade to any city name
  //https://api.openweathermap.org/data/2.5/forecast?q=belgrade&appid=6e75a0730264c2386f68ef0d04cad813

  const { data } = useStateContext();

  return (
    <div className="container">
      {data.main ? (
        <div className="top">
          <div className="location">
            {data.name ? <p>{data.name}</p> : null}
          </div>
          <div className="temp">
            {/* Added +1 degree for better accuracy, disable if necessary */}
            {data.main ? (
              <h2>{parseInt(data.main.temp.toFixed()) + 1}°C</h2>
            ) : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default WeekForecast;
