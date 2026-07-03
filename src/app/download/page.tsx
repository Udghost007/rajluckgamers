import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const CTA_LINK = "https://share-rxapq9cajg.rajluck.co/web/share/index.html?ic=AA64CBGV&ts=1783054980&m=2&lang=en&id=1";

export const metadata: Metadata = {
  title: "Download Rajluck Game APK – Latest Version for Android 2026",
  description:
    "Download the latest Rajluck Game APK for Android. Follow our step-by-step Rajluck download guide, device requirements, and installation instructions.",
  keywords: [
    "Rajluck Game download",
    "Rajluck APK download",
    "Download Rajluck",
    "Rajluck APK",
    "Rajluck Game APK",
    "Rajluck APK latest version",
    "Rajluck Game Android",
    "Rajluck App download",
    "Rajluck APK 2026",
    "Rajluck download",
    "rajluck apk download",
    "rajluck game apk download",
    "Raj Luck",
    "Raj Luck Game",
    "Raj Luck Gamers",
  ],
  openGraph: {
    title: "Download Rajluck Game APK – Latest Version for Android 2026",
    description:
      "Download the latest Rajluck Game APK for Android. Complete Rajluck download guide with device requirements and installation steps.",
    url: "https://rajluckgamers.com/download",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Download Rajluck Game APK for Android",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Download Rajluck Game APK – Latest Version for Android 2026",
    description:
      "Download the latest Rajluck Game APK for Android. Complete Rajluck download guide with device requirements and installation steps.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://rajluckgamers.com/download",
  },
};

const downloadSteps = [
  {
    title: "Check Device Compatibility",
    desc: "Ensure your Android device meets the minimum requirements. Most modern Android phones and tablets are supported.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Free Up Storage Space",
    desc: "Make sure you have sufficient storage space on your device for a smooth installation process.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
  },
  {
    title: "Download the APK",
    desc: "Click the download button below to get the latest version of the Rajluck Game APK from a trusted source.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
  },
  {
    title: "Enable Installation",
    desc: "If prompted, allow installation from unknown sources in your device settings to proceed with APK installation.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Install the Application",
    desc: "Locate the downloaded APK file and tap to install. Follow the on-screen prompts to complete installation.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Launch & Register",
    desc: "Open Rajluck Game, create your account, and start exploring the platform's features and gaming categories.",
    icon: (
      <Image src="/logo.webp" alt="Rajluck Game Logo" width={24} height={24} className="w-6 h-6 rounded-lg shadow-md" />
    ),
  },
];

const requirements = [
  { label: "Operating System", value: "Android 5.0 or higher" },
  { label: "Storage", value: "50 MB minimum free space" },
  { label: "RAM", value: "2 GB or more recommended" },
  { label: "Internet", value: "Stable connection required" },
  { label: "Screen", value: "Any Android screen size" },
];

export default function DownloadPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-5 sm:py-10 relative">
          <div className="text-center  mx-auto">
            <span className="inline-block px-2 sm:px-4 py-1.5 rounded-full bg-white/20 text-black text-sm font-medium mb-3 sm:mb-4 animate-fade-in backdrop-blur-sm">
              Download Guide
            </span>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-black leading-tight mb-4 sm:mb-6 animate-slide-up">
              Download Rajluck Game APK
            </h1>
            <p className="text-lg text-red-900 leading-relaxed mb-8  mx-auto">
              Get the latest version of Rajluck Game APK for your Android device. Follow our step-by-step guide for a smooth download and installation.
            </p>
            <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta !text-lg !py-3 sm:!py-4 !px-10 inline-flex">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Now
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" className="w-full">
            <path d="M0 40L48 35C96 30 192 20 288 22C384 25 480 40 576 48C672 55 768 55 864 48C960 40 1056 25 1152 22C1248 20 1344 30 1392 35L1440 40V100H0V40Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="section-padding bg-white">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
              Step-by-Step Download Guide
            </h2>
            <p className="text-text-secondary max-w-lg mx-auto">
              Follow these simple steps to download and install Rajluck Game on your Android device.
            </p>
          </div>
          <div className="space-y-6">
            {downloadSteps.map((step, i) => (
              <div key={i} className="card-static p-5 sm:p-7 flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="flex items-center gap-4 sm:flex-col sm:items-center sm:gap-2">
                  <div className="step-number text-lg">{i + 1}</div>
                  <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary flex items-center justify-center sm:hidden">
                    {step.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-text-primary mb-1.5">{step.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{step.desc}</p>
                </div>
                <div className="hidden sm:flex w-12 h-12 rounded-xl bg-primary-50 text-primary items-center justify-center flex-shrink-0">
                  {step.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section-padding bg-surface">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
              Device Requirements
            </h2>
            <p className="text-text-secondary">
              Make sure your device meets these minimum requirements before downloading.
            </p>
          </div>
          <div className="card-static overflow-hidden">
            <table className="info-table">
              <thead>
                <tr>
                  <th>Requirement</th>
                  <th>Specification</th>
                </tr>
              </thead>
              <tbody>
                {requirements.map((r) => (
                  <tr key={r.label}>
                    <td className="font-medium text-text-primary">{r.label}</td>
                    <td className="text-text-secondary">{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="section-padding bg-white">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-8 text-center">
            Important Download Tips
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: "✅", tip: "Always download from trusted and verified sources." },
              { icon: "🔄", tip: "Install updates whenever a new version is available." },
              { icon: "📱", tip: "Ensure your Android version is 5.0 or higher." },
              { icon: "💾", tip: "Keep at least 50 MB of free storage space." },
              { icon: "🔒", tip: "Using the latest version improves security." },
              { icon: "⚡", tip: "A stable internet connection ensures faster downloads." },
            ].map((t, i) => (
              <div key={i} className="flex items-center gap-4 card-static p-5">
                <span className="text-xl flex-shrink-0">{t.icon}</span>
                <p className="text-text-secondary font-medium text-sm">{t.tip}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta inline-flex">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Rajluck Game APK
            </a>
          </div>
        </div>
      </section>

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://rajluckgamers.com" },
              { "@type": "ListItem", position: 2, name: "Download", item: "https://rajluckgamers.com/download" },
            ],
          }),
        }}
      />
    </>
  );
}
