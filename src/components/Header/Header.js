import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import menuIcon from "../../images/menu-icon.svg";
import "./Header.css";

const Header = () => {
  const [stickyStyle, setStickyStyle] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // handle scrollY and show header
  const handleStickyHeader = () => {
    if (window.scrollY > 100) {
      setStickyStyle(true);
    } else {
      setStickyStyle(false);
    }
  };

  window.addEventListener("scroll", handleStickyHeader);

  // mobile menu item show
  useEffect(() => {
    window.addEventListener("mousedown", () => setMenuOpen(false));
  }, []);

  return (
    <div className={`${stickyStyle ? "sticky" : ""}`}>
      <nav className="nav">
        <div className="logo-area">
          <Link to="">
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul className={`header-lists ${menuOpen ? "show-lists" : ""}`}>
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="">About</Link>
          </li>
          <li>
            <Link to="">Skills</Link>
          </li>
          <li>
            <Link to="">Projects</Link>
          </li>
          <li>
            <Link to="">Contact</Link>
          </li>
        </ul>
        <img  onClick={() => setMenuOpen(true)} className="menu-icon" src={menuIcon} alt="" />
      </nav>
    </div>
  );
};

export default Header;
