import React from 'react';

const StrengthIndicator = ({ strength }) => {
    if (!strength) return null;

    return (
        <div>
            <h2>Password Strength</h2>
            {strength.is_common && <p className="warning">This is a common password. Please use a different one!</p>}
            <ul>
                <li className={strength.strength.length ? 'strong' : 'weak'}>Minimum 8 characters</li>
                <li className={strength.strength.uppercase ? 'strong' : 'weak'}>At least one uppercase letter</li>
                <li className={strength.strength.lowercase ? 'strong' : 'weak'}>At least one lowercase letter</li>
                <li className={strength.strength.numbers ? 'strong' : 'weak'}>At least one number</li>
                <li className={strength.strength.special ? 'strong' : 'weak'}>At least one special character</li>
            </ul>
        </div>
    );
};

export default StrengthIndicator;
