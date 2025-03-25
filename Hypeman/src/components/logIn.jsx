import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { Link } from 'react-router-dom';

function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        const auth = getAuth();
        const db = getDatabase();

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            await set(ref(db, 'users/' + user.uid), {
                email: user.email,
                lastLogin: new Date().toISOString(),
            });
            console.log('User logged in and data stored in database');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <input
                        className="input-field"
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        className="input-field"
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button className="submit-button" type="submit">Login</button>
                </form>
                {error && <p>{error}</p>}
                <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                <Link to="/">Home</Link>
            </div>
        </div>
    );
}

export default LogIn;