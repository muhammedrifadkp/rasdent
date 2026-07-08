import React from 'react';

export default function WhyChooseUs() {
  const values = [
    {
      title: "Modern Equipment",
      description: "Equipped with advanced digital imaging systems and state-of-the-art dental chairs for precise, painless, and highly efficient treatments.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="why-svg-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
        </svg>
      )
    },
    {
      title: "Experienced Team",
      description: "Our clinic operates under the specialized care of Dr. Rashida Ajeeb alongside visiting specialists to offer you elite clinical expertise.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="why-svg-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.97 5.97 0 0 0-.75-2.906m-.173-4.094a3 3 0 1 1-.884-5.87 3 3 0 0 1 .884 5.87m-1.2 1.561a6 6 0 0 1 1.2 6m-12 0a6 6 0 0 1-1.2-6m1.2 6H5.4a6 6 0 0 1-1.2-6m1.2 6a5.97 5.97 0 0 1 .75-2.906m-.173-4.094a3 3 0 1 1 .884-5.87 3 3 0 0 1-.884 5.87m1.2 1.561a6 6 0 0 0-1.2 6m12-12a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm-12 0a3 3 0 1 0-3-3 3 3 0 0 0 3 3Z" />
        </svg>
      )
    },
    {
      title: "Patient Comfort",
      description: "Designed from the ground up to feel warm, relaxing, and friendly. We make sure that your visit is entirely comfortable and anxiety-free.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="why-svg-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
      )
    },
    {
      title: "Multi-Speciality Care",
      description: "From routine diagnostics and child dentistry to digital smile makeovers, orthodontics, and implants, we provide complete care under one roof.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="why-svg-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
        </svg>
      )
    }
  ];

  return (
    <section id="why-choose-us" className="why-section section-padding">
      <div className="container">
        <div className="why-header text-center">
          <span className="badge">Why Choose Us</span>
          <h2 className="why-title">Exceptional Care, Exceptional Comfort</h2>
          <p className="why-subtitle">We are committed to providing Kuttiady with dental solutions that are warm, clinical, and reassuring.</p>
        </div>

        <div className="why-grid">
          {values.map((val, index) => (
            <div key={index} className="why-tile">
              <div className="why-icon-box">
                {val.icon}
              </div>
              <div className="why-info">
                <h3 className="why-tile-title">{val.title}</h3>
                <p className="why-tile-desc">{val.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </section>
  );
}
