import type { Metadata } from "next";
import Link from "next/link";

const CTA_LINK = "https://share-rxapq9cajg.rajluck.co/web/share/index.html?ic=AA64CBGV&ts=1783054980&m=2&lang=en&id=1";

export const metadata: Metadata = {
  title: "How to Download Rajluck APK on Android – Step by Step Tutorial",
  description:
    "Learn how to safely download and install the latest Rajluck Game APK on your Android device. Step-by-step tutorial covering rajluck apk download, rajluck game apk, rajluck game download, device requirements, and troubleshooting tips.",
  keywords: [
    "download Rajluck APK",
    "Rajluck APK Android",
    "Rajluck Game APK download",
    "install Rajluck APK",
    "Rajluck APK latest version",
    "Rajluck download guide",
    "Rajluck APK 2026",
    "Rajluck",
    "Rajluck Game",
    "Rajluck APK",
    "Rajluck App",
    "rajluck apk download",
    "rajluck game apk",
    "rajluck game download",
    "Raj Luck",
    "Raj Luck Game",
    "Raj Luck Gamers",
  ],
  openGraph: {
    title: "How to Download Rajluck APK on Android – Step by Step",
    description: "Learn how to safely download and install the latest Rajluck Game APK on your Android device. Complete rajluck game apk download guide.",
    url: "https://rajluckgamers.com/blog/rajluck-apk-download-android",
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "How to Download Rajluck APK on Android",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Download Rajluck APK on Android – Step by Step",
    description: "Learn how to safely download and install the latest Rajluck Game APK on your Android device. Complete rajluck game apk download guide.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://rajluckgamers.com/blog/rajluck-apk-download-android" },
};

export default function DownloadArticle() {
  return (
    <>
      <article>
        {/* Hero */}
        <header className="hero-gradient-soft">
          <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-primary-100 text-primary text-xs font-semibold">Tutorial</span>
              <span className="text-sm text-text-muted">June 25, 2026</span>
              <span className="text-sm text-text-muted">•</span>
              <span className="text-sm text-text-muted">5 min read</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-text-primary leading-tight mb-4">
              How to Download Rajluck APK on Android – Step by Step
            </h1>
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed ">
              A detailed tutorial on downloading and installing the latest version of Rajluck Game APK on your Android phone or tablet.
            </p>
          </div>
        </header>

        {/* Content */}
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="flex-1 min-w-0">
              <section className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-4">Before You Begin</h2>
                <p className="text-text-secondary leading-relaxed mb-5">
                  Before downloading Rajluck Game APK, make sure your Android device meets the following requirements:
                </p>
                <div className="card-static overflow-hidden mb-6">
                  <table className="info-table">
                    <thead>
                      <tr><th>Requirement</th><th>Details</th></tr>
                    </thead>
                    <tbody>
                      <tr><td className="font-medium text-text-primary">Android Version</td><td className="text-text-secondary">5.0 or higher</td></tr>
                      <tr><td className="font-medium text-text-primary">Storage Space</td><td className="text-text-secondary">At least 50 MB free</td></tr>
                      <tr><td className="font-medium text-text-primary">RAM</td><td className="text-text-secondary">2 GB or more</td></tr>
                      <tr><td className="font-medium text-text-primary">Internet</td><td className="text-text-secondary">Stable connection</td></tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-4">Step-by-Step Download Guide</h2>
                <div className="space-y-5">
                  {[
                    {
                      title: "Step 1: Find a Trusted Source",
                      desc: "Visit the official Rajluck Game website or a trusted APK source. Always verify the URL before downloading to ensure you're getting the genuine application.",
                    },
                    {
                      title: "Step 2: Click the Download Button",
                      desc: "Look for the download button on the page and tap it. The APK file will begin downloading to your device automatically.",
                    },
                    {
                      title: "Step 3: Enable Unknown Sources",
                      desc: "Go to your phone's Settings → Security → Unknown Sources and enable it. This allows your device to install apps from outside the Play Store.",
                    },
                    {
                      title: "Step 4: Locate the Downloaded File",
                      desc: "Open your device's file manager and navigate to the Downloads folder. Find the Rajluck Game APK file you just downloaded.",
                    },
                    {
                      title: "Step 5: Install the APK",
                      desc: "Tap on the APK file and follow the on-screen instructions to install. The process usually takes less than a minute.",
                    },
                    {
                      title: "Step 6: Launch Rajluck Game",
                      desc: "Once installed, find the Rajluck Game icon on your home screen or app drawer. Tap it to launch and begin your registration.",
                    },
                  ].map((step, i) => (
                    <div key={i} className="card-static p-5 sm:p-6">
                      <div className="flex items-start gap-4">
                        <div className="step-number flex-shrink-0">{i + 1}</div>
                        <div>
                          <h3 className="font-bold text-text-primary mb-1.5">{step.title}</h3>
                          <p className="text-text-secondary text-sm leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta inline-flex">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download Rajluck Game APK
                  </a>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-4">Troubleshooting Tips</h2>
                <div className="space-y-3">
                  {[
                    { q: "APK not installing?", a: "Make sure you've enabled installation from unknown sources in your device settings." },
                    { q: "Download interrupted?", a: "Check your internet connection and try again. Use a stable Wi-Fi connection for best results." },
                    { q: "App crashing?", a: "Ensure you have the latest version installed. Clear the app cache and restart your device." },
                    { q: "Insufficient storage?", a: "Free up space by deleting unused apps, clearing cache, or moving files to cloud storage." },
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-surface rounded-xl">
                      <h3 className="font-semibold text-text-primary text-sm mb-1">{item.q}</h3>
                      <p className="text-text-muted text-sm">{item.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-4">Why Keep Rajluck APK Updated?</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Keeping your Rajluck Game APK updated is crucial for several reasons:
                </p>
                <ul className="space-y-2">
                  {[
                    "Improved security patches protect your account",
                    "Better performance and faster loading times",
                    "New features and gaming categories",
                    "Bug fixes for a smoother experience",
                    "Access to the latest promotions and rewards",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-text-secondary">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="w-full lg:w-72 flex-shrink-0">
              <div className="lg:sticky lg:top-24 space-y-6">
                <div className="card-static p-5 sm:p-6 text-center">
                  <h3 className="font-bold text-text-primary mb-3">Download Rajluck APK</h3>
                  <p className="text-sm text-text-muted mb-4">Latest version for Android</p>
                  <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta w-full justify-center !text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download Now
                  </a>
                </div>
                <div className="card-static p-5 sm:p-6">
                  <h3 className="font-bold text-text-primary mb-3">Related Articles</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/blog/rajluck-game-complete-guide" className="text-sm text-primary hover:text-primary-dark font-medium transition-colors">
                        Rajluck Game Complete Guide →
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/rajluck-game-register-login" className="text-sm text-primary hover:text-primary-dark font-medium transition-colors">
                        How to Register & Login →
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "How to Download Rajluck APK on Android – Step by Step",
            datePublished: "2026-06-25",
            dateModified: "2026-06-25",
            author: { "@type": "Organization", name: "rajluckgamers.com" },
            publisher: { "@type": "Organization", name: "rajluckgamers.com" },
            description: "Step-by-step guide to download and install the latest Rajluck Game APK on Android.",
            mainEntityOfPage: "https://rajluckgamers.com/blog/rajluck-apk-download-android",
          }),
        }}
      />
    </>
  );
}
