import React from 'react';
import { Shield, Users, Target, Clock, DollarSign, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyChooseUs = () => {
  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <div className="container">
          <h1>Why Choose Techniks Limited?</h1>
          <p>Customers choose us because we deliver complete technology solutions—not just internet installation.</p>
        </div>
      </div>
      
      <div className="page-content container">
        
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
