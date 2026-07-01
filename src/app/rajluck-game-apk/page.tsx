import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const CTA_LINK = "https://share-rxapq9cajg.rajluck.co/web/share/index.html?ic=AA0DL7ND&ts=1782835740&m=2&lang=en&id=1";

export const metadata: Metadata = {
  title: "RajluckGameAPK – Every Feature Explained | Complete Walkthrough 2026",
  description: "Explore every feature of Rajluck Game APK in detail — game categories, wallet system, VIP tiers, referral program, customer support, and more. Full feature walkthrough at rajluckgamers.com.",
  keywords: ["RajluckGameAPK", "Rajluck Game APK features", "Rajluck APK", "Rajluck wallet system", "Rajluck VIP tiers", "Rajluck referral program", "Rajluck game categories", "Rajluck customer support", "RajluckGamers", "rajluckgamers"],
  openGraph: { title: "RajluckGameAPK – Every Feature Explained 2026", description: "Complete feature walkthrough of Rajluck Game APK at rajluckgamers.com.", url: "https://rajluckgamers.com/rajluckgameapk", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "RajluckGameAPK Features" }] },
  twitter: { card: "summary_large_image", title: "RajluckGameAPK Features Walkthrough", description: "Deep dive into every feature of Rajluck Game APK.", images: ["/og-image.png"] },
  alternates: { canonical: "https://rajluckgamers.com/rajluckgameapk" },
};

const gameCategories = [
  { name: "Slots", desc: "Hundreds of themed slot machines with progressive jackpots, free spins, and bonus rounds. Themes range from classic fruit to adventure and mythology.", count: "200+" },
  { name: "Card Games", desc: "Popular card games including Teen Patti, Rummy, Poker, and Blackjack with multiple table limits for beginners and high rollers alike.", count: "45+" },
  { name: "Sports", desc: "Bet on cricket, football, kabaddi, and more with live odds, in-play options, and pre-match markets available around the clock.", count: "30+" },
  { name: "Fishing Games", desc: "Interactive fishing arcade games where you aim and shoot to catch fish for rewards. Multiple ocean themes and weapon upgrades available.", count: "15+" },
  { name: "Lottery & Dice", desc: "Quick-play lottery draws, dice games, and number prediction games with instant results and transparent odds.", count: "20+" },
  { name: "Live Casino", desc: "Real-time dealer games streamed in HD. Play Baccarat, Roulette, Dragon Tiger, and Andar Bahar with live interaction.", count: "25+" },
];

const vipTiers = [
  { tier: "Bronze", requirement: "New Account", benefits: "Welcome bonus, daily login rewards, basic customer support" },
  { tier: "Silver", requirement: "5,000 points", benefits: "5% cashback, priority withdrawals, exclusive slot access" },
  { tier: "Gold", requirement: "25,000 points", benefits: "10% cashback, personal account manager, higher bet limits" },
  { tier: "Platinum", requirement: "100,000 points", benefits: "15% cashback, VIP events, birthday bonus, fastest withdrawals" },
  { tier: "Diamond", requirement: "500,000 points", benefits: "20% cashback, dedicated concierge, custom bonuses, luxury rewards" },
];

