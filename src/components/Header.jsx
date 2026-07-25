import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className="header animate-fade-in">
      <div className="container" style={{ position: 'relative' }}>
        <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo.png" alt="TechNiks Logo" className="logo-img" style={{ height: '70px', objectFit: 'contain' }} onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
          <h2 style={{ display: 'none', color: 'var(--primary-color)', margin: 0 }}>TechNiks</h2>
        </Link>
        
        <button 
          className="menu-icon" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav>
          <ul className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/services">What We Do</NavLink></li>
            <li><NavLink to="/why-choose-us">Why Choose Techniks</NavLink></li>
            <li><NavLink to="/contact" className="btn" style={{ padding: '8px 16px', color: 'var(--secondary-color)' }}>Contact Us</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

