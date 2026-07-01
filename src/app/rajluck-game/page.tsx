import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "RajluckGame – Download APK, Login, Register & Features 2026",
  description:
    "RajluckGame is a leading Android gaming platform. Download the RajluckGame APK, create your account, login, and explore features. Also known as Rajluck Game, Rajluck, Raj Luck Game, RajluckGamers. Visit rajluckgamers.com for the full guide.",
  keywords: [
    "RajluckGame", "Rajluck Game", "Rajluck", "Rajluck APK", "Rajluck App",
    "RajluckGame download", "RajluckGame APK", "RajluckGame login", "RajluckGame register",
    "Raj Luck", "Raj Luck Game", "Raj Luck Gamers", "RajluckGamers", "rajluckgamers",
  ],
  openGraph: {
    title: "RajluckGame – Download APK, Login, Register & Features 2026",
    description: "RajluckGame for Android. Download APK, register, login at rajluckgamers.com.",
    url: "https://rajluckgamers.com/rajluckgame",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "RajluckGame" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RajluckGame – Download APK & Play",
    description: "Download RajluckGame APK for Android. Full guide at rajluckgamers.com.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://rajluckgamers.com/rajluckgame" },
};

const CTA_LINK = "https://share-rxapq9cajg.rajluck.co/web/share/index.html?ic=AA0DL7ND&ts=1782835740&m=2&lang=en&id=1";

