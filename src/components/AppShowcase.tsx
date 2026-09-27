"use client";

import React, { useState } from "react";
import {
  Search,
  Bell,
  GraduationCap,
  Briefcase,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export default function AppShowcase() {
  const [activeIdx, setActiveIdx] = useState(2); // center phone default active

  const phoneScreens = [
    {
      id: "screen-1",
      title: "Discover Opportunities",
      user: "Hi, Amit Kumar",
      badge: "Student",
      content: (
        <div className="p-3 text-slate-800 text-xs space-y-2.5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[10px] text-slate-400">Welcome back</div>
              <div className="font-bold text-xs">Hi, Amit Kumar</div>
            </div>
            <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center text-sky-600">
              <Bell className="w-3 h-3" />
            </div>
          </div>
          <div className="bg-sky-50 p-2.5 rounded-xl border border-sky-100 text-[11px]">
            <span className="font-bold text-sky-700 block">See how you can find a job quickly!</span>
            <span className="text-[10px] text-slate-500">AI resume match active</span>
          </div>
          <div className="flex items-center gap-1.5 bg-slate-100 px-2.5 py-1.5 rounded-lg text-[10px] text-slate-400">
            <Search className="w-3 h-3" /> Search jobs, internships...
          </div>
          <div>
            <div className="text-[10px] font-bold text-slate-700 mb-1.5">Recommended Jobs</div>
            <div className="p-2 bg-white rounded-lg border border-slate-100 shadow-2xs space-y-1">
              <div className="font-bold text-[11px] text-slate-900">Software Engineer</div>
              <div className="text-[9px] text-slate-400">Swiggy • Bangalore • ₹14 LPA</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "screen-2",
      title: "Post a Job",
      user: "Recruiter Portal",
      badge: "Recruiter",
      content: (
        <div className="p-3 text-slate-800 text-xs space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="font-bold text-xs">Post a Job</div>
            <span className="text-[9px] bg-emerald-50 text-emerald-600 font-bold px-1.5 py-0.5 rounded">Active</span>
          </div>
          <div className="space-y-1.5">
            <div className="text-[10px] font-medium text-slate-600">Role Title</div>
            <div className="p-1.5 bg-slate-50 rounded border border-slate-200 text-[10px] text-slate-800">
              Frontend Developer Intern
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="text-[10px] font-medium text-slate-600">Eligible Campuses</div>
            <div className="p-1.5 bg-slate-50 rounded border border-slate-200 text-[10px] text-slate-800">
              IIT, NIT, BITS + 120 more
            </div>
          </div>
          <div className="bg-sky-600 text-white text-center py-1.5 rounded-lg text-[10px] font-bold mt-2">
            Publish Drive
          </div>
        </div>
      ),
    },
    {
      id: "screen-3",
      title: "Campus Feed",
      user: "Unified Ecosystem",
      badge: "Explore",
      content: (
        <div className="p-3 text-slate-800 text-xs space-y-2.5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[10px] text-slate-400">CampusPe Ecosystem</div>
              <div className="font-bold text-xs">Trending Campuses</div>
            </div>
            <div className="w-5 h-5 rounded-full bg-sky-500 text-white flex items-center justify-center text-[10px] font-bold">
              CP
            </div>
          </div>
          <div className="flex gap-1 overflow-x-auto text-[9px]">
            <span className="bg-sky-600 text-white px-2 py-0.5 rounded-full">Colleges</span>
            <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">Jobs</span>
            <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">Internships</span>
          </div>
          <div className="bg-white rounded-xl border border-slate-100 p-2 shadow-2xs space-y-1">
            <div className="w-full h-16 bg-slate-200 rounded-lg flex items-center justify-center text-slate-400 text-[10px]">
              Victory College Campus
            </div>
            <div className="font-bold text-[10px] text-slate-900">Victory College of Engg</div>
            <div className="text-[9px] text-slate-400">B.Tech • Mechanical & CSE</div>
          </div>
        </div>
      ),
    },
    {
      id: "screen-4",
      title: "My Applications",
      user: "Status Tracker",
      badge: "Applications",
      content: (
        <div className="p-3 text-slate-800 text-xs space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="font-bold text-xs">My Applications</div>
            <span className="text-[9px] text-sky-600 font-bold">4 Active</span>
          </div>
          <div className="space-y-2">
            <div className="p-2 bg-slate-50 rounded-lg border border-slate-100 text-[10px] space-y-1">
              <div className="flex justify-between font-bold">
                <span>Google India</span>
                <span className="text-emerald-600">Interviewing</span>
              </div>
              <div className="text-slate-400 text-[9px]">Round 2 Tech • Tomorrow 3 PM</div>
            </div>
            <div className="p-2 bg-slate-50 rounded-lg border border-slate-100 text-[10px] space-y-1">
              <div className="flex justify-between font-bold">
                <span>Razorpay</span>
                <span className="text-sky-600">Under Review</span>
              </div>
              <div className="text-slate-400 text-[9px]">Applied 2 days ago</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "screen-5",
      title: "College Directory",
      user: "Institutions",
      badge: "Colleges",
      content: (
        <div className="p-3 text-slate-800 text-xs space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="font-bold text-xs">Top Rated Colleges</div>
            <span className="text-[9px] text-slate-400">NIRF 2026</span>
          </div>
          <div className="space-y-1.5">
            <div className="p-2 bg-white rounded-lg border border-slate-100 shadow-2xs text-[10px]">
              <div className="font-bold text-slate-900">IIT Bombay</div>
              <div className="text-slate-400 text-[9px]">Avg CTC ₹22.5 LPA • 100% Placement</div>
            </div>
            <div className="p-2 bg-white rounded-lg border border-slate-100 shadow-2xs text-[10px]">
              <div className="font-bold text-slate-900">BITS Pilani</div>
              <div className="text-slate-400 text-[9px]">Avg CTC ₹19.8 LPA • Verified Partner</div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="app-showcase" className="py-20 bg-slate-50/40 relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-sky-600 tracking-tight mb-4">
          Checkout Our App Interface Look
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12">
          Experience the power of a unified campus ecosystem right in your pocket.{" "}
          <strong className="text-slate-800">CampusPe</strong> offers a tailored interface for every user: students can explore trending courses, colleges can showcase their campus life, and companies can post job vacancies directly to a pool of qualified candidates.
        </p>

        {/* 5 Smartphone Carousel Frames */}
        <div className="relative max-w-6xl mx-auto overflow-hidden py-4">
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            {phoneScreens.map((screen, idx) => {
              const isCenter = idx === activeIdx;
              return (
                <div
                  key={screen.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`transition-all duration-300 cursor-pointer shrink-0 ${
                    isCenter
                      ? "scale-105 sm:scale-110 z-20 shadow-2xl shadow-sky-500/20"
                      : "scale-90 sm:scale-95 opacity-60 hover:opacity-90 z-10 hidden md:block"
                  }`}
                  style={{ width: "230px" }}
                >
                  {/* Smartphone Frame */}
                  <div className="rounded-[36px] p-2.5 bg-slate-900 shadow-xl border-4 border-slate-800 relative">
                    {/* Dynamic Island / Notch */}
                    <div className="w-16 h-3.5 bg-black rounded-full mx-auto mb-1 flex items-center justify-end px-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-800 inline-block" />
                    </div>

                    {/* Phone Screen Glass */}
                    <div className="bg-white rounded-[26px] overflow-hidden min-h-[360px] flex flex-col justify-between">
                      {screen.content}

                      {/* Phone Home Bar */}
                      <div className="w-16 h-1 bg-slate-300 rounded-full mx-auto mb-2" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Nav arrows on mobile */}
          <button
            onClick={() => setActiveIdx((prev) => (prev > 0 ? prev - 1 : phoneScreens.length - 1))}
            className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-slate-700"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => setActiveIdx((prev) => (prev < phoneScreens.length - 1 ? prev + 1 : 0))}
            className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-slate-700"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* 5 Dot Pagination */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {phoneScreens.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`rounded-full transition-all duration-200 cursor-pointer ${
                idx === activeIdx ? "w-6 h-2 bg-sky-600" : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
