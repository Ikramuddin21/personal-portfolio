import React, { useState } from "react";
import logo from "../../images/logo.png";
import menuIcon from "../../images/menu-icon.svg";
import closeIcon from "../../images/close-icon.svg";
import "./Header.css";

const Header = () => {
  const [stickyStyle, setStickyStyle] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // handle scrollY and show header
  const handleStickyHeader = () => {
    if (window.scrollY > 20) {
      setStickyStyle(true);
    } else {
      setStickyStyle(false);
    }
  };

  window.addEventListener("scroll", handleStickyHeader);

  return (
    <div className={`${menuOpen ? "header" : ""} ${stickyStyle ? "sticky" : ""}`}>
      <nav className="nav">
        <div className="logo-area">
          <a href="#home">
            <img onClick={() => setMenuOpen(false)} src={logo} alt="" />
          </a>
        </div>
        <ul className={`header-lists ${menuOpen ? "show-lists" : ""}`}>
          <li>
            <a onClick={() => setMenuOpen(false)} href="#home">Home</a>
          </li>
          <li>
            <a onClick={() => setMenuOpen(false)} href="#about">About</a>
          </li>
          <li>
            <a onClick={() => setMenuOpen(false)} href="#skills">Skills</a>
          </li>
          <li>
            <a onClick={() => setMenuOpen(false)} href="#projects">Projects</a>
          </li>
          <li>
            <a onClick={() => setMenuOpen(false)} href="#contact">Contact</a>
          </li>
        </ul>
        {/* mobile menu */}
        <div className="mobile-menu">
          {
            menuOpen ?
              <img onClick={() => setMenuOpen(false)} className="close-icon" src={closeIcon} alt="" /> :
              <img onClick={() => setMenuOpen(true)} className="menu-icon" src={menuIcon} alt="" />
          }
        </div>
      </nav>
    </div>
  );
};

export default Header;