export default function RajluckGamePage() {
  return (
    <main className="min-h-screen bg-surface">
      {/* Hero */}
      <section className="hero-gradient section-padding text-center">
        <div className="max-w-4xl mx-auto">
          <Image
            src="/logo.webp"
            alt="RajluckGame vs Other Platforms"
            width={160}
            height={160}
            className="w-[100px] sm:w-[180px] mx-auto mb-6 drop-shadow-2xl animate-fade-in"
            priority
          />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-black mb-4 animate-fade-in">
            <span className="gradient-text">RajluckGame</span> vs Other Gaming Platforms
          </h1>
          <p className="text-lg sm:text-xl text-black/80 mb-8 max-w-2xl mx-auto animate-slide-up">
            What actually separates RajluckGame from the crowded mobile gaming market? This deep
            dive compares features, performance, user experience, and value — so you can see
            exactly why players keep choosing Rajluck over the alternatives.
          </p>
          <a
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta inline-block text-lg px-10 py-4 rounded-2xl font-bold shadow-xl animate-slide-up"
          >
            Try RajluckGame Free
          </a>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4 text-center">
            Feature-by-Feature Comparison
          </h2>
          <p className="text-text-secondary text-center mb-8 max-w-2xl mx-auto">
            We measured RajluckGame against the most commonly used alternatives across 10 key
            dimensions that matter most to active players.
          </p>
          <div className="overflow-x-auto">
            <table className="info-table w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left text-text-primary">Feature</th>
                  <th className="text-center text-primary">RajluckGame</th>
                  <th className="text-center text-text-muted">Generic Platform A</th>
                  <th className="text-center text-text-muted">Generic Platform B</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Dedicated Android APK", "✅", "✅", "❌"],
                  ["Instant Withdrawal Processing", "✅", "❌", "❌"],
                  ["Daily Login Rewards", "✅", "❌", "✅"],
                  ["Live Dealer Games", "✅", "✅", "❌"],
                  ["Multi-Language Support", "✅", "❌", "❌"],
                  ["24/7 Live Chat Support", "✅", "❌", "❌"],
                  ["Referral Bonus Program", "✅", "✅", "❌"],
                  ["In-Play Sports Betting", "✅", "❌", "✅"],
                  ["Demo/Free Play Mode", "✅", "✅", "❌"],
                  ["Tiered VIP Membership", "✅", "❌", "❌"],
                ].map(([feat, r, a, b]) => (
                  <tr key={feat}>
                    <td className="font-semibold text-text-primary">{feat}</td>
                    <td className="text-center text-lg">{r}</td>
                    <td className="text-center text-lg">{a}</td>
                    <td className="text-center text-lg">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What Makes It Stand Out */}
      <section className="section-padding bg-primary-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-10 text-center">
            What Makes RajluckGame Stand Out
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Real-Time Withdrawal Engine",
                desc: "Most platforms batch withdrawal requests. RajluckGame processes them individually in real time — players receive funds within minutes, not hours.",
              },
              {
                title: "Unified Wallet Architecture",
                desc: "One balance works across all game types. No need to transfer funds between a 'slots wallet' and a 'sports wallet' like on competing apps.",
              },
              {
                title: "Transparent RTP Display",
                desc: "Every slot on RajluckGame shows its certified RTP percentage before you launch. No hidden house edges — just honest numbers on screen.",
              },
              {
                title: "Zero Hidden Fees",
                desc: "Deposits and withdrawals carry no platform-side fees. What you put in is what you play with, and what you win is what you receive.",
              },
              {
                title: "Optimized APK Size",
                desc: "At under 30MB, the RajluckGame APK installs fast even on limited storage devices — a thoughtful design choice for markets with older handsets.",
              },
              {
                title: "Responsive Game Rendering",
                desc: "Games load in under 2 seconds on a standard 4G connection. The platform avoids heavy Flash or legacy plugins entirely.",
              },
            ].map((item) => (
              <div key={item.title} className="card p-6">
                <h3 className="font-bold text-text-primary mb-2">{item.title}</h3>
                <p className="text-text-secondary text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Comparison */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
            Performance Deep Dive
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-static p-6">
              <h3 className="text-xl font-bold text-primary mb-4">RajluckGame</h3>
              <ul className="space-y-3 text-sm text-text-secondary">
                <li><span className="font-semibold text-text-primary">App Load Time:</span> ~1.8 seconds on 4G</li>
                <li><span className="font-semibold text-text-primary">Game Launch:</span> &lt;2 seconds average</li>
                <li><span className="font-semibold text-text-primary">Deposit Processing:</span> Real-time (&lt;60 seconds)</li>
                <li><span className="font-semibold text-text-primary">Withdrawal Speed:</span> 5–15 minutes average</li>
                <li><span className="font-semibold text-text-primary">Support Response:</span> &lt;3 minutes via live chat</li>
                <li><span className="font-semibold text-text-primary">Uptime (2025):</span> 99.7%</li>
                <li><span className="font-semibold text-text-primary">APK Size:</span> ~28MB</li>
              </ul>
            </div>
            <div className="card-static p-6 opacity-70">
              <h3 className="text-xl font-bold text-text-muted mb-4">Industry Average</h3>
              <ul className="space-y-3 text-sm text-text-secondary">
                <li><span className="font-semibold text-text-primary">App Load Time:</span> ~4.2 seconds on 4G</li>
                <li><span className="font-semibold text-text-primary">Game Launch:</span> 4–7 seconds average</li>
                <li><span className="font-semibold text-text-primary">Deposit Processing:</span> 5–30 minutes</li>
                <li><span className="font-semibold text-text-primary">Withdrawal Speed:</span> 24–72 hours</li>
                <li><span className="font-semibold text-text-primary">Support Response:</span> 30–120 minutes</li>
                <li><span className="font-semibold text-text-primary">Uptime (2025):</span> 97.1%</li>
                <li><span className="font-semibold text-text-primary">APK Size:</span> ~85MB</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* UX Differences */}
      <section className="section-padding bg-primary-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
            User Experience: Where RajluckGame Wins
          </h2>
          <div className="space-y-5">
            {[
              { point: "Onboarding Simplicity", detail: "Registration on RajluckGame takes under 3 minutes with just an email/phone and password. Competitors often require lengthy ID uploads before you can even browse the lobby." },
              { point: "Game Discovery", detail: "The smart search bar on RajluckGame auto-completes by game name, provider, and category simultaneously. Most rivals search only by name." },
              { point: "Bonus Clarity", detail: "Every bonus on RajluckGame shows the wagering requirement, expiry date, and eligible games directly on the promotion card — no fine print hidden three pages deep." },
              { point: "Dark Mode Support", detail: "RajluckGame includes a full dark mode option in Settings — a small feature that long-session players appreciate enormously during evening play." },
            ].map((u) => (
              <div key={u.point} className="card p-5">
                <h3 className="font-bold text-primary mb-2">{u.point}</h3>
                <p className="text-text-secondary text-sm">{u.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">RajluckGame FAQ</h2>
          <div className="space-y-5">
            {[
              {
                q: "Is RajluckGame available on iOS?",
                a: "The native APK is Android-only. iOS users can access RajluckGame via the mobile browser version, which includes the full game library and wallet features.",
              },
              {
                q: "How often is the RajluckGame APK updated?",
                a: "The team typically releases updates monthly, with emergency patches deployed within 24 hours when needed. You'll receive an in-app notification when a new version is available.",
              },
              {
                q: "Does RajluckGame support cryptocurrency deposits?",
                a: "Yes. USDT (TRC20 and ERC20) and selected other cryptocurrencies are accepted on the deposit page. Crypto deposits typically confirm in under 10 minutes.",
              },
              {
                q: "Can I have multiple RajluckGame accounts?",
                a: "No. Each player is allowed one account. Operating multiple accounts violates the terms of service and will result in account suspension and forfeiture of balances.",
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
          <h2 className="text-3xl font-bold text-text-primary mb-4">Experience the Difference Yourself</h2>
          <p className="text-text-secondary mb-8">Join RajluckGame today and see why players rate it above every competitor.</p>
          <a
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block text-lg px-10 py-4 rounded-2xl font-bold shadow-xl"
          >
            Download RajluckGame APK
          </a>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section-padding bg-primary-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-6">More RajluckGame Guides</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/rajluck" className="btn-outline px-6 py-3 rounded-xl font-semibold">What is Rajluck?</Link>
            <Link href="/raj-luck" className="btn-outline px-6 py-3 rounded-xl font-semibold">Platform Overview</Link>
            <Link href="/raj-luck-game" className="btn-outline px-6 py-3 rounded-xl font-semibold">Beginner's Guide</Link>
            <Link href="/rajluckgamers" className="btn-outline px-6 py-3 rounded-xl font-semibold">Community Hub</Link>
            <Link href="/raj-luck-gamers" className="btn-outline px-6 py-3 rounded-xl font-semibold">Promotions Guide</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
