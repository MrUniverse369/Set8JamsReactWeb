import React, { useState } from 'react';
import './App.css';

function Nav() {
  // State to track if the mobile menu is open or not
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navBarContainer">
      <div className="container-fluid justify-content-center">
        {/* Hamburger icon for mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

          {/*if isOpen is true  class name will be set to navemenue and active else if is open is not true it will be set to navmenue and  ''*/}
        {/* Menu that will be shown/hidden based on isOpen */}
        <div className={`navMenu ${isOpen ? 'active' : ''}`}>
          <ul className="navbarNav">
            <li className="navItem">
              <a className="navLink" href="#Hnl">Home</a>
            </li>
            <li className="navItem">
              <a className="navLink" href="#Hnl">Harveysninelives</a>
            </li>
            <li className="navItem">
              <a className="navLink" href="#TrueNature">True Nature</a>
            </li>
            <li className="navItem">
              <a className="navLink" href="#GalacticCrusade">Galactic Crusade</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
