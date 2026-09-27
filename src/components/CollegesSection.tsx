"use client";

import React from "react";
import { GraduationCap, ArrowRight, Building, Users, CalendarCheck, CheckCircle } from "lucide-react";
import { ModalType } from "./Modal";

interface CollegesSectionProps {
  onOpenModal: (type: ModalType, data?: any) => void;
}

export default function CollegesSection({ onOpenModal }: CollegesSectionProps) {
  const features = [
    {
      title: "Build your college profile",
      description:
        "Showcase campus facilities, NIRF rankings, verified academic departments, and historical placement statistics to attract premier recruiters.",
      badge: "Verified Profile",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
      icon: Building,
      metric: "Rank #12 Regional NIRF",
    },
    {
      title: "Recruiter discovery and outreach",
      description:
        "Enable tier-1 enterprise tech, core engineering, and startup recruiters across India to discover your talent pool and book placement slots directly.",
      badge: "50+ Inquiries / Season",
      badgeColor: "bg-sky-50 text-sky-700 border-sky-200/80",
      icon: Users,
      metric: "120+ Partner Companies",
    },
    {
      title: "Streamline campus drives in real-time",
      description:
        "Manage end-to-end drive schedules, student eligibility filters, test proctoring, and automated offer letter generation without paper chaos.",
      badge: "Zero Paperwork",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200/80",
      icon: CalendarCheck,
      metric: "100% Digital Workflow",
    },
  ];

  return (
    <section id="colleges" className="py-24 bg-slate-50/60 relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/70 text-sky-800 text-xs font-bold uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5 text-sky-600" />
              <span>For College Admins</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Get Discovered by{" "}
              <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                Students and Recruiters.
              </span>
            </h2>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Put your college in front of thousands of recruiters searching for top talent. Showcase
              placement track records, student talent, and streamline campus hiring with zero administrative friction.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onOpenModal("list-college")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm shadow-md shadow-sky-500/25 active:scale-95 transition-all cursor-pointer"
              >
                <span>List Your College</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: 3 Feature Showcase Cards */}
          <div className="lg:col-span-7 space-y-4">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors duration-200">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-base text-slate-900 group-hover:text-sky-600 transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    <span
                      className={`inline-block self-start sm:self-auto px-3 py-1 rounded-full text-xs font-semibold border ${item.badgeColor}`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed pl-0 sm:pl-13">
                    {item.description}
                  </p>

                  <div className="mt-3.5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 pl-0 sm:pl-13">
                    <span className="font-medium text-slate-700 flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-sky-500" />
                      {item.metric}
                    </span>
                    <button
                      onClick={() => onOpenModal("list-college")}
                      className="text-sky-600 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Explore features</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
