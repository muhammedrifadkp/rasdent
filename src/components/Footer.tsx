"use client";

import React from 'react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -90; // offset for sticky navbar
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-section">
      {/* Curved SVG Wave Divider */}
      <div className="footer-wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>

      <div className="container footer-grid">
        {/* Brand & Tagline */}
        <div className="footer-brand-area">
          <Image 
            src="/navlogo_footer.webp" 
            alt="Rasdent Clinic Logo" 
            width={300} 
            height={55} 
            className="footer-logo"
          />
          <p className="footer-tagline">&quot;A Reason to Smile&quot;</p>
          <p className="footer-description">
            Experience premium multi-speciality dental treatments in a warm, patient-first environment. 
          </p>
          <div className="footer-socials">
            <a 
              href="https://www.instagram.com/ras_dent" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-btn"
              aria-label="Follow Rasdent Clinic on Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="18" height="18">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              <span>@ras_dent</span>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links-area">
          <h4 className="footer-title">Quick Links</h4>
          <nav className="footer-nav">
            <a href="#about" onClick={(e) => handleLinkClick(e, '#about')}>About Clinic</a>
            <a href="#services" onClick={(e) => handleLinkClick(e, '#services')}>Our Services</a>
            <a href="#doctor" onClick={(e) => handleLinkClick(e, '#doctor')}>Meet The Doctor</a>
            <a href="#why-choose-us" onClick={(e) => handleLinkClick(e, '#why-choose-us')}>Why Choose Us</a>
            <a href="#location" onClick={(e) => handleLinkClick(e, '#location')}>Location</a>
            <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>Book Appointment</a>
          </nav>
        </div>

        {/* Contact Info */}
        <div className="footer-contact-area">
          <h4 className="footer-title">Contact Info</h4>
          <div className="footer-contact-list">
            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width="18" height="18">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.017 12.017 0 0 1-5.99-5.99c-.453-.44-.288-.928.08-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </div>
              <div>
                <strong>Phone</strong>
                <p><a href="tel:9645465005" className="link-hover">+91 96454 65005</a></p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width="18" height="18">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <div>
                <strong>Address</strong>
                <p>Calicut Road, Kuttiady,<br />Kozhikode, Kerala 673508</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width="18" height="18">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <div>
                <strong>Working Hours</strong>
                <p>Mon - Sat: 9:30 AM - 6:30 PM<br /><span style={{ color: 'var(--gold)', fontWeight: 600 }}>(Sun: Closed)</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="footer-bottom text-center">
        <p>&copy; {currentYear} Rasdent Multi-Speciality Dental Clinic. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
