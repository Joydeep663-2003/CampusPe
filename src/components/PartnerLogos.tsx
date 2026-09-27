"use client";

import React from "react";

export default function PartnerLogos() {
  const partners = [
    {
      name: "GINSERV",
      subtitle: "Nurturing Ventures",
      badgeColor: "bg-sky-50 text-sky-600",
      svg: (
        <svg className="w-8 h-8 text-sky-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: "STARTUP KARNATAKA",
      subtitle: "Govt. Initiative",
      badgeColor: "bg-amber-50 text-amber-600",
      svg: (
        <svg className="w-8 h-8 text-red-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
    },
    {
      name: "GOVT. OF KARNATAKA",
      subtitle: "Dept. of IT & BT",
      badgeColor: "bg-red-50 text-red-600",
      svg: (
        <svg className="w-8 h-8 text-amber-700" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M12 6v12M6 12h12" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      name: "TALENTSPOTIFY",
      subtitle: "Hiring Network",
      badgeColor: "bg-emerald-50 text-emerald-600",
      svg: (
        <svg className="w-8 h-8 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="12" cy="12" r="3" fill="currentColor" />
          <circle cx="6" cy="12" r="2" fill="currentColor" />
          <circle cx="18" cy="12" r="2" fill="currentColor" />
          <circle cx="12" cy="6" r="2" fill="currentColor" />
          <circle cx="12" cy="18" r="2" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: "Radiant Info",
      subtitle: "Tech Solutions",
      badgeColor: "bg-orange-50 text-orange-600",
      svg: (
        <svg className="w-8 h-8 text-red-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.5 7 6 10.5 6 14a6 6 0 0 0 12 0c0-3.5-2.5-7-6-12z" />
        </svg>
      ),
    },
    {
      name: "DIGITAL INDIA",
      subtitle: "Power to Empower",
      badgeColor: "bg-blue-50 text-blue-600",
      svg: (
        <svg className="w-8 h-8 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <line x1="12" y1="16" x2="12" y2="20" />
          <line x1="8" y1="20" x2="16" y2="20" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-10 border-b border-slate-100 bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold text-slate-500 tracking-wide mb-6">
          Trusted by partners across India
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-14">
          {partners.map((p) => (
            <div
              key={p.name}
              className="flex items-center gap-2.5 opacity-80 hover:opacity-100 transition-opacity cursor-pointer group"
            >
              <div className="shrink-0">{p.svg}</div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-slate-800 tracking-tight group-hover:text-sky-600 transition-colors">
                  {p.name}
                </div>
                <div className="text-[10px] text-slate-400 font-medium">
                  {p.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
