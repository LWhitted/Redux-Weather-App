// this will be the landing page for the site
// it should be a simple landing page that welcomes you and has the search bar so you
// can search your city
// the search button should search the API for the city and simultaneously take you to the currentcity page which populates the data
// wanted from the openweather API and the airquality api

import React from 'react';
// import { ReactDOM } from 'react';


const Home = () => {
    return <div className="greeting">
        <h1>What's Your City?</h1>
        <input type="text" className="form-control" placeholder="enter city" aria-label="enter citye"/>
            <button className="btn btn-primary" type="submit">Search</button>
    
    </div>
}

export default Home;
