import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="background-elements">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      <div className="grid-overlay"></div>

      <div className="decorative-dots"></div>

      <div className="floating-menu">
        <Link to="/Home">
  <div className="tool-menu">
    <i className="fas fa-home"></i>
  </div>
  <span className="tooltip">Home</span>
</Link>

        <Link to="/about">
          <div className="tool-menu">
            <i className="fas fa-user"></i>
          </div>
          <span className="tooltip">About</span>
        </Link>

        <Link to="/portfolio">
          <div className="tool-menu">
            <i className="fas fa-briefcase"></i>
          </div>
          <span className="tooltip">Portfolio</span>
        </Link>

        <Link  to="/contact">
          <div className="tool-menu">
            <i className="fas fa-envelope"></i>
          </div>
          <span className="tooltip">Contact</span>
        </Link>
      </div>
    </>
  )
}

export default Navbar