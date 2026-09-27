"use client";

import React, { useState } from "react";
import {
  Sparkles,
  GraduationCap,
  Briefcase,
  Landmark,
  Check,
  ArrowRight,
  Bell,
  MessageCircle,
  Zap,
  Search,
  Code2,
} from "lucide-react";
import { ModalType } from "./Modal";

interface HeroProps {
  onOpenModal: (type: ModalType, data?: any) => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  const [activeCard, setActiveCard] = useState<number>(1); // default middle card active

  return (
    <section className="relative pt-28 pb-16 overflow-hidden bg-gradient-to-b from-sky-50/60 via-white to-white">
      {/* Background soft ambient radial glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-sky-200/30 via-blue-100/20 to-transparent blur-3xl pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 3 Floating Cards & Pill Row */}
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          {/* Left Floating Card: WhatsApp Alert */}
          <div className="w-full md:w-auto bg-white/95 backdrop-blur-sm px-4 py-3 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow max-w-xs">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <MessageCircle className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" />
              </span>
              <span className="text-xs font-bold text-slate-800">WhatsApp Alert</span>
            </div>
            <div className="text-xs font-bold text-slate-900 leading-snug">
              Get notified on whatsapp
            </div>
            <div className="text-[11px] text-slate-500 leading-tight mt-0.5">
              You&apos;ll get all important updates on your whatsapp
            </div>
          </div>

          {/* Center Pill: AI-Powered Campus Assistant */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50/90 border border-sky-200 text-sky-700 text-xs sm:text-sm font-semibold shadow-2xs hover:bg-sky-100 transition-colors">
            <span className="text-base">🤖</span>
            <span>AI-Powered Campus Assistant</span>
          </div>

          {/* Right Floating Card: Resume Builder */}
          <div className="w-full md:w-auto bg-white/95 backdrop-blur-sm px-4 py-3 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow max-w-xs">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-6 h-6 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 fill-purple-600 text-purple-600" />
              </span>
              <span className="text-xs font-bold text-slate-800">Resume Builder</span>
            </div>
            <div className="text-xs font-bold text-slate-900 leading-snug">
              Build Your Resume
            </div>
            <div className="text-[11px] text-slate-500 leading-tight mt-0.5">
              Our resume builder gives you dynamic options to build better & faster resume that got you hired
            </div>
          </div>
        </div>

        {/* Main Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mt-4">
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-[1.15]">
            Connect{" "}
            <span className="bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 bg-clip-text text-transparent">
              10X Faster.
            </span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-normal">
            One platform connecting students, colleges & employers — faster.
          </p>
        </div>

        {/* Sub-heading with Sparkles */}
        <div className="mt-8 mb-6 text-center">
          <div className="inline-flex items-center gap-2 text-sky-600 font-bold text-base sm:text-lg">
            <Sparkles className="w-4 h-4 fill-sky-500 text-sky-500" />
            <span>What are you looking for?</span>
            <Sparkles className="w-4 h-4 fill-sky-500 text-sky-500" />
          </div>
        </div>

        {/* Live Social Proof Floating Tags (Left and Right) */}
        <div className="relative max-w-5xl mx-auto mb-4 hidden md:flex items-center justify-between text-xs px-2 pointer-events-none">
          {/* Left Social Proof Badge */}
          <div className="bg-white/95 backdrop-blur-sm border border-slate-200/80 rounded-xl px-3 py-2 shadow-sm pointer-events-auto flex items-center gap-2.5">
            <div className="flex -space-x-1.5">
              <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold text-[9px] flex items-center justify-center border border-white">AK</span>
              <span className="w-5 h-5 rounded-full bg-purple-600 text-white font-bold text-[9px] flex items-center justify-center border border-white">PR</span>
              <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold text-[9px] flex items-center justify-center border border-white">SN</span>
            </div>
            <div>
              <div className="font-bold text-slate-800 text-[11px] flex items-center gap-1">
                <span>🔥 142 students matched today</span>
              </div>
              <div className="text-[10px] text-slate-400">Just now • IIT, BITS, VIT</div>
            </div>
          </div>

          {/* Right Social Proof Badge */}
          <div className="bg-white/95 backdrop-blur-sm border border-slate-200/80 rounded-xl px-3 py-2 shadow-sm pointer-events-auto flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
              <Landmark className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-slate-800 text-[11px]">
                Radiant Info shortlisted 8 interns
              </div>
              <div className="text-[10px] text-slate-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                <span>Verified recruiter • 2 days ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Audience Cards Grid */}
        <div className="relative max-w-5xl mx-auto">
          {/* Dashed connecting line across card tops (Desktop) */}
          <div className="hidden lg:block absolute top-9 left-28 right-28 border-t-2 border-dashed border-sky-300 pointer-events-none z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative z-10">
            {/* Card 1: College */}
            <div
              onClick={() => setActiveCard(0)}
              className={`rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between bg-white border cursor-pointer ${
                activeCard === 0
                  ? "border-sky-400 shadow-xl shadow-sky-500/10 ring-2 ring-sky-400/20"
                  : "border-slate-200 hover:border-sky-200 shadow-xs hover:shadow-md"
              }`}
            >
              <div>
                {/* Top Row: Icon + Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-100">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium text-sky-600 border border-sky-200 bg-sky-50/50">
                    Coming Soon
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-1">College</h3>
                <p className="text-xs text-slate-500 mb-5 leading-relaxed min-h-[32px]">
                  Explore colleges, courses,fees, placements & more
                </p>

                {/* Bullets */}
                <ul className="space-y-2.5 mb-6">
                  <li className="flex items-start gap-2 text-xs text-slate-600">
                    <Check className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                    <span>Search by course, location, fees</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs text-slate-600">
                    <Check className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                    <span>Connect directly with colleges</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs text-slate-600">
                    <Check className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                    <span>Improve student placements</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenModal("list-college");
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Join Waitlist</span>
                <Bell className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Card 2: I'm Looking for a Job (Middle Highlighted Card) */}
            <div
              onClick={() => setActiveCard(1)}
              className={`rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between bg-white border cursor-pointer ${
                activeCard === 1
                  ? "border-sky-500 shadow-xl shadow-sky-500/15 ring-2 ring-sky-500/20 md:-translate-y-1"
                  : "border-slate-200 hover:border-sky-200 shadow-xs hover:shadow-md"
              }`}
            >
              <div>
                {/* Top Row: Icon + Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-100">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold text-sky-600 bg-sky-100/70 border border-sky-200">
                    Available Now
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  I&apos;m Looking for a Job
                </h3>
                <p className="text-xs text-slate-500 mb-5 leading-relaxed min-h-[32px]">
                  Upload your resume. We&apos;ll find jobs that fit you.
                </p>

                {/* Bullets & Resume Mini Graphic */}
                <div className="grid grid-cols-5 gap-2 items-center mb-6">
                  <ul className="col-span-3 space-y-2.5">
                    <li className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <Check className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                      <span>Jobs from 1000+ sources</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <Check className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                      <span>AI powered matching</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <Check className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                      <span>WhatsApp & email alerts</span>
                    </li>
                  </ul>

                  {/* Illustrated Mini Resume Graphic */}
                  <div className="col-span-2 bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 shadow-2xs relative">
                    <div className="w-6 h-1.5 bg-sky-500 rounded-full mb-1.5" />
                    <div className="w-12 h-1 bg-slate-200 rounded mb-1" />
                    <div className="w-10 h-1 bg-slate-200 rounded mb-1" />
                    <div className="w-8 h-1 bg-slate-200 rounded" />
                    <div className="absolute right-2 bottom-2 w-6 h-6 rounded-full bg-white shadow-xs border border-slate-200 flex items-center justify-center text-sky-600">
                      <Search className="w-3 h-3 text-sky-500" />
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#opportunities"
                onClick={(e) => e.stopPropagation()}
                className="w-full py-2.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Explore Jobs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Card 3: I'm Hiring */}
            <div
              onClick={() => setActiveCard(2)}
              className={`rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between bg-white border cursor-pointer ${
                activeCard === 2
                  ? "border-sky-400 shadow-xl shadow-sky-500/10 ring-2 ring-sky-400/20"
                  : "border-slate-200 hover:border-sky-200 shadow-xs hover:shadow-md"
              }`}
            >
              <div>
                {/* Top Row: Icon + Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-100">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium text-sky-600 border border-sky-200 bg-sky-50/50">
                    Coming Soon
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-1">I&apos;m Hiring</h3>
                <p className="text-xs text-slate-500 mb-5 leading-relaxed min-h-[32px]">
                  Connect with colleges and find candidates — from students to graduates.
                </p>

                {/* Bullets & Code Graphic */}
                <div className="grid grid-cols-5 gap-2 items-center mb-6">
                  <ul className="col-span-3 space-y-2.5">
                    <li className="flex items-start gap-2 text-xs text-slate-600">
                      <Check className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                      <span>Connect directly with colleges</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-slate-600">
                      <Check className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                      <span>Find the right candidates</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-slate-600">
                      <Check className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                      <span>Simplify your hiring</span>
                    </li>
                  </ul>

                  {/* Illustrated Mini Code Card Graphic */}
                  <div className="col-span-2 bg-sky-50/70 border border-sky-100 rounded-xl p-3 shadow-2xs flex flex-col items-center justify-center h-14">
                    <Code2 className="w-5 h-5 text-sky-500" />
                    <span className="text-[9px] font-mono text-sky-600 mt-1 font-bold">&lt;/&gt;</span>
                  </div>
                </div>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenModal("start-hiring");
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Join Waitlist</span>
                <Bell className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
