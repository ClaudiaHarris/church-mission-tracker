import React from 'react';
import { Link } from 'react-router-dom';

function MainMenu({ user }) {
  if (!user) return null;

  return (
    <div className="container">
      <h2>Welcome, {user.firstname}!</h2>
      <p className="bible-verse">
        "Therefore, as God’s chosen people, holy and dearly loved, 
        clothe yourselves with compassion, kindness, humility, 
        gentleness and patience." — Colossians 3:12 (NIV)
      </p>
      <Link to="/app/userinfo" className="menu-button">Edit Info</Link>
      <Link to="/app/about" className="menu-button">About</Link>
    </div>
  );
}

export default MainMenu;