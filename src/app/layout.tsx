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
  title: "Rasdent Multi-Speciality Dental Clinic | Dentist in Kuttiady | A Reason to Smile",
  description: "Welcome to Rasdent Multi-Speciality Dental Clinic in Kuttiady. Under Dr. Rashida Ajeeb, we offer advanced, complete smile solutions, cosmetic dentistry, orthodontics, and implants. A Reason to Smile.",
  keywords: [
    "Rasdent",
    "Rasdent Dental Clinic",
    "Dentist in Kuttiady",
    "Dental Clinic in Kuttiady",
    "Dr. Rashida Ajeeb",
    "Best dentist Kuttiady",
    "Cosmetic Dentistry Kuttiady",
    "Dental Implants Kuttiady",
    "Root Canal Kuttiady",
    "Ortho Aligners Kuttiady",
    "Smile Care Kuttiady"
  ],
  authors: [{ name: "Rasdent Clinic" }],
  metadataBase: new URL("https://www.rasdent.in"), // Fallback base URL for metadata
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rasdent Multi-Speciality Dental Clinic | A Reason to Smile",
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
