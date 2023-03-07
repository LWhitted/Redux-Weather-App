import CurrentCity from "./CurrentCity";
import AirQuality from "./AirQuality";
import React from 'react';
import './SearchBar.css'

const searchBar= () => {
    return <div className="results">
        <CurrentCity />
        <AirQuality />
    </div>
}

export default searchBar; 
