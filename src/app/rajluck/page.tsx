import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rajluck – Download APK, Login, Register & Play on Android 2026",
  description:
    "Rajluck is a top mobile gaming platform for Android. Download the latest Rajluck APK, register your Rajluck account, login securely, and explore features. Also known as Rajluck Game, RajluckGame, Raj Luck, RajluckGamers. Visit rajluckgamers.com for the complete guide.",
  keywords: [
    "Rajluck", "Rajluck Game", "RajluckGame", "Rajluck APK", "Rajluck App",
    "Rajluck download", "Rajluck login", "Rajluck register",
    "Raj Luck", "Raj Luck Game", "Raj Luck Gamers", "RajluckGamers", "rajluckgamers",
  ],
  openGraph: {
    title: "Rajluck – Download APK, Login, Register & Play on Android 2026",
    description: "Rajluck is a mobile gaming platform for Android. Download Rajluck APK, register, login, and explore features at rajluckgamers.com.",
    url: "https://rajluckgamers.com/rajluck",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Rajluck" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajluck – Download APK, Login & Register",
    description: "Download Rajluck APK, register, login, and play on Android. Complete guide at rajluckgamers.com.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://rajluckgamers.com/rajluck" },
};

const CTA_LINK = "https://share-rxapq9cajg.rajluck.co/web/share/index.html?ic=AA0DL7ND&ts=1782835740&m=2&lang=en&id=1";

