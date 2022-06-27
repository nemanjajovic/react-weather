import { useStateContext } from "../context/ContextProvider";

const Header = () => {
  const { data } = useStateContext();

  // Translate weather to Serbian
  let translation = "";

  // Check if data is fetched from API first, then do the logic
  if (data.weather) {
    switch (data.weather[0].main) {
      case "Clear":
        translation = "Suncano";
        break;
      case "Clouds":
        translation = "Oblacno";
        break;
      case "Rain":
        translation = "Kisovito";
        break;

      default:
        translation = data.weather[0].main;
        break;
    }
  }

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
            <p>{translation}</p>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Header;
