import React, { useState, useEffect } from 'react';
import '../CSS/hamburger_menu.css'; // Import the CSS file for styling
import Navbar from './Navbar';
import Image from "./Image";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the threshold as needed
    };

    handleResize(); // Check initial screen size
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isMobile && (
        <>
        <div>
        <Image src="banner_trans.png" alt="A banner displaying Trash Breaux" width="95%" />
        </div>
        <div className={`hamburger-menu ${isMobile ? 'mobile' : ''}`} height="100px">
          <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`menu-items ${isOpen ? 'open' : ''}`}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          </div>
        </>
      )}
      {!isMobile && (
       <Navbar />
      )}</>
    
  );
}

export default HamburgerMenu;
