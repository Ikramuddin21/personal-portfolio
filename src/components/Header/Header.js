import React from "react";
import { Link } from "react-router-dom";
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo-area">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul className="header-lists">
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/skills">Skills</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
