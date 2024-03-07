import React, { useState } from 'react';

function InterdepartmentalMeetingsPage() {
    const [meetingDate, setMeetingDate] = useState('');
    const [agenda, setAgenda] = useState('');
    const [time, setTime] = useState('');
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
            agenda,
            time,
            minutesFile,
            followUpFile
        });

        // Reset form fields after submission
        setMeetingDate('');
        setAgenda('');
        setTime('');
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
            <h2>Interdepartmental Meetings Page</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="meetingDate">Meeting Date:</label>
                    <input type="date" id="meetingDate" value={meetingDate} onChange={(e) => setMeetingDate(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="agenda">Agenda:</label>
                    <input type="text" id="agenda" value={agenda} onChange={(e) => setAgenda(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="time">Time:</label>
                    <input type="text" id="time" value={time} onChange={(e) => setTime(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="minutesFile">Upload Minutes:</label>
                    <input type="file" id="minutesFile" onChange={(e) => handleFileChange(e, setMinutesFile)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="followUpFile">Follow-up of Decisions:</label>
                    <input type="file" id="followUpFile" onChange={(e) => handleFileChange(e, setFollowUpFile)} required />
                </div>
                <button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit'}</button>
            </form>
        </div>
    );
}

export default InterdepartmentalMeetingsPage;
