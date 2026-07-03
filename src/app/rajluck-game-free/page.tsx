import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rajluck Game Free – Free Download & Registration 2026",
  description: "Rajluck Game Free — download Rajluck Game for free, register without charges, and enjoy free gaming features. rajluck game free, rajluck free, rajluck game free download.",
  keywords: ["Rajluck Game Free", "Rajluck Free", "Rajluck Game free download", "Rajluck free registration", "is Rajluck Game free", "Rajluck Game", "Rajluck", "Raj Luck Game Free", "RajluckGamers"],
  openGraph: { title: "Rajluck Game Free – Free Download & Play 2026", description: "Rajluck Game is free to download and play. Get it at rajluckgamers.com.", url: "https://rajluckgamers.com/rajluck-game-free", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Rajluck Game Free" }] },
  twitter: { card: "summary_large_image", title: "Rajluck Game Free", images: ["/og-image.png"] },
  alternates: { canonical: "https://rajluckgamers.com/rajluck-game-free" },
};

const CTA_LINK = "https://share-rxapq9cajg.rajluck.co/web/share/index.html?ic=AA64CBGV&ts=1783054980&m=2&lang=en&id=1";

export default function Page() {
  return (
    <main className="min-h-screen bg-surface text-text-primary">
      {/* Hero */}
      <section className="hero-gradient section-padding text-center">
        <Image src="/logo.webp" alt="Is Rajluck Game Free?" width={160} height={160} className="w-[100px] sm:w-[180px] mx-auto mb-6 drop-shadow-2xl animate-fade-in" priority />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-black mb-4 animate-slide-up">Is Rajluck Game Really Free?</h1>
        <p className="text-xl text-black/80 mb-3 font-medium">Complete Cost Breakdown — No Hidden Charges</p>
        <p className="text-base text-black/70 max-w-2xl mx-auto mb-8">
          A fair question deserves a thorough answer. This page breaks down every aspect of Rajluck Game's cost structure — what is free, what is optional, and how it compares to paid gaming alternatives — so you can make an informed choice.
        </p>
        <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta inline-block text-lg font-bold px-10 py-4 rounded-full shadow-xl animate-fade-in">
          Download Free Now
        </a>
      </section>

      {/* Free vs Premium */}
      <section className="section-padding max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold gradient-text mb-6">Free vs Optional — What Each Category Means</h2>
        <p className="text-text-secondary mb-8">
          Rajluck Game operates on a model where the core product is completely free. Optional spending exists for players who want to unlock certain experiences — but it is never required to access the platform or enjoy games.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="card p-6 border-l-4 border-green-500">
            <h3 className="text-xl font-bold text-green-700 mb-4">Permanently Free</h3>
            <ul className="space-y-3 text-text-secondary text-sm">
              <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> APK download from official source</li>
              <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> Account registration</li>
              <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> Demo / practice mode for all games</li>
              <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> Daily login bonus credits</li>
              <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> App updates and new version downloads</li>
              <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> In-app tutorials and help resources</li>
              <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> Customer support access</li>
              <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> Referral program participation</li>
            </ul>
          </div>
          <div className="card p-6 border-l-4 border-blue-400">
            <h3 className="text-xl font-bold text-blue-700 mb-4">Optional (Player&#39;s Choice)</h3>
            <ul className="space-y-3 text-text-secondary text-sm">
              <li className="flex gap-2"><span className="text-blue-500 font-bold">→</span> Real-money deposits to play for cash prizes</li>
              <li className="flex gap-2"><span className="text-blue-500 font-bold">→</span> VIP tier progression (earned through play volume)</li>
              <li className="flex gap-2"><span className="text-blue-500 font-bold">→</span> Tournament entry fees (varies by event)</li>
              <li className="flex gap-2"><span className="text-blue-500 font-bold">→</span> Premium game rooms with higher stakes</li>
            </ul>
            <p className="text-text-muted text-xs mt-4">None of these are required. All core features remain accessible without any spending.</p>
          </div>
        </div>
      </section>

      {/* No Hidden Charges */}
      <section className="section-padding bg-primary-50 max-w-full">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold gradient-text mb-6">Zero Hidden Charges — Our Transparency Commitment</h2>
          <p className="text-text-secondary mb-8">
            Many apps advertise as "free" but layer on fees through subscriptions, download charges, or account maintenance fees. Rajluck Game does not do this. Here is proof:
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: "Download Fee", value: "₹0", desc: "Downloading the APK from rajluckgamers.com costs nothing, ever." },
              { label: "Registration Fee", value: "₹0", desc: "Creating an account is completely free. No credit card required at signup." },
              { label: "Monthly Subscription", value: "₹0", desc: "There is no subscription model. The app does not charge monthly or annual fees." },
              { label: "Update Fee", value: "₹0", desc: "Every version update is provided free of charge through the official download link." },
              { label: "Support Fee", value: "₹0", desc: "Customer support is available to all users at no extra cost, regardless of play level." },
              { label: "Account Maintenance", value: "₹0", desc: "Inactive accounts are not charged maintenance fees. Your balance remains intact." },
            ].map((item) => (
              <div key={item.label} className="card-static bg-white rounded-xl p-5 text-center shadow-sm">
                <p className="text-text-muted text-xs font-medium uppercase tracking-wide mb-1">{item.label}</p>
                <p className="text-3xl font-extrabold text-green-600 mb-2">{item.value}</p>
                <p className="text-text-muted text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In-App Features */}
      <section className="section-padding max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold gradient-text mb-6">What Free Players Get Inside the App</h2>
        <p className="text-text-secondary mb-8">
          Free access to Rajluck Game is not a stripped-down trial. Free users have access to the full game library in demo mode, the complete bonus system, daily rewards, and all support resources.
        </p>
        <ol className="space-y-5">
          {[
            { step: "1", title: "Full Game Library in Demo Mode", desc: "Every title in the Rajluck catalog is playable in demo mode without depositing. Use virtual credits to explore any game before wagering real funds." },
            { step: "2", title: "Complete Bonus System Access", desc: "Daily login bonuses, referral rewards, and promotional offers are all available to every registered user. You do not need to deposit to earn or accumulate bonus credits." },
            { step: "3", title: "Account Dashboard", desc: "Your full account dashboard — including game history, bonus status, referral tracking, and profile settings — is accessible at no cost." },
            { step: "4", title: "Loyalty Points Accumulation", desc: "Even demo-mode play earns loyalty points that contribute to VIP tier progression. Your long-term membership benefits begin building from day one." },
            { step: "5", title: "Notifications and Updates", desc: "All users receive app update notifications, bonus alerts, and promotional communications regardless of spending history." },
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
      </section>

      {/* Comparison with Paid Alternatives */}
      <section className="section-padding bg-primary-100 max-w-full">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold gradient-text mb-6">Rajluck Free vs Paid Gaming Alternatives</h2>
          <p className="text-text-secondary mb-8">
            Comparing Rajluck's free model against typical paid gaming apps highlights the value proposition clearly.
          </p>
          <div className="overflow-x-auto">
            <table className="info-table w-full text-left">
              <thead>
                <tr>
                  <th className="p-3 bg-primary-100 font-semibold">Feature</th>
                  <th className="p-3 bg-primary-100 font-semibold">Rajluck Game (Free)</th>
                  <th className="p-3 bg-primary-100 font-semibold">Typical Paid Gaming App</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Download cost", "Free", "₹0–₹500"],
                  ["Registration", "Free", "Free or paid subscription"],
                  ["Access to full game library", "Yes (demo mode)", "Often locked behind purchase"],
                  ["Regular updates", "Free forever", "May require repurchase or subscription"],
                  ["Bonus rewards", "Yes — built-in system", "Rare or absent"],
                  ["Customer support", "Free for all users", "Sometimes paid tier only"],
                  ["Earning real rewards", "Yes — through play", "Not applicable"],
                ].map(([feat, raj, paid]) => (
                  <tr key={feat} className="border-b">
                    <td className="p-3 text-text-secondary text-sm font-medium">{feat}</td>
                    <td className="p-3 text-green-700 text-sm font-semibold">{raj}</td>
                    <td className="p-3 text-text-muted text-sm">{paid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section-padding max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold gradient-text mb-6">The Value Rajluck Delivers at Zero Cost</h2>
        <p className="text-text-secondary mb-6">
          Rajluck's free model is not charity — it is a deliberate business decision. By removing financial barriers to entry, Rajluck builds a larger community, which feeds better jackpots, more active tournaments, and a richer overall experience for everyone. Every free user contributes to the vitality of the platform.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { headline: "Zero-Risk Exploration", body: "Test every game in the catalog with demo credits. Find your favourites before committing a single rupee." },
            { headline: "Earn While You Explore", body: "Daily bonuses and referral credits accumulate even during free play, building a starting balance you never had to deposit." },
            { headline: "No Expiry on Free Access", body: "Free accounts do not expire or lose access. Your account is yours indefinitely with no recurring cost." },
            { headline: "Community Without Pay Walls", body: "Rajluck's leaderboards, chat features, and community events are open to all users — not locked behind premium tiers." },
          ].map((item) => (
            <div key={item.headline} className="card p-6">
              <h4 className="font-bold text-primary mb-2">{item.headline}</h4>
              <p className="text-text-secondary text-sm">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-primary-50 max-w-full">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold gradient-text mb-8">Free Play FAQ</h2>
          <div className="space-y-6">
            {[
              { q: "Is the Rajluck Game APK really free to download?", a: "Yes. The Rajluck Game APK is completely free to download from rajluckgamers.com. There are no download fees, no credit card requirements, and no trial period limitations." },
              { q: "Do I need to deposit to start playing?", a: "No. You can register and play all games in demo mode without making any deposit. Demo mode uses virtual credits that are reset each session. Real-money play requires a deposit, but it is entirely optional." },
              { q: "Are there any subscription fees I might not be aware of?", a: "Absolutely not. Rajluck Game does not have a subscription model of any kind. There are no monthly, annual, or one-time membership fees. The app is free to download, register, and use indefinitely." },
              { q: "What is the catch?", a: "There is no catch. Rajluck's revenue comes from the house edge on real-money games — the same model used by all legitimate gaming platforms. Free users simply play in demo mode and do not contribute to that revenue stream, and that is perfectly fine." },
            ].map((faq) => (
              <div key={faq.q} className="card p-6">
                <h3 className="font-bold text-text-primary mb-2">{faq.q}</h3>
                <p className="text-text-secondary text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient-soft section-padding text-center">
        <h2 className="text-3xl font-bold text-black mb-4">Start for Free — No Catches, No Fees</h2>
        <p className="text-black/70 mb-8 max-w-xl mx-auto">Download Rajluck Game, register your free account, and start exploring the full game library today.</p>
        <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta inline-block text-lg font-bold px-10 py-4 rounded-full shadow-xl">
          Get Rajluck Free
        </a>
      </section>

      {/* Internal Links */}
      <section className="section-padding max-w-4xl mx-auto">
        <h2 className="text-xl font-bold text-text-primary mb-4">Learn More</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/rajluck-game-bonus" className="btn-outline px-4 py-2 rounded-full text-sm">Bonus System</Link>
          <Link href="/rajluck-game-rewards" className="btn-outline px-4 py-2 rounded-full text-sm">Rewards Program</Link>
          <Link href="/rajluck-game-play" className="btn-outline px-4 py-2 rounded-full text-sm">How to Play</Link>
          <Link href="/rajluck-game-install" className="btn-outline px-4 py-2 rounded-full text-sm">Installation Guide</Link>
          <Link href="/rajluck-download" className="btn-outline px-4 py-2 rounded-full text-sm">Download Guide</Link>
          <Link href="/rajluck-game-online" className="btn-outline px-4 py-2 rounded-full text-sm">Internet Guide</Link>
        </div>
      </section>
    </main>
  );
}
