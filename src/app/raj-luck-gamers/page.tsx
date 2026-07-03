import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Raj Luck Gamers – Download Rajluck Game APK & Complete Guide 2026",
  description:
    "Raj Luck Gamers is your trusted source for Rajluck Game. Download the latest Raj Luck Game APK for Android, register, login, and discover features. Also known as RajluckGamers, Rajluck Gamers, Rajluck Game, RajluckGame, Rajluck. Full guide at rajluckgamers.com.",
  keywords: [
    "Raj Luck Gamers", "RajluckGamers", "Rajluck Gamers", "rajluckgamers",
    "Rajluck Game", "Rajluck", "RajluckGame", "Rajluck APK", "Rajluck App",
    "Raj Luck", "Raj Luck Game", "Raj Luck Gamers download",
  ],
  openGraph: {
    title: "Raj Luck Gamers – Download Rajluck Game APK & Guide 2026",
    description: "Raj Luck Gamers: complete guide to Rajluck Game. Download APK, register, login at rajluckgamers.com.",
    url: "https://rajluckgamers.com/raj-luck-gamers",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Raj Luck Gamers" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raj Luck Gamers – Rajluck Game Guide",
    description: "Complete Rajluck Game guide. Download APK, register, login at rajluckgamers.com.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://rajluckgamers.com/raj-luck-gamers" },
};

const CTA_LINK = "https://share-rxapq9cajg.rajluck.co/web/share/index.html?ic=AA64CBGV&ts=1783054980&m=2&lang=en&id=1";

