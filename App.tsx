import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CapabilitiesSection from './components/CapabilitiesSection';
import PerformanceSection from './components/PerformanceSection';
import TechnologySection from './components/TechnologySection';
import TeamSection from './components/TeamSection';
import IntegrationSection from './components/IntegrationSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0B0C15] font-sans antialiased text-white overflow-x-hidden selection:bg-orange-500/30">
      <Navbar />
      <main>
        <Hero />
        <CapabilitiesSection />
        <PerformanceSection />
        <TechnologySection />
        <TeamSection />
        <IntegrationSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;