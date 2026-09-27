"use client";

import React, { useState } from "react";
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Briefcase,
  MapPin,
  Building,
  TrendingUp,
  Filter,
  Check,
} from "lucide-react";
import { ModalType } from "./Modal";

interface OpportunitySectionProps {
  onOpenModal: (type: ModalType, data?: any) => void;
}

interface Job {
  id: string;
  title: string;
  company: string;
  category: "Design" | "Dev" | "Marketing" | "Internship";
  type: "Full-time" | "Internship";
  location: string;
  ctc: string;
  match: string;
  logoBg: string;
  logoText: string;
}

export default function OpportunitySection({ onOpenModal }: OpportunitySectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [appliedJobs, setAppliedJobs] = useState<string[]>([]);

  const jobs: Job[] = [
    {
      id: "job-1",
      title: "UI/UX Product Designer",
      company: "Razorpay",
      category: "Design",
      type: "Full-time",
      location: "Bangalore (Hybrid)",
      ctc: "₹12 - 16 LPA",
      match: "98% Match",
      logoBg: "bg-blue-600",
      logoText: "R",
    },
    {
      id: "job-2",
      title: "Frontend React Engineer",
      company: "Flipkart",
      category: "Dev",
      type: "Full-time",
      location: "Bangalore / Remote",
      ctc: "₹14 - 20 LPA",
      match: "95% Match",
      logoBg: "bg-yellow-500",
      logoText: "F",
    },
    {
      id: "job-3",
      title: "Product Analyst Intern",
      company: "Swiggy",
      category: "Internship",
      type: "Internship",
      location: "Bangalore",
      ctc: "₹45,000 / month",
      match: "94% Match",
      logoBg: "bg-orange-500",
      logoText: "S",
    },
    {
      id: "job-4",
      title: "Growth & Marketing Lead",
      company: "Zepto",
      category: "Marketing",
      type: "Full-time",
      location: "Mumbai",
      ctc: "₹10 - 14 LPA",
      match: "92% Match",
      logoBg: "bg-purple-600",
      logoText: "Z",
    },
    {
      id: "job-5",
      title: "Backend Go/Java Developer",
      company: "PhonePe",
      category: "Dev",
      type: "Full-time",
      location: "Pune / Remote",
      ctc: "₹16 - 22 LPA",
      match: "96% Match",
      logoBg: "bg-indigo-600",
      logoText: "P",
    },
  ];

  const categories = ["All", "Design", "Dev", "Marketing", "Internship", "Full-time"];

  const filteredJobs = jobs.filter((job) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Full-time") return job.type === "Full-time";
    if (activeCategory === "Internship") return job.type === "Internship";
    return job.category === activeCategory;
  });

  const handleApply = (job: Job) => {
    onOpenModal("apply-job", {
      title: job.title,
      company: job.company,
      location: job.location,
      ctc: job.ctc,
      match: job.match,
    });
  };

  return (
    <section id="opportunities" className="py-24 relative section-gradient-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 text-sky-800 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>AI Match Engine</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Stop searching.
              <br />
              <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                Start getting matched.
              </span>
            </h2>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Built to match your skills, preferences, and career aspirations. No endless forms,
              unresponsive portals, or recruiter ghosting. CampusPe matches you directly with verified
              hiring teams.
            </p>

            {/* Feature List Cards */}
            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-2xl bg-white/90 border border-slate-200/80 shadow-xs hover:border-sky-300 hover:shadow-md transition-all group">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-slate-900 text-sm group-hover:text-sky-600 transition-colors">
                    Tailored job recommendations
                  </div>
                  <span className="text-[11px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-100">
                    95% Match
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Matched algorithmically against required tech stacks and company culture.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/90 border border-slate-200/80 shadow-xs hover:border-sky-300 hover:shadow-md transition-all group">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-slate-900 text-sm group-hover:text-sky-600 transition-colors">
                    Resume & portfolio optimization
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                    Verified ATS
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Ensure your profile scores high in applicant tracking systems automatically.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/90 border border-slate-200/80 shadow-xs hover:border-sky-300 hover:shadow-md transition-all group">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-slate-900 text-sm group-hover:text-sky-600 transition-colors">
                    Direct recruiter interview invites
                  </div>
                  <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100">
                    Fast-track
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Recruiters invite you directly for assessments and technical interviews.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#resume-parser"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm shadow-md shadow-sky-500/25 active:scale-95 transition-all"
              >
                <span>Upload Resume & Get Matched</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Opportunity Feed Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-2xl shadow-sky-500/10 border border-slate-200/90 relative">
              {/* Top Header of Card */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-sky-500 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900">
                      CampusPe Opportunity Feed
                    </h3>
                    <p className="text-xs text-slate-500">Live curated opportunities</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200/60 rounded-full text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>12 New Matches Today</span>
                </div>
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-none">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                      activeCategory === cat
                        ? "bg-sky-600 text-white shadow-sm"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Job Feed List */}
              <div className="space-y-3.5 mt-2">
                {filteredJobs.map((job) => (
                  <div
                    key={job.id}
                    className="p-4 rounded-2xl border border-slate-100 bg-slate-50/60 hover:bg-white hover:border-sky-300 hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
                  >
                    <div className="flex items-start gap-3.5">
                      <div
                        className={`w-11 h-11 rounded-2xl ${job.logoBg} text-white font-black text-base flex items-center justify-center shrink-0 shadow-xs`}
                      >
                        {job.logoText}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-slate-900 text-sm group-hover:text-sky-600 transition-colors">
                            {job.title}
                          </h4>
                          <span className="text-[10px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md border border-sky-100">
                            {job.match}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 mt-1">
                          <span className="font-medium text-slate-700 flex items-center gap-1">
                            <Building className="w-3 h-3 text-slate-400" />
                            {job.company}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-slate-400" />
                            {job.location}
                          </span>
                          <span>•</span>
                          <span className="font-semibold text-emerald-700">{job.ctc}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-end">
                      <button
                        onClick={() => handleApply(job)}
                        className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-bold bg-sky-600 hover:bg-sky-500 text-white shadow-xs hover:shadow-md hover:shadow-sky-500/20 active:scale-95 transition-all cursor-pointer"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Footer Notice */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
                <span className="flex items-center gap-1.5 text-slate-600">
                  <Sparkles className="w-3.5 h-3.5 text-sky-500" />
                  Showing personalized matches based on your tech stack
                </span>
                <button
                  onClick={() => onOpenModal("sign-up")}
                  className="font-bold text-sky-600 hover:text-sky-700 cursor-pointer"
                >
                  View all 48 opportunities &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
