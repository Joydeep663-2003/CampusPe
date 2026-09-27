"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  GraduationCap,
  Mail,
  Phone,
  Send,
  CheckCircle2,
} from "lucide-react";
import { ModalType } from "./Modal";

interface FooterProps {
  onOpenModal: (type: ModalType, data?: any) => void;
  onShowToast: (message: string) => void;
}

export default function Footer({ onOpenModal, onShowToast }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    onShowToast("Subscribed to the CampusPe Placement & College newsletter!");
    setNewsletterEmail("");
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 6-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Column (Span 2 on large screens) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 group cursor-pointer">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-sky-500/20">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="flex items-baseline tracking-tight">
                <span className="text-xl font-black text-white font-sans">Campus</span>
                <span className="text-xl font-black text-sky-400 font-sans">Pe</span>
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 ml-0.5 inline-block"></span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              From choosing colleges to finding jobs to mentorship. CampusPe connects students,
              colleges, and employers in one place.
            </p>

            <div className="space-y-2 pt-1 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="mailto:support@campuspe.com" className="hover:text-white transition-colors">
                  support@campuspe.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="tel:+918045678900" className="hover:text-white transition-colors">
                  +91 80 4567 8900
                </a>
              </div>
            </div>

            {/* Newsletter input */}
            <div className="pt-2 max-w-sm">
              <span className="text-xs font-semibold text-slate-300 block mb-2">
                Subscribe to Placement Insights:
              </span>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-xl text-xs font-semibold shrink-0 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
              {subscribed && (
                <span className="text-[11px] text-emerald-400 mt-1 block flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Subscribed successfully!
                </span>
              )}
            </div>
          </div>

          {/* Column 1: For Students */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              For Students
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#opportunities" className="text-slate-400 hover:text-white transition-colors">
                  Search Colleges
                </a>
              </li>
              <li>
                <a href="#opportunities" className="text-slate-400 hover:text-white transition-colors">
                  Find Internships
                </a>
              </li>
              <li>
                <a href="#resume-parser" className="text-slate-400 hover:text-white transition-colors">
                  ATS Resume Builder
                </a>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal("sign-up")}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Placement Drives
                </button>
              </li>
              <li>
                <a href="#app-showcase" className="text-slate-400 hover:text-white transition-colors">
                  Student Community
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: For Colleges */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              For Colleges
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onOpenModal("list-college")}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  List Your College
                </button>
              </li>
              <li>
                <a href="#colleges" className="text-slate-400 hover:text-white transition-colors">
                  Drive Management
                </a>
              </li>
              <li>
                <a href="#colleges" className="text-slate-400 hover:text-white transition-colors">
                  Placement Analytics
                </a>
              </li>
              <li>
                <a href="#colleges" className="text-slate-400 hover:text-white transition-colors">
                  NIRF Data Portal
                </a>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal("schedule-demo")}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  College Partners
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: For Employers */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              For Employers
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onOpenModal("start-hiring")}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Post a Job / Drive
                </button>
              </li>
              <li>
                <a href="#employers" className="text-slate-400 hover:text-white transition-colors">
                  Hire Freshers
                </a>
              </li>
              <li>
                <a href="#employers" className="text-slate-400 hover:text-white transition-colors">
                  Campus Solutions
                </a>
              </li>
              <li>
                <a href="#employers" className="text-slate-400 hover:text-white transition-colors">
                  Standardized Tests
                </a>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal("schedule-demo")}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Enterprise Pricing
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Company & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Company & Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="text-slate-400 hover:text-white transition-colors">
                  About CampusPe
                </a>
              </li>
              <li>
                <a href="#careers" className="text-slate-400 hover:text-white transition-colors">
                  Careers (We&apos;re Hiring!)
                </a>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal("contact-support")}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Help & Support
                </button>
              </li>
              <li>
                <a href="#privacy" className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-slate-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Socials */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 CampusPe Technologies Pvt. Ltd. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-400 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>

            {/* X / Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-400 transition-colors"
              aria-label="X Twitter"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-400 transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-400 transition-colors"
              aria-label="YouTube"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-400 transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
