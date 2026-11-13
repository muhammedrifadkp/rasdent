"use client";

import React from 'react';
import Image from 'next/image';

interface DoctorInfo {
  name: string;
  role: string;
  degree: string;
  regNo: string;
  description?: string;
}

const specialists: DoctorInfo[] = [
  {
    name: "Dr. Umith K",
    role: "Orthodontist",
    degree: "BDS, MDS",
    regNo: "Reg. No. 13688"
  },
  {
    name: "Dr. Anagha N P",
    role: "Periodontist",
    degree: "BDS, MDS",
    regNo: "Reg. No. 17794"
  },
  {
    name: "Dr. Anaswara S",
    role: "Pedodontist",
    degree: "BDS, MDS",
    regNo: "Reg. No. 34655"
  },
  {
    name: "Dr. Femin Jamal",
    role: "Endodontist",
    degree: "BDS, MDS",
    regNo: "Reg. No. 27987"
  },
  {
    name: "Dr. Bineesh Balanandan",
    role: "Implantologist",
    degree: "BDS, MS in Implant Dentistry",
    regNo: "Reg. No. 14400"
  },
  {
    name: "Dr. Imdadm K",
    role: "Dental Surgeon",
    degree: "BDS",
    regNo: "Reg. No. 17564"
  }
];

export default function Doctor() {
  return (
    <section id="doctor" className="doctor-section section-padding bg-pattern">
      <div className="container">
        <div className="doctor-header text-center">
          <span className="badge">Meet Our Team</span>
          <h2 className="doctor-title">Our Speciality Doctors</h2>
          <p className="doctor-subtitle">A team of highly qualified specialists committed to bringing you the best in dental healthcare.</p>
        </div>

        {/* Chief Dentist (Highlight Card) */}
        <div className="chief-doctor-container">
          <div className="doctor-profile-card chief-card">
            <div className="doctor-image-wrapper">
              <div className="doctor-avatar-blob">
                <Image 
                  src="/doctor_rashida.webp" 
                  alt="Dr. Rashida T (Dr. Rashida Ajeeb) - Chief Dental Surgeon at Rasdent Dental Clinic Kuttiady" 
                  width={280}
                  height={280}
                  className="doctor-avatar-img"
                  priority
                />
              </div>
              <div className="doctor-sparkle-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#EDB139" width="28" height="28" className="sparkle-icon">
                  <path d="M12 0l3.059 8.941 8.941 3.059-8.941 3.059-3.059 8.941-3.059-8.941-8.941-3.059 8.941-3.059z" />
                </svg>
              </div>
            </div>

            <div className="doctor-info">
              <span className="chief-tag">Chief Dental Surgeon</span>
              <h3 className="doctor-name">Dr. Rashida T (Dr. Rashida Ajeeb)</h3>
              <span className="doctor-credentials">BDS | Reg. No. 19365</span>
              <p className="doctor-bio">
                Dr. Rashida T is the Chief Dental Surgeon of <strong>Rasdent Multi-Speciality Dental Clinic</strong>. With expert clinical leadership and a passion for advanced smile design, she leads our team of MDS specialists in delivering pain-free, state-of-the-art family dental treatments in Kuttiady (Kuttiyadi), Kozhikode.
              </p>
            </div>
          </div>
        </div>

        {/* Specialists Grid */}
        <h3 className="specialists-grid-title text-center">Our Domain Specialists</h3>
        <div className="specialists-grid">
          {specialists.map((doc, idx) => (
            <div className="specialist-card" key={idx}>
              <div className="specialist-accent-bar"></div>
              <div className="specialist-icon-wrapper">
                <span className="spec-initials">{doc.name.replace("Dr. ", "").substring(0, 2)}</span>
              </div>
              <span className="specialist-role">{doc.role}</span>
              <h4 className="specialist-name">{doc.name}</h4>
              <p className="specialist-degrees">{doc.degree}</p>
              <span className="specialist-reg">{doc.regNo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
