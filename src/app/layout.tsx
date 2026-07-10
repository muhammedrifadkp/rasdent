import type { Metadata } from "next";
import { Sora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rasdent Multi-Speciality Dental Clinic | Best Dentist & Dental Clinic in Kuttiady, Kozhikode",
  description: "Visit Rasdent Multi-Speciality Dental Clinic in Kuttiady, Kozhikode. Led by Chief Dentist Dr. Rashida Ajeeb, we offer advanced orthodontics (clear aligners), dental implants, painless root canals, pediatric care, and smile design. A Reason to Smile.",
  keywords: [
    "Rasdent",
    "Rasdent Dental Clinic",
    "Dentist in Kuttiady",
    "Dental Clinic in Kuttiady",
    "Best dentist in Kuttiady",
    "Kozhikode dentist",
    "dental clinic Kozhikode",
    "root canal Kuttiady",
    "clear aligners Kuttiady",
    "dental implants Kuttiady",
    "Dr. Rashida Ajeeb",
    "Dr. Rashida T",
    "teeth whitening Kuttiady",
    "pediatric dentist Kuttiady",
    "orthodontist Kuttiady",
    "wisdom tooth extraction Kuttiady",
    "cosmetic dentistry Kuttiady"
  ],
  authors: [{ name: "Rasdent Clinic" }],
  metadataBase: new URL("https://www.rasdent.in"), // Fallback base URL for metadata
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rasdent Multi-Speciality Dental Clinic | Best Dentist in Kuttiady",
    description: "Experience modern, advanced dental care at Rasdent Multi-Speciality Dental Clinic on Calicut Road, Kuttiady. Complete smile solutions for you and your family.",
    url: "https://www.rasdent.in",
    siteName: "Rasdent Multi-Speciality Dental Clinic",
    images: [
      {
        url: "/icon-512.png",
        width: 512,
        height: 512,
        alt: "Rasdent Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rasdent Multi-Speciality Dental Clinic | Kuttiady",
    description: "Welcome to Rasdent Multi-Speciality Dental Clinic. Your destination for advanced dental treatments and smile design in Kuttiady. A Reason to Smile.",
    images: ["/icon-512.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "192x192" }
    ],
    shortcut: "/favicon.png",
    apple: "/icon-512.png",
  },
  other: {
    "geo.region": "IN-KL",
    "geo.placename": "Kuttiady",
    "geo.position": "11.65117;75.75361",
    "ICBM": "11.65117, 75.75361",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${plusJakartaSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="192x192" />
      </head>
      <body>{children}</body>
    </html>
  );
}
