import React, { useState } from 'react';

const DepartmentCard = ({ department }) => {
    const [minutes, setMinutes] = useState('');

    const handleUploadMinutes = () => {
        // Implement logic to upload minutes
    };

    const handleNotifyMembers = () => {
        // Implement logic to notify members
    };

    return (
        <div className="department-card">
            <h2>{department}</h2>
            <textarea value={minutes} onChange={(e) => setMinutes(e.target.value)}></textarea>
            <button onClick={handleUploadMinutes}>Upload Minutes</button>
            <button onClick={handleNotifyMembers}>Notify Members</button>
            {/* Add other fields and functionalities */}
        </div>
    );
};

export default DepartmentCard;
