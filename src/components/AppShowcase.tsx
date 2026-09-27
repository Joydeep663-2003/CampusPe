"use client";

import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Briefcase,
  Search,
  Bell,
  User,
  Star,
  CheckCircle,
  MapPin,
  Sparkles,
} from "lucide-react";

export default function AppShowcase() {
  const [activeSlide, setActiveSlide] = useState(2); // Center phone active by default

  const screens = [
    {
      id: 0,
      title: "College Discovery",
      tagline: "Explore 500+ Top Institutions",
      color: "from-sky-500 to-blue-600",
      content: (
        <div className="p-3.5 space-y-3 text-slate-800 text-left">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-900">Explore Colleges</span>
            <Search className="w-3.5 h-3.5 text-slate-400" />
          </div>
          <div className="rounded-xl overflow-hidden shadow-xs border border-slate-100">
            <img
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=300&h=180&fit=crop"
              alt="Campus"
              className="w-full h-20 object-cover"
            />
            <div className="p-2 bg-white">
              <div className="text-[11px] font-bold text-slate-900">IIT Bombay</div>
              <div className="text-[9px] text-slate-500 flex items-center gap-1">
                <MapPin className="w-2.5 h-2.5 text-sky-500" /> Mumbai • NIRF #3
              </div>
            </div>
          </div>
          <div className="p-2 bg-sky-50 rounded-xl border border-sky-100 flex items-center justify-between">
            <div>
              <div className="text-[10px] font-bold text-sky-900">RV College of Engg</div>
              <div className="text-[8px] text-sky-600">Bangalore • 96% Placed</div>
            </div>
            <span className="text-[9px] font-bold text-white bg-sky-600 px-2 py-0.5 rounded-full">
              Apply
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 1,
      title: "Student Portfolio",
      tagline: "AI-Verified Digital Resume",
      color: "from-indigo-500 to-purple-600",
      content: (
        <div className="p-3.5 space-y-2.5 text-slate-800 text-left">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-indigo-500 text-white font-bold text-xs flex items-center justify-center">
              AK
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">Aarav Kapoor</div>
              <div className="text-[9px] text-slate-500">CS & Engineering • 2026 Batch</div>
            </div>
          </div>
          <div className="p-2 bg-slate-50 rounded-xl border border-slate-100">
            <div className="flex justify-between text-[10px] font-semibold text-slate-700 mb-1">
              <span>ATS Score</span>
              <span className="text-emerald-600 font-bold">96 / 100</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-1.5">
              <div className="bg-emerald-500 h-1.5 rounded-full w-[96%]" />
            </div>
          </div>
          <div className="space-y-1">
            <span className="text-[9px] font-bold text-slate-500 uppercase">Verified Skills</span>
            <div className="flex flex-wrap gap-1">
              <span className="text-[8px] px-1.5 py-0.5 bg-indigo-50 text-indigo-700 rounded-md font-semibold">
                React.js
              </span>
              <span className="text-[8px] px-1.5 py-0.5 bg-indigo-50 text-indigo-700 rounded-md font-semibold">
                TypeScript
              </span>
              <span className="text-[8px] px-1.5 py-0.5 bg-indigo-50 text-indigo-700 rounded-md font-semibold">
                Python
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "AI Opportunity Feed",
      tagline: "Instant Placement Matches",
      color: "from-sky-500 to-blue-600",
      content: (
        <div className="p-3.5 space-y-2.5 text-slate-800 text-left">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-[11px] font-bold text-sky-600">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Recommended Jobs</span>
            </div>
            <span className="text-[8px] font-bold bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded-md">
              Top 1%
            </span>
          </div>
          <div className="p-2.5 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-sm space-y-1">
            <span className="text-[9px] font-semibold uppercase tracking-wider text-sky-100">
              Razorpay • Tech
            </span>
            <div className="text-xs font-bold leading-tight">Software Engineer (L2)</div>
            <div className="text-[10px] text-sky-100">₹18-24 LPA • Bangalore</div>
            <div className="pt-1.5 flex items-center justify-between">
              <span className="text-[9px] font-bold bg-white/20 px-2 py-0.5 rounded-full">
                98% Match
              </span>
              <span className="text-[9px] font-bold bg-white text-blue-700 px-2 py-0.5 rounded-full">
                Apply Now
              </span>
            </div>
          </div>
          <div className="p-2 bg-slate-50 rounded-xl border border-slate-100 space-y-0.5">
            <div className="text-[10px] font-bold text-slate-900">Flipkart • SDE Intern</div>
            <div className="text-[9px] text-slate-500">₹60k/mo • Remote • 95% Match</div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Recruiter Chat",
      tagline: "Direct Hiring Conversations",
      color: "from-emerald-500 to-teal-600",
      content: (
        <div className="p-3.5 space-y-2.5 text-slate-800 text-left">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-900">Interview Invites</span>
            <Bell className="w-3.5 h-3.5 text-sky-600" />
          </div>
          <div className="p-2 bg-teal-50 rounded-xl border border-teal-100 space-y-1">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-teal-500"></div>
              <span className="text-[10px] font-bold text-slate-900">Google Campus Drive</span>
            </div>
            <p className="text-[9px] text-slate-600 leading-tight">
              &quot;Congratulations! You are shortlisted for the technical interview on Friday.&quot;
            </p>
          </div>
          <div className="p-2 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
            <div className="text-[10px] font-bold text-slate-800">Microsoft Offer Letter</div>
            <p className="text-[8px] text-slate-500">Document generated and ready for review.</p>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "Drive Calendar",
      tagline: "Real-time Assessment Tracker",
      color: "from-amber-500 to-orange-600",
      content: (
        <div className="p-3.5 space-y-2.5 text-slate-800 text-left">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-900">Upcoming Drives</span>
            <span className="text-[9px] font-bold text-sky-600">October 2026</span>
          </div>
          <div className="p-2 bg-amber-50 rounded-xl border border-amber-100 space-y-0.5">
            <span className="text-[8px] font-bold text-amber-700 uppercase">Tomorrow, 10:00 AM</span>
            <div className="text-[10px] font-bold text-slate-900">Amazon Online Assessment</div>
            <div className="text-[8px] text-slate-500">90 mins • DSA & System Design</div>
          </div>
          <div className="p-2 bg-slate-50 rounded-xl border border-slate-100 space-y-0.5">
            <span className="text-[8px] font-bold text-slate-500 uppercase">Oct 3, 2:00 PM</span>
            <div className="text-[10px] font-bold text-slate-900">Atlassian Hackathon</div>
          </div>
        </div>
      ),
    },
  ];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? screens.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === screens.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="app-showcase" className="py-24 bg-gradient-to-b from-white via-sky-50/30 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Checkout Our{" "}
          <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
            App Interface Look
          </span>
        </h2>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto mt-4 font-normal">
          Experience smooth college discovery, real-time application tracking, student networking, and
          interview updates on the go with the CampusPe mobile application.
        </p>

        {/* 5 Screen Phone Carousel */}
        <div className="relative mt-14 py-8">
          <div className="flex items-center justify-center gap-3 sm:gap-6 overflow-x-hidden px-4">
            {screens.map((screen, idx) => {
              const isCenter = idx === activeSlide;
              const isAdjacent = Math.abs(idx - activeSlide) === 1;

              return (
                <div
                  key={screen.id}
                  onClick={() => setActiveSlide(idx)}
                  className={`transition-all duration-500 cursor-pointer shrink-0 ${
                    isCenter
                      ? "scale-105 z-30 opacity-100 shadow-2xl shadow-sky-500/25 ring-2 ring-sky-500/30"
                      : isAdjacent
                      ? "scale-90 z-20 opacity-70 hidden sm:block hover:opacity-90"
                      : "scale-75 z-10 opacity-40 hidden lg:block"
                  } w-[210px] sm:w-[240px] md:w-[260px] h-[440px] sm:h-[480px] bg-slate-900 rounded-[42px] p-3 border-4 border-slate-800 flex flex-col justify-between relative shadow-xl`}
                >
                  {/* Dynamic Island / Notch */}
                  <div className="w-20 h-4 bg-slate-950 rounded-full mx-auto relative z-20 flex items-center justify-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                    <span className="w-1 h-1 rounded-full bg-sky-500/80" />
                  </div>

                  {/* Screen Content Wrapper */}
                  <div className="w-full h-full bg-white rounded-[32px] overflow-hidden flex flex-col justify-between mt-2 pt-1 border border-slate-100">
                    {/* Phone Status Bar */}
                    <div className="px-4 py-1.5 flex justify-between items-center text-[10px] font-bold text-slate-800">
                      <span>9:41</span>
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-slate-800" />
                        <span className="text-[9px]">5G</span>
                      </div>
                    </div>

                    {/* Main Screen Body */}
                    <div className="flex-1 overflow-hidden">{screen.content}</div>

                    {/* Phone Bottom Navigation Bar */}
                    <div className="py-2.5 px-4 bg-slate-50 border-t border-slate-100 flex items-center justify-around text-slate-400">
                      <GraduationCap className="w-4 h-4 text-sky-600" />
                      <Briefcase className="w-4 h-4" />
                      <Search className="w-4 h-4" />
                      <User className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Phone Bottom Bar Indicator */}
                  <div className="w-24 h-1 bg-slate-700 rounded-full mx-auto mt-2" />
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-slate-200 flex items-center justify-center text-slate-700 hover:text-sky-600 hover:scale-110 active:scale-95 transition-all z-40 cursor-pointer"
            aria-label="Previous screen"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-slate-200 flex items-center justify-center text-slate-700 hover:text-sky-600 hover:scale-110 active:scale-95 transition-all z-40 cursor-pointer"
            aria-label="Next screen"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dot Pagination */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {screens.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeSlide === idx ? "w-8 bg-sky-600" : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to screen ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
