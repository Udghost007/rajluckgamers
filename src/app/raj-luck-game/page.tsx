import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Raj Luck Game – Download APK, Features, Login & Register 2026",
  description:
    "Raj Luck Game is the ultimate Android gaming platform. Download the latest Raj Luck Game APK, register, login, and explore all features. Also known as Rajluck Game, RajluckGame, Rajluck, RajluckGamers. Full guide at rajluckgamers.com.",
  keywords: [
    "Raj Luck Game", "Raj Luck", "Raj Luck Gamers", "Rajluck Game", "Rajluck",
    "RajluckGame", "Rajluck APK", "Raj Luck Game APK", "Raj Luck Game download",
    "Raj Luck Game login", "Raj Luck Game register", "RajluckGamers", "rajluckgamers",
  ],
  openGraph: {
    title: "Raj Luck Game – Download APK, Features, Login & Register 2026",
    description: "Raj Luck Game for Android. Download APK, register, login, explore features at rajluckgamers.com.",
    url: "https://rajluckgamers.com/raj-luck-game",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Raj Luck Game" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raj Luck Game – Download APK & Play",
    description: "Download Raj Luck Game APK for Android. Complete guide at rajluckgamers.com.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://rajluckgamers.com/raj-luck-game" },
};

const CTA_LINK = "https://share-rxapq9cajg.rajluck.co/web/share/index.html?ic=AA64CBGV&ts=1783054980&m=2&lang=en&id=1";

