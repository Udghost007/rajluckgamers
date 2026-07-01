import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rajluck Game Online – Play Rajluck Online on Android 2026",
  description: "Rajluck Game Online — play Rajluck Game on your Android device. Download the app, register, login, and enjoy online gaming. rajluck game online, rajluck online, play rajluck.",
  keywords: ["Rajluck Game Online", "Rajluck Online", "play Rajluck Game", "Rajluck Game play online", "Rajluck Game", "Rajluck", "Raj Luck Game Online", "RajluckGamers"],
  openGraph: { title: "Rajluck Game Online – Play on Android 2026", description: "Play Rajluck Game online. Guide at rajluckgamers.com.", url: "https://rajluckgamers.com/rajluck-game-online", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Rajluck Game Online" }] },
  twitter: { card: "summary_large_image", title: "Rajluck Game Online", images: ["/og-image.png"] },
  alternates: { canonical: "https://rajluckgamers.com/rajluck-game-online" },
};

const CTA_LINK = "https://share-rxapq9cajg.rajluck.co/web/share/index.html?ic=AA0DL7ND&ts=1782835740&m=2&lang=en&id=1";

export default function Page() {
  return (
    <main className="min-h-screen bg-surface text-text-primary">
      {/* Hero */}
      <section className="hero-gradient section-padding text-center">
        <Image src="/logo.webp" alt="Rajluck Game Online" width={160} height={160} className="w-[100px] sm:w-[180px] mx-auto mb-6 drop-shadow-2xl animate-fade-in" priority />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-black mb-4 animate-slide-up">Rajluck Game Online</h1>
        <p className="text-xl text-black/80 mb-3 font-medium">Internet Requirements &amp; Connectivity Guide</p>
        <p className="text-base text-black/70 max-w-2xl mx-auto mb-8">
          Playing Rajluck Game online is smooth and enjoyable — but only when your internet connection is up to par. This guide covers everything from minimum speed requirements to troubleshooting lag spikes, so you never miss a moment of action.
        </p>
        <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta inline-block text-lg font-bold px-10 py-4 rounded-full shadow-xl animate-fade-in">
          Play Rajluck Online Now
        </a>
      </section>

      {/* Minimum Speed Requirements */}
      <section className="section-padding max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold gradient-text mb-6">Minimum Internet Speed Requirements</h2>
        <p className="text-text-secondary mb-6">
          Rajluck Game Online is optimized for low-bandwidth connections, making it accessible even in areas with limited infrastructure. However, understanding the speed thresholds helps you choose the right network for the best experience.
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="info-table w-full text-left">
            <thead>
              <tr>
                <th className="p-3 bg-primary-100 text-text-primary font-semibold">Experience Level</th>
                <th className="p-3 bg-primary-100 text-text-primary font-semibold">Min Download Speed</th>
                <th className="p-3 bg-primary-100 text-text-primary font-semibold">Min Upload Speed</th>
                <th className="p-3 bg-primary-100 text-text-primary font-semibold">Recommended Latency</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 text-text-secondary">Basic Play</td>
                <td className="p-3 text-text-secondary">1 Mbps</td>
                <td className="p-3 text-text-secondary">512 Kbps</td>
                <td className="p-3 text-text-secondary">&lt; 200 ms</td>
              </tr>
              <tr className="border-b bg-primary-50">
                <td className="p-3 text-text-secondary">Smooth Play</td>
                <td className="p-3 text-text-secondary">5 Mbps</td>
                <td className="p-3 text-text-secondary">1 Mbps</td>
                <td className="p-3 text-text-secondary">&lt; 100 ms</td>
              </tr>
              <tr>
                <td className="p-3 text-text-secondary">Optimal Play</td>
                <td className="p-3 text-text-secondary">10+ Mbps</td>
                <td className="p-3 text-text-secondary">2 Mbps</td>
                <td className="p-3 text-text-secondary">&lt; 50 ms</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text-muted text-sm">
          Note: These values represent per-device requirements. If multiple users share the same connection, multiply accordingly.
        </p>
      </section>

      {/* WiFi vs Mobile Data */}
      <section className="section-padding bg-primary-50 max-w-full">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold gradient-text mb-6">WiFi vs 4G/5G — Which Is Better for Rajluck?</h2>
          <p className="text-text-secondary mb-8">
            Both WiFi and mobile data can deliver excellent Rajluck gameplay, but each has distinct strengths depending on your situation.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="text-xl font-bold text-primary mb-3">WiFi Networks</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>✓ Typically lower latency on stable home networks</li>
                <li>✓ Unlimited data — no usage caps during long sessions</li>
                <li>✓ More consistent bandwidth sharing at home</li>
                <li>✗ Signal drops if far from router</li>
                <li>✗ Public WiFi may have security risks</li>
                <li>✗ Interference from walls and appliances</li>
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-bold text-primary mb-3">4G / 5G Mobile Data</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>✓ Works anywhere with cellular coverage</li>
                <li>✓ 5G offers ultra-low latency for live gaming</li>
                <li>✓ No interference from household devices</li>
                <li>✗ Data caps may limit session length</li>
                <li>✗ Signal varies based on location and tower load</li>
                <li>✗ 4G may throttle during peak hours</li>
              </ul>
            </div>
          </div>
          <p className="text-text-muted text-sm mt-6">
            Our recommendation: use a stable home WiFi for extended sessions and 5G when playing on the go.
          </p>
        </div>
      </section>

      {/* Data Saving Mode */}
      <section className="section-padding max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold gradient-text mb-6">Data Saving Mode in Rajluck Game</h2>
        <p className="text-text-secondary mb-6">
          Rajluck Game includes a built-in Data Saving Mode that reduces bandwidth consumption by up to 60% without noticeably impacting gameplay quality. This feature is especially useful when playing on a limited mobile data plan.
        </p>
        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          {[
            { title: "Reduced Image Quality", desc: "Non-critical graphics are rendered at a lower resolution to cut data usage while keeping gameplay visuals crisp." },
            { title: "Compressed Game Data", desc: "Game state data is compressed before transmission, reducing payload size on every server request." },
            { title: "Smart Preloading", desc: "Only essential assets are preloaded; background assets load on-demand when you navigate to them." },
          ].map((item) => (
            <div key={item.title} className="card-static p-5 rounded-xl bg-primary-50">
              <h4 className="font-bold text-text-primary mb-2">{item.title}</h4>
              <p className="text-text-muted text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-text-secondary">
          To enable Data Saving Mode, go to <strong>Settings → Network → Data Saving</strong> inside the Rajluck app and toggle it on.
        </p>
      </section>

      {/* Offline Capabilities */}
      <section className="section-padding bg-primary-100 max-w-full">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold gradient-text mb-4">Offline Capabilities — What Works Without Internet?</h2>
          <p className="text-text-secondary mb-6">
            Rajluck Game is primarily an online experience, but there are a handful of features accessible offline. Knowing these limits helps you plan your sessions when connectivity is unavailable.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="card p-5">
              <h3 className="font-bold text-green-700 mb-3">Available Offline</h3>
              <ul className="text-text-secondary text-sm space-y-1">
                <li>• Browsing your account profile</li>
                <li>• Viewing previously loaded game history</li>
                <li>• Reading in-app tutorials and guides</li>
                <li>• Viewing cached bonus information</li>
              </ul>
            </div>
            <div className="card p-5">
              <h3 className="font-bold text-red-700 mb-3">Requires Internet</h3>
              <ul className="text-text-secondary text-sm space-y-1">
                <li>• All live gameplay sessions</li>
                <li>• Depositing and withdrawing funds</li>
                <li>• Claiming bonuses and rewards</li>
                <li>• Live customer support chat</li>
                <li>• Account registration and login</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="section-padding max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold gradient-text mb-6">Connection Troubleshooting Steps</h2>
        <p className="text-text-secondary mb-8">
          If you experience lag, disconnections, or slow loading while playing Rajluck Game Online, follow these diagnostic steps before contacting support.
        </p>
        <ol className="space-y-5">
          {[
            { step: "1", title: "Run a Speed Test", desc: "Use a free speed test tool to verify your current download speed, upload speed, and ping. Compare against the minimum requirements table above." },
            { step: "2", title: "Switch Networks", desc: "Toggle between WiFi and mobile data to identify which network is performing better at that moment." },
            { step: "3", title: "Restart Your Router", desc: "Power cycle your router by unplugging it for 30 seconds. This clears the NAT table and can resolve intermittent lag." },
            { step: "4", title: "Close Background Apps", desc: "Other apps consuming bandwidth — streaming, cloud sync, app updates — compete with Rajluck for your connection. Close them before playing." },
            { step: "5", title: "Clear App Cache", desc: "Navigate to Android Settings → Apps → Rajluck Game → Storage → Clear Cache. Corrupt cached data can cause connection errors." },
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

      {/* FAQ */}
      <section className="section-padding bg-primary-50 max-w-full">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold gradient-text mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: "Can I play Rajluck Game on a 3G connection?", a: "3G connections (typically 1–5 Mbps) can support basic gameplay, but you may experience occasional loading delays. We recommend enabling Data Saving Mode to improve the experience on slower connections." },
              { q: "Does Rajluck Game work on public WiFi?", a: "Yes, Rajluck Game works on public WiFi. However, some public networks use firewalls or proxy settings that may block certain game functions. If you encounter issues, switch to mobile data." },
              { q: "How much data does one hour of Rajluck gameplay use?", a: "With Data Saving Mode off, expect approximately 50–80 MB per hour. With Data Saving Mode enabled, this drops to 20–35 MB per hour — comparable to streaming standard-definition video." },
              { q: "What should I do if the game disconnects mid-session?", a: "Rajluck Game automatically saves your session state server-side. Upon reconnection, your session resumes from where it left off. Any completed actions before disconnection are preserved." },
              { q: "Is a VPN safe to use with Rajluck Game Online?", a: "Using a VPN may introduce additional latency. While not prohibited, VPNs can route your traffic through distant servers, increasing ping. We recommend playing without a VPN for the best performance." },
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
        <h2 className="text-3xl font-bold text-black mb-4">Ready to Play Rajluck Online?</h2>
        <p className="text-black/70 mb-8 max-w-xl mx-auto">Now that your connection is optimized, jump into the Rajluck experience. Register today and claim your welcome bonus.</p>
        <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta inline-block text-lg font-bold px-10 py-4 rounded-full shadow-xl">
          Start Playing Now
        </a>
      </section>

      {/* Internal Links */}
      <section className="section-padding max-w-4xl mx-auto">
        <h2 className="text-xl font-bold text-text-primary mb-4">Explore More Rajluck Guides</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/rajluck-game-play" className="btn-outline px-4 py-2 rounded-full text-sm">How to Play</Link>
          <Link href="/rajluck-game-bonus" className="btn-outline px-4 py-2 rounded-full text-sm">Bonus System</Link>
          <Link href="/rajluck-game-install" className="btn-outline px-4 py-2 rounded-full text-sm">Installation Guide</Link>
          <Link href="/rajluck-game-free" className="btn-outline px-4 py-2 rounded-full text-sm">Is It Free?</Link>
          <Link href="/rajluck-game-rewards" className="btn-outline px-4 py-2 rounded-full text-sm">Rewards Program</Link>
          <Link href="/rajluck-download" className="btn-outline px-4 py-2 rounded-full text-sm">Download Guide</Link>
        </div>
      </section>
    </main>
  );
}