export default function RajLuckGamersPage() {
  return (
    <main className="min-h-screen bg-surface">
      {/* Hero */}
      <section className="hero-gradient section-padding text-center">
        <div className="max-w-4xl mx-auto">
          <Image
            src="/logo.webp"
            alt="Raj Luck Gamers Promotions and Events"
            width={160}
            height={160}
            className="w-[100px] sm:w-[180px] mx-auto mb-6 drop-shadow-2xl animate-fade-in"
            priority
          />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-black mb-4 animate-fade-in">
            <span className="gradient-text">Raj Luck Gamers</span> Guide to Promotions & Events
          </h1>
          <p className="text-lg sm:text-xl text-black/80 mb-8 max-w-2xl mx-auto animate-slide-up">
            Promotions are where Raj Luck truly shines. From daily login bonuses to massive seasonal
            events and a referral program that pays real cash — this guide covers every promotion
            type available and exactly how to maximize every single one.
          </p>
          <a
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta inline-block text-lg px-10 py-4 rounded-2xl font-bold shadow-xl animate-slide-up"
          >
            Claim Your First Bonus Now
          </a>
        </div>
      </section>

      {/* Promotion Types Overview */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4 text-center">
            Every Promotion Type on Raj Luck
          </h2>
          <p className="text-text-secondary text-center mb-10 max-w-2xl mx-auto">
            Raj Luck runs promotions across six distinct categories. Understanding each one lets you
            plan your play to capture the most value every week.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "📅",
                name: "Daily Login Bonus",
                desc: "Log in every day to collect your daily reward. The system tracks consecutive login streaks — the longer the streak, the higher the daily reward tier.",
              },
              {
                icon: "🎊",
                name: "Welcome Bonus",
                desc: "New players receive a deposit match bonus on their first top-up. The percentage and cap vary by promotion period — check the Promotions tab on registration day.",
              },
              {
                icon: "🔄",
                name: "Reload Bonus",
                desc: "Existing players can claim reload bonuses on additional deposits throughout the month. These are typically triggered by depositing above a threshold on specific days.",
              },
              {
                icon: "👥",
                name: "Referral Program",
                desc: "Earn a commission each time a referred friend makes a qualifying deposit. The referral dashboard tracks all your referrals and shows pending and paid commissions in real time.",
              },
              {
                icon: "🏆",
                name: "Tournament Events",
                desc: "Compete on leaderboards during slot tournaments. Top players earn cash prizes, VIP upgrades, or exclusive bonus credits — prizes are paid automatically after the event closes.",
              },
              {
                icon: "🎄",
                name: "Seasonal Events",
                desc: "Major holidays trigger limited-time events with exclusive games, boosted jackpots, and special reward multipliers. These events are announced via push notification and email.",
              },
            ].map((p) => (
              <div key={p.name} className="card p-5">
                <div className="text-4xl mb-3">{p.icon}</div>
                <h3 className="font-bold text-text-primary mb-2">{p.name}</h3>
                <p className="text-text-secondary text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Rewards System */}
      <section className="section-padding bg-primary-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4 text-center">
            The Daily Rewards System Explained
          </h2>
          <p className="text-text-secondary text-center mb-8 max-w-2xl mx-auto">
            The daily rewards system is designed to reward consistent engagement. Here's how it
            works in practice:
          </p>
          <table className="info-table w-full text-sm mb-8">
            <thead>
              <tr>
                <th className="text-left text-text-primary">Streak Day</th>
                <th className="text-left text-text-primary">Reward Type</th>
                <th className="text-left text-text-primary">Approximate Value</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Day 1</td><td className="text-text-secondary">Bonus Credits</td><td className="text-text-secondary">Small starter amount</td></tr>
              <tr><td>Day 3</td><td className="text-text-secondary">Free Spin Package</td><td className="text-text-secondary">10–20 spins on selected slots</td></tr>
              <tr><td>Day 7</td><td className="text-text-secondary">Cash Bonus</td><td className="text-text-secondary">Fixed cash reward, low wagering</td></tr>
              <tr><td>Day 14</td><td className="text-text-secondary">Deposit Match Voucher</td><td className="text-text-secondary">25–50% match on next deposit</td></tr>
              <tr><td>Day 30</td><td className="text-text-secondary">VIP Points Multiplier</td><td className="text-text-secondary">2x VIP points for 48 hours</td></tr>
            </tbody>
          </table>
          <div className="card p-5 bg-white">
            <h3 className="font-bold text-primary mb-2">Important: Streak Reset Rules</h3>
            <p className="text-text-secondary text-sm">
              Missing a login resets your streak counter to Day 1. The streak day counts at server
              midnight, not local time. Raj Luck Gamers who travel internationally should adjust for
              the server timezone to avoid accidentally missing a day. The timezone is displayed in
              your Account Settings page.
            </p>
          </div>
        </div>
      </section>

      {/* Referral Program Deep Dive */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-10 text-center">
            Referral Program: How to Maximize It
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-text-primary mb-4">How It Works</h3>
              <ol className="space-y-3 text-sm text-text-secondary list-none">
                {[
                  "Go to Profile > Referral Program to find your unique referral link and code.",
                  "Share the link with friends, family, or your network via any channel.",
                  "When your referred friend registers using your link and makes their first qualifying deposit, the referral is confirmed.",
                  "You earn a commission percentage on that deposit. Commissions continue for qualifying activity over subsequent months.",
                  "Track earnings live in the Referral Dashboard — commissions are typically credited within 24 hours of the triggering deposit.",
                ].map((step, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="step-number shrink-0 text-xs w-6 h-6">{i + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Maximizing Referral Earnings</h3>
              <div className="space-y-4">
                {[
                  { tip: "Share Strategically", detail: "Share with people who genuinely enjoy mobile gaming. Referrals who become active players earn you ongoing commissions, not just a one-time payment." },
                  { tip: "Time Your Outreach", detail: "Share before major seasonal events when Rajluck is running extra welcome bonuses — your friends get a better deal and are more likely to stay active." },
                  { tip: "Use the QR Code", detail: "The referral program generates a personal QR code alongside your link. QR codes convert well when shared in messaging apps and social media stories." },
                ].map((r) => (
                  <div key={r.tip} className="card p-4">
                    <h4 className="font-semibold text-primary mb-1 text-sm">{r.tip}</h4>
                    <p className="text-text-secondary text-xs">{r.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Events */}
      <section className="section-padding bg-primary-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
            Seasonal Events Calendar
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { season: "Chinese New Year", months: "Jan–Feb", highlight: "Red envelope lucky draws, boosted jackpots, exclusive themed slot releases" },
              { season: "Songkran Festival", months: "Apr", highlight: "Water Festival free spin packs, 3-day double loyalty points event" },
              { season: "Ramadan & Eid", months: "Mar–Apr", highlight: "Special Ramadan reload bonus, Eid prize pool tournament with cash prizes" },
              { season: "Year-End Mega Event", months: "Dec", highlight: "Biggest tournament of the year, VIP upgrades, anniversary bonus multipliers" },
            ].map((e) => (
              <div key={e.season} className="card p-5 text-center">
                <div className="text-text-muted text-xs uppercase tracking-wide mb-1">{e.months}</div>
                <h3 className="font-bold text-text-primary mb-2 text-sm">{e.season}</h3>
                <p className="text-text-secondary text-xs">{e.highlight}</p>
              </div>
            ))}
          </div>
          <p className="text-text-muted text-center text-sm mt-6">
            Event dates and specifics vary by year. Enable push notifications in the Raj Luck app
            to get alerts as soon as each seasonal event launches.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">Promotions FAQ</h2>
          <div className="space-y-5">
            {[
              {
                q: "Can I claim multiple promotions at the same time?",
                a: "Generally, one active promotion applies to your account at a time. However, some promotions — such as the daily login bonus and an active reload bonus — can run concurrently. Check each promotion's specific terms to confirm.",
              },
              {
                q: "What is a wagering requirement and how does it work?",
                a: "A wagering requirement means you need to bet the bonus amount a set number of times before it becomes withdrawable. For example, a 10x wagering requirement on a $10 bonus means you must wager $100 total before withdrawing the bonus winnings.",
              },
              {
                q: "Do promotional bonus credits expire?",
                a: "Yes. Most bonuses expire within 7–30 days of being credited. The exact expiry is shown on the promotion card. Check the Promotions tab regularly to track active bonuses and their remaining time.",
              },
              {
                q: "How do I know when a new seasonal event starts?",
                a: "Enable push notifications in the Raj Luck app. You can also check the Promotions tab on the first day of each major holiday period — events typically activate at midnight server time on their start date.",
              },
              {
                q: "Is there a VIP program that enhances promotions?",
                a: "Yes. Higher VIP tiers receive exclusive promotions not available to standard accounts — including higher deposit match percentages, dedicated birthday bonuses, and priority processing on withdrawal requests.",
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
          <h2 className="text-3xl font-bold text-text-primary mb-4">Start Earning Promotions Today</h2>
          <p className="text-text-secondary mb-8">
            Register your Raj Luck account now and claim your welcome bonus before the current
            offer period ends.
          </p>
          <a
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block text-lg px-10 py-4 rounded-2xl font-bold shadow-xl"
          >
            Register & Claim Welcome Bonus
          </a>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section-padding bg-primary-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-6">More Raj Luck Guides</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/rajluck" className="btn-outline px-6 py-3 rounded-xl font-semibold">What is Rajluck?</Link>
            <Link href="/raj-luck" className="btn-outline px-6 py-3 rounded-xl font-semibold">Platform Overview</Link>
            <Link href="/raj-luck-game" className="btn-outline px-6 py-3 rounded-xl font-semibold">Beginner's Guide</Link>
            <Link href="/rajluckgame" className="btn-outline px-6 py-3 rounded-xl font-semibold">Platform Comparison</Link>
            <Link href="/rajluckgamers" className="btn-outline px-6 py-3 rounded-xl font-semibold">Community Hub</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
