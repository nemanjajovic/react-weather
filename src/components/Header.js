import React from "react";

import { useStateContext } from "../context/ContextProvider";

const Header = () => {
  const { data } = useStateContext();

  // Translate weather to serbian
  let translation = "";

  if (localStorage.getItem("data") !== null) {
    switch (data.weather[0].main) {
      case "Clear":
        translation = "Suncano";
        break;
      case "Clouds":
        translation = "Oblacno";
        break;
      case "Rain":
        translation = "Kisovito";
        break;

      default:
        translation = data.weather[0].main;
        break;
    }
  }

  return (
    <>
      <div className="top">
        <div className="location">{data.name ? <p>{data.name}</p> : null}</div>
        {data.coord ? (
          <p className="coord">{`lon: ${data.coord.lon} / lat: ${data.coord.lat}`}</p>
        ) : null}
        <div className="temp-container">
          <div className="temp">
            {/* Added +1 degree for better accuracy, disable if necessary */}
            {data.main ? (
              <h2>{parseInt(data.main.temp.toFixed(0)) + 1}°C</h2>
            ) : null}
          </div>
          <div className="img">
            <img
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
              alt="icon"
            />
          </div>
        </div>
        <div className="description">
          {/* data.weather[0].main */}
          {data.weather ? <p>{translation}</p> : null}
        </div>
      </div>
    </>
  );
};

export default Header;
