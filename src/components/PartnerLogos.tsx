"use client";

import React from "react";

export default function PartnerLogos() {
  const partners = [
    {
      name: "GINSERV",
      subtitle: "Global Incubation Services",
      icon: (
        <svg className="w-8 h-8 text-sky-600" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      name: "STARTUP KARNATAKA",
      subtitle: "Govt. of Karnataka Initiative",
      icon: (
        <svg className="w-8 h-8 text-amber-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: "GOVT. OF KARNATAKA",
      subtitle: "Department of IT & BT",
      icon: (
        <svg className="w-8 h-8 text-red-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
    },
    {
      name: "STARTUP INDIA",
      subtitle: "DPIIT Recognized",
      icon: (
        <svg className="w-8 h-8 text-emerald-600" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "MEITY STARTUP HUB",
      subtitle: "Ministry of Electronics & IT",
      icon: (
        <svg className="w-8 h-8 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
          <rect x="2" y="3" width="20" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
          <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-14 border-b border-slate-100/80 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-wider text-slate-400 mb-8">
          Recognized & Supported By Leading Ecosystem Partners
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 md:gap-16 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center gap-3 group cursor-pointer transition-transform hover:scale-105"
            >
              <div className="p-1 rounded-lg group-hover:bg-sky-50 transition-colors">
                {partner.icon}
              </div>
              <div className="text-left">
                <div className="text-sm font-extrabold tracking-tight text-slate-800 group-hover:text-sky-700 transition-colors">
                  {partner.name}
                </div>
                <div className="text-[10px] text-slate-400 font-medium">
                  {partner.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
