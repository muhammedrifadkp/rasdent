import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import MobileFloatingCTA from '@/components/MobileFloatingCTA';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: "Kids & Pediatric Dentistry in Kuttiady | Rasdent Dental Clinic",
  description: "Gentle, child-friendly pediatric dental care in Kuttiady, Kozhikode. Led by experienced pediatric dental specialists at Rasdent Multi-Speciality Dental Clinic. Gentle check-ups, cavity prevention, and painless treatments.",
  keywords: [
    "Kids dentist Kuttiady",
    "Pediatric dentist Kuttiady",
    "Children dentist Kuttiady",
    "Child dental clinic Kuttiady",
    "Kids dental care Kozhikode",
    "Rasdent pediatric dentistry",
    "Cavity treatment for kids Kuttiady",
    "Child dental checkup Kuttiady",
    "Painless kids dentist Kozhikode",
    "Pedodontist Kuttiady"
  ],
  alternates: {
    canonical: "/kids-dentistry",
  },
  openGraph: {
    title: "Kids & Pediatric Dentistry in Kuttiady | Rasdent Dental Clinic",
    description: "Creating positive, fear-free dental experiences for children in Kuttiady. Gentle pediatric dental care, cavity prevention, and parent oral health guidance.",
    url: "https://www.rasdent.in/kids-dentistry",
    siteName: "Rasdent Multi-Speciality Dental Clinic",
    images: [
      {
        url: "/icon-512.png",
        width: 512,
        height: 512,
        alt: "Rasdent Kids Dentistry",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

const parentFaqs = [
  {
    question: "When should my child have their first dental visit?",
    answer: "The Indian Dental Association and pediatric dentists recommend bringing your child for their first visit within 6 months after their first tooth erupts, or by their first birthday. Early check-ups help ensure healthy tooth development and make dental visits a normal, stress-free routine."
  },
  {
    question: "How often should children have dental check-ups?",
    answer: "Children should visit the dentist every 6 months for routine check-ups and gentle cleanings. Regular check-ups allow early detection of minor cavities or alignment issues before they cause discomfort."
  },
  {
    question: "Why do milk teeth (baby teeth) need care if they fall out anyway?",
    answer: "Milk teeth play a vital role in speech development, proper chewing, nutrition, and guiding permanent teeth into their correct positions. Premature loss of baby teeth due to decay can cause crowded or crooked permanent teeth later in life."
  },
  {
    question: "How can parents prevent cavities in young children?",
    answer: "Maintain daily brushing twice a day with fluoride toothpaste (rice-grain size for under 3s, pea-sized for 3-6 years), limit sugary drinks/snacks, avoid sleeping with milk bottles, and schedule regular preventive fluoride applications."
  },
  {
    question: "What can parents do if their child is afraid of the dentist?",
    answer: "Keep discussions calm and positive! At Rasdent, our team uses friendly communication and gentle step-by-step introductions to ensure kids feel safe, relaxed, and happy throughout their visit."
  },
  {
    question: "What should I do if my child suffers a sudden toothache?",
    answer: "Rinse their mouth gently with warm water, check for food particles lodged between teeth, apply a cool compress to the outside of the cheek if swollen, and contact Rasdent Kuttiady immediately for a prompt pediatric evaluation."
  },
  {
    question: "Does my child need a dental check-up if they have no pain?",
    answer: "Yes! Early tooth decay in children often causes no initial pain. Routine preventive check-ups help detect microscopic cavities and protect enamel before discomfort starts."
  },
  {
    question: "What are dental sealants and fluoride treatments for children?",
    answer: "Dental sealants are thin, protective coatings applied to the chewing surfaces of back teeth to block out food and bacteria. Fluoride applications strengthen tooth enamel against cavity-causing acids."
  }
];

const kidsTreatments = [
  {
    title: "Gentle Pediatric Check-ups",
    description: "Routine examinations conducted in a calm, welcoming atmosphere to monitor jaw growth and primary tooth development.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="28" height="28">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
      </svg>
    )
  },
  {
    title: "Cavity Prevention & Fluoride",
    description: "Professional topical fluoride therapy and protective pit-and-fissure sealants to shield young teeth against tooth decay.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="28" height="28">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    )
  },
  {
    title: "Painless Tooth Fillings",
    description: "Biocompatible, tooth-colored composite restorations designed to repair cavities quickly and comfortably for kids.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="28" height="28">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-4.51c.444-.317.957-.52 1.5-.595.735-.1 1.488.083 2.062.518.574.435.95 1.077 1.047 1.811.096.735-.125 1.48-.616 2.025l-2.022 2.24" />
      </svg>
    )
  },
  {
    title: "Habit Breaking & Alignment Guidance",
    description: "Custom advice and appliances for thumb sucking, tongue thrusting, or mouth breathing to support natural facial alignment.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="28" height="28">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.516 0c.85.493 1.508 1.333 1.508 2.316V18" />
      </svg>
    )
  }
];

