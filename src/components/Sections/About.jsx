import React from 'react';
import SectionWrapper from '../Layout/SectionWrapper';
import './About.css';

const About = () => {
    return (
        <SectionWrapper id="about" className="about-section">

            <h2 className="section-title">Biography & <span className="text-accent">Skills</span></h2>

            <div className="about-content">
                <div className="bio-card">
                    <h3>Who am I?</h3>
                    <p>
                        I am a <strong>DevOps & Site Reliability Engineer (SRE)</strong> based in Tunisia.
                        I specialize in designing, scaling, and optimizing highly available, multi-cloud infrastructure.
                    </p>
                    <p>
                        With a strong foundation in <strong>AWS, GCP, Azure, and Kubernetes</strong>, I help organizations implement
                        robust CI/CD automation, Infrastructure as Code (Terraform), and proactive monitoring practices (Prometheus, Grafana)
                        to ensure operational efficiency and cost reduction.
                    </p>

                    <div className="info-grid">
                        <div className="info-item">
                            <span className="label">Phone</span>
                            <span className="value">+216 95 996 447</span>
                        </div>
                        <div className="info-item">
                            <span className="label">Email</span>
                            <span className="value">mahdi@devaura.pro</span>
                        </div>
                        <div className="info-item">
                            <span className="label">Languages</span>
                            <span className="value">English (C2), French (C1), Arabic (Native), German (A2)</span>
                        </div>
                    </div>
                </div>

                <div className="skills-card">
                    <h3>Technical Stack</h3>
                    <div className="skills-grid">
                        <div className="skill-item"><i className="lab la-aws"></i> AWS</div>
                        <div className="skill-item"><i className="lab la-google"></i> GCP</div>
                        <div className="skill-item"><i className="lab la-microsoft"></i> Azure</div>
                        <div className="skill-item"><i className="las la-dharmachakra"></i> Kubernetes</div>
                        <div className="skill-item"><i className="las la-code"></i> Terraform</div>
                        <div className="skill-item"><i className="lab la-docker"></i> Docker</div>
                        <div className="skill-item"><i className="las la-infinity"></i> CI/CD (GitLab, Jenkins)</div>
                        <div className="skill-item"><i className="las la-chart-area"></i> Prometheus/Grafana</div>
                        <div className="skill-item"><i className="lab la-python"></i> Python</div>
                        <div className="skill-item"><i className="lab la-linux"></i> Linux</div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default About;
