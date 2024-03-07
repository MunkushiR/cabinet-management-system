import React, { useState } from 'react';

function CabinetMeetingsPage() {
    const [meetingDate, setMeetingDate] = useState('');
    const [agendaFile, setAgendaFile] = useState(null);
    const [time, setTime] = useState('');
    const [presentMembersFile, setPresentMembersFile] = useState(null);
    const [departmentReportsFile, setDepartmentReportsFile] = useState(null);
    const [minutesFile, setMinutesFile] = useState(null);
    const [followUpFile, setFollowUpFile] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Log form data
        console.log({
            meetingDate,
            agendaFile,
            time,
            presentMembersFile,
            departmentReportsFile,
            minutesFile,
            followUpFile
        });

        // Reset form fields after submission
        setMeetingDate('');
        setAgendaFile(null);
        setTime('');
        setPresentMembersFile(null);
        setDepartmentReportsFile(null);
        setMinutesFile(null);
        setFollowUpFile(null);
        setIsSubmitting(false);
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
                    <input type="date" id="meetingDate" value={meetingDate} onChange={(e) => setMeetingDate(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="agendaFile">Agenda File:</label>
                    <input type="file" id="agendaFile" onChange={(e) => handleFileChange(e, setAgendaFile)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="time">Time:</label>
                    <input type="text" id="time" value={time} onChange={(e) => setTime(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="presentMembersFile">Present Members:</label>
                    <input type="file" id="presentMembersFile" onChange={(e) => handleFileChange(e, setPresentMembersFile)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="departmentReportsFile">Department Reports:</label>
                    <input type="file" id="departmentReportsFile" onChange={(e) => handleFileChange(e, setDepartmentReportsFile)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="minutesFile">Minutes:</label>
                    <input type="file" id="minutesFile" onChange={(e) => handleFileChange(e, setMinutesFile)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="followUpFile">Follow Up:</label>
                    <input type="file" id="followUpFile" onChange={(e) => handleFileChange(e, setFollowUpFile)} required />
                </div>
                <button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit'}</button>
            </form>
        </div>
    );
}

export default CabinetMeetingsPage;
