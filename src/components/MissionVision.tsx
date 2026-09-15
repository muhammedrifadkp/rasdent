"use client";

import React from 'react';

export default function MissionVision() {
  return (
    <section id="mission-vision" className="mission-vision-section section-padding bg-pattern">
      <div className="container">
        <div className="mv-section-header text-center">
          <span className="badge badge-gold">Our Philosophy</span>
          <h2 className="mv-section-title">Driven by Purpose, Guided by Care</h2>
          <p className="mv-section-subtitle">Discover the core values that shape our practice and guide our commitment to your smile.</p>
        </div>

        <div className="mission-vision-grid no-image">
          {/* Mission Card */}
          <div className="mv-card-advanced mission-card">
            <div className="mv-card-accent"></div>
            <div className="mv-card-body">
              <div className="mv-icon-wrapper-advanced">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width="28" height="28">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3M12 5.25a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
                </svg>
              </div>
              <h3 className="mv-card-title">Our Mission</h3>
              <p className="mv-card-text">
                At Rasdent, we make dental visits stress-free and deliver results that last. We provide personalized treatment plans, gentle care, and transparent guidance so every patient leaves healthier and happier.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="mv-card-advanced vision-card">
            <div className="mv-card-accent"></div>
            <div className="mv-card-body">
              <div className="mv-icon-wrapper-advanced">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width="28" height="28">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
              <h3 className="mv-card-title">Our Vision</h3>
              <p className="mv-card-text">
                At Rasdent, we envision a world where the fear of dentists no longer exists. Our goal is to build a community with strong, beautiful smiles and lifelong oral health.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
