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
    fetchBanner();
  }, []);

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
          
          {/* Feature 1 */}
          <div style={{ padding: '40px 30px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', textAlign: 'center' }}>
            <div style={{ width: '80px', height: '80px', backgroundColor: 'var(--bg-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <Shield size={40} color="var(--primary-color)" />
            </div>
            <h3 style={{ marginBottom: '15px', fontSize: '1.4rem' }}>Secure Connectivity</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>Every network we install is designed with cyber security in mind.</p>
          </div>

          {/* Feature 2 */}
          <div style={{ padding: '40px 30px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', textAlign: 'center' }}>
            <div style={{ width: '80px', height: '80px', backgroundColor: 'var(--bg-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <Users size={40} color="var(--primary-color)" />
            </div>
            <h3 style={{ marginBottom: '15px', fontSize: '1.4rem' }}>Professional Expertise</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>Our technicians are experienced in internet services, networking, CCTV systems, and cyber security technologies.</p>
          </div>

          {/* Feature 3 */}
          <div style={{ padding: '40px 30px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', textAlign: 'center' }}>
            <div style={{ width: '80px', height: '80px', backgroundColor: 'var(--bg-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <Target size={40} color="var(--primary-color)" />
            </div>
            <h3 style={{ marginBottom: '15px', fontSize: '1.4rem' }}>Tailored Solutions</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>We assess your environment and recommend solutions that match your performance and security requirements.</p>
          </div>

          {/* Feature 4 */}
          <div style={{ padding: '40px 30px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', textAlign: 'center' }}>
            <div style={{ width: '80px', height: '80px', backgroundColor: 'var(--bg-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <Clock size={40} color="var(--primary-color)" />
            </div>
            <h3 style={{ marginBottom: '15px', fontSize: '1.4rem' }}>Reliable Service</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>We are committed to quality workmanship, punctual service, and long-term customer support.</p>
          </div>

          {/* Feature 5 */}
          <div style={{ padding: '40px 30px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', textAlign: 'center' }}>
            <div style={{ width: '80px', height: '80px', backgroundColor: 'var(--bg-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <DollarSign size={40} color="var(--primary-color)" />
            </div>
            <h3 style={{ marginBottom: '15px', fontSize: '1.4rem' }}>Affordable Protection</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>We provide practical cyber security measures that fit the needs and budgets of both households and businesses.</p>
          </div>

          {/* Feature 6 */}
          <div style={{ padding: '40px 30px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', textAlign: 'center' }}>
            <div style={{ width: '80px', height: '80px', backgroundColor: 'var(--bg-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <Activity size={40} color="var(--primary-color)" />
            </div>
            <h3 style={{ marginBottom: '15px', fontSize: '1.4rem' }}>Ongoing Support</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>Technology and security threats evolve constantly. We remain available to help maintain, update, and improve your systems over time.</p>
          </div>

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
