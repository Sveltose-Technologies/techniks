import React, { useState, useEffect } from 'react';
import { ArrowRight, Server, Shield, Network } from 'lucide-react';
import { Link } from 'react-router-dom';
import { homeAPI } from '../api/endpoints';
import { IMAGE_BASE_URL } from '../config';

import banner1 from '../assets/home_banner_1.webp';
import banner2 from '../assets/home_banner_2.webp';
import banner3 from '../assets/home_banner_3.webp';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [bannerData, setBannerData] = useState({
    title: 'Empowering Homes and Businesses',
    description: 'At Techniks Limited, we believe that modern technology should be fast, reliable, secure, and accessible.',
    images: [banner1, banner2, banner3]
  });
  const [aboutData, setAboutData] = useState({
    title: '',
    description: "",
    textEditor: ''
  });
  const [futureData, setFutureData] = useState({
    title: 'Looking Towards the Future',
    subTitle: 'Technology continues to evolve, and so do the challenges that come with it. Techniks Limited remains committed to helping customers adopt faster internet, smarter networks, stronger cybersecurity, and reliable digital solutions.',
    description: 'Our goal is not only to provide technology services but to become a trusted long-term technology partner for our customers.',
    content: 'Connecting People. Securing Technology.\nPowering the Future.'
  });

  useEffect(() => {
    const fetchBannerData = async () => {
      try {
        const result = await homeAPI.getHomeHeaderContent();
        if (result.status && result.data && result.data.length > 0) {
          const data = result.data[0];

          let extractedImages = [];
          if (result.data.length > 1) {
            extractedImages = result.data.map(item => item.bannerImage ? `${IMAGE_BASE_URL}${item.bannerImage}` : null).filter(Boolean);
          } else {
            if (Array.isArray(data.images)) extractedImages = data.images.map(img => `${IMAGE_BASE_URL}${img}`);
            else if (Array.isArray(data.bannerImages)) extractedImages = data.bannerImages.map(img => `${IMAGE_BASE_URL}${img}`);
            else if (data.bannerImage && typeof data.bannerImage === 'string') extractedImages = [`${IMAGE_BASE_URL}${data.bannerImage}`];
          }

          setBannerData({
            title: data.title || 'Empowering Homes and Businesses',
            description: data.description || 'At Techniks Limited, we believe that modern technology should be fast, reliable, secure, and accessible.',
            images: extractedImages.length > 0 ? extractedImages : [banner1, banner2, banner3]
          });
        }
      } catch (error) {
        console.error("Error fetching home banner details:", error);
      }
    };
    fetchBannerData();

    const fetchAboutData = async () => {
      try {
        const result = await homeAPI.getHomeHeroSection();
        if (result.success && result.data && result.data.length > 0) {
          setAboutData(result.data[0]);
        }
      } catch (error) {
        console.error("Error fetching home about details:", error);
      }
    };
    fetchAboutData();

    const fetchFutureData = async () => {
      try {
        const result = await homeAPI.getHomeContent();
        if (result.status && result.data && result.data.length > 0) {
          setFutureData(result.data[0]);
        }
      } catch (error) {
        console.error("Error fetching home future details:", error);
      }
    };
    fetchFutureData();
  }, []);

  useEffect(() => {
    if (bannerData.images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % bannerData.images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [bannerData.images.length]);

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
        {bannerData.images.map((slide, index) => (
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
          <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'var(--primary-color)', textShadow: '0 4px 10px rgba(0,0,0,0.5)', fontWeight: 'bold', lineHeight: '1.2' }}>
            {bannerData.title}
          </h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 40px', color: '#eaeaea', textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
            {bannerData.description}
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
            <h2 style={{ fontSize: '3rem', color: 'var(--secondary-color)', marginBottom: '20px', fontWeight: '800' }}>{aboutData.title || 'About Techniks Limited'}</h2>
            <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--primary-color)', margin: '0 auto' }}></div>
          </div>

          <div style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.9', display: 'flex', flexDirection: 'column', gap: '25px', padding: '40px', backgroundColor: 'var(--bg-light)', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}>
            {(aboutData.description || '').split('\n').filter(p => p.trim() !== '').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            {aboutData.textEditor && (
              <div style={{ padding: '30px', backgroundColor: 'var(--primary-color)', color: 'var(--secondary-color)', borderRadius: '12px', marginTop: '20px' }}>
                <p style={{ fontWeight: '600', fontSize: '1.3rem', textAlign: 'center', margin: 0 }}>
                  {aboutData.textEditor}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--secondary-color)', color: 'var(--primary-color)', textAlign: 'center', backgroundImage: 'linear-gradient(135deg, #000 0%, #222 100%)' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', letterSpacing: '1px' }}>
            {futureData.content ? futureData.content.split('\n').map((line, idx, arr) => (
              <React.Fragment key={idx}>
                {line}
                {idx < arr.length - 1 && <br />}
              </React.Fragment>
            )) : 'Connecting People. Securing Technology.\nPowering the Future.'.split('\n').map((line, idx, arr) => (
              <React.Fragment key={idx}>{line}{idx < arr.length - 1 && <br />}</React.Fragment>
            ))}
          </h2>
        </div>
      </section>

      {/* Looking Towards the Future Section */}
      <section style={{ padding: '100px 0', backgroundColor: 'var(--bg-light)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '3rem', color: 'var(--secondary-color)', marginBottom: '30px', fontWeight: '800' }}>{futureData.title || 'Looking Towards the Future'}</h2>
          <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--primary-color)', margin: '0 auto 40px' }}></div>
          <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.8', marginBottom: '30px' }}>
            {futureData.subTitle}
          </p>
          <p style={{ fontSize: '1.4rem', color: 'var(--secondary-color)', fontWeight: '700', padding: '20px', border: '2px dashed var(--primary-color)', borderRadius: '12px' }}>
            {futureData.description}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;

