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

  const apiKey = "6e75a0730264c2386f68ef0d04cad813";
  // Current weather data API url
  const urlCurrent = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}&lang=hr`;
  // 5 days forecast data API url
  const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${apiKey}&lang=hr`;

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
        // Filter the retrieved data by day
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

  const refreshLocation = () => {
    // We get a city name from localStorage because location state resets after input submit
    let savedLocation =
      localStorage.getItem("data") !== null
        ? JSON.parse(localStorage.getItem("data")).name
        : null;
    if (savedLocation !== null) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${savedLocation}&units=metric&appid=${apiKey}&lang=hr`
        )
        .then((res) => {
          setData(res.data);
          // Update local storage with new data object after refresh
          localStorage.setItem("data", JSON.stringify(res.data));
        });

      // Refresh local storage with new forecast if necessary
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${savedLocation}&units=metric&appid=${apiKey}&lang=hr`
        )
        .then((res) => {
          const filteredData = res.data.list.filter((item) =>
            item.dt_txt.includes("12:00:00")
          );
          setForecast(filteredData);
          localStorage.setItem("forecast", JSON.stringify(filteredData));
        });
    }
  };

  const today = new Date().getDay();
  const dayList = [
    "Nedelja",
    "Ponedeljak",
    "Utorak",
    "Srijeda",
    "Cetvrtak",
    "Petak",
    "Subota",
  ];
  let filteredDayList = [];
  // Get next 5 days depending on todays day
  for (let i = 1; i < 6; i++) {
    let day = (today + i) % 7;
    filteredDayList.push(dayList[day]);
  }

  useEffect(() => {
    // Focus input field on page load (once)
    inputRef.current.focus();

    // Update data on page load (once)
    refreshLocation();
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
        filteredDayList,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
