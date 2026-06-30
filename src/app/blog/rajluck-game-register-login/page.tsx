import type { Metadata } from "next";
import Link from "next/link";

const CTA_LINK = "https://share-rxapq9cajg.rajluck.co/web/share/index.html?ic=AA0DL7ND&ts=1782835740&m=2&lang=en&id=1";

export const metadata: Metadata = {
  title: "How to Register & Login on Rajluck Game – Complete Tutorial",
  description:
    "Step-by-step instructions for Rajluck Game register and Rajluck Game login. Learn how to create your Rajluck account, complete the rajluck game register process, access your dashboard, and keep your Rajluck App account secure.",
  keywords: [
    "Rajluck Game register",
    "Rajluck Game login",
    "Rajluck Game sign up",
    "how to register Rajluck",
    "Rajluck login process",
    "Rajluck Game account",
    "create Rajluck account",
    "Rajluck",
    "RajluckGame",
    "Rajluck Game",
    "Rajluck App",
    "rajluck game login",
    "rajluck game register",
    "Raj Luck",
    "Raj Luck Game",
    "Raj Luck Gamers",
  ],
  openGraph: {
    title: "How to Register & Login on Rajluck Game – Complete Tutorial",
    description: "Step-by-step instructions for Rajluck Game register and login. Create your account and access the Rajluck App securely.",
    url: "https://rajluckgamers.com/blog/rajluck-game-register-login",
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "How to Register and Login on Rajluck Game",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Register & Login on Rajluck Game – Complete Tutorial",
    description: "Step-by-step instructions for Rajluck Game register and login. Create your account and access the Rajluck App securely.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://rajluckgamers.com/blog/rajluck-game-register-login" },
};

