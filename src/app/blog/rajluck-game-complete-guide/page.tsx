import type { Metadata } from "next";
import Link from "next/link";

const CTA_LINK = "https://share-rxapq9cajg.rajluck.co/web/share/index.html?ic=AA0DL7ND&ts=1782835740&m=2&lang=en&id=1";

export const metadata: Metadata = {
  title: "Rajluck Game Complete Guide 2026 – Everything You Need to Know",
  description:
    "Complete guide to Rajluck Game covering rajluck game download, rajluck apk, rajluck game register, rajluck game login, features, promotions, and tips. Everything you need to know about the Rajluck App and RajluckGame in 2026.",
  keywords: [
    "Rajluck Game guide",
    "Rajluck Game complete guide",
    "how to use Rajluck Game",
    "Rajluck APK guide 2026",
    "Rajluck Game tutorial",
    "Rajluck Game tips",
    "Rajluck",
    "RajluckGame",
    "Rajluck Game",
    "Rajluck APK",
    "Rajluck App",
    "Rajluck Game download",
    "Rajluck Game login",
    "Rajluck Game register",
    "Raj Luck",
    "Raj Luck Game",
    "Raj Luck Gamers",
  ],
  openGraph: {
    title: "Rajluck Game Complete Guide 2026 – Everything You Need to Know",
    description: "Complete guide to Rajluck Game covering download, registration, login, features, promotions, and tips for the Rajluck App on Android.",
    url: "https://rajluckgamers.com/blog/rajluck-game-complete-guide",
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rajluck Game Complete Guide 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajluck Game Complete Guide 2026 – Everything You Need to Know",
    description: "Complete guide to Rajluck Game covering download, registration, login, features, promotions, and tips for the Rajluck App on Android.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://rajluckgamers.com/blog/rajluck-game-complete-guide" },
};

