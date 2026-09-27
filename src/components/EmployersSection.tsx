"use client";

import React from "react";
import { ArrowRight, Zap, MessageSquare } from "lucide-react";
import { ModalType } from "./Modal";

interface EmployersSectionProps {
  onOpenModal: (type: ModalType, data?: any) => void;
}

export default function EmployersSection({ onOpenModal }: EmployersSectionProps) {
  return (
    <section id="employers" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 inline-block" />
              <span>03 • FOR EMPLOYERS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Stop running campus drives.
              <br />
              <span className="text-sky-600">Start hiring the right people.</span>
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Post a role in minutes and reach relevant candidates without the time, travel and coordination of traditional hiring. CampusPe helps you discover, match and connect with talent from colleges and beyond.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onOpenModal("start-hiring")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs shadow-sm hover:shadow-md hover:shadow-sky-500/25 active:scale-95 transition-all cursor-pointer"
              >
                <span>Post a Job</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: 4 Stacked Cards (Matching Figma) */}
          <div className="lg:col-span-7 space-y-3.5">
            {/* Card 01 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-sm transition-all">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-400">01</span>
                  <h3 className="text-sm font-bold text-slate-900">
                    Post a role in minutes
                  </h3>
                  <span className="text-[9px] font-bold text-sky-600 bg-sky-50 px-1.5 py-0.5 rounded border border-sky-100">
                    INSTANT SETUP
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                    <Zap className="w-2.5 h-2.5" /> 5 Min Deployment
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-50 text-slate-700 border border-slate-200">
                    500+ Campus Network
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-500 pl-6 leading-relaxed">
                Define your skills, location and hiring requirements. Reach relevant candidates across the CampusPe network.
              </p>
            </div>

            {/* Card 02 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-sm transition-all">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-400">02</span>
                  <h3 className="text-sm font-bold text-slate-900">
                    Receive a matched shortlist
                  </h3>
                  <span className="text-[9px] font-bold text-sky-600 bg-sky-50 px-1.5 py-0.5 rounded border border-sky-100">
                    INSTANT SETUP
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-200 flex items-center gap-1">
                    <Zap className="w-2.5 h-2.5" /> Zero CV Clutter
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-50 text-slate-700 border border-slate-200">
                    Tier 1–Tier 3 Parity
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-500 pl-6 leading-relaxed">
                Get candidates matched to your role by skills, experience, location and hiring requirements.
              </p>
            </div>

            {/* Card 03 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-sm transition-all">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-400">03</span>
                  <h3 className="text-sm font-bold text-slate-900">
                    Connect with candidates directly
                  </h3>
                  <span className="text-[9px] font-bold text-sky-600 bg-sky-50 px-1.5 py-0.5 rounded border border-sky-100">
                    INSTANT SETUP
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-sky-50 text-sky-700 border border-sky-200 flex items-center gap-1">
                    <MessageSquare className="w-2.5 h-2.5" /> In-App Scheduling
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-50 text-slate-700 border border-slate-200">
                    1-Click Video / Chat
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-500 pl-6 leading-relaxed">
                Message, schedule interviews, and move candidates through your pipeline — all in one place.
              </p>
            </div>

            {/* Card 04 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-sm transition-all">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-400">04</span>
                  <h3 className="text-sm font-bold text-slate-900">
                    Reduce your time-to-hire
                  </h3>
                  <span className="text-[9px] font-bold text-sky-600 bg-sky-50 px-1.5 py-0.5 rounded border border-sky-100">
                    INSTANT SETUP
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-sky-600 text-white">
                    &lt;2 DAYS
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    57% Faster Hiring
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-500 pl-6 leading-relaxed">
                Find matched candidates, connect with them and move from shortlist to offer in one streamlined workflow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
