import React, { useState } from 'react';
import PasswordInput from './components/PasswordInput';
import StrengthIndicator from './components/StrengthIndicator';
import './App.css';

const App = () => {
    const [strength, setStrength] = useState(null);

    return (
        <div className="container">
            <h1>Password Strength Checker</h1>
            <PasswordInput onCheckStrength={setStrength} />
            <StrengthIndicator strength={strength} />
        </div>
    );
};

export default App;

