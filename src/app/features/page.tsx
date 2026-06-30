import type { Metadata } from "next";
import Link from "next/link";

const CTA_LINK = "https://share-rxapq9cajg.rajluck.co/web/share/index.html?ic=AA0DL7ND&ts=1782835740&m=2&lang=en&id=1";

export const metadata: Metadata = {
  title: "Rajluck Game Features – Complete Feature Overview 2026",
  description:
    "Explore all features of Rajluck Game — fast registration, secure Rajluck Game login, clean dashboard, regular promotions, Android compatibility, and account security. Everything the Rajluck App and Rajluck APK offer in 2026.",
  keywords: [
    "Rajluck Game features",
    "Rajluck App features",
    "Rajluck Game review",
    "Rajluck APK features",
    "Rajluck dashboard",
    "Rajluck security",
    "Rajluck",
    "Rajluck Game",
    "RajluckGame",
    "Rajluck App",
    "Rajluck APK",
    "Rajluck Game login",
    "Rajluck Game register",
    "Raj Luck",
    "Raj Luck Game",
    "Raj Luck Gamers",
  ],
  openGraph: {
    title: "Rajluck Game Features – Complete Feature Overview 2026",
    description: "Explore all features of Rajluck Game — fast registration, secure login, clean dashboard, promotions, and more for Android users.",
    url: "https://rajluckgamers.com/features",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rajluck Game Features",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajluck Game Features – Complete Feature Overview 2026",
    description: "Explore all features of Rajluck Game — fast registration, secure login, clean dashboard, promotions, and more for Android users.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://rajluckgamers.com/features" },
};

const mainFeatures = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    ),
    title: "Fast Registration",
    desc: "Creating a new account takes only a few simple steps. The streamlined registration process lets you get started in minutes without complicated forms or lengthy verification procedures.",
    highlights: ["Quick sign-up process", "Minimal information required", "Instant account activation", "Mobile number verification"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Secure Login",
    desc: "The advanced login system ensures your account is protected at all times. Multiple authentication options provide convenience while maintaining high security standards.",
    highlights: ["Password protection", "Verification code support", "Account recovery options", "Session management"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: "Clean Dashboard",
    desc: "The application features a modern, well-organized interface that makes finding what you need effortless. Every element is placed intuitively for maximum usability.",
    highlights: ["Modern UI design", "Intuitive navigation", "Quick access menus", "Organized categories"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    ),
    title: "Regular Promotions",
    desc: "Stay engaged with exciting promotional campaigns including welcome offers, referral programs, daily activities, and seasonal events. New promotions are added regularly.",
    highlights: ["Welcome bonuses", "Referral programs", "Daily rewards", "Festival promotions"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Android Compatibility",
    desc: "Optimized specifically for Android devices, the application runs smoothly on a wide range of phones and tablets ensuring consistent performance across different screen sizes.",
    highlights: ["Wide device support", "Optimized performance", "Responsive design", "Low resource usage"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Account Security",
    desc: "Comprehensive security features protect your account from unauthorized access. The platform employs industry-standard practices to ensure your data remains safe.",
    highlights: ["Data encryption", "Privacy protection", "Secure transactions", "Account monitoring"],
  },
];

const comparison = [
  { feature: "Registration", value: "Free & Quick" },
  { feature: "Login Method", value: "Mobile + Password" },
  { feature: "Platform", value: "Android" },
  { feature: "Interface", value: "Modern & Clean" },
  { feature: "Updates", value: "Regular" },
  { feature: "Security", value: "Advanced" },
  { feature: "Promotions", value: "Multiple Types" },
  { feature: "Performance", value: "Fast & Responsive" },
  { feature: "Support", value: "Available" },
  { feature: "User Experience", value: "Beginner-Friendly" },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-60 h-60 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium mb-5 backdrop-blur-sm">
              Features
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
              Rajluck Game Features
            </h1>
            <p className="text-lg text-red-100 leading-relaxed max-w-2xl mx-auto">
              Discover the powerful features that make Rajluck Game the preferred choice for mobile gaming enthusiasts.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" className="w-full">
            <path d="M0 40L48 35C96 30 192 20 288 22C384 25 480 40 576 48C672 55 768 55 864 48C960 40 1056 25 1152 22C1248 20 1344 30 1392 35L1440 40V100H0V40Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Main Features */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {mainFeatures.map((f, i) => (
              <div
                key={i}
                className={`card-static p-6 sm:p-8 lg:p-10 flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-start gap-6 lg:gap-10`}
              >
                <div className="flex-1">
                  <div className="w-14 h-14 rounded-xl bg-primary-50 text-primary flex items-center justify-center mb-5">
                    {f.icon}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-3">{f.title}</h2>
                  <p className="text-text-secondary leading-relaxed mb-5">{f.desc}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {f.highlights.map((h, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-text-secondary">
                        <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full lg:w-80 flex-shrink-0">
                  <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 sm:p-10 flex items-center justify-center">
                    <div className="text-primary opacity-30 scale-[3]">
                      {f.icon}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
              Feature Overview
            </h2>
            <p className="text-text-secondary">
              A quick look at what Rajluck Game offers.
            </p>
          </div>
          <div className="card-static overflow-hidden">
            <table className="info-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((c) => (
                  <tr key={c.feature}>
                    <td className="font-medium text-text-primary">{c.feature}</td>
                    <td>
                      <span className="inline-flex items-center gap-1.5 text-text-secondary">
                        <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {c.value}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
            Experience All Features
          </h2>
          <p className="text-text-secondary mb-8 max-w-lg mx-auto">
            Download the Rajluck Game APK today and explore every feature on your Android device.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta w-full sm:w-auto justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download APK
            </a>
            <Link href="/download" className="btn-outline w-full sm:w-auto justify-center">
              Download Guide
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://rajluckgamers.com" },
              { "@type": "ListItem", position: 2, name: "Features", item: "https://rajluckgamers.com/features" },
            ],
          }),
        }}
      />
    </>
  );
}
