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
    <footer className="footer-section bg-pattern">
      <div className="container footer-grid">
        {/* Brand & Tagline */}
        <div className="footer-brand-area">
          <Image 
            src="/navlogo_footer.png" 
            alt="Rasdent Clinic Logo" 
            width={379} 
            height={70} 
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
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
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
            <p><strong>Phone:</strong> <a href="tel:9645465005" className="link-hover">+91 96454 65005</a></p>
            <p><strong>Address:</strong> Calicut Road, Kuttiady, Kozhikode, Kerala 673508</p>
            <p><strong>Working Hours:</strong> Mon - Sat: 9:30 AM - 6:30 PM (Sun: Closed)</p>
          </div>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="footer-bottom text-center">
        <p>&copy; {currentYear} Rasdent Multi-Speciality Dental Clinic. All Rights Reserved.</p>
        <p className="footer-credit">Developed in accordance with brand guidelines.</p>
      </div>

      
    </footer>
  );
}
