import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Raj Luck – Download Game APK, Login & Register Guide 2026",
  description:
    "Raj Luck is a popular mobile gaming app for Android. Download the Raj Luck Game APK, register, login, and explore all features. Also known as Rajluck, Rajluck Game, RajluckGame, RajluckGamers. Complete guide at rajluckgamers.com.",
  keywords: [
    "Raj Luck", "Raj Luck Game", "Raj Luck Gamers", "Rajluck", "Rajluck Game",
    "RajluckGame", "Rajluck APK", "Rajluck App", "Raj Luck APK", "Raj Luck download",
    "Raj Luck login", "Raj Luck register", "RajluckGamers", "rajluckgamers",
  ],
  openGraph: {
    title: "Raj Luck – Download Game APK, Login & Register Guide 2026",
    description: "Raj Luck gaming platform for Android. Download APK, register, login at rajluckgamers.com.",
    url: "https://rajluckgamers.com/raj-luck",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Raj Luck" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raj Luck – Download Game APK & Play",
    description: "Download Raj Luck Game APK, register, and login on Android. Guide at rajluckgamers.com.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://rajluckgamers.com/raj-luck" },
};

const CTA_LINK = "https://share-rxapq9cajg.rajluck.co/web/share/index.html?ic=AA0DL7ND&ts=1782835740&m=2&lang=en&id=1";

