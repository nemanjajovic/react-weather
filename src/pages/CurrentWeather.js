import { useStateContext } from "../context/ContextProvider";

import Header from "../components/Header";

const CurrentWeather = () => {
  const { data } = useStateContext();

  return (
    <>
      <Header />
      {data.main ? (
        <div className="bottom">
          <div className="pressure">
            {data.main ? <p>{data.main.pressure} mBar</p> : null}
            <p>Pritisak</p>
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
