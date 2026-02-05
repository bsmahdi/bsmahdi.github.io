import React, { useState } from 'react';
import SectionWrapper from '../Layout/SectionWrapper';
import './Resume.css';

import resumeData from '../../data/resume.json';

const Resume = () => {
    const [showAllExperience, setShowAllExperience] = useState(false);
    const [showAllLeadership, setShowAllLeadership] = useState(false);

    const visibleExperience = showAllExperience ? resumeData.experience : resumeData.experience.slice(0, 3);
    const visibleLeadership = showAllLeadership ? resumeData.leadership : resumeData.leadership.slice(0, 1);

    return (
        <SectionWrapper id="resume" className="resume-section">

            <h2 className="section-title">Experience & <span className="text-accent">Education</span></h2>

            <div className="resume-grid">
                {/* Experience Column */}
                <div className="resume-column">
                    <h3><i className="las la-briefcase"></i> Work Experience</h3>

                    {visibleExperience.map((item) => (
                        <div key={item.id} className="resume-item">
                            <span className="date">{item.date}</span>
                            <h4>{item.title}</h4>
                            <span className="location">{item.company}, {item.location}</span>
                            {item.description && (
                                Array.isArray(item.description) ? (
                                    <ul className="resume-description-list">
                                        {item.description.map((desc, index) => (
                                            <li key={index}>{desc}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="resume-description">{item.description}</p>
                                )
                            )}
                        </div>
                    ))}

                    {resumeData.experience.length > 3 && (
                        <button
                            className="show-more-btn"
                            onClick={() => setShowAllExperience(!showAllExperience)}
                        >
                            {showAllExperience ? 'Show Less' : 'Show More'}
                            <i className={`las ${showAllExperience ? 'la-angle-up' : 'la-angle-down'}`}></i>
                        </button>
                    )}
                </div>

                {/* Education & Leadership Column */}
                <div className="resume-column">
                    <h3><i className="las la-university"></i> Education</h3>
                    {resumeData.education.map((item) => (
                        <div key={item.id} className="resume-item">
                            <span className="date">{item.date}</span>
                            <h4>{item.title}</h4>
                            <span className="location">{item.institution}</span>
                            {item.description && (
                                <p>{item.description}</p>
                            )}
                        </div>
                    ))}

                    <h3 style={{ marginTop: '40px' }}><i className="las la-star"></i> Leadership</h3>
                    {visibleLeadership.map((item) => (
                        <div key={item.id} className="resume-item">
                            <span className="date">{item.date}</span>
                            <h4>{item.title}</h4>
                            <span className="location">{item.organization}</span>
                            {item.description && (
                                Array.isArray(item.description) ? (
                                    <ul className="resume-description-list">
                                        {item.description.map((desc, index) => (
                                            <li key={index}>{desc}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="resume-description">{item.description}</p>
                                )
                            )}
                        </div>
                    ))}

                    {resumeData.leadership.length > 1 && (
                        <button
                            className="show-more-btn"
                            onClick={() => setShowAllLeadership(!showAllLeadership)}
                        >
                            {showAllLeadership ? 'Show Less' : 'Show More'}
                            <i className={`las ${showAllLeadership ? 'la-angle-up' : 'la-angle-down'}`}></i>
                        </button>
                    )}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Resume;
