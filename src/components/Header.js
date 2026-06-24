import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/images/logo.png.jpeg';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="ksar-header">
      <div className="ksar-container">
        <div className="header-wrapper">

          {/* Logo - Link to Home */}
          <Link to="/" className="header-logo" onClick={closeMenu}>
            <img
              src={logo}
              alt="KSAR Farms Logo"
              style={{ height: '60px', width: 'auto' }}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
             <span className="logo-text">KSAR Farm</span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>

          {/* Navigation Menu */}
          <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
            <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
            <Link to="/bhimashankar" className="nav-link" onClick={closeMenu}>Bhimashankar</Link>
            <Link to="/sahyadri" className="nav-link" onClick={closeMenu}>Sahyadri Ranges</Link>
            <Link to="/sidhagad" className="nav-link" onClick={closeMenu}>Sidhagad Fort</Link>
            <Link to="/waterfalls" className="nav-link" onClick={closeMenu}>Waterfalls</Link>
            <a href="tel:+919867610525" className="nav-link nav-cta" onClick={closeMenu}>
              📞 Book Now
            </a>
          </nav>

        </div>
      </div>
    </header>
  );
}

export default Header;