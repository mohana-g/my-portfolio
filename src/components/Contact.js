import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-section-header">
        <h2>Let's work together...</h2>
      </div>
      <div className="contact-links">
        <a href="https://github.com/mohana-g" target="_blank" rel="noreferrer noopener" className="btn contact-details">
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href="mailto:contact.mohanag@example.com" className="btn contact-details">
          <i className="fas fa-at"></i> Send a mail
        </a>
        <a href="tel:+1234567890" className="btn contact-details">
          <i className="fas fa-mobile-alt"></i> Call me
        </a>
        <a href="https://www.instagram.com/mons_gallary/" target="_blank" rel="noreferrer noopener" className="btn contact-details">
          <i className="fab fa-instagram"></i> Instagram
        </a>
      </div>
    </section>
  );
};

export default Contact;
