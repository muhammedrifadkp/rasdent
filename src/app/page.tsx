import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import MissionVision from '@/components/MissionVision';
import Services from '@/components/Services';
import Doctor from '@/components/Doctor';
import WhyChooseUs from '@/components/WhyChooseUs';
import BeforeAfter from '@/components/BeforeAfter';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import MobileFloatingCTA from '@/components/MobileFloatingCTA';

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main>
        <Hero />
        <About />
        <MissionVision />
        <Services />
        <Doctor />
        <WhyChooseUs />
        <BeforeAfter />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <MobileFloatingCTA />
    </>
  );
}
