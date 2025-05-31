import React, { useState } from 'react';
import axios from 'axios';

const PasswordInput = ({ onCheckStrength }) => {
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!password) return;

        setLoading(true);
        setError(''); // Reset error message

        try {
            const response = await axios.post('https://password-checker-api.onrender.com', { password });
            onCheckStrength(response.data);
        } catch (error) {
            setError('Error checking password strength.');
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" disabled={loading}>
                {loading ? 'Checking...' : 'Check Strength'}
            </button>
            {error && <p className="error">{error}</p>}
        </form>
    );
};

export default PasswordInput;

