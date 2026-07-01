import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rajluck Game Bonus – Welcome Bonus, Referral & Daily Rewards 2026",
  description: "Rajluck Game Bonus — discover welcome bonuses, referral rewards, daily activity bonuses, and seasonal promotions. rajluck game bonus, rajluck bonus, rajluck game rewards.",
  keywords: ["Rajluck Game Bonus", "Rajluck Bonus", "Rajluck Game rewards", "Rajluck welcome bonus", "Rajluck referral bonus", "Rajluck daily bonus", "Rajluck Game", "Rajluck", "Raj Luck Game Bonus", "RajluckGamers"],
  openGraph: { title: "Rajluck Game Bonus – Rewards & Promotions 2026", description: "Discover Rajluck Game bonuses and rewards at rajluckgamers.com.", url: "https://rajluckgamers.com/rajluck-game-bonus", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Rajluck Game Bonus" }] },
  twitter: { card: "summary_large_image", title: "Rajluck Game Bonus", images: ["/og-image.png"] },
  alternates: { canonical: "https://rajluckgamers.com/rajluck-game-bonus" },
};

const CTA_LINK = "https://share-rxapq9cajg.rajluck.co/web/share/index.html?ic=AA0DL7ND&ts=1782835740&m=2&lang=en&id=1";