export default function RajLuckGamePage() {
  return (
    <main className="min-h-screen bg-surface">
      {/* Hero */}
      <section className="hero-gradient section-padding text-center">
        <div className="max-w-4xl mx-auto">
          <Image
            src="/logo.webp"
            alt="Raj Luck Game for Beginners"
            width={160}
            height={160}
            className="w-[100px] sm:w-[180px] mx-auto mb-6 drop-shadow-2xl animate-fade-in"
            priority
          />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-black mb-4 animate-fade-in">
            <span className="gradient-text">Raj Luck Game</span> for Beginners
          </h1>
          <p className="text-lg sm:text-xl text-black/80 mb-8 max-w-2xl mx-auto animate-slide-up">
            Never played on Raj Luck before? This guide walks you through every step — from
            installing the app to making your first deposit, navigating the dashboard, and
            avoiding the most common rookie mistakes.
          </p>
          <a
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta inline-block text-lg px-10 py-4 rounded-2xl font-bold shadow-xl animate-slide-up"
          >
            Start Your Raj Luck Journey
          </a>
        </div>
      </section>

      {/* First Steps */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4 text-center">
            Your First Steps on Raj Luck Game
          </h2>
          <p className="text-text-secondary text-center mb-10 max-w-2xl mx-auto">
            Getting started is genuinely simple. Here is a step-by-step path designed specifically
            for brand-new players who have never used the platform before.
          </p>
          <div className="space-y-6">
            {[
              {
                n: "01",
                title: "Enable Unknown Sources on Android",
                body: "Because the Raj Luck APK is distributed outside the Google Play Store, you need to allow Android to install apps from external sources. Go to Settings > Apps > Special App Access > Install Unknown Apps, and toggle permission on for your browser or file manager.",
              },
              {
                n: "02",
                title: "Download & Install the APK",
                body: "Tap the official download link on this page. Once the APK file lands in your Downloads folder, open it and tap Install. The app icon will appear on your home screen within seconds.",
              },
              {
                n: "03",
                title: "Register a New Account",
                body: "Open Raj Luck Game and tap Register. Enter your mobile number or email, set a strong password, and agree to the terms. You'll receive an OTP or verification email — enter the code and your account is live.",
              },
              {
                n: "04",
                title: "Make Your First Deposit",
                body: "Go to Wallet > Deposit, choose your preferred payment method (e-wallet, bank transfer, or crypto), enter the amount, and confirm. Funds typically appear in your Raj Luck balance within 1–3 minutes.",
              },
              {
                n: "05",
                title: "Claim the Welcome Bonus",
                body: "After depositing, navigate to Promotions and find the New Member Welcome Bonus. Read the wagering requirements carefully, then tap Claim. The bonus will be added to your bonus wallet instantly.",
              },
            ].map((s) => (
              <div key={s.n} className="card p-6 flex gap-5 items-start">
                <div className="step-number shrink-0">{s.n}</div>
                <div>
                  <h3 className="font-bold text-text-primary mb-1">{s.title}</h3>
                  <p className="text-text-secondary text-sm">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Understanding the Dashboard */}
      <section className="section-padding bg-primary-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-10 text-center">
            Understanding the Raj Luck Dashboard
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { area: "Balance Bar", desc: "Always visible at the top — shows your real money balance and any active bonus balance side by side." },
              { area: "Featured Banner", desc: "A scrollable carousel of current promotions and new game launches. Tap any banner to go directly to that offer." },
              { area: "Quick-Launch Games", desc: "The row of recently played games below the banner lets you resume any game with one tap — no need to search again." },
              { area: "Category Tabs", desc: "Slots, Live, Lottery, Sports — tap any tab to filter the entire game lobby to that category instantly." },
              { area: "Notification Bell", desc: "All bonus alerts, deposit confirmations, and system messages appear here. Check it after every deposit." },
              { area: "VIP Badge", desc: "Your current VIP tier is displayed on your profile icon. Tap it to see how many points away you are from the next level." },
            ].map((d) => (
              <div key={d.area} className="card p-5">
                <h3 className="font-bold text-primary mb-2">{d.area}</h3>
                <p className="text-text-secondary text-sm">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigating the App */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-6 text-center">
            Navigating the Raj Luck App
          </h2>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto text-center">
            The bottom navigation bar is your main compass. Here is what each icon does:
          </p>
          <table className="info-table w-full max-w-2xl mx-auto text-sm">
            <thead>
              <tr>
                <th className="text-left text-text-primary">Icon</th>
                <th className="text-left text-text-primary">Section</th>
                <th className="text-left text-text-primary">What You'll Find</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>🏠</td><td className="font-semibold">Home</td><td className="text-text-secondary">Featured games, banners, recent history</td></tr>
              <tr><td>🎮</td><td className="font-semibold">Games</td><td className="text-text-secondary">Full catalogue sorted by category and provider</td></tr>
              <tr><td>💰</td><td className="font-semibold">Wallet</td><td className="text-text-secondary">Deposit, withdraw, and transaction log</td></tr>
              <tr><td>🎁</td><td className="font-semibold">Promotions</td><td className="text-text-secondary">All active offers, claim buttons, and history</td></tr>
              <tr><td>👤</td><td className="font-semibold">Profile</td><td className="text-text-secondary">Account settings, VIP status, support chat</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="section-padding bg-primary-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
            Common Beginner Mistakes to Avoid
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                mistake: "Ignoring Bonus Terms",
                fix: "Always read the wagering requirements before claiming. A bonus with a 30x wagering requirement on a small deposit is very different from one with 5x on a larger deposit.",
              },
              {
                mistake: "Using an Unofficial APK",
                fix: "Only download from rajluckgamers.com or the official platform link. Third-party APKs may be outdated, modified, or contain malware.",
              },
              {
                mistake: "Skipping Account Verification",
                fix: "Some players delay KYC verification. Do it early — unverified accounts face withdrawal holds that can be frustrating when you want to cash out.",
              },
              {
                mistake: "Chasing Losses Immediately",
                fix: "A losing streak is not a signal to increase your bets. Take a break, review your session, and return with a clear head and a fresh budget.",
              },
            ].map((m) => (
              <div key={m.mistake} className="card p-5 border-l-4 border-red-400">
                <h3 className="font-bold text-red-600 mb-2">Mistake: {m.mistake}</h3>
                <p className="text-text-secondary text-sm"><span className="font-semibold text-primary">Fix: </span>{m.fix}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">Beginner FAQ</h2>
          <div className="space-y-5">
            {[
              {
                q: "Do I need to verify my identity to play Raj Luck Game?",
                a: "You can explore and play with small deposits without full verification. However, to unlock higher withdrawal limits you will need to complete identity verification, which takes 1–2 business days.",
              },
              {
                q: "What is the minimum deposit on Raj Luck Game?",
                a: "The minimum deposit is intentionally low to welcome new players. Check the Wallet > Deposit page for the current minimum, as it may vary by payment method.",
              },
              {
                q: "Can I try games for free before depositing?",
                a: "Many slot games offer a demo mode. Look for the 'Try' or 'Demo' button on the game card in the lobby. Live dealer and sports betting require a real money balance.",
              },
              {
                q: "How do I contact support if I get stuck?",
                a: "Tap the chat icon in the Profile tab or visit the Help Centre. Live chat is available 24/7 and average response times are under 3 minutes during peak hours.",
              },
              {
                q: "Is my personal data safe with Raj Luck Game?",
                a: "Yes. Raj Luck uses AES-256 encryption for all stored data and TLS 1.3 for data in transit. Your personal and financial information is never shared with third parties without your consent.",
              },
            ].map((item) => (
              <div key={item.q} className="card p-5">
                <h3 className="font-bold text-text-primary mb-2">{item.q}</h3>
                <p className="text-text-secondary text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section-padding bg-primary-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-6">Continue Learning</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/rajluck" className="btn-outline px-6 py-3 rounded-xl font-semibold">What is Rajluck?</Link>
            <Link href="/raj-luck" className="btn-outline px-6 py-3 rounded-xl font-semibold">Platform Overview</Link>
            <Link href="/rajluckgame" className="btn-outline px-6 py-3 rounded-xl font-semibold">Platform Comparison</Link>
            <Link href="/rajluckgamers" className="btn-outline px-6 py-3 rounded-xl font-semibold">Community Hub</Link>
            <Link href="/raj-luck-gamers" className="btn-outline px-6 py-3 rounded-xl font-semibold">Promotions Guide</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
