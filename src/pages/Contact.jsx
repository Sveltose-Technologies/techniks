import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import toast from 'react-hot-toast';
import contactBanner from '../assets/contact_us_banner.webp';
import { contactAPI } from '../api/endpoints';
import Loader from '../components/Loader';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    subject: '',
    message: ''
  });

  const [contactDetails, setContactDetails] = useState({
    title: 'Get In Touch',
    description: 'We are always happy to hear from our customers. Reach out to us for any inquiries, support, or feedback.',
    phone: ['+64 21 414 738, +64 0220708301'],
    email: 'techniksnz@gmail.com',
    address: '11 Clendon Place, Manurewa, Auckland, 2102'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchContactDetails = async () => {
      try {
        setIsLoading(true);
        const result = await contactAPI.getContactContent();
        if (result.success && result.data && result.data.length > 0) {
          setContactDetails(result.data[0]);
        }
      } catch (error) {
        console.error("Error fetching contact details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContactDetails();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // We can show a loading toast if desired, but button state might be enough
    try {
      const result = await contactAPI.submitContactForm(formData);

      // Axios throws errors for non-2xx status codes, so if we reach here, it's typically successful
      if (result) {
        toast.success('Thank you for contacting TechNiks! We will get back to you shortly.');
        setFormData({ name: '', email: '', contactNumber: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      const errorMessage = error.response?.data?.message || 'Failed to send message. Please try again.';
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="animate-fade-in">
      {/* Enhanced Page Header with Banner */}
      <div style={{
        position: 'relative',
        padding: '120px 0',
        color: 'var(--text-light)',
        textAlign: 'center',
        backgroundImage: `url(${contactBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        {/* Dark overlay for readability */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: 1
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '15px', color: 'var(--primary-color)', fontWeight: '800', textShadow: '0 4px 10px rgba(0,0,0,0.5)' }}>
            Contact Techniks Limited
          </h1>
          <p style={{ fontSize: '1.2rem', fontWeight: '500', marginTop: '10px', color: '#fff', textShadow: '0 2px 5px rgba(0,0,0,0.5)' }}>
            Fast Internet. Smart Technology. Strong Security.
          </p>
        </div>
      </div>

      <div className="page-content container" style={{ padding: '80px 20px', marginTop: '-40px', position: 'relative', zIndex: 3 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '50px', backgroundColor: '#fff', borderRadius: '16px', boxShadow: '0 15px 50px rgba(0,0,0,0.1)', padding: '50px' }}>

          {/* Contact Information */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div>
              <h2 style={{ color: 'var(--secondary-color)', marginBottom: '15px', fontSize: '2.2rem', fontWeight: 'bold' }}>{contactDetails?.title}</h2>
              <div style={{ width: '50px', height: '4px', backgroundColor: 'var(--primary-color)', marginBottom: '20px' }}></div>
              <p style={{ color: '#666', lineHeight: '1.7', fontSize: '1.1rem' }}>
                {contactDetails.description || 'Whether you need a consultation for structured cabling, or emergency IT support, our team is ready to assist you. Reach out to us using the contact details below or fill out the form.'}
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', marginTop: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '20px', backgroundColor: 'var(--bg-light)', borderRadius: '12px', transition: 'transform 0.2s', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateX(10px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateX(0)'}>
                <div style={{ padding: '15px', backgroundColor: 'var(--primary-color)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Phone size={24} color="var(--secondary-color)" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '5px', color: 'var(--secondary-color)' }}>Phone</h3>
                  <p style={{ color: '#555', fontSize: '1.1rem', fontWeight: '500' }}>
                    {contactDetails.phone && contactDetails.phone.length > 0 ? contactDetails.phone.join(', ') : '+64 21 414 738, +64 0220708301'}
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '20px', backgroundColor: 'var(--bg-light)', borderRadius: '12px', transition: 'transform 0.2s', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateX(10px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateX(0)'}>
                <div style={{ padding: '15px', backgroundColor: 'var(--primary-color)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mail size={24} color="var(--secondary-color)" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '5px', color: 'var(--secondary-color)' }}>Email</h3>
                  <p style={{ color: '#555', fontSize: '1.1rem', fontWeight: '500' }}>{contactDetails.email || 'techniksnz@gmail.com'}</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '20px', backgroundColor: 'var(--bg-light)', borderRadius: '12px', transition: 'transform 0.2s', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateX(10px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateX(0)'}>
                <div style={{ padding: '15px', backgroundColor: 'var(--primary-color)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MapPin size={24} color="var(--secondary-color)" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '5px', color: 'var(--secondary-color)' }}>Office Address</h3>
                  <p style={{ color: '#555', fontSize: '1.1rem', fontWeight: '500', whiteSpace: 'pre-line' }}>
                    {contactDetails.address ? contactDetails.address.replace(', ', ',\n') : '11 Clendon Place,\nManurewa, Auckland, 2102'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{ backgroundColor: 'var(--bg-dark)', padding: '40px', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)', color: 'var(--text-light)' }}>
            <h3 style={{ marginBottom: '25px', fontSize: '1.8rem', color: 'var(--primary-color)', fontWeight: 'bold' }}>Send Us a Message</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#ccc' }}>Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '14px 15px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '1rem', color: '#fff' }}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#ccc' }}>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '14px 15px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '1rem', color: '#fff' }}
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#ccc' }}>Contact Number</label>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '14px 15px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '1rem', color: '#fff' }}
                  placeholder="+64 21 123 456"
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#ccc' }}>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '14px 15px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '1rem', color: '#fff' }}
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#ccc' }}>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  style={{ width: '100%', padding: '14px 15px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '1rem', resize: 'vertical', color: '#fff' }}
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <button disabled={isSubmitting} type="submit" className="btn" style={{ width: '100%', padding: '15px', fontSize: '1.2rem', marginTop: '10px', borderRadius: '8px', fontWeight: 'bold', opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
