import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rajluck Login – Sign In to Your Rajluck Account 2026",
  description: "Rajluck Login — access your Rajluck account securely. Step-by-step login guide using mobile number and password. rajluck login, rajluck sign in, rajluck game login.",
  keywords: ["Rajluck Login", "Rajluck sign in", "Rajluck account login", "login to Rajluck", "Rajluck Game Login", "Rajluck Game", "Rajluck", "Raj Luck Login", "RajluckGamers"],
  openGraph: { title: "Rajluck Login – Sign In to Your Account 2026", description: "Login to your Rajluck account at rajluckgamers.com.", url: "https://rajluckgamers.com/rajluck-login", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Rajluck Login" }] },
  twitter: { card: "summary_large_image", title: "Rajluck Login", images: ["/og-image.png"] },
  alternates: { canonical: "https://rajluckgamers.com/rajluck-login" },
};

const CTA_LINK = "https://share-rxapq9cajg.rajluck.co/web/share/index.html?ic=AA64CBGV&ts=1783054980&m=2&lang=en&id=1";

export default function Page() {
  return (
    <main>
      {/* Hero */}
      <section className="hero-gradient section-padding text-center">
        <Image src="/logo.webp" alt="Rajluck Login" width={160} height={160} className="w-[100px] sm:w-[180px] mx-auto mb-6 drop-shadow-2xl animate-fade-in" priority />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-black mb-4 animate-slide-up">
          Rajluck Login Troubleshooting<br />Fix Common Issues Fast
        </h1>
        <p className="text-lg text-black/80 max-w-2xl mx-auto mb-8">
          Can't log in to your Rajluck account? This guide solves every common login problem — forgotten passwords, OTPs not arriving, locked accounts, wrong number errors, and expired sessions — with clear step-by-step fixes.
        </p>
        <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta text-lg px-8 py-4 inline-block">
          Go to Rajluck Login
        </a>
      </section>

      {/* Quick Diagnosis */}
      <section className="section-padding bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4 gradient-text">Quick Issue Diagnosis</h2>
          <p className="text-text-secondary mb-6">What error or symptom are you experiencing? Jump to the relevant fix section:</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { issue: "Forgot Password", link: "#forgot-password", desc: "You don't remember your password and can't log in" },
              { issue: "OTP Not Received", link: "#otp-issues", desc: "You requested an OTP code but nothing arrived" },
              { issue: "Account Locked", link: "#account-locked", desc: "Too many wrong attempts or security hold placed" },
              { issue: "Wrong Number", link: "#wrong-number", desc: "You may have registered with a different number" },
              { issue: "Session Expired", link: "#session-expired", desc: "You were logged out automatically and can't get back in" },
              { issue: "App Won't Open", link: "#app-issues", desc: "The Rajluck app crashes or freezes on the login screen" },
            ].map(({ issue, desc }) => (
              <div key={issue} className="card-static p-4 cursor-pointer hover:bg-primary-50 transition-colors">
                <h3 className="font-semibold text-primary mb-1 text-sm">{issue}</h3>
                <p className="text-text-muted text-xs">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Forgot Password */}
      <section className="section-padding" id="forgot-password">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Forgot Password — Step-by-Step Recovery</h2>
          <p className="text-text-secondary mb-6">Password recovery in Rajluck takes under 3 minutes and requires access to your registered mobile number:</p>
          <div className="space-y-4">
            {[
              { step: "1", title: "Tap 'Forgot Password'", body: "On the login screen, tap the 'Forgot Password?' link below the password field. Do not attempt more logins with guessed passwords — each failed attempt counts toward the lockout limit." },
              { step: "2", title: "Enter Your Registered Number", body: "Type the mobile number you used when creating your account. Include the country code. Tap 'Send Reset OTP' to proceed." },
              { step: "3", title: "Enter the Reset OTP", body: "Check your SMS inbox for a 6-digit OTP. Enter it within 5 minutes. If it doesn't arrive, wait 60 seconds then tap 'Resend OTP'." },
              { step: "4", title: "Create a New Password", body: "Enter a new password of at least 8 characters. Use a mix of uppercase, lowercase, numbers, and symbols. Confirm the new password and tap 'Update Password'." },
              { step: "5", title: "Login with New Password", body: "Return to the login screen and use your mobile number plus the new password. Login should succeed immediately." },
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

      {/* OTP Issues */}
      <section className="section-padding bg-primary-50" id="otp-issues">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4">OTP Not Received — 6 Things to Try</h2>
          <p className="text-text-secondary mb-6">OTP delivery failures are the most reported login issue. Work through these checks in order before contacting support:</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { num: "1", fix: "Check signal strength", detail: "OTP SMS delivery requires at least 1 bar of mobile signal. Move to an open area if you're indoors with weak signal." },
              { num: "2", fix: "Check the correct number", detail: "Confirm you entered your number with the right country code. A wrong digit means the OTP went to a different number entirely." },
              { num: "3", fix: "Check SMS spam/blocked messages", detail: "Some Android phones auto-filter promotional or unknown sender messages. Check your SMS spam folder or blocked messages list." },
              { num: "4", fix: "Wait the full 60 seconds", detail: "OTPs can take up to 60 seconds during peak hours. Don't request a second OTP too soon — duplicate OTPs can cause confusion." },
              { num: "5", fix: "Disable DND or call forwarding", detail: "Do Not Disturb mode on some phones blocks SMS. Call forwarding can also reroute SMS. Check both settings if OTPs consistently fail." },
              { num: "6", fix: "Contact your carrier", detail: "Rarely, carriers block short-code SMS messages. Call your carrier and ask them to enable short-code SMS reception on your line." },
            ].map(({ num, fix, detail }) => (
              <div key={num} className="card-static p-4 flex gap-3">
                <span className="step-number flex-shrink-0">{num}</span>
                <div>
                  <h3 className="font-semibold text-text-primary mb-1 text-sm">{fix}</h3>
                  <p className="text-text-muted text-xs">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Account Locked */}
      <section className="section-padding" id="account-locked">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Account Locked — Understanding and Resolving</h2>
          <p className="text-text-secondary mb-6">Rajluck locks accounts automatically under two circumstances:</p>
          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            <div className="card">
              <h3 className="font-bold text-primary mb-2">Temporary Lock (15 minutes)</h3>
              <p className="text-text-secondary text-sm">Triggered by 5 consecutive failed login attempts. The account unlocks automatically after 15 minutes. No action needed — just wait and then try again with the correct details.</p>
            </div>
            <div className="card">
              <h3 className="font-bold text-primary mb-2">Security Hold</h3>
              <p className="text-text-secondary text-sm">Triggered when the system detects unusual activity such as login attempts from multiple countries in a short time. Contact Rajluck support with your identity verification to lift a security hold.</p>
            </div>
          </div>
          <div className="card-static p-5 bg-primary-50">
            <h3 className="font-semibold text-text-primary mb-2">How to Avoid Future Lockouts</h3>
            <ul className="text-text-secondary text-sm space-y-1">
              <li>• Use 'Forgot Password' immediately if you're unsure of your password — don't guess repeatedly</li>
              <li>• Enable biometric login so you never type your password on a touch screen where typos are common</li>
              <li>• Use the 'Remember Me' function on your personal device to reduce manual login frequency</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Wrong Number / Session Expired */}
      <section className="section-padding bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-6">Other Common Login Issues</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="card" id="wrong-number">
              <h3 className="font-bold text-primary mb-3">Registered with the Wrong Number</h3>
              <p className="text-text-secondary text-sm mb-3">If you registered with a number you no longer have access to, recovery is more complex. You will need to contact Rajluck support and provide:</p>
              <ul className="text-text-muted text-xs space-y-1">
                <li>• The approximate date of registration</li>
                <li>• Your username or email if provided during setup</li>
                <li>• Proof of the new number you want to link</li>
              </ul>
            </div>
            <div className="card" id="session-expired">
              <h3 className="font-bold text-primary mb-3">Session Expired — How to Re-Login</h3>
              <p className="text-text-secondary text-sm mb-3">Sessions expire after 30 days of inactivity. An expired session shows as "Session expired, please login again." This is normal and not a security issue. Simply:</p>
              <ul className="text-text-muted text-xs space-y-1">
                <li>• Enter your mobile number and password as normal</li>
                <li>• Or use the OTP login option for passwordless access</li>
                <li>• Enable biometric login after re-entry to prevent this in future</li>
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
              { q: "I changed my phone number. How do I update it on my Rajluck account?", a: "Login using your old number first. Go to Account Settings → Contact Information → Change Mobile Number. You'll need to verify both the old and new numbers via OTP." },
              { q: "The login page loads but the Login button doesn't respond. What's happening?", a: "This is usually a cache issue. Clear the Rajluck app cache under Settings → Apps → Rajluck Game → Clear Cache. If using a browser, clear browser cache and cookies then retry." },
              { q: "Can I use my email address to log in instead of my phone number?", a: "Currently Rajluck Login uses mobile number as the primary identifier. Email address can be added to your account as a secondary contact but is not a login method." },
              { q: "After entering my OTP I get 'Invalid OTP'. Why?", a: "OTPs expire after 5 minutes. If you waited too long before entering it, request a fresh one. Also make sure you're entering the most recent OTP if you requested more than one." },
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
        <h2 className="text-3xl font-bold text-text-primary mb-4">Issue Resolved? Login Now</h2>
        <p className="text-text-secondary mb-6 max-w-xl mx-auto">Once your login issue is sorted, tap below to access your Rajluck account and start playing.</p>
        <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta inline-block px-8 py-4 text-lg">
          Login to Rajluck
        </a>
      </section>

      {/* Internal Links */}
      <section className="section-padding bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-text-primary mb-4">Related Help Guides</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/rajluck-game-login" className="btn-outline text-sm px-4 py-2">Login Security Best Practices</Link>
            <Link href="/rajluck-register" className="btn-outline text-sm px-4 py-2">Eligibility & Registration</Link>
            <Link href="/rajluck-game-download" className="btn-outline text-sm px-4 py-2">Download the App</Link>
            <Link href="/rajluck-game-2026" className="btn-outline text-sm px-4 py-2">2026 Updates</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
