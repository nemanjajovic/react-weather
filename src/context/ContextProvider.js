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
  const [location, setLocation] = useState("");
  const inputRef = useRef(React.createRef());

  // https://api.openweathermap.org/data/2.5/weather?q=banjaluka&units=metric&appid=6e75a0730264c2386f68ef0d04cad813
  const apiKey = "6e75a0730264c2386f68ef0d04cad813";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

  // send GET request
  const searchLocation = (e) => {
    if (e.key === "Enter") {
      // Send request to specified URL and retrieve the data
      axios.get(url).then((res) => {
        setData(res.data);
        // Sends a stringified data to local storage
        localStorage.setItem("data", JSON.stringify(res.data));
      });
      // Clear and unfocus the input field
      setLocation("");
      inputRef.current.blur();
    }
  };

  // send another GET request after hitting Refresh button
  const refreshLocation = () => {
    // We get a city name from localStorage because location state resets after input submit
    // Its a bit messed up here, turn your brain at least to 50% capacity
    let savedLocation =
      localStorage.getItem("data") !== null
        ? JSON.parse(localStorage.getItem("data")).name
        : null;
    if (savedLocation !== null) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${savedLocation}&units=metric&appid=${apiKey}`
        )
        .then((res) => setData(res.data));
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
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
