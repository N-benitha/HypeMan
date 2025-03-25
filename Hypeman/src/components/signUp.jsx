import React, { useState } from 'react';
import { getDatabase, ref, set } from 'firebase/database';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const db = getDatabase();
        const userRef = ref(db, 'users/' + formData.username);
        set(userRef, formData)
            .then(() => {
                console.log('Data saved successfully!');
            })
            .catch((error) => {
                console.error('Error saving data:', error);
            });
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        className="input-field"
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="User Name"
                        required
                    />
                    <input
                        className="input-field"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                    />
                    <input
                        className="input-field"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        required
                    />
                    <button className="submit-button" type="submit">Sign Up</button>
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <Link to="/">Home</Link>
            </div>
        </div>
    );
};

export default SignUp;