// HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; // Import styles.css

function HomePage() {
    return (
        <div className="container">
            <h2>Welcome to Cabinet Management System</h2>
            <div className="section">
                <ul>
                    <li><Link to="/cabinet-meetings">Cabinet Meetings</Link></li>
                    <li><Link to="/department-meetings">Department Meetings</Link></li>
                    <li><Link to="/interdepartmental-meetings">Interdepartmental Meetings</Link></li>
                    {/* Add more quick links as needed */}
                </ul>
            </div>
            <div className="section">
                <h3>About</h3>
                <p>This is a Cabinet Management System designed to streamline the management of cabinet meetings, department meetings, and interdepartmental meetings.</p>
            </div>
            <div className="section">
                <h3>Contact</h3>
                <p>If you have any questions or feedback, please contact us at <a href="mailto:info@example.com">info@example.com</a>.</p>
            </div>
        </div>
    );
}

export default HomePage;
