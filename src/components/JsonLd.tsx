import React from 'react';

export default function JsonLd() {
  const dentistSchema = {
    "@context": "https://schema.org",
    "@type": ["Dentist", "LocalBusiness", "MedicalOrganization"],
    "@id": "https://www.rasdent.in/#clinic",
    "name": "Rasdent Multi-Speciality Dental Clinic",
    "alternateName": "Rasdent Clinic",
    "description": "Rasdent Multi-Speciality Dental Clinic in Kuttiady offers advanced, complete smile solutions, cosmetic dentistry, orthodontics, root canals, dental implants, and pediatric care. Led by Dr. Rashida Ajeeb. A Reason to Smile.",
    "url": "https://www.rasdent.in",
    "logo": "https://www.rasdent.in/logo_horizontal.png",
    "image": [
      "https://www.rasdent.in/icon-512.png",
      "https://www.rasdent.in/clinic_hero.webp"
    ],
    "telephone": "+91 96454 65005",
    "email": "rasdent.dental@gmail.com",
    "priceRange": "₹₹",
    "paymentAccepted": "Cash, Credit Card, Debit Card, UPI, Mobile Payment",
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
    "hasMap": "https://www.google.com/maps/place/Rasdent-+Dental+Clinic/@11.6513212,75.7524891,853m/data=!3m1!1e3!4m6!3m5!1s0x3ba67fb212f31f3b:0x36155a2eb4939f84!8m2!3d11.6346414!4d75.7385459!16s%2Fg%2F11zcs1yxdf?entry=ttu&g_ep=EgoyMDI2MDcwNS4wIKXMDSoASAFQAw%3D%3D",
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
    ],
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Kuttiady"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Kozhikode"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Kerala"
      }
    ],
    "knowsAbout": [
      "Dentistry",
      "Root Canal Treatment",
      "Dental Implants",
      "Orthodontics",
      "Clear Aligners",
      "Pediatric Dentistry",
      "Cosmetic Dentistry",
      "Teeth Whitening",
      "Oral Surgery"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Dental Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "General Dentistry",
            "description": "Routine dental check-ups, deep teeth scaling & polishing, tooth-colored composite fillings, and simple extractions."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Cosmetic Dentistry",
            "description": "Digital smile design, porcelain veneers, dental bonding, and gum contouring for aesthetic smile makeovers."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Root Canal Treatment",
            "description": "Highly precise, painless root canal treatment utilizing state-of-the-art endodontic rotary systems."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Dental Implants",
            "description": "Permanent and durable titanium implants to replace missing teeth with natural-looking crowns."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Orthodontics & Clear Aligners",
            "description": "Teeth alignment with premium clear aligners (invisible braces) or traditional ceramic/metal braces."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Pediatric Dentistry",
            "description": "Friendly, gentle, and welcoming kids dental care designed specifically to keep kids smiling without fear."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Teeth Whitening",
            "description": "Clinical teeth whitening procedures that brighten your teeth by several shades instantly."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Oral Surgery",
            "description": "Specialized extractions, surgical removal of impacted wisdom teeth, and minor pre-prosthetic oral surgeries."
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "24",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Aron"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Dr. Rashida made me feel so comfortable! The clinic has fun play areas and my treatment didn't hurt at all. My teeth are super shiny now!"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Fathima"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "I completed my clear aligner treatment here. Dr. Rashida and the team are incredibly supportive, and my new smile has given me so much confidence."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Devassy"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "The geriatric dental care was gentle and highly professional. My new implants look and feel completely natural. I can eat and smile without any hesitation."
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchema) }}
    />
  );
}
