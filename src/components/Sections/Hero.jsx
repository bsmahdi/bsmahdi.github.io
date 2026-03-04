import React from 'react';
import SectionWrapper from '../Layout/SectionWrapper';
import Technologies from './Technologies';
import './Hero.css';

const Hero = () => {
    return (
        <SectionWrapper id="hero" className="hero-section">
            <div className="hero-content">
                <h1 className="title">
                    Building <span className="text-accent">Resilient</span>,<br />
                    Cloud-Native Systems
                </h1>
                <p className="description">
                    I help organizations scale confidently by designing high-availability infrastructure and automating complex deployment pipelines.
                    <br /><br />
                </p>
                <div className="hero-actions">
                    <a href="#portfolio" className="btn btn-primary">My Projects</a>
                    <a href="/Mahdi Ben Slima Resume English Version.pdf" download className="btn btn-outline">Download Resume <i className="las la-download"></i></a>
                </div>

                <div className="hero-tech-wrapper">
                    <Technologies />
                </div>
            </div>

            <div className="hero-image">
                {/*  Using the image moved to public folder */}
                <div className="image-container">
                    <a href="https://www.linkedin.com/in/mahdibs" target="_blank" rel="noreferrer">
                        <img src="/Personal photo.png" alt="Mahdi Ben Slima" />
                    </a>
                </div>
                <div className="circle-text">
                    <svg viewBox="0 0 200 200">
                        <defs>
                            <path id="textPath" d="M 100, 100 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
                        </defs>
                        <text>
                            <textPath xlinkHref="#textPath">DevOps • SRE • Cloud • Security •</textPath>
                        </text>
                    </svg>
                </div>
            </div>

            <div className="scroll-down">
                <p>Scroll Down</p>
                <i className="las la-arrow-down"></i>
            </div>
        </SectionWrapper>
    );
};

export default Hero;
