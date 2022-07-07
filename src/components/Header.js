import { useStateContext } from "../context/ContextProvider";

const Header = () => {
  const { data } = useStateContext();

  return (
    <>
      {/* Check if data is fetched from API first, then do the logic */}
      {data.weather ? (
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <p className="coord">{`lon: ${data.coord.lon} / lat: ${data.coord.lat}`}</p>
          <div className="temp-container">
            <div className="temp">
              <h2>{parseInt(data.main.temp.toFixed(0)) + 1}°C</h2>
            </div>
            <div className="img">
              <img
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                alt="icon"
              />
            </div>
          </div>
          <div className="description">
            <p>
              {/* Capitalize first letter */}
              {data.weather[0].description.charAt(0).toUpperCase() +
                data.weather[0].description.slice(1)}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Header;
