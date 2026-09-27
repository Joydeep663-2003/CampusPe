"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { GraduationCap, Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { ModalType } from "./Modal";

interface NavbarProps {
  onOpenModal: (type: ModalType, data?: any) => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Colleges", href: "#colleges" },
    { name: "Employers", href: "#employers" },
    { name: "Jobs", href: "#opportunities" },
    { name: "Blogs", href: "#app-showcase" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md shadow-sm border-b border-slate-100 py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col group cursor-pointer">
            <div className="flex items-center gap-1.5">
              <span className="text-2xl font-black text-sky-600 tracking-tight font-sans">
                Campus<span className="text-sky-600 relative">Pe<GraduationCap className="w-4 h-4 text-sky-500 absolute -top-2.5 -right-2 transform rotate-12" /></span>
              </span>
            </div>
            <span className="text-[9px] text-slate-400 font-medium tracking-tight -mt-0.5 hidden sm:inline-block">
              — Connecting Students, Institutions & Companies —
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-sky-600 transition-colors duration-150 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-500 rounded-full transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-5">
            <button
              onClick={() => onOpenModal("sign-in")}
              className="text-sm font-semibold text-slate-700 hover:text-sky-600 transition-colors cursor-pointer"
            >
              Sign In
            </button>
            <button
              onClick={() => onOpenModal("sign-up")}
              className="px-6 py-2 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 active:scale-95 rounded-full shadow-sm hover:shadow-md hover:shadow-sky-500/25 transition-all duration-200 cursor-pointer"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenModal("sign-up")}
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-sky-600 rounded-full shadow-sm"
            >
              Sign Up
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-white/95 backdrop-blur-xl border border-slate-100 rounded-2xl shadow-xl space-y-3 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-600 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenModal("sign-in");
                }}
                className="w-full py-2.5 text-center text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl"
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenModal("sign-up");
                }}
                className="w-full py-2.5 text-center text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-xl shadow-sm"
              >
                Create Account
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
