import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewLog({ setLogs, logs }) {
  const [date, setDate] = useState('');
  const [hours, setHours] = useState('');
  const [donation, setDonation] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLog = { date, hours, donation: donation || 0 };
    setLogs([...logs, newLog]);
    navigate('/app/worklog');
  };

  return (
    <div className="container">
      <h2>New Log Entry</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="number"
          placeholder="Hours Worked"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
        />
        <input
          type="number"
          placeholder="Donation ($)"
          value={donation}
          onChange={(e) => setDonation(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default NewLog;