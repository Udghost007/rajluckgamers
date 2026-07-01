import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rajluck Game Rewards – Complete Rewards System Guide 2026",
  description: "Rajluck Game Rewards — complete guide to every reward type: daily rewards, VIP rewards, referral commissions, cashback, loyalty points, and tournament prizes. rajluck game rewards, rajluck rewards.",
  keywords: ["Rajluck Game Rewards", "Rajluck Rewards", "Rajluck daily rewards", "Rajluck VIP rewards", "Rajluck referral bonus", "Rajluck cashback", "Rajluck loyalty points", "Rajluck Game", "Rajluck", "RajluckGamers"],
  openGraph: { title: "Rajluck Game Rewards – Complete System Guide 2026", description: "Master every Rajluck reward type at rajluckgamers.com.", url: "https://rajluckgamers.com/rajluck-game-rewards", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Rajluck Game Rewards" }] },
  twitter: { card: "summary_large_image", title: "Rajluck Game Rewards Guide", images: ["/og-image.png"] },
  alternates: { canonical: "https://rajluckgamers.com/rajluck-game-rewards" },
};

const CTA_LINK = "https://share-rxapq9cajg.rajluck.co/web/share/index.html?ic=AA0DL7ND&ts=1782835740&m=2&lang=en&id=1";

