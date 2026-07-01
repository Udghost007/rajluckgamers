import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const CTA_LINK = "https://share-rxapq9cajg.rajluck.co/web/share/index.html?ic=AA0DL7ND&ts=1782835740&m=2&lang=en&id=1";

export const metadata: Metadata = {
  title: "Rajluck Download – Compare Download Methods | Direct, QR, Referral 2026",
  description: "Compare every way to download Rajluck: direct website download, QR code scan, referral link, and social media links. Pros, cons, speed, and bonuses for each method.",
  keywords: ["Rajluck Download", "download Rajluck", "Rajluck QR code download", "Rajluck referral download", "Rajluck direct download", "Rajluck download methods", "RajluckGamers", "rajluckgamers"],
  openGraph: { title: "Rajluck Download – Compare Download Methods 2026", description: "Which Rajluck download method is best? Compare all options.", url: "https://rajluckgamers.com/rajluck-download", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Rajluck Download Methods" }] },
  twitter: { card: "summary_large_image", title: "Rajluck Download Methods Compared", description: "Compare direct, QR, referral, and social media download methods.", images: ["/og-image.png"] },
  alternates: { canonical: "https://rajluckgamers.com/rajluck-download" },
};

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-1/2 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-5 sm:py-10 relative">
          <div className="text-center mx-auto">
            <span className="inline-block px-2 sm:px-4 py-1.5 rounded-full bg-white/20 text-black text-sm font-medium mb-3 sm:mb-4 animate-fade-in backdrop-blur-sm">
              Download Methods Compared
            </span>
            <Image src="/logo.webp" alt="Rajluck Download Methods" width={160} height={160} className="mx-auto mb-4 rounded-2xl shadow-lg" priority />
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-black leading-tight mb-4 sm:mb-6 animate-slide-up">
              Rajluck Download – <span className="gradient-text">Methods Compared</span>
            </h1>
            <p className="text-lg text-red-900 leading-relaxed mb-8 max-w-2xl mx-auto">
              There are multiple ways to download Rajluck APK. Each method has different advantages — some are faster, some give bonuses, and some are better for sharing with friends.
            </p>
            <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta !text-lg !py-3 sm:!py-4 !px-10 inline-flex">
              Direct Download (Fastest)
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" className="w-full"><path d="M0 40L48 35C96 30 192 20 288 22C384 25 480 40 576 48C672 55 768 55 864 48C960 40 1056 25 1152 22C1248 20 1344 30 1392 35L1440 40V100H0V40Z" fill="white" /></svg>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">Quick Comparison</h2>
            <p className="text-text-secondary max-w-lg mx-auto">Side-by-side overview of all four download methods.</p>
          </div>
          <div className="card-static overflow-x-auto">
            <table className="info-table">
              <thead>
                <tr>
                  <th>Method</th>
                  <th>Speed</th>
                  <th>Bonus</th>
                  <th>Ease of Use</th>
                  <th>Best For</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { method: "Direct Website", speed: "Fastest", bonus: "Standard welcome bonus", ease: "Very Easy", best: "Personal download" },
                  { method: "QR Code Scan", speed: "Fast", bonus: "Standard welcome bonus", ease: "Easy", best: "In-person sharing" },
                  { method: "Referral Link", speed: "Fast", bonus: "Extra referral bonus for both", ease: "Easy", best: "Getting bonus rewards" },
                  { method: "Social Media Link", speed: "Medium", bonus: "Varies by promotion", ease: "Moderate", best: "Discovering via social" },
                ].map((row) => (
                  <tr key={row.method}>
                    <td className="font-medium text-text-primary">{row.method}</td>
                    <td className="text-text-secondary">{row.speed}</td>
                    <td className="text-text-secondary">{row.bonus}</td>
                    <td className="text-text-secondary">{row.ease}</td>
                    <td className="text-text-secondary">{row.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Method 1: Direct Website Download */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="step-number text-xl flex-shrink-0">1</div>
            <h2 className="text-2xl font-bold text-text-primary">Direct Website Download</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="card-static p-6">
              <h3 className="font-bold text-text-primary mb-3">How It Works</h3>
              <ol className="space-y-2">
                {[
                  "Open your mobile browser (Chrome, Firefox, or Samsung Internet).",
                  "Navigate to rajluckgamers.com or tap the download button on this page.",
                  "Tap the 'Download APK' button on the landing page.",
                  "The APK file downloads directly to your Downloads folder.",
                  "Open the file and follow the installation prompts.",
                ].map((step, i) => (
                  <li key={i} className="text-text-secondary text-sm flex items-start gap-2">
                    <span className="bg-primary-100 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <div className="card-static p-5 mb-4">
                <h3 className="font-bold text-green-700 mb-2">Pros</h3>
                <ul className="space-y-1">
                  {["Fastest method — no intermediary steps", "Always gets the latest version", "No dependency on third parties", "Works offline once downloaded"].map((pro, i) => (
                    <li key={i} className="text-text-secondary text-sm flex items-start gap-2"><span className="text-green-600 flex-shrink-0">+</span> {pro}</li>
                  ))}
                </ul>
              </div>
              <div className="card-static p-5">
                <h3 className="font-bold text-red-700 mb-2">Cons</h3>
                <ul className="space-y-1">
                  {["No extra referral bonus", "Must type/remember the URL", "Browser may show APK security warning"].map((con, i) => (
                    <li key={i} className="text-text-secondary text-sm flex items-start gap-2"><span className="text-red-600 flex-shrink-0">-</span> {con}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Method 2: QR Code Scan */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="step-number text-xl flex-shrink-0">2</div>
            <h2 className="text-2xl font-bold text-text-primary">QR Code Scan</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="card-static p-6">
              <h3 className="font-bold text-text-primary mb-3">How It Works</h3>
              <ol className="space-y-2">
                {[
                  "A friend or advertisement shows you a Rajluck QR code.",
                  "Open your phone's camera app or a QR scanner app.",
                  "Point the camera at the QR code until it recognizes the link.",
                  "Tap the notification or overlay to open the link in your browser.",
                  "The download page opens automatically — tap download to get the APK.",
                ].map((step, i) => (
                  <li key={i} className="text-text-secondary text-sm flex items-start gap-2">
                    <span className="bg-primary-100 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <div className="card-static p-5 mb-4">
                <h3 className="font-bold text-green-700 mb-2">Pros</h3>
                <ul className="space-y-1">
                  {["No typing required — just point and scan", "Great for sharing at meetups and events", "QR codes can embed referral bonuses", "Works with any phone camera (Android 8+)"].map((pro, i) => (
                    <li key={i} className="text-text-secondary text-sm flex items-start gap-2"><span className="text-green-600 flex-shrink-0">+</span> {pro}</li>
                  ))}
                </ul>
              </div>
              <div className="card-static p-5">
                <h3 className="font-bold text-red-700 mb-2">Cons</h3>
                <ul className="space-y-1">
                  {["Requires physical proximity to a QR code", "Older phones may need a separate QR app", "Cannot use if screen displaying QR is too small or blurry"].map((con, i) => (
                    <li key={i} className="text-text-secondary text-sm flex items-start gap-2"><span className="text-red-600 flex-shrink-0">-</span> {con}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Method 3: Referral Link */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="step-number text-xl flex-shrink-0">3</div>
            <h2 className="text-2xl font-bold text-text-primary">Referral Link</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="card-static p-6">
              <h3 className="font-bold text-text-primary mb-3">How It Works</h3>
              <ol className="space-y-2">
                {[
                  "An existing Rajluck user shares their personal referral link with you.",
                  "The link arrives via WhatsApp, SMS, email, or any messaging app.",
                  "Tap the referral link to open it in your browser.",
                  "Download and install the APK following the on-screen instructions.",
                  "When you register, the referral is automatically tracked — both you and the referrer receive bonus rewards.",
                ].map((step, i) => (
                  <li key={i} className="text-text-secondary text-sm flex items-start gap-2">
                    <span className="bg-primary-100 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <div className="card-static p-5 mb-4">
                <h3 className="font-bold text-green-700 mb-2">Pros</h3>
                <ul className="space-y-1">
                  {["Extra bonus for both you and the referrer", "Comes from a trusted person you know", "Link can be reused — tap anytime", "Referrer can help you get started"].map((pro, i) => (
                    <li key={i} className="text-text-secondary text-sm flex items-start gap-2"><span className="text-green-600 flex-shrink-0">+</span> {pro}</li>
                  ))}
                </ul>
              </div>
              <div className="card-static p-5">
                <h3 className="font-bold text-red-700 mb-2">Cons</h3>
                <ul className="space-y-1">
                  {["Requires knowing an existing user", "Some messaging apps preview-block external links", "Referral link may expire after a certain period"].map((con, i) => (
                    <li key={i} className="text-text-secondary text-sm flex items-start gap-2"><span className="text-red-600 flex-shrink-0">-</span> {con}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Method 4: Social Media Links */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="step-number text-xl flex-shrink-0">4</div>
            <h2 className="text-2xl font-bold text-text-primary">Social Media Links</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="card-static p-6">
              <h3 className="font-bold text-text-primary mb-3">How It Works</h3>
              <ol className="space-y-2">
                {[
                  "Follow Rajluck on social media platforms (Telegram, Instagram, YouTube).",
                  "Find a download link in the bio, pinned post, or video description.",
                  "Tap the link — it usually opens in the platform's in-app browser.",
                  "Important: If the in-app browser blocks APK downloads, tap the three dots and select 'Open in Chrome'.",
                  "Download and install the APK from the opened browser.",
                ].map((step, i) => (
                  <li key={i} className="text-text-secondary text-sm flex items-start gap-2">
                    <span className="bg-primary-100 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <div className="card-static p-5 mb-4">
                <h3 className="font-bold text-green-700 mb-2">Pros</h3>
                <ul className="space-y-1">
                  {["May include exclusive social media promotions", "Easy discovery if you follow Rajluck channels", "Comments section provides real user reviews", "Telegram channels often share instant updates"].map((pro, i) => (
                    <li key={i} className="text-text-secondary text-sm flex items-start gap-2"><span className="text-green-600 flex-shrink-0">+</span> {pro}</li>
                  ))}
                </ul>
              </div>
              <div className="card-static p-5">
                <h3 className="font-bold text-red-700 mb-2">Cons</h3>
                <ul className="space-y-1">
                  {["In-app browsers often block APK downloads", "Risk of fake accounts impersonating Rajluck", "Extra step to copy link to external browser", "Social platform may remove download links"].map((con, i) => (
                    <li key={i} className="text-text-secondary text-sm flex items-start gap-2"><span className="text-red-600 flex-shrink-0">-</span> {con}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Which Method Should You Choose */}
      <section className="section-padding bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-8 text-center">Which Method Should You Choose?</h2>
          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {[
              { scenario: "You want the fastest download with no fuss", recommendation: "Use the Direct Website download. Tap the button, install, done." },
              { scenario: "A friend is showing you the app in person", recommendation: "Ask them to show their QR code. Scan it with your camera for instant access." },
              { scenario: "You want extra bonus money on signup", recommendation: "Use a Referral Link. Both you and the referrer get bonus rewards." },
              { scenario: "You discovered Rajluck on social media", recommendation: "Use the social link but open it in Chrome (not the in-app browser) for reliable download." },
            ].map((item, i) => (
              <div key={i} className="card-static p-5">
                <h3 className="font-bold text-text-primary mb-2">{item.scenario}</h3>
                <p className="text-text-secondary text-sm">{item.recommendation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-8 text-center">Download Methods FAQs</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              { q: "Do all download methods give the same APK file?", a: "Yes. Regardless of how you reach the download page, you get the exact same APK file. The only difference is the tracking parameters in the URL, which determine referral bonuses." },
              { q: "Can I use multiple referral links?", a: "No. Only the first referral link used during registration is tracked. Subsequent referral links do not override the original referrer." },
              { q: "Is one method more secure than others?", a: "All methods that lead to the official rajluckgamers.com website are equally secure. Avoid third-party APK mirror sites regardless of how you found the link." },
              { q: "What if the QR code does not scan?", a: "Ensure adequate lighting, hold your phone steady, and keep the QR code within the camera frame. If it still fails, ask for the direct URL instead." },
              { q: "Can I generate my own referral link?", a: "Yes. After creating your account, go to Profile > Referral in the app. Your unique link and QR code are generated automatically." },
            ].map((faq, i) => (
              <div key={i} className="card-static p-5">
                <h3 className="font-bold text-text-primary mb-2">{faq.q}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-surface text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">Ready to Download Rajluck?</h2>
          <p className="text-text-secondary mb-8 max-w-lg mx-auto">The direct download is the fastest and most reliable method. Tap below to get started.</p>
          <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta !text-lg !py-3 sm:!py-4 !px-10 inline-flex">
            Download Rajluck Now
          </a>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-text-primary mb-6 text-center">Related Pages</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: "/rajluckgameapkdownload", label: "Complete Download Tutorial" },
              { href: "/raj-luck-game-apk-download", label: "Download Troubleshooting" },
              { href: "/rajluckapkdownload", label: "Speed & Data Optimization" },
              { href: "/rajluckgameapk", label: "Features Walkthrough" },
              { href: "/rajluck-apk-download", label: "Version History & Changelog" },
              { href: "/rajluck-game-apk-download", label: "APK Verification Guide" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="btn-outline text-center block">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://rajluckgamers.com" }, { "@type": "ListItem", position: 2, name: "Rajluck Download", item: "https://rajluckgamers.com/rajluck-download" }] }) }} />
    </>
  );
}
