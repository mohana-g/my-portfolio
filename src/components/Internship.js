import React from 'react';
import '../styles/Internship.css';

const Internship = () => {
  return (
    <section id="internship">
      <div className="internship-container">
        <div className="company-logo">
          <img src={require('../assets/images/hirotec-logo.png')} alt="HIROTEC India Logo" />
        </div>
        <h2>Internship Experience</h2>
        <p className="position">Web Developer Intern at HIROTEC India Private Limited</p>
        <p className="duration">Duration: <span className="duration-dates">June 2023 - October 2023</span></p>
        <p className="work-description">
        Interned with the Voice-based AI Automation team, where I developed a web application integrating voice recognition to optimize inventory management. Successfully completed the project, gaining hands-on experience in full-stack development, voice-based automation, and modern web technologies. 
        </p>
      </div>
    </section>
  );
};

export default Internship;
