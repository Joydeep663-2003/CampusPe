"use client";

import React from "react";
import { ArrowUpRight, Phone } from "lucide-react";
import { ModalType } from "./Modal";

interface SupportFaqProps {
  onOpenModal: (type: ModalType, data?: any) => void;
}

export default function SupportFaq({ onOpenModal }: SupportFaqProps) {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Support Banner Card (Exact match from Figma) */}
        <div className="p-8 sm:p-12 rounded-[28px] bg-gradient-to-r from-sky-50 via-blue-50/60 to-sky-50 border border-sky-100 shadow-sm text-center relative overflow-hidden">
          <div className="max-w-lg mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Still have questions?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Our support team is here to help you succeed. Get in touch anytime.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => onOpenModal("contact-support")}
                className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs shadow-sm hover:shadow-md hover:shadow-sky-500/25 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>Contact Support</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onOpenModal("schedule-demo")}
                className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-sky-600 border border-sky-200 font-semibold text-xs shadow-2xs active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>Schedule a Call</span>
                <div className="w-4 h-4 rounded-full bg-sky-600 text-white flex items-center justify-center">
                  <Phone className="w-2.5 h-2.5" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
