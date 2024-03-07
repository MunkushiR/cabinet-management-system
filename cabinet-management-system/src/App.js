import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import HomePage from './Components/HomePage';
import CabinetMeetingsPage from './Components/CabinetMeetingsPage';
import DepartmentMeetingsPage from './Components/DepartmentMeetingsPage';
import InterdepartmentalMeetingsPage from './Components/InterdepartmentalMeetingsPage';

function App() {
    const handleLogin = (username) => {
        console.log('Logged in as:', username);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/cabinet-meetings" element={<CabinetMeetingsPage />} />
                <Route path="/department-meetings" element={<DepartmentMeetingsPage />} />
                <Route path="/interdepartmental-meetings" element={<InterdepartmentalMeetingsPage />} />
            </Routes>
        </Router>
    );
}

export default App;
