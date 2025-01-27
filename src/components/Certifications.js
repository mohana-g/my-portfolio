import React from 'react';
import '../styles/Certifications.css';  // ✅ Importing specific CSS

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <h2>Certifications</h2>
      <div className="certifications-cards">
        <div className="cert-card">
          <h3>Database Management System</h3>
          <p className="cert-provider">NPTEL</p>
        </div>
        <div className="cert-card">
          <h3>The Complete Web Developer in 2023: Zero to Mastery</h3>
          <p className="cert-provider">Udemy</p>
        </div>
        <div className="cert-card">
          <h3>UI/UX for Beginners</h3>
          <p className="cert-provider">Great Learning</p>
        </div>
        <div className="cert-card">
          <h3>The Intro to Graphic Design with Photoshop</h3>
          <p className="cert-provider">Great Learning</p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
