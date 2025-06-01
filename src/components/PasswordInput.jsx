import React, { useState } from 'react';
import axios from 'axios';

const PasswordInput = ({ onCheckStrength }) => {
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [isCommon, setIsCommon] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!password) return;

        setLoading(true);
        setError('');

        try {
            const response = await axios.post(
                'https://password-checker-api.onrender.com/api/check-password',
                { password },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            const { strength, is_common } = response.data;
            setIsCommon(is_common);
            onCheckStrength(response.data);  // still send full data to parent if needed
        } catch (error) {
            setError('Error checking password strength.');
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    const inputClassName = isCommon ? ' animate__animated  animate__hinge animate__delay-1s' : '';

    return (
        <form onSubmit={handleSubmit}>
    <input
        type="password"
        placeholder="Enter password"
        className={inputClassName}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
    />
    <button type="submit" disabled={loading}>
        {loading ? 'Checking...' : 'Check Strength'}
    </button>
    <button
        type="button"
        onClick={() => window.location.reload()}
        className="retry-button"
    >
        Retry
    </button>
    {error && <p className="error">{error}</p>}
</form>

      
    );
};

export default PasswordInput;


