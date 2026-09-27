"use client";

import React, { useState } from "react";
import {
  HelpCircle,
  ChevronDown,
  ArrowRight,
  Headphones,
  Calendar,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { ModalType } from "./Modal";

interface SupportFaqProps {
  onOpenModal: (type: ModalType, data?: any) => void;
}

export default function SupportFaq({ onOpenModal }: SupportFaqProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does CampusPe match students with companies?",
      a: "Our proprietary AI matching engine analyzes your verified academic background, skills, certifications, and portfolio projects to match you with recruiters looking for your specific profile—cutting through traditional keyword filters.",
    },
    {
      q: "Is CampusPe free for college students?",
      a: "Yes! Students can register, build an ATS-optimized digital profile, receive job matches, and apply to campus placement drives completely free of charge.",
    },
    {
      q: "How do colleges benefit from onboarding onto CampusPe?",
      a: "Colleges gain a complete digital placement automation suite: manage student eligibility, host virtual campus drives, invite 100+ partner recruiters, and export standardized NIRF compliance reports effortlessly.",
    },
    {
      q: "Can recruiters conduct off-campus or hybrid campus hiring drives?",
      a: "Absolutely. Recruiters can either conduct remote assessments and interviews directly within CampusPe or coordinate on-campus visits with designated training and placement officers (TPOs).",
    },
  ];

  return (
    <section className="py-20 bg-slate-50/50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Support Banner Card (Exact match from Figma slice 6) */}
        <div className="p-8 sm:p-12 rounded-[32px] bg-gradient-to-r from-sky-100/60 via-blue-50/80 to-indigo-100/50 border border-sky-200/80 shadow-xl shadow-sky-500/5 text-center relative overflow-hidden">
          <div className="max-w-xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Still have questions?
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Our support team is here to help you get started. Reach out anytime.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <button
                onClick={() => onOpenModal("contact-support")}
                className="px-6 py-3 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm shadow-md shadow-sky-500/25 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Headphones className="w-4 h-4" />
                <span>Contact Support</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenModal("schedule-demo")}
                className="px-6 py-3 rounded-2xl bg-white hover:bg-slate-50 text-slate-700 hover:text-sky-600 border border-slate-200 font-semibold text-sm shadow-xs active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-sky-600" />
                <span>Schedule a Demo</span>
              </button>
            </div>
          </div>
        </div>

        {/* Expandable FAQ Accordion */}
        <div className="space-y-4">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Frequently Asked Questions
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              Everything you need to know about CampusPe
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-4.5 text-left font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-4 hover:text-sky-600 cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      openFaq === idx ? "rotate-180 text-sky-600" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
