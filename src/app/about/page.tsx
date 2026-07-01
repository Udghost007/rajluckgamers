import type { Metadata } from "next";
import Link from "next/link";

const CTA_LINK = "https://share-rxapq9cajg.rajluck.co/web/share/index.html?ic=AA0DL7ND&ts=1782835740&m=2&lang=en&id=1";

export const metadata: Metadata = {
  title: "About Rajluck Game – Platform Overview & Benefits",
  description:
    "Learn about Rajluck Game — a mobile-friendly Android gaming platform. Discover what makes the Rajluck App stand out: easy registration, secure Rajluck Game login, fast performance, and regular APK updates for all Android users.",
  keywords: [
    "About Rajluck Game",
    "Rajluck Game information",
    "Rajluck platform",
    "Rajluck Game benefits",
    "Rajluck App about",
    "What is Rajluck Game",
    "Rajluck",
    "RajluckGame",
    "Rajluck App",
    "Rajluck Game APK",
    "Raj Luck",
    "Raj Luck Game",
    "Raj Luck Gamers",
  ],
  openGraph: {
    title: "About Rajluck Game – Platform Overview & Benefits",
    description: "Learn about Rajluck Game — a mobile-friendly Android gaming platform with easy registration, secure Rajluck Game login, and regular APK updates.",
    url: "https://rajluckgamers.com/about",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Rajluck Game",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Rajluck Game – Platform Overview & Benefits",
    description: "Learn about Rajluck Game — a mobile-friendly Android gaming platform with easy registration, secure login, and regular APK updates.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://rajluckgamers.com/about" },
};

const values = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Performance First",
    desc: "The application is engineered for speed, ensuring fast loading times, smooth navigation, and responsive interactions across all Android devices.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Security & Privacy",
    desc: "User account protection is a top priority. Advanced security measures help keep personal information safe and accounts protected at all times.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Regular Updates",
    desc: "The platform receives continuous updates to introduce new features, improve stability, fix bugs, and enhance the overall gaming experience.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "User-Centric Design",
    desc: "Every aspect of the interface is designed with users in mind — from simple navigation to intuitive controls, making it accessible for everyone.",
  },
];

const stats = [
  { number: "1M+", label: "Downloads" },
  { number: "4.5★", label: "User Rating" },
  { number: "24/7", label: "Support" },
  { number: "100+", label: "Games" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-5 sm:py-10 relative">
          <div className="text-center  mx-auto">
            <span className="inline-block px-2 sm:px-4 py-1.5 rounded-full bg-white/20 text-black text-sm font-medium mb-3 sm:mb-4 animate-fade-in backdrop-blur-sm">
              About Us
            </span>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-black leading-tight mb-4 sm:mb-6 animate-slide-up">
              About Rajluck Game
            </h1>
            <p className="text-lg text-red-900 leading-relaxed  mx-auto">
              A mobile-friendly gaming platform designed to provide Android users with a convenient, secure, and enjoyable gaming experience.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" className="w-full">
            <path d="M0 40L48 35C96 30 192 20 288 22C384 25 480 40 576 48C672 55 768 55 864 48C960 40 1056 25 1152 22C1248 20 1344 30 1392 35L1440 40V100H0V40Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white pb-8">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {stats.map((s, i) => (
              <div key={i} className="card p-5 sm:p-6 text-center">
                <p className="text-2xl sm:text-3xl font-extrabold gradient-text mb-1">{s.number}</p>
                <p className="text-sm text-text-muted font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary text-sm font-medium mb-4">
              Our Story
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-5">
              What is Rajluck Game?
            </h2>
          </div>
          <div className="card-static p-6 sm:p-10 space-y-5">
            <p className="text-text-secondary leading-relaxed text-base sm:text-lg">
              Rajluck Game is a mobile-friendly gaming platform that brings together multiple entertainment options in one application. Built for Android users, the platform offers an easy registration process, quick account access, and a clean interface that makes navigation simple for beginners as well as experienced users.
            </p>
            <p className="text-text-secondary leading-relaxed text-base sm:text-lg">
              The Rajluck Game platform is designed to provide users with a convenient mobile gaming experience. After creating an account, users can explore different gaming categories, manage their profiles, and stay updated with new promotions and platform announcements.
            </p>
            <p className="text-text-secondary leading-relaxed text-base sm:text-lg">
              The application is regularly improved to enhance speed, stability, and overall user experience. Whether you&apos;re looking for the latest Rajluck Game APK, download instructions, account registration, or information about available rewards, the platform has everything covered.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
              What Makes Rajluck Game Different
            </h2>
            <p className="text-text-secondary  mx-auto">
              Our commitment to quality, security, and user satisfaction sets us apart.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div key={i} className="card p-6 sm:p-8 group">
                <div className="w-14 h-14 rounded-xl bg-primary-50 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">{v.title}</h3>
                <p className="text-text-secondary leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
              Benefits of Using Rajluck Game
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { icon: "📱", label: "Easy Account Creation" },
              { icon: "⚡", label: "Quick Login" },
              { icon: "🎨", label: "Mobile-Friendly UI" },
              { icon: "🚀", label: "Fast Performance" },
              { icon: "🔄", label: "Regular Updates" },
              { icon: "🎁", label: "Promotions" },
              { icon: "👤", label: "Beginner-Friendly" },
              { icon: "🔒", label: "Secure Accounts" },
              { icon: "🧭", label: "Easy Navigation" },
              { icon: "✨", label: "Great UX" },
            ].map((b, i) => (
              <div key={i} className="card p-4 sm:p-5 text-center">
                <span className="text-2xl sm:text-3xl mb-2 block">{b.icon}</span>
                <p className="text-xs sm:text-sm font-semibold text-text-primary">{b.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding hero-gradient-soft">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
            Ready to Experience Rajluck Game?
          </h2>
          <p className="text-text-secondary mb-8 max-w-lg mx-auto">
            Download the latest Rajluck Game APK and start your gaming journey today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta w-full sm:w-auto justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download APK
            </a>
            <Link href="/features" className="btn-outline w-full sm:w-auto justify-center">
              Explore Features
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
              { "@type": "ListItem", position: 2, name: "About", item: "https://rajluckgamers.com/about" },
            ],
          }),
        }}
      />
    </>
  );
}
