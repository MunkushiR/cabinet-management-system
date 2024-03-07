import React, { useState } from 'react';

function CabinetMeetingsPage() {
    const [meetingDate, setMeetingDate] = useState('');
    const [agenda, setAgenda] = useState('');
    const [time, setTime] = useState('');
    const [presentMembersFile, setPresentMembersFile] = useState(null);
    const [departmentReportsFile, setDepartmentReportsFile] = useState(null);
    const [minutesFile, setMinutesFile] = useState(null);
    const [followUpFile, setFollowUpFile] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate submitting form data to the server
        setTimeout(() => {
            console.log({
                meetingDate,
                agenda,
                time,
                presentMembersFile,
                departmentReportsFile,
                minutesFile,
                followUpFile
            });
            // Reset form fields after submission if needed
            setMeetingDate('');
            setAgenda('');
            setTime('');
            setPresentMembersFile(null);
            setDepartmentReportsFile(null);
            setMinutesFile(null);
            setFollowUpFile(null);
            setIsSubmitting(false);
        }, 1000); // Simulated delay
    };

    const handleFileChange = (e, setter) => {
        const file = e.target.files[0];
        setter(file);
    };

    return (
        <div className="container">
            <h2>Cabinet Meetings Page</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="meetingDate">Meeting Date:</label>
                    <input type="date" id="meetingDate" value={meetingDate} onChange={(e) => setMeetingDate(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="agenda">Agenda:</label>
                    <input type="text" id="agenda" value={agenda} onChange={(e) => setAgenda(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="time">Time:</label>
                    <input type="text" id="time" value={time} onChange={(e) => setTime(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="presentMembersFile">Present Members:</label>
                    <input type="file" id="presentMembersFile" onChange={(e) => handleFileChange(e, setPresentMembersFile)} />
                </div>
                <div className="form-group">
                    <label htmlFor="departmentReportsFile">Department Reports:</label>
                    <input type="file" id="departmentReportsFile" onChange={(e) => handleFileChange(e, setDepartmentReportsFile)} />
                </div>
                <div className="form-group">
                    <label htmlFor="minutesFile">Upload Minutes:</label>
                    <input type="file" id="minutesFile" onChange={(e) => handleFileChange(e, setMinutesFile)} />
                </div>
                <div className="form-group">
                    <label htmlFor="followUpFile">Follow-up of Decisions:</label>
                    <input type="file" id="followUpFile" onChange={(e) => handleFileChange(e, setFollowUpFile)} />
                </div>
                <button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit'}</button>
            </form>
        </div>
    );
}

export default CabinetMeetingsPage;
