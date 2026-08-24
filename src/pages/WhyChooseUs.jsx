import React, { useState, useEffect } from 'react';
import { Shield, Users, Target, Clock, DollarSign, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { whyChooseUsAPI } from '../api/endpoints';
import { IMAGE_BASE_URL } from '../config';
import whyChooseUsBanner from '../assets/home_banner_2.webp';

const WhyChooseUs = () => {
  const [bannerData, setBannerData] = useState({
    title: 'Why Choose Techniks?',
    description: 'Customers choose us because we deliver complete technology solutions—not just internet installation.',
    bannerImage: whyChooseUsBanner
  });
  const [featuresData, setFeaturesData] = useState([]);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const result = await whyChooseUsAPI.getWhyChooseBanner();
        if (result.status && result.data && result.data.length > 0) {
          const data = result.data[0];
          setBannerData({
            title: data.title || 'Why Choose Techniks?',
            description: data.description || 'Customers choose us because we deliver complete technology solutions—not just internet installation.',
            bannerImage: data.bannerImage ? `${IMAGE_BASE_URL}${data.bannerImage}` : whyChooseUsBanner
          });
        }
      } catch (error) {
        console.error("Error fetching why choose us banner:", error);
      }
    };

    const fetchFeatures = async () => {
      try {
        const result = await whyChooseUsAPI.getWhyChooseData();
        if (result.success && result.data) {
          setFeaturesData(result.data);
        }
      } catch (error) {
        console.error("Error fetching why choose us data:", error);
      }
    };

    fetchBanner();
    fetchFeatures();
  }, []);

  const getIconComponent = (title) => {
    switch (title) {
      case 'Secure Connectivity': return <Shield size={40} color="var(--primary-color)" />;
      case 'Professional Expertise': return <Users size={40} color="var(--primary-color)" />;
      case 'Tailored Solutions': return <Target size={40} color="var(--primary-color)" />;
      case 'Reliable Service': return <Clock size={40} color="var(--primary-color)" />;
      case 'Affordable Protection': return <DollarSign size={40} color="var(--primary-color)" />;
      case 'Ongoing Support': return <Activity size={40} color="var(--primary-color)" />;
      default: return <Target size={40} color="var(--primary-color)" />;
    }
  };

  return (
    <div className="animate-fade-in">
      {/* Enhanced Page Header with Banner */}
      <div style={{
        position: 'relative',
        padding: '120px 0',
        color: 'var(--text-light)',
        textAlign: 'center',
        backgroundImage: `url(${bannerData.bannerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        {/* Dark overlay for readability */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.65)',
          zIndex: 1
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '15px', color: 'var(--primary-color)', fontWeight: '800', textShadow: '0 4px 10px rgba(0,0,0,0.5)' }}>
            {bannerData.title}
          </h1>
          <p style={{ fontSize: '1.2rem', fontWeight: '500', marginTop: '10px', color: '#fff', textShadow: '0 2px 5px rgba(0,0,0,0.5)', maxWidth: '800px', margin: '10px auto 0' }}>
            {bannerData.description}
          </p>
        </div>
      </div>
      
      <div className="page-content container" style={{ marginTop: '-40px', position: 'relative', zIndex: 3 }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginBottom: '80px' }}>
          
          {[...featuresData].reverse().map((feature, index) => (
            <div key={feature._id || index} style={{ padding: '40px 30px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', backgroundColor: 'var(--bg-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                {getIconComponent(feature.title)}
              </div>
              <h3 style={{ marginBottom: '15px', fontSize: '1.4rem' }}>{feature.title}</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>{feature.description}</p>
            </div>
          ))}

        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <h3 style={{ color: 'var(--secondary-color)', fontSize: '2rem', marginBottom: '20px' }}>Ready to experience the Techniks difference?</h3>
          <Link to="/contact" className="btn">Get a Consultation</Link>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
