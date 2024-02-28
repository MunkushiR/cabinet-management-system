import React from 'react';
import DepartmentCard from './DepartmentCard';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <DepartmentCard department="Water and Irrigation" />
            <DepartmentCard department="Youth Affairs" />
            {/* Add other department cards here */}
        </div>
    );
};

export default Dashboard;
