"use client";

import React from "react";
import { GraduationCap, Users, Building, ShieldCheck } from "lucide-react";

export default function StatsBar() {
  const stats = [
    {
      value: "500+",
      label: "Colleges",
      icon: GraduationCap,
      color: "text-purple-600",
      bg: "bg-purple-50",
      border: "border-purple-100",
    },
    {
      value: "10k+",
      label: "Students",
      icon: Users,
      color: "text-sky-600",
      bg: "bg-sky-50",
      border: "border-sky-100",
    },
    {
      value: "100+",
      label: "Active Recruiters",
      icon: Building,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-100",
    },
    {
      value: "100%",
      label: "Verified Profiles",
      icon: ShieldCheck,
      color: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-100",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
      <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-4 sm:p-6 shadow-xl shadow-slate-200/50 border border-slate-200/80">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`flex items-center gap-3 sm:gap-4 justify-center sm:justify-start ${
                  idx > 1 ? "pt-3 sm:pt-0" : ""
                } ${idx > 0 ? "sm:pl-6" : ""}`}
              >
                <div
                  className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center shrink-0 ${stat.bg} ${stat.color} border ${stat.border}`}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-500">
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
