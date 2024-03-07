import React, { useState } from 'react';
import './styles.css';

function LoginPage({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Attempting login...');
        if (username === 'naserian' && password === '1234') {
            onLogin(username);
            window.location.href = '/home'; // Redirect to '/home'
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div className="container">
            <h2>Login Page</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;
