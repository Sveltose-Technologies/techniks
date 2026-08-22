import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { footerAPI } from '../api/endpoints';

const Footer = () => {
  const [footerData, setFooterData] = useState({
    description: '',
    email: '',
    phone: [],
    copyrightText: ``
  });

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        const result = await footerAPI.getFooterContent();
        if (result.success && result.data && result.data.length > 0) {
          const apiData = result.data[0];
          setFooterData(prevData => ({
            ...prevData,
            description: apiData.content || prevData.description,
            email: apiData.email || prevData.email,
            phone: apiData.phoneNumbers || prevData.phone,
            copyrightText: apiData.copyRight || prevData.copyrightText
          }));
        }
      } catch (error) {
        console.error("Error fetching footer details:", error);
      }
    };
    fetchFooterData();
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Link to="/">
              <img src="/logo.png" alt="TechNiks Logo" className="logo-img" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
              <h2 style={{ display: 'none', color: 'var(--primary-color)', margin: 0 }}>TechNiks</h2>
            </Link>
            <p style={{ marginTop: '15px', maxWidth: '300px', color: '#aaa' }}>
              {footerData.description}
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
              <li>{footerData.email}</li>
              <li>{footerData.phone && Array.isArray(footerData.phone) ? footerData.phone.join(', ') : footerData.phone}</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{footerData.copyrightText}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
