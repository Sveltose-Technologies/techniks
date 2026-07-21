import React from 'react';

const About = () => {
  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Discover our Vision, Mission, and Core Values.</p>
        </div>
      </div>
      
      <div className="page-content container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            {/* Vision */}
            <section style={{ padding: '40px', backgroundColor: 'var(--bg-dark)', color: 'var(--text-light)', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: 'var(--primary-color)', marginBottom: '20px', fontSize: '2rem' }}>Our Vision</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ddd' }}>
                To become one of New Zealand's most trusted technology service providers by delivering innovative, reliable, and customer-focused digital solutions that enable people and businesses to thrive in an increasingly connected world.
              </p>
            </section>

            {/* Mission */}
            <section style={{ padding: '40px', backgroundColor: 'var(--primary-color)', color: 'var(--secondary-color)', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <h2 style={{ marginBottom: '20px', fontSize: '2rem' }}>Our Mission</h2>
              <div style={{ fontSize: '1.1rem', lineHeight: '1.8', fontWeight: '500', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <p>
                  Our mission is to simplify technology by providing professional installation, reliable support, and modern communication solutions that improve connectivity, enhance security, and deliver exceptional value for our customers.
                </p>
                <p>
                  We are dedicated to building long-term relationships based on trust, quality workmanship, and outstanding customer service.
                </p>
              </div>
            </section>
          </div>

          {/* Core Values */}
          <section style={{ padding: '40px 0', borderTop: '1px solid #eee' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h2 style={{ fontSize: '2.5rem', color: 'var(--secondary-color)' }}>Our Core Values</h2>
              <p style={{ color: '#666', marginTop: '10px' }}>The principles that guide everything we do.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
              <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', textAlign: 'center' }}>
                <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px', fontSize: '1.5rem' }}>Reliability</h3>
                <p style={{ color: '#555' }}>Delivering technology solutions customers can depend on.</p>
              </div>
              <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', textAlign: 'center' }}>
                <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px', fontSize: '1.5rem' }}>Security</h3>
                <p style={{ color: '#555' }}>Protecting customers from modern digital threats.</p>
              </div>
              <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', textAlign: 'center' }}>
                <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px', fontSize: '1.5rem' }}>Innovation</h3>
                <p style={{ color: '#555' }}>Using modern technology to create better solutions.</p>
              </div>
              <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', textAlign: 'center' }}>
                <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px', fontSize: '1.5rem' }}>Integrity</h3>
                <p style={{ color: '#555' }}>Providing honest advice and transparent service.</p>
              </div>
              <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', textAlign: 'center' }}>
                <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px', fontSize: '1.5rem' }}>Excellence</h3>
                <p style={{ color: '#555' }}>Maintaining high standards in every project.</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default About;
