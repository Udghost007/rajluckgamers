import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rajluck Game Play – How to Play Rajluck Game 2026",
  description: "Rajluck Game Play — learn how to play Rajluck Game on Android. Download, register, login, and start playing. rajluck game play, play rajluck game, how to play rajluck.",
  keywords: ["Rajluck Game Play", "play Rajluck Game", "how to play Rajluck", "Rajluck Game guide", "Rajluck Game", "Rajluck", "Raj Luck Game Play", "RajluckGamers"],
  openGraph: { title: "Rajluck Game Play – How to Play 2026", description: "Learn how to play Rajluck Game. Guide at rajluckgamers.com.", url: "https://rajluckgamers.com/rajluck-game-play", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Rajluck Game Play" }] },
  twitter: { card: "summary_large_image", title: "Rajluck Game Play", images: ["/og-image.png"] },
  alternates: { canonical: "https://rajluckgamers.com/rajluck-game-play" },
};

const CTA_LINK = "https://share-rxapq9cajg.rajluck.co/web/share/index.html?ic=AA0DL7ND&ts=1782835740&m=2&lang=en&id=1";

export default function Page() {
  return (
    <main className="min-h-screen bg-surface text-text-primary">
      {/* Hero */}
      <section className="hero-gradient section-padding text-center">
        <Image src="/logo.webp" alt="How to Play Rajluck Game" width={160} height={160} className="w-[100px] sm:w-[180px] mx-auto mb-6 drop-shadow-2xl animate-fade-in" priority />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-black mb-4 animate-slide-up">How to Play Rajluck Game</h1>
        <p className="text-xl text-black/80 mb-3 font-medium">Complete Gameplay Guide for New &amp; Returning Players</p>
        <p className="text-base text-black/70 max-w-2xl mx-auto mb-8">
          Whether you have never opened the app or you are looking to sharpen your strategy, this guide walks through every aspect of Rajluck gameplay — from navigating the lobby to understanding game rules and building a smart selection strategy.
        </p>
        <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta inline-block text-lg font-bold px-10 py-4 rounded-full shadow-xl animate-fade-in">
          Start Playing Rajluck
        </a>
      </section>

      {/* Game Categories */}
      <section className="section-padding max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold gradient-text mb-6">Rajluck Game Categories</h2>
        <p className="text-text-secondary mb-8">
          Rajluck organizes its game library into clearly labeled categories so you can find your preferred style instantly. Each category offers a different pace, skill level, and reward structure.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { cat: "Slot Games", desc: "Spin-based games with varying paylines, multipliers, and bonus rounds. Ideal for players who enjoy fast-paced action with minimal decision-making per round.", tip: "Best for: beginners, casual sessions" },
            { cat: "Table Games", desc: "Strategy-driven games including card and number-based formats. Understanding basic rules gives you a meaningful edge in these titles.", tip: "Best for: analytical players who enjoy skill elements" },
            { cat: "Live Dealer", desc: "Real-time games streamed with a live host. These offer the most immersive experience and typically have higher minimum stakes.", tip: "Best for: experienced players seeking social interaction" },
            { cat: "Instant Win", desc: "Scratch-card style games that resolve immediately. Great for short sessions where you want quick results with no waiting.", tip: "Best for: mobile play during commutes or breaks" },
            { cat: "Tournament Rooms", desc: "Competitive formats where players compete against each other for a prize pool. Entry fees vary and leaderboard positions determine payouts.", tip: "Best for: competitive players with consistent bankrolls" },
            { cat: "Jackpot Games", desc: "Games with accumulating prize pools that can be won at any time. A portion of each wager contributes to the growing jackpot.", tip: "Best for: players chasing large single wins" },
          ].map((item) => (
            <div key={item.cat} className="card p-6">
              <h3 className="text-lg font-bold text-primary mb-2">{item.cat}</h3>
              <p className="text-text-secondary text-sm mb-2">{item.desc}</p>
              <p className="text-text-muted text-xs font-medium">{item.tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Navigating the Lobby */}
      <section className="section-padding bg-primary-50 max-w-full">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold gradient-text mb-6">Navigating the Rajluck Lobby</h2>
          <p className="text-text-secondary mb-8">
            The Rajluck lobby is the central hub you land on after logging in. Understanding its layout saves time and helps you access your favourite games faster.
          </p>
          <ol className="space-y-5">
            {[
              { step: "1", title: "Top Navigation Bar", desc: "Contains your account balance, notification bell, and profile icon. Tap the balance to access deposit and withdrawal options at any time." },
              { step: "2", title: "Category Filter Row", desc: "Horizontally scrollable tabs just below the banner. Tap any category to filter the game grid instantly — no page reload required." },
              { step: "3", title: "Featured Games Banner", desc: "Rotating banners showcase current promotions, new releases, and jackpot games. Tap the banner to go directly to the highlighted game or offer." },
              { step: "4", title: "Search Function", desc: "Use the magnifying glass icon to search by game title or provider. Partial name searches work — typing 'luck' surfaces all matching titles." },
              { step: "5", title: "Recently Played", desc: "A horizontal row below the main grid shows your last 10 played games, letting you quickly resume a session without searching." },
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

      {/* Understanding Rules */}
      <section className="section-padding max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold gradient-text mb-6">Understanding Game Rules Inside Rajluck</h2>
        <p className="text-text-secondary mb-6">
          Every game in Rajluck includes an embedded rules panel accessible via the information icon (ⓘ) in the game interface. Here is what you will find inside each rules panel:
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { label: "Paytable", desc: "Shows all symbol values, winning combinations, and multiplier tiers for slot-style games." },
            { label: "Return to Player (RTP)", desc: "The theoretical long-term payout percentage. Higher RTP indicates better average returns over many sessions." },
            { label: "Volatility Rating", desc: "Low = frequent small wins. High = infrequent but larger wins. Choose based on your bankroll and session goals." },
            { label: "Minimum Bet", desc: "The lowest wager accepted per round. Important for stretching your balance during exploration." },
            { label: "Maximum Win Cap", desc: "Some games cap total winnings per spin or session. Always check this before playing jackpot-adjacent titles." },
            { label: "Bonus Round Rules", desc: "Explains how bonus rounds are triggered, what they offer, and any restrictions that apply during bonus play." },
          ].map((item) => (
            <div key={item.label} className="card-static bg-primary-100 p-5 rounded-xl">
              <h4 className="font-bold text-text-primary mb-2">{item.label}</h4>
              <p className="text-text-muted text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tips for New Players */}
      <section className="section-padding bg-primary-100 max-w-full">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold gradient-text mb-6">Tips for New Rajluck Players</h2>
          <p className="text-text-secondary mb-8">Starting smart matters. These tips are drawn from common patterns among players who get the most out of their early Rajluck experience.</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { tip: "Start with Demo Mode", desc: "Many games offer a demo or practice mode. Use it to understand mechanics before wagering real funds." },
              { tip: "Set a Session Budget", desc: "Decide your maximum spend before opening the app. Stick to it regardless of outcomes during the session." },
              { tip: "Read the Bonus Terms First", desc: "Welcome bonuses have wagering requirements. Understanding these before claiming prevents disappointment during withdrawal." },
              { tip: "Try Multiple Categories", desc: "Do not limit yourself to one game type on day one. Sampling different categories helps you identify where you enjoy playing most." },
              { tip: "Use Smaller Bet Sizes Initially", desc: "Playing at minimum bet sizes extends your session time and lets you learn game mechanics without burning through your balance quickly." },
              { tip: "Check the Daily Missions", desc: "Rajluck offers daily missions that reward you for completing specific in-game tasks. Check these every login to earn bonus credits." },
            ].map((item) => (
              <div key={item.tip} className="card p-5">
                <h4 className="font-bold text-primary mb-2">{item.tip}</h4>
                <p className="text-text-secondary text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Game Selection Strategy */}
      <section className="section-padding max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold gradient-text mb-6">Game Selection Strategy</h2>
        <p className="text-text-secondary mb-6">
          Choosing the right game at the right time is one of the most underrated skills in Rajluck. The following framework helps you make smarter selections based on your current situation.
        </p>
        <div className="overflow-x-auto">
          <table className="info-table w-full text-left">
            <thead>
              <tr>
                <th className="p-3 bg-primary-100 font-semibold">Your Situation</th>
                <th className="p-3 bg-primary-100 font-semibold">Recommended Category</th>
                <th className="p-3 bg-primary-100 font-semibold">Why</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Short session (under 15 min)", "Instant Win / Slots", "Fast rounds mean more outcomes per minute"],
                ["Large starting balance", "Table Games / Live Dealer", "Strategy games reward patience and skill"],
                ["Fulfilling a bonus wager", "High-RTP Slots", "Faster bonus clearance with lower house edge"],
                ["Chasing a big win", "Jackpot Games", "Accumulating pools offer the largest single payouts"],
                ["Learning the platform", "Demo Slots", "Zero risk while building familiarity"],
              ].map(([sit, rec, why]) => (
                <tr key={sit} className="border-b">
                  <td className="p-3 text-text-secondary text-sm">{sit}</td>
                  <td className="p-3 text-primary font-medium text-sm">{rec}</td>
                  <td className="p-3 text-text-muted text-sm">{why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-primary-50 max-w-full">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold gradient-text mb-8">Gameplay FAQ</h2>
          <div className="space-y-6">
            {[
              { q: "Do I need experience to play Rajluck Game?", a: "No experience is required. Rajluck is designed for players of all skill levels. Beginners can start with slot games and instant win titles, which require no prior knowledge, while experienced players can explore table games and live dealer rooms." },
              { q: "Can I play more than one game at a time?", a: "Rajluck supports multi-game play on tablets and larger screens. On smaller phones, we recommend focusing on one game at a time for the clearest interface." },
              { q: "What happens if I accidentally close a game mid-round?", a: "Active rounds are resolved server-side, so the outcome is already determined. When you reopen the game, you will see the result of the round that was in progress." },
              { q: "How do I report a game error or unfair outcome?", a: "Tap the support icon inside the game interface or go to Help Center from the main menu. Provide the game name, session timestamp, and a description of the issue." },
              { q: "Are game results fair and random?", a: "Yes. All Rajluck games use certified Random Number Generators (RNG) audited by independent testing labs. The RTP and volatility values displayed in each game's rules panel reflect verified statistical properties." },
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
        <h2 className="text-3xl font-bold text-black mb-4">Jump Into the Action</h2>
        <p className="text-black/70 mb-8 max-w-xl mx-auto">You now know the lobby, the categories, and the rules. It is time to put that knowledge to work. Register and start playing Rajluck Game today.</p>
        <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta inline-block text-lg font-bold px-10 py-4 rounded-full shadow-xl">
          Play Rajluck Now
        </a>
      </section>

      {/* Internal Links */}
      <section className="section-padding max-w-4xl mx-auto">
        <h2 className="text-xl font-bold text-text-primary mb-4">More Rajluck Resources</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/rajluck-game-online" className="btn-outline px-4 py-2 rounded-full text-sm">Internet &amp; Connectivity</Link>
          <Link href="/rajluck-game-bonus" className="btn-outline px-4 py-2 rounded-full text-sm">Bonus System</Link>
          <Link href="/rajluck-game-rewards" className="btn-outline px-4 py-2 rounded-full text-sm">Rewards Program</Link>
          <Link href="/rajluck-game-free" className="btn-outline px-4 py-2 rounded-full text-sm">Is It Free?</Link>
          <Link href="/rajluck-game-install" className="btn-outline px-4 py-2 rounded-full text-sm">Installation Guide</Link>
          <Link href="/rajluck-download" className="btn-outline px-4 py-2 rounded-full text-sm">Download Guide</Link>
        </div>
      </section>
    </main>
  );
}
