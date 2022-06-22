import React from "react";

import { useStateContext } from "../context/ContextProvider";

const CurrentWeather = () => {
  const { data } = useStateContext();

  return (
    <div className="container">
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
      {data.main ? (
        <div className="bottom">
          <div className="feels">
            {/* Added +1 degree here too, disable if necessary */}
            {data.main ? (
              <p>{parseInt(data.main.feels_like.toFixed(0)) + 1}°C</p>
            ) : null}
            <p>Feels like</p>
          </div>
          <div className="humidity">
            {data.main ? <p>{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p>{data.wind.speed.toFixed(0)} km/h</p> : null}
            <p>Wind</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CurrentWeather;