export default function RajluckPage() {
  return (
    <main className="min-h-screen bg-surface">
      {/* Hero */}
      <section className="hero-gradient section-padding text-center">
        <div className="max-w-4xl mx-auto">
          <Image
            src="/logo.webp"
            alt="Rajluck Official Logo"
            width={160}
            height={160}
            className="w-[100px] sm:w-[180px] mx-auto mb-6 drop-shadow-2xl animate-fade-in"
            priority
          />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-black mb-4 animate-fade-in">
            What is <span className="gradient-text">Rajluck</span>?
          </h1>
          <p className="text-lg sm:text-xl text-black/80 mb-8 max-w-2xl mx-auto animate-slide-up">
            Rajluck is a next-generation mobile gaming platform trusted by hundreds of thousands of
            players across Southeast Asia. Built for speed, security, and non-stop entertainment,
            Rajluck delivers a world-class experience right from your Android device.
          </p>
          <a
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta inline-block text-lg px-10 py-4 rounded-2xl font-bold shadow-xl animate-slide-up"
          >
            Join Rajluck Now — It's Free
          </a>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-6 text-center">
            The Rajluck Story
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-text-secondary mb-4">
                Rajluck was founded with a single mission: make premium gaming accessible to everyone
                on mobile. Unlike desktop-heavy competitors, the team engineered Rajluck from the
                ground up as a mobile-first platform — lightweight, responsive, and engineered to
                run flawlessly even on mid-range Android handsets.
              </p>
              <p className="text-text-secondary mb-4">
                Since launch, Rajluck has expanded its game library, upgraded its security
                infrastructure, and launched a loyalty rewards engine that keeps players engaged
                every single day. The platform earns trust through transparency — fair odds, instant
                payouts, and licensed operations.
              </p>
              <p className="text-text-secondary">
                Today, Rajluck stands as one of the most recognized gaming brands in the region,
                with a dedicated community known as <strong>RajluckGamers</strong> sharing tips,
                results, and strategies daily.
              </p>
            </div>
            <div className="card p-6 bg-primary-50">
              <h3 className="text-xl font-bold text-primary mb-4">Platform at a Glance</h3>
              <table className="info-table w-full text-sm">
                <tbody>
                  <tr><td className="font-semibold text-text-primary">Founded</td><td className="text-text-secondary">2021</td></tr>
                  <tr><td className="font-semibold text-text-primary">Platform</td><td className="text-text-secondary">Android (APK) & Mobile Web</td></tr>
                  <tr><td className="font-semibold text-text-primary">Languages</td><td className="text-text-secondary">English, Thai, Malay, more</td></tr>
                  <tr><td className="font-semibold text-text-primary">Games</td><td className="text-text-secondary">Slots, Live Tables, Lottery, Sports</td></tr>
                  <tr><td className="font-semibold text-text-primary">Deposits</td><td className="text-text-secondary">Instant via e-wallet & bank</td></tr>
                  <tr><td className="font-semibold text-text-primary">Withdrawals</td><td className="text-text-secondary">Processed within minutes</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Why Users Love Rajluck */}
      <section className="section-padding bg-primary-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-2 text-center">
            Why Players Choose Rajluck
          </h2>
          <p className="text-text-muted text-center mb-10">
            Real reasons behind Rajluck's loyal fanbase
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🚀",
                title: "Instant APK Access",
                desc: "Skip the app store. Download the Rajluck APK directly and be playing within minutes — no lengthy approvals, no region locks.",
              },
              {
                icon: "🔒",
                title: "Bank-Grade Security",
                desc: "All accounts are protected with 256-bit SSL encryption, two-factor authentication support, and round-the-clock fraud monitoring.",
              },
              {
                icon: "🎁",
                title: "Daily Bonus Engine",
                desc: "Log in every day to unlock escalating bonuses. The Rajluck daily reward system rewards consistency and long-term loyalty.",
              },
              {
                icon: "📱",
                title: "Optimized for Android",
                desc: "The Rajluck app is tuned for Android from the screen layout to battery usage — smooth animations, zero lag, zero crashes.",
              },
              {
                icon: "💬",
                title: "24/7 Live Support",
                desc: "A real human support team is available around the clock via live chat to resolve any issue fast.",
              },
              {
                icon: "🌏",
                title: "Multi-Language UI",
                desc: "Play in your language. Rajluck supports multiple Southeast Asian languages so the experience always feels local.",
              },
            ].map((item) => (
              <div key={item.title} className="card p-6">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-text-primary mb-2">{item.title}</h3>
                <p className="text-text-secondary text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Quotes */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-10 text-center">
            What the Rajluck Community Says
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "I've tried dozens of gaming apps and Rajluck is the only one that pays out instantly. No waiting days for withdrawals.",
                name: "Ahmad R.",
                tag: "Kuala Lumpur",
              },
              {
                quote: "The daily bonus keeps me coming back. I logged in 30 days straight and the rewards kept stacking up nicely.",
                name: "Nopporn T.",
                tag: "Bangkok",
              },
              {
                quote: "Setting up my account took less than 3 minutes. The registration form is simple and verification is painless.",
                name: "Maria L.",
                tag: "Manila",
              },
            ].map((q) => (
              <div key={q.name} className="card-static p-6 border-l-4 border-primary">
                <p className="text-text-secondary italic mb-4 text-sm">"{q.quote}"</p>
                <p className="font-bold text-text-primary text-sm">{q.name}</p>
                <p className="text-text-muted text-xs">{q.tag}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="section-padding bg-primary-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-10">
            Start Playing Rajluck in 3 Steps
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Download the APK", desc: "Tap the button below to get the official Rajluck APK. Installation takes under a minute on any Android device." },
              { step: "2", title: "Create Your Account", desc: "Fill in your username, email, and password. Verification is quick — you'll receive a confirmation code instantly." },
              { step: "3", title: "Claim Your Welcome Bonus", desc: "New accounts receive a welcome bonus automatically. Top up to activate the bonus and start exploring the full game library." },
            ].map((s) => (
              <div key={s.step} className="flex flex-col items-center">
                <div className="step-number mb-4">{s.step}</div>
                <h3 className="font-bold text-text-primary mb-2">{s.title}</h3>
                <p className="text-text-secondary text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
          <a
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta inline-block mt-10 text-lg px-10 py-4 rounded-2xl font-bold shadow-xl"
          >
            Download Rajluck APK
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
            Rajluck FAQ
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Is Rajluck free to join?",
                a: "Yes. Creating a Rajluck account is completely free. There are no subscription fees or hidden charges to register and explore the platform.",
              },
              {
                q: "Is the Rajluck APK safe to install?",
                a: "Absolutely. The official Rajluck APK is digitally signed and scanned for malware before every release. Always download from rajluckgamers.com or the official link to ensure you have the genuine file.",
              },
              {
                q: "How fast are Rajluck withdrawals?",
                a: "Most withdrawal requests are processed within 5–15 minutes. The platform uses automated payout systems connected directly to major e-wallets and local bank transfer networks.",
              },
              {
                q: "Can I play Rajluck on iOS?",
                a: "Rajluck is primarily optimized for Android. iOS users can access the platform via the mobile browser version at rajluck.co, though the full APK experience is Android-exclusive.",
              },
              {
                q: "What should I do if I forget my Rajluck password?",
                a: "Tap 'Forgot Password' on the login screen. Enter the email address linked to your account and follow the reset instructions sent to your inbox. The process takes under 2 minutes.",
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
          <h2 className="text-2xl font-bold text-text-primary mb-6">Explore More Rajluck Guides</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/raj-luck" className="btn-outline px-6 py-3 rounded-xl font-semibold">Raj Luck Overview</Link>
            <Link href="/raj-luck-game" className="btn-outline px-6 py-3 rounded-xl font-semibold">Beginner's Guide</Link>
            <Link href="/rajluckgame" className="btn-outline px-6 py-3 rounded-xl font-semibold">RajluckGame vs Competitors</Link>
            <Link href="/rajluckgamers" className="btn-outline px-6 py-3 rounded-xl font-semibold">Community Hub</Link>
            <Link href="/raj-luck-gamers" className="btn-outline px-6 py-3 rounded-xl font-semibold">Promotions & Events</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
