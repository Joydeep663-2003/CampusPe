"use client";

import React, { useState, useRef } from "react";
import {
  FileText,
  UploadCloud,
  CheckCircle2,
  Sparkles,
  Zap,
  ArrowRight,
  ShieldCheck,
  Award,
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
    setUploadProgress(15);
    setParsedData(null);

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          setTimeout(() => {
            setIsUploading(false);
            setParsedData({
              fileName: name,
              atsScore: 94,
              skills: ["React.js", "TypeScript", "Next.js", "Tailwind CSS", "REST APIs", "Git"],
              topMatch: "Frontend Engineer (98% match)",
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
          }, 400);
          return 100;
        }
        return prev + 25;
      });
    }, 200);
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
    <section id="resume-parser" className="py-24 bg-white relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-sky-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-sky-800 text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5 text-sky-600" />
          <span>Smart AI Resume Parser</span>
        </div>

        {/* Heading & Subtitle */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-2xl mx-auto">
          Upload your resume.
          <br />
          <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Find jobs that fit.
          </span>
        </h2>

        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto mt-4 font-normal">
          Upload your resume and let our AI parser extract your skills, experience, and certifications.
          Get matched instantly across 1,000+ verified campus opportunities.
        </p>

        {/* Interactive Resume Upload Box */}
        <div className="mt-10 max-w-2xl mx-auto">
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
              onClick={() => fileInputRef.current?.click()}
              className={`p-10 rounded-3xl border-2 border-dashed transition-all duration-300 cursor-pointer text-center relative group bg-gradient-to-b from-sky-50/40 to-white ${
                isDragging
                  ? "border-sky-500 bg-sky-50/80 scale-[1.01]"
                  : "border-sky-300/80 hover:border-sky-500 hover:shadow-xl hover:shadow-sky-500/10"
              }`}
            >
              <div className="w-16 h-16 rounded-2xl bg-sky-100/80 group-hover:bg-sky-600 text-sky-600 group-hover:text-white flex items-center justify-center mx-auto mb-4 transition-colors duration-200 shadow-sm">
                <UploadCloud className="w-8 h-8" />
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Upload your resume
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto mb-6">
                Drag and drop your file here, or click to browse from your device.
              </p>

              <button
                type="button"
                className="px-6 py-2.5 rounded-full bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs shadow-md shadow-sky-500/25 active:scale-95 transition-all inline-flex items-center gap-2"
              >
                <span>Browse Resume</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="text-[11px] text-slate-400 mt-4">
                Supported formats: PDF, DOCX, DOC • Max size: 10MB
              </div>
            </div>
          )}

          {isUploading && (
            <div className="p-8 rounded-3xl border border-sky-200 bg-white shadow-xl text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center mx-auto animate-spin">
                <RefreshCw className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-800 text-base">
                Analyzing resume with AI Engine...
              </h4>
              <p className="text-xs text-slate-500">
                Extracting technical skills, education credentials & project achievements
              </p>
              <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-sky-500 to-blue-600 h-2.5 rounded-full transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
              <span className="text-xs font-semibold text-sky-600">{uploadProgress}% complete</span>
            </div>
          )}

          {parsedData && (
            <div className="p-6 sm:p-8 rounded-3xl border border-sky-300 bg-gradient-to-b from-sky-50/50 via-white to-white shadow-2xl text-left space-y-5 animate-fadeIn">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">
                      {parsedData.fileName}
                    </h4>
                    <p className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Successfully parsed & indexed
                    </p>
                  </div>
                </div>

                <button
                  onClick={resetUpload}
                  className="text-xs text-slate-400 hover:text-slate-600 font-medium px-2 py-1 rounded-md hover:bg-slate-100"
                >
                  Upload Another
                </button>
              </div>

              {/* ATS Score & Match Rate */}
              <div className="grid grid-cols-2 gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                <div>
                  <div className="text-[11px] font-semibold text-slate-500 uppercase">
                    AI ATS Match Score
                  </div>
                  <div className="text-2xl font-black text-sky-600 flex items-baseline gap-1 mt-0.5">
                    {parsedData.atsScore}
                    <span className="text-xs text-slate-400 font-normal">/ 100</span>
                  </div>
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-slate-500 uppercase">
                    Top Career Match
                  </div>
                  <div className="text-xs font-bold text-slate-800 mt-1.5 flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-amber-500" />
                    {parsedData.topMatch}
                  </div>
                </div>
              </div>

              {/* Detected Skills */}
              <div>
                <div className="text-xs font-bold text-slate-700 mb-2">
                  Key Skills Detected by AI:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {parsedData.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-semibold bg-sky-100 text-sky-800 rounded-lg border border-sky-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <a
                href="#opportunities"
                className="w-full py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md shadow-sky-500/20 active:scale-98 transition-all"
              >
                <span>View 12 Instant Job Matches</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>

        {/* 4 Feature Badges at Bottom */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-2.5 text-left">
            <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
            <span className="text-xs font-semibold text-slate-700">Automated Parsing</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-2.5 text-left">
            <Award className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="text-xs font-semibold text-slate-700">AI ATS Optimization</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-2.5 text-left">
            <Zap className="w-4 h-4 text-amber-600 shrink-0" />
            <span className="text-xs font-semibold text-slate-700">Instant Match Score</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-2.5 text-left">
            <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0" />
            <span className="text-xs font-semibold text-slate-700">Direct Recruiter Visibility</span>
          </div>
        </div>
      </div>
    </section>
  );
}
