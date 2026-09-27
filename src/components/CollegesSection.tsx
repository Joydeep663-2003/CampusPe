"use client";

import React from "react";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { ModalType } from "./Modal";

interface CollegesSectionProps {
  onOpenModal: (type: ModalType, data?: any) => void;
}

export default function CollegesSection({ onOpenModal }: CollegesSectionProps) {
  return (
    <section id="colleges" className="py-20 bg-slate-50/50 relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 inline-block" />
              <span>02 • FOR COLLEGES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Get Discovered
              <br />
              by <span className="text-sky-600">Students and Recruiters.</span>
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Put your college in front of students searching for the right course and recruiters looking for the right talent. CampusPe helps you build your presence, attract enquiries and connect with opportunities.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onOpenModal("list-college")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs shadow-sm hover:shadow-md hover:shadow-sky-500/25 active:scale-95 transition-all cursor-pointer"
              >
                <span>List Your College</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: 3 Feature Cards */}
          <div className="lg:col-span-7 space-y-3.5">
            {/* Card 01 */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-sm transition-all">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold text-slate-400">01 VERIFIED PROFILE</span>
                <div className="flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    NAAC A++ Ready
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-sky-50 text-sky-700 border border-sky-200">
                    98% Match
                  </span>
                </div>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                Build your college profile
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Showcase your college, courses, fees, campus, placements and achievements in one structured profile that students and recruiters can discover.
              </p>
            </div>

            {/* Card 02 */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-sm transition-all">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold text-slate-400">02 DIRECT ENROLL</span>
                <div className="flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-sky-50 text-sky-700 border border-sky-200">
                    Direct Enquiries
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                    <span>WHATSAPP / CHAT (Avg: &lt;15 min)</span>
                  </span>
                </div>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                Students discover and connect
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Students searching for colleges can discover your profile, explore your courses and fees, and connect directly with your admission team.
              </p>
            </div>

            {/* Card 03 */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-sm transition-all">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold text-slate-400">03 CAMPUS RECRUITING</span>
                <div className="flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-200">
                    500+ Hiring Partners
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-sky-50 text-sky-700 border border-sky-200">
                    Connect Directly
                  </span>
                </div>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                Recruiters discover your College
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Recruiters looking for fresh talent can discover your college programs, student batches and initiate placement drives seamlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
