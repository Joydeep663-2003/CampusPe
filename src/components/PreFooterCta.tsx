"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { ModalType } from "./Modal";

interface PreFooterCtaProps {
  onOpenModal: (type: ModalType, data?: any) => void;
}

export default function PreFooterCta({ onOpenModal }: PreFooterCtaProps) {
  return (
    <section className="py-12 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xs flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left Text */}
          <div className="space-y-1 text-center lg:text-left">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Ready for what&apos;s next?
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Discover colleges, find opportunities, list your institution, or start hiring with CampusPe.
            </p>
          </div>

          {/* Right 4 Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-2.5">
            <button
              onClick={() => onOpenModal("list-college")}
              className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs transition-all shadow-2xs flex items-center gap-1.5 cursor-pointer"
            >
              <span>Explore Colleges</span>
              <ArrowRight className="w-3 h-3" />
            </button>

            <a
              href="#opportunities"
              className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs transition-all shadow-2xs flex items-center gap-1.5 cursor-pointer"
            >
              <span>Find Opportunities</span>
              <ArrowRight className="w-3 h-3" />
            </a>

            <button
              onClick={() => onOpenModal("list-college")}
              className="px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-semibold text-xs transition-all shadow-2xs flex items-center gap-1.5 cursor-pointer"
            >
              <span>List Your College</span>
              <ArrowRight className="w-3 h-3 text-slate-400" />
            </button>

            <button
              onClick={() => onOpenModal("start-hiring")}
              className="px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-semibold text-xs transition-all shadow-2xs flex items-center gap-1.5 cursor-pointer"
            >
              <span>Post a Job</span>
              <ArrowRight className="w-3 h-3 text-slate-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
