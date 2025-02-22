import React from 'react';
import { Link } from 'react-router-dom';

function MainMenu({ user }) {
  if (!user) return null;

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <Link to="/app/userinfo" className="menu-button">Edit Info</Link>
      <Link to="/app/about" className="menu-button">About</Link>
    </div>
  );
}

export default MainMenu;