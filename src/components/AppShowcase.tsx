"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  GraduationCap,
  Briefcase,
  Search,
  Bell,
  Download,
  LayoutDashboard,
} from "lucide-react";

const screens = [
  {
    id: 0,
    title: "Hero — Connect 10X Faster",
    tagline: "AI-Powered Placement Assistant",
    description: "The CampusPe landing experience for students, colleges & employers.",
    badge: "Students",
    badgeColor: "bg-sky-100 text-sky-700 border-sky-200",
    icon: Briefcase,
    src: "/slice_1.png",
  },
  {
    id: 1,
    title: "AI Match Engine & Opportunity Feed",
    tagline: "Stop searching. Start getting matched.",
    description: "Curated job opportunities matched algorithmically to your tech stack.",
    badge: "AI Matching",
    badgeColor: "bg-indigo-100 text-indigo-700 border-indigo-200",
    icon: Sparkles,
    src: "/slice_2.png",
  },
  {
    id: 2,
    title: "Smart AI Resume Parser",
    tagline: "Upload your resume. Find jobs that fit.",
    description: "AI extracts your skills and matches you instantly to 1,000+ opportunities.",
    badge: "ATS AI",
    badgeColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
    icon: Search,
    src: "/slice_3.png",
  },
  {
    id: 3,
    title: "College & Employer Dashboard",
    tagline: "Get Discovered by Students and Recruiters.",
    description: "Colleges get recruiter discovery. Employers stop running manual campus drives.",
    badge: "Colleges & Employers",
    badgeColor: "bg-purple-100 text-purple-700 border-purple-200",
    icon: GraduationCap,
    src: "/slice_4.png",
  },
  {
    id: 4,
    title: "Mobile App Showcase",
    tagline: "Checkout Our App Interface Look",
    description: "Five real app screens showing the full student journey on mobile.",
    badge: "Mobile App",
    badgeColor: "bg-amber-100 text-amber-700 border-amber-200",
    icon: LayoutDashboard,
    src: "/slice_5.png",
  },
  {
    id: 5,
    title: "Download App & FAQ",
    tagline: "Download on iOS & Android",
    description: "Available on App Store & Google Play. Got questions? The FAQ has answers.",
    badge: "Download",
    badgeColor: "bg-teal-100 text-teal-700 border-teal-200",
    icon: Download,
    src: "/slice_6.png",
  },
  {
    id: 6,
    title: "Footer — Full Platform Map",
    tagline: "Everything in one place",
    description: "Links for Students, Colleges, Employers and Company info in a clean footer.",
    badge: "Site Map",
    badgeColor: "bg-slate-100 text-slate-700 border-slate-200",
    icon: Bell,
    src: "/slice_7.png",
  },
];

export default function AppShowcase() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (idx: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setActiveSlide(idx);
      setTimeout(() => setIsAnimating(false), 400);
    },
    [isAnimating]
  );

  const handlePrev = useCallback(() => {
    goTo(activeSlide === 0 ? screens.length - 1 : activeSlide - 1);
  }, [activeSlide, goTo]);

  const handleNext = useCallback(() => {
    goTo(activeSlide === screens.length - 1 ? 0 : activeSlide + 1);
  }, [activeSlide, goTo]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev === screens.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      else if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handlePrev, handleNext]);

  const current = screens[activeSlide];
  const Icon = current.icon;

  return (
    <section
      id="app-showcase"
      className="py-24 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 20% 50%, rgba(56,189,248,0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(99,102,241,0.07) 0%, transparent 50%), #f8fafc",
      }}
    >
      <div className="absolute top-0 left-1/4 w-96 h-64 bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-64 bg-indigo-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 text-sky-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Platform Preview</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            See CampusPe{" "}
            <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              in Action
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto mt-4 font-normal">
            Explore every section of the CampusPe platform — from AI-powered job matching to mobile
            app download and college discovery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-4 space-y-5">
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-lg shadow-slate-200/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold border ${current.badgeColor}`}
                >
                  {current.badge}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 leading-snug mb-2">
                {current.title}
              </h3>
              <p className="text-xs text-sky-600 font-semibold mb-3 italic">
                &ldquo;{current.tagline}&rdquo;
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">{current.description}</p>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span>
                  Screen{" "}
                  <span className="font-bold text-slate-700">{activeSlide + 1}</span> of{" "}
                  {screens.length}
                </span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous"
                    className="w-7 h-7 rounded-full flex items-center justify-center bg-slate-100 hover:bg-sky-100 hover:text-sky-600 transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next"
                    className="w-7 h-7 rounded-full flex items-center justify-center bg-slate-100 hover:bg-sky-100 hover:text-sky-600 transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {screens.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => goTo(idx)}
                  aria-label={`Go to ${s.title}`}
                  className={`relative rounded-xl overflow-hidden cursor-pointer border-2 transition-all duration-200 ${
                    idx === activeSlide
                      ? "border-sky-500 shadow-md shadow-sky-500/20 scale-105"
                      : "border-transparent hover:border-sky-300 opacity-60 hover:opacity-90"
                  }`}
                  style={{ aspectRatio: "16/9" }}
                >
                  <img
                    src={s.src}
                    alt={s.title}
                    className="w-full h-full object-cover object-top"
                  />
                </button>
              ))}
            </div>
          </div>

          <div
            className="lg:col-span-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-sky-500/10 border border-slate-200/80 bg-white">
              <div className="flex items-center gap-3 px-4 py-3 bg-slate-50 border-b border-slate-200/80">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-amber-400" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="flex-1 mx-3">
                  <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-1.5 border border-slate-200 text-xs text-slate-500 max-w-sm mx-auto">
                    <svg className="w-3 h-3 text-emerald-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <span className="font-medium text-slate-600">campuspe.com</span>
                    <span className="text-slate-300 truncate text-[10px]">
                      {activeSlide === 0 ? "" : activeSlide === 1 ? "#opportunities" : activeSlide === 2 ? "#resume-parser" : activeSlide === 3 ? "#colleges" : activeSlide === 4 ? "#app-showcase" : activeSlide === 5 ? "#download" : "#footer"}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-400">
                  <span className={`w-2 h-2 rounded-full ${isPaused ? "bg-amber-400" : "bg-emerald-400 animate-pulse"}`} />
                  {isPaused ? "Paused" : "Auto"}
                </div>
              </div>

              <div className="relative overflow-hidden bg-slate-100" style={{ aspectRatio: "16/9" }}>
                {screens.map((s, idx) => (
                  <img
                    key={s.id}
                    src={s.src}
                    alt={s.title}
                    className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-500 ${
                      idx === activeSlide
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-[1.02] pointer-events-none"
                    }`}
                  />
                ))}

                <button
                  onClick={handlePrev}
                  aria-label="Previous screen"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm shadow-md border border-slate-200/60 flex items-center justify-center text-slate-600 hover:text-sky-600 hover:scale-110 active:scale-95 transition-all z-10 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next screen"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm shadow-md border border-slate-200/60 flex items-center justify-center text-slate-600 hover:text-sky-600 hover:scale-110 active:scale-95 transition-all z-10 cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-1.5">
              {screens.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === activeSlide
                      ? "flex-1 bg-sky-500"
                      : "w-5 bg-slate-200 hover:bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
