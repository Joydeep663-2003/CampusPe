"use client";

import React, { useState, useRef } from "react";
import {
  Upload,
  Check,
  FileText,
  Zap,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  RefreshCw,
} from "lucide-react";
import confetti from "canvas-confetti";

export default function ResumeSection() {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [parsedData, setParsedData] = useState<{
    fileName: string;
    atsScore: number;
    skills: string[];
    topMatch: string;
  } | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const simulateParse = (name: string) => {
    setIsUploading(true);
    setUploadProgress(20);
    setParsedData(null);

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          setTimeout(() => {
            setIsUploading(false);
            setParsedData({
              fileName: name,
              atsScore: 98,
              skills: ["React.js", "TypeScript", "Next.js", "Tailwind CSS", "REST APIs", "Python"],
              topMatch: "Fullstack / Frontend Engineer (98% match)",
            });
            try {
              confetti({
                particleCount: 50,
                spread: 60,
                origin: { y: 0.7 },
              });
            } catch (e) {
              // ignore
            }
          }, 300);
          return 100;
        }
        return prev + 30;
      });
    }, 180);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      simulateParse(e.target.files[0].name);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      simulateParse(e.dataTransfer.files[0].name);
    }
  };

  const resetUpload = () => {
    setParsedData(null);
    setUploadProgress(0);
    setIsUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <section id="resume-parser" className="py-20 bg-white relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-sky-50/80 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Upload Container Box */}
        <div className="relative bg-gradient-to-b from-sky-50/40 via-white to-sky-50/20 rounded-3xl p-8 sm:p-12 border-2 border-dashed border-sky-300 text-center shadow-xs">
          {/* Top-Left Floating Tag */}
          <div className="absolute -top-3.5 left-6 bg-white px-3 py-1 rounded-full border border-sky-200 shadow-xs flex items-center gap-1.5 text-xs">
            <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">⚡</span>
            <span className="font-bold text-slate-800">98% Match Rate</span>
            <span className="text-slate-400 text-[10px] hidden sm:inline">• AI semantic rank</span>
          </div>

          {/* Bottom-Right Floating Tag */}
          <div className="absolute -bottom-3.5 right-6 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-xs flex items-center gap-1.5 text-xs">
            <FileText className="w-3.5 h-3.5 text-amber-500" />
            <span className="font-bold text-slate-800">ATS Compliant</span>
            <span className="text-slate-400 text-[10px] hidden sm:inline">• Standardized parser</span>
          </div>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".pdf,.docx,.doc"
            className="hidden"
          />

          {!parsedData && !isUploading && (
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              className={`transition-all duration-200 ${
                isDragging ? "scale-[1.01]" : ""
              }`}
            >
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                Upload your resume
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto mb-6">
                PDF, DOC, or DOCX • Up to 10MB • We&apos;ll use it to understand your skills and experience.
              </p>

              {/* Upload Button */}
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="px-6 py-2.5 rounded-full bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs sm:text-sm shadow-md shadow-sky-500/25 active:scale-95 transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Upload resume</span>
                <Upload className="w-4 h-4" />
              </button>

              <div className="text-xs text-slate-400 mt-4 mb-3">
                or drag and drop your file here
              </div>

              {/* Supported format badges */}
              <div className="flex items-center justify-center gap-2">
                <span className="px-2 py-0.5 rounded text-[11px] font-bold text-sky-600 bg-sky-50 border border-sky-200">
                  PDF
                </span>
                <span className="px-2 py-0.5 rounded text-[11px] font-bold text-sky-600 bg-sky-50 border border-sky-200">
                  DOC
                </span>
                <span className="px-2 py-0.5 rounded text-[11px] font-bold text-sky-600 bg-sky-50 border border-sky-200">
                  DOCX
                </span>
              </div>
            </div>
          )}

          {isUploading && (
            <div className="space-y-4 py-4">
              <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center mx-auto animate-spin">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-800 text-sm">
                Parsing resume with AI Engine...
              </h4>
              <div className="w-64 max-w-full mx-auto bg-slate-100 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-sky-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
              <span className="text-xs font-semibold text-sky-600">{uploadProgress}% complete</span>
            </div>
          )}

          {parsedData && (
            <div className="text-left space-y-4 max-w-lg mx-auto py-2 animate-fadeIn">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <span className="text-xs font-bold text-slate-800">{parsedData.fileName}</span>
                </div>
                <button
                  onClick={resetUpload}
                  className="text-xs text-sky-600 hover:underline cursor-pointer"
                >
                  Change file
                </button>
              </div>

              <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs">
                <div className="font-bold text-slate-700 mb-1">Detected Skills:</div>
                <div className="flex flex-wrap gap-1">
                  {parsedData.skills.map((s) => (
                    <span key={s} className="px-2 py-0.5 bg-sky-50 text-sky-700 rounded text-[11px] font-medium border border-sky-100">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="#opportunities"
                className="w-full py-2.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all"
              >
                <span>View Matching Jobs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>

        {/* 4 Feature Badges in a Row (Exactly matching Figma) */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-left">
          <div className="p-3 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-start gap-2.5">
            <span className="w-5 h-5 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </span>
            <div>
              <div className="text-xs font-bold text-slate-800">Resume analyzed</div>
              <div className="text-[10px] text-emerald-600 font-medium">• Ready in 4s</div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-start gap-2.5">
            <span className="w-5 h-5 rounded-md bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </span>
            <div>
              <div className="text-xs font-bold text-slate-800">Skills matched</div>
              <div className="text-[10px] text-slate-400">Deep taxonomy</div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-start gap-2.5">
            <span className="w-5 h-5 rounded-md bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </span>
            <div>
              <div className="text-xs font-bold text-slate-800">Experience matched</div>
              <div className="text-[10px] text-slate-400">Contextual seniority</div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-start gap-2.5">
            <span className="w-5 h-5 rounded-md bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </span>
            <div>
              <div className="text-xs font-bold text-slate-800">1,000+ sources searched</div>
              <div className="text-[10px] text-slate-400">Real-time aggregators</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