export default function RajluckGameGuide() {
  return (
    <>
      <article>
        {/* Hero */}
        <header className="hero-gradient-soft">
          <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-primary-100 text-primary text-xs font-semibold">Guide</span>
              <span className="text-sm text-text-muted">June 28, 2026</span>
              <span className="text-sm text-text-muted">•</span>
              <span className="text-sm text-text-muted">8 min read</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-text-primary leading-tight mb-4">
              Rajluck Game Complete Guide 2026 – Everything You Need to Know
            </h1>
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed ">
              A comprehensive guide covering everything about Rajluck Game — from downloading the APK to exploring features, managing your account, and making the most of promotions.
            </p>
          </div>
        </header>

        {/* Content */}
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="flex-1 min-w-0">
              {/* Table of Contents */}
              <nav className="card-static p-5 sm:p-6 mb-8">
                <h2 className="font-bold text-text-primary mb-3">Table of Contents</h2>
                <ul className="space-y-2 text-sm">
                  {[
                    "What is Rajluck Game?",
                    "Key Features",
                    "How to Download",
                    "Registration Process",
                    "Login Instructions",
                    "Rewards & Promotions",
                    "Tips for Users",
                  ].map((item, i) => (
                    <li key={i}>
                      <span className="text-primary hover:text-primary-dark cursor-default flex items-center gap-2">
                        <span className="w-5 h-5 rounded bg-primary-50 text-primary text-xs flex items-center justify-center font-bold">{i + 1}</span>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Section 1 */}
              <section className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-4">What is Rajluck Game?</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Rajluck Game is a mobile-friendly gaming platform that brings together multiple entertainment options in one application. Built for Android users, the platform offers an easy registration process, quick account access, and a clean interface that makes navigation simple for beginners as well as experienced users.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  Whether you&apos;re looking for the latest Rajluck Game APK, download instructions, account registration, or information about available rewards, Rajluck Game provides a complete ecosystem for mobile gaming enthusiasts.
                </p>
              </section>

              {/* Section 2 */}
              <section className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-4">Key Features of Rajluck Game</h2>
                <p className="text-text-secondary leading-relaxed mb-5">
                  The Rajluck Game platform stands out with its comprehensive feature set designed for user convenience:
                </p>
                <div className="grid gap-3">
                  {[
                    { icon: "⚡", title: "Fast Registration", desc: "Create an account in just a few steps" },
                    { icon: "🔒", title: "Secure Login", desc: "Protected access with mobile verification" },
                    { icon: "🎨", title: "Clean Dashboard", desc: "Modern and intuitive user interface" },
                    { icon: "🎁", title: "Regular Promotions", desc: "Welcome offers, referrals, and seasonal events" },
                    { icon: "📱", title: "Android Optimized", desc: "Smooth performance on Android devices" },
                    { icon: "🛡️", title: "Account Security", desc: "Advanced protection for your information" },
                  ].map((f, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-surface rounded-xl">
                      <span className="text-xl">{f.icon}</span>
                      <div>
                        <h3 className="font-semibold text-text-primary text-sm">{f.title}</h3>
                        <p className="text-text-muted text-sm">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 3 */}
              <section className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-4">How to Download Rajluck Game APK</h2>
                <p className="text-text-secondary leading-relaxed mb-5">
                  Downloading the Rajluck Game APK is straightforward. Follow these steps for a safe and smooth installation:
                </p>
                <ol className="space-y-3">
                  {[
                    "Download the latest available version from a trusted source.",
                    "Verify the source is reliable before proceeding.",
                    "Confirm your device meets compatibility requirements.",
                    "Enable installation from unknown sources if prompted.",
                    "Install the APK and launch the application.",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="step-number !w-8 !h-8 !text-sm">{i + 1}</span>
                      <p className="text-text-secondary pt-1">{step}</p>
                    </li>
                  ))}
                </ol>
                <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta mt-6 inline-flex">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Rajluck APK
                </a>
              </section>

              {/* Section 4 */}
              <section className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-4">Registration Process</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  New users can create an account by following these simple steps:
                </p>
                <div className="card-static p-5 sm:p-6">
                  <ol className="space-y-3">
                    {[
                      "Open the registration page in the application.",
                      "Enter your mobile number.",
                      "Create a secure password.",
                      "Complete the required verification process.",
                      "Submit your registration form.",
                      "Sign in to your new account and start exploring.",
                    ].map((step, i) => (
                      <li key={i} className="flex items-start gap-3 text-text-secondary">
                        <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </section>

              {/* Section 5 */}
              <section className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-4">Login Instructions</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Accessing your Rajluck Game account is simple and secure:
                </p>
                <div className="card-static p-5 sm:p-6">
                  <ol className="space-y-3">
                    {[
                      "Launch the Rajluck Game application.",
                      "Enter your registered mobile number.",
                      "Type your password or verification code.",
                      "Tap the Login button.",
                      "Access your account dashboard.",
                    ].map((step, i) => (
                      <li key={i} className="flex items-start gap-3 text-text-secondary">
                        <span className="w-6 h-6 rounded-full bg-accent/10 text-accent-dark text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </section>

              {/* Section 6 */}
              <section className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-4">Rewards &amp; Promotions</h2>
                <p className="text-text-secondary leading-relaxed mb-5">
                  Rajluck Game offers various promotional benefits depending on ongoing campaigns:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { icon: "🎉", label: "Welcome Offers" },
                    { icon: "📋", label: "Registration Rewards" },
                    { icon: "🤝", label: "Referral Benefits" },
                    { icon: "📅", label: "Daily Rewards" },
                    { icon: "🎊", label: "Festival Promotions" },
                    { icon: "⭐", label: "Event Bonuses" },
                  ].map((r, i) => (
                    <div key={i} className="card-static p-4 text-center">
                      <span className="text-2xl mb-1 block">{r.icon}</span>
                      <p className="text-xs font-semibold text-text-primary">{r.label}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 7 */}
              <section className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-4">Tips for Users</h2>
                <div className="grid gap-3">
                  {[
                    "Use a strong password for account safety.",
                    "Update the application regularly for best performance.",
                    "Read all promotional terms carefully before participating.",
                    "Keep your account information private and secure.",
                    "Use only trusted download sources.",
                    "Enjoy gaming responsibly.",
                  ].map((tip, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-surface rounded-lg">
                      <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-text-secondary text-sm">{tip}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="w-full lg:w-72 flex-shrink-0">
              <div className="lg:sticky lg:top-24 space-y-6">
                <div className="card-static p-5 sm:p-6 text-center">
                  <h3 className="font-bold text-text-primary mb-3">Download Rajluck APK</h3>
                  <p className="text-sm text-text-muted mb-4">Get the latest version for Android</p>
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
                      <Link href="/blog/rajluck-apk-download-android" className="text-sm text-primary hover:text-primary-dark font-medium transition-colors">
                        How to Download Rajluck APK on Android →
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/rajluck-game-register-login" className="text-sm text-primary hover:text-primary-dark font-medium transition-colors">
                        How to Register & Login →
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
            headline: "Rajluck Game Complete Guide 2026 – Everything You Need to Know",
            datePublished: "2026-06-28",
            dateModified: "2026-06-28",
            author: { "@type": "Organization", name: "rajluckgamers.com" },
            publisher: { "@type": "Organization", name: "rajluckgamers.com" },
            description: "Complete guide to Rajluck Game covering download, registration, login, features, promotions, and tips.",
            mainEntityOfPage: "https://rajluckgamers.com/blog/rajluck-game-complete-guide",
          }),
        }}
      />
    </>
  );
}
