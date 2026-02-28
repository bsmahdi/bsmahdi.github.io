import React, { useState } from 'react';
import SectionWrapper from '../Layout/SectionWrapper';
import './Portfolio.css';

// Import projects data from JSON
import projectsData from '../../data/projects.json';

const ProjectCard = ({ project }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const handleLinkClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div className={`portfolio-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
            <div className="card-inner">
                {/* Front of the Card */}
                <div className="card-front">
                    <div className="card-image">
                        <img src={project.image} alt={project.title} />
                        {project.isRecent && <span className="badge-recent">Recent</span>}
                        <div className="card-overlay">
                            <span className="flip-instruction">Click to Flip <i className="las la-sync"></i></span>
                        </div>
                    </div>
                    <div className="card-content">
                        <span className={`card-category category-${project.category.toLowerCase()}`}>{project.category}</span>
                        <h3>{project.title}</h3>



                        <div className="tech-tags">
                            {project.techStack.map((tech, index) => (
                                <span key={index}>{tech}</span>
                            ))}
                        </div>

                        {(project.githubLink || project.demoLink) && (
                            <div className="card-links">
                                {project.githubLink && (
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="card-link-btn github"
                                        onClick={handleLinkClick}
                                    >
                                        <i className="lab la-github"></i> GitHub
                                    </a>
                                )}
                                {project.demoLink && (
                                    <a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="card-link-btn demo"
                                        onClick={handleLinkClick}
                                    >
                                        <i className="las la-external-link-alt"></i> Demo
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {/* Back of the Card */}
                <div className="card-back">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    {project.details && (
                        <p className="card-details">{project.details}</p>
                    )}
                    {project.keyAchievements && (
                        <ul className="key-achievements">
                            {project.keyAchievements.map((item, index) => (
                                <li key={index}><i className="las la-check-circle"></i> {item}</li>
                            ))}
                        </ul>
                    )}
                    <button className="flip-back-btn">
                        <i className="las la-undo"></i> Flip Back
                    </button>
                </div>
            </div>
        </div>
    );
};

const Portfolio = () => {
    const [filter, setFilter] = useState('All');
    const [visibleCount, setVisibleCount] = useState(6);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProjects = projectsData.filter(project => {
        const matchesCategory = filter === 'All' || project.category === filter;
        const searchLower = searchQuery.toLowerCase();
        const matchesSearch = project.title.toLowerCase().includes(searchLower) ||
            project.description.toLowerCase().includes(searchLower) ||
            project.techStack.some(tech => tech.toLowerCase().includes(searchLower));

        return matchesCategory && matchesSearch;
    });

    const visibleProjects = filteredProjects.slice(0, visibleCount);

    const handleShowMore = () => {
        setVisibleCount(prevCount => prevCount + 6);
    };

    return (
        <SectionWrapper id="portfolio" className="portfolio-section">

            <h2 className="section-title">My <span className="text-accent">Projects</span></h2>
            <p className="portfolio-subtitle-note">
                <i className="las la-info-circle"></i> Projects without GitHub links aren't open source, however please feel free to request a demo via the contacts below.
            </p>

            <div className="portfolio-controls">
                <div className="search-container">
                    <i className="las la-search search-icon"></i>
                    <input
                        type="text"
                        placeholder="Search projects..."
                        value={searchQuery}
                        onChange={(e) => { setSearchQuery(e.target.value); setVisibleCount(6); }}
                        className="search-input"
                    />
                </div>

                <div className="portfolio-filter">
                    {['All', 'DevOps', 'AI', 'Dev'].map(category => (
                        <button
                            key={category}
                            className={`filter-btn ${filter === category ? 'active' : ''}`}
                            onClick={() => { setFilter(category); setVisibleCount(6); }}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div className="portfolio-grid">
                {visibleProjects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>



            {
                visibleCount < filteredProjects.length && (
                    <div className="show-more-container">
                        <button className="btn btn-outline" onClick={handleShowMore}>
                            See More <i className="las la-angle-down"></i>
                        </button>
                    </div>
                )
            }
        </SectionWrapper >
    );
};

export default Portfolio;
