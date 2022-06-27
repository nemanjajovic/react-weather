import React from "react";

import { useStateContext } from "../context/ContextProvider";

const Forecast = () => {
  const { forecast, newDayList } = useStateContext();

  return (
    <>
      <div className="list">
        {forecast.map((item, index) => (
          <div className="list-items" key={index}>
            <p className="item">{newDayList[index]}</p>
            <p className="item">{`${item.main.temp.toFixed()}°C`}</p>
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
              alt="icon"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Forecast;
