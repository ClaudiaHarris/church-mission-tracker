import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import LoginPage from './pages/LoginPage';
import MainMenu from './pages/MainMenu';
import UserInfo from './pages/UserInfo';
import Worklog from './pages/Worklog';
import NewLog from './pages/NewLog';
import About from './pages/About';

function App() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage setUser={setUser} />} />
        <Route path="/app" element={<Layout user={user} setUser={setUser} />}>
          <Route index element={<MainMenu user={user} />} />
          <Route path="userinfo" element={<UserInfo user={user} setUser={setUser} />} />
          <Route path="worklog" element={<Worklog logs={logs} setLogs={setLogs} user={user} setUser={setUser} />} />
          <Route path="newlog" element={<NewLog setLogs={setLogs} logs={logs} />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;