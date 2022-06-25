import React from "react";

import { useStateContext } from "../context/ContextProvider";

const Forecast = () => {
  const { forecast } = useStateContext();
  return (
    <div>
      <ul>
        {forecast.map((item, index) => (
          <li key={index}>{item.main.temp}</li>
        ))}
      </ul>
    </div>
  );
};

export default Forecast;
