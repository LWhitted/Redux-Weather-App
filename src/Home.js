// this will be the landing page for the site
// it should be a simple landing page that welcomes you and has the search bar so you
// can search your city
// the search button should search the API for the city and simultaneously take you to the currentcity page which populates the data
// wanted from the openweather API and the airquality api

import React, {useState, useEffect, useRef} from 'react';
// import { ReactDOM } from 'react';
import {useNavigate} from 'react-router-dom';
import CurrentCity from './CurrentCity';
import AirQuality from './AirQuality';
import SearchBar from './SearchBar';
import {useDispatch, useSelector} from 'react-redux';
import {setCity} from './State/City';
import {selectCityName} from './State/City/Selectors';
import './Home.css'

const Home = () => {
 const [cityName, setCityName] = useState("");
 const dispatch = useDispatch();
const currentCityName = useRef(cityName);
const selectedCityName = useSelector((state)=>selectCityName(state))
    console.log(selectedCityName);
const navigate = useNavigate();
    const test = () => {
        console.log(currentCityName.current);
        navigate("/SearchBar")
        return <>
        <CurrentCity />
        <AirQuality />
        </>
        }

useEffect(()=>{
currentCityName.current=cityName;
    dispatch(setCity(cityName))
},[cityName, dispatch])
    return <div className="greeting">
        <h1>What's Your City?</h1>
        <input value= {cityName} onChange = {e => setCityName(e.target.value)} type="text" className="form-control" placeholder="enter city" aria-label="enter citye"/>
            <button onClick={test}className="btn btn-primary" type="submit">Search</button>
    </div>

}

export default Home;
