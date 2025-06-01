import React from 'react';
import './Header.css';
import logo from '../assets/img/logo.png'; // Adjust path if needed

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <img src={logo} alt="Logo" className="logo" />
                <h2>Password Strength Checker</h2>
            </div>
        </header>
    );
};

export default Header;
