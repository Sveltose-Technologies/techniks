import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Network, Server, Wifi, Shield, Settings, Zap, Phone, ChevronRight } from 'lucide-react';
import serviceImage from '../assets/service_image.webp';
import servicesBanner from '../assets/services_banner.webp';

const Services = () => {
  const location = useLocation();
  const [activeServiceId, setActiveServiceId] = useState('structured-cabling');

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      setActiveServiceId(hash);
    }
  }, [location]);

  const servicesData = [
    {
      id: 'structured-cabling',
      icon: Server,
      title: 'Structured Cabling & Network Infrastructure',
      intro: 'We provide professional installation and management of structured cabling systems that create reliable communication pathways for data and voice networks.',
      points: [
        'Cat5e, Cat6, and Cat6A data cabling installation',
        'Network cable installation and termination',
        'Patch panel installation and organisation',
        'Data cabinet and rack installation',
        'Cable testing and certification',
        'Cable fault finding and repairs',
        'Office and commercial network infrastructure',
        'New building telecommunications installations'
      ],
      footer: 'A properly designed cabling system improves network performance, reduces downtime, and provides a foundation for future technology upgrades.'
    },
    {
      id: 'fibre-broadband',
      icon: Wifi,
      title: 'Fibre & Broadband Connectivity Support',
      intro: 'Techniks Limited supports customers with modern high-speed connectivity solutions by assisting with installation, configuration, and optimisation of internet infrastructure.',
      points: [
        'Fibre internet connection support',
        'Fibre termination and equipment setup',
        'ONT and router configuration',
        'Broadband connection troubleshooting',
        'Internet fault diagnosis',
        'Network performance testing',
        'Business-grade connectivity solutions'
      ],
      footer: 'We ensure customers receive the best possible performance from their internet services by combining quality infrastructure with professional configuration.'
    },
    {
      id: 'voice-communication',
      icon: Phone,
      title: 'Voice & Communication Systems',
      intro: 'Modern businesses require reliable communication systems to connect with customers, suppliers, and employees.',
      points: [
        'VoIP phone system installation',
        'Business phone network setup',
        'Communication device configuration',
        'Internal office communication solutions',
        'Remote communication support',
        'Integration of voice and data networks'
      ],
      footer: 'Our solutions help businesses improve communication efficiency while reducing operational complexity.'
    },
    {
      id: 'network-installation',
      icon: Network,
      title: 'Network Installation & Configuration',
      intro: 'A strong telecommunications network requires careful planning and professional installation.',
      points: [
        'Router and switch installation',
        'Network equipment configuration',
        'Wireless network deployment',
        'LAN and WAN setup',
        'Network expansion and upgrades',
        'Connectivity troubleshooting',
        'Secure network configuration'
      ],
      footer: 'Our team ensures networks are reliable, efficient, and ready to support business operations.'
    },
    {
      id: 'it-support',
      icon: Settings,
      title: 'IT Support & Security Services',
      intro: 'Technology issues and security threats can disrupt your work and compromise important information. Our technicians provide reliable support to keep your systems running efficiently and securely.',
      points: [
        'Computer and laptop setup',
        'Software installation & OS support',
        'Virus and malware removal',
        'Security software installation',
        'Data backup configuration',
        'Printer and device setup',
        'Hardware upgrades',
        'System performance optimization'
      ],
      footer: 'We ensure that devices are updated with the latest security patches and configured according to best-practice security standards.'
    },
    {
      id: 'maintenance-support',
      icon: Zap,
      title: 'Telecommunications Maintenance & Support',
      intro: 'Technology infrastructure requires ongoing monitoring and maintenance to ensure reliable performance.',
      points: [
        'Telecommunications fault finding',
        'Network troubleshooting',
        'Equipment replacement',
        'Cable repairs',
        'System upgrades',
        'Performance improvements',
        'Preventative maintenance'
      ],
      footer: 'We help customers minimise downtime and maintain reliable communication services.'
    },
    {
      id: 'cybersecurity-integration',
      icon: Shield,
      title: 'Secure Telecommunications & Cybersecurity Integration',
      intro: 'As telecommunications systems become increasingly connected, security is a critical requirement. Techniks Limited integrates cybersecurity practices into telecommunications solutions.',
      points: [
        'Secure network configuration',
        'Firewall protection',
        'Access control management',
        'Secure wireless communication',
        'Protection against unauthorised access',
        'Network vulnerability reduction',
        'Data protection practices'
      ],
      footer: 'We ensure communication infrastructure is not only fast and reliable but also protected against modern cyber threats.'
    }
  ];

  const activeService = servicesData.find(s => s.id === activeServiceId) || servicesData[0];
  const ActiveIcon = activeService.icon;

  return (
    <div className="animate-fade-in" style={{ backgroundColor: '#f4f6f9', minHeight: '100vh' }}>
      <style>
        {`
          .service-menu-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 18px 25px;
            border-bottom: 1px solid #eee;
            color: #555;
            background-color: #fff;
            font-weight: 500;
            transition: all 0.3s ease;
            text-decoration: none;
          }
          .service-menu-item:hover {
            background-color: #fafafa;
            color: var(--primary-color);
            transform: translateX(5px);
          }
          .service-menu-item.active {
            color: var(--primary-color);
            background-color: var(--secondary-color);
            font-weight: 600;
            transform: none;
          }
          .service-menu-item.active:hover {
            transform: none;
          }
          /* Custom scrollbar for sidebar */
          .sidebar-scroll::-webkit-scrollbar {
            width: 6px;
          }
          .sidebar-scroll::-webkit-scrollbar-track {
            background: #f1f1f1; 
          }
          .sidebar-scroll::-webkit-scrollbar-thumb {
            background: #ccc; 
            border-radius: 10px;
          }
          .sidebar-scroll::-webkit-scrollbar-thumb:hover {
            background: var(--primary-color); 
          }
        `}
      </style>
      {/* Dynamic Header with New Banner */}
      <div style={{
        padding: '120px 0',
        color: 'var(--text-light)',
        textAlign: 'center',
        backgroundImage: `url(${servicesBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}>
        {/* Dark overlay for readability */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: 1
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ fontSize: '3.8rem', marginBottom: '15px', color: 'var(--primary-color)', fontWeight: '800', textShadow: '0 4px 10px rgba(0,0,0,0.5)', letterSpacing: '1px' }}>What We Do</h1>
          <p style={{ fontSize: '1.4rem', color: '#fff', maxWidth: '800px', margin: '0 auto', fontWeight: '500', textShadow: '0 2px 5px rgba(0,0,0,0.5)' }}>Building Reliable Communication Infrastructure for Homes and Businesses</p>
        </div>
      </div>
      
      <div className="page-content container" style={{ padding: '60px 20px', marginTop: '-40px', position: 'relative', zIndex: 3 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
          
          {/* Scrollable Sidebar Menu */}
          <div style={{ flex: '1 1 300px', maxWidth: '350px' }}>
            <div style={{ backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
              <div style={{ padding: '25px', backgroundColor: 'var(--primary-color)', color: 'var(--secondary-color)' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', margin: 0 }}>Our Services</h3>
              </div>
              <ul className="sidebar-scroll" style={{ listStyle: 'none', padding: 0, margin: 0, maxHeight: '450px', overflowY: 'auto' }}>
                {servicesData.map(service => (
                  <li key={service.id}>
                    <Link 
                      to={`#${service.id}`}
                      className={`service-menu-item ${activeServiceId === service.id ? 'active' : ''}`}
                      onClick={() => setActiveServiceId(service.id)}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <service.icon size={20} color={activeServiceId === service.id ? 'var(--primary-color)' : '#999'} />
                        {service.title}
                      </span>
                      {activeServiceId === service.id && <ChevronRight size={18} />}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content Area */}
          <div style={{ flex: '2 1 600px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div style={{ backgroundColor: '#fff', borderRadius: '16px', boxShadow: '0 15px 40px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
              
              {/* Dynamic Image */}
              <div style={{
                height: '350px',
                backgroundImage: `url(${serviceImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
              }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.3)' }}></div>
                <div style={{ position: 'absolute', bottom: '30px', left: '40px', right: '40px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div style={{ padding: '20px', backgroundColor: 'var(--primary-color)', borderRadius: '12px', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}>
                    <ActiveIcon size={40} color="var(--secondary-color)" />
                  </div>
                  <h2 style={{ fontSize: '2.5rem', color: '#fff', textShadow: '0 2px 10px rgba(0,0,0,0.5)', fontWeight: 'bold', margin: 0 }}>{activeService.title}</h2>
                </div>
              </div>

              {/* Dynamic Content */}
              <div style={{ padding: '50px' }} className="animate-fade-in" key={activeService.id}>
                <p style={{ fontSize: '1.2rem', color: '#444', lineHeight: '1.9', marginBottom: '30px', borderLeft: '4px solid var(--primary-color)', paddingLeft: '20px' }}>
                  {activeService.intro}
                </p>
                
                <h3 style={{ fontSize: '1.5rem', color: 'var(--secondary-color)', marginBottom: '20px' }}>What this service includes:</h3>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px', marginBottom: '40px' }}>
                  {activeService.points.map((point, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '8px', transition: 'transform 0.2s ease', cursor: 'default' }}
                         onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                         onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                      <div style={{ marginTop: '3px' }}>
                        <ChevronRight size={18} color="var(--primary-color)" />
                      </div>
                      <span style={{ color: '#555', lineHeight: '1.5' }}>{point}</span>
                    </div>
                  ))}
                </div>

                <div style={{ padding: '25px', backgroundColor: 'var(--bg-light)', borderRadius: '12px', border: '1px dashed #ccc' }}>
                  <p style={{ color: '#666', fontStyle: 'italic', fontSize: '1.1rem', margin: 0, textAlign: 'center' }}>
                    "{activeService.footer}"
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;
