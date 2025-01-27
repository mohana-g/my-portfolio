import React, { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);  // Toggle the menu visibility
  };

  const closeMenu = () => {
    setMenuOpen(false);  // Close the menu when a link is clicked
  };

  return (
    <header id="navbar">
      <nav>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#internship" onClick={closeMenu}>Internship</a></li>
          <li><a href="#certifications" onClick={closeMenu}>Certifications</a></li>
          <li><a href="#education" onClick={closeMenu}>Education</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
