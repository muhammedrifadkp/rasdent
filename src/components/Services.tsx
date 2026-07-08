import React from 'react';

export default function Services() {
  const serviceList = [
    {
      title: "General Dentistry",
      description: "Routine check-ups, deep scaling & polishing, tooth-colored composite fillings, and simple extractions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="service-svg-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      )
    },
    {
      title: "Cosmetic Dentistry",
      description: "Digital smile design, porcelain veneers, dental bonding, and gum contouring for a perfect aesthetic look.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="service-svg-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
        </svg>
      )
    },
    {
      title: "Root Canal Treatment",
      description: "Highly precise, painless root canals utilizing state-of-the-art endodontic rotary systems.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="service-svg-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.467 5.99 5.99 0 0 0-1.925 3.546 5.974 5.974 0 0 1-2.133-1A3.75 3.75 0 0 0 12 18Z" />
        </svg>
      )
    },
    {
      title: "Dental Implants",
      description: "Permanent and durable titanium implants to replace missing teeth with natural-looking crowns.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="service-svg-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875V21m0-4.125a3.375 3.375 0 1 1-6.75 0M13.5 16.875h3.375A3.375 3.375 0 0 0 20.25 13.5M10.125 6H13.5m-3.375 0c-.414 0-.75-.336-.75-.75V4.5c0-.414.336-.75.75-.75h3.375c.414 0 .75.336.75.75v.75c0 .414-.336.75-.75.75M10.125 6v7.875M13.5 6v7.875m-3.375 0H13.5m-3.375 0a3.375 3.375 0 0 1-3.375-3.375V7.5a3.375 3.375 0 0 1 3.375-3.375h3.375A3.375 3.375 0 0 1 16.875 7.5v2.625a3.375 3.375 0 0 1-3.375 3.375" />
        </svg>
      )
    },
    {
      title: "Orthodontics",
      description: "Align your teeth with premium clear aligners (invisible braces) or traditional ceramic/metal braces.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="service-svg-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm0 5.25h.007v.008H3.75V12Zm0 5.25h.007v.008H3.75v-.008Z" />
        </svg>
      )
    },
    {
      title: "Pediatric Dentistry",
      description: "Friendly, gentle, and welcoming dental care designed specifically to keep kids smiling without fear.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="service-svg-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
      )
    },
    {
      title: "Teeth Whitening",
      description: "Highly effective clinical teeth whitening procedures that brighten your teeth by several shades instantly.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="service-svg-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 21l3.528-3.528m4.795-1.653 1.932 1.932a.5.5 0 0 1-.354.854h-1.932a.5.5 0 0 0-.354.146L14.73 20.3a.5.5 0 0 1-.854-.353v-1.933a.5.5 0 0 0-.146-.354l-1.933-1.933a.5.5 0 0 1 .353-.854h1.933a.5.5 0 0 0 .354-.146l1.933-1.933a.5.5 0 0 1 .854.354v1.932a.5.5 0 0 0 .146.354Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904a8.21 8.21 0 0 1-2.39-2.39L3.528 17 9 16.187m.813-.283 5.485-5.485m-5.485 5.485L9 16.187m8.25-10.742a1.65 1.65 0 0 0-2.334 0L10.125 10.23a1.65 1.65 0 0 0 0 2.334l.75.75a1.65 1.65 0 0 0 2.334 0l4.792-4.792a1.65 1.65 0 0 0 0-2.334l-.75-.75Z" />
        </svg>
      )
    },
    {
      title: "Oral Surgery",
      description: "Specialized extractions, surgical removal of impacted wisdom teeth, and minor pre-prosthetic oral surgeries.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="service-svg-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.745 9H19.25m-14.5 0a2.25 2.25 0 0 1-2.247-2.118L2.25 6a2.25 2.25 0 0 1 2.247-2.118L19.25 3.882A2.25 2.25 0 0 1 21.5 6l-.25.882a2.25 2.25 0 0 1-2.247 2.118H4.745Zm0 0a2.25 2.25 0 0 0-2.247 2.118L2.25 12a2.25 2.25 0 0 0 2.247 2.118h15.006a2.25 2.25 0 0 0 2.247-2.118l-.25-.882A2.25 2.25 0 0 0 19.25 9H4.745Zm0 5.25a2.25 2.25 0 0 1-2.247 2.118L2.25 18a2.25 2.25 0 0 1 2.247 2.118H19.25a2.25 2.25 0 0 1 2.247-2.118l-.25-.882A2.25 2.25 0 0 1 19.25 14.25H4.745Z" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="services-section section-padding gradient-bg-pink-mint">
      <div className="container">
        <div className="services-header text-center">
          <span className="badge">Our Services</span>
          <h2 className="services-title">Complete Smile Solutions</h2>
          <p className="services-subtitle">We offer a wide range of advanced dental treatments designed to restore, preserve, and enhance your smile.</p>
        </div>

        <div className="services-grid">
          {serviceList.map((service, index) => (
            <div key={index} className="card service-card">
              <div className="service-icon-box">
                {service.icon}
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-text">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      
    </section>
  );
}
