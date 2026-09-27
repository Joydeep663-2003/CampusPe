"use client";

import React, { useState } from "react";
import { QrCode, Sparkles, Star } from "lucide-react";

export default function DownloadApp() {
  const [showQr, setShowQr] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-b from-white via-sky-50/20 to-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-sky-600 tracking-tight">
              Download App Now
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 max-w-xl leading-relaxed font-normal">
              Elevate your academic journey with Campuspe, the all-in-one digital ecosystem designed to bridge the gap between education and industry. Whether you&apos;re a student seeking your next big internship, a college looking to empower your cohort, or a company scouting for top-tier talent, Campuspe streamlines the connection. Your career doesn&apos;t start at graduation—it starts here.
            </p>

            {/* App Store Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              {/* Google Play */}
              <a
                href="#download-play"
                onClick={(e) => {
                  e.preventDefault();
                  setShowQr(true);
                }}
                className="px-5 py-2.5 rounded-xl bg-black hover:bg-slate-800 text-white flex items-center gap-3 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a2.03 2.03 0 0 1-.225-.972V2.786c0-.36.08-.696.224-.972zM15.207 13.414l2.502 2.502-12.784 7.378 10.282-9.88zM4.925.706L17.71 8.084 15.207 10.586 4.925.706zM16.621 12l2.364-2.364 2.825 1.63c.805.465.805 1.22 0 1.685L18.985 14.364 16.621 12z" />
                </svg>
                <div className="text-left">
                  <div className="text-[9px] uppercase font-semibold text-slate-300 leading-none">
                    GET IT ON
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white leading-tight">Google Play</div>
                </div>
              </a>

              {/* App Store */}
              <a
                href="#download-apple"
                onClick={(e) => {
                  e.preventDefault();
                  setShowQr(true);
                }}
                className="px-5 py-2.5 rounded-xl bg-black hover:bg-slate-800 text-white flex items-center gap-3 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.76 1.04-1.82.93-2.88-.9.04-2 .6-2.65 1.37-.58.67-1.09 1.76-.95 2.8 1 .08 2.05-.53 2.67-1.29z" />
                </svg>
                <div className="text-left">
                  <div className="text-[9px] uppercase font-semibold text-slate-300 leading-none">
                    Download on the
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white leading-tight">App Store</div>
                </div>
              </a>
            </div>

            {showQr && (
              <div className="p-4 bg-white rounded-2xl border border-sky-200 shadow-md inline-flex items-center gap-4 animate-fadeIn">
                <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center p-2 border border-slate-200">
                  <QrCode className="w-12 h-12 text-slate-800" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Scan to download app</div>
                  <div className="text-[11px] text-slate-500">Available on iOS & Android</div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: 2 Overlapping 3D Smartphones */}
          <div className="lg:col-span-5 relative flex items-center justify-center py-6">
            <div className="relative w-full max-w-[380px] h-[300px] flex items-center justify-center">
              {/* Back Phone (Angled Left) */}
              <div className="absolute transform -rotate-15 -translate-x-14 translate-y-3 w-48 h-72 bg-slate-900 rounded-[32px] p-2 shadow-2xl border-4 border-slate-700 opacity-90 transition-transform hover:-translate-y-2 duration-300">
                <div className="w-full h-full bg-slate-50 rounded-[24px] overflow-hidden p-2 text-center flex flex-col justify-between">
                  <div className="w-12 h-2.5 bg-black rounded-full mx-auto" />
                  <div className="space-y-1 my-auto">
                    <span className="text-[10px] font-bold text-slate-800 block">Frontend Jobs</span>
                    <span className="text-[9px] text-slate-400 block">Bangalore, Remote</span>
                  </div>
                  <div className="w-12 h-1 bg-slate-300 rounded-full mx-auto" />
                </div>
              </div>

              {/* Front Phone (Angled Right) */}
              <div className="absolute transform rotate-8 translate-x-10 -translate-y-2 w-52 h-76 bg-slate-950 rounded-[36px] p-2 shadow-2xl shadow-sky-500/20 border-4 border-slate-800 transition-transform hover:-translate-y-3 duration-300 z-10">
                <div className="w-full h-full bg-white rounded-[28px] overflow-hidden p-3 flex flex-col justify-between">
                  <div className="w-14 h-3 bg-black rounded-full mx-auto" />
                  <div className="space-y-2 my-auto">
                    <div className="w-8 h-8 rounded-xl bg-sky-500 mx-auto flex items-center justify-center text-white font-bold text-xs shadow-xs">
                      CP
                    </div>
                    <div className="text-xs font-bold text-slate-900 text-center">
                      CampusPe
                    </div>
                    <div className="text-[9px] text-emerald-600 font-bold bg-emerald-50 py-1 px-2 rounded-full text-center">
                      ✓ Top College Matches
                    </div>
                  </div>
                  <div className="w-16 h-1 bg-slate-300 rounded-full mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
