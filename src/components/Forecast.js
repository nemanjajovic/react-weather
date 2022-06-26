import React from "react";

import { useStateContext } from "../context/ContextProvider";

const Forecast = () => {
  const { forecast } = useStateContext();

  // Get next five days relative to today algorithm START
  const today = new Date().getDay();

  const dayList = [
    "Nedelja",
    "Ponedeljak",
    "Utorak",
    "Srijeda",
    "Cetvrtak",
    "Petak",
    "Subota",
  ];

  let relativeFiveDays = [];

  let i = today + 1;

  for (let counter = 0; counter < 5; counter++) {
    // console.log(dayList[today + i]);
    relativeFiveDays.push(dayList[today + i]);
    i++;
    if (i > 6) {
      i = 0;
    }
  }

  // END

  return (
    <>
      <div className="list">
        {forecast.map((item, index) => (
          <div className="list-items" key={index}>
            <p className="item">{relativeFiveDays[index]}</p>
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
