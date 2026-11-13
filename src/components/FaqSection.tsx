import React from 'react';

const clinicFaqs = [
  {
    question: "Which is the best multi-speciality dental clinic in Kuttiady (Kuttiyadi)?",
    answer:
      "Rasdent Multi-Speciality Dental Clinic on Calicut Road, Kuttiady is trusted by thousands of patients across Kozhikode and North Kerala. Led by Chief Dental Surgeon Dr. Rashida T (Dr. Rashida Ajeeb) and 6 dedicated MDS specialists, we offer complete dental care under one roof—from painless root canals and clear aligners to dental implants and pediatric dentistry."
  },
  {
    question: "Do you offer invisible clear aligners and braces in Kuttiady?",
    answer:
      "Yes! Our MDS Orthodontist Dr. Umith K provides custom invisible clear aligners, ceramic braces, self-ligating braces, and traditional metal braces in Kuttiady. Patients from Kuttiady, Nadapuram, Kallachi, Perambra, and Vadakara visit us for digital smile alignment without travelling to Calicut city."
  },
  {
    question: "Is root canal treatment at Rasdent painless?",
    answer:
      "Yes. Our MDS Endodontist Dr. Femin Jamal performs painless, single-sitting and precision rotary root canal treatments (RCT) using modern local anaesthesia and digital X-ray guidance, preserving your natural tooth comfortably."
  },
  {
    question: "Do you provide dental implants, zirconia crowns, and full-mouth rehabilitation?",
    answer:
      "Yes. Our Implantologist Dr. Bineesh Balanandan specializes in permanent titanium dental implants, implant-supported dentures, zirconia crowns, ceramic bridges, and full-mouth rehabilitation for missing or damaged teeth."
  },
  {
    question: "Do you have a specialist kids dentist (pedodontist) in Kuttiady?",
    answer:
      "Yes! Dr. Anaswara S (BDS, MDS Pedodontist) provides gentle, fear-free pediatric dentistry for infants, children, and teens—including cavity prevention, fluoride therapy, pit-and-fissure sealants, and painless fillings."
  },
  {
    question: "Are you open on Sundays and for dental emergencies in Kuttiady?",
    answer:
      "Yes! Rasdent Multi-Speciality Dental Clinic is open Monday to Saturday from 9:00 AM to 7:00 PM, and on Sundays from 9:30 AM to 6:00 PM. Call +91 96454 65005 for same-day appointments or urgent toothache care."
  },
  {
    question: "Which areas near Kuttiady do your patients visit from?",
    answer:
      "Located centrally on Calicut Road in Kuttiady (673508), we regularly welcome families from Kuttiyadi, Nadapuram, Kallachi, Perambra, Vadakara, Thottilpalam, Maruthonkara, Kavilumpara, and across Kozhikode district."
  },
  {
    question: "What digital smile design and cosmetic treatments are available?",
    answer:
      "We offer Digital Smile Design (DSD), porcelain veneers, composite bonding, clinical teeth whitening, gap closure, and laser gum contouring so you can preview and achieve a natural, confident smile."
  }
];

export default function FaqSection() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": clinicFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="section-padding" style={{ backgroundColor: '#ffffff' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container">
        <div className="section-header text-center" style={{ maxWidth: '780px', margin: '0 auto 40px' }}>
          <span className="badge">Patient Guide &amp; FAQs</span>
          <h2 className="section-title">Frequently Asked Questions About Dental Care in Kuttiady</h2>
          <p className="section-subtitle">
            Everything you need to know about invisible aligners, painless root canals, dental implants, and multi-speciality dental care at Rasdent Kuttiady.
          </p>
        </div>

        <div className="parent-faq-grid">
          {clinicFaqs.map((faq, index) => (
            <div key={index} className="parent-faq-card">
              <h3 className="faq-q-title">
                <span className="faq-q-icon" aria-hidden="true">?</span>
                <span>{faq.question}</span>
              </h3>
              <p className="faq-a-text">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

