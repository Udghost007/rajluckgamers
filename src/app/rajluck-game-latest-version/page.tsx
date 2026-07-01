import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rajluck Game Latest Version – Download Newest APK 2026",
  description: "Rajluck Game Latest Version — download the newest Rajluck Game APK with all the latest features and updates. rajluck game latest version, rajluck latest version, rajluck new version.",
  keywords: ["Rajluck Game Latest Version", "Rajluck latest version", "Rajluck new version", "Rajluck Game update", "Rajluck APK latest", "Rajluck Game newest", "Rajluck Game", "Rajluck", "Raj Luck Game Latest Version", "RajluckGamers"],
  openGraph: { title: "Rajluck Game Latest Version – Newest APK 2026", description: "Download Rajluck Game latest version at rajluckgamers.com.", url: "https://rajluckgamers.com/rajluck-game-latest-version", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Rajluck Game Latest Version" }] },
  twitter: { card: "summary_large_image", title: "Rajluck Game Latest Version", images: ["/og-image.png"] },
  alternates: { canonical: "https://rajluckgamers.com/rajluck-game-latest-version" },
};

const CTA_LINK = "https://share-rxapq9cajg.rajluck.co/web/share/index.html?ic=AA0DL7ND&ts=1782835740&m=2&lang=en&id=1";

