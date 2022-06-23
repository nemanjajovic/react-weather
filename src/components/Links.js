import React from "react";
import { Link } from "react-router-dom";

import { useStateContext } from "../context/ContextProvider";

const Links = () => {
  const { refreshLocation } = useStateContext();
  return (
    <div className="options">
      <div className="links">
        <Link className="link-item" to={"/"}>
          Today's forecast
        </Link>
        <Link className="link-item" to={"/week-forecast"}>
          Week Forecast
        </Link>
      </div>
      <button onClick={refreshLocation} className="refresh">
        Refresh
      </button>
    </div>
  );
};

export default Links;
