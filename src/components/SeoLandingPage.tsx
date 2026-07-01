import Image from "next/image";
import Link from "next/link";

const CTA_LINK = "https://share-rxapq9cajg.rajluck.co/web/share/index.html?ic=AA0DL7ND&ts=1782835740&m=2&lang=en&id=1";

const features = [
  { icon: "📱", title: "Easy Registration", desc: "Create your Rajluck Game account in just a few simple steps." },
  { icon: "🔐", title: "Secure Login", desc: "Log in safely to your Rajluck account using your mobile number." },
  { icon: "⚡", title: "Fast Performance", desc: "Enjoy smooth, responsive gameplay on all Android devices." },
  { icon: "🔄", title: "Regular Updates", desc: "Get the latest Rajluck APK with new features and improvements." },
  { icon: "🎁", title: "Promotions & Rewards", desc: "Discover welcome offers, referral benefits, and daily rewards." },
  { icon: "🛡️", title: "Account Security", desc: "Advanced protection keeps your Rajluck Game account safe." },
];

const steps = [
  "Visit rajluckgamers.com or download the Rajluck APK directly.",
  "Install the Rajluck Game app on your Android device.",
  "Register a new account with your mobile number.",
  "Log in to your Rajluck Game dashboard.",
  "Explore games, features, and promotional offers.",
];

interface SeoLandingPageProps {
  keyword: string;
  heading: string;
  subheading: string;
  description: string;
}

export default function SeoLandingPage({ keyword, heading, subheading, description }: SeoLandingPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-5 sm:py-10 relative">
          <div className="text-center  mx-auto">
            <Image
              src="/logo.webp"
              alt={`${keyword} Logo`}
              width={160}
              height={160}
              className="w-[100px] sm:w-[180px] mx-auto mb-6 drop-shadow-2xl animate-fade-in"
              priority
            />
            <span className="inline-block px-2 sm:px-4 py-1.5 rounded-full bg-white/20 text-black text-sm font-medium mb-3 sm:mb-4 animate-fade-in backdrop-blur-sm">
              {subheading}
            </span>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-black leading-tight mb-4 sm:mb-6 animate-slide-up">
              {heading}
            </h1>
            <p className="text-sm sm:text-xl text-black leading-relaxed mb-4 sm:mb-5 animate-slide-up delay-200 mx-auto">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta !text-lg !py-4 !px-10">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download {keyword} APK
              </a>
              <Link href="/features" className="btn-outline !border-black !text-black hover:!bg-white hover:!text-primary !text-lg !py-2 sm:!py-4 !px-10">
                Explore Features
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" className="w-full">
            <path d="M0 40L48 35C96 30 192 20 288 22C384 25 480 40 576 48C672 55 768 55 864 48C960 40 1056 25 1152 22C1248 20 1344 30 1392 35L1440 40V100H0V40Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary text-sm font-medium mb-4">
              About {keyword}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-5">
              What is {keyword}?
            </h2>
          </div>
          <div className="card-static p-6 sm:p-10 space-y-5">
            <p className="text-text-secondary leading-relaxed text-base sm:text-lg">
              <strong>{keyword}</strong> is a mobile-friendly gaming platform designed for Android users. Also known as Rajluck Game, RajluckGame, or Rajluck App, this platform brings together multiple entertainment options in one easy-to-use application. Whether you search for <em>Rajluck</em>, <em>Raj Luck</em>, <em>Raj Luck Game</em>, or <em>RajluckGamers</em> — you&apos;ll find everything you need right here at rajluckgamers.com.
            </p>
            <p className="text-text-secondary leading-relaxed text-base sm:text-lg">
              The {keyword} platform offers an easy registration process, quick account access via mobile number login, and a clean, modern interface. Users can explore different gaming categories, manage their profiles, and stay updated with the latest promotions and platform announcements.
            </p>
            <p className="text-text-secondary leading-relaxed text-base sm:text-lg">
              Download the latest {keyword} APK from rajluckgamers.com to enjoy the best gaming experience. The application is regularly updated to enhance speed, stability, security, and overall user satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
              {keyword} Features
            </h2>
            <p className="text-text-secondary  mx-auto">
              Discover what makes {keyword} one of the best mobile gaming platforms for Android.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="card p-7">
                <span className="text-3xl mb-4 block">{f.icon}</span>
                <h3 className="text-lg font-bold text-text-primary mb-2">{f.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="section-padding bg-white">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary text-sm font-medium mb-4">
              Getting Started
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
              How to Download & Use {keyword}
            </h2>
          </div>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="step-number">{i + 1}</div>
                <p className="text-text-secondary pt-2">{step}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta inline-flex">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download {keyword} APK Now
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-surface">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
              {keyword} – Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {[
              { q: `What is ${keyword}?`, a: `${keyword} is a mobile gaming platform for Android. Also known as Rajluck Game, RajluckGame, Raj Luck Game, or Rajluck App — it offers gaming, easy registration, secure login, and regular promotions.` },
              { q: `How do I download ${keyword} APK?`, a: `Visit rajluckgamers.com and click the Download APK button. The latest ${keyword} APK is always available for free download on Android devices.` },
              { q: `Is ${keyword} free to use?`, a: `Yes, registration on ${keyword} is free. You can create your account and start exploring the platform without any registration fee.` },
              { q: `Is ${keyword} safe?`, a: `Yes, ${keyword} uses advanced security features to protect user accounts and personal information. Always download from rajluckgamers.com for the safest experience.` },
              { q: `How do I login to ${keyword}?`, a: `Open the ${keyword} app, enter your registered mobile number and password, then tap Login to access your dashboard.` },
            ].map((faq, i) => (
              <div key={i} className="card-static p-6">
                <h3 className="font-bold text-text-primary mb-2">{faq.q}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section-padding bg-white">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-6">
            Explore More About {keyword}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Home", href: "/" },
              { name: "Download APK", href: "/download" },
              { name: "Features", href: "/features" },
              { name: "About", href: "/about" },
              { name: "Blog", href: "/blog" },
              { name: "Rajluck", href: "/rajluck" },
              { name: "Raj Luck Game", href: "/raj-luck-game" },
              { name: "RajluckGamers", href: "/rajluckgamers" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg bg-primary-50 text-primary text-sm font-medium hover:bg-primary hover:text-white transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
