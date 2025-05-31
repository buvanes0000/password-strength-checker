import React, { useState } from 'react';
import Lottie from 'lottie-react';
import PasswordInput from './components/PasswordInput';
import StrengthIndicator from './components/StrengthIndicator';
import animationData from './assets/password_strength.json'; // <-- Your animation file
import './App.css';

const App = () => {
    const [strength, setStrength] = useState(null);

    return (
        <div className="container">
            <h1>Password Strength Checker</h1>
            <div className="animation-wrapper">
                <Lottie animationData={animationData} loop={true} />
            </div>
            <PasswordInput onCheckStrength={setStrength} />
            <StrengthIndicator strength={strength} />
        </div>
    );
};

export default App;