export default function KidsDentistryPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": parentFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <JsonLd />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main>
        {/* Kids Hero Header */}
        <section className="hero-section gradient-bg-pink-mint bg-pattern section-padding" style={{ paddingTop: '140px', paddingBottom: '70px' }}>
          <div className="container text-center">
            <span className="badge kids-hero-badge">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="16" height="16" className="sparkle-icon">
                <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.6 3.085-1.199 4.619c-.21.81.674 1.452 1.382 1.012L10 15.688l4.197 2.435c.708.44 1.593-.202 1.382-1.012l-1.199-4.619 3.6-3.085c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.83-4.401ZM10 4.708l1.442 3.468c.112.27.359.45.649.473l3.747.3c.125.01.176.166.08.248l-2.838 2.433c-.22.189-.315.48-.25.76l.946 3.64c.032.12-.1.217-.202.154l-3.308-1.92a.75.75 0 0 0-.74 0l-3.308 1.92c-.101.063-.234-.034-.202-.154l.946-3.64c.065-.28-.03-.571-.25-.76L2.684 9.197c-.096-.082-.045-.238.08-.248l3.747-.3a.525.525 0 0 0 .649-.473L10 4.708Z" clipRule="evenodd" />
              </svg>
              Child & Pediatric Dental Care in Kuttiady
            </span>
            <h1 className="hero-title" style={{ maxWidth: '850px', margin: '0 auto 20px' }}>
              <span className="hero-main-title">
                Gentle, Fear-Free <br />
                <span className="gradient-text-teal-green">Kids Dentistry in Kuttiady</span>
              </span>
            </h1>
            <p className="hero-description" style={{ maxWidth: '750px', margin: '0 auto 30px' }}>
              At Rasdent Multi-Speciality Dental Clinic, we create warm, joyful, and fear-free dental visits for infants, children, and teenagers. Guided by experienced pediatric dental specialists in Kuttiady, Kozhikode.
            </p>
            <div className="hero-ctas" style={{ justifyContent: 'center' }}>
              <a 
                href="https://wa.me/919645465005?text=Hi%20Rasdent%2C%20I%20would%20like%20to%20book%20a%20kids%20dental%20appointment" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ backgroundColor: '#25D366' }}
              >
                <span>WhatsApp Appointment</span>
              </a>
              <a href="tel:9645465005" className="btn btn-secondary">
                <span>Call: 9645 465 005</span>
              </a>
            </div>
          </div>
        </section>

        {/* Kids Treatments Grid */}
        <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
          <div className="container">
            <div className="text-center" style={{ maxWidth: '700px', margin: '0 auto 40px' }}>
              <span className="badge">Specialized Services</span>
              <h2 className="services-title">Comprehensive Child Dental Care Services</h2>
              <p className="services-subtitle">Protecting young smiles with gentle preventive care, painless restorative treatments, and habit guidance.</p>
            </div>

            <div className="kids-care-chip-grid">
              {kidsTreatments.map((treatment, idx) => (
                <div key={idx} className="kids-care-card">
                  <div className="kids-card-icon">
                    {treatment.icon}
                  </div>
                  <h3 style={{ fontSize: '20px', marginBottom: '10px', color: 'var(--dark-navy)' }}>{treatment.title}</h3>
                  <p style={{ fontSize: '15px', color: 'var(--slate)', margin: 0 }}>{treatment.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Parent FAQ Section */}
        <section className="section-padding gradient-bg-teal-mint bg-pattern">
          <div className="container">
            <div className="text-center" style={{ maxWidth: '750px', margin: '0 auto 40px' }}>
              <span className="badge badge-gold">Parent Oral Health Guide</span>
              <h2 className="services-title">Frequently Asked Questions by Parents</h2>
              <p className="services-subtitle">Clear, medically responsible advice to help you care for your child&apos;s growing smile with confidence.</p>
            </div>

            <div className="parent-faq-grid">
              {parentFaqs.map((faq, index) => (
                <div key={index} className="parent-faq-card">
                  <h3 className="faq-q-title">
                    <span className="faq-q-icon">❓</span>
                    <span>{faq.question}</span>
                  </h3>
                  <p className="faq-a-text">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <Contact />
      </main>
      <Footer />
      <MobileFloatingCTA />
    </>
  );
}
