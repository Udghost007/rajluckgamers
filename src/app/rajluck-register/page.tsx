import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rajluck Register – Create Your Free Account 2026",
  description: "Rajluck Register — create your Rajluck account for free. Quick registration with mobile verification. rajluck register, rajluck sign up, rajluck game register.",
  keywords: ["Rajluck Register", "Rajluck sign up", "create Rajluck account", "Rajluck registration", "Rajluck Game Register", "Rajluck Game", "Rajluck", "Raj Luck Register", "RajluckGamers"],
  openGraph: { title: "Rajluck Register – Create Free Account 2026", description: "Register your Rajluck account free at rajluckgamers.com.", url: "https://rajluckgamers.com/rajluck-register", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Rajluck Register" }] },
  twitter: { card: "summary_large_image", title: "Rajluck Register", images: ["/og-image.png"] },
  alternates: { canonical: "https://rajluckgamers.com/rajluck-register" },
};

const CTA_LINK = "https://share-rxapq9cajg.rajluck.co/web/share/index.html?ic=AA64CBGV&ts=1783054980&m=2&lang=en&id=1";

export default function Page() {
  return (
    <main>
      {/* Hero */}
      <section className="hero-gradient section-padding text-center">
        <Image src="/logo.webp" alt="Rajluck Register" width={160} height={160} className="w-[100px] sm:w-[180px] mx-auto mb-6 drop-shadow-2xl animate-fade-in" priority />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-black mb-4 animate-slide-up">
          Rajluck Registration<br />Eligibility &amp; Requirements
        </h1>
        <p className="text-lg text-black/80 max-w-2xl mx-auto mb-8">
          Before you register for Rajluck, find out if you're eligible. This page covers age requirements, supported regions, what information you need to provide, how account verification works, and what happens if your details don't pass the check.
        </p>
        <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta text-lg px-8 py-4 inline-block">
          Register with Rajluck
        </a>
      </section>

      {/* Who Can Register */}
      <section className="section-padding bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4 gradient-text">Who Can Register for Rajluck?</h2>
          <p className="text-text-secondary mb-6">
            Rajluck Game is open to players who meet all of the following criteria. All three conditions must be true simultaneously for registration to be accepted:
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { condition: "Age 18 or Older", icon: "🔞", desc: "You must be at least 18 years old at the time of registration. By submitting the registration form you confirm you meet this age requirement." },
              { condition: "Supported Region", icon: "🌍", desc: "Rajluck Game is available in select regions. Registration is currently open for players in Southeast Asia and selected international markets." },
              { condition: "Valid Mobile Number", icon: "📱", desc: "You must own an active mobile number capable of receiving SMS messages. This number becomes your permanent account identifier." },
            ].map(({ condition, icon, desc }) => (
              <div key={condition} className="card text-center">
                <div className="text-4xl mb-3">{icon}</div>
                <h3 className="font-bold text-text-primary mb-2">{condition}</h3>
                <p className="text-text-secondary text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age Requirements */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Age Requirements in Detail</h2>
          <p className="text-text-secondary mb-6">
            The minimum age of 18 applies globally. In some jurisdictions the legal minimum age for online gaming platforms is higher — in those regions, the higher local minimum age applies. Rajluck's systems perform age verification checks during registration and at the point of first withdrawal.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="card">
              <h3 className="font-bold text-primary mb-3">What Happens During Age Verification</h3>
              <ul className="text-text-secondary text-sm space-y-2">
                <li>• Age is initially self-declared during registration</li>
                <li>• Document verification may be requested before first withdrawal</li>
                <li>• Accepted documents include national ID, passport, or driver's licence</li>
                <li>• Verification is processed within 24–48 hours</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="font-bold text-primary mb-3">If Age Verification Fails</h3>
              <ul className="text-text-secondary text-sm space-y-2">
                <li>• Account is placed on hold pending re-verification</li>
                <li>• You can submit alternative documents via in-app support</li>
                <li>• Funds in the wallet are frozen (not lost) during review</li>
                <li>• Accounts confirmed as underage are permanently closed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Regions */}
      <section className="section-padding bg-primary-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Supported Regions</h2>
          <p className="text-text-secondary mb-6">Rajluck Game is currently available in the following regions. If your country is not listed, registration may still be possible — the system will notify you during the sign-up process if your region is not supported:</p>
          <div className="grid sm:grid-cols-2 gap-4 mb-5">
            <div className="card">
              <h3 className="font-bold text-primary mb-3">Primary Markets</h3>
              <ul className="text-text-secondary text-sm space-y-1">
                <li>🇲🇾 Malaysia</li>
                <li>🇹🇭 Thailand</li>
                <li>🇵🇭 Philippines</li>
                <li>🇮🇩 Indonesia</li>
                <li>🇸🇬 Singapore</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="font-bold text-primary mb-3">Additional Supported Markets</h3>
              <ul className="text-text-secondary text-sm space-y-1">
                <li>🇧🇩 Bangladesh</li>
                <li>🇳🇵 Nepal</li>
                <li>🇱🇰 Sri Lanka</li>
                <li>🇰🇭 Cambodia</li>
                <li>+ Other Southeast Asian regions</li>
              </ul>
            </div>
          </div>
          <p className="text-text-muted text-sm">If you are in a restricted country, a VPN will not bypass region restrictions — account verification processes will identify the actual account location.</p>
        </div>
      </section>

      {/* Document Requirements */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Document Requirements for Account Verification</h2>
          <p className="text-text-secondary mb-6">Basic registration requires only a mobile number. Full account verification (required for withdrawals above a threshold) requires identity documentation:</p>
          <div className="info-table overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-primary-100">
                  <th className="px-4 py-3 font-semibold text-text-primary">Document Type</th>
                  <th className="px-4 py-3 font-semibold text-text-primary">Accepted?</th>
                  <th className="px-4 py-3 font-semibold text-text-primary">Requirements</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["National Identity Card", "✔ Yes", "Both sides, clearly legible, not expired"],
                  ["Passport", "✔ Yes", "Photo page only, must be valid"],
                  ["Driver's Licence", "✔ Yes", "Front side with photo, must be valid"],
                  ["Student ID", "✗ No", "Not accepted for verification purposes"],
                  ["Utility Bill", "✔ Yes (address only)", "For address verification if required, dated within 3 months"],
                ].map(([doc, accepted, req]) => (
                  <tr key={doc} className="border-b even:bg-primary-50">
                    <td className="px-4 py-3 text-text-secondary">{doc}</td>
                    <td className="px-4 py-3 font-medium text-text-primary">{accepted}</td>
                    <td className="px-4 py-3 text-text-secondary">{req}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Verification Process */}
      <section className="section-padding bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Account Verification Process</h2>
          <p className="text-text-secondary mb-6">Verification is split into two levels. Level 1 unlocks basic features; Level 2 unlocks full withdrawal capabilities:</p>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="card">
              <span className="inline-block bg-primary-100 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">Level 1 Verification</span>
              <h3 className="font-bold text-text-primary mb-2">Mobile Verified</h3>
              <p className="text-text-secondary text-sm mb-3">Completed automatically during registration via OTP. Unlocks full gameplay, deposits, and withdrawals under the basic limit.</p>
              <p className="text-text-muted text-xs">Time to complete: 2 minutes</p>
            </div>
            <div className="card">
              <span className="inline-block bg-primary-100 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">Level 2 Verification</span>
              <h3 className="font-bold text-text-primary mb-2">Identity Verified</h3>
              <p className="text-text-secondary text-sm mb-3">Submit a government-issued ID via the app. Manual review by the compliance team. Unlocks higher withdrawal limits and VIP tier eligibility.</p>
              <p className="text-text-muted text-xs">Time to complete: 24–48 hours</p>
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
              { q: "Can I register if I'm 17 years old?", a: "No. The minimum age is 18 globally. Registrations from users confirmed to be under 18 are cancelled and any associated funds are returned according to Rajluck's underage account policy." },
              { q: "Do I need to verify my identity before I can play?", a: "No. Level 1 (mobile verification) during registration is sufficient to access all games and make standard deposits and withdrawals. Level 2 identity verification is only required when you exceed basic withdrawal limits." },
              { q: "What if my country isn't currently listed as supported?", a: "Registration with an unsupported region phone number will be declined at the OTP verification stage. Check back on rajluckgamers.com as new regions are added periodically." },
              { q: "Can I register on behalf of someone else?", a: "Accounts must be registered by and used by the same individual. Registering on behalf of another person or operating someone else's account violates the Terms of Service and may result in permanent suspension." },
              { q: "Is my personal information kept private?", a: "Yes. Rajluck Game collects only the information necessary for account operation and legal compliance. Data is encrypted at rest and in transit. Rajluck never sells personal data to third parties." },
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
        <h2 className="text-3xl font-bold text-text-primary mb-4">Meet the Requirements? Register Now</h2>
        <p className="text-text-secondary mb-6 max-w-xl mx-auto">Registration is free, takes under 3 minutes, and only requires your mobile number for Level 1 verification.</p>
        <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta inline-block px-8 py-4 text-lg">
          Create Your Rajluck Account
        </a>
      </section>

      {/* Internal Links */}
      <section className="section-padding bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-text-primary mb-4">Next Steps After Registering</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/rajluck-game-register" className="btn-outline text-sm px-4 py-2">Full Registration Walkthrough</Link>
            <Link href="/rajluck-game-login" className="btn-outline text-sm px-4 py-2">Login Security Guide</Link>
            <Link href="/rajluck-login" className="btn-outline text-sm px-4 py-2">Login Troubleshooting</Link>
            <Link href="/rajluck-game-download" className="btn-outline text-sm px-4 py-2">Download the App</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
