import "./weather-list.css";
import FadeLoader from "react-spinners/FadeLoader";

const WeatherList = ({ weather, loading }) => {
  if (loading) {
    return (
      <div className="weather">
        <ul className="weather__list">
          <li>
            <FadeLoader color={"#000000"} loading={loading} height={15} size={25} margin={4} />
          </li>
        </ul>
      </div>
    );
  } 
  else if (weather.error) {
    return <div className="weather">{weather.error}</div>;
  } 
  else {
    return (
      <div className="weather">
        {weather ? <h2>{weather.town}</h2> : <span>Here is empty...</span>}

        <ul className="weather__list">
          <li className="weather__list-item">
            {weather ? (
              <span className="weather__list-text">
                Temp:{" "}
                <span className="weather__list-value">{Math.floor(weather.temp - 273)}&deg;</span>
              </span>
            ) : null}
          </li>
          <li className="weather__list-item">
            {weather ? (
              <img src={`http://openweathermap.org/img/wn/${weather.cloud}@2x.png`} alt="clouds" />
            ) : null}
          </li>
          <li className="weather__list-item">
            {weather ? (
              <span className="weather__list-text">Wind speed:  <span className="weather__list-value">{weather.wind}</span></span>
            ) : null}
          </li>
        </ul>
      </div>
    );
  }
};

export default WeatherList;