export default function Page() {
  return (
    <main>
      {/* Hero */}
      <section className="hero-gradient section-padding text-center">
        <Image src="/logo.webp" alt="Rajluck Game Rewards" width={160} height={160} className="w-[100px] sm:w-[180px] mx-auto mb-6 drop-shadow-2xl animate-fade-in" priority />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-black mb-4 animate-slide-up">
          Complete Rajluck<br />Rewards System Guide
        </h1>
        <p className="text-lg text-black/80 max-w-2xl mx-auto mb-8">
          Rajluck offers seven distinct reward types — daily login rewards, milestone bonuses, VIP tier perks, tournament prizes, referral commissions, loyalty points, and cashback. This guide explains every one in detail so you can maximize your earnings.
        </p>
        <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta text-lg px-8 py-4 inline-block">
          Claim Your Rewards
        </a>
      </section>

      {/* Rewards Overview */}
      <section className="section-padding bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4 gradient-text">Rewards at a Glance</h2>
          <p className="text-text-secondary mb-6">Every active Rajluck player earns from multiple reward streams simultaneously. Here is a summary of all seven reward types:</p>
          <table className="info-table w-full">
            <thead>
              <tr>
                <th className="text-left p-3">Reward Type</th>
                <th className="text-left p-3">How to Earn</th>
                <th className="text-left p-3">Credited</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-3 text-text-secondary">Daily Rewards</td><td className="p-3 text-text-secondary">Log in each day</td><td className="p-3 text-text-secondary">Instantly on login</td></tr>
              <tr><td className="p-3 text-text-secondary">Milestone Rewards</td><td className="p-3 text-text-secondary">Reach deposit/play milestones</td><td className="p-3 text-text-secondary">Automatically on trigger</td></tr>
              <tr><td className="p-3 text-text-secondary">VIP Rewards</td><td className="p-3 text-text-secondary">Maintain VIP tier status</td><td className="p-3 text-text-secondary">Weekly on Mondays</td></tr>
              <tr><td className="p-3 text-text-secondary">Tournament Prizes</td><td className="p-3 text-text-secondary">Rank in tournament leaderboards</td><td className="p-3 text-text-secondary">Within 24 hours of event end</td></tr>
              <tr><td className="p-3 text-text-secondary">Referral Commissions</td><td className="p-3 text-text-secondary">Invite friends who deposit</td><td className="p-3 text-text-secondary">When referred user deposits</td></tr>
              <tr><td className="p-3 text-text-secondary">Loyalty Points</td><td className="p-3 text-text-secondary">Play any game</td><td className="p-3 text-text-secondary">Real-time during gameplay</td></tr>
              <tr><td className="p-3 text-text-secondary">Cashback</td><td className="p-3 text-text-secondary">Net losses in a week</td><td className="p-3 text-text-secondary">Every Monday morning</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Daily Rewards */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Daily Login Rewards</h2>
          <p className="text-text-secondary mb-6">The simplest reward — just open Rajluck every day. Daily rewards follow a 7-day cycle that resets each week:</p>
          <div className="grid grid-cols-7 gap-2 mb-6">
            {["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"].map((day, i) => (
              <div key={day} className="card-static p-3 text-center">
                <p className="text-xs text-text-secondary">{day}</p>
                <p className="font-bold text-primary text-sm">{i === 6 ? "Bonus" : "Base"}</p>
              </div>
            ))}
          </div>
          <div className="card-static p-5 bg-primary-50">
            <h3 className="font-semibold text-text-primary mb-2">Maximizing Daily Rewards</h3>
            <ul className="text-text-secondary text-sm space-y-1">
              <li>• Log in every day to avoid breaking the streak — missing a day resets the cycle</li>
              <li>• Day 7 rewards are significantly higher than days 1-6, so consistency pays off</li>
              <li>• Daily rewards are credited to your bonus wallet and must be wagered 1x before withdrawal</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Milestone Rewards */}
      <section className="section-padding bg-primary-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Milestone Rewards</h2>
          <p className="text-text-secondary mb-6">One-time bonuses triggered when you reach specific activity milestones. These are permanent achievements that do not reset:</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { milestone: "First Deposit", desc: "Complete your first-ever deposit of any amount. Bonus is a percentage of the deposit value, credited instantly." },
              { milestone: "First Win", desc: "Win your first game on Rajluck. A small celebration bonus is added to your account." },
              { milestone: "100 Games Played", desc: "Play 100 rounds across any combination of games. Rewards scale with your average bet size." },
              { milestone: "Cumulative Deposit Tiers", desc: "Reach total lifetime deposit thresholds to unlock increasing bonus percentages at each tier." },
              { milestone: "30-Day Active Streak", desc: "Log in and play at least one game per day for 30 consecutive days. One of the largest milestone rewards." },
              { milestone: "Refer 5 Friends", desc: "Successfully refer 5 friends who register and make a deposit. Earns a fixed bonus on top of referral commissions." },
            ].map(({ milestone, desc }) => (
              <div key={milestone} className="card-static p-4">
                <h3 className="font-semibold text-primary mb-1">{milestone}</h3>
                <p className="text-text-secondary text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIP Rewards */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4 gradient-text">VIP Tier Rewards</h2>
          <p className="text-text-secondary mb-6">Rajluck has a tiered VIP system. Your tier is determined by monthly activity. Each tier unlocks exclusive perks:</p>
          <div className="grid sm:grid-cols-3 gap-5">
            <div className="card">
              <h3 className="font-bold text-primary mb-2">Bronze</h3>
              <ul className="text-text-secondary text-sm space-y-1">
                <li>• 2% weekly cashback</li>
                <li>• Access to standard tournaments</li>
                <li>• Standard withdrawal speed</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="font-bold text-primary mb-2">Silver</h3>
              <ul className="text-text-secondary text-sm space-y-1">
                <li>• 4% weekly cashback</li>
                <li>• Priority tournament entry</li>
                <li>• Faster withdrawal processing</li>
                <li>• Monthly bonus drops</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="font-bold text-primary mb-2">Gold & Above</h3>
              <ul className="text-text-secondary text-sm space-y-1">
                <li>• 6%+ weekly cashback</li>
                <li>• Exclusive VIP tournaments</li>
                <li>• Instant withdrawals</li>
                <li>• Dedicated account manager</li>
                <li>• Custom reward deals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Referral & Loyalty */}
      <section className="section-padding bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-6">Referral Commissions & Loyalty Points</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="font-bold text-primary mb-3">Referral Program</h3>
              <p className="text-text-secondary text-sm mb-3">Share your unique referral link. When a friend registers and makes their first deposit, you earn a commission. The referral program has no cap — invite as many friends as you want.</p>
              <ul className="text-text-secondary text-xs space-y-1">
                <li>• Commission is a percentage of referral's first deposit</li>
                <li>• Additional ongoing commissions on referral's gameplay activity</li>
                <li>• Track all referrals in your Referral Dashboard</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="font-bold text-primary mb-3">Loyalty Points System</h3>
              <p className="text-text-secondary text-sm mb-3">Every bet you place earns loyalty points proportional to the wager amount. Points accumulate in your Loyalty Wallet and can be converted to cash:</p>
              <ul className="text-text-secondary text-xs space-y-1">
                <li>• Points earned in real-time during gameplay</li>
                <li>• Conversion rate improves at higher VIP tiers</li>
                <li>• Points never expire as long as your account is active</li>
                <li>• Redeem points any time — no minimum threshold</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tournament Prizes & Cashback */}
      <section className="section-padding bg-primary-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-6">Tournament Prizes & Cashback</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="card-static p-5">
              <h3 className="font-bold text-text-primary mb-3">Tournaments</h3>
              <p className="text-text-secondary text-sm mb-3">Rajluck runs daily, weekly, and monthly tournaments with prize pools. Entry is based on your VIP tier — higher tiers unlock larger prize pools.</p>
              <ul className="text-text-secondary text-xs space-y-1">
                <li>• Leaderboard-based ranking during tournament window</li>
                <li>• Top 10-50 players share the prize pool</li>
                <li>• Prizes credited within 24 hours of tournament end</li>
                <li>• Monthly mega-tournaments have the largest pools</li>
              </ul>
            </div>
            <div className="card-static p-5">
              <h3 className="font-bold text-text-primary mb-3">Weekly Cashback</h3>
              <p className="text-text-secondary text-sm mb-3">If your net result for the week is negative, Rajluck returns a percentage as cashback. Cashback is calculated on net losses only:</p>
              <ul className="text-text-secondary text-xs space-y-1">
                <li>• Calculated every Sunday at midnight</li>
                <li>• Credited to your main wallet on Monday morning</li>
                <li>• Cashback percentage depends on your VIP tier</li>
                <li>• No wagering requirement — cashback is real cash</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {[
              { q: "Do reward bonuses have wagering requirements?", a: "Daily and milestone bonuses have a 1x wagering requirement. Cashback and tournament prizes have zero wagering requirements and can be withdrawn immediately." },
              { q: "Can I earn multiple reward types at the same time?", a: "Yes. All reward streams run simultaneously. A single gaming session can earn you loyalty points, contribute to milestone progress, count toward tournament rankings, and qualify for cashback." },
              { q: "When do VIP tiers reset?", a: "VIP status is evaluated monthly. If your activity drops below the tier threshold, you move down one tier at the start of the next month. You never drop more than one tier per month." },
              { q: "Is there a maximum referral commission?", a: "There is no cap on the number of referrals or total commission earned. Some top referrers earn more from commissions than from their own gameplay." },
              { q: "How do I check my current rewards balance?", a: "Open the Rajluck app, go to your Wallet section. You will see separate balances for Main Wallet, Bonus Wallet, and Loyalty Points." },
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
        <h2 className="text-3xl font-bold text-text-primary mb-4">Start Earning Rewards Today</h2>
        <p className="text-text-secondary mb-6 max-w-xl mx-auto">Every day you are not playing, you are missing daily rewards, loyalty points, and cashback opportunities.</p>
        <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta inline-block px-8 py-4 text-lg">
          Play and Earn on Rajluck
        </a>
      </section>

      {/* Internal Links */}
      <section className="section-padding bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-text-primary mb-4">Explore More</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/rajluck-register" className="btn-outline text-sm px-4 py-2">Register & Verify</Link>
            <Link href="/rajluck-game-latest-version" className="btn-outline text-sm px-4 py-2">Latest Version</Link>
            <Link href="/rajluck-login" className="btn-outline text-sm px-4 py-2">Login Help</Link>
            <Link href="/rajluck-game-download" className="btn-outline text-sm px-4 py-2">Download Guide</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
