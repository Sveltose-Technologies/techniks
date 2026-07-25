import React, { useState, useEffect } from 'react';
import { ArrowRight, Server, Shield, Network } from 'lucide-react';
import { Link } from 'react-router-dom';

import banner1 from '../assets/home_banner_1.webp';
import banner2 from '../assets/home_banner_2.webp';
import banner3 from '../assets/home_banner_3.webp';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [banner1, banner2, banner3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        height: '650px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-light)',
        textAlign: 'center',
        overflow: 'hidden'
      }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${slide})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: index === currentSlide ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              zIndex: 0
            }}
          />
        ))}
        {/* Overlay to ensure text readability */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.65)',
          zIndex: 1
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ fontSize: '3.0rem', marginBottom: '20px', color: 'var(--primary-color)', textShadow: '0 4px 10px rgba(0,0,0,0.5)', fontWeight: 'bold', lineHeight: '1.2' }}>
            Empowering Homes and Businesses<br />
            {/* <span style={{ color: '#fff', fontSize: '2.5rem', fontWeight: '500' }}>with Secure, High-Speed Technology</span> */}
          </h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 40px', color: '#eaeaea', textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
            At Techniks Limited, we believe that modern technology should be fast, reliable, secure, and accessible.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <Link to="/contact" className="btn" style={{ padding: '15px 35px', fontSize: '1.2rem', boxShadow: '0 4px 15px rgba(255, 204, 0, 0.4)', borderRadius: '30px' }}>Get Started</Link>
            <Link to="/about" className="btn btn-outline" style={{ padding: '15px 35px', fontSize: '1.2rem', color: '#fff', borderColor: '#fff', borderRadius: '30px' }}>Learn More</Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={{ padding: '100px 0', backgroundColor: '#fff', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '1000px', display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', color: 'var(--secondary-color)', marginBottom: '20px', fontWeight: '800' }}>About Techniks Limited</h2>
            <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--primary-color)', margin: '0 auto' }}></div>
          </div>

          <div style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.9', display: 'flex', flexDirection: 'column', gap: '25px', padding: '40px', backgroundColor: 'var(--bg-light)', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}>
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
            <div style={{ padding: '30px', backgroundColor: 'var(--primary-color)', color: 'var(--secondary-color)', borderRadius: '12px', marginTop: '20px' }}>
              <p style={{ fontWeight: '600', fontSize: '1.3rem', textAlign: 'center', margin: 0 }}>
                We are committed to providing quality workmanship, innovative solutions, and dependable customer service to help homes and businesses operate with confidence in an increasingly digital world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--secondary-color)', color: 'var(--primary-color)', textAlign: 'center', backgroundImage: 'linear-gradient(135deg, #000 0%, #222 100%)' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', letterSpacing: '1px' }}>
            Connecting People. Securing Technology.<br />Powering the Future.
          </h2>
        </div>
      </section>

      {/* Looking Towards the Future Section */}
      <section style={{ padding: '100px 0', backgroundColor: 'var(--bg-light)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '3rem', color: 'var(--secondary-color)', marginBottom: '30px', fontWeight: '800' }}>Looking Towards the Future</h2>
          <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--primary-color)', margin: '0 auto 40px' }}></div>
          <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.8', marginBottom: '30px' }}>
            Technology continues to evolve, and so do the challenges that come with it. Techniks Limited remains committed to helping customers adopt faster internet, smarter networks, stronger cybersecurity, and reliable digital solutions.
          </p>
          <p style={{ fontSize: '1.4rem', color: 'var(--secondary-color)', fontWeight: '700', padding: '20px', border: '2px dashed var(--primary-color)', borderRadius: '12px' }}>
            Our goal is not only to provide technology services but to become a trusted long-term technology partner for our customers.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;

