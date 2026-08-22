import React, { useState, useEffect } from 'react';
import aboutImage from '../assets/about_us_image.webp';
import visionMissionImage from '../assets/vision_mission_image.webp';
import missionImage from '../assets/home_banner_1.webp';
import { aboutUsAPI } from '../api/endpoints';
import Loader from '../components/Loader';

const About = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [aboutData, setAboutData] = useState({
    pageHeader: {
      title: "Who We Are",
      description: "At Techniks Limited, we are driven by a passion for technology and a commitment to excellence. We understand that in a rapidly evolving digital landscape, staying ahead means embracing innovation while ensuring reliability and security.\n\nOur team of dedicated professionals works tirelessly to design, implement, and support technology solutions that empower homes and businesses to achieve more."
    },
    vision: {
      title: "Our Vision",
      content: "To become one of New Zealand's most trusted technology service providers by delivering innovative, reliable, and customer-focused digital solutions that enable people and businesses to thrive in an increasingly connected world."
    },
    mission: {
      title: "Our Mission",
      content: [
        "Our mission is to simplify technology by providing professional installation, reliable support, and modern communication solutions that improve connectivity, enhance security, and deliver exceptional value for our customers.",
        "We are dedicated to building long-term relationships based on trust, quality workmanship, and outstanding customer service."
      ]
    },
    coreValues: {
      title: "Our Core Values",
      subtitle: "The principles that guide everything we do.",
      items: [
        { name: 'Reliability', description: 'Delivering technology solutions customers can depend on.' },
        { name: 'Security', description: 'Protecting customers from modern digital threats.' },
        { name: 'Innovation', description: 'Using modern technology to create better solutions.' },
        { name: 'Integrity', description: 'Providing honest advice and transparent service.' },
        { name: 'Excellence', description: 'Maintaining high standards in every project.' }
      ]
    }
  });

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        setIsLoading(true);
        const result = await aboutUsAPI.getAboutUsContent();
        if (result.success && result.data && result.data.length > 0) {
          const apiData = result.data[0];
          setAboutData(prevData => ({
            pageHeader: apiData.pageHeader || prevData.pageHeader,
            vision: apiData.vision || prevData.vision,
            mission: apiData.mission || prevData.mission,
            coreValues: apiData.coreValues || prevData.coreValues
          }));
        }
      } catch (error) {
        console.error("Error fetching about us details:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAboutData();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="animate-fade-in">
      {/* Enhanced Page Header */}
      <div style={{
        padding: '100px 0',
        backgroundColor: 'var(--secondary-color)',
        color: 'var(--primary-color)',
        textAlign: 'center',
        backgroundImage: 'linear-gradient(135deg, #111 0%, #333 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '15px', fontWeight: '800', letterSpacing: '1px' }}>About Us</h1>
          <p style={{ fontSize: '1.2rem', color: '#ccc', maxWidth: '600px', margin: '0 auto' }}>Discover our Vision, Mission, and Core Values.</p>
        </div>
        {/* Subtle background decoration */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          backgroundColor: 'var(--primary-color)',
          opacity: 0.1,
          zIndex: 1
        }}></div>
      </div>

      <div className="page-content" style={{ padding: '40px 5%', maxWidth: '1500px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>

          {/* Intro with Image Section */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
            <div style={{ flex: '1 1 400px' }}>
              <h2 style={{ fontSize: '2.5rem', color: 'var(--secondary-color)', marginBottom: '20px', fontWeight: 'bold' }}>{aboutData.pageHeader.title}</h2>
              <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--primary-color)', marginBottom: '20px' }}></div>
              <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8', marginBottom: '15px', whiteSpace: 'pre-line' }}>
                {aboutData.pageHeader.description.replace('security.Our', 'security.\n\nOur')}
              </p>
            </div>
            <div style={{ flex: '1 1 400px' }}>
              <img src={aboutImage} alt="About Techniks" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.15)', transform: 'translateY(-10px)' }} />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '60px', width: '100%' }}>

            {/* Vision Card */}
            <div style={{ display: 'flex', flexWrap: 'wrap', backgroundColor: '#ffffff', borderRadius: '16px', boxShadow: '0 15px 35px rgba(0,0,0,0.08)', overflow: 'hidden', minHeight: '380px' }} className="hover-lift">
              {/* Image inside card */}
              <div style={{
                flex: '1 1 400px',
                backgroundImage: `url(${visionMissionImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '280px'
              }}>
              </div>

              {/* Content inside card */}
              <div style={{ flex: '1 1 400px', padding: '35px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h2 style={{ color: '#000000', marginBottom: '15px', fontSize: '2.2rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>{aboutData.vision.title}</h2>
                <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--primary-color)', marginBottom: '20px' }}></div>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333333', margin: 0, whiteSpace: 'pre-line' }}>
                  {aboutData.vision.content}
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div style={{ display: 'flex', flexWrap: 'wrap-reverse', backgroundColor: '#ffffff', borderRadius: '16px', boxShadow: '0 15px 35px rgba(0,0,0,0.08)', overflow: 'hidden', minHeight: '380px' }} className="hover-lift">
              {/* Content inside card */}
              <div style={{ flex: '1 1 400px', padding: '35px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h2 style={{ color: '#000000', marginBottom: '15px', fontSize: '2.2rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>{aboutData.mission.title}</h2>
                <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--primary-color)', marginBottom: '20px' }}></div>
                <div style={{ fontSize: '1.1rem', lineHeight: '1.8', fontWeight: '400', display: 'flex', flexDirection: 'column', gap: '15px', color: '#333333' }}>
                  {Array.isArray(aboutData.mission.content) ? (
                    aboutData.mission.content.map((paragraph, idx) => (
                      <p key={idx} style={{ margin: 0 }}>{paragraph}</p>
                    ))
                  ) : (
                    <p style={{ margin: 0, whiteSpace: 'pre-line' }}>{aboutData.mission.content}</p>
                  )}
                </div>
              </div>

              {/* Image inside card */}
              <div style={{
                flex: '1 1 400px',
                backgroundImage: `url(${missionImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '280px'
              }}>
              </div>
            </div>

          </div>

          {/* Core Values */}
          <section style={{ padding: '60px 0', borderTop: '1px solid #eaeaea' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h2 style={{ fontSize: '2.8rem', color: 'var(--secondary-color)', fontWeight: 'bold' }}>{aboutData.coreValues.title}</h2>
              <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--primary-color)', margin: '15px auto' }}></div>
              <p style={{ color: '#666', fontSize: '1.1rem' }}>{aboutData.coreValues.subtitle}</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
              {aboutData.coreValues.items.map((value, idx) => (
                <div key={idx} style={{ backgroundColor: '#fff', padding: '40px 30px', borderRadius: '12px', boxShadow: '0 8px 25px rgba(0,0,0,0.06)', textAlign: 'center', borderBottom: '4px solid transparent', transition: 'all 0.3s ease' }}
                  onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.borderBottom = '4px solid var(--primary-color)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderBottom = '4px solid transparent'; }}>
                  <h3 style={{ color: 'var(--secondary-color)', marginBottom: '15px', fontSize: '1.6rem', fontWeight: 'bold' }}>{value.name || value.title}</h3>
                  <p style={{ color: '#666', lineHeight: '1.6' }}>{value.description || value.desc}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default About;
