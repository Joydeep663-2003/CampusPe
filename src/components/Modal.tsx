"use client";

import React, { useEffect } from "react";
import { X, CheckCircle2, AlertCircle } from "lucide-react";

export type ModalType =
  | "sign-in"
  | "sign-up"
  | "apply-job"
  | "list-college"
  | "start-hiring"
  | "schedule-demo"
  | "contact-support"
  | null;

interface ModalProps {
  isOpen: boolean;
  type: ModalType;
  title?: string;
  data?: any;
  onClose: () => void;
  onSuccess?: (message: string) => void;
}

export default function Modal({
  isOpen,
  type,
  title,
  data,
  onClose,
  onSuccess,
}: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !type) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSuccess) {
      let msg = "Action completed successfully!";
      if (type === "sign-in") msg = "Welcome back! Logged in successfully.";
      else if (type === "sign-up") msg = "Account created! Welcome to CampusPe.";
      else if (type === "apply-job") msg = `Application submitted for ${data?.title || "job"}!`;
      else if (type === "list-college") msg = "College listing request submitted. Our team will verify within 24h.";
      else if (type === "start-hiring") msg = "Recruiter profile created! You can now start campus drives.";
      else if (type === "schedule-demo") msg = "Live demo scheduled! Check your email for calendar invite.";
      else if (type === "contact-support") msg = "Support ticket created. We will reply within 2 hours.";
      onSuccess(msg);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden transform transition-all duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-gradient-to-r from-sky-50/50 via-white to-indigo-50/30">
          <div>
            <div className="text-xs font-semibold tracking-wider text-sky-600 uppercase">
              {type === "sign-in" || type === "sign-up" ? "CampusPe Account" : "Get Started"}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mt-0.5">
              {title ||
                (type === "sign-in" && "Sign In to CampusPe") ||
                (type === "sign-up" && "Create your CampusPe Account") ||
                (type === "apply-job" && `Apply: ${data?.title || "Role"}`) ||
                (type === "list-college" && "List Your College on CampusPe") ||
                (type === "start-hiring" && "Start Hiring Early Talent") ||
                (type === "schedule-demo" && "Schedule a Live Demo") ||
                (type === "contact-support" && "Contact CampusPe Support")}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
          {type === "sign-in" && (
            <>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Email Address or College ID
                </label>
                <input
                  required
                  type="email"
                  placeholder="student@college.edu or recruiter@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Password
                </label>
                <input
                  required
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                />
              </div>
              <div className="flex items-center justify-between text-xs text-slate-500">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-slate-300 text-sky-600 focus:ring-sky-500" defaultChecked />
                  Remember me
                </label>
                <a href="#forgot" className="text-sky-600 hover:underline">
                  Forgot password?
                </a>
              </div>
            </>
          )}

          {type === "sign-up" && (
            <>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    First Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Rahul"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Last Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Sharma"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  I am a:
                </label>
                <select className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 bg-white">
                  <option value="student">Student / Recent Graduate</option>
                  <option value="college">College Placement Officer</option>
                  <option value="employer">Recruiter / Talent Partner</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Work / College Email
                </label>
                <input
                  required
                  type="email"
                  placeholder="rahul@institution.edu"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Create Password
                </label>
                <input
                  required
                  type="password"
                  placeholder="At least 8 characters"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                />
              </div>
            </>
          )}

          {type === "apply-job" && (
            <>
              <div className="p-3.5 rounded-2xl bg-sky-50/70 border border-sky-100 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-sm text-slate-900">{data?.title || "UI/UX Designer"}</div>
                  <div className="text-xs text-slate-600">{data?.company || "Razorpay"} • {data?.location || "Bangalore"} • {data?.ctc || "₹12-16 LPA"}</div>
                </div>
                <span className="px-2.5 py-1 text-xs font-bold text-sky-700 bg-sky-100 rounded-full">
                  {data?.match || "98% Match"}
                </span>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="Aditya Verma"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Email & Phone
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    required
                    type="email"
                    placeholder="aditya@gmail.com"
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                  />
                  <input
                    required
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Attach Resume (PDF/DOCX)
                </label>
                <div className="border border-dashed border-sky-300 rounded-2xl p-4 text-center bg-sky-50/30 hover:bg-sky-50/60 cursor-pointer transition-colors">
                  <p className="text-xs text-sky-700 font-medium">Click to select resume or drag & drop</p>
                  <p className="text-[11px] text-slate-400 mt-1">PDF, DOCX up to 10MB</p>
                </div>
              </div>
            </>
          )}

          {type === "list-college" && (
            <>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  College / University Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. BMS College of Engineering"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    City / State
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Bangalore, Karnataka"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Graduating Students / Yr
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="1,200+"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Placement Officer Name & Contact
                </label>
                <input
                  required
                  type="text"
                  placeholder="Prof. Ramesh K. (+91 99000 11223)"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                />
              </div>
            </>
          )}

          {type === "start-hiring" && (
            <>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Company Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Acme Tech Innovations"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Role Category
                  </label>
                  <select className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 bg-white">
                    <option>Software Engineering</option>
                    <option>Product & UI/UX</option>
                    <option>Sales & Marketing</option>
                    <option>Data & Analytics</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Hiring Volume
                  </label>
                  <select className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 bg-white">
                    <option>1 - 10 Positions</option>
                    <option>10 - 50 Positions</option>
                    <option>50+ Bulk Hiring</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Official Recruiter Email
                </label>
                <input
                  required
                  type="email"
                  placeholder="recruiting@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                />
              </div>
            </>
          )}

          {(type === "schedule-demo" || type === "contact-support") && (
            <>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Your Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="Priya Nair"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  placeholder="priya@domain.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  {type === "schedule-demo" ? "Preferred Date / Message" : "How can we help?"}
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder={
                    type === "schedule-demo"
                      ? "Tell us what you'd like to see in the demo (e.g., Campus Drive automation)..."
                      : "Describe your question or issue..."
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 resize-none"
                />
              </div>
            </>
          )}

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold text-sm shadow-md hover:shadow-lg shadow-sky-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Confirm & Proceed</span>
              <CheckCircle2 className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
