import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="imgs/file.png" alt="Logo" />
      </div>
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink to="/" className="navbar-link">About Me</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/projects" className="navbar-link">Projects</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/experience" className="navbar-link">Experience</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
