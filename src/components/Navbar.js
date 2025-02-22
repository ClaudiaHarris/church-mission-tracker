import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  if (!user) return null;

  return (
    <nav>
      <ul>
        <li><Link to="/app">Main Menu</Link></li>
        <li><Link to="/app/userinfo">User Info</Link></li>
        <li><Link to="/app/worklog">Work Log</Link></li>
        <li><Link to="/app/about">About</Link></li>
        <li><button onClick={handleLogout}>Logout</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;