"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import PartnerLogos from "@/components/PartnerLogos";
import OpportunitySection from "@/components/OpportunitySection";
import ResumeSection from "@/components/ResumeSection";
import CollegesSection from "@/components/CollegesSection";
import EmployersSection from "@/components/EmployersSection";
import AppShowcase from "@/components/AppShowcase";
import DownloadApp from "@/components/DownloadApp";
import SupportFaq from "@/components/SupportFaq";
import PreFooterCta from "@/components/PreFooterCta";
import Footer from "@/components/Footer";
import Modal, { ModalType } from "@/components/Modal";
import Toast from "@/components/Toast";

export default function Home() {
  const [modalType, setModalType] = useState<ModalType>(null);
  const [modalData, setModalData] = useState<any>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleOpenModal = (type: ModalType, data?: any) => {
    setModalType(type);
    setModalData(data || null);
  };

  const handleCloseModal = () => {
    setModalType(null);
    setModalData(null);
  };

  const handleSuccess = (msg: string) => {
    setToastMessage(msg);
  };

  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Hero Section */}
      <Hero onOpenModal={handleOpenModal} />

      {/* Numerical Stats Bar */}
      <StatsBar />

      {/* Ecosystem Partner Logos */}
      <PartnerLogos />

      {/* Section 1: AI Match Engine & Opportunity Feed */}
      <OpportunitySection onOpenModal={handleOpenModal} />

      {/* Section 2: Smart AI Resume Parser */}
      <ResumeSection />

      {/* Section 3: For College Placement Cells */}
      <CollegesSection onOpenModal={handleOpenModal} />

      {/* Section 4: For Recruiters & Talent Teams */}
      <EmployersSection onOpenModal={handleOpenModal} />

      {/* Section 5: Mobile App Showcase Carousel */}
      <AppShowcase />

      {/* Section 6: Mobile App Download & QR */}
      <DownloadApp />

      {/* Section 7: Support & FAQ Accordion */}
      <SupportFaq onOpenModal={handleOpenModal} />

      {/* Section 8: Role Switcher Pre-Footer CTA */}
      <PreFooterCta onOpenModal={handleOpenModal} />

      {/* Comprehensive Multi-column Footer */}
      <Footer onOpenModal={handleOpenModal} onShowToast={(msg) => setToastMessage(msg)} />

      {/* Interactive Global Modal */}
      <Modal
        isOpen={modalType !== null}
        type={modalType}
        data={modalData}
        onClose={handleCloseModal}
        onSuccess={handleSuccess}
      />

      {/* Interactive Toast Notifications */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </main>
  );
}