export default function RajLuckPage() {
  return (
    <main className="min-h-screen bg-surface">
      {/* Hero */}
      <section className="hero-gradient section-padding text-center">
        <div className="max-w-4xl mx-auto">
          <Image
            src="/logo.webp"
            alt="Raj Luck Gaming Platform"
            width={160}
            height={160}
            className="w-[100px] sm:w-[180px] mx-auto mb-6 drop-shadow-2xl animate-fade-in"
            priority
          />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-black mb-4 animate-fade-in">
            <span className="gradient-text">Raj Luck</span> Gaming Platform
          </h1>
          <p className="text-lg sm:text-xl text-black/80 mb-4 max-w-2xl mx-auto animate-slide-up">
            A complete overview of the Raj Luck gaming platform — its history, available game
            categories, intuitive user interface, and everything you need to manage your account
            like a pro.
          </p>
          <a
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta inline-block text-lg px-10 py-4 rounded-2xl font-bold shadow-xl animate-slide-up"
          >
            Open Raj Luck Platform
          </a>
        </div>
      </section>

      {/* Platform History */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-6 text-center">
            Platform History & Evolution
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <p className="text-text-secondary">
              Raj Luck launched its first public version as a lightweight mobile web app. Within the
              first six months, the team noticed that users wanted a richer, faster experience — one
              that web browsers alone couldn't reliably deliver over slower connections common in
              emerging markets. That insight led to the development of the dedicated Android APK.
            </p>
            <p className="text-text-secondary">
              Version 2 brought a redesigned home screen, a unified wallet system connecting all
              game types, and the introduction of the live dealer lobby — a major milestone that
              expanded Raj Luck's appeal beyond solo game modes into real-time interactive
              entertainment.
            </p>
            <p className="text-text-secondary">
              By 2024, Raj Luck had rolled out its referral program, a tiered VIP membership
              structure, and a 24/7 live support team. The 2026 release further optimized
              performance, cutting load times by 40% and adding region-specific payment gateways
              that made deposits and withdrawals even more seamless for local players.
            </p>
          </div>
        </div>
      </section>

      {/* Game Categories */}
      <section className="section-padding bg-primary-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-2 text-center">
            Gaming Categories on Raj Luck
          </h2>
          <p className="text-text-muted text-center mb-10">Something for every type of player</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🎰", cat: "Slot Games", detail: "Hundreds of themed slots with free spin bonuses, progressive jackpots, and buy-feature options." },
              { icon: "🃏", cat: "Live Casino", detail: "Real dealers broadcast in HD for Baccarat, Blackjack, Roulette, and Dragon Tiger." },
              { icon: "🎱", cat: "Lottery & Number", detail: "4D, Toto, and instant-win number draws with results updated in real time." },
              { icon: "⚽", cat: "Sports Betting", detail: "Pre-match and live in-play betting across football, basketball, esports, and more." },
            ].map((c) => (
              <div key={c.cat} className="card p-5 text-center">
                <div className="text-5xl mb-3">{c.icon}</div>
                <h3 className="font-bold text-text-primary mb-2">{c.cat}</h3>
                <p className="text-text-secondary text-sm">{c.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UI Walkthrough */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-10 text-center">
            User Interface Walkthrough
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Home Screen",
                desc: "The home screen greets you with featured games, ongoing promotions, and your current balance front and center. The bottom navigation bar gives one-tap access to every major section.",
              },
              {
                title: "Game Lobby",
                desc: "Browse by category, provider, or search by name. Filter by RTP range or minimum bet so you always find games that match your style and budget.",
              },
              {
                title: "Wallet & Transactions",
                desc: "The unified wallet shows your real balance, bonus balance, and pending withdrawals in a single clean view. Tap any transaction for a full breakdown.",
              },
              {
                title: "Profile & Settings",
                desc: "Update personal details, change your password, set deposit limits, and configure notification preferences — all within a few taps from the profile tab.",
              },
            ].map((item) => (
              <div key={item.title} className="card-static p-6 border-l-4 border-primary">
                <h3 className="font-bold text-text-primary text-lg mb-2">{item.title}</h3>
                <p className="text-text-secondary text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Account Management Tips */}
      <section className="section-padding bg-primary-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
            Account Management Tips
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { tip: "Enable Login Alerts", detail: "Turn on email or SMS login notifications so you're immediately aware of any access to your account." },
              { tip: "Set a Deposit Limit", detail: "Use the responsible gaming controls to cap daily, weekly, or monthly deposits. This helps maintain healthy play habits." },
              { tip: "Link One Payment Method", detail: "Keep a single verified payment method on file for faster withdrawals. Adding multiple unverified methods can delay payouts." },
              { tip: "Update Your Email", detail: "Your email is your recovery lifeline. Make sure it's current — a stale email address can lock you out of your own account." },
              { tip: "Check Bonus Expiry Dates", detail: "Bonuses expire. Open the Promotions tab regularly to track which bonuses are active and how much time remains to use them." },
              { tip: "Use a Strong Password", detail: "Combine uppercase, lowercase, numbers, and symbols. Avoid using the same password you use on other sites." },
            ].map((t) => (
              <div key={t.tip} className="card p-5">
                <h3 className="font-semibold text-primary mb-1">{t.tip}</h3>
                <p className="text-text-secondary text-sm">{t.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">Raj Luck FAQ</h2>
          <div className="space-y-6">
            {[
              {
                q: "What is the difference between Raj Luck and Rajluck?",
                a: "They refer to the same platform. 'Raj Luck' and 'Rajluck' are used interchangeably — the official brand uses both spellings across its marketing materials.",
              },
              {
                q: "How do I download the Raj Luck APK on Android?",
                a: "Tap the download button on this page or visit the official platform link. On your Android device, go to Settings > Security > enable 'Unknown Sources', then open the downloaded APK file to install.",
              },
              {
                q: "Does Raj Luck have a loyalty program?",
                a: "Yes. Raj Luck's VIP program has multiple tiers. As you play, you accumulate loyalty points that unlock higher withdrawal limits, personal account managers, and exclusive bonus multipliers.",
              },
              {
                q: "Can I change the language in the Raj Luck app?",
                a: "Yes. Navigate to Settings > Language and select from the available options. The change takes effect immediately without requiring a restart.",
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

      {/* CTA */}
      <section className="hero-gradient-soft section-padding text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Ready to Play Raj Luck?</h2>
          <p className="text-text-secondary mb-8">Download the APK, register in minutes, and access every game category today.</p>
          <a
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block text-lg px-10 py-4 rounded-2xl font-bold shadow-xl"
          >
            Get Started with Raj Luck
          </a>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section-padding bg-primary-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-6">Related Guides</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/rajluck" className="btn-outline px-6 py-3 rounded-xl font-semibold">What is Rajluck?</Link>
            <Link href="/raj-luck-game" className="btn-outline px-6 py-3 rounded-xl font-semibold">Beginner's Guide</Link>
            <Link href="/rajluckgame" className="btn-outline px-6 py-3 rounded-xl font-semibold">Platform Comparison</Link>
            <Link href="/rajluckgamers" className="btn-outline px-6 py-3 rounded-xl font-semibold">Community Hub</Link>
            <Link href="/raj-luck-gamers" className="btn-outline px-6 py-3 rounded-xl font-semibold">Promotions Guide</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
