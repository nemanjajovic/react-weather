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
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const inputRef = useRef(React.createRef());

  const apiKey = "6e75a0730264c2386f68ef0d04cad813";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      // Send request to specified URL and retrieve the data
      axios.get(url).then((res) => {
        setData(res.data);
        // localStorage.setItem("city", res.data.name);
      });
      // Clear and unfocus the input field
      setLocation("");
      inputRef.current.blur();
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
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
