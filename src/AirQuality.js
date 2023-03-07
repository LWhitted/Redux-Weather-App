import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { selectCityName } from './State/City/Selectors';
import { useDispatch, useSelector } from 'react-redux';
import './AirQuality.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/images/AQIndex.jpeg" />
            <Card.Body>
                <Card.Title>Air Quality</Card.Title>
                <Card.Text>
                    <p>Your current air quality is: {data?.status}.</p>
                    <p>Want more info on your city's air quality?</p>
                </Card.Text>
                <Button variant="primary" href="{data?.data.city.url}">Click Here</Button>
            </Card.Body>
        </Card>
    </div>
}
export default AirQuality;

