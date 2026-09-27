"use client";

import React, { useState } from "react";
import { Zap, ArrowRight, MapPin, Sparkles } from "lucide-react";
import { ModalType } from "./Modal";

interface OpportunitySectionProps {
  onOpenModal: (type: ModalType, data?: any) => void;
}

interface FeedItem {
  id: string;
  title: string;
  tag: string;
  tagColor: string;
  type: string;
  location: string;
  stipend: string;
  desc: string;
  actionText: string;
  logo: React.ReactNode;
}

export default function OpportunitySection({ onOpenModal }: OpportunitySectionProps) {
  const [activeTab, setActiveTab] = useState<string>("All");

  const tabs = ["All", "Colleges", "Jobs", "Internships", "Freelance", "Part-time"];

  const feedItems: FeedItem[] = [
    {
      id: "item-1",
      title: "IIM Bangalore",
      tag: "Top College",
      tagColor: "bg-purple-50 text-purple-700 border-purple-200",
      type: "Colleges",
      location: "Bengaluru",
      stipend: "₹ 3L+",
      desc: "India's premier management institute with global exposure...",
      actionText: "View Details",
      logo: (
        <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center font-bold text-xs border border-red-200">
          IIMB
        </div>
      ),
    },
    {
      id: "item-2",
      title: "Product Intern",
      tag: "Internship",
      tagColor: "bg-sky-50 text-sky-700 border-sky-200",
      type: "Internships",
      location: "Bengaluru • Hybrid",
      stipend: "₹ 35K/mo",
      desc: "Work on real products, learn from top engineers and build...",
      actionText: "Apply Now",
      logo: (
        <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-black text-sm border border-blue-200">
          G
        </div>
      ),
    },
    {
      id: "item-3",
      title: "Marketing Gig",
      tag: "Freelance",
      tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      type: "Freelance",
      location: "Remote • Freelance",
      stipend: "₹ 10K - ₹ 25K",
      desc: "Create content and help with social media campaigns for...",
      actionText: "View Details",
      logo: (
        <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center font-black text-xs border border-slate-300">
          N
        </div>
      ),
    },
  ];

  const filteredItems = feedItems.filter((item) => {
    if (activeTab === "All") return true;
    return item.type === activeTab;
  });

  return (
    <section id="opportunities" className="py-20 bg-gradient-to-b from-white via-sky-50/20 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading and 3 Step Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 inline-block" />
              <span>01 • OPPORTUNITY DISCOVERY</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Stop searching.
              <br />
              <span className="text-sky-600">Start getting matched.</span>
            </h2>

            {/* Description */}
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Tell CampusPe your skills, preferences and goals. We continuously monitor company career pages and job sources, find opportunities that match you, and notify you when they appear.
            </p>

            {/* 3 Process Step Cards */}
            <div className="space-y-3 pt-2">
              {/* Step 01 */}
              <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-sky-300 transition-all">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-400">01</span>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      Set your preferences
                    </h3>
                  </div>
                  <span className="text-[10px] font-semibold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-md border border-sky-100">
                    Smart Profile
                  </span>
                </div>
                <p className="text-xs text-slate-500 pl-6">
                  Tell us what you&apos;re looking for, from colleges and courses to jobs, internships and gigs.
                </p>
              </div>

              {/* Step 02 */}
              <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-sky-300 transition-all">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-400">02</span>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      Discover relevant opportunities
                    </h3>
                  </div>
                  <span className="text-[10px] font-semibold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-md border border-sky-100">
                    AI Ranked
                  </span>
                </div>
                <p className="text-xs text-slate-500 pl-6">
                  Explore colleges and career opportunities matched to your profile, interests and goals
                </p>
              </div>

              {/* Step 03 */}
              <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-sky-300 transition-all">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-400">03</span>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      Get notified when something fits
                    </h3>
                  </div>
                  <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                    Instant Alerts
                  </span>
                </div>
                <p className="text-xs text-slate-500 pl-6">
                  Get notified when a relevant college or new opportunity is found, so you can act early.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={() => onOpenModal("sign-up")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs shadow-sm hover:shadow-md hover:shadow-sky-500/25 active:scale-95 transition-all cursor-pointer"
              >
                <span>Explore opportunities</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: CampusPe Opportunity Feed Container */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-200/90 relative">
              {/* Card Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-sky-500 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                    <Zap className="w-4 h-4 fill-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900">
                      CampusPe Opportunity Feed
                    </h3>
                    <p className="text-[11px] text-slate-400">Colleges & opportunities matched to you</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-[11px] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>12 new matches today</span>
                </div>
              </div>

              {/* Category Filter Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto py-3 scrollbar-none">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                      activeTab === tab
                        ? "bg-sky-600 text-white shadow-2xs font-semibold"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Feed List Items */}
              <div className="space-y-3 mt-1">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-sky-200 hover:shadow-xs transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="flex items-start gap-3">
                      <div className="shrink-0">{item.logo}</div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                            {item.title}
                          </h4>
                          <span
                            className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${item.tagColor}`}
                          >
                            {item.tag}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-2 text-[11px] text-slate-500 mt-0.5">
                          <span className="flex items-center gap-0.5">
                            <MapPin className="w-3 h-3 text-slate-400" />
                            {item.location}
                          </span>
                          <span>•</span>
                          <span className="font-bold text-slate-700">{item.stipend}</span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center justify-end">
                      <button
                        onClick={() =>
                          onOpenModal(
                            item.tag === "Top College" ? "list-college" : "apply-job",
                            { title: item.title }
                          )
                        }
                        className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-sky-600 hover:bg-sky-500 text-white shadow-2xs transition-all cursor-pointer"
                      >
                        {item.actionText}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Footer Info */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
                <button
                  onClick={() => onOpenModal("sign-up")}
                  className="font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1 cursor-pointer"
                >
                  <span>View all matched opportunities</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
                <span className="text-slate-400">Curated for you • Updated daily</span>
              </div>
            </div>

            {/* Handwritten style annotation below */}
            <div className="text-center mt-2">
              <span className="text-xs text-purple-600 italic font-medium">
                ⤷ A mix of colleges, jobs,
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
