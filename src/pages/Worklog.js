import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserInfoForm from '../components/UserInfoForm';

function Worklog({ logs, setLogs, user, setUser }) {
  const [isEditingUser, setIsEditingUser] = useState(false);
  const [editingLog, setEditingLog] = useState(null);

  if (!user) return null;

  const handleDelete = (index) => {
    setLogs(logs.filter((_, i) => i !== index));
  };

  const handleEdit = (log, index) => {
    setEditingLog({ ...log, index });
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    const updatedLogs = logs.map((log, i) =>
      i === editingLog.index ? { date: editingLog.date, hours: editingLog.hours, donation: editingLog.donation } : log
    );
    setLogs(updatedLogs);
    setEditingLog(null);
  };

  return (
    <div className="container">
      <h2>Work & Donation Log</h2>

      <div>
        {isEditingUser ? (
          <UserInfoForm user={user} setUser={setUser} setIsEditing={setIsEditingUser} />
        ) : (
          <>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email || 'Not set'}</p>
            <button onClick={() => setIsEditingUser(true)}>Edit Info</button>
          </>
        )}
      </div>

      {logs.length === 0 ? (
        <p>No logs yet.</p>
      ) : editingLog ? (
        <form onSubmit={handleSaveEdit}>
          <input
            type="date"
            value={editingLog.date}
            onChange={(e) => setEditingLog({ ...editingLog, date: e.target.value })}
          />
          <input
            type="number"
            value={editingLog.hours}
            onChange={(e) => setEditingLog({ ...editingLog, hours: e.target.value })}
            placeholder="Hours"
          />
          <input
            type="number"
            value={editingLog.donation}
            onChange={(e) => setEditingLog({ ...editingLog, donation: e.target.value })}
            placeholder="Donation ($)"
          />
          <button type="submit">Save Edit</button>
          <button onClick={() => setEditingLog(null)}>Cancel</button>
        </form>
      ) : (
        <ul className="log-list">
          {logs.map((log, index) => (
            <li key={index} className="log-item">
              <div>
                <p><strong>Date:</strong> {log.date}</p>
                <p><strong>Hours:</strong> {log.hours}</p>
                <p><strong>Donation:</strong> ${log.donation}</p>
              </div>
              <div>
                <button onClick={() => handleEdit(log, index)}>Edit</button>
                <button className="delete" onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <Link to="/app/newlog">Add Entry</Link>
    </div>
  );
}

export default Worklog;