export default function RegisterLoginArticle() {
  return (
    <>
      <article>
        {/* Hero */}
        <header className="hero-gradient-soft">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-primary-100 text-primary text-xs font-semibold">Tutorial</span>
              <span className="text-sm text-text-muted">June 22, 2026</span>
              <span className="text-sm text-text-muted">•</span>
              <span className="text-sm text-text-muted">6 min read</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-text-primary leading-tight mb-4">
              How to Register &amp; Login on Rajluck Game – Complete Tutorial
            </h1>
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-3xl">
              Everything you need to know about creating your Rajluck Game account and securely accessing it.
            </p>
          </div>
        </header>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="flex-1 min-w-0">
              {/* Registration */}
              <section className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                  How to Register on Rajluck Game
                </h2>
                <p className="text-text-secondary leading-relaxed mb-5">
                  Creating a new Rajluck Game account is free, quick, and straightforward. Follow these steps to get started:
                </p>
                <div className="space-y-4">
                  {[
                    {
                      title: "Open the Registration Page",
                      desc: "Launch the Rajluck Game application and navigate to the registration or sign-up page. You can also access it through the official website.",
                    },
                    {
                      title: "Enter Your Mobile Number",
                      desc: "Provide your active mobile number. This will be used as your primary login credential and for account verification purposes.",
                    },
                    {
                      title: "Create a Secure Password",
                      desc: "Choose a strong password that includes a mix of letters, numbers, and special characters. This helps protect your account from unauthorized access.",
                    },
                    {
                      title: "Complete Verification",
                      desc: "You may receive a verification code via SMS on your registered mobile number. Enter this code to verify your identity and complete the process.",
                    },
                    {
                      title: "Submit Your Registration",
                      desc: "Review your information and submit the registration form. Your account will be created instantly upon successful verification.",
                    },
                    {
                      title: "Sign In to Your Account",
                      desc: "Use your registered mobile number and password to log in for the first time. You're now ready to explore Rajluck Game!",
                    },
                  ].map((step, i) => (
                    <div key={i} className="card-static p-5 sm:p-6">
                      <div className="flex items-start gap-4">
                        <div className="step-number flex-shrink-0">{i + 1}</div>
                        <div>
                          <h3 className="font-bold text-text-primary mb-1">{step.title}</h3>
                          <p className="text-text-secondary text-sm leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <hr className="gradient-divider mb-10" />

              {/* Login */}
              <section className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  How to Login on Rajluck Game
                </h2>
                <p className="text-text-secondary leading-relaxed mb-5">
                  Once your account is registered, logging in is simple and secure:
                </p>
                <div className="space-y-4">
                  {[
                    {
                      title: "Launch the Application",
                      desc: "Open the Rajluck Game app from your home screen or app drawer.",
                    },
                    {
                      title: "Enter Mobile Number",
                      desc: "Type in the mobile number you used during registration.",
                    },
                    {
                      title: "Enter Password or Code",
                      desc: "Type your password. Alternatively, you may use a one-time verification code if that option is available.",
                    },
                    {
                      title: "Tap the Login Button",
                      desc: "Press the Login button to authenticate your credentials.",
                    },
                    {
                      title: "Access Your Dashboard",
                      desc: "Upon successful login, you'll be redirected to your account dashboard where you can explore games, manage your profile, and view promotions.",
                    },
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 bg-surface rounded-xl">
                      <span className="w-8 h-8 rounded-full bg-accent/10 text-accent-dark text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="font-semibold text-text-primary text-sm mb-1">{step.title}</h3>
                        <p className="text-text-muted text-sm">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Security Tips */}
              <section className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-4">Account Security Tips</h2>
                <p className="text-text-secondary leading-relaxed mb-5">
                  Keep your Rajluck Game account safe by following these best practices:
                </p>
                <div className="grid gap-3">
                  {[
                    { icon: "🔐", tip: "Use a strong, unique password with at least 8 characters" },
                    { icon: "📱", tip: "Never share your login credentials with anyone" },
                    { icon: "🔄", tip: "Change your password periodically for extra security" },
                    { icon: "⚠️", tip: "Be cautious of phishing attempts and fake websites" },
                    { icon: "🛡️", tip: "Log out from shared or public devices after use" },
                    { icon: "✅", tip: "Keep the app updated for the latest security patches" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 card-static p-4">
                      <span className="text-xl flex-shrink-0">{item.icon}</span>
                      <p className="text-text-secondary text-sm font-medium">{item.tip}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Common Issues */}
              <section className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-4">Common Issues & Solutions</h2>
                <div className="space-y-3">
                  {[
                    { q: "Forgot your password?", a: "Use the 'Forgot Password' option on the login page. You'll receive a reset code on your registered mobile number." },
                    { q: "Not receiving OTP?", a: "Check your network connection and ensure your mobile number is correct. Wait a few minutes and try again." },
                    { q: "Account locked?", a: "If your account is locked due to multiple failed attempts, wait 30 minutes and try again with the correct credentials." },
                    { q: "Registration not working?", a: "Make sure you have a stable internet connection and that you're entering a valid mobile number." },
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-surface rounded-xl">
                      <h3 className="font-semibold text-text-primary text-sm mb-1">{item.q}</h3>
                      <p className="text-text-muted text-sm">{item.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              <div className="text-center">
                <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta inline-flex">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Rajluck Game
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="w-full lg:w-72 flex-shrink-0">
              <div className="lg:sticky lg:top-24 space-y-6">
                <div className="card-static p-5 sm:p-6 text-center">
                  <h3 className="font-bold text-text-primary mb-3">Get Rajluck Game</h3>
                  <p className="text-sm text-text-muted mb-4">Download the latest APK for Android</p>
                  <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta w-full justify-center !text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download Now
                  </a>
                </div>
                <div className="card-static p-5 sm:p-6">
                  <h3 className="font-bold text-text-primary mb-3">Related Articles</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/blog/rajluck-game-complete-guide" className="text-sm text-primary hover:text-primary-dark font-medium transition-colors">
                        Rajluck Game Complete Guide →
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/rajluck-apk-download-android" className="text-sm text-primary hover:text-primary-dark font-medium transition-colors">
                        How to Download APK →
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "How to Register & Login on Rajluck Game – Complete Tutorial",
            datePublished: "2026-06-22",
            dateModified: "2026-06-22",
            author: { "@type": "Organization", name: "rajluckgamers.com" },
            publisher: { "@type": "Organization", name: "rajluckgamers.com" },
            description: "Step-by-step instructions for creating your Rajluck Game account and logging in securely.",
            mainEntityOfPage: "https://rajluckgamers.com/blog/rajluck-game-register-login",
          }),
        }}
      />
    </>
  );
}
