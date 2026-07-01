"use client";

import Image from "next/image";
import Link from "next/link";

const CTA_LINK = "https://share-rxapq9cajg.rajluck.co/web/share/index.html?ic=AA0DL7ND&ts=1782835740&m=2&lang=en&id=1";

const downloadSteps = [
  "Click the Download APK button below or visit rajluckgamers.com.",
  "Allow installation from unknown sources in your Android settings.",
  "Open the downloaded Rajluck APK file.",
  "Follow the on-screen installation instructions.",
  "Launch the app and register or login to your account.",
];

const appInfo = [
  { label: "App Name", value: "Rajluck Game" },
  { label: "File Type", value: "APK (Android Package)" },
  { label: "Platform", value: "Android" },
  { label: "Price", value: "Free" },
  { label: "Version", value: "Latest 2026" },
  { label: "Size", value: "Optimized for all devices" },
  { label: "Source", value: "rajluckgamers.com" },
];

interface SeoApkPageProps {
  keyword: string;
  heading: string;
  subheading: string;
  description: string;
}

export default function SeoApkPage({ keyword, heading, subheading, description }: SeoApkPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-5 sm:py-10 relative">
          <div className="text-center  mx-auto">
            <Image
              src="/logo.webp"
              alt={`${keyword} Logo`}
              width={160}
              height={160}
              className="w-[100px] sm:w-[180px] mx-auto mb-6 drop-shadow-2xl animate-fade-in"
              priority
            />
            <span className="inline-block px-2 sm:px-4 py-1.5 rounded-full bg-white/20 text-black text-sm font-medium mb-3 sm:mb-4 animate-fade-in backdrop-blur-sm">
              {subheading}
            </span>
            <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight mb-4 sm:mb-6 animate-slide-up">
              {heading}
            </h1>
            <p className="text-sm sm:text-xl text-black leading-relaxed mb-4 sm:mb-5 animate-slide-up delay-200 mx-auto">
              {description}
            </p>
            <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta !text-lg !py-4 !px-10">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download {keyword} Now
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" className="w-full">
            <path d="M0 40L48 35C96 30 192 20 288 22C384 25 480 40 576 48C672 55 768 55 864 48C960 40 1056 25 1152 22C1248 20 1344 30 1392 35L1440 40V100H0V40Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* App Info Table */}
      <section className="section-padding bg-white">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
              {keyword} – App Information
            </h2>
          </div>
          <div className="card-static overflow-hidden">
            <table className="info-table">
              <thead>
                <tr>
                  <th>Information</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {appInfo.map((row) => (
                  <tr key={row.label}>
                    <td className="font-medium text-text-primary">{row.label}</td>
                    <td className="text-text-secondary">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section-padding bg-surface">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary text-sm font-medium mb-4">
              About {keyword}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-5">
              What is {keyword}?
            </h2>
          </div>
          <div className="card-static p-6 sm:p-10 space-y-5">
            <p className="text-text-secondary leading-relaxed text-base sm:text-lg">
              <strong>{keyword}</strong> is the Android application package for Rajluck Game — a popular mobile gaming platform. Whether you search for <em>Rajluck APK</em>, <em>Raj Luck APK</em>, <em>Rajluck Game APK Download</em>, or <em>Raj Luck Game APK</em>, you&apos;ll find the latest version right here at rajluckgamers.com.
            </p>
            <p className="text-text-secondary leading-relaxed text-base sm:text-lg">
              The {keyword} file allows you to install Rajluck Game directly on your Android device. It includes all the latest features: easy registration, secure login, a clean gaming dashboard, promotional offers, and regular performance updates.
            </p>
            <p className="text-text-secondary leading-relaxed text-base sm:text-lg">
              Always download {keyword} from trusted sources like rajluckgamers.com to ensure you get the genuine, latest version with all security features intact.
            </p>
          </div>
        </div>
      </section>

      {/* Download Steps */}
      <section className="section-padding bg-white">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary text-sm font-medium mb-4">
              Step-by-Step Guide
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
              How to Download {keyword}
            </h2>
          </div>
          <div className="space-y-4">
            {downloadSteps.map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="step-number">{i + 1}</div>
                <p className="text-text-secondary pt-2">{step}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta inline-flex">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download {keyword}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-surface">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
              {keyword} – FAQ
            </h2>
          </div>
          <div className="space-y-4">
            {[
              { q: `Is ${keyword} free to download?`, a: `Yes, ${keyword} is completely free to download from rajluckgamers.com. There are no hidden charges for downloading or installing the app.` },
              { q: `Is ${keyword} safe for my device?`, a: `Yes, always download ${keyword} from rajluckgamers.com to ensure you get the official, secure version with all safety features.` },
              { q: `What Android version do I need for ${keyword}?`, a: `${keyword} is optimized to work on most modern Android devices. Check the app requirements during installation for specific version compatibility.` },
              { q: `How do I update ${keyword}?`, a: `Visit rajluckgamers.com to download the latest version of ${keyword}. We recommend keeping the app updated for the best experience.` },
            ].map((faq, i) => (
              <div key={i} className="card-static p-6">
                <h3 className="font-bold text-text-primary mb-2">{faq.q}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section-padding bg-white">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-6">
            More About Rajluck Game
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Home", href: "/" },
              { name: "Download", href: "/download" },
              { name: "Rajluck", href: "/rajluck" },
              { name: "Rajluck Game", href: "/raj-luck-game" },
              { name: "RajluckGamers", href: "/rajluckgamers" },
              { name: "Features", href: "/features" },
              { name: "Blog", href: "/blog" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg bg-primary-50 text-primary text-sm font-medium hover:bg-primary hover:text-white transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
