import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rajluck Game 2026 – Latest Version, Features & Download Guide",
  description: "Rajluck Game 2026 — the latest version with new features, improved performance, and enhanced security. Download Rajluck Game 2026 APK for Android. Complete guide at rajluckgamers.com.",
  keywords: ["Rajluck Game 2026", "Rajluck 2026", "Rajluck Game latest version", "Rajluck Game new version", "Rajluck APK 2026", "Rajluck Game", "Rajluck", "Raj Luck Game 2026", "RajluckGamers"],
  openGraph: { title: "Rajluck Game 2026 – Latest Version & Download", description: "Get Rajluck Game 2026 latest version at rajluckgamers.com.", url: "https://rajluckgamers.com/rajluck-game-2026", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Rajluck Game 2026" }] },
  twitter: { card: "summary_large_image", title: "Rajluck Game 2026", images: ["/og-image.png"] },
  alternates: { canonical: "https://rajluckgamers.com/rajluck-game-2026" },
};

const CTA_LINK = "https://share-rxapq9cajg.rajluck.co/web/share/index.html?ic=AA64CBGV&ts=1783054980&m=2&lang=en&id=1";

export default function Page() {
  return (
    <main>
      {/* Hero */}
      <section className="hero-gradient section-padding text-center">
        <Image src="/logo.webp" alt="Rajluck Game 2026" width={160} height={160} className="w-[100px] sm:w-[180px] mx-auto mb-6 drop-shadow-2xl animate-fade-in" priority />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-black mb-4 animate-slide-up">
          What's New in<br />Rajluck Game 2026
        </h1>
        <p className="text-lg text-black/80 max-w-2xl mx-auto mb-8">
          2026 brings the biggest update in Rajluck Game's history — new game modes, performance overhauls, a redesigned wallet, enhanced security protocols, and an exciting roadmap for the rest of the year.
        </p>
        <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta text-lg px-8 py-4 inline-block">
          Get Rajluck Game 2026
        </a>
      </section>

      {/* Version Timeline */}
      <section className="section-padding bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4 gradient-text">2026 Update Timeline</h2>
          <p className="text-text-secondary mb-6">Rajluck Game has shipped four major updates in 2026 so far. Here is a chronological breakdown of what changed in each release:</p>
          <div className="info-table overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-primary-100">
                  <th className="px-4 py-3 font-semibold text-text-primary">Version</th>
                  <th className="px-4 py-3 font-semibold text-text-primary">Release Month</th>
                  <th className="px-4 py-3 font-semibold text-text-primary">Key Changes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["v5.0", "January 2026", "Complete UI redesign, Dark Mode launch, new onboarding flow"],
                  ["v5.1", "March 2026", "Biometric login, session management panel, OTP speed improvement"],
                  ["v5.2", "May 2026", "Wallet 2.0 with instant withdrawal, new game categories added"],
                  ["v5.3", "July 2026", "Performance engine rewrite, 40% faster load times, battery optimisation"],
                ].map(([ver, month, changes]) => (
                  <tr key={ver} className="border-b even:bg-primary-50">
                    <td className="px-4 py-3 font-semibold text-primary">{ver}</td>
                    <td className="px-4 py-3 text-text-secondary">{month}</td>
                    <td className="px-4 py-3 text-text-secondary">{changes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* New Features */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-6">Major New Features in 2026</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { feature: "Wallet 2.0", desc: "The completely rebuilt wallet supports instant withdrawals processed in under 60 seconds, a transaction history with advanced filters, and a new auto-save deposit feature that remembers your preferred amounts." },
              { feature: "Biometric Login", desc: "Register your fingerprint or face once after login, and every future session opens instantly. Works with any Android device that supports biometric authentication." },
              { feature: "New Game Engine", desc: "The v5.3 engine rewrite reduced average game load times from 3.2 seconds to 1.9 seconds. Animations are smoother, transitions are snappier, and battery drain during long sessions dropped by 22%." },
              { feature: "Live Leaderboards", desc: "Real-time leaderboards now update every 30 seconds. Compete in daily, weekly, and monthly tournaments with ranked prizes distributed automatically at the end of each period." },
              { feature: "Referral 2.0 Programme", desc: "The updated referral system tracks multi-level referrals. Earn a bonus when someone you refer makes their first deposit, and again when their referee deposits — two levels of passive earnings." },
              { feature: "VIP Tier Expansion", desc: "2026 adds two new VIP tiers above Diamond: Platinum Elite and Apex. Each tier unlocks dedicated account managers, faster withdrawal limits, and exclusive monthly reward packages." },
            ].map(({ feature, desc }) => (
              <div key={feature} className="card">
                <h3 className="font-bold text-primary mb-2">{feature}</h3>
                <p className="text-text-secondary text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Improvements */}
      <section className="section-padding bg-primary-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Performance Improvements — By the Numbers</h2>
          <p className="text-text-secondary mb-6">The engineering team spent the first half of 2026 focused exclusively on performance. Here are the measured improvements compared to the 2025 version:</p>
          <div className="grid sm:grid-cols-4 gap-4">
            {[
              { stat: "40%", label: "Faster App Launch" },
              { stat: "22%", label: "Lower Battery Usage" },
              { stat: "60%", label: "Smaller APK Size" },
              { stat: "1.9s", label: "Average Game Load" },
            ].map(({ stat, label }) => (
              <div key={label} className="card text-center">
                <div className="text-4xl font-extrabold gradient-text mb-1">{stat}</div>
                <div className="text-text-secondary text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Features */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Upcoming Features — Roadmap H2 2026</h2>
          <p className="text-text-secondary mb-6">The development team has confirmed the following features for the second half of 2026. No release dates are final — check rajluckgamers.com for announcements:</p>
          <div className="space-y-4">
            {[
              { title: "Social Features — Q3 2026", desc: "Friend lists, private messaging, and the ability to spectate friends' games in real time. Join squads and compete as a group in team-based tournaments." },
              { title: "iOS Beta Launch — Q3 2026", desc: "An iOS version of Rajluck Game is in closed beta. Android users won't lose any features — the iOS launch expands the player pool for larger tournaments." },
              { title: "In-App Customer Support Chat — Q4 2026", desc: "Real-time support chat embedded directly inside the app. No need to leave the app or open a browser. Average response time targets under 2 minutes." },
              { title: "Advanced Statistics Dashboard — Q4 2026", desc: "A personal analytics page showing your game history, win rates by category, earnings over time, and peak performance periods — all in visual chart format." },
            ].map(({ title, desc }) => (
              <div key={title} className="card-static p-5">
                <h3 className="font-semibold text-text-primary mb-2">{title}</h3>
                <p className="text-text-secondary text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-surface">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {[
              { q: "Do I need to reinstall the app to get the 2026 updates?", a: "No. If you already have the app installed, you'll receive an in-app update prompt when a new version is available. Just tap Update and the new version installs over the existing one." },
              { q: "Will my account data survive the update to v5.3?", a: "Yes. Account data, game history, wallet balance, and settings are all stored on Rajluck servers — not locally. Updates never affect your account information." },
              { q: "Is the v5.3 performance improvement noticeable on older phones?", a: "Especially on older phones. Devices running Android 10 on 3 GB RAM saw the most dramatic improvement — app launch time dropped from 6.1 seconds to under 2.5 seconds in testing." },
              { q: "When will the iOS version be publicly available?", a: "The iOS version is currently in closed beta. A public launch date has not been confirmed. Register your interest on our website to be notified when iOS registration opens." },
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
        <h2 className="text-3xl font-bold text-text-primary mb-4">Upgrade to the 2026 Version</h2>
        <p className="text-text-secondary mb-6 max-w-xl mx-auto">Get the latest Rajluck Game APK and experience all the 2026 improvements — faster, smarter, and more rewarding than ever.</p>
        <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta inline-block px-8 py-4 text-lg">
          Download Rajluck Game 2026
        </a>
      </section>

      {/* Internal Links */}
      <section className="section-padding bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-text-primary mb-4">Related Guides</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/rajluck-game-android" className="btn-outline text-sm px-4 py-2">Android Optimization</Link>
            <Link href="/rajluck-game-app" className="btn-outline text-sm px-4 py-2">App Interface Guide</Link>
            <Link href="/rajluck-game-download" className="btn-outline text-sm px-4 py-2">Download Guide</Link>
            <Link href="/rajluck-app-download" className="btn-outline text-sm px-4 py-2">WiFi vs Data Download</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
