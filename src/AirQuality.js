import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { selectCityName } from './State/City/Selectors';
import { useDispatch, useSelector } from 'react-redux';
import './AirQuality.css';

const AirQuality = () => {
    const [data, setAirQualityData] = useState();
    const cityName = useSelector((state) => selectCityName(state))
    const fetchAirQualityData = () => {
        return fetch(
            `https://api.waqi.info/feed/${cityName}/?token=6a49512e98dba5f1b7cdbbc8d31969bccf003b38`
        ).then((response) => response.json());
    };
    const fetchAQData = useCallback(async () => {
        const response = await fetchAirQualityData();
        setAirQualityData(response)
    }, []);
    useEffect(() => {
        fetchAQData();
    }, [fetchAQData]);
    return <div className="airQuality">
        {/* <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Air Quality</h5> */}
                <p>Your current air quality is: {data?.status}.</p>
                <p>Want more info on your city's air quality? <a href={data?.data.city.url}>CLICK HERE</a></p>
            </div>
    //     </div>
    // </div>
}
export default AirQuality;

