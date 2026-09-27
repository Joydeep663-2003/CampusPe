import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0284c7",
};

export const metadata: Metadata = {
  title: "CampusPe | Connecting Students, Colleges & Employers 10X Faster",
  description: "One platform connecting students, colleges & employers in India. Discover top colleges, automate campus hiring drives, and find AI-matched placement opportunities.",
  keywords: ["CampusPe", "Campus Placement", "College Admissions", "Fresher Jobs", "Recruitment Automation", "Internships India"],
  authors: [{ name: "CampusPe Technologies" }],
  openGraph: {
    title: "CampusPe - Connect 10X Faster",
    description: "One platform connecting students, colleges & employers in India.",
    type: "website",
    locale: "en_IN",
    siteName: "CampusPe",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-sans antialiased min-h-screen bg-slate-50 text-slate-900 selection:bg-sky-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
