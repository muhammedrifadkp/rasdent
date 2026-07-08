import React from 'react';
import Image from 'next/image';

export default function Testimonials() {
  const reviews = [
    {
      category: "Pediatric Care",
      quote: "Dr. Rashida made me feel so comfortable! The clinic has fun play areas and my treatment didn't hurt at all. My teeth are super shiny now!",
      imgSrc: "/boy.webp"
    },
    {
      category: "Cosmetic & Orthodontics",
      quote: "I completed my clear aligner treatment here. Dr. Rashida and the team are incredibly supportive, and my new smile has given me so much confidence.",
      imgSrc: "/sister.webp"
    },
    {
      category: "Implants & Restorations",
      quote: "The geriatric dental care was gentle and highly professional. My new implants look and feel completely natural. I can eat and smile without any hesitation.",
      imgSrc: "/grandma.webp"
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section section-padding bg-pattern gradient-bg-pink-mint">
      <div className="container">
        <div className="section-header text-center">
          <span className="badge">Happy Smiles</span>
          <h2 className="section-title">Smiles Across Generations</h2>
          <p className="section-subtitle">
            See why children, youth, and seniors in Kuttiady all trust Rasdent Clinic for their oral health.
          </p>
        </div>

        <div className="testimonials-grid">
          {reviews.map((item, idx) => (
            <div className="testimonial-card card" key={idx}>
              <div className="testimonial-img-wrapper">
                <Image 
                  src={item.imgSrc} 
                  alt={item.category} 
                  width={340} 
                  height={370}
                  className="testimonial-img"
                  style={{ objectFit: 'cover' }}
                />
                <span className="testimonial-category-badge">{item.category}</span>
              </div>
              <div className="testimonial-content">
                <div className="quote-mark">“</div>
                <p className="testimonial-quote" style={{ marginBottom: 0 }}>{item.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
