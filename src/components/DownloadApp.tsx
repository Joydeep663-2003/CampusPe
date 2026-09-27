"use client";

import React, { useState } from "react";
import { QrCode, ArrowDownToLine, Sparkles, Star, Smartphone } from "lucide-react";

export default function DownloadApp() {
  const [showQr, setShowQr] = useState(false);

  return (
    <section className="py-20 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[36px] bg-gradient-to-br from-sky-50/80 via-white to-blue-50/50 border border-sky-100 p-8 sm:p-12 lg:p-16 shadow-xl shadow-sky-500/5 relative overflow-hidden">
          {/* Background ambient lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
                <Smartphone className="w-3.5 h-3.5 text-sky-600" />
                <span>Mobile App Available</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Download App Now
              </h2>

              <p className="text-base text-slate-600 max-w-xl leading-relaxed">
                The CampusPe application is available on both iOS and Android. Search for CampusPe
                on Google Play Store or Apple App Store and start connecting with colleges and recruiters today.
              </p>

              {/* App Store Buttons & QR Code */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                {/* Google Play */}
                <a
                  href="#download-play"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowQr(true);
                  }}
                  className="px-5 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white flex items-center gap-3 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                >
                  <svg className="w-6 h-6 fill-current text-sky-400" viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a2.03 2.03 0 0 1-.225-.972V2.786c0-.36.08-.696.224-.972zM15.207 13.414l2.502 2.502-12.784 7.378 10.282-9.88zM4.925.706L17.71 8.084 15.207 10.586 4.925.706zM16.621 12l2.364-2.364 2.825 1.63c.805.465.805 1.22 0 1.685L18.985 14.364 16.621 12z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-semibold text-slate-400 leading-none">
                      Get it on
                    </div>
                    <div className="text-sm font-bold text-white leading-tight">Google Play</div>
                  </div>
                </a>

                {/* App Store */}
                <a
                  href="#download-apple"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowQr(true);
                  }}
                  className="px-5 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white flex items-center gap-3 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                >
                  <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.76 1.04-1.82.93-2.88-.9.04-2 .6-2.65 1.37-.58.67-1.09 1.76-.95 2.8 1 .08 2.05-.53 2.67-1.29z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-semibold text-slate-400 leading-none">
                      Download on the
                    </div>
                    <div className="text-sm font-bold text-white leading-tight">App Store</div>
                  </div>
                </a>

                {/* QR Code toggle */}
                <button
                  onClick={() => setShowQr(!showQr)}
                  className="px-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-700 hover:text-sky-600 hover:border-sky-300 font-semibold text-xs flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
                >
                  <QrCode className="w-4 h-4 text-sky-600" />
                  <span>Scan QR Code</span>
                </button>
              </div>

              {showQr && (
                <div className="p-4 bg-white rounded-2xl border border-sky-200 shadow-md inline-flex items-center gap-4 animate-fadeIn">
                  <div className="w-20 h-20 bg-slate-100 rounded-xl flex items-center justify-center p-2 border border-slate-200">
                    <QrCode className="w-16 h-16 text-slate-800" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Scan to download app</div>
                    <div className="text-[11px] text-slate-500">Points to App Store & Google Play</div>
                    <div className="text-[10px] font-semibold text-emerald-600 mt-1 flex items-center gap-1">
                      <Star className="w-3 h-3 fill-emerald-500 text-emerald-500" /> 4.9 Rating (5,000+ reviews)
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: 3D Angled Phone Preview */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-[340px] h-[340px] flex items-center justify-center">
                {/* Back phone */}
                <div className="absolute transform -rotate-12 -translate-x-12 translate-y-2 w-52 h-80 bg-slate-900 rounded-[36px] p-2.5 shadow-2xl border-4 border-slate-700 opacity-90 transition-transform hover:-translate-y-2 duration-300">
                  <div className="w-full h-full bg-sky-50 rounded-[28px] overflow-hidden p-2 text-center flex flex-col justify-center">
                    <Sparkles className="w-8 h-8 text-sky-500 mx-auto mb-2" />
                    <div className="text-xs font-bold text-slate-800">CampusPe App</div>
                    <div className="text-[10px] text-slate-500">Fast Match Feed</div>
                  </div>
                </div>

                {/* Front phone */}
                <div className="absolute transform rotate-6 translate-x-8 -translate-y-2 w-56 h-88 bg-slate-950 rounded-[40px] p-2.5 shadow-2xl shadow-sky-500/20 border-4 border-slate-800 transition-transform hover:-translate-y-4 duration-300 z-10">
                  <div className="w-full h-full bg-white rounded-[32px] overflow-hidden p-3 flex flex-col justify-between">
                    <div className="w-16 h-3.5 bg-slate-900 rounded-full mx-auto" />
                    <div className="space-y-2 my-auto">
                      <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-500 to-blue-600 mx-auto flex items-center justify-center text-white font-bold text-sm shadow-md">
                        CP
                      </div>
                      <div className="text-xs font-black text-slate-900 text-center">
                        CampusPe Mobile
                      </div>
                      <div className="text-[10px] text-emerald-600 font-bold bg-emerald-50 py-1 px-2 rounded-full text-center">
                        ✓ 12 New Offers Ready
                      </div>
                    </div>
                    <div className="w-20 h-1 bg-slate-300 rounded-full mx-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
