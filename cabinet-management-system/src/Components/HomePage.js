// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="container">
            <h2>Home Page</h2>
            <div className="dashboard">
                <h3>Dashboard</h3>
                <ul>
                    <li><Link to="/cabinet-meetings">Cabinet Meetings</Link></li>
                    <li><Link to="/department-meetings">Department Meetings</Link></li>
                    <li><Link to="/interdepartmental-meetings">Interdepartmental Meetings</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default HomePage;
