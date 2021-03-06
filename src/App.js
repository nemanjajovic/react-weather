import { Routes, Route } from "react-router-dom";
import { useStateContext } from "./context/ContextProvider";

import CurrentWeather from "./pages/CurrentWeather";
import WeekForecast from "./pages/WeekForecast";
import Search from "./components/Search";
import Links from "./components/Links";

function App() {
  const { data } = useStateContext();
  return (
    <div className="app noselect">
      <Search />
      {data.main ? <Links /> : null}

      <div className="container">
        <Routes>
          <Route path="/" element={<CurrentWeather />} />
          <Route path="/week-forecast" element={<WeekForecast />} />
        </Routes>
        <div className="footer">
          <a href="https://openweathermap.org/">
            Service by <span className="footer-span">Open Weather Map</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
