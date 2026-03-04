import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <a href="mailto:mahdi@devaura.pro" className="footer-link">
                        <i className="las la-envelope"></i>
                        <span>mahdi@devaura.pro</span>
                    </a>
                    <a href="https://www.linkedin.com/in/mahdibs" target="_blank" rel="noreferrer" className="footer-link">
                        <i className="lab la-linkedin-in"></i>
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://github.com/benslimamahdi" target="_blank" rel="noreferrer" className="footer-link">
                        <i className="lab la-github"></i>
                        <span>GitHub</span>
                    </a>
                </div>
                <p className="copyright">© {new Date().getFullYear()} Mahdi Benslima. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
