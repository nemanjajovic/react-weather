import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} from "react";
import axios from "axios";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  // Checks if local storage contains any data and converts it to an object
  const [data, setData] = useState(
    localStorage.getItem("data") !== null
      ? JSON.parse(localStorage.getItem("data"))
      : {}
  );
  const [forecast, setForecast] = useState(
    localStorage.getItem("forecast") !== null
      ? JSON.parse(localStorage.getItem("forecast"))
      : []
  );
  const [location, setLocation] = useState("");
  const inputRef = useRef(React.createRef());

  // 5days api
  // https://api.openweathermap.org/data/2.5/forecast?q=mumbai&appid=6e75a0730264c2386f68ef0d04cad813

  // FILTER DAYS FROM RESPONSE
  //   response.list.filter((item) => item.dt_txt.includes("00:00:00"))

  const apiKey = "6e75a0730264c2386f68ef0d04cad813";
  const urlCurrent = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
  const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${apiKey}`;

  // send GET request
  const searchLocation = (e) => {
    if (e.key === "Enter") {
      // Send request to specified URL and retrieve the current weather

      axios.get(urlCurrent).then((res) => {
        setData(res.data);
        // Sends a stringified data to local storage
        localStorage.setItem("data", JSON.stringify(res.data));
      });

      // Send request to retrieve the forecast weather
      axios.get(urlForecast).then((res) => {
        const filteredData = res.data.list.filter((item) =>
          item.dt_txt.includes("12:00:00")
        );
        setForecast(filteredData);
        localStorage.setItem("forecast", JSON.stringify(filteredData));
      });

      // Clear and unfocus the input field
      setLocation("");
      inputRef.current.blur();
    }
  };

  // send another GET request after hitting Refresh button
  const refreshLocation = () => {
    // We get a city name from localStorage because location state resets after input submit
    let savedLocation =
      localStorage.getItem("data") !== null
        ? JSON.parse(localStorage.getItem("data")).name
        : null;
    if (savedLocation !== null) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${savedLocation}&units=metric&appid=${apiKey}`
        )
        .then((res) => {
          setData(res.data);
          // Update local storage with new data object after refresh
          localStorage.setItem("data", JSON.stringify(res.data));
        });

      // Refresh local storage with new forecast if necessary
      // axios
      //   .get(
      //     `https://api.openweathermap.org/data/2.5/forecast?q=${savedLocation}&appid=${apiKey}`
      //   )
      //   .then((res) => {
      //     const filteredData = res.data.list.filter((item) =>
      //       item.dt_txt.includes("12:00:00")
      //     );
      //     setForecast(filteredData);
      //     localStorage.setItem("forecast", JSON.stringify(filteredData));
      //   });
    }
  };

  useEffect(() => {
    // Focus input field on page load
    inputRef.current.focus();
  }, []);

  return (
    <StateContext.Provider
      value={{
        data,
        location,
        setLocation,
        inputRef,
        searchLocation,
        refreshLocation,
        forecast,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