const walletFeatures = [
  { feature: "Instant Deposits", detail: "Add funds via UPI, bank transfer, or digital wallets. Deposits reflect in under 30 seconds." },
  { feature: "Fast Withdrawals", detail: "Withdraw winnings to your bank account or UPI. Standard processing within 1-4 hours." },
  { feature: "Transaction History", detail: "Full log of every deposit, withdrawal, bonus, and bet with timestamps and status tracking." },
  { feature: "Multi-Currency Support", detail: "Supports INR with transparent exchange rates for international payment methods." },
  { feature: "Balance Protection", detail: "Negative balance protection ensures you never owe more than your deposit." },
];

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-64 h-64 bg-yellow-200 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-5 sm:py-10 relative">
          <div className="text-center mx-auto">
            <span className="inline-block px-2 sm:px-4 py-1.5 rounded-full bg-white/20 text-black text-sm font-medium mb-3 sm:mb-4 animate-fade-in backdrop-blur-sm">
              Features Walkthrough
            </span>
            <Image src="/logo.webp" alt="Rajluck Game APK Logo" width={160} height={160} className="mx-auto mb-4 rounded-2xl shadow-lg" priority />
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-black leading-tight mb-4 sm:mb-6 animate-slide-up">
              Rajluck Game APK – <span className="gradient-text">Every Feature Explained</span>
            </h1>
            <p className="text-lg text-red-900 leading-relaxed mb-8 max-w-2xl mx-auto">
              Discover everything Rajluck Game APK has to offer. From 300+ games across six categories to a five-tier VIP program, a full-featured wallet, and 24/7 support — this is the complete guide.
            </p>
            <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta !text-lg !py-3 sm:!py-4 !px-10 inline-flex">
              Download Rajluck Game APK
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" className="w-full"><path d="M0 40L48 35C96 30 192 20 288 22C384 25 480 40 576 48C672 55 768 55 864 48C960 40 1056 25 1152 22C1248 20 1344 30 1392 35L1440 40V100H0V40Z" fill="white" /></svg>
        </div>
      </section>

      {/* Game Categories */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">Game Categories</h2>
            <p className="text-text-secondary max-w-lg mx-auto">Rajluck Game APK offers over 300 games organized into six main categories. Here is what each one includes.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gameCategories.map((cat) => (
              <div key={cat.name} className="card p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-text-primary">{cat.name}</h3>
                  <span className="px-3 py-1 rounded-full bg-primary-100 text-primary text-sm font-semibold">{cat.count}</span>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wallet System */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">Wallet System</h2>
            <p className="text-text-secondary max-w-lg mx-auto">The built-in wallet makes managing your funds simple, fast, and secure. Here is every wallet capability.</p>
          </div>
          <div className="space-y-4">
            {walletFeatures.map((wf, i) => (
              <div key={i} className="card-static p-5 sm:p-6 flex items-start gap-4">
                <div className="step-number text-lg flex-shrink-0">{i + 1}</div>
                <div>
                  <h3 className="text-lg font-bold text-text-primary mb-1">{wf.feature}</h3>
                  <p className="text-text-secondary leading-relaxed">{wf.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIP Tiers */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">VIP Tier System</h2>
            <p className="text-text-secondary max-w-lg mx-auto">Progress through five VIP tiers to unlock increasing rewards, cashback rates, and exclusive perks.</p>
          </div>
          <div className="card-static overflow-hidden">
            <table className="info-table">
              <thead>
                <tr>
                  <th>Tier</th>
                  <th>Requirement</th>
                  <th>Benefits</th>
                </tr>
              </thead>
              <tbody>
                {vipTiers.map((v) => (
                  <tr key={v.tier}>
                    <td className="font-medium text-text-primary">{v.tier}</td>
                    <td className="text-text-secondary">{v.requirement}</td>
                    <td className="text-text-secondary">{v.benefits}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Referral Program */}
      <section className="section-padding bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">Referral Program</h2>
            <p className="text-text-secondary max-w-lg mx-auto">Earn rewards by inviting friends. The Rajluck referral system pays you for every active user you bring in.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { step: "1", title: "Share Your Link", desc: "Find your unique referral link in the app under Profile > Referral. Share it via WhatsApp, SMS, or social media." },
              { step: "2", title: "Friend Registers", desc: "When someone signs up using your link, they are automatically tied to your referral account." },
              { step: "3", title: "Friend Plays", desc: "As your referred friend deposits and plays, you earn a percentage commission on their activity." },
              { step: "4", title: "Earn Rewards", desc: "Commissions are credited to your wallet daily. Top referrers also qualify for monthly bonus payouts." },
            ].map((s) => (
              <div key={s.step} className="card-static p-5 text-center">
                <div className="step-number text-xl mx-auto mb-3">{s.step}</div>
                <h3 className="font-bold text-text-primary mb-2">{s.title}</h3>
                <p className="text-text-secondary text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Support */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">Customer Support</h2>
            <p className="text-text-secondary max-w-lg mx-auto">Rajluck provides multiple support channels to resolve issues quickly.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { title: "In-App Live Chat", desc: "Chat with a support agent directly inside the app. Available 24/7 with average response times under 2 minutes." },
              { title: "Email Support", desc: "Send detailed queries with screenshots to the support email. Responses typically arrive within 12 hours." },
              { title: "FAQ & Help Center", desc: "Browse a searchable knowledge base covering account issues, payments, game rules, and technical troubleshooting." },
            ].map((ch, i) => (
              <div key={i} className="card p-6">
                <h3 className="text-lg font-bold text-text-primary mb-2">{ch.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{ch.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              { q: "How many games does Rajluck Game APK have?", a: "Over 300 games across six categories: Slots, Card Games, Sports, Fishing, Lottery & Dice, and Live Casino. New titles are added regularly." },
              { q: "Is the wallet system secure?", a: "Yes. All transactions are encrypted and processed through verified payment gateways. The wallet also supports negative balance protection." },
              { q: "How do I reach VIP Diamond tier?", a: "Accumulate 500,000 loyalty points through regular gameplay. Points are earned on every real-money bet you place." },
              { q: "Can I earn money through referrals without playing?", a: "Yes. The referral program pays commissions based on your referred users' activity. You earn passively as long as they remain active." },
              { q: "What happens if I lose internet during a game?", a: "Rajluck Game APK saves your session state. When you reconnect, the game resumes from where you left off. Bets in progress are protected." },
              { q: "Is customer support available in Hindi?", a: "Yes. Live chat and email support are available in both English and Hindi. The FAQ section is also bilingual." },
            ].map((faq, i) => (
              <div key={i} className="card-static p-5">
                <h3 className="font-bold text-text-primary mb-2">{faq.q}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">Ready to Explore Every Feature?</h2>
          <p className="text-text-secondary mb-8 max-w-lg mx-auto">Download Rajluck Game APK now and experience 300+ games, a powerful wallet, VIP rewards, and 24/7 support on your Android device.</p>
          <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta !text-lg !py-3 sm:!py-4 !px-10 inline-flex">
            Download Rajluck Game APK
          </a>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-text-primary mb-6 text-center">Related Pages</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: "/rajluckgameapkdownload", label: "Complete Download Tutorial" },
              { href: "/raj-luck-game-apk-download", label: "Download Troubleshooting" },
              { href: "/rajluck-apk-download", label: "Version History & Changelog" },
              { href: "/rajluck-download", label: "Download Methods Compared" },
              { href: "/rajluck-game-apk-download", label: "APK Verification Guide" },
              { href: "/download", label: "Main Download Page" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="btn-outline text-center block">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://rajluckgamers.com" }, { "@type": "ListItem", position: 2, name: "RajluckGameAPK", item: "https://rajluckgamers.com/rajluckgameapk" }] }) }} />
    </>
  );
}
