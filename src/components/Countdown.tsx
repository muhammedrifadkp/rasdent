"use client";

import React, { useState, useEffect } from 'react';

export default function Countdown() {
  // Target Time: Saturday, 11 July 2026, 11:00 AM IST
  // ISO Format with offset +05:30 parses to 1783747800000 epoch ms
  const targetTime = 1783747800000; 

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = Date.now();
      const difference = targetTime - now;

      if (difference <= 0) {
        setTimeLeft(prev => ({ ...prev, isExpired: true }));
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
        isExpired: false
      });
    };

    calculateTimeLeft(); // Run immediately on mount
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="countdown-section bg-pattern section-padding">
      <div className="container">
        <div className="countdown-container">
          <div className="countdown-header text-center">
            <span className="badge badge-gold">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="16" height="16" className="sparkle-icon">
                <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.6 3.085-1.199 4.619c-.21.81.674 1.452 1.382 1.012L10 15.688l4.197 2.435c.708.44 1.593-.202 1.382-1.012l-1.199-4.619 3.6-3.085c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.83-4.401ZM10 4.708l1.442 3.468c.112.27.359.45.649.473l3.747.3c.125.01.176.166.08.248l-2.838 2.433c-.22.189-.315.48-.25.76l.946 3.64c.032.12-.1.217-.202.154l-3.308-1.92a.75.75 0 0 0-.74 0l-3.308 1.92c-.101.063-.234-.034-.202-.154l.946-3.64c.065-.28-.03-.571-.25-.76L2.684 9.197c-.096-.082-.045-.238.08-.248l3.747-.3a.525.525 0 0 0 .649-.473L10 4.708Z" clipRule="evenodd" />
              </svg>
              Countdown to Grand Opening
            </span>
            <h2 className="countdown-title">Join Us For Our Inauguration</h2>
            <p className="countdown-subtitle">We are bringing world-class dental care to Kuttiady. Mark your calendar!</p>
          </div>

          {timeLeft.isExpired ? (
            <div className="open-announcement-blob">
              <div className="open-badge">We&apos;re Open!</div>
              <h3>Rasdent Multi-Speciality Dental Clinic is Now Open!</h3>
              <p>Visit us today for complete, advanced dental treatments.</p>
              <a href="#contact" className="btn btn-gold">Book Your Visit Now</a>
            </div>
          ) : (
            <div className="timer-grid">
              <div className="timer-card-blob">
                <div className="timer-val">{String(timeLeft.days).padStart(2, '0')}</div>
                <div className="timer-label">Days</div>
              </div>
              <div className="timer-card-blob">
                <div className="timer-val">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="timer-label">Hours</div>
              </div>
              <div className="timer-card-blob">
                <div className="timer-val">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="timer-label">Minutes</div>
              </div>
              <div className="timer-card-blob">
                <div className="timer-val">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="timer-label">Seconds</div>
              </div>
            </div>
          )}

          <div className="event-details-card">
            <div className="event-detail-item">
              <span className="event-icon">📅</span>
              <span className="event-text">Saturday, 11th July 2026</span>
            </div>
            <div className="event-detail-item">
              <span className="event-icon">🕚</span>
              <span className="event-text">11:00 AM (IST)</span>
            </div>
            <div className="event-detail-item">
              <span className="event-icon">📍</span>
              <span className="event-text">Calicut Road, Kuttiady, Kerala 673508</span>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
}
