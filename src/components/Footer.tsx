"use client";

import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";
import { ModalType } from "./Modal";

interface FooterProps {
  onOpenModal: (type: ModalType, data?: any) => void;
  onShowToast: (message: string) => void;
}

export default function Footer({ onOpenModal, onShowToast }: FooterProps) {
  return (
    <footer className="bg-white text-slate-600 pt-16 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-100">
          {/* Brand Column (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex flex-col group cursor-pointer">
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black text-sky-600 tracking-tight font-sans">
                  Campus<span className="text-sky-600 relative">Pe<GraduationCap className="w-4 h-4 text-sky-500 absolute -top-2.5 -right-2 transform rotate-12" /></span>
                </span>
              </div>
              <span className="text-[9px] text-slate-400 font-medium tracking-tight -mt-0.5">
                — Connecting Students, Institutions & Companies —
              </span>
            </Link>

            <div className="space-y-2 text-xs text-slate-500 leading-relaxed max-w-sm">
              <p className="font-semibold text-slate-700">
                From choosing a college to finding your next opportunity.
              </p>
              <p>
                CampusPe connects students, colleges and employers in one place.
              </p>
            </div>
          </div>

          {/* Column 1: For Students */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 tracking-tight">
              For Students
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#colleges" className="text-slate-500 hover:text-sky-600 transition-colors">
                  Explore Colleges
                </a>
              </li>
              <li>
                <a href="#opportunities" className="text-slate-500 hover:text-sky-600 transition-colors">
                  Find Opportunities
                </a>
              </li>
              <li>
                <a href="#opportunities" className="text-slate-500 hover:text-sky-600 transition-colors">
                  Internships
                </a>
              </li>
              <li>
                <a href="#opportunities" className="text-slate-500 hover:text-sky-600 transition-colors">
                  Full-time Jobs
                </a>
              </li>
              <li>
                <a href="#opportunities" className="text-slate-500 hover:text-sky-600 transition-colors">
                  Part-time & Gig
                </a>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal("sign-up")}
                  className="text-slate-500 hover:text-sky-600 transition-colors text-left cursor-pointer"
                >
                  Application Tracker
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: For Colleges */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 tracking-tight">
              For Colleges
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onOpenModal("list-college")}
                  className="text-slate-500 hover:text-sky-600 transition-colors text-left cursor-pointer"
                >
                  List Your College
                </button>
              </li>
              <li>
                <a href="#colleges" className="text-slate-500 hover:text-sky-600 transition-colors">
                  Admissions
                </a>
              </li>
              <li>
                <a href="#colleges" className="text-slate-500 hover:text-sky-600 transition-colors">
                  Fee Collection
                </a>
              </li>
              <li>
                <a href="#colleges" className="text-slate-500 hover:text-sky-600 transition-colors">
                  Placements
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: For Employers */}
          <div className="lg:col-span-1 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 tracking-tight">
              For Employers
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onOpenModal("start-hiring")}
                  className="text-slate-500 hover:text-sky-600 transition-colors text-left cursor-pointer"
                >
                  Post a Job
                </button>
              </li>
              <li>
                <a href="#employers" className="text-slate-500 hover:text-sky-600 transition-colors">
                  Find Talent
                </a>
              </li>
              <li>
                <a href="#employers" className="text-slate-500 hover:text-sky-600 transition-colors">
                  Campus Hiring
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="lg:col-span-1 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 tracking-tight">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="text-slate-500 hover:text-sky-600 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal("contact-support")}
                  className="text-slate-500 hover:text-sky-600 transition-colors text-left cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-sky-600 transition-colors">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-sky-600 transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Legal & Policies */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 tracking-tight">
              Legal & Policies
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="text-slate-500 hover:text-sky-600 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-sky-600 transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-sky-600 transition-colors">
                  Refund & Cancellation Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-sky-600 transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-sky-600 transition-colors">
                  Grievance Redressal
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-sky-600 transition-colors">
                  Job & Internship Disclaimer
                </a>
              </li>
              <li className="pt-1">
                <a href="#" className="text-sky-600 font-semibold hover:underline flex items-center gap-1">
                  <span>View all policies</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info Strip (Exact match from Figma) */}
        <div className="py-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-sky-600" />
              <a href="mailto:contactus@campuspe.com" className="hover:text-sky-600 font-medium">
                contactus@campuspe.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-sky-600" />
              <a href="tel:+916362606464" className="hover:text-sky-600 font-medium">
                +91 6362606464
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
            <span>Students · Colleges · Employers</span>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 CampusPe Technologies Pvt. Ltd. · Privacy · Terms · Grievance
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-600 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-600 transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* X / Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-600 transition-colors"
              aria-label="X Twitter"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-600 transition-colors"
              aria-label="WhatsApp"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24m4.52 11.51c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8 2.53 1.09 2.53.73 2.98.69.46-.04 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
