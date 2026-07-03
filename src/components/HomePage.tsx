import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion from "./FaqAccordion";

const CTA_LINK = "https://share-rxapq9cajg.rajluck.co/web/share/index.html?ic=AA64CBGV&ts=1783054980&m=2&lang=en&id=1";

const infoRows = [
  { label: "Application", value: "Rajluck Game" },
  { label: "Device Support", value: "Android" },
  { label: "Registration", value: "Available Online" },
  { label: "Login Method", value: "Mobile Number" },
  { label: "User Interface", value: "Simple & Modern" },
  { label: "App Updates", value: "Regular" },
  { label: "Security", value: "Account Protection" },
  { label: "Performance", value: "Fast & Responsive" },
];

const benefits = [
  { icon: "📱", title: "Easy Account Creation" },
  { icon: "⚡", title: "Quick Login Process" },
  { icon: "🎨", title: "Mobile-Friendly Interface" },
  { icon: "🚀", title: "Fast App Performance" },
  { icon: "🔄", title: "Regular Feature Updates" },
  { icon: "🎁", title: "Promotional Campaigns" },
  { icon: "👤", title: "Beginner-Friendly Design" },
  { icon: "🔒", title: "Secure Account Management" },
  { icon: "🧭", title: "Simple Navigation" },
  { icon: "✨", title: "Improved User Experience" },
];

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    ),
    title: "Fast Registration",
    desc: "Creating a new account takes only a few simple steps. Get started in minutes.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Secure Login",
    desc: "The login system helps users safely access their accounts whenever required.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: "Clean Dashboard",
    desc: "A modern interface organized for ease of use and understanding.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    ),
    title: "Regular Promotions",
    desc: "Welcome offers, referral programs, daily activities, and seasonal promotions.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Android Compatibility",
    desc: "Optimized to work smoothly on all supported Android devices.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Account Security",
    desc: "Advanced security features help keep your account information protected.",
  },
];

