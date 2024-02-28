import React, { useState } from 'react';
import './styles.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    // Add authentication logic here
    // For simplicity, let's assume any non-empty username and password is considered valid
    if (username && password) {
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="App">
      {isLoggedIn ? <Dashboard /> : <Login onLogin={handleLogin} />}
    </div>
  );
}

export default App;
