import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rajluck Game Register – Create Your Account Free 2026",
  description: "Rajluck Game Register — create your free Rajluck Game account in minutes. Step-by-step registration guide, mobile verification, and account setup tips. rajluck game register, rajluck register, rajluck sign up.",
  keywords: ["Rajluck Game Register", "Rajluck Register", "Rajluck Game sign up", "create Rajluck account", "Rajluck registration", "Rajluck Game", "Rajluck", "Raj Luck Register", "Raj Luck Game Register", "RajluckGamers"],
  openGraph: { title: "Rajluck Game Register – Create Your Account Free 2026", description: "Register your Rajluck Game account for free. Guide at rajluckgamers.com.", url: "https://rajluckgamers.com/rajluck-game-register", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Rajluck Game Register" }] },
  twitter: { card: "summary_large_image", title: "Rajluck Game Register", images: ["/og-image.png"] },
  alternates: { canonical: "https://rajluckgamers.com/rajluck-game-register" },
};

const CTA_LINK = "https://share-rxapq9cajg.rajluck.co/web/share/index.html?ic=AA64CBGV&ts=1783054980&m=2&lang=en&id=1";

export default function Page() {
  return (
    <main>
      {/* Hero */}
      <section className="hero-gradient section-padding text-center">
        <Image src="/logo.webp" alt="Rajluck Game Register" width={160} height={160} className="w-[100px] sm:w-[180px] mx-auto mb-6 drop-shadow-2xl animate-fade-in" priority />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-black mb-4 animate-slide-up">
          Rajluck Game Registration<br />Complete Walkthrough
        </h1>
        <p className="text-lg text-black/80 max-w-2xl mx-auto mb-8">
          New to Rajluck Game? This guide walks you through every stage of the registration process — from entering your mobile number to completing your profile, choosing a username, and configuring your initial account settings.
        </p>
        <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta text-lg px-8 py-4 inline-block">
          Register Your Free Account
        </a>
      </section>

      {/* What You Need */}
      <section className="section-padding bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4 gradient-text">What You Need Before Registering</h2>
          <p className="text-text-secondary mb-6">Gathering everything beforehand makes registration smooth and uninterrupted. Have these ready before you open the registration form:</p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { item: "Active Mobile Number", detail: "Your phone number is your account identifier. It must be able to receive SMS. Use a number you have long-term access to." },
              { item: "Stable Internet Connection", detail: "Registration including OTP delivery takes about 2 minutes. A WiFi or 4G connection ensures the form submits without timeout errors." },
              { item: "Your Preferred Username", detail: "Think of a unique display name in advance. Usernames must be 5–20 characters, letters and numbers only, no spaces." },
            ].map(({ item, detail }) => (
              <div key={item} className="card text-center">
                <h3 className="font-bold text-text-primary mb-2">{item}</h3>
                <p className="text-text-secondary text-sm">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Flow */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">The Full Registration Flow</h2>
          <div className="space-y-5">
            {[
              { step: "1", title: "Open the Registration Page", body: "Tap the Register button on the Rajluck Game app home screen or visit our registration link. The page loads in under 3 seconds on any modern device." },
              { step: "2", title: "Enter Your Mobile Number", body: "Select your country code from the dropdown. Type your mobile number without leading zeros. Double-check it before continuing — this becomes your permanent login ID." },
              { step: "3", title: "Mobile Verification via OTP", body: "Tap 'Send OTP'. A 6-digit code arrives by SMS within 30–60 seconds. Enter it into the OTP field. Codes expire after 5 minutes — request a new one if needed." },
              { step: "4", title: "Choose a Username", body: "Pick a unique display name that will appear on your profile and in leaderboards. It must be 5–20 characters using only letters (A-Z, a-z) and numbers (0-9)." },
              { step: "5", title: "Set a Secure Password", body: "Create a password of at least 8 characters mixing uppercase, lowercase, numbers, and symbols. Avoid dictionary words or personal details like your birthdate." },
              { step: "6", title: "Complete Profile Setup", body: "Optionally add a profile photo and display language preference. These settings can be changed later under My Profile → Edit Profile." },
              { step: "7", title: "Accept Terms and Submit", body: "Review the Terms of Service and Privacy Policy, check the acceptance box, and tap 'Create Account'. Your account is now active immediately." },
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

      {/* Username Guide */}
      <section className="section-padding bg-primary-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Choosing the Right Username</h2>
          <p className="text-text-secondary mb-6">Your username is permanent — choose it carefully. Here are some tips to pick one you'll be happy with long-term:</p>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="card">
              <h3 className="font-bold text-primary mb-3">Good Username Practices</h3>
              <ul className="text-text-secondary text-sm space-y-2">
                <li>✔ Keep it short and memorable (6–12 chars)</li>
                <li>✔ Mix letters and numbers for uniqueness</li>
                <li>✔ Avoid personal info like full name or birthdate</li>
                <li>✔ Check availability before committing</li>
                <li>✔ Think about how it reads on a leaderboard</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="font-bold text-primary mb-3">Username Rules</h3>
              <ul className="text-text-secondary text-sm space-y-2">
                <li>✗ No spaces or special characters</li>
                <li>✗ Cannot start with a number</li>
                <li>✗ Cannot duplicate an existing username</li>
                <li>✗ No offensive or prohibited words</li>
                <li>✗ Cannot be changed after 30 days</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Initial Account Settings */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Configuring Initial Account Settings</h2>
          <p className="text-text-secondary mb-6">After registration, spend 2 minutes in the settings panel to configure these important options before you start playing:</p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { setting: "Notification Preferences", tip: "Enable game result and bonus notifications. Disable promotional messages if you prefer a quieter experience. Find this under Settings → Notifications." },
              { setting: "Language Selection", tip: "Rajluck Game supports multiple languages. Set your preferred language under Settings → Display → Language for localised content and support." },
              { setting: "Login Security Level", tip: "Navigate to Account Security and enable 2-step verification immediately after registration to protect your account from the first day." },
              { setting: "Deposit & Withdrawal PIN", tip: "Set a separate 4-digit PIN for financial transactions. This PIN is required for every withdrawal, adding a layer of protection for your funds." },
            ].map(({ setting, tip }) => (
              <div key={setting} className="card-static p-5">
                <h3 className="font-semibold text-text-primary mb-2">{setting}</h3>
                <p className="text-text-secondary text-sm">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-surface">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {[
              { q: "Can I register with an overseas mobile number?", a: "Yes, Rajluck Game supports international phone numbers. Select the correct country code from the dropdown during registration. OTP delivery works with most international carriers." },
              { q: "I didn't receive my OTP. What should I try?", a: "First check your SMS inbox and spam folder. Make sure you entered the correct number. Wait 60 seconds then request a new OTP. If still nothing, try on WiFi to rule out network issues." },
              { q: "Can I have more than one account?", a: "One account per mobile number is allowed. Creating duplicate accounts violates the Terms of Service and may result in both accounts being permanently suspended." },
              { q: "Is there an age requirement to register?", a: "Users must be 18 years of age or older to register a Rajluck Game account. By submitting the registration form you confirm you meet this requirement." },
              { q: "How do I change my username after registration?", a: "You have a 30-day window to change your username after registration. After that it becomes permanent. Go to My Profile → Edit Profile → Change Username to update it within the allowed period." },
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
        <h2 className="text-3xl font-bold text-text-primary mb-4">Create Your Account Now</h2>
        <p className="text-text-secondary mb-6 max-w-xl mx-auto">Registration takes under 3 minutes. Your account is free and ready to use immediately after mobile verification.</p>
        <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta inline-block px-8 py-4 text-lg">
          Register Free with Rajluck Game
        </a>
      </section>

      {/* Internal Links */}
      <section className="section-padding bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-text-primary mb-4">More Helpful Guides</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/rajluck-register" className="btn-outline text-sm px-4 py-2">Eligibility & Requirements</Link>
            <Link href="/rajluck-game-login" className="btn-outline text-sm px-4 py-2">Login Security Guide</Link>
            <Link href="/rajluck-game-download" className="btn-outline text-sm px-4 py-2">Download the APK</Link>
            <Link href="/rajluck-game-app" className="btn-outline text-sm px-4 py-2">App Interface Tour</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