const faqs = [
  {
    q: "Is Rajluck Game available for Android?",
    a: "Yes, Rajluck Game is designed primarily for Android devices. The application is optimized to work smoothly on supported Android phones and tablets.",
  },
  {
    q: "Can I register for free?",
    a: "Yes, registration is generally available without any registration fee. You can create your account quickly by following the registration steps on the platform.",
  },
  {
    q: "How do I access my account?",
    a: "Use your registered mobile number together with your password or verification code to log in to your Rajluck Game account.",
  },
  {
    q: "Should I update the application?",
    a: "Yes, installing the latest version is recommended as it can improve performance, stability, and security of the application.",
  },
  {
    q: "Are promotional offers always available?",
    a: "Promotions may vary depending on the platform's current campaigns and eligibility requirements. Check the app regularly for the latest offers.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-5 sm:py-10 relative">
          <div className="text-center mx-auto">
            <Image
              src="/raj-luck-game.webp"
              alt="Official Rajluck Game APK Logo"
              width={180}
              height={180}
              className="w-[100px] sm:w-[180px] mx-auto mb-6 drop-shadow-2xl animate-fade-in"
              priority
            />
            <span className="inline-block px-2 sm:px-4 py-1.5 rounded-full bg-white/20 text-black text-sm font-medium mb-3 sm:mb-4 animate-fade-in backdrop-blur-sm">
              Rajluck Game • Rajluck APK • Rajluck App
            </span>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-black leading-tight mb-4 sm:mb-6 animate-slide-up">
              Rajluck Game – Download Guide, Login Process, Features &amp; User Information
            </h1>
            <p className="text-sm sm:text-xl text-black leading-relaxed mb-4 sm:mb-5 animate-slide-up delay-200 mx-auto">
              Discover Rajluck Game — a mobile-friendly gaming platform that brings together multiple entertainment options in one application for Android users.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-300">
              <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta !text-lg !py-3 sm:!py-4 !px-10">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download APK Now
              </a>
              <Link href="/features" className="btn-outline !border-black !text-black hover:!bg-white hover:!text-primary !text-lg !py-2 sm:!py-4 !px-10">
                Explore Features
              </Link>
            </div>
          </div>
        </div>
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 40L48 35C96 30 192 20 288 22C384 25 480 40 576 48C672 55 768 55 864 48C960 40 1056 25 1152 22C1248 20 1344 30 1392 35L1440 40V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V40Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Info Table Section */}
      <section className="section-padding bg-white">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
              Rajluck Game Information
            </h2>
            <p className="text-text-secondary max-w-lg mx-auto">
              Everything you need to know about the Rajluck Game application at a glance.
            </p>
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
                {infoRows.map((row) => (
                  <tr key={row.label}>
                    <td className="font-medium text-text-primary">{row.label}</td>
                    <td className="text-text-secondary">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-8">
            <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta !text-lg !py-4 !px-10 w-full sm:w-auto justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download APK
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary text-sm font-medium mb-4">
                About the Platform
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-5">
                About Rajluck Game
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                The Rajluck Game platform is designed to provide users with a convenient mobile gaming experience. After creating an account, users can explore different gaming categories, manage their profiles, and stay updated with new promotions and platform announcements.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4 sm:mb-6">
                The application is regularly improved to enhance speed, stability, and overall user experience. Whether you&apos;re looking for the latest Rajluck Game APK, download instructions, or account information, Rajluck Game has everything covered.
              </p>
              <Link href="/about" className="btn-primary">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {benefits.slice(0, 6).map((b, i) => (
                <div key={i} className="card p-5 text-center">
                  <span className="text-2xl mb-2 block">{b.icon}</span>
                  <p className="text-sm font-medium text-text-primary">{b.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
              Main Features of Rajluck Game
            </h2>
            <p className="text-text-secondary  mx-auto">
              Explore the key features that make Rajluck Game one of the best mobile gaming platforms for Android.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="card p-7 group">
                <div className="w-14 h-14 rounded-xl bg-primary-50 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2">{f.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/features" className="btn-outline">
              View All Features
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Download & Registration Guide */}
      <section className="section-padding hero-gradient-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Download Guide */}
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary text-sm font-medium mb-4">
                Getting Started
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 sm:mb-6">
                Rajluck Game Download Guide
              </h2>
              <div className="space-y-4">
                {[
                  "Download the latest available version.",
                  "Verify that the source is reliable.",
                  "Confirm device compatibility.",
                  "Install updates whenever available.",
                  "Keep sufficient storage space on your device.",
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="step-number">{i + 1}</div>
                    <p className="text-text-secondary pt-2">{step}</p>
                  </div>
                ))}
              </div>
              <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta mt-8 inline-flex">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Rajluck APK
              </a>
            </div>

            {/* Login & Register */}
            <div>
              <h3 className="text-xl font-bold text-text-primary mb-5 flex items-center gap-2">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                Login Instructions
              </h3>
              <div className="card-static p-6 mb-8">
                <ol className="space-y-3">
                  {[
                    "Launch the application.",
                    "Enter your registered mobile number.",
                    "Type your password or verification code.",
                    "Select the Login option.",
                    "Open your account dashboard.",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-secondary">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <h3 className="text-xl font-bold text-text-primary mb-5 flex items-center gap-2">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                How to Register
              </h3>
              <div className="card-static p-6">
                <ol className="space-y-3">
                  {[
                    "Open the registration page.",
                    "Enter your mobile number.",
                    "Create a secure password.",
                    "Complete the required verification.",
                    "Submit your registration.",
                    "Sign in to your new account.",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-secondary">
                      <span className="w-6 h-6 rounded-full bg-accent/10 text-accent-dark text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent-dark text-sm font-medium mb-4">
              Promotions
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
              Rewards &amp; Promotional Offers
            </h2>
            <p className="text-text-secondary  mx-auto">
              Depending on ongoing campaigns, users may find these promotional benefits.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: "🎉", label: "Welcome Offers" },
              { icon: "📋", label: "Registration Rewards" },
              { icon: "🤝", label: "Referral Benefits" },
              { icon: "📅", label: "Daily Activity Rewards" },
              { icon: "🎊", label: "Festival Promotions" },
              { icon: "⭐", label: "Special Event Bonuses" },
            ].map((r, i) => (
              <div key={i} className="card p-5 text-center">
                <span className="text-3xl mb-3 block">{r.icon}</span>
                <p className="text-sm font-semibold text-text-primary">{r.label}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-text-muted mt-6">
            Always review the latest promotional terms before participating.
          </p>
        </div>
      </section>

      {/* Tips Section */}
      <section className="section-padding bg-surface">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
              Helpful Tips
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: "🔐", tip: "Use a strong password for account safety." },
              { icon: "🔄", tip: "Update the application regularly." },
              { icon: "📖", tip: "Read all promotional terms carefully." },
              { icon: "🛡️", tip: "Keep your account information private." },
              { icon: "✅", tip: "Use trusted download sources." },
              { icon: "🎮", tip: "Enjoy gaming responsibly." },
            ].map((t, i) => (
              <div key={i} className="flex items-center gap-4 card-static p-5">
                <span className="text-xl">{t.icon}</span>
                <p className="text-text-secondary font-medium">{t.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white" id="faq">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary text-sm font-medium mb-4">
              FAQs
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-text-secondary">
              Find answers to common questions about Rajluck Game.
            </p>
          </div>
          <Suspense fallback={<div className="text-center text-text-muted py-8">Loading FAQs...</div>}>
            <FaqAccordion faqs={faqs} />
          </Suspense>
        </div>
      </section>
    </>
  );
}
