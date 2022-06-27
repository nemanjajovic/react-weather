import { useStateContext } from "../context/ContextProvider";

const Forecast = () => {
  const { forecast, filteredDayList } = useStateContext();

  return (
    <>
      {/* Check if data is fetched from API first, then do the logic */}
      {/* {forecast.list ? ( */}
      <div className="list">
        {forecast.map((item, index) => (
          <div className="list-items" key={index}>
            <p className="item">{filteredDayList[index]}</p>
            <p className="item">{`${item.main.temp.toFixed()}°C`}</p>
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
              alt="icon"
            />
          </div>
        ))}
      </div>
      {/* ) : null} */}
    </>
  );
};

export default Forecast;
