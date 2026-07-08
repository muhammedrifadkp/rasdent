import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="about-section section-padding">
      <div className="container about-grid">
        <div className="about-image-area">
          <div className="about-card-blob blob-frame-alt">
            <div className="logo-badge-container">
              <Image 
                src="/logo_variant.jpg" 
                alt="Rasdent Logo Variant" 
                width={200} 
                height={106} 
                className="about-logo-img"
              />
            </div>
          </div>
        </div>

        <div className="about-content">
          <span className="badge">About the Clinic</span>
          <h2 className="about-title">Providing World-Class Dental Care in Kuttiady</h2>
          <p className="about-paragraph text-highlight">
            Rasdent Multi-Speciality Dental Clinic is a modern, state-of-the-art facility dedicated to delivering complete smile solutions under one roof. Located on Calicut Road, Kuttiady, we focus on patient comfort, safety, and visual beauty.
          </p>
          <p className="about-paragraph">
            Our clinic is equipped with the latest advancements in digital dentistry, enabling highly accurate diagnoses and painless treatments. Whether you need a simple check-up or a complex smile makeover, our team provides personalized care tailored to your unique needs. We believe that everyone deserves a healthy, confident smile—which is why our tagline is <strong>&quot;A Reason to Smile&quot;</strong>.
          </p>

          <div className="about-features-grid">
            <div className="about-feature-item">
              <div className="feature-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" width="20" height="20">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
              </div>
              <div className="feature-text-wrapper">
                <h4>Full Spectrum Treatments</h4>
                <p>From cleanings to advanced surgeries and cosmetic makeovers.</p>
              </div>
            </div>
            <div className="about-feature-item">
              <div className="feature-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" width="20" height="20">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
              </div>
              <div className="feature-text-wrapper">
                <h4>Ultra-Sterile Hygiene</h4>
                <p>We maintain international protocols for sterilization and safety.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
}
