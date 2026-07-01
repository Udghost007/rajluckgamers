import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const CTA_LINK = "https://share-rxapq9cajg.rajluck.co/web/share/index.html?ic=AA0DL7ND&ts=1782835740&m=2&lang=en&id=1";

export const metadata: Metadata = {
  title: "Rajluck APK Download – Version History & Changelog 2026",
  description: "Complete version history of Rajluck APK. Every release, changelog, migration notes, how to check your version, and rollback instructions. Stay up to date with rajluckgamers.com.",
  keywords: ["Rajluck APK Download", "Rajluck version history", "Rajluck changelog", "Rajluck update log", "Rajluck APK versions", "Rajluck rollback", "Rajluck latest version", "RajluckGamers", "rajluckgamers"],
  openGraph: { title: "Rajluck APK Download – Version History 2026", description: "Complete Rajluck APK version history and changelog.", url: "https://rajluckgamers.com/rajluck-apk-download", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Rajluck APK Version History" }] },
  twitter: { card: "summary_large_image", title: "Rajluck APK Version History", description: "Every Rajluck APK version, changelog, and migration guide.", images: ["/og-image.png"] },
  alternates: { canonical: "https://rajluckgamers.com/rajluck-apk-download" },
};

const versions = [
  {
    version: "3.2.0",
    date: "June 2026",
    tag: "Latest",
    changes: [
      "Added 25 new slot games with progressive jackpot feature",
      "Redesigned wallet interface with one-tap deposit",
      "Improved live casino stream quality (1080p support)",
      "Fixed crash when switching between games rapidly",
      "Added Hindi language support for customer chat",
      "Reduced APK size from 52 MB to 45 MB through asset compression",
    ],
  },
  {
    version: "3.1.2",
    date: "April 2026",
    tag: "Stable",
    changes: [
      "Hotfix for withdrawal processing delay on certain bank accounts",
      "Fixed notification sound not playing on Android 14 devices",
      "Improved referral link tracking accuracy",
      "Minor UI fixes for small screen devices",
    ],
  },
  {
    version: "3.1.0",
    date: "March 2026",
    tag: "",
    changes: [
      "Introduced VIP Diamond tier with exclusive rewards",
      "Added 15 new fishing games with upgraded graphics",
      "New in-app tutorial for first-time users",
      "Biometric login support (fingerprint and face unlock)",
      "Performance improvements reducing load times by 30%",
    ],
  },
  {
    version: "3.0.0",
    date: "January 2026",
    tag: "Major",
    changes: [
      "Complete UI redesign with new color scheme and navigation",
      "Migrated to new server infrastructure (faster response times)",
      "Added live sports betting with in-play markets",
      "New payment methods: Google Pay and PhonePe direct integration",
      "Account migration required from v2.x — automatic prompt on first launch",
      "Dropped support for Android 4.x (minimum now Android 5.0)",
    ],
  },
  {
    version: "2.5.0",
    date: "October 2025",
    tag: "",
    changes: [
      "Added 50 new slot machine themes",
      "Improved withdrawal speed to under 4 hours",
      "Fixed intermittent logout issue on some Samsung devices",
      "Added daily login streak rewards",
    ],
  },
  {
    version: "2.4.0",
    date: "August 2025",
    tag: "",
    changes: [
      "Introduced referral program with commission tracking",
      "Added Teen Patti and Rummy game modes",
      "Push notification support for promotions and results",
      "Battery usage optimization reducing drain by 20%",
    ],
  },
  {
    version: "2.0.0",
    date: "May 2025",
    tag: "Major",
    changes: [
      "First major release with complete game platform",
      "Wallet system with UPI and bank transfer support",
      "100+ games across slots, cards, and lottery categories",
      "VIP tier system (Bronze, Silver, Gold, Platinum)",
      "In-app live chat customer support",
    ],
  },
];

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-5 sm:py-10 relative">
          <div className="text-center mx-auto">
            <span className="inline-block px-2 sm:px-4 py-1.5 rounded-full bg-white/20 text-black text-sm font-medium mb-3 sm:mb-4 animate-fade-in backdrop-blur-sm">
              Version History & Changelog
            </span>
            <Image src="/logo.webp" alt="Rajluck APK Version History" width={160} height={160} className="mx-auto mb-4 rounded-2xl shadow-lg" priority />
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-black leading-tight mb-4 sm:mb-6 animate-slide-up">
              Rajluck APK Download – <span className="gradient-text">Version History</span>
            </h1>
            <p className="text-lg text-red-900 leading-relaxed mb-8 max-w-2xl mx-auto">
              Track every Rajluck APK release from the very first version to today. See what changed, what was fixed, and what was added in each update.
            </p>
            <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta !text-lg !py-3 sm:!py-4 !px-10 inline-flex">
              Download Latest Version (v3.2.0)
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" className="w-full"><path d="M0 40L48 35C96 30 192 20 288 22C384 25 480 40 576 48C672 55 768 55 864 48C960 40 1056 25 1152 22C1248 20 1344 30 1392 35L1440 40V100H0V40Z" fill="white" /></svg>
        </div>
      </section>

      {/* How to Check Your Version */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">How to Check Your Current Version</h2>
            <p className="text-text-secondary max-w-lg mx-auto">Find out which version you are running before deciding whether to update.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {[
              { title: "Method 1: Inside the App", steps: "Open Rajluck Game > tap your profile icon (top right) > tap 'About' or 'Settings'. The version number appears at the bottom of the screen (e.g., v3.2.0)." },
              { title: "Method 2: Android Settings", steps: "Go to Settings > Apps > Rajluck Game > scroll down. The version number is listed under 'App info'. This works even if the app will not open." },
              { title: "Method 3: File Manager", steps: "If you still have the APK file in your Downloads folder, long-press it > Properties/Details. The version code is embedded in the file metadata." },
              { title: "Method 4: Compare File Size", steps: "The latest APK (v3.2.0) is approximately 45 MB. If your downloaded file is significantly different in size, you likely have an older or corrupted version." },
            ].map((method, i) => (
              <div key={i} className="card-static p-5">
                <h3 className="font-bold text-text-primary mb-2">{method.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{method.steps}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Version Timeline */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">Complete Version History</h2>
            <p className="text-text-secondary max-w-lg mx-auto">Every release from the initial launch to the current version, with full changelogs.</p>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            {versions.map((v) => (
              <div key={v.version} className="card-static p-6">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold text-text-primary">v{v.version}</h3>
                  <span className="text-text-secondary text-sm">{v.date}</span>
                  {v.tag && (
                    <span className={`px-3 py-0.5 rounded-full text-xs font-bold ${v.tag === "Latest" ? "bg-green-100 text-green-700" : v.tag === "Major" ? "bg-red-100 text-red-700" : "bg-blue-100 text-blue-700"}`}>
                      {v.tag}
                    </span>
                  )}
                </div>
                <ul className="space-y-2">
                  {v.changes.map((change, i) => (
                    <li key={i} className="text-text-secondary text-sm flex items-start gap-2">
                      <span className="text-primary mt-0.5 flex-shrink-0">&#8226;</span>
                      {change}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Notes */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">Migration Notes</h2>
            <p className="text-text-secondary max-w-lg mx-auto">Important information when upgrading between major versions.</p>
          </div>
          <div className="space-y-5 max-w-3xl mx-auto">
            <div className="card p-6">
              <h3 className="text-lg font-bold text-text-primary mb-3">Upgrading from v2.x to v3.x</h3>
              <ul className="space-y-2">
                {[
                  "Your account data (balance, game history, VIP status) is automatically migrated.",
                  "You will be prompted to set a new password on first launch due to enhanced security.",
                  "Saved payment methods need to be re-verified (one-time OTP verification).",
                  "Android 4.x devices are no longer supported. You need Android 5.0 or higher.",
                  "The old referral links still work — they redirect to the new system automatically.",
                  "Game progress in slot machines resets (jackpot counters restart). This is expected.",
                ].map((note, i) => (
                  <li key={i} className="text-text-secondary text-sm flex items-start gap-2">
                    <span className="text-primary mt-0.5 flex-shrink-0">&#8226;</span> {note}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-bold text-text-primary mb-3">Upgrading within v3.x (e.g., 3.0 to 3.2)</h3>
              <ul className="space-y-2">
                {[
                  "No migration required. Install the new APK over the existing one.",
                  "All data, settings, and login sessions are preserved.",
                  "New features become available immediately after update.",
                  "Cache may be cleared during update — first launch may take a few extra seconds.",
                ].map((note, i) => (
                  <li key={i} className="text-text-secondary text-sm flex items-start gap-2">
                    <span className="text-primary mt-0.5 flex-shrink-0">&#8226;</span> {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Rollback Instructions */}
      <section className="section-padding bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">How to Roll Back to a Previous Version</h2>
            <p className="text-text-secondary max-w-lg mx-auto">If the latest version has issues on your device, you can revert to the previous stable release.</p>
          </div>
          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              { step: "1", title: "Uninstall the Current Version", desc: "Go to Settings > Apps > Rajluck Game > Uninstall. This removes the app but your account data is stored on the server, not locally." },
              { step: "2", title: "Download the Previous Version", desc: "Contact Rajluck support via live chat and request the APK for the specific version you need. Support can provide direct download links for recent stable releases." },
              { step: "3", title: "Install the Older APK", desc: "Install the older APK the same way you installed the original. Enable unknown sources if needed and tap to install." },
              { step: "4", title: "Log In to Your Account", desc: "Open the app and log in with your existing credentials. Your balance, VIP status, and history are all server-side and will be intact." },
              { step: "5", title: "Report the Issue", desc: "Let support know which version caused the problem and what the symptoms were. This helps the development team fix the issue in the next release." },
            ].map((item) => (
              <div key={item.step} className="card-static p-5 flex items-start gap-4">
                <div className="step-number text-lg flex-shrink-0">{item.step}</div>
                <div>
                  <h3 className="font-bold text-text-primary mb-1">{item.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-8 text-center">Version History FAQs</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              { q: "How often does Rajluck release updates?", a: "Major updates come every 2-3 months. Hotfix patches are released as needed, sometimes weekly, to address urgent bugs or security issues." },
              { q: "Will I lose my money if I update?", a: "No. Your wallet balance is stored on Rajluck's servers, not on your device. Updating, uninstalling, or reinstalling does not affect your balance." },
              { q: "Can I skip versions when updating?", a: "Yes. You can update directly from any old version to the latest version. There is no need to install intermediate versions." },
              { q: "Do I get notified when updates are available?", a: "Yes. The app displays an update prompt when you launch it if a newer version is available. You can also check rajluckgamers.com for the latest version." },
              { q: "Are old versions still functional?", a: "Versions within the same major release (e.g., all v3.x) typically continue working. Very old versions (v2.x and below) may stop working when server APIs are deprecated." },
            ].map((faq, i) => (
              <div key={i} className="card-static p-5">
                <h3 className="font-bold text-text-primary mb-2">{faq.q}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-surface text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">Get the Latest Version</h2>
          <p className="text-text-secondary mb-8 max-w-lg mx-auto">Version 3.2.0 is the latest release with 25 new games, a redesigned wallet, and improved performance. Download it now.</p>
          <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta !text-lg !py-3 sm:!py-4 !px-10 inline-flex">
            Download Rajluck APK v3.2.0
          </a>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-text-primary mb-6 text-center">Related Pages</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: "/rajluckgameapk", label: "Features Walkthrough" },
              { href: "/rajluckgameapkdownload", label: "Complete Download Tutorial" },
              { href: "/raj-luck-game-apk-download", label: "Download Troubleshooting" },
              { href: "/rajluckapkdownload", label: "Speed & Data Optimization" },
              { href: "/rajluck-download", label: "Download Methods Compared" },
              { href: "/rajluck-game-apk-download", label: "APK Verification Guide" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="btn-outline text-center block">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://rajluckgamers.com" }, { "@type": "ListItem", position: 2, name: "Rajluck APK Download", item: "https://rajluckgamers.com/rajluck-apk-download" }] }) }} />
    </>
  );
}
