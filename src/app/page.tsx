import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Countdown from '@/components/Countdown';
import About from '@/components/About';
import Services from '@/components/Services';
import Doctor from '@/components/Doctor';
import WhyChooseUs from '@/components/WhyChooseUs';
import BeforeAfter from '@/components/BeforeAfter';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main>
        <Hero />
        <Countdown />
        <About />
        <Services />
        <Doctor />
        <WhyChooseUs />
        <BeforeAfter />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
