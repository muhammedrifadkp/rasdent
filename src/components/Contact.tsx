"use client";

import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setFormStatus('error');
      return;
    }
    
    setFormStatus('submitting');
    
    try {
      await fetch('https://script.google.com/macros/s/AKfycbyjzbO8jUaqP2yUmd94JCAiDR09IyH9s24F2NvFRzrcORaMJuBCN2VYiqrCq0tliMaC/exec', {
        method: 'POST',
        mode: 'no-cors', // Avoids CORS preflight and redirect block
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify(formData),
      });
      
      // Since mode is 'no-cors', the response is opaque. 
      // If the request succeeds/network is up, we can assume success.
      setFormStatus('success');
      setFormData({ name: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error submitting appointment:', error);
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="contact-section section-padding gradient-bg-teal-mint">
      <div className="container">
        <div id="location" className="contact-header text-center">
          <span className="badge">Location & Contact</span>
          <h2 className="contact-title">Visit Our Clinic</h2>
          <p className="contact-subtitle">We are conveniently located on Calicut Road, Kuttiady. Drop in or request an appointment online.</p>
        </div>

        <div className="contact-grid">
          {/* Contact Details & Map */}
          <div className="contact-info-area">
            <div className="contact-card-details">
              <div className="detail-row">
                <div className="detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width="20" height="20">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <div className="detail-text">
                  <h3>Address</h3>
                  <p>Calicut Road, Kuttiady, Kerala 673508</p>
                  <a 
                    href="https://www.google.com/maps/place/Rasdent-+Dental+Clinic/@11.6513212,75.7524891,853m/data=!3m1!1e3!4m6!3m5!1s0x3ba67fb212f31f3b:0x36155a2eb4939f84!8m2!3d11.6346414!4d75.7385459!16s%2Fg%2F11zcs1yxdf?entry=ttu&g_ep=EgoyMDI2MDcwNS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="directions-link"
                  >
                    Get Directions ↗
                  </a>
                </div>
              </div>
              
              <div className="detail-row">
                <div className="detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width="20" height="20">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.017 12.017 0 0 1-5.99-5.99c-.453-.44-.288-.928.08-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>
                <div className="detail-text">
                  <h3>Phone</h3>
                  <p><a href="tel:9645465005" className="link-hover">9645 465 005</a></p>
                </div>
              </div>

              <div className="detail-row">
                <div className="detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width="20" height="20">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div className="detail-text">
                  <h3>Email</h3>
                  <p><a href="mailto:rasdent.dental@gmail.com" className="link-hover">rasdent.dental@gmail.com</a></p>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="map-container">
              <iframe 
                src="https://maps.google.com/maps?q=11.65117,75.75361&z=17&output=embed" 
                width="600" 
                height="450" 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map location of Rasdent Clinic in Kuttiady"
              ></iframe>
            </div>
          </div>

          {/* Appointment/Contact Form */}
          <div className="card contact-form-card">
            <h3 className="form-card-title">Book an Appointment</h3>
            <p className="form-card-subtitle">Fill in the form below and our team will call you back to confirm your appointment time.</p>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name" 
                  required 
                  className="form-control"
                  disabled={formStatus === 'submitting'}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your 10-digit mobile number" 
                  required 
                  className="form-control"
                  disabled={formStatus === 'submitting'}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message / Treatment Requirements</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  rows={4} 
                  placeholder="E.g., Root canal treatment, scaling, braces checkup..."
                  className="form-control"
                  disabled={formStatus === 'submitting'}
                ></textarea>
              </div>

              {formStatus === 'error' && (
                <div className="form-feedback error-msg">
                  Please fill out all required fields.
                </div>
              )}

              {formStatus === 'success' && (
                <div className="form-feedback success-msg">
                  🎉 Thank you! Your booking request has been sent. We will call you shortly.
                </div>
              )}

              <button 
                type="submit" 
                className={`btn btn-primary w-full ${formStatus === 'submitting' ? 'loading' : ''}`}
                disabled={formStatus === 'submitting'}
              >
                {formStatus === 'submitting' ? 'Booking...' : 'Send Booking Request'}
              </button>
            </form>
          </div>
        </div>
      </div>

      
    </section>
  );
}
