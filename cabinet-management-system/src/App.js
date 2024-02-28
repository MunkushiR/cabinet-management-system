// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import CabinetMeetingsPage from './CabinetMeetingsPage';
import DepartmentMeetingsPage from './DepartmentMeetingsPage';
import InterdepartmentalMeetingsPage from './InterdepartmentalMeetingsPage';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route path="/home" component={HomePage} />
                <Route path="/cabinet-meetings" component={CabinetMeetingsPage} />
                <Route path="/department-meetings" component={DepartmentMeetingsPage} />
                <Route path="/interdepartmental-meetings" component={InterdepartmentalMeetingsPage} />
            </Switch>
        </Router>
    );
}

export default App;
