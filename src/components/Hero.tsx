import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="hero-section gradient-bg-teal-mint bg-pattern section-padding">
      {/* Background glow mesh gradient circles */}
      <div className="hero-glow-circle hero-glow-circle-1"></div>
      <div className="hero-glow-circle hero-glow-circle-2"></div>

      <div className="container hero-grid">
        <div className="hero-content">
          <span className="badge">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="16" height="16" className="sparkle-icon">
              <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.6 3.085-1.199 4.619c-.21.81.674 1.452 1.382 1.012L10 15.688l4.197 2.435c.708.44 1.593-.202 1.382-1.012l-1.199-4.619 3.6-3.085c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.83-4.401ZM10 4.708l1.442 3.468c.112.27.359.45.649.473l3.747.3c.125.01.176.166.08.248l-2.838 2.433c-.22.189-.315.48-.25.76l.946 3.64c.032.12-.1.217-.202.154l-3.308-1.92a.75.75 0 0 0-.74 0l-3.308 1.92c-.101.063-.234-.034-.202-.154l.946-3.64c.065-.28-.03-.571-.25-.76L2.684 9.197c-.096-.082-.045-.238.08-.248l3.747-.3a.525.525 0 0 0 .649-.473L10 4.708Z" clipRule="evenodd" />
            </svg>
            Now in Kuttiady
          </span>
          <h1 className="hero-title">
            We Give You <br />
            <span className="gradient-text-teal-green">A Reason to Smile</span>
          </h1>
          <p className="hero-description">
            Experience complete smile solutions and advanced dental treatments at Rasdent Multi-Speciality Dental Clinic. We combine cutting-edge technology with a warm, caring environment to give you the perfect smile.
          </p>
          <div className="hero-ctas">
            <a href="tel:9645465005" className="btn btn-primary btn-call">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.18.282-.108.43a13.547 13.547 0 0 0 5.605 5.605c.149.072.33.027.43-.108l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
              </svg>
              <span>Call to Book: 9645 465 005</span>
            </a>
            <a href="#services" className="btn btn-secondary btn-explore">
              <span>Explore Services</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" width="16" height="16">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
          
          <div className="hero-features-chips">
            <div className="feature-chip">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="16" height="16" className="chip-check-icon">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
              </svg>
              <span>Advanced Orthodontics</span>
            </div>
            <div className="feature-chip">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="16" height="16" className="chip-check-icon">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
              </svg>
              <span>Multi-Speciality Care</span>
            </div>
            <div className="feature-chip">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="16" height="16" className="chip-check-icon">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
              </svg>
              <span>Pediatric Dentistry</span>
            </div>
          </div>
        </div>

        <div className="hero-image-area">
          <div className="sparkle-container-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#EDB139" width="36" height="36" className="sparkle-icon">
              <path d="M12 0l3.059 8.941 8.941 3.059-8.941 3.059-3.059 8.941-3.059-8.941-8.941-3.059 8.941-3.059z" />
            </svg>
          </div>
          <div className="sparkle-container-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#EDB139" width="24" height="24" className="sparkle-icon">
              <path d="M12 0l3.059 8.941 8.941 3.059-8.941 3.059-3.059 8.941-3.059-8.941-8.941-3.059 8.941-3.059z" />
            </svg>
          </div>
          
          <div className="image-blob-container blob-frame">
            <Image 
              src="/clinic_hero.webp" 
              alt="Happy Smiling Family at Rasdent Multi-Speciality Clinic" 
              width={500}
              height={500}
              priority
              className="hero-img-element"
            />
          </div>

          {/* Floating interactive stats card */}
          <div className="floating-stats-card">
            <div className="stats-icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="var(--primary-teal)" width="20" height="20" className="stats-heart-icon">
                <path d="m11.645 20.91-.007-.003-.003-.001a3.797 3.797 0 0 1-.945-.632 17.68 17.68 0 0 1-3.66-3.834C4.833 13.565 3 10.457 3 7.375 3 4.437 5.165 2.25 8.12 2.25c1.767 0 3.167.892 3.88 2.052.713-1.16 2.113-2.052 3.88-2.052 2.955 0 5.12 2.187 5.12 5.125 0 3.082-1.833 6.19-4.132 9.267a17.678 17.678 0 0 1-3.66 3.834 3.79 3.79 0 0 1-.945.632l-.003.001-.007.003-.01.002-.008-.002Z" />
              </svg>
            </div>
            <div className="stats-info">
              <span className="stats-number">10k+</span>
              <span className="stats-label">Happy Smiles</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
