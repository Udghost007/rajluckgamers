import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rajluck App Download – Free APK Download for Android 2026",
  description: "Rajluck App Download — download the Rajluck App APK free for Android. Also known as Rajluck Game App Download, Raj Luck App Download. Official guide at rajluckgamers.com.",
  keywords: ["Rajluck App Download", "Rajluck App", "download Rajluck App", "Rajluck App APK", "Rajluck Game App Download", "Rajluck Game", "Rajluck", "Raj Luck App Download", "RajluckGamers"],
  openGraph: { title: "Rajluck App Download – Free for Android 2026", description: "Download Rajluck App free at rajluckgamers.com.", url: "https://rajluckgamers.com/rajluck-app-download", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Rajluck App Download" }] },
  twitter: { card: "summary_large_image", title: "Rajluck App Download", images: ["/og-image.png"] },
  alternates: { canonical: "https://rajluckgamers.com/rajluck-app-download" },
};

const CTA_LINK = "https://share-rxapq9cajg.rajluck.co/web/share/index.html?ic=AA0DL7ND&ts=1782835740&m=2&lang=en&id=1";

export default function Page() {
  return (
    <main>
      {/* Hero */}
      <section className="hero-gradient section-padding text-center">
        <Image src="/logo.webp" alt="Rajluck App Download" width={160} height={160} className="w-[100px] sm:w-[180px] mx-auto mb-6 drop-shadow-2xl animate-fade-in" priority />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-black mb-4 animate-slide-up">
          Rajluck App Download<br />WiFi vs Mobile Data Comparison
        </h1>
        <p className="text-lg text-black/80 max-w-2xl mx-auto mb-8">
          Wondering whether to download Rajluck App on WiFi or mobile data? This guide breaks down download size, data consumption, bandwidth requirements, offline capabilities, and cost implications so you can choose the best method for your situation.
        </p>
        <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta text-lg px-8 py-4 inline-block">
          Download Rajluck App Free
        </a>
      </section>

      {/* APK Size Info */}
      <section className="section-padding bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4 gradient-text">How Big Is the Rajluck App APK?</h2>
          <p className="text-text-secondary mb-6">
            The Rajluck App APK is currently <strong>52 MB</strong> as of the July 2026 build. This is considered a lightweight app — smaller than most messaging and social media apps. Here's how that size breaks down:
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { component: "Core App Code", size: "~18 MB", desc: "The engine, game logic, and UI framework that power the application" },
              { component: "Visual Assets", size: "~22 MB", desc: "Icons, game thumbnails, UI textures, and compressed animations" },
              { component: "Security Libraries", size: "~12 MB", desc: "Encryption, certificate validation, and anti-tamper components" },
            ].map(({ component, size, desc }) => (
              <div key={component} className="card text-center">
                <div className="text-3xl font-extrabold gradient-text mb-1">{size}</div>
                <h3 className="font-bold text-text-primary mb-2 text-sm">{component}</h3>
                <p className="text-text-secondary text-xs">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WiFi vs Data */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-6">WiFi vs Mobile Data — Side-by-Side</h2>
          <div className="info-table overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-primary-100">
                  <th className="px-4 py-3 font-semibold text-text-primary">Factor</th>
                  <th className="px-4 py-3 font-semibold text-text-primary">WiFi</th>
                  <th className="px-4 py-3 font-semibold text-text-primary">Mobile Data (4G)</th>
                  <th className="px-4 py-3 font-semibold text-text-primary">Mobile Data (3G)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Download Time", "10–25 seconds", "30–90 seconds", "3–7 minutes"],
                  ["Data Cost", "No usage charge", "~52 MB from plan", "~52 MB from plan"],
                  ["Reliability", "High (stable)", "Good (varies by signal)", "Moderate (risk of drop)"],
                  ["Recommended?", "✔ Best option", "✔ Works well", "⚠ Use only if no other option"],
                  ["Risk of Corruption", "Very low", "Low", "Moderate on weak signal"],
                ].map(([factor, wifi, g4, g3]) => (
                  <tr key={factor} className="border-b even:bg-primary-50">
                    <td className="px-4 py-3 font-medium text-text-primary">{factor}</td>
                    <td className="px-4 py-3 text-text-secondary">{wifi}</td>
                    <td className="px-4 py-3 text-text-secondary">{g4}</td>
                    <td className="px-4 py-3 text-text-secondary">{g3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Bandwidth Requirements */}
      <section className="section-padding bg-primary-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Bandwidth Requirements for Playing</h2>
          <p className="text-text-secondary mb-6">
            After the initial download, Rajluck App requires an active internet connection to play. Unlike some games, core functionality is real-time and server-connected. Here are the bandwidth requirements:
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="card">
              <h3 className="font-bold text-primary mb-3">Minimum Bandwidth</h3>
              <p className="text-text-secondary text-sm mb-3"><strong>1.5 Mbps</strong> — Sufficient for core gameplay. Animations may stutter during peak loading. Suitable for 3G connections with stable signal.</p>
              <p className="text-text-muted text-xs">Below 1 Mbps: game will load but expect delays. OTP delivery may also be affected on very slow connections.</p>
            </div>
            <div className="card">
              <h3 className="font-bold text-primary mb-3">Recommended Bandwidth</h3>
              <p className="text-text-secondary text-sm mb-3"><strong>5+ Mbps</strong> — All animations and transitions are smooth. Game results appear instantly. Leaderboards update in real time without perceptible lag.</p>
              <p className="text-text-muted text-xs">10+ Mbps: optimal for high-frame-rate modes and video content within the app.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Offline Features */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4">What Works Offline After Download?</h2>
          <p className="text-text-secondary mb-6">
            Rajluck App requires a connection for most features, but a few elements are cached locally after your first online session:
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="card">
              <h3 className="font-bold text-primary mb-3">Available Offline</h3>
              <ul className="text-text-secondary text-sm space-y-2">
                <li>✔ App launch and login screen display</li>
                <li>✔ Cached profile information (view only)</li>
                <li>✔ Saved settings and preferences</li>
                <li>✔ Transaction history (last loaded data)</li>
                <li>✔ Help documentation (after first load)</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="font-bold text-primary mb-3">Requires Connection</h3>
              <ul className="text-text-secondary text-sm space-y-2">
                <li>✗ Logging in (OTP requires SMS/data)</li>
                <li>✗ All gameplay (real-time server)</li>
                <li>✗ Deposits and withdrawals</li>
                <li>✗ Live leaderboards</li>
                <li>✗ Receiving bonuses and missions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Download Tips */}
      <section className="section-padding bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Tips for the Smoothest Download Experience</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Download at Off-Peak Hours", body: "If you're on a shared WiFi network (apartment building, office), download before 8 AM or after 10 PM when network congestion is lowest. This can cut download time by 50%." },
              { step: "2", title: "Keep Your Screen On During Download", body: "Some Android devices lock the screen and throttle network activity. Keep your screen active during the download or disable screen timeout temporarily in Display settings." },
              { step: "3", title: "Don't Switch Networks Mid-Download", body: "Switching from WiFi to mobile data while downloading can corrupt the APK file. The download would need to restart. Ensure you stay on the same network throughout." },
              { step: "4", title: "Check Free Storage Before Starting", body: "You need at least 120 MB free — 52 MB for the APK plus working space for the installation process. Check Storage under Settings before tapping the download button." },
            ].map(({ step, title, body }) => (
              <div key={step} className="flex gap-4 items-start card-static p-5">
                <span className="step-number">{step}</span>
                <div>
                  <h3 className="font-bold text-text-primary mb-1">{title}</h3>
                  <p className="text-text-secondary text-sm">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {[
              { q: "Can I pause and resume the Rajluck App download?", a: "Most Android browsers support pause and resume for downloads. If the download breaks, check your browser's download manager — you may be able to resume rather than restart." },
              { q: "How much data does playing Rajluck App use per hour?", a: "Active gameplay uses approximately 3–8 MB per hour. Live leaderboard updates and banner loading adds another 1–3 MB. Budget for around 10 MB per hour of play time on mobile data." },
              { q: "Will downloading on mobile data affect my game plan?", a: "The 52 MB download counts against your mobile data allowance. If you're on a tight plan, use WiFi for the initial download. Gameplay data consumption is minimal by comparison." },
              { q: "My download keeps failing halfway. What can I do?", a: "Halfway failures usually indicate an unstable connection. Switch to a stronger WiFi network. Alternatively, use Chrome's built-in download manager which handles connection interruptions better than some third-party browsers." },
            ].map(({ q, a }) => (
              <div key={q} className="card">
                <h3 className="font-semibold text-text-primary mb-2">{q}</h3>
                <p className="text-text-secondary text-sm">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient-soft section-padding text-center">
        <h2 className="text-3xl font-bold text-text-primary mb-4">Ready to Download Rajluck App?</h2>
        <p className="text-text-secondary mb-6 max-w-xl mx-auto">WiFi is ideal, but 4G works perfectly too. Tap below to start your 52 MB download — you'll be playing in under 2 minutes.</p>
        <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta inline-block px-8 py-4 text-lg">
          Download Rajluck App Now
        </a>
      </section>

      {/* Internal Links */}
      <section className="section-padding bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-text-primary mb-4">More Download Guides</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/rajluck-game-download" className="btn-outline text-sm px-4 py-2">Full Download Guide</Link>
            <Link href="/download-rajluck" className="btn-outline text-sm px-4 py-2">Beginner's First-Time Guide</Link>
            <Link href="/rajluck-game-android" className="btn-outline text-sm px-4 py-2">Android Optimization</Link>
            <Link href="/rajluck-game-2026" className="btn-outline text-sm px-4 py-2">What's New in 2026</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
