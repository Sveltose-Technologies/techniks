import React from 'react';
import { ArrowRight, Server, Shield, Network } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section style={{ backgroundColor: 'var(--bg-dark)', color: 'var(--text-light)', padding: '120px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', color: 'var(--primary-color)' }}>
            Empowering Homes and Businesses with Secure, High-Speed Technology
          </h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 40px', color: '#ccc' }}>
            At Techniks Limited, we believe that modern technology should be fast, reliable, secure, and accessible.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <Link to="/contact" className="btn">Get Started</Link>
            <Link to="/about" className="btn btn-outline">Learn More</Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--secondary-color)', marginBottom: '30px', textAlign: 'center' }}>About Techniks Limited</h2>
          
          <div style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p>
              Established in 2015, we are a New Zealand-based technology and telecommunications company specialising in high-speed internet services, telecommunications work, Wi-Fi optimisation, networking solutions, cybersecurity, CCTV security systems, and professional IT support for residential, commercial, and business customers.
            </p>
            <p>
              In today's digital world, connectivity alone is not enough. Homes and businesses require reliable communication infrastructure, secure networks, and advanced protection against evolving cyber threats. Cyber risks such as hacking, phishing, ransomware, data theft, and network breaches are increasing every day, making cybersecurity an essential part of modern technology solutions.
            </p>
            <p>
              At Techniks Limited, we combine advanced internet connectivity, professional telecommunication services, secure networking, and industry-standard cybersecurity practices to ensure our customers stay connected, protected, and productive.
            </p>
            <p>
              Our telecommunications expertise includes the installation, maintenance, and support of modern communication infrastructure, helping customers achieve reliable voice, data, and network connectivity. From structured cabling and network installations to communication system upgrades and fault troubleshooting, our team delivers professional solutions designed to meet the demands of today's connected environment.
            </p>
            <p>
              Whether you need a faster internet connection, improved Wi-Fi coverage, secure business networking, telecommunications infrastructure, CCTV security solutions, or protection against online threats, Techniks Limited delivers complete technology solutions built for the future.
            </p>
            <p style={{ fontWeight: '500', color: 'var(--secondary-color)', fontSize: '1.2rem', textAlign: 'center', marginTop: '20px' }}>
              We are committed to providing quality workmanship, innovative solutions, and dependable customer service to help homes and businesses operate with confidence in an increasingly digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section style={{ padding: '60px 0', backgroundColor: 'var(--primary-color)', color: 'var(--secondary-color)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>
            Techniks Limited — Connecting People. Securing Technology. Powering the Future.
          </h2>
        </div>
      </section>

      {/* Looking Towards the Future Section */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-light)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--secondary-color)', marginBottom: '30px' }}>Looking Towards the Future</h2>
          <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8', marginBottom: '20px' }}>
            Technology continues to evolve, and so do the challenges that come with it. Techniks Limited remains committed to helping customers adopt faster internet, smarter networks, stronger cybersecurity, and reliable digital solutions.
          </p>
          <p style={{ fontSize: '1.2rem', color: 'var(--secondary-color)', fontWeight: '600' }}>
            Our goal is not only to provide technology services but to become a trusted long-term technology partner for our customers.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
