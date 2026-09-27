"use client";

import React from "react";
import {
  Building2,
  Clock,
  Award,
  MessageSquare,
  Zap,
  ArrowRight,
  TrendingDown,
  CheckCircle2,
} from "lucide-react";
import { ModalType } from "./Modal";

interface EmployersSectionProps {
  onOpenModal: (type: ModalType, data?: any) => void;
}

export default function EmployersSection({ onOpenModal }: EmployersSectionProps) {
  const cards = [
    {
      title: "Post a role in minutes",
      description:
        "Distribute job vacancies and internship openings across 500+ verified colleges in just one click.",
      tag: "4,500+ Applicants / Drive",
      tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
      icon: Zap,
    },
    {
      title: "Benchmark candidate talent",
      description:
        "Standardized technical assessments, verified hackathon scores, and live GitHub portfolio validations.",
      tag: "Top 5% Pre-vetted",
      tagColor: "bg-sky-50 text-sky-700 border-sky-200/80",
      icon: Award,
    },
    {
      title: "Connect with candidates directly",
      description:
        "Skip external placement agencies. Coordinate interviews and send offer letters directly to selected students.",
      tag: "Instant Chat & Video",
      tagColor: "bg-indigo-50 text-indigo-700 border-indigo-200/80",
      icon: MessageSquare,
    },
    {
      title: "Reduce your time-to-hire",
      description:
        "Cut your hiring cycle from 45 days down to 5 days with automated batch scheduling and AI matching.",
      tag: "3X Faster Turnaround",
      tagColor: "bg-purple-50 text-purple-700 border-purple-200/80",
      icon: TrendingDown,
    },
  ];

  return (
    <section id="employers" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/70 text-sky-800 text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-sky-600" />
              <span>For Recruiters & HR</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Stop running campus drives.
              <br />
              <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Start hiring the right people.
              </span>
            </h2>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Reach vetted students and early-career talent across 500+ colleges without logistical chaos.
              Filter by verifiable skill assessments, coding challenges, and culture fit in one click.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onOpenModal("start-hiring")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm shadow-md shadow-sky-500/25 active:scale-95 transition-all cursor-pointer"
              >
                <span>Start Hiring Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: 4 Feature Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="p-5 sm:p-6 rounded-3xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-sky-300 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 text-sky-600 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors duration-200 shadow-xs">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span
                        className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${card.tagColor}`}
                      >
                        {card.tag}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors mb-2">
                      {card.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-sky-600 group-hover:translate-x-1 transition-transform">
                    <span>Explore candidate pool</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
