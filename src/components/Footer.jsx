// src/components/Footer.jsx
import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} buvanes. All rights reserved.</p>
            <div className="social-links">
                <a
                    href="https://github.com/buvanes0000"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <FaGithub className="icon" />
                </a>
                <a
                    href="https://linkedin.com/in/buvaneswaran-v-07013518b"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin className="icon" />
                </a>
                <a
                    href="https://buvanes0000.github.io/portfolio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Personal Website"
                >
                    <FaGlobe className="icon" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
