import React, { useState } from "react";
import Header from "../header/header";
import Search from "../search/search";
import ThemeMode from "../theme-mode/theme-mode";
import Theme from "../theme/theme";
import WeatherList from "../weather-list/weather-list";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");
  const [location, setLocation] = useState("");
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const handleChangeName = (name) => {
    setLocation(name);
  };

  const weatherApi = () => {
    let key = "0e4e798b65a1c7c5d756d028aeafcf9c";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`)
      .then((resp) =>  resp.json())
      .then((resp) => {
          getWeather(resp);      
      })
      .catch((err) => console.log('could not fetch' + err));
  };

  const getWeather = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (data.cod === 200) {
        setData({
          town: data.name,
          temp: data.main.temp,
          wind: data.wind.speed,
          cloud: data.weather[0].icon,
        });
      } 
      else {
        setData({
          error: data.message,
        });
      }
    }, 1500);
    setLocation('');
  };

  return (
    <div className="App" id={theme}>
      <ThemeMode theme={theme} />
      <Header />
      <Search onChange={handleChangeName} onClick={weatherApi} val={location}/>
      <WeatherList weather={data} theme={theme} loading={loading}  />
      <Theme theme={theme} toggle={toggleTheme} />
    </div>
  );
}

export default App;
