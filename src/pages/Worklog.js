import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UserInfoForm from '../components/UserInfoForm';

function Worklog({ logs, setLogs, user, setUser }) {
  const [isEditingUser, setIsEditingUser] = useState(false);
  const [editingLog, setEditingLog] = useState(null);
  const navigate = useNavigate();

  if (!user) return null;

  const handleDelete = (index) => {
    setLogs(logs.filter((_, i) => i !== index));
  };

  const handleEdit = (log, index) => {
    setEditingLog({ ...log, index });
  };

  const formatPhoneNumber = (value) => {
    // Remove non-digits
    const digits = value.replace(/\D/g, '');
    // Format as (xxx)xxx-xxxx
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 3)})${digits.slice(3)}`;
    return `(${digits.slice(0, 3)})${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    // Validation
    const today = new Date().toISOString().split('T')[0];
    if (editingLog.date > today) {
      alert('Error: Date cannot be in the future.');
      return;
    }

    if (isNaN(editingLog.hours) || editingLog.hours <= 0) {
      alert('Error: Hours must be a positive number.');
      return;
    }

    const updatedLogs = logs.map((log, i) =>
      i === editingLog.index
        ? {
            date: editingLog.date,
            ministeredTo: editingLog.ministeredTo,
            itemsDonated: editingLog.itemsDonated || '', // Optional
            hours: editingLog.hours
          }
        : log
    );
    setLogs(updatedLogs);
    alert('Log entry updated successfully!');
    setEditingLog(null);
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear all log history? This cannot be undone.')) {
      setLogs([]);
      alert('All log history cleared successfully!');
    }
  };

  const handleAddEntry = () => {
    navigate('/app/newlog');
  };

  return (
    <div className="container">
      <div>
        {isEditingUser ? (
          <UserInfoForm user={user} setUser={setUser} setIsEditing={setIsEditingUser} />
        ) : (
          <>
            <p><strong>First name:</strong> {user.firstname || 'Not set'}</p>
            <p><strong>Last name:</strong> {user.lastname || 'Not set'}</p>
            <p><strong>Phone number:</strong> {user.phone ? formatPhoneNumber(user.phone) : 'Not set'}</p>
            <p><strong>Birthdate:</strong> {user.birthdate || 'Not set'}</p>
            <p><strong>Gender:</strong> {user.gender || 'Not set'}</p>
            <button onClick={() => setIsEditingUser(true)}>Edit Info</button>
          </>
        )}
      </div>
      <button className="clear-all" onClick={handleAddEntry}>Add Entry</button>

      {logs.length === 0 ? (
        <p>No logs yet.</p>
      ) : editingLog ? (
        <form onSubmit={handleSaveEdit}>
          <input
            type="date"
            value={editingLog.date}
            onChange={(e) => setEditingLog({ ...editingLog, date: e.target.value })}
            required
            onKeyDown={(e) => e.preventDefault()}
          />
          <input
            type="text"
            value={editingLog.ministeredTo || ''}
            onChange={(e) => setEditingLog({ ...editingLog, ministeredTo: e.target.value })}
            placeholder="Who Ministered To"
            required
          />
          <input
            type="text"
            value={editingLog.itemsDonated || ''}
            onChange={(e) => setEditingLog({ ...editingLog, itemsDonated: e.target.value })}
            placeholder="Items Donated (optional)"
          />
          <input
            type="number"
            value={editingLog.hours || ''}
            onChange={(e) => setEditingLog({ ...editingLog, hours: e.target.value })}
            placeholder="Hours Worked"
            required
          />
          <button type="submit">Save Edit</button>
          <button onClick={() => setEditingLog(null)}>Cancel</button>
        </form>
      ) : (
        <>
        <button className="clear-all" onClick={handleClearAll}>Clear All History</button>
        <ul className="log-list">
          {logs.map((log, index) => (
            <li key={index} className="log-item">
              <div>
                <p><strong>Date:</strong> {log.date}</p>
                <p><strong>Ministered To:</strong> {log.ministeredTo}</p>
                <p><strong>Items Donated:</strong> {log.itemsDonated || 'None'}</p>
                <p><strong>Hours:</strong> {log.hours}</p>
              </div>
              <div >
                <button onClick={() => handleEdit(log, index)}>Edit</button>
                <button className="delete" onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
        
        </>
      )}
     
    </div>
  );
}

export default Worklog;