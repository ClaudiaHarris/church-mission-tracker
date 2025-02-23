import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ user, setUser, isMenuOpen, setIsMenuOpen }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/');
    setIsMenuOpen(false);
  };

  return (
    <nav className={isMenuOpen ? 'open' : ''}>
     
      <ul>
        {user ? ( 
          <>
            <li><Link to="/app" onClick={() => setIsMenuOpen(false)}>Main Menu</Link></li>
            <li><Link to="/app/userinfo" onClick={() => setIsMenuOpen(false)}>User Info</Link></li>
            <li><Link to="/app/worklog" onClick={() => setIsMenuOpen(false)}>Work Log</Link></li>
            <li><Link to="/app/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><button id='logout' onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Login</Link></li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;