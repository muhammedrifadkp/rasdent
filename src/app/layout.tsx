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
  title: {
    default: "Rasdent Multi-Speciality Dental Clinic | Best Dentist in Kuttiady (Kuttiyadi), Kozhikode",
    template: "%s | Rasdent Multi-Speciality Dental Clinic Kuttiady",
  },
  description:
    "Rasdent Multi-Speciality Dental Clinic in Kuttiady (Kuttiyadi), Kozhikode — near Nadapuram & Perambra. Led by Chief Dentist Dr. Rashida T (Dr. Rashida Ajeeb) and 6 MDS specialists for invisible clear aligners, painless rotary & microscopic root canal, dental implants, digital smile design, braces, and pediatric dentistry.",
  keywords: [
    // Brand & Doctor
    "Rasdent",
    "Rasdent Dental Clinic",
    "Rasdent Multi-Speciality Dental Clinic",
    "Dr. Rashida Ajeeb",
    "Dr. Rashida T",
    "Dr. Umith K Orthodontist",
    "Dr. Bineesh Balanandan Implantologist",
    "Dr. Femin Jamal Endodontist",
    "Dr. Anaswara S Pedodontist",
    "Dr. Anagha N P Periodontist",
    // Local & Spelling Variants (Kuttiady / Kuttiyadi / Nadapuram / Kozhikode)
    "Dentist in Kuttiady",
    "Dentist in Kuttiyadi",
    "Dental Clinic in Kuttiady",
    "Dental Clinic in Kuttiyadi",
    "Best dentist in Kuttiady",
    "Best dental clinic in Kuttiyadi",
    "Dental hospital in Kuttiady",
    "Multi-speciality dental clinic Kuttiyadi",
    "Dental clinic near Nadapuram",
    "Dentist near Kallachi",
    "Dental clinic near Perambra",
    "Dental clinic near Vadakara",
    "Best dental clinic Kozhikode",
    "Dental clinic North Kerala",
    "Dental clinic Calicut Road Kuttiady",
    // Competitor & High-Intent Treatment Keywords
    "Invisible aligners Kuttiady",
    "Clear aligners Kuttiyadi",
    "Clear aligners Kozhikode",
    "Orthodontist Kuttiady",
    "Dental braces Kuttiyadi",
    "Ceramic braces Kozhikode",
    "Painless root canal Kuttiady",
    "Microscopic root canal Kuttiyadi",
    "Single sitting root canal Kuttiady",
    "Dental implants Kuttiady",
    "Titanium dental implants Kuttiyadi",
    "Full mouth rehabilitation Kozhikode",
    "Digital smile design Kuttiady",
    "Smile correction Kuttiady",
    "Porcelain veneers Kuttiyadi",
    "Zirconia crowns and bridges Kuttiyadi",
    "Teeth whitening Kuttiady",
    "Laser dentistry Kuttiady",
    "Pediatric dentist Kuttiady",
    "Kids dental clinic Kuttiyadi",
    "Wisdom tooth extraction Kuttiady",
    "Gum treatment periodontist Kuttiady",
    "Teeth scaling and polishing Kuttiady",
    "Emergency dentist Kuttiady",
    "Sunday open dental clinic Kuttiady",
  ],
  authors: [{ name: "Rasdent Multi-Speciality Dental Clinic" }],
  creator: "Rasdent Multi-Speciality Dental Clinic",
  publisher: "Rasdent Multi-Speciality Dental Clinic",
  metadataBase: new URL("https://www.rasdent.in"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Rasdent Multi-Speciality Dental Clinic | Best Dentist in Kuttiady, Kozhikode",
    description:
      "Complete smile solutions in Kuttiady (Kuttiyadi) & near Nadapuram: invisible clear aligners, painless root canal, dental implants, digital smile design & kids dentistry with MDS specialists.",
    url: "https://www.rasdent.in",
    siteName: "Rasdent Multi-Speciality Dental Clinic",
    images: [
      {
        url: "/clinic_hero.webp",
        width: 1200,
        height: 630,
        alt: "Rasdent Multi-Speciality Dental Clinic in Kuttiady, Kozhikode",
      },
      {
        url: "/icon-512.png",
        width: 512,
        height: 512,
        alt: "Rasdent Dental Clinic Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rasdent Multi-Speciality Dental Clinic | Best Dentist in Kuttiady",
    description:
      "Invisible aligners, painless root canal, dental implants, digital smile design & pediatric dentistry in Kuttiady, Kozhikode. A Reason to Smile.",
    images: ["/clinic_hero.webp"],
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
