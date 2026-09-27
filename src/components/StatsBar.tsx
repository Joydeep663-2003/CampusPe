"use client";

import React from "react";
import { Users, Landmark, Briefcase, ShieldCheck } from "lucide-react";

export default function StatsBar() {
  const stats = [
    {
      value: "800+",
      label: "Students",
      icon: Users,
      color: "text-purple-600",
      bg: "bg-purple-50",
      border: "border-purple-100",
    },
    {
      value: "130+",
      label: "Colleges",
      icon: Landmark,
      color: "text-sky-600",
      bg: "bg-sky-50",
      border: "border-sky-100",
    },
    {
      value: "100+",
      label: "Jobs & Internships",
      icon: Briefcase,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-100",
    },
    {
      value: "100%",
      label: "Safe & Trusted",
      icon: ShieldCheck,
      color: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-100",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 relative z-20">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200/80">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`flex items-center gap-3 justify-center sm:justify-start ${
                  idx > 1 ? "pt-3 sm:pt-0" : ""
                } ${idx > 0 ? "sm:pl-6" : ""}`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${stat.bg} ${stat.color} border ${stat.border}`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-slate-500">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
