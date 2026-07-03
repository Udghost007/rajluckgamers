import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "RajluckGamers – Official Guide to Rajluck Game APK Download 2026",
  description:
    "RajluckGamers is your official guide to Rajluck Game. Download the latest Rajluck APK, learn how to register and login, explore features and promotions. Also known as Rajluck Gamers, Raj Luck Gamers, Rajluck Game, RajluckGame. Complete resource at rajluckgamers.com.",
  keywords: [
    "RajluckGamers", "rajluckgamers", "Rajluck Gamers", "Raj Luck Gamers",
    "Rajluck Game", "Rajluck", "RajluckGame", "Rajluck APK", "Rajluck App",
    "Raj Luck", "Raj Luck Game", "rajluckgamers.com",
  ],
  openGraph: {
    title: "RajluckGamers – Official Rajluck Game Guide & APK Download 2026",
    description: "RajluckGamers: your complete guide to Rajluck Game. Download APK, register, login at rajluckgamers.com.",
    url: "https://rajluckgamers.com/rajluckgamers",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "RajluckGamers" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RajluckGamers – Rajluck Game Guide",
    description: "Your complete guide to Rajluck Game APK download, register, and login. rajluckgamers.com.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://rajluckgamers.com/rajluckgamers" },
};

const CTA_LINK = "https://share-rxapq9cajg.rajluck.co/web/share/index.html?ic=AA64CBGV&ts=1783054980&m=2&lang=en&id=1";

