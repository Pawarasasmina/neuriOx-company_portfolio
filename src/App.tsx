import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact';
import LogoSection from './components/LogoSection';

export default function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <LogoSection/>
      <Services />
      <Projects />
      <Contact />
    </div>
  );
}