import { Link, NavLink } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  const services = [
    { name: "Structured Cabling & Network Infrastructure", id: "structured-cabling" },
    { name: "Fibre & Broadband Connectivity Support", id: "fibre-broadband" },
    { name: "Voice & Communication Systems", id: "voice-communication" },
    { name: "Network Installation & Configuration", id: "network-installation" },
    { name: "IT Support & Security Services", id: "it-support" },
    { name: "Telecommunications Maintenance & Support", id: "maintenance-support" },
    { name: "Secure Telecommunications & Cybersecurity Integration", id: "cybersecurity-integration" }
  ];

  return (
    <header className="header animate-fade-in">
      <div className="container">
        <Link to="/" className="logo">
          <img src="/logo.jpeg" alt="TechNiks Logo" className="logo-img" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
          <h2 style={{ display: 'none', color: 'var(--primary-color)', margin: 0 }}>TechNiks</h2>
        </Link>
        <nav>
          <ul className="nav-links">
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li className="dropdown">
              <NavLink to="/services" className="dropdown-toggle">
                What We Do <ChevronDown size={16} />
              </NavLink>
              <ul className="dropdown-menu">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link to={`/services#${service.id}`}>{service.name}</Link>
                  </li>
                ))}
              </ul>
            </li>
            <li><NavLink to="/why-choose-us">Why Choose Techniks</NavLink></li>
            <li><NavLink to="/contact" className="btn" style={{ padding: '8px 16px', color: 'var(--secondary-color)' }}>Contact Us</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