export default function RajluckGamersPage() {
  return (
    <main className="min-h-screen bg-surface">
      {/* Hero */}
      <section className="hero-gradient section-padding text-center">
        <div className="max-w-4xl mx-auto">
          <Image
            src="/logo.webp"
            alt="RajluckGamers Community"
            width={160}
            height={160}
            className="w-[100px] sm:w-[180px] mx-auto mb-6 drop-shadow-2xl animate-fade-in"
            priority
          />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-black mb-4 animate-fade-in">
            <span className="gradient-text">RajluckGamers</span> Community Hub
          </h1>
          <p className="text-lg sm:text-xl text-black/80 mb-8 max-w-2xl mx-auto animate-slide-up">
            RajluckGamers is more than just players — it is a thriving community of enthusiasts who
            share strategies, celebrate wins, support newcomers, and help each other get the most
            out of the Rajluck platform every single day.
          </p>
          <a
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta inline-block text-lg px-10 py-4 rounded-2xl font-bold shadow-xl animate-slide-up"
          >
            Join the RajluckGamers Community
          </a>
        </div>
      </section>

      {/* Community Overview */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-6 text-center">
            Who Are the RajluckGamers?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-text-secondary mb-4">
                The RajluckGamers community spans players from Thailand, Malaysia, the Philippines,
                Indonesia, and beyond. Members range from casual players who log in for a daily
                spin to serious users who study paytables, track bonus cycles, and participate in
                every tournament the platform hosts.
              </p>
              <p className="text-text-secondary mb-4">
                What binds the community is a shared enthusiasm for fair, transparent gaming and a
                genuine desire to see other members succeed. Veteran players regularly post guides
                and tips. Newcomers ask questions and receive thoughtful answers within minutes.
              </p>
              <p className="text-text-secondary">
                The community has become a trusted feedback channel for the Rajluck development
                team — many of the platform's most-loved features were requested directly by
                RajluckGamers members.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "500K+", label: "Active Players" },
                { stat: "12+", label: "Countries Represented" },
                { stat: "4.8★", label: "Average User Rating" },
                { stat: "24/7", label: "Community Activity" },
              ].map((s) => (
                <div key={s.label} className="card p-5 text-center bg-primary-50">
                  <div className="text-3xl font-extrabold text-primary mb-1">{s.stat}</div>
                  <div className="text-text-secondary text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Tips */}
      <section className="section-padding bg-primary-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-2 text-center">
            Top Tips Shared by the Community
          </h2>
          <p className="text-text-muted text-center mb-10">Real advice from experienced RajluckGamers</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                tip: "Always Activate the Daily Bonus First",
                detail: "Log in and claim your daily bonus before playing anything else. The bonus refreshes at midnight server time — don't let it expire unclaimed.",
              },
              {
                tip: "Use Demo Mode to Test New Games",
                detail: "Before wagering real money on a slot you haven't played, run 20–30 spins in demo mode to understand the bonus mechanics and volatility.",
              },
              {
                tip: "Set a Stop-Loss Before Each Session",
                detail: "Decide your maximum loss for the session before you open the app. When you hit it, close the game. This is the single most cited habit of long-term players.",
              },
              {
                tip: "Watch the Promotions Tab on Fridays",
                detail: "Weekend bonus drops typically appear on Friday afternoons. RajluckGamers who check at the right time get first access before limited-claim offers run out.",
              },
              {
                tip: "Refer Friends to Stack Rewards",
                detail: "The referral program gives you credit for every active deposit your referred friends make. Referring five active players can noticeably boost your monthly balance.",
              },
              {
                tip: "Keep One Payment Method Verified",
                detail: "Having a fully verified payment method speeds up withdrawal requests dramatically. Players with unverified methods often wait 2–3x longer for payouts.",
              },
            ].map((t) => (
              <div key={t.tip} className="card p-5">
                <h3 className="font-bold text-text-primary mb-2 text-sm">{t.tip}</h3>
                <p className="text-text-secondary text-sm">{t.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
            Best Practices for Getting the Most from Rajluck
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Build a Routine",
                body: "The most consistent earners in the RajluckGamers community are those who play on a schedule rather than impulsively. A 30-minute daily session beats a 5-hour binge every weekend in terms of sustained returns and bonus accumulation.",
              },
              {
                title: "Focus Your Game Choices",
                body: "Spreading bets across 20 different games dilutes your ability to understand any of them. Pick 3–5 games you enjoy and learn their mechanics deeply — when to increase bets, when to drop to minimum, and how the bonus features trigger.",
              },
              {
                title: "Track Your Results",
                body: "Use the Transaction History in your wallet to review weekly performance. Many players are surprised to discover their actual wins and losses differ significantly from what they remember feeling during sessions.",
              },
              {
                title: "Engage with the Community",
                body: "Players who share results and ask questions in community channels consistently report better experiences. Other players share bonus codes, flag expired promotions, and warn about games in bad cycles.",
              },
            ].map((p) => (
              <div key={p.title} className="card-static p-6 border-l-4 border-primary">
                <h3 className="font-bold text-text-primary text-lg mb-2">{p.title}</h3>
                <p className="text-text-secondary text-sm">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="section-padding bg-primary-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
            RajluckGamers Community Guidelines
          </h2>
          <p className="text-text-secondary text-center mb-8 max-w-2xl mx-auto">
            The community thrives because members treat each other with respect. These guidelines
            keep discussions helpful and the atmosphere welcoming for everyone.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { rule: "Share Genuine Experiences", detail: "Post about real gameplay experiences — wins, losses, and strategies. Don't exaggerate results or post fabricated screenshots." },
              { rule: "No Spam or Self-Promotion", detail: "Unsolicited referral links and promotional content from third parties are not welcome. Use the official Rajluck referral program for sharing." },
              { rule: "Help Newcomers", detail: "Remember that every experienced player was once a beginner. Welcome new members warmly and answer basic questions without condescension." },
              { rule: "Respect Responsible Gaming", detail: "If a member expresses concern about their gambling habits, respond with empathy and direct them to Rajluck's responsible gaming tools rather than encouragement to keep playing." },
            ].map((g) => (
              <div key={g.rule} className="card p-5">
                <h3 className="font-semibold text-primary mb-2">{g.rule}</h3>
                <p className="text-text-secondary text-sm">{g.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">Community FAQ</h2>
          <div className="space-y-5">
            {[
              {
                q: "How do I join the RajluckGamers community?",
                a: "Create a Rajluck account via the link on this page. Once you're registered and active, you're automatically part of the RajluckGamers player base. Community channels are accessible through the app's social section.",
              },
              {
                q: "Are there community tournaments on Rajluck?",
                a: "Yes. Rajluck hosts regular slot tournaments and leaderboard competitions where top players earn cash prizes, bonus credits, and VIP upgrades. Watch the Promotions tab for upcoming events.",
              },
              {
                q: "Can I share strategies without violating Rajluck's terms?",
                a: "Absolutely. Sharing gameplay strategies, bonus tips, and game recommendations is encouraged. What is not allowed is account sharing, coordinated bonus abuse, or third-party tool usage.",
              },
              {
                q: "What is the best way to report a problem with a game session?",
                a: "Use the in-app support chat immediately after the issue occurs. Provide the game name, approximate time, and a brief description. The support team can pull session logs to investigate within hours.",
              },
              {
                q: "Does the community have a dedicated channel for beginners?",
                a: "The RajluckGamers social channels include a beginner-friendly section where new players can ask any question without judgment. Experienced members volunteer time there regularly.",
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
          <h2 className="text-2xl font-bold text-text-primary mb-6">More from RajluckGamers</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/rajluck" className="btn-outline px-6 py-3 rounded-xl font-semibold">What is Rajluck?</Link>
            <Link href="/raj-luck" className="btn-outline px-6 py-3 rounded-xl font-semibold">Platform Overview</Link>
            <Link href="/raj-luck-game" className="btn-outline px-6 py-3 rounded-xl font-semibold">Beginner's Guide</Link>
            <Link href="/rajluckgame" className="btn-outline px-6 py-3 rounded-xl font-semibold">Platform Comparison</Link>
            <Link href="/raj-luck-gamers" className="btn-outline px-6 py-3 rounded-xl font-semibold">Promotions & Events</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
