import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Link to="/">
              <img src="/logo.jpeg" alt="TechNiks Logo" className="logo-img" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
              <h2 style={{ display: 'none', color: 'var(--primary-color)', margin: 0 }}>TechNiks</h2>
            </Link>
            <p style={{ marginTop: '15px', maxWidth: '300px', color: '#aaa' }}>
              Techniks Limited — Connecting People. Protecting Businesses. Powering the Future.
            </p>
          </div>
          <div className="footer-links-container">
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '15px' }}>Quick Links</h3>
            <ul className="footer-links" style={{ flexDirection: 'column', gap: '10px' }}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '15px' }}>Contact</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', color: '#aaa' }}>
              <li>info@techniks.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} TechNiks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
