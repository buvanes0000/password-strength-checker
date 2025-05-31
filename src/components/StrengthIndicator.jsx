import React from 'react';
import 'animate.css';


const StrengthIndicator = ({ strength }) => {
    if (!strength) return null;

    // Helper function to return emoji based on condition
    const getEmoji = (isValid) => (isValid ? '✅' : '❌');

    return (
        <div>
            <h2>Password Strength</h2>
            {strength.is_common && (
                <p className="warning animate__animated  animate__heartBeat">
                    ❌ This is a common password. Please use a different one!
                </p>
            )}
            <ul className='animate__animated animate__rubberBand'>
                <li className={strength.strength.length ? 'strong' : 'weak'}>
                    {getEmoji(strength.strength.length)} Minimum 8 characters
                </li>
                <li className={strength.strength.uppercase ? 'strong' : 'weak'}>
                    {getEmoji(strength.strength.uppercase)} At least one uppercase letter
                </li>
                <li className={strength.strength.lowercase ? 'strong' : 'weak'}>
                    {getEmoji(strength.strength.lowercase)} At least one lowercase letter
                </li>
                <li className={strength.strength.numbers ? 'strong' : 'weak'}>
                    {getEmoji(strength.strength.numbers)} At least one number
                </li>
                <li className={strength.strength.special ? 'strong' : 'weak'}>
                    {getEmoji(strength.strength.special)} At least one special character
                </li>
            </ul>
        </div>
    );
};

export default StrengthIndicator;

