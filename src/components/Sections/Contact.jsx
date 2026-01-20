import React, { useState } from 'react';
import SectionWrapper from '../Layout/SectionWrapper';
import './Contact.css';

const Contact = () => {
    const [status, setStatus] = useState(""); // "", "SUBMITTING", "SUCCESS", "ERROR"

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);

        setStatus("SUBMITTING");

        try {
            const response = await fetch("https://formspree.io/f/xpqqrjqj", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus("SUCCESS");
                form.reset();
            } else {
                setStatus("ERROR");
            }
        } catch (error) {
            setStatus("ERROR");
        }
    };

    return (
        <SectionWrapper id="contact" className="contact-section">

            <h2 className="section-title">Let's build something <span className="text-accent"> amazing together!</span></h2>

            <div className="contact-container">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" name="name" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" name="email" placeholder="Your Email" required />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea name="message" placeholder="Write your message here..." rows="5" required></textarea>
                    </div>

                    {status === "SUCCESS" && (
                        <p className="success-message" style={{ color: 'var(--text-accent)', marginBottom: '1rem' }}>
                            <i className="las la-check-circle"></i> Message sent successfully! I'll get back to you soon.
                        </p>
                    )}

                    {status === "ERROR" && (
                        <p className="error-message" style={{ color: '#ff4444', marginBottom: '1rem' }}>
                            <i className="las la-exclamation-circle"></i> Oops! There was a problem sending your message.
                        </p>
                    )}

                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={status === "SUBMITTING"}
                    >
                        {status === "SUBMITTING" ? "Sending..." : "Send Message"}
                        {status !== "SUBMITTING" && <i className="las la-paper-plane"></i>}
                    </button>
                </form>

                <div className="contact-info">
                    <p className="contact-text">
                        I'm always open to discussing <strong>DevOps , Cloud and AI</strong> projects, new opportunities,
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
