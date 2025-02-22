import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage({ setUser }) {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleKeypadClick = (value) => {
    if (value === 'clear') {
      setPassword('');
    } else if (password.length < 4) {
      setPassword((prev) => prev + value);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === '1234') {
      alert('Login successful!');
      setUser({ username: 'Guest'}); // Default user
      navigate('/app');
    } else {
      alert('Invalid password. Please try again.');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="password"
          placeholder="Enter password with keypad"
          value={password}
          readOnly // Prevents keyboard input
          onKeyDown={(e) => e.preventDefault()} // Blocks keypresses
          onPaste={(e) => e.preventDefault()} // Blocks pasting
        />
        <div className="keypad">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
            <button
              key={num}
              type="button"
              className="keypad-button"
              onClick={() => handleKeypadClick(num.toString())}
            >
              {num}
            </button>
          ))}
          <button
            type="button"
            className="keypad-button clear"
            onClick={() => handleKeypadClick('clear')}
          >
            Clear
          </button>
          <button type="submit" className="keypad-button enter">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
}
//TODO: header and about page
export default LoginPage;