export default function Page() {
  return (
    <main className="min-h-screen bg-surface text-text-primary">
      {/* Hero */}
      <section className="hero-gradient section-padding text-center">
        <Image src="/logo.webp" alt="Rajluck Game Latest Version" width={160} height={160} className="w-[100px] sm:w-[180px] mx-auto mb-6 drop-shadow-2xl animate-fade-in" priority />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-black mb-4 animate-slide-up">Rajluck Game Latest Version</h1>
        <p className="text-xl text-black/80 mb-3 font-medium">Changelog, New Features &amp; What Changed</p>
        <p className="text-base text-black/70 max-w-2xl mx-auto mb-8">
          Rajluck Game is continuously improved through regular version releases. This page documents the latest version details, what features were added, which bugs were fixed, how performance improved, and how to confirm you are running the most current build.
        </p>
        <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta inline-block text-lg font-bold px-10 py-4 rounded-full shadow-xl animate-fade-in">
          Download Latest Version
        </a>
      </section>

      {/* Version Info */}
      <section className="section-padding max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold gradient-text mb-6">Current Version Information</h2>
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {[
            { label: "Current Version", value: "v4.2.1" },
            { label: "Release Date", value: "June 2026" },
            { label: "APK File Size", value: "48.7 MB" },
            { label: "Minimum Android", value: "Android 7.0 (Nougat)" },
            { label: "Target SDK", value: "Android 14" },
            { label: "Architecture", value: "ARM64 / ARMv7" },
          ].map((item) => (
            <div key={item.label} className="card-static bg-primary-50 rounded-xl p-5 text-center">
              <p className="text-text-muted text-xs font-medium uppercase tracking-wide mb-1">{item.label}</p>
              <p className="text-xl font-bold text-primary">{item.value}</p>
            </div>
          ))}
        </div>
        <p className="text-text-muted text-sm">
          Version information is updated with each new release. Always download from rajluckgamers.com to ensure you receive the authentic latest build.
        </p>
      </section>

      {/* Understanding Version Numbers */}
      <section className="section-padding bg-primary-50 max-w-full">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold gradient-text mb-6">Understanding Rajluck Version Numbers</h2>
          <p className="text-text-secondary mb-8">
            Rajluck uses semantic versioning in the format <strong>Major.Minor.Patch</strong>. Knowing what each number means helps you understand the significance of an available update.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="card p-6 text-center">
              <p className="text-5xl font-extrabold text-primary mb-3">4</p>
              <h3 className="font-bold text-text-primary mb-2">Major Version</h3>
              <p className="text-text-secondary text-sm">Significant platform overhaul. Major version increments indicate fundamental changes to the app architecture, UI, or core feature set. These are milestone releases.</p>
            </div>
            <div className="card p-6 text-center">
              <p className="text-5xl font-extrabold text-primary mb-3">2</p>
              <h3 className="font-bold text-text-primary mb-2">Minor Version</h3>
              <p className="text-text-secondary text-sm">New features added in a backward-compatible manner. Minor version bumps bring new game categories, new bonus mechanics, or new UI components.</p>
            </div>
            <div className="card p-6 text-center">
              <p className="text-5xl font-extrabold text-primary mb-3">1</p>
              <h3 className="font-bold text-text-primary mb-2">Patch Version</h3>
              <p className="text-text-secondary text-sm">Bug fixes and minor performance improvements. Patch releases address specific reported issues without adding new features. Always safe to apply immediately.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Changelog */}
      <section className="section-padding max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold gradient-text mb-6">v4.2.1 — Detailed Changelog</h2>
        <p className="text-text-secondary mb-8">
          The following changes were included in the v4.2.1 release. Each item is categorized by type for quick reference.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-green-700 mb-4">New Features</h3>
            <ul className="space-y-3">
              {[
                "Added Quick Launch bar — pin your 5 favourite games for one-tap access from the home screen.",
                "Introduced Dark Mode toggle in Settings → Display Preferences.",
                "New Jackpot Tracker widget shows live jackpot amounts across all eligible games.",
                "Multi-currency display option now available in Account Settings.",
                "Revamped Referral Dashboard with real-time tracking of each referred user's deposit status.",
              ].map((feat) => (
                <li key={feat} className="flex gap-3 text-text-secondary text-sm">
                  <span className="text-green-600 font-bold flex-shrink-0">+</span>
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-700 mb-4">Performance Improvements</h3>
            <ul className="space-y-3">
              {[
                "Game lobby loading time reduced by 35% through improved asset bundling and CDN routing.",
                "Memory usage during extended sessions reduced by 20% — fewer background crashes on low-RAM devices.",
                "WebSocket connection stability improved — session drop rate reduced from 0.8% to 0.2%.",
                "Battery consumption during idle lobby browsing reduced by 15%.",
              ].map((perf) => (
                <li key={perf} className="flex gap-3 text-text-secondary text-sm">
                  <span className="text-blue-500 font-bold flex-shrink-0">↑</span>
                  {perf}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-orange-600 mb-4">Bug Fixes</h3>
            <ul className="space-y-3">
              {[
                "Fixed: Daily bonus not crediting on the 7th consecutive day streak on some devices.",
                "Fixed: Screen rotation during live dealer sessions caused audio desync.",
                "Fixed: Push notifications duplicating on devices running Android 13.",
                "Fixed: Withdrawal form resetting after session timeout instead of retaining entered values.",
                "Fixed: Incorrect badge count on notification icon after clearing in-app messages.",
              ].map((fix) => (
                <li key={fix} className="flex gap-3 text-text-secondary text-sm">
                  <span className="text-orange-500 font-bold flex-shrink-0">✕</span>
                  {fix}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How to Check Your Version */}
      <section className="section-padding bg-primary-100 max-w-full">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold gradient-text mb-6">How to Check Your Current Version</h2>
          <p className="text-text-secondary mb-8">
            Not sure if you are running the latest version? Follow these steps to check your installed version number in under 30 seconds.
          </p>
          <ol className="space-y-5">
            {[
              { step: "1", title: "Open Rajluck Game", desc: "Launch the app and wait for it to fully load to the home lobby screen." },
              { step: "2", title: "Tap Your Profile Icon", desc: "Tap your profile avatar or initial in the top-right corner of the screen to open your account menu." },
              { step: "3", title: "Scroll to 'About'", desc: "Scroll down in the account menu until you see the 'About' section at the bottom of the list." },
              { step: "4", title: "View App Version", desc: "The current version number (e.g., v4.2.1) is displayed under 'App Version'. If it is lower than the current version listed above, an update is available." },
              { step: "5", title: "Tap 'Check for Updates'", desc: "Tapping this button sends a request to the Rajluck update server and notifies you if a newer version is available for download." },
            ].map((item) => (
              <li key={item.step} className="flex gap-4 items-start">
                <span className="step-number flex-shrink-0">{item.step}</span>
                <div>
                  <h4 className="font-bold text-text-primary mb-1">{item.title}</h4>
                  <p className="text-text-secondary text-sm">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold gradient-text mb-8">Version FAQ</h2>
        <div className="space-y-6">
          {[
            { q: "How often does Rajluck Game release new versions?", a: "Rajluck Game typically releases patch updates (bug fixes) every 2–3 weeks and minor feature updates every 4–6 weeks. Major version releases happen approximately once per quarter and are announced in advance through in-app notifications." },
            { q: "Do I lose my data when updating to a new version?", a: "No. All account data — balance, game history, bonus status, VIP tier, and referral records — is stored server-side and is completely unaffected by version updates. Only locally cached assets are refreshed." },
            { q: "Can I run an older version of Rajluck Game?", a: "Older versions continue to function until the Rajluck servers deprecate that version's API endpoints. We strongly recommend staying on the latest version for security patches, optimal performance, and access to new features." },
            { q: "Is v4.2.1 safe to install?", a: "Yes. All Rajluck APK releases are signed with the official developer certificate and scanned for security vulnerabilities before publishing. Always download from rajluckgamers.com to ensure file authenticity." },
            { q: "What if the app store shows a different version than listed here?", a: "Always treat rajluckgamers.com as the authoritative source for the latest version number and download. Third-party app repositories may host outdated or modified versions." },
          ].map((faq) => (
            <div key={faq.q} className="card p-6">
              <h3 className="font-bold text-text-primary mb-2">{faq.q}</h3>
              <p className="text-text-secondary text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient-soft section-padding text-center">
        <h2 className="text-3xl font-bold text-black mb-4">Get the Latest Rajluck Version</h2>
        <p className="text-black/70 mb-8 max-w-xl mx-auto">Download v4.2.1 now and experience all the new features, performance improvements, and fixes.</p>
        <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta inline-block text-lg font-bold px-10 py-4 rounded-full shadow-xl">
          Download v4.2.1 Now
        </a>
      </section>

      {/* Internal Links */}
      <section className="section-padding max-w-4xl mx-auto">
        <h2 className="text-xl font-bold text-text-primary mb-4">Related Guides</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/rajluck-game-update" className="btn-outline px-4 py-2 rounded-full text-sm">Update Guide</Link>
          <Link href="/rajluck-game-install" className="btn-outline px-4 py-2 rounded-full text-sm">Installation Guide</Link>
          <Link href="/rajluck-game-apk-download" className="btn-outline px-4 py-2 rounded-full text-sm">APK Verification</Link>
          <Link href="/rajluck-download" className="btn-outline px-4 py-2 rounded-full text-sm">Download Guide</Link>
          <Link href="/rajluck-game-play" className="btn-outline px-4 py-2 rounded-full text-sm">How to Play</Link>
          <Link href="/rajluck-game-bonus" className="btn-outline px-4 py-2 rounded-full text-sm">Bonus System</Link>
        </div>
      </section>
    </main>
  );
}
