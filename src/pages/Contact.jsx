import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting TechNiks! We will get back to you shortly.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <div className="container">
          <h1>Contact Techniks Limited</h1>
          <p style={{ fontSize: '1.2rem', fontWeight: '500', marginTop: '10px' }}>Fast Internet. Smart Technology. Strong Security.</p>
        </div>
      </div>
      
      <div className="page-content container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px' }}>
          
          {/* Contact Information */}
          <div>
            <h2 style={{ color: 'var(--secondary-color)', marginBottom: '30px' }}>Get In Touch</h2>
            <p style={{ color: '#666', marginBottom: '40px', lineHeight: '1.6' }}>
              Whether you need a consultation for structured cabling, or emergency IT support, our team is ready to assist you. Reach out to us using the contact details below or fill out the form.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ padding: '15px', backgroundColor: 'var(--primary-color)', borderRadius: '50%' }}>
                  <Phone size={24} color="var(--secondary-color)" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Phone</h3>
                  <p style={{ color: '#555' }}>+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ padding: '15px', backgroundColor: 'var(--primary-color)', borderRadius: '50%' }}>
                  <Mail size={24} color="var(--secondary-color)" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Email</h3>
                  <p style={{ color: '#555' }}>info@techniks.com</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ padding: '15px', backgroundColor: 'var(--primary-color)', borderRadius: '50%' }}>
                  <MapPin size={24} color="var(--secondary-color)" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Office Address</h3>
                  <p style={{ color: '#555' }}>123 Tech Avenue, Suite 400<br/>Innovation City, TX 75001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <h3 style={{ marginBottom: '25px', fontSize: '1.5rem', color: 'var(--secondary-color)' }}>Send Us a Message</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#333' }}>Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem' }} 
                  placeholder="John Doe" 
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#333' }}>Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem' }} 
                  placeholder="john@example.com" 
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#333' }}>Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem' }} 
                  placeholder="How can we help?" 
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#333' }}>Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5" 
                  style={{ width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem', resize: 'vertical' }} 
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <button type="submit" className="btn" style={{ width: '100%', padding: '15px', fontSize: '1.1rem' }}>Send Message</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
