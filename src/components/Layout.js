import React, {useState} from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ user, setUser }) {
  const location =useLocation();
  //mapping routes to page titles for dynamic naming
  const pathname = location.pathname.replace(/\/$/, ''); //to deal with trailing slashes so the switch works
  const [isMenuOpen, setIsMenuOpen] = useState(false); //toggle state for hamburge

  const getPageTitle = () => {
    
    switch (pathname) {
      case '/app':
        return 'Main Menu';
      case '/app/userinfo':
        return 'User Information';
      case '/app/worklog':
        return 'Work Log';
      case '/app/newlog':
        return 'New Log Entry';
      case '/app/about':
        return 'About';
      default:
        return 'Church Mission Tracker'; 
    }
  };

  return (
    
    <>
      <header>
        <h1>{getPageTitle()}</h1>

        <button
          className='hamburger'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label='Toggle menu'
          >☰</button> 

        <Navbar user={user} setUser={setUser} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
    
  );
}

export default Layout;