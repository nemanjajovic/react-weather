import { Link } from "react-router-dom";

import { useStateContext } from "../context/ContextProvider";

const Links = () => {
  const { refreshLocation } = useStateContext();
  return (
    <div className="options">
      <div className="links">
        <Link className="link-item" to={"/"}>
          Trenutni detalji
        </Link>
        <div className="separator">|</div>
        <Link className="link-item" to={"/week-forecast"}>
          Prognoza 5 dana
        </Link>
      </div>
      <button onClick={refreshLocation} className="refresh">
        Osvjezi
      </button>
    </div>
  );
};

export default Links;
