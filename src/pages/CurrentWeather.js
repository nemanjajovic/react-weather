import { useStateContext } from "../context/ContextProvider";

import Header from "../components/Header";

const CurrentWeather = () => {
  const { data } = useStateContext();

  return (
    <>
      <Header />
      {data.main ? (
        <div className="bottom">
          <div className="feels">
            {/* Added +1 degree here too, disable if necessary */}
            {data.main ? (
              <p>{parseInt(data.main.feels_like.toFixed(0)) + 1}°C</p>
            ) : null}
            <p>Osjecaj</p>
          </div>
          <div className="humidity">
            {data.main ? <p>{data.main.humidity}%</p> : null}
            <p>Vlaznost</p>
          </div>
          <div className="wind">
            {data.wind ? <p>{data.wind.speed.toFixed(0)} km/h</p> : null}
            <p>Vjetar</p>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CurrentWeather;
