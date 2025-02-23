import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewLog({ setLogs, logs }) {
  const [date, setDate] = useState('');
  const [ministeredTo, setMinisteredTo] = useState('');
  const [itemsDonated, setItemsDonated] = useState(''); // Optional
  const [hours, setHours] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation
    const today = new Date().toISOString().split('T')[0];
    if (date > today) {
      alert('Error: Date cannot be in the future.');
      return;
    }

    if (isNaN(hours) || hours <= 0) {
      alert('Error: Hours must be a positive number.');
      return;
    }

    const newLog = { date, ministeredTo, itemsDonated, hours };
    setLogs([...logs, newLog]);
    alert('Log entry saved successfully!');
    navigate('/app/worklog');
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Date"
          required
          onKeyDown={(e) => e.preventDefault()}
        />
        <input
          type="text"
          value={ministeredTo}
          onChange={(e) => setMinisteredTo(e.target.value)}
          placeholder="Who Ministered To"
          required
        />
        <input
          type="text"
          value={itemsDonated}
          onChange={(e) => setItemsDonated(e.target.value)}
          placeholder="Items Donated (optional)"
        />
        <input
          type="number"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          placeholder="Hours Worked"
          required
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default NewLog;