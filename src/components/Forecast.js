import React from "react";

import { useStateContext } from "../context/ContextProvider";

const Forecast = () => {
  const { forecast } = useStateContext();
  return (
    <>
      <ul className="list">
        {forecast.map((item, index) => (
          <li className="list-item" key={index}>
            {item.main.temp}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Forecast;
