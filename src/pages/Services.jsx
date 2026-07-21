import React from 'react';
import { Network, Server, Wifi, Shield, Settings, Zap, Phone, Building } from 'lucide-react';

const Services = () => {
  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <div className="container">
          <h1>What We Do</h1>
          <p>Building Reliable Communication Infrastructure for Homes and Businesses</p>
        </div>
      </div>
      
      <div className="page-content container">
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          
          <section style={{ marginBottom: '60px', textAlign: 'center' }}>
            <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.8', marginBottom: '20px' }}>
              At Techniks Limited, we understand that reliable telecommunications infrastructure is the foundation of modern connectivity. From homes and small businesses to large commercial environments, effective communication systems require professional design, installation, configuration, and ongoing maintenance.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8', marginBottom: '20px' }}>
              Our telecommunications services focus on delivering high-performance voice, data, and network connectivity solutions that enable seamless communication, faster information sharing, and improved business productivity.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8' }}>
              With the rapid growth of digital technology, businesses require more than just an internet connection. They need reliable structured cabling, secure network infrastructure, efficient communication systems, and solutions that can support future technology growth. Techniks Limited provides end-to-end telecommunications services designed to meet these evolving requirements.
            </p>
          </section>

          <h2 style={{ fontSize: '2.5rem', color: 'var(--secondary-color)', marginBottom: '40px', textAlign: 'center', borderBottom: '2px solid var(--primary-color)', paddingBottom: '20px' }}>
            Our Telecommunications Services Include
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
            
            {/* Service 1 */}
            <section id="structured-cabling" style={{ padding: '30px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <Server size={32} color="var(--primary-color)" />
                <h3 style={{ fontSize: '1.8rem', color: 'var(--secondary-color)' }}>Structured Cabling & Network Infrastructure</h3>
              </div>
              <p style={{ color: '#555', marginBottom: '15px', fontSize: '1.1rem' }}>We provide professional installation and management of structured cabling systems that create reliable communication pathways for data and voice networks. Our services include:</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#444', lineHeight: '1.8' }}>
                <li>Cat5e, Cat6, and Cat6A data cabling installation</li>
                <li>Network cable installation and termination</li>
                <li>Patch panel installation and organisation</li>
                <li>Data cabinet and rack installation</li>
                <li>Cable testing and certification</li>
                <li>Cable fault finding and repairs</li>
                <li>Office and commercial network infrastructure</li>
                <li>New building telecommunications installations</li>
              </ul>
              <p style={{ color: '#555', marginTop: '15px', fontStyle: 'italic' }}>A properly designed cabling system improves network performance, reduces downtime, and provides a foundation for future technology upgrades.</p>
            </section>

            {/* Service 2 */}
            <section id="fibre-broadband" style={{ padding: '30px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <Wifi size={32} color="var(--primary-color)" />
                <h3 style={{ fontSize: '1.8rem', color: 'var(--secondary-color)' }}>Fibre & Broadband Connectivity Support</h3>
              </div>
              <p style={{ color: '#555', marginBottom: '15px', fontSize: '1.1rem' }}>Techniks Limited supports customers with modern high-speed connectivity solutions by assisting with installation, configuration, and optimisation of internet infrastructure. Our services include:</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#444', lineHeight: '1.8' }}>
                <li>Fibre internet connection support</li>
                <li>Fibre termination and equipment setup</li>
                <li>ONT and router configuration</li>
                <li>Broadband connection troubleshooting</li>
                <li>Internet fault diagnosis</li>
                <li>Network performance testing</li>
                <li>Business-grade connectivity solutions</li>
              </ul>
              <p style={{ color: '#555', marginTop: '15px', fontStyle: 'italic' }}>We ensure customers receive the best possible performance from their internet services by combining quality infrastructure with professional configuration.</p>
            </section>

            {/* Service 3 */}
            <section id="voice-communication" style={{ padding: '30px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <Phone size={32} color="var(--primary-color)" />
                <h3 style={{ fontSize: '1.8rem', color: 'var(--secondary-color)' }}>Voice & Communication Systems</h3>
              </div>
              <p style={{ color: '#555', marginBottom: '15px', fontSize: '1.1rem' }}>Modern businesses require reliable communication systems to connect with customers, suppliers, and employees. Techniks Limited provides support for:</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#444', lineHeight: '1.8' }}>
                <li>VoIP phone system installation</li>
                <li>Business phone network setup</li>
                <li>Communication device configuration</li>
                <li>Internal office communication solutions</li>
                <li>Remote communication support</li>
                <li>Integration of voice and data networks</li>
              </ul>
              <p style={{ color: '#555', marginTop: '15px', fontStyle: 'italic' }}>Our solutions help businesses improve communication efficiency while reducing operational complexity.</p>
            </section>

            {/* Service 4 */}
            <section id="network-installation" style={{ padding: '30px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <Network size={32} color="var(--primary-color)" />
                <h3 style={{ fontSize: '1.8rem', color: 'var(--secondary-color)' }}>Network Installation & Configuration</h3>
              </div>
              <p style={{ color: '#555', marginBottom: '15px', fontSize: '1.1rem' }}>A strong telecommunications network requires careful planning and professional installation. We provide:</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#444', lineHeight: '1.8' }}>
                <li>Router and switch installation</li>
                <li>Network equipment configuration</li>
                <li>Wireless network deployment</li>
                <li>LAN and WAN setup</li>
                <li>Network expansion and upgrades</li>
                <li>Connectivity troubleshooting</li>
                <li>Secure network configuration</li>
              </ul>
              <p style={{ color: '#555', marginTop: '15px', fontStyle: 'italic' }}>Our team ensures networks are reliable, efficient, and ready to support business operations.</p>
            </section>

            {/* Service 5 */}
            <section id="it-support" style={{ padding: '30px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <Settings size={32} color="var(--primary-color)" />
                <h3 style={{ fontSize: '1.8rem', color: 'var(--secondary-color)' }}>IT Support & Security Services</h3>
              </div>
              <p style={{ color: '#555', marginBottom: '15px', fontSize: '1.1rem' }}>Technology issues and security threats can disrupt your work and compromise important information. Our technicians provide reliable support to keep your systems running efficiently and securely. Our IT support includes:</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#444', lineHeight: '1.8' }}>
                <li>Computer and laptop setup</li>
                <li>Software installation</li>
                <li>Operating system support</li>
                <li>Virus and malware removal</li>
                <li>Security software installation</li>
                <li>Data backup configuration</li>
                <li>Printer and device setup</li>
                <li>Hardware upgrades</li>
                <li>System performance optimization</li>
                <li>General technical assistance</li>
              </ul>
              <p style={{ color: '#555', marginTop: '15px', fontStyle: 'italic' }}>We ensure that devices are updated with the latest security patches and configured according to best-practice security standards.</p>
            </section>

            {/* Service 6 */}
            <section id="maintenance-support" style={{ padding: '30px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <Zap size={32} color="var(--primary-color)" />
                <h3 style={{ fontSize: '1.8rem', color: 'var(--secondary-color)' }}>Telecommunications Maintenance & Support</h3>
              </div>
              <p style={{ color: '#555', marginBottom: '15px', fontSize: '1.1rem' }}>Technology infrastructure requires ongoing monitoring and maintenance to ensure reliable performance. Our support services include:</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#444', lineHeight: '1.8' }}>
                <li>Telecommunications fault finding</li>
                <li>Network troubleshooting</li>
                <li>Equipment replacement</li>
                <li>Cable repairs</li>
                <li>System upgrades</li>
                <li>Performance improvements</li>
                <li>Preventative maintenance</li>
              </ul>
              <p style={{ color: '#555', marginTop: '15px', fontStyle: 'italic' }}>We help customers minimise downtime and maintain reliable communication services.</p>
            </section>

            {/* Service 7 */}
            <section id="cybersecurity-integration" style={{ padding: '30px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <Shield size={32} color="var(--primary-color)" />
                <h3 style={{ fontSize: '1.8rem', color: 'var(--secondary-color)' }}>Secure Telecommunications & Cybersecurity Integration</h3>
              </div>
              <p style={{ color: '#555', marginBottom: '15px', fontSize: '1.1rem' }}>As telecommunications systems become increasingly connected, security is a critical requirement. Techniks Limited integrates cybersecurity practices into telecommunications solutions by focusing on:</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#444', lineHeight: '1.8' }}>
                <li>Secure network configuration</li>
                <li>Firewall protection</li>
                <li>Access control management</li>
                <li>Secure wireless communication</li>
                <li>Protection against unauthorised access</li>
                <li>Network vulnerability reduction</li>
                <li>Data protection practices</li>
              </ul>
              <p style={{ color: '#555', marginTop: '15px', fontStyle: 'italic' }}>We ensure communication infrastructure is not only fast and reliable but also protected against modern cyber threats.</p>
            </section>

          </div>
        </div>

        {/* Environments Section */}
        <div style={{ marginTop: '80px', backgroundColor: 'var(--bg-dark)', color: 'var(--text-light)', padding: '60px', borderRadius: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px', justifyContent: 'center' }}>
            <Building size={40} color="var(--primary-color)" />
            <h2 style={{ fontSize: '2.2rem', color: 'var(--primary-color)', margin: 0 }}>Solutions for Different Environments</h2>
          </div>
          <p style={{ textAlign: 'center', fontSize: '1.2rem', marginBottom: '30px', color: '#ccc' }}>Techniks Limited provides telecommunications services for a wide variety of setups:</p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' }}>
            {['Residential properties', 'Small businesses', 'Offices', 'Retail environments', 'Warehouses', 'Commercial buildings', 'Educational facilities', 'Industrial environments'].map((env, index) => (
              <span key={index} style={{ backgroundColor: 'rgba(255, 204, 0, 0.1)', border: '1px solid var(--primary-color)', color: 'var(--primary-color)', padding: '10px 20px', borderRadius: '20px', fontWeight: '500' }}>
                {env}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
