import React, { useState } from 'react';

function DepartmentMeetingsPage() {
    const [meetingDate, setMeetingDate] = useState('');
    const [agendaFile, setAgendaFile] = useState(null);
    const [time, setTime] = useState('');
    const [departmentReportsFile, setDepartmentReportsFile] = useState(null);
    const [assessmentReportFile, setAssessmentReportFile] = useState(null);
    const [implementationOfProgramsFile, setImplementationOfProgramsFile] = useState(null);
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
            departmentReportsFile,
            assessmentReportFile,
            implementationOfProgramsFile
        });

        // Reset form fields after submission
        setMeetingDate('');
        setAgendaFile(null);
        setTime('');
        setDepartmentReportsFile(null);
        setAssessmentReportFile(null);
        setImplementationOfProgramsFile(null);
        setIsSubmitting(false);
    };

    const handleFileChange = (e, setter) => {
        const file = e.target.files[0];
        setter(file);
    };

    return (
        <div className="container">
            <h2>Department Meetings Page</h2>
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
                    <label htmlFor="departmentReportsFile">Department Reports:</label>
                    <input type="file" id="departmentReportsFile" onChange={(e) => handleFileChange(e, setDepartmentReportsFile)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="assessmentReportFile">Assessment Report:</label>
                    <input type="file" id="assessmentReportFile" onChange={(e) => handleFileChange(e, setAssessmentReportFile)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="implementationOfProgramsFile">Implementation of Programs:</label>
                    <input type="file" id="implementationOfProgramsFile" onChange={(e) => handleFileChange(e, setImplementationOfProgramsFile)} required />
                </div>
                <button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit'}</button>
            </form>
        </div>
    );
}

export default DepartmentMeetingsPage;
