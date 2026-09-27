"use client";

import React, { useState } from "react";
import {
  Sparkles,
  GraduationCap,
  Briefcase,
  Building2,
  CheckCircle2,
  ArrowRight,
  Star,
  Users,
  Award,
  Zap,
} from "lucide-react";
import { ModalType } from "./Modal";

interface HeroProps {
  onOpenModal: (type: ModalType, data?: any) => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  const [activeCard, setActiveCard] = useState<number>(1); // default student card active

  return (
    <section className="relative pt-32 pb-20 overflow-hidden hero-gradient-bg">
      {/* Background ambient lighting blobs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-sky-200/40 via-blue-100/30 to-indigo-200/40 blur-3xl pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-40 right-[-100px] w-96 h-96 bg-purple-200/30 blur-3xl pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-60 left-[-100px] w-96 h-96 bg-sky-200/30 blur-3xl pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Floating Stat Pill Left (Desktop) */}
        <div className="hidden xl:flex items-center gap-3 absolute top-36 left-8 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-sky-100 shadow-lg shadow-sky-500/5 animate-float-slow">
          <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-800">500+ Top Colleges</div>
            <div className="text-[11px] text-slate-500 font-medium">Pan-India Network</div>
          </div>
        </div>

        {/* Floating Stat Pill Right (Desktop) */}
        <div className="hidden xl:flex items-center gap-3 absolute top-36 right-8 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-sky-100 shadow-lg shadow-sky-500/5 animate-float-delayed">
          <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-800">10,000+ Placed</div>
            <div className="text-[11px] text-slate-500 font-medium">Avg ₹8.4 LPA CTC</div>
          </div>
        </div>

        {/* Center Top Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-sky-700 text-xs sm:text-sm font-semibold shadow-xs hover:bg-sky-100/70 transition-colors cursor-pointer">
            <span className="flex h-2 w-2 rounded-full bg-sky-500 animate-ping" />
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>AI-Powered Placement Assistant</span>
          </div>
        </div>

        {/* Main Title & Subtitle */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            Connect{" "}
            <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              10X Faster.
            </span>
          </h1>
          <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal">
            One platform connecting students, colleges & employers in India
          </p>

          {/* Social Proof & Rating Bar */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
                  alt="Student"
                  className="w-7 h-7 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                  alt="Student"
                  className="w-7 h-7 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
                  alt="Student"
                  className="w-7 h-7 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
                  alt="Student"
                  className="w-7 h-7 rounded-full border-2 border-white object-cover"
                />
              </div>
              <div className="flex items-center gap-1 font-semibold text-slate-800">
                <div className="flex text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                </div>
                <span>4.9/5 from 10k+ students</span>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-white/70 px-3 py-1 rounded-full border border-slate-200">
              <Award className="w-3.5 h-3.5 text-sky-600" />
              <span>Verified Campus Placement Network • 2026 Batch Active</span>
            </div>
          </div>
        </div>

        {/* Section Divider Question */}
        <div className="mt-12 mb-8 text-center">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-sky-300"></span>
            <span className="text-sm sm:text-base font-bold text-sky-600 tracking-wide uppercase">
              What are you looking for?
            </span>
            <span className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-sky-300"></span>
          </div>
        </div>

        {/* 3 Audience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Card 1: College */}
          <div
            onClick={() => setActiveCard(0)}
            className={`group relative rounded-3xl p-6 sm:p-7 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
              activeCard === 0
                ? "bg-white shadow-xl shadow-sky-500/10 border-2 border-sky-400 ring-4 ring-sky-500/10"
                : "bg-white/80 hover:bg-white border border-slate-200/80 shadow-md hover:shadow-lg"
            }`}
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-200/60">
                  For Colleges
                </span>
              </div>

              <h2 className="text-xl font-bold text-slate-900 mb-2">College</h2>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Digitize campus recruitment, invite tier-1 recruiters, and maximize student placement outcomes.
              </p>

              {/* Bullet checklist */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                  <span>Expand recruiter network faster</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                  <span>Seamless placement cycle workflow</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                  <span>Actionable student performance data</span>
                </li>
              </ul>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenModal("list-college");
              }}
              className="w-full py-3 px-4 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm shadow-sm hover:shadow-md hover:shadow-sky-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2: Students (Job Seeker - Highlighted Card) */}
          <div
            onClick={() => setActiveCard(1)}
            className={`group relative rounded-3xl p-6 sm:p-7 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
              activeCard === 1
                ? "bg-gradient-to-b from-white to-sky-50/50 shadow-2xl shadow-sky-500/15 border-2 border-sky-500 ring-4 ring-sky-500/15 md:-translate-y-2"
                : "bg-white/80 hover:bg-white border border-slate-200/80 shadow-md hover:shadow-lg"
            }`}
          >
            {/* Top Popular Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
              Most Popular
            </div>

            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-500 text-white flex items-center justify-center shadow-md shadow-sky-500/25">
                  <Briefcase className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 border border-sky-300">
                  For Students
                </span>
              </div>

              <h2 className="text-xl font-bold text-slate-900 mb-2">I&apos;m Looking for a Job</h2>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Discover personalized opportunities, optimize your resume with AI, and get hired faster.
              </p>

              {/* Bullet checklist */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>Apply to 1000+ verified jobs</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>Automated resume ATS matching</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>Direct recruiter interview invites</span>
                </li>
              </ul>
            </div>

            <a
              href="#opportunities"
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white font-bold text-sm shadow-lg shadow-sky-500/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore Jobs</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Card 3: Employers */}
          <div
            onClick={() => setActiveCard(2)}
            className={`group relative rounded-3xl p-6 sm:p-7 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
              activeCard === 2
                ? "bg-white shadow-xl shadow-sky-500/10 border-2 border-sky-400 ring-4 ring-sky-500/10"
                : "bg-white/80 hover:bg-white border border-slate-200/80 shadow-md hover:shadow-lg"
            }`}
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                  <Building2 className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-200/60">
                  For Employers
                </span>
              </div>

              <h2 className="text-xl font-bold text-slate-900 mb-2">I&apos;m Hiring</h2>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Streamline candidate sourcing and conduct seamless campus drives with verified pre-screened talent.
              </p>

              {/* Bullet checklist */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                  <span>Access top talent from 500+ campuses</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                  <span>Filter candidates effortlessly</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                  <span>Fast-track hiring process</span>
                </li>
              </ul>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenModal("start-hiring");
              }}
              className="w-full py-3 px-4 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm shadow-sm hover:shadow-md hover:shadow-sky-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Start Hiring</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
