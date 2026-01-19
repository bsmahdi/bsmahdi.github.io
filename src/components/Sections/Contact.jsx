import React from 'react';
import SectionWrapper from '../Layout/SectionWrapper';
import './Contact.css';

const Contact = () => {
    return (
        <SectionWrapper id="contact" className="contact-section">

            <h2 className="section-title">Let's <span className="text-accent">Connect!</span></h2>

            <div className="contact-container">
                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" placeholder="Your Email" required />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea placeholder="Write your message here..." rows="5" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message <i className="las la-paper-plane"></i></button>
                </form>

                <div className="contact-info">
                    <p className="contact-text">
                        I'm always open to discussing <strong>DevOps</strong> projects, new opportunities,
                        or partnerships.
                    </p>

                    <div className="info-list">
                        <div className="info-row">
                            <div className="icon"><i className="las la-map-marker"></i></div>
                            <div>
                                <span>Location</span>
                                <h4>Tunisia</h4>
                            </div>
                        </div>

                        <div className="info-row">
                            <div className="icon"><i className="las la-phone"></i></div>
                            <div>
                                <span>Phone</span>
                                <h4>+216 95 996 447</h4>
                            </div>
                        </div>

                        <div className="info-row">
                            <div className="icon"><i className="las la-envelope"></i></div>
                            <div>
                                <span>Email</span>
                                <h4>mahdi@devaura.pro</h4>
                            </div>
                        </div>
                    </div>

                    <div className="social-links">
                        <a href="https://linkedin.com/in/benslimamahdi" target="_blank" rel="noreferrer" className="social-btn">
                            <i className="lab la-linkedin-in"></i>
                        </a>
                        <a href="mailto:mahdi@devaura.pro" className="social-btn">
                            <i className="las la-envelope"></i>
                        </a>
                        {/* Example GitHub or other link */}
                        <a href="https://github.com/benslimamahdi" target="_blank" rel="noreferrer" className="social-btn">
                            <i className="lab la-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
