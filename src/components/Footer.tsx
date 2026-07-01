import Image from "next/image";
import Link from "next/link";

const CTA_LINK = "https://share-rxapq9cajg.rajluck.co/web/share/index.html?ic=AA0DL7ND&ts=1782835740&m=2&lang=en&id=1";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Download", href: "/download" },
  { name: "About", href: "/about" },
  { name: "Features", href: "/features" },
  { name: "Blog", href: "/blog" },
  { name: "Complete Guide", href: "/blog/rajluck-game-complete-guide" },
  { name: "APK Download Guide", href: "/blog/rajluck-apk-download-android" },
  { name: "Register & Login", href: "/blog/rajluck-game-register-login" },
];

const rajluckLinks = [
  { name: "Rajluck", href: "/rajluck" },
  { name: "Raj Luck", href: "/raj-luck" },
  { name: "Raj Luck Game", href: "/raj-luck-game" },
  { name: "RajluckGame", href: "/rajluckgame" },
  { name: "RajluckGamers", href: "/rajluckgamers" },
  { name: "Raj Luck Gamers", href: "/raj-luck-gamers" },
];

const apkLinks = [
  { name: "Rajluck APK", href: "/rajluckapk" },
  { name: "Raj Luck APK", href: "/raj-luck-apk" },
  { name: "Raj Luck Game APK", href: "/raj-luck-game-apk" },
  { name: "Rajluck Game APK", href: "/rajluckgameapk" },
  { name: "Rajluck APK Download", href: "/rajluck-apk-download" },
  { name: "Rajluck Game APK Download", href: "/rajluckgameapkdownload" },
  { name: "Raj Luck Game APK Download", href: "/raj-luck-game-apk-download" },
  { name: "Rajluck APK Download", href: "/rajluckapkdownload" },
  { name: "Rajluck Game Download", href: "/rajluck-game-download" },
  { name: "Rajluck App Download", href: "/rajluck-app-download" },
  { name: "Download Rajluck", href: "/download-rajluck" },
  { name: "Rajluck Download", href: "/rajluck-download" },
  { name: "Rajluck Game APK Download", href: "/rajluck-game-apk-download" },
  { name: "Rajluck Game Install", href: "/rajluck-game-install" },
  { name: "Rajluck Game Latest Version", href: "/rajluck-game-latest-version" },
  { name: "Rajluck Game Update", href: "/rajluck-game-update" },
];

const moreLinks = [
  { name: "Rajluck Game Login", href: "/rajluck-game-login" },
  { name: "Rajluck Login", href: "/rajluck-login" },
  { name: "Rajluck Game Register", href: "/rajluck-game-register" },
  { name: "Rajluck Register", href: "/rajluck-register" },
  { name: "Rajluck Game App", href: "/rajluck-game-app" },
  { name: "Rajluck Game 2026", href: "/rajluck-game-2026" },
  { name: "Rajluck Game Android", href: "/rajluck-game-android" },
  { name: "Rajluck Game Online", href: "/rajluck-game-online" },
  { name: "Rajluck Game Play", href: "/rajluck-game-play" },
  { name: "Rajluck Game Bonus", href: "/rajluck-game-bonus" },
  { name: "Rajluck Game Rewards", href: "/rajluck-game-rewards" },
  { name: "Rajluck Game Free", href: "/rajluck-game-free" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Disclaimer", href: "/disclaimer" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      {/* CTA Banner */}
      <div className="hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to Get Started?
          </h3>
          <p className="text-red-100 mb-6  mx-auto">
            Download the Rajluck Game APK now and explore the complete gaming experience on your Android device.
          </p>
          <a
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary font-bold py-3.5 px-8 rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Now
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a
              href={CTA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 mb-4 group"
            >
              <Image src="/logo.webp" alt="Rajluck Game Logo" width={36} height={36} className="w-9 h-9 rounded-lg shadow-md" />
              <span className="text-lg font-bold text-white tracking-tight">
                Rajluck<span className="text-red-400">Game</span>
              </span>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Rajluck Game is a mobile-friendly gaming platform offering a clean interface, easy registration, and a smooth experience for Android users.
            </p>
            <a
              href="https://mmyapk.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-red-400 hover:text-red-300 font-medium transition-colors"
            >
              MMY Game →
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-red-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rajluck Pages */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Rajluck
            </h4>
            <ul className="space-y-2.5">
              {rajluckLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-red-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* APK Downloads */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              APK Download
            </h4>
            <ul className="space-y-2.5">
              {apkLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-red-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Pages */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              More
            </h4>
            <ul className="space-y-2.5">
              {moreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-red-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-red-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-gray-800 rounded-xl border border-gray-700">
              <p className="text-xs text-gray-500 leading-relaxed">
                <strong className="text-gray-400">Important:</strong> This website is created for informational purposes only and is not affiliated with or operated by the official Rajluck Game platform.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-500">
            Copyright © 2026 rajluckgamers.com | All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-xs text-gray-500 hover:text-gray-400 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-700">|</span>
            <Link href="/disclaimer" className="text-xs text-gray-500 hover:text-gray-400 transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
