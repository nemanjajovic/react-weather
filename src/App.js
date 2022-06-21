import axios from "axios";
import React, { useState, useRef, useEffect } from "react";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const inputRef = useRef(React.createRef());

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const apiKey = "6e75a0730264c2386f68ef0d04cad813";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((res) => {
        setData(res.data);
        console.log(res.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="app">
      <h1 className="title">React weather</h1>
      <p className="subtitle">Type any city name and press Enter</p>
      <div className="search">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDown={searchLocation}
          placeholder="Enter location"
          ref={inputRef}
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            {data.name ? <p>{data.name}</p> : null}
          </div>
          <div className="temp">
            {data.main ? <h1>{Math.floor(data.main.temp)}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        {data.main ? (
          <div className="bottom">
            <div className="feels">
              {data.main ? (
                <p className="bold">{Math.floor(data.main.feels_like)}°C</p>
              ) : null}
              <p>Feels like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? (
                <p className="bold">{Math.floor(data.wind.speed)} km/h</p>
              ) : null}
              <p>Wind</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
