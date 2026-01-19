import React from 'react';
import './Technologies.css';

const Technologies = () => {
    const techs = [
        { name: 'Terraform', icon: 'devicon-terraform-plain' },
        { name: 'Ansible', icon: 'devicon-ansible-plain' },
        { name: 'Kubernetes', icon: 'devicon-kubernetes-plain' },
        { name: 'Docker', icon: 'devicon-docker-plain' },
        { name: 'Helm', icon: 'devicon-helm-original' },
        { name: 'ArgoCD', icon: 'devicon-argocd-plain' },
        { name: 'Kustomize', icon: 'las la-cubes' }, // Using LineAwesome as devicon might vary
        { name: 'pfSense', icon: 'las la-shield-alt' },
        { name: 'Prometheus', icon: 'devicon-prometheus-original' },
        { name: 'Grafana', icon: 'devicon-grafana-plain' },
        { name: 'Jenkins', icon: 'devicon-jenkins-plain' },
        { name: 'GitLab', icon: 'devicon-gitlab-plain' },
        { name: 'Python', icon: 'devicon-python-plain' },
        { name: 'Linux', icon: 'devicon-linux-plain' }
    ];

    // Duplicate the array to ensure seamless scrolling
    const scrollingTechs = [...techs, ...techs];

    return (
        <section className="technologies-section">


            <div className="marquee-container">
                <div className="marquee-content">
                    {scrollingTechs.map((tech, index) => (
                        <div key={index} className="tech-item">
                            <i className={`${tech.icon} tech-icon`}></i>
                            <span className="tech-name">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technologies;
