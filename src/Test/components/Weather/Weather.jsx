import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import "./Weather.scss";
import 'moment/locale/ru';

function WeatherWidget() {
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    const apiKey = 'e831ae2da2b6b366e543c77d79ea3a6d';
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=Moscow&appid=${apiKey}&units=metric&lang=ru`;
    axios.get(url).then(response => {
        setWeatherData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  if (!weatherData) {
    return <div>Loading weather data...</div>;
  }
  
  const weatherList = weatherData.list.filter((item, index) => index % 8 === 0).map(item => {
    const date = moment(item.dt_txt).locale('ru').format('ddd, D MMMM');
    const time = moment(item.dt_txt).locale('ru').format('H:mm');
    const temperature = Math.round(item.main.temp);
    const iconUrl = `http://openweathermap.org/img/w/${item.weather[0].icon}.png`;
    const description = item.weather[0].description;
    return (
      <li key={item.dt}>
        <div className="weather-date">{date}</div>
        <div className="weather-icon">
          <img src={iconUrl} alt={description} />
        </div>
        <div className="weather-temperature">{temperature} &deg;C</div>
      </li>
    );
  });

  return (
    <div className="weather-container">
      <h2 className="weather-header">Прогноз погоды</h2>
      <ul className="weather-list">{weatherList}</ul>
    </div>
  );
}

export default WeatherWidget;
