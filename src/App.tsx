/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { WaterlinePreloader } from './components/WaterlinePreloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BackgroundImageSection } from './components/BackgroundImageSection';
import { LongCurvedImageHolder } from './components/LongCurvedImageHolder';
import { ServiceSection } from './components/ServiceSection';
import { DiagnoseFirstSection } from './components/DiagnoseFirstSection';
import { TrustSection } from './components/TrustSection';
import { ReviewTicker } from './components/ReviewTicker';
import { FlowProcessSection } from './components/FlowProcessSection';
import { TransitionSection } from './components/TransitionSection';
import { EmergencySection } from './components/EmergencySection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { ServiceRequestModal } from './components/ServiceRequestModal';

export default function App() {
  const [isPreloaded, setIsPreloaded] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('DRAIN & ROOTER');

  const handlePreloaderComplete = () => {
    setIsPreloaded(true);
    setShowPreloader(false);
  };

  const handleReplayPreloader = () => {
    setShowPreloader(true);
    setIsPreloaded(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenServiceModal = (serviceName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAF8] text-[#172027] flex flex-col font-sans selection:bg-[#65C8C4]/30 selection:text-[#102330]">
      {/* "The Waterline" Custom Preloader */}
      {showPreloader && (
        <WaterlinePreloader onComplete={handlePreloaderComplete} />
      )}

      {/* Main Navigation */}
      <Navbar onRequestService={() => handleOpenServiceModal('General Plumbing Inquiry')} />

      {/* Main Single-Page Content Flow */}
      <main className="flex-grow">
        {/* 1. Hero Section: "WATER WHERE IT SHOULD BE." */}
        <Hero
          isLoaded={isPreloaded}
          onRequestService={() => handleOpenServiceModal('General Plumbing Inquiry')}
        />

        {/* 2. Background Image Statement Section */}
        <BackgroundImageSection />

        {/* 3. Signature Long Curved Bordered Image Holder */}
        <LongCurvedImageHolder />

        {/* 4. Services Section: "WHEN WATER MISBEHAVES." */}
        <ServiceSection onSelectService={handleOpenServiceModal} />

        {/* 5. "Diagnose First" Editorial Section: "FIND IT. FIX IT. MOVE ON." */}
        <DiagnoseFirstSection />

        {/* 6. Trust Section: "LOCAL. PRACTICAL. PROFESSIONAL." */}
        <TrustSection />

        {/* 7. Review / Customer Signal Ticker */}
        <ReviewTicker />

        {/* 8. "The Flow" Process: 01 CALL -> 02 DIAGNOSE -> 03 REPAIR -> 04 RESTORE */}
        <FlowProcessSection />

        {/* 9. Image + Text Transition: "SO YOU CAN GET BACK TO NORMAL." */}
        <TransitionSection />

        {/* 10. Emergency Section: "NEED A PLUMBER?" */}
        <EmergencySection />

        {/* 11. Final CTA: "LET'S GET YOUR WATER MOVING RIGHT." */}
        <FinalCtaSection onRequestService={() => handleOpenServiceModal('General Plumbing Inquiry')} />
      </main>

      {/* 12. Footer with Animated Aqua Circle & Background Grid */}
      <Footer onReplayPreloader={handleReplayPreloader} />

      {/* Service Request & Dispatch Modal */}
      <ServiceRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedService={selectedService}
      />
    </div>
  );
}
