import React from 'react';
import Image from 'next/image';

export default function Doctor() {
  return (
    <section id="doctor" className="doctor-section section-padding bg-pattern">
      <div className="container">
        <div className="doctor-header text-center">
          <span className="badge">Meet the Doctor</span>
          <h2 className="doctor-title">Our Chief Specialist</h2>
          <p className="doctor-subtitle">Dedicated to providing personalized care and creating beautiful, healthy smiles.</p>
        </div>

        <div className="doctor-card-container">
          <div className="doctor-profile-card">
            <div className="doctor-image-wrapper">
              <div className="doctor-avatar-blob">
                <Image 
                  src="/doctor_rashida.webp" 
                  alt="Dr. Rashida Ajeeb - Lead Dentist at Rasdent Clinic" 
                  width={280}
                  height={280}
                  className="doctor-avatar-img"
                />
              </div>
              <div className="doctor-sparkle-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#EDB139" width="28" height="28" className="sparkle-icon">
                  <path d="M12 0l3.059 8.941 8.941 3.059-8.941 3.059-3.059 8.941-3.059-8.941-8.941-3.059 8.941-3.059z" />
                </svg>
              </div>
            </div>

            <div className="doctor-info">
              <span className="doctor-role">Clinical Director & Chief Dentist</span>
              <h3 className="doctor-name">Dr. Rashida Ajeeb, BDS</h3>
              <p className="doctor-bio">
                Dr. Rashida Ajeeb is the founder and lead dentist of **Rasdent Multi-Speciality Dental Clinic**. Believing that dental care should be restorative, preventative, and beautiful, she specializes in aesthetic smile design, advanced endodontics, and pediatric care. 
              </p>
              <p className="doctor-bio-secondary">
                With a gentle approach and a reassuring presence, she excels at helping nervous patients and children feel completely at ease. Under her leadership, Rasdent is dedicated to delivering high-quality dental solutions, ensuring every patient leaves with a confident reason to smile.
              </p>

              <div className="doctor-socials">
                <a 
                  href="https://www.instagram.com/dr_rashida_ajeeb" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="doctor-insta-btn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  <span>Follow @dr_rashida_ajeeb</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
}
