import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project-tile">
        <h3>Intelligent IMS</h3>
        <p>Web application for managing car inventory using voice commands.</p>
        <p><strong>Tech:</strong> JS, Firebase</p>
        <a href="https://github.com/mohana-g/Intelligent-IMS" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
      </div>
      <div className="project-tile">
        <h3>Dazzle Beauty Makeover</h3>
        <p>An Appointment booking web application for beauty parlours.</p>
        <p><strong>Tech:</strong> HTML, CSS, PHP, MySQL</p>
        <a href="https://github.com/mohana-g/Dazzle-Beauty-Makeover-BPMS" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
      </div>
    </section>
  );
};

export default Projects;
