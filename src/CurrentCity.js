// This will be the page that you get redirected to when you hit the search button from
// the home page.
// the data on this page should be City Name, current temp, feels like, weather description, Air quality, link to air quality (more Info)
import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import {selectCityName} from './State/City/Selectors';
import {useDispatch, useSelector} from 'react-redux';

const CurrentCity = () => {
    const cityName = useSelector((state)=>selectCityName(state))
    // const fetchCityData = React.useCallback(async (props) => {
    //     const response = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=398d9f85036ab66f822fd82148535c81&units=imperial`)

    //     const cityName = weatherData.name;
    //     const currentTemp = weatherData.main.temp;
    //     const feelsLike = weatherData.main.feels_like;
    //     const weatherDescription = weatherData.weather[0].description;
    // })
   const [weatherData, setWeatherData]= useState();

    const fetchWeatherData = () => {
        return fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=398d9f85036ab66f822fd82148535c81&units=imperial`
        ).then((response) => response.json());
      };
      
      const fetchData = useCallback(async () => {
        const a = await fetchWeatherData();
        setWeatherData(a)
      }, []);
      
      useEffect(() => {
        fetchData();
      }, [fetchData]);

    return <div className="currentCity">
        <h1>{weatherData?.name}</h1>
        <h2>Current Temp is {weatherData?.main.temp}</h2>
        <h2>Feels Like {weatherData?.main.feels_like}</h2>
        <h2>The current weather conditions are {weatherData?.weather[0].description}</h2>

    </div>

   
}

export default CurrentCity;