export default function Page() {
  return (
    <main className="min-h-screen bg-surface text-text-primary">
      {/* Hero */}
      <section className="hero-gradient section-padding text-center">
        <Image src="/logo.webp" alt="Rajluck Game Bonus System" width={160} height={160} className="w-[100px] sm:w-[180px] mx-auto mb-6 drop-shadow-2xl animate-fade-in" priority />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-black mb-4 animate-slide-up">Rajluck Game Bonus System Explained</h1>
        <p className="text-xl text-black/80 mb-3 font-medium">Welcome Bonus • Daily Rewards • Referral • VIP</p>
        <p className="text-base text-black/70 max-w-2xl mx-auto mb-8">
          Rajluck Game rewards players at every stage — from the moment you register through every milestone in your journey. This deep-dive explains each bonus type, how to claim it, what terms apply, and how to extract maximum value from the system.
        </p>
        <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta inline-block text-lg font-bold px-10 py-4 rounded-full shadow-xl animate-fade-in">
          Claim Your Bonus Now
        </a>
      </section>

      {/* Bonus Types Overview */}
      <section className="section-padding max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold gradient-text mb-6">All Rajluck Bonus Types at a Glance</h2>
        <div className="overflow-x-auto">
          <table className="info-table w-full text-left">
            <thead>
              <tr>
                <th className="p-3 bg-primary-100 font-semibold">Bonus Type</th>
                <th className="p-3 bg-primary-100 font-semibold">When Awarded</th>
                <th className="p-3 bg-primary-100 font-semibold">Typical Value</th>
                <th className="p-3 bg-primary-100 font-semibold">Wagering Required</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Welcome Bonus", "First deposit", "Up to 100% match", "Yes — typically 20–35x"],
                ["Daily Login Bonus", "Every consecutive login", "Credits or spins", "Usually low or none"],
                ["Referral Bonus", "Friend registers + deposits", "Fixed credit award", "Partial wagering"],
                ["VIP Bonus", "Reaching tier milestones", "Cashback + exclusive credits", "Low or none"],
                ["Seasonal Promotion", "Holidays and events", "Varies by campaign", "Campaign-specific"],
                ["Reload Bonus", "Subsequent deposits", "Percentage match (lower than welcome)", "Yes"],
              ].map(([type, when, value, wagering]) => (
                <tr key={type} className="border-b">
                  <td className="p-3 text-primary font-medium text-sm">{type}</td>
                  <td className="p-3 text-text-secondary text-sm">{when}</td>
                  <td className="p-3 text-text-secondary text-sm">{value}</td>
                  <td className="p-3 text-text-muted text-sm">{wagering}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Welcome Bonus Deep Dive */}
      <section className="section-padding bg-primary-50 max-w-full">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold gradient-text mb-6">Welcome Bonus — How It Works</h2>
          <p className="text-text-secondary mb-8">
            The Rajluck welcome bonus is awarded on your first qualifying deposit. It matches a percentage of your deposit up to a capped amount, instantly credited to your bonus balance.
          </p>
          <ol className="space-y-5">
            {[
              { step: "1", title: "Register Your Account", desc: "Complete the registration form with your valid details. Ensure your information is accurate — withdrawals require identity verification that must match your registration data." },
              { step: "2", title: "Make Your First Deposit", desc: "Navigate to the deposit section and fund your account using any supported payment method. The minimum qualifying deposit amount is displayed in the bonus terms." },
              { step: "3", title: "Bonus is Automatically Applied", desc: "Once your deposit clears, the welcome bonus is credited to your bonus wallet automatically — no promo code needed unless specified in the current promotion." },
              { step: "4", title: "Meet the Wagering Requirement", desc: "Wager the required multiple of the bonus amount on eligible games. Slots typically contribute 100% toward the requirement; table games may contribute less." },
              { step: "5", title: "Bonus Converts to Real Cash", desc: "Once wagering is complete, the bonus funds convert to real withdrawable cash, which you can take out or continue playing with." },
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

      {/* Daily Bonus */}
      <section className="section-padding max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold gradient-text mb-6">Daily Bonus — Your Everyday Reward</h2>
        <p className="text-text-secondary mb-6">
          Rajluck rewards consistency. Logging in daily unlocks the daily bonus calendar — a streak-based system where each consecutive day earns a progressively better reward.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { day: "Day 1", reward: "10 bonus credits", note: "Starting reward, claimable on first login of the day." },
            { day: "Day 2–3", reward: "20–30 bonus credits", note: "Streak multiplier kicks in, increasing your daily earn." },
            { day: "Day 4–6", reward: "50 credits + free spins", note: "Mid-week bonus package with spins on featured games." },
            { day: "Day 7", reward: "Weekly Jackpot Entry", note: "Completing a 7-day streak earns a jackpot draw entry." },
            { day: "Day 14", reward: "2x multiplier weekend", note: "A 48-hour period where all earnings are doubled." },
            { day: "Day 30", reward: "VIP tier upgrade credit", note: "Monthly milestone bonus toward your next VIP level." },
          ].map((item) => (
            <div key={item.day} className="card p-5">
              <span className="text-xs font-bold text-primary uppercase tracking-wide">{item.day}</span>
              <h4 className="font-bold text-text-primary my-1">{item.reward}</h4>
              <p className="text-text-muted text-xs">{item.note}</p>
            </div>
          ))}
        </div>
        <p className="text-text-muted text-sm mt-6">
          Missing a day resets the streak to Day 1. Set a daily reminder to protect your streak progress.
        </p>
      </section>

      {/* Referral Bonus */}
      <section className="section-padding bg-primary-100 max-w-full">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold gradient-text mb-6">Referral Bonus — Earn by Inviting Friends</h2>
          <p className="text-text-secondary mb-8">
            The Rajluck referral program lets you earn credits every time someone you invite joins and makes their first deposit. There is no cap on the number of people you can refer.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="font-bold text-primary mb-3">How to Refer</h3>
              <ol className="text-text-secondary text-sm space-y-2">
                <li>1. Go to your profile and tap "Refer a Friend"</li>
                <li>2. Copy your unique referral link or code</li>
                <li>3. Share it with friends via messaging, social, or email</li>
                <li>4. Your friend registers using your link</li>
                <li>5. They make their first deposit</li>
                <li>6. Both of you receive referral bonus credits</li>
              </ol>
            </div>
            <div className="card p-6">
              <h3 className="font-bold text-primary mb-3">Referral Reward Structure</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="py-1 text-left text-text-primary">Referrals</th>
                      <th className="py-1 text-left text-text-primary">Your Reward</th>
                    </tr>
                  </thead>
                  <tbody className="text-text-secondary">
                    <tr className="border-b"><td className="py-1">1st referral</td><td className="py-1">Standard credit</td></tr>
                    <tr className="border-b"><td className="py-1">5th referral</td><td className="py-1">1.5x credit</td></tr>
                    <tr className="border-b"><td className="py-1">10th referral</td><td className="py-1">2x credit + bonus spins</td></tr>
                    <tr><td className="py-1">25th+ referral</td><td className="py-1">VIP referral tier — 3x credit</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIP Bonus */}
      <section className="section-padding max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold gradient-text mb-6">VIP Bonus Tiers — Loyalty Rewarded</h2>
        <p className="text-text-secondary mb-8">
          The Rajluck VIP program has five tiers. As you accumulate loyalty points through gameplay, you ascend tiers and unlock increasingly valuable bonuses and privileges.
        </p>
        <div className="grid sm:grid-cols-5 gap-3">
          {[
            { tier: "Bronze", perks: "Basic cashback, weekly reload bonus" },
            { tier: "Silver", perks: "Higher cashback, priority support" },
            { tier: "Gold", perks: "Personal account manager, exclusive game access" },
            { tier: "Platinum", perks: "Faster withdrawals, bespoke bonus offers" },
            { tier: "Diamond", perks: "Maximum cashback, event invitations, highest limits" },
          ].map((item) => (
            <div key={item.tier} className="card-static bg-primary-50 rounded-xl p-4 text-center">
              <h4 className="font-bold text-primary mb-2">{item.tier}</h4>
              <p className="text-text-muted text-xs">{item.perks}</p>
            </div>
          ))}
        </div>
        <p className="text-text-secondary mt-6 text-sm">
          VIP tier progress is visible in your profile under the Loyalty section. Points never expire as long as your account remains active.
        </p>
      </section>

      {/* Maximizing Bonus Value */}
      <section className="section-padding bg-primary-50 max-w-full">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold gradient-text mb-6">How to Maximize Your Bonus Value</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { tip: "Read the T&Cs Before Claiming", desc: "Each bonus has expiry dates, eligible games, and maximum bet limits during wagering. Violating these can forfeit the bonus." },
              { tip: "Fulfill Wagering on High-RTP Slots", desc: "Games with 97%+ RTP burn through wagering requirements faster because the house edge is lower, preserving more of your balance." },
              { tip: "Never Miss a Day on the Login Calendar", desc: "Day 7 and Day 30 milestones offer disproportionately high rewards. A broken streak means restarting from Day 1." },
              { tip: "Deposit on Double Bonus Weekends", desc: "Seasonal promotions often run 2x welcome match events. Timing your deposit around these events doubles your bonus value." },
            ].map((item) => (
              <div key={item.tip} className="card p-6">
                <h4 className="font-bold text-primary mb-2">{item.tip}</h4>
                <p className="text-text-secondary text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold gradient-text mb-8">Bonus FAQ</h2>
        <div className="space-y-6">
          {[
            { q: "Can I withdraw my welcome bonus immediately after claiming?", a: "No. Welcome bonus funds must complete the wagering requirement before they can be withdrawn. However, any real-money deposits remain withdrawable at any time without restriction." },
            { q: "Do bonuses expire?", a: "Yes. Most bonuses carry a 7–30 day expiry window from the date of claiming. Uncompleted wagering after expiry results in the bonus being forfeited. Check each bonus's terms for its specific expiry duration." },
            { q: "Can I have multiple bonuses active at once?", a: "Rajluck allows one active bonus at a time. Claiming a new bonus while one is active may cancel the existing one. Complete or opt out of the current bonus before claiming another." },
            { q: "What is the maximum bet allowed during bonus wagering?", a: "During bonus wagering, bet sizes are typically capped (commonly at a fixed amount per spin or round). Exceeding this limit can void the bonus. The maximum bet is listed in each bonus's terms." },
            { q: "Is the referral bonus real money or bonus funds?", a: "Referral rewards are typically credited as bonus funds with a lower wagering requirement than the welcome bonus. Once the requirement is met, the funds convert to real withdrawable cash." },
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
        <h2 className="text-3xl font-bold text-black mb-4">Ready to Claim Your Bonus?</h2>
        <p className="text-black/70 mb-8 max-w-xl mx-auto">Register today and unlock your welcome bonus package. Daily rewards and the referral program are waiting for you inside.</p>
        <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta inline-block text-lg font-bold px-10 py-4 rounded-full shadow-xl">
          Get My Bonus
        </a>
      </section>

      {/* Internal Links */}
      <section className="section-padding max-w-4xl mx-auto">
        <h2 className="text-xl font-bold text-text-primary mb-4">Related Guides</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/rajluck-game-rewards" className="btn-outline px-4 py-2 rounded-full text-sm">Rewards Program</Link>
          <Link href="/rajluck-game-play" className="btn-outline px-4 py-2 rounded-full text-sm">How to Play</Link>
          <Link href="/rajluck-game-free" className="btn-outline px-4 py-2 rounded-full text-sm">Is It Free?</Link>
          <Link href="/rajluck-game-install" className="btn-outline px-4 py-2 rounded-full text-sm">Installation Guide</Link>
          <Link href="/rajluck-download" className="btn-outline px-4 py-2 rounded-full text-sm">Download Guide</Link>
          <Link href="/rajluck-game-online" className="btn-outline px-4 py-2 rounded-full text-sm">Internet Guide</Link>
        </div>
      </section>
    </main>
  );
}
