import React from "react";
import "../styles/Education.css"; // Ensure this CSS file is linked properly

const Education = () => {
  return (
    <section id="education">
      <h2>Education</h2>
      <div className="education-container">
        <div className="education-item">
          <h3>MSc Software Systems</h3>
          <p>PSG College of Arts & Science, Coimbatore</p>
          <span className="score">87.1%</span>
        </div>
        <div className="education-item">
          <h3>Higher Secondary</h3>
          <p>CRR Matric Hr Sec School, Coimbatore</p>
          <span className="score">74.2%</span>
        </div>
        <div className="education-item">
          <h3>SSLC</h3>
          <p>CRR Matric Hr Sec School, Coimbatore</p>
          <span className="score">90.4%</span>
        </div>
      </div>
    </section>
  );
};

export default Education;
