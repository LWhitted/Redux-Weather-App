import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>YourForecast</h1>
            <div className="links">
                <Link to="/">Back to Search</Link>
            </div>
        </nav>
    );
}

export default Navbar;