"use client";

import React, { useState } from "react";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { ModalType } from "./Modal";

interface PreFooterCtaProps {
  onOpenModal: (type: ModalType, data?: any) => void;
}

export default function PreFooterCta({ onOpenModal }: PreFooterCtaProps) {
  const [activeTab, setActiveTab] = useState<"students" | "colleges" | "employers">("students");

  const tabContent = {
    students: {
      headline: "Kickstart your dream career today.",
      text: "Create your free digital profile, get instant AI ATS resume feedback, and match with verified recruiters.",
      buttonText: "Create Student Profile",
      action: () => onOpenModal("sign-up"),
    },
    colleges: {
      headline: "Transform your college placement records.",
      text: "Empower your placement cell with an automated recruitment portal and connect with 100+ top hiring partners.",
      buttonText: "List Your College",
      action: () => onOpenModal("list-college"),
    },
    employers: {
      headline: "Hire India's top 5% campus talent faster.",
      text: "Reach pre-screened students across 500+ verified universities with customized assessments and zero friction.",
      buttonText: "Start Campus Hiring",
      action: () => onOpenModal("start-hiring"),
    },
  };

  const current = tabContent[activeTab];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[36px] bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 p-8 sm:p-12 lg:p-14 text-white shadow-2xl shadow-sky-500/20 relative overflow-hidden text-center">
          {/* Background shapes */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-2xl pointer-events-none" />

          {/* Heading */}
          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              Ready for what&apos;s next?
            </h2>

            {/* Role Switcher Tabs */}
            <div className="inline-flex p-1 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 my-4">
              <button
                onClick={() => setActiveTab("students")}
                className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === "students"
                    ? "bg-white text-blue-700 shadow-md"
                    : "text-white/80 hover:text-white"
                }`}
              >
                For Students
              </button>
              <button
                onClick={() => setActiveTab("colleges")}
                className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === "colleges"
                    ? "bg-white text-blue-700 shadow-md"
                    : "text-white/80 hover:text-white"
                }`}
              >
                For Colleges
              </button>
              <button
                onClick={() => setActiveTab("employers")}
                className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === "employers"
                    ? "bg-white text-blue-700 shadow-md"
                    : "text-white/80 hover:text-white"
                }`}
              >
                For Employers
              </button>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-sky-100">
              {current.headline}
            </h3>

            <p className="text-sm sm:text-base text-sky-50/90 max-w-xl mx-auto font-normal">
              {current.text}
            </p>

            <div className="pt-4 flex items-center justify-center gap-4">
              <button
                onClick={current.action}
                className="px-8 py-4 rounded-2xl bg-white text-blue-600 hover:bg-sky-50 font-bold text-sm shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>{current.buttonText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
