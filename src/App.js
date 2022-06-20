import axios from "axios";
import { useState } from "react";

import "./App.css";

function App() {
  // const apiKey = '6e75a0730264c2386f68ef0d04cad813'
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=${apiKey}`

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Dallas</p>
          </div>
          <div className="temp">
            <h1>65°F</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>65°F</p>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className="wind">
            <p>12 MPH</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
