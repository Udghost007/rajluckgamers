import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rajluck Game App – Download the Official App for Android 2026",
  description: "Rajluck Game App — the official mobile application for Android. Download Rajluck Game App, explore features, register, login, and enjoy gaming. Also known as Rajluck App, Raj Luck App, Rajluck Game.",
  keywords: ["Rajluck Game App", "Rajluck App", "Rajluck Game application", "Rajluck mobile app", "Rajluck Game Android app", "Rajluck Game", "Rajluck", "Raj Luck App", "Raj Luck Game App", "RajluckGamers"],
  openGraph: { title: "Rajluck Game App – Official App for Android 2026", description: "Download Rajluck Game App for Android at rajluckgamers.com.", url: "https://rajluckgamers.com/rajluck-game-app", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Rajluck Game App" }] },
  twitter: { card: "summary_large_image", title: "Rajluck Game App", images: ["/og-image.png"] },
  alternates: { canonical: "https://rajluckgamers.com/rajluck-game-app" },
};

const CTA_LINK = "https://share-rxapq9cajg.rajluck.co/web/share/index.html?ic=AA0DL7ND&ts=1782835740&m=2&lang=en&id=1";

export default function Page() {
  return (
    <main>
      {/* Hero */}
      <section className="hero-gradient section-padding text-center">
        <Image src="/logo.webp" alt="Rajluck Game App" width={160} height={160} className="w-[100px] sm:w-[180px] mx-auto mb-6 drop-shadow-2xl animate-fade-in" priority />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-black mb-4 animate-slide-up">
          Rajluck Game App<br />Interface &amp; Design Guide
        </h1>
        <p className="text-lg text-black/80 max-w-2xl mx-auto mb-8">
          Get to know every corner of the Rajluck Game app — from the home screen navigation to the settings panel, notification centre, and theme customisation options. Master the UI and enjoy a faster, smoother gaming experience.
        </p>
        <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta text-lg px-8 py-4 inline-block">
          Download Rajluck Game App
        </a>
      </section>

      {/* Navigation Structure */}
      <section className="section-padding bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4 gradient-text">Navigation Structure Overview</h2>
          <p className="text-text-secondary mb-6">
            The Rajluck Game app is built around a bottom navigation bar with five primary sections. Each section is designed to minimise taps and get you to your destination in 2 clicks or fewer.
          </p>
          <div className="grid sm:grid-cols-5 gap-3">
            {[
              { icon: "🏠", label: "Home", desc: "Live lobby with featured games and daily promotions" },
              { icon: "🎮", label: "Games", desc: "Full catalogue organised by category and popularity" },
              { icon: "💰", label: "Wallet", desc: "Deposit, withdraw, and transaction history" },
              { icon: "🎁", label: "Bonuses", desc: "Active offers, missions, and referral rewards" },
              { icon: "👤", label: "Profile", desc: "Account settings, security, and support" },
            ].map(({ icon, label, desc }) => (
              <div key={label} className="card text-center">
                <div className="text-3xl mb-2">{icon}</div>
                <h3 className="font-bold text-text-primary mb-1 text-sm">{label}</h3>
                <p className="text-text-muted text-xs">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Home Screen */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Home Screen Layout</h2>
          <p className="text-text-secondary mb-6">
            The home screen greets you with a scrollable banner carousel showcasing active promotions. Below the banners you'll find quick-access game tiles arranged by your most recently played titles. A live ticker at the top shows real-time winner announcements from across the platform.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="card">
              <h3 className="font-bold text-primary mb-3">Top Bar Elements</h3>
              <ul className="text-text-secondary text-sm space-y-2">
                <li>• Rajluck logo (tap to return home from any screen)</li>
                <li>• Live winner ticker scrolling right-to-left</li>
                <li>• Notification bell with unread badge count</li>
                <li>• Balance display (tap to expand wallet)</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="font-bold text-primary mb-3">Content Sections</h3>
              <ul className="text-text-secondary text-sm space-y-2">
                <li>• Promotional banner carousel (auto-cycles every 5s)</li>
                <li>• Continue Playing — your recent 6 games</li>
                <li>• Hot Games — platform-wide trending titles</li>
                <li>• New Arrivals — games added this month</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Menu System */}
      <section className="section-padding bg-primary-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Menu System Deep Dive</h2>
          <p className="text-text-secondary mb-6">Tap the hamburger icon (☰) in the top-left to open the slide-out side menu. This menu provides access to less frequently used but important features:</p>
          <div className="info-table overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-primary-100">
                  <th className="px-4 py-3 font-semibold text-text-primary">Menu Item</th>
                  <th className="px-4 py-3 font-semibold text-text-primary">What It Does</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["My Account", "Full profile page with personal details and verification status"],
                  ["Transaction History", "Complete record of deposits, withdrawals, and game credits"],
                  ["Referral Programme", "Your unique referral link, stats, and earnings from invites"],
                  ["VIP Status", "Current tier, points progress, and next tier requirements"],
                  ["Help & Support", "Live chat, FAQ, and ticket submission portal"],
                  ["App Version Info", "Current version number and link to check for updates"],
                ].map(([item, desc]) => (
                  <tr key={item} className="border-b even:bg-primary-50">
                    <td className="px-4 py-3 font-medium text-text-primary">{item}</td>
                    <td className="px-4 py-3 text-text-secondary">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Settings Panel */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Settings Panel Breakdown</h2>
          <p className="text-text-secondary mb-6">
            Access the full settings panel via <strong>Profile → Settings</strong>. It is divided into four sub-sections:
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { section: "Account Settings", items: ["Change display name", "Update email address", "Manage linked devices", "Change password"] },
              { section: "Security Settings", items: ["Toggle 2-step verification", "Set/change transaction PIN", "View active login sessions", "Download account data"] },
              { section: "App Preferences", items: ["Language selection (12 languages)", "Dark / Light / Auto theme", "Font size adjustment", "Reduce motion toggle"] },
              { section: "Notification Settings", items: ["Game result alerts", "Bonus expiry reminders", "Promotional offers toggle", "Sound and vibration controls"] },
            ].map(({ section, items }) => (
              <div key={section} className="card">
                <h3 className="font-bold text-primary mb-3">{section}</h3>
                <ul className="text-text-secondary text-sm space-y-1">
                  {items.map(i => <li key={i}>• {i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notification System */}
      <section className="section-padding bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Understanding the Notification System</h2>
          <p className="text-text-secondary mb-6">
            Rajluck Game's notification system keeps you informed without being intrusive. Notifications are split into three priority tiers. High-priority alerts (such as withdrawal approvals and security events) always display — even during Do Not Disturb mode on Android. Medium-priority alerts cover game outcomes and bonus unlocks. Low-priority alerts are promotional and can be muted entirely.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { tier: "High Priority", colour: "text-red-600", examples: "Account security alerts, withdrawal confirmations, OTP codes" },
              { tier: "Medium Priority", colour: "text-yellow-600", examples: "Game results, bonus credited, mission completed, level-up" },
              { tier: "Low Priority", colour: "text-green-600", examples: "Weekly promotions, new game launches, seasonal offers" },
            ].map(({ tier, colour, examples }) => (
              <div key={tier} className="card-static p-4">
                <h3 className={`font-semibold mb-2 ${colour}`}>{tier}</h3>
                <p className="text-text-secondary text-sm">{examples}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Theme Options */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Theme &amp; Display Options</h2>
          <p className="text-text-secondary mb-6">Personalise your Rajluck Game experience with built-in theme options found under Settings → App Preferences → Theme:</p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { theme: "Light Mode", desc: "Default theme with white backgrounds and vibrant accent colours. Best for daytime use in well-lit environments." },
              { theme: "Dark Mode", desc: "Deep charcoal backgrounds reduce eye strain in low-light settings and extend battery life on AMOLED screens." },
              { theme: "Auto (System)", desc: "Follows your Android system theme setting — switches automatically at sunrise and sunset based on your time zone." },
            ].map(({ theme, desc }) => (
              <div key={theme} className="card text-center">
                <h3 className="font-bold text-text-primary mb-2">{theme}</h3>
                <p className="text-text-secondary text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-primary-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {[
              { q: "How do I switch between Light and Dark mode quickly?", a: "Long-press the profile icon in the navigation bar for a quick-toggle shortcut. Alternatively go to Settings → App Preferences → Theme." },
              { q: "Can I customise which games appear on my home screen?", a: "Yes. Tap the pencil (edit) icon on the 'Continue Playing' section to pin specific games to the top of your home screen for quick access." },
              { q: "Why are some menu items greyed out?", a: "Certain features like VIP rewards and advanced wallet options unlock after your account reaches specific activity thresholds. Hover over a greyed item to see the unlock requirement." },
              { q: "Does the app support split-screen multitasking on Android?", a: "Rajluck Game supports Android split-screen mode on devices running Android 10 and above. The UI adapts to the reduced viewport automatically." },
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
        <h2 className="text-3xl font-bold text-text-primary mb-4">Experience the Interface Yourself</h2>
        <p className="text-text-secondary mb-6 max-w-xl mx-auto">Download the Rajluck Game app and explore every screen described in this guide — all for free.</p>
        <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta inline-block px-8 py-4 text-lg">
          Download Rajluck Game App
        </a>
      </section>

      {/* Internal Links */}
      <section className="section-padding bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-text-primary mb-4">Continue Learning</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/rajluck-game-2026" className="btn-outline text-sm px-4 py-2">What's New in 2026</Link>
            <Link href="/rajluck-game-android" className="btn-outline text-sm px-4 py-2">Android Optimization</Link>
            <Link href="/rajluck-game-login" className="btn-outline text-sm px-4 py-2">Login Security</Link>
            <Link href="/rajluck-game-register" className="btn-outline text-sm px-4 py-2">Create Account</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
