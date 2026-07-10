import React from 'react';

export default function JsonLd() {
  const dentistSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Rasdent Multi-Speciality Dental Clinic",
    "alternateName": "Rasdent Clinic",
    "description": "Rasdent Multi-Speciality Dental Clinic in Kuttiady offers advanced, complete smile solutions, cosmetic dentistry, orthodontics, root canals, and pediatric care. A Reason to Smile.",
    "url": "https://www.rasdent.in",
    "logo": "https://www.rasdent.in/logo_horizontal.png",
    "image": "https://www.rasdent.in/icon-512.png",
    "telephone": "+91 96454 65005",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calicut Road",
      "addressLocality": "Kuttiady",
      "addressRegion": "Kerala",
      "postalCode": "673508",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "11.65117",
      "longitude": "75.75361"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:30",
      "closes": "18:30"
    },
    "sameAs": [
      "https://www.instagram.com/ras_dent",
      "https://www.instagram.com/dr_rashida_ajeeb"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchema) }}
    />
  );
}
