import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import MobileFloatingCTA from '@/components/MobileFloatingCTA';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: "Dental Treatments in Kuttiady | Clear Aligners, Implants, Root Canal & Smile Design",
  description:
    "Explore advanced multi-speciality dental treatments at Rasdent Dental Clinic in Kuttiady (Kuttiyadi), Kozhikode: invisible clear aligners, painless rotary & precision root canal, titanium dental implants, digital smile design, zirconia crowns, laser gum care, and wisdom tooth surgery.",
  keywords: [
    "Dental treatments Kuttiady",
    "Invisible aligners Kuttiady",
    "Clear aligners Kuttiyadi",
    "Painless root canal Kuttiady",
    "Microscopic root canal Kuttiyadi",
    "Single sitting root canal Kuttiady",
    "Dental implants Kuttiady",
    "Full mouth rehabilitation Kozhikode",
    "Digital smile design Kuttiady",
    "Smile correction Kuttiyadi",
    "Zirconia crowns Kuttiady",
    "Ceramic braces Kuttiady",
    "Laser dentistry Kuttiady",
    "Wisdom tooth extraction Kuttiady",
    "Dental clinic near Nadapuram"
  ],
  alternates: {
    canonical: "/treatments",
  },
  openGraph: {
    title: "Advanced Dental Treatments in Kuttiady | Rasdent Multi-Speciality Dental Clinic",
    description:
      "Invisible aligners, painless root canal, dental implants, digital smile design & MDS specialist care in Kuttiady, Kozhikode.",
    url: "https://www.rasdent.in/treatments",
    siteName: "Rasdent Multi-Speciality Dental Clinic",
    images: [
      {
        url: "/clinic_hero.webp",
        width: 1200,
        height: 630,
        alt: "Rasdent Multi-Speciality Dental Treatments in Kuttiady",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

const treatmentDetails = [
  {
    title: "Invisible Clear Aligners & Orthodontics",
    specialist: "Dr. Umith K (MDS Orthodontist)",
    summary:
      "Straighten crooked teeth, gaps, and bite issues discreetly with custom invisible clear aligners, ceramic braces, self-ligating braces, or metal braces in Kuttiady.",
    highlights: [
      "Removable, virtually invisible clear aligners",
      "Digital bite & smile alignment planning",
      "Ceramic & metal braces for teens and adults",
    ],
  },
  {
    title: "Painless & Precision Root Canal Treatment (RCT)",
    specialist: "Dr. Femin Jamal (MDS Endodontist)",
    summary:
      "Save infected or aching teeth with gentle, single-sitting and rotary endodontic root canal therapy using digital X-ray precision and painless anaesthesia.",
    highlights: [
      "Single-sitting & multi-visit painless RCT",
      "Rotary & high-precision endodontic cleaning",
      "Post-and-core build-up & protective crowns",
    ],
  },
  {
    title: "Dental Implants & Full-Mouth Rehabilitation",
    specialist: "Dr. Bineesh Balanandan (MS Implant Dentistry)",
    summary:
      "Replace one or multiple missing teeth permanently with biocompatible titanium dental implants, implant-supported dentures, and natural-looking zirconia crowns.",
    highlights: [
      "Single-tooth & multiple-tooth implants",
      "Implant-supported fixed bridges & dentures",
      "Full-mouth rehabilitation for natural chewing",
    ],
  },
  {
    title: "Digital Smile Design & Cosmetic Dentistry",
    specialist: "Dr. Rashida T (Chief Dental Surgeon)",
    summary:
      "Transform your smile with Digital Smile Design (DSD), ultra-thin porcelain veneers, composite bonding, tooth gap closure, and clinical teeth whitening.",
    highlights: [
      "Digital Smile Design & smile correction",
      "Porcelain veneers & aesthetic composite bonding",
      "In-clinic laser/LED teeth whitening",
    ],
  },
  {
    title: "Gum Care, Periodontics & Laser Dentistry",
    specialist: "Dr. Anagha N P (MDS Periodontist)",
    summary:
      "Treat bleeding gums, bad breath, loose teeth, and gum recession with ultrasonic scaling, deep root planing, flap surgery, and cosmetic gum contouring.",
    highlights: [
      "Bleeding & swollen gum treatment",
      "Ultrasonic scaling & teeth polishing",
      "Laser gum depigmentation & contouring",
    ],
  },
  {
    title: "Kids Dentistry, Oral Surgery & General Care",
    specialist: "Dr. Anaswara S (MDS Pedodontist) & Dr. Imdadm K (BDS)",
    summary:
      "Complete family care including fear-free pediatric dentistry, wisdom tooth surgical extraction, tooth-colored fillings, and routine preventive check-ups.",
    highlights: [
      "Impacted wisdom tooth surgical removal",
      "Child-friendly cavity prevention & sealants",
      "Painless extractions & tooth-colored fillings",
    ],
  },
];

export default function TreatmentsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.rasdent.in",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Dental Treatments",
        "item": "https://www.rasdent.in/treatments",
      },
    ],
  };

  return (
    <>
      <JsonLd />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main>
        <section className="hero-section gradient-bg-teal-mint bg-pattern section-padding" style={{ paddingTop: '140px', paddingBottom: '70px' }}>
          <div className="container text-center">
            <span className="badge">Multi-Speciality Dental Care in Kuttiady</span>
            <h1 className="hero-title" style={{ maxWidth: '880px', margin: '0 auto 20px' }}>
              <span className="hero-main-title">
                Advanced Dental Treatments <br />
                <span className="gradient-text-teal-green">in Kuttiady, Kozhikode</span>
              </span>
            </h1>
            <p className="hero-description" style={{ maxWidth: '780px', margin: '0 auto 30px' }}>
              Every dental speciality under one roof on Calicut Road, Kuttiady — serving families from Kuttiyadi, Nadapuram, Kallachi, Perambra, and Vadakara with MDS specialists and modern digital equipment.
            </p>
            <div className="hero-ctas" style={{ justifyContent: 'center' }}>
              <a
                href="https://wa.me/919645465005?text=Hi%20Rasdent%2C%20I%20would%20like%20to%20book%20a%20dental%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <span>Book Consultation on WhatsApp</span>
              </a>
              <Link href="/kids-dentistry" className="btn btn-secondary">
                <span>Explore Kids Dentistry →</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
          <div className="container">
            <div className="text-center" style={{ maxWidth: '750px', margin: '0 auto 40px' }}>
              <span className="badge badge-gold">Speciality Departments</span>
              <h2 className="services-title">Complete Smile Solutions Under One Roof</h2>
              <p className="services-subtitle">
                Each treatment at Rasdent is performed by an experienced dental surgeon or MDS specialist using strict sterilization protocols.
              </p>
            </div>

            <div className="parent-faq-grid">
              {treatmentDetails.map((item, idx) => (
                <article key={idx} className="parent-faq-card">
                  <span style={{ display: 'inline-block', fontSize: '12px', fontWeight: 700, color: 'var(--primary-teal)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>
                    {item.specialist}
                  </span>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--dark-navy)', marginBottom: '12px' }}>
                    {item.title}
                  </h3>
                  <p className="faq-a-text" style={{ marginBottom: '14px' }}>{item.summary}</p>
                  <ul style={{ margin: 0, paddingLeft: '18px', color: 'var(--slate)', fontSize: '14px', lineHeight: 1.7 }}>
                    {item.highlights.map((hl, i) => (
                      <li key={i}>{hl}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
      <MobileFloatingCTA />
    </>
  );
}

