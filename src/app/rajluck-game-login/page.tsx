import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rajluck Game Login – How to Login to Your Rajluck Account 2026",
  description: "Rajluck Game Login guide — learn how to login to your Rajluck Game account step by step. Secure login with mobile number, password reset help, and troubleshooting tips. rajluck game login, rajluck login.",
  keywords: ["Rajluck Game Login", "Rajluck Login", "Rajluck Game sign in", "login Rajluck", "Rajluck account login", "Rajluck Game", "Rajluck", "Raj Luck Login", "Raj Luck Game Login", "RajluckGamers"],
  openGraph: { title: "Rajluck Game Login – Access Your Account 2026", description: "Login to your Rajluck Game account securely. Guide at rajluckgamers.com.", url: "https://rajluckgamers.com/rajluck-game-login", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Rajluck Game Login" }] },
  twitter: { card: "summary_large_image", title: "Rajluck Game Login", images: ["/og-image.png"] },
  alternates: { canonical: "https://rajluckgamers.com/rajluck-game-login" },
};

const CTA_LINK = "https://share-rxapq9cajg.rajluck.co/web/share/index.html?ic=AA64CBGV&ts=1783054980&m=2&lang=en&id=1";

export default function Page() {
  return (
    <main>
      {/* Hero */}
      <section className="hero-gradient section-padding text-center">
        <Image src="/logo.webp" alt="Rajluck Game Login" width={160} height={160} className="w-[100px] sm:w-[180px] mx-auto mb-6 drop-shadow-2xl animate-fade-in" priority />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-black mb-4 animate-slide-up">
          Rajluck Game Login<br />Security Best Practices
        </h1>
        <p className="text-lg text-black/80 max-w-2xl mx-auto mb-8">
          Protecting your Rajluck Game account starts at the login screen. Learn secure login methods, how 2-step verification works, strong password habits, session management, and what to do if you're ever locked out.
        </p>
        <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta text-lg px-8 py-4 inline-block">
          Login to Rajluck Game
        </a>
      </section>

      {/* Secure Login Methods */}
      <section className="section-padding bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4 gradient-text">Secure Login Methods Available</h2>
          <p className="text-text-secondary mb-6">
            Rajluck Game supports several login options. Each provides a different balance of convenience and security. Choose the method that suits your daily usage pattern.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { method: "Mobile Number + Password", level: "Standard", desc: "Enter your registered phone number and password. Best for users who log in from a single trusted device." },
              { method: "OTP Login", level: "Recommended", desc: "Request a one-time passcode sent to your mobile number. No password needed — each code expires in 5 minutes." },
              { method: "Biometric Login", level: "Most Secure", desc: "After first login, enable fingerprint or face unlock inside the app settings for instant, secure future logins." },
            ].map(({ method, level, desc }) => (
              <div key={method} className="card text-center">
                <span className="inline-block bg-primary-100 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">{level}</span>
                <h3 className="font-bold text-text-primary mb-2">{method}</h3>
                <p className="text-text-secondary text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2-Step Verification */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Setting Up 2-Step Verification</h2>
          <p className="text-text-secondary mb-6">
            Two-step verification adds a critical second layer of defence. Even if someone discovers your password, they cannot access your account without also controlling your registered phone number.
          </p>
          <div className="space-y-4">
            {[
              { step: "1", title: "Open Account Settings", body: "After logging in, tap the profile icon in the top-right corner. Select 'Account Security' from the dropdown menu." },
              { step: "2", title: "Enable 2-Step Verification", body: "Toggle the '2-Step Verification' switch to ON. The system will send a test OTP to your registered mobile number to confirm activation." },
              { step: "3", title: "Confirm with OTP", body: "Enter the 6-digit test OTP in the confirmation field. Your 2-step verification is now active on the account." },
              { step: "4", title: "Save Backup Codes", body: "You will receive 5 backup codes. Write these down and store them offline. Use them only if you lose access to your phone number." },
            ].map(({ step, title, body }) => (
              <div key={step} className="flex gap-4 items-start card-static p-5">
                <span className="step-number">{step}</span>
                <div>
                  <h3 className="font-bold text-text-primary mb-1">{title}</h3>
                  <p className="text-text-secondary text-sm">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Password Strength */}
      <section className="section-padding bg-primary-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Building a Strong Password</h2>
          <p className="text-text-secondary mb-6">A weak password is the most common way accounts get compromised. Follow these guidelines when choosing your Rajluck Game password:</p>
          <div className="info-table overflow-x-auto mb-4">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-primary-100">
                  <th className="px-4 py-3 font-semibold text-text-primary">Criterion</th>
                  <th className="px-4 py-3 font-semibold text-text-primary">Weak Example</th>
                  <th className="px-4 py-3 font-semibold text-text-primary">Strong Example</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="px-4 py-3 text-text-secondary">Length</td><td className="px-4 py-3 text-text-secondary">6 chars</td><td className="px-4 py-3 text-text-secondary">14+ chars</td></tr>
                <tr className="border-b bg-primary-50"><td className="px-4 py-3 text-text-secondary">Character Mix</td><td className="px-4 py-3 text-text-secondary">abc123</td><td className="px-4 py-3 text-text-secondary">Ab#7mK!9xQ@2Lz</td></tr>
                <tr className="border-b"><td className="px-4 py-3 text-text-secondary">Predictability</td><td className="px-4 py-3 text-text-secondary">birthday1990</td><td className="px-4 py-3 text-text-secondary">Random, no personal info</td></tr>
                <tr className="bg-primary-50"><td className="px-4 py-3 text-text-secondary">Reuse</td><td className="px-4 py-3 text-text-secondary">Same on 10 sites</td><td className="px-4 py-3 text-text-secondary">Unique to Rajluck only</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-muted text-sm">Consider using a password manager to generate and store a unique password for Rajluck Game. Never share your password with anyone.</p>
        </div>
      </section>

      {/* Session Management */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Managing Active Sessions</h2>
          <p className="text-text-secondary mb-6">
            If you logged in from multiple devices or a shared device, it's important to review and terminate old sessions. Inside the app under <strong>Account Security → Active Sessions</strong>, you can see every device currently logged in with your account and remotely log out any you don't recognise.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="card">
              <h3 className="font-bold text-primary mb-2">What to Check</h3>
              <ul className="text-text-secondary text-sm space-y-1">
                <li>• Device model and operating system</li>
                <li>• Last active timestamp</li>
                <li>• Approximate login location</li>
                <li>• Session duration</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="font-bold text-primary mb-2">When to Log Out All Sessions</h3>
              <ul className="text-text-secondary text-sm space-y-1">
                <li>• After using a public or shared device</li>
                <li>• If you suspect unauthorised access</li>
                <li>• When changing your password</li>
                <li>• Before selling or giving away a device</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Locked Out */}
      <section className="section-padding bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4">What to Do If You're Locked Out</h2>
          <p className="text-text-secondary mb-6">Getting locked out of your account can happen for several reasons. Here is the recovery path for each scenario:</p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { issue: "Forgot Password", fix: "Tap 'Forgot Password' on the login screen. Enter your registered mobile number. An OTP will arrive within 60 seconds. Use it to set a new password." },
              { issue: "Wrong Mobile Number Entered", fix: "Double-check the country code. If you recently changed your number, contact Rajluck support with your account details to update the registered number." },
              { issue: "Too Many Failed Attempts", fix: "After 5 failed login attempts the account is temporarily locked for 15 minutes. Wait for the countdown, then try again with the correct credentials." },
              { issue: "OTP Not Arriving", fix: "Check for network signal. OTPs expire quickly — request a fresh one. If issues persist, check if your carrier is blocking short-code SMS messages." },
            ].map(({ issue, fix }) => (
              <div key={issue} className="card-static p-5">
                <h3 className="font-semibold text-text-primary mb-2">{issue}</h3>
                <p className="text-text-secondary text-sm">{fix}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {[
              { q: "Can I log in on more than one device at the same time?", a: "Yes. Rajluck Game allows simultaneous sessions across multiple devices. However, for security we recommend limiting active sessions to devices you own and trust." },
              { q: "Does Rajluck Game ever ask for my password by SMS or email?", a: "No. Rajluck will never ask for your password via SMS, email, or chat. If you receive such a message, it is a phishing attempt — do not respond and report it." },
              { q: "How long before an idle session automatically expires?", a: "Sessions expire after 30 days of inactivity. If you log in regularly you will not notice this. Once expired, a fresh login with OTP verification is required." },
              { q: "Is it safe to use the 'Remember Me' option on my personal phone?", a: "On a personal device that only you use, 'Remember Me' is safe and convenient. Avoid using it on shared, borrowed, or public devices." },
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
        <h2 className="text-3xl font-bold text-text-primary mb-4">Secure Your Account Today</h2>
        <p className="text-text-secondary mb-6 max-w-xl mx-auto">Use the login button below to access your Rajluck Game account. Enable 2-step verification as soon as you're in.</p>
        <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta inline-block px-8 py-4 text-lg">
          Login to Rajluck Game
        </a>
      </section>

      {/* Internal Links */}
      <section className="section-padding bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-text-primary mb-4">Related Guides</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/rajluck-login" className="btn-outline text-sm px-4 py-2">Login Troubleshooting</Link>
            <Link href="/rajluck-game-register" className="btn-outline text-sm px-4 py-2">Create an Account</Link>
            <Link href="/rajluck-game-download" className="btn-outline text-sm px-4 py-2">Download Guide</Link>
            <Link href="/rajluck-game-app" className="btn-outline text-sm px-4 py-2">App Interface Guide</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
