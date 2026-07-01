"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import MobileMenu from "./MobileMenu";

const CTA_LINK = "https://share-rxapq9cajg.rajluck.co/web/share/index.html?ic=AA0DL7ND&ts=1782835740&m=2&lang=en&id=1";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Download", href: "/download" },
  { name: "About", href: "/about" },
  { name: "Features", href: "/features" },
  { name: "Blog", href: "/blog" },
];

const allRoutes = [
  "/",
  "/download",
  "/about",
  "/features",
  "/blog",
  "/blog/rajluck-game-complete-guide",
  "/blog/rajluck-apk-download-android",
  "/blog/rajluck-game-register-login",
  "/rajluck",
  "/raj-luck",
  "/raj-luck-game",
  "/rajluckgame",
  "/rajluckgamers",
  "/raj-luck-gamers",
  "/rajluckapk",
  "/raj-luck-apk",
  "/raj-luck-game-apk",
  "/rajluckgameapk",
  "/rajluckgameapkdownload",
  "/raj-luck-game-apk-download",
  "/rajluckapkdownload",
  "/rajluck-apk-download",
  "/rajluck-game-download",
  "/rajluck-game-login",
  "/rajluck-game-register",
  "/rajluck-game-app",
  "/rajluck-game-2026",
  "/rajluck-game-android",
  "/rajluck-app-download",
  "/rajluck-login",
  "/rajluck-register",
  "/download-rajluck",
  "/rajluck-game-online",
  "/rajluck-game-play",
  "/rajluck-game-bonus",
  "/rajluck-game-install",
  "/rajluck-game-free",
  "/rajluck-game-latest-version",
  "/rajluck-game-update",
  "/rajluck-download",
  "/rajluck-game-apk-download",
  "/rajluck-game-rewards",
  "/privacy-policy",
  "/disclaimer",
];

export default function Header() {
  const router = useRouter();

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    // Wait 5 seconds, then prefetch all routes in a staggered manner
    const mainTimer = setTimeout(() => {
      allRoutes.forEach((route, index) => {
        const routeTimer = setTimeout(() => {
          router.prefetch(route);
        }, index * 100); // 100ms stagger between each route prefetch
        timers.push(routeTimer);
      });
    }, 5000);

    return () => {
      clearTimeout(mainTimer);
      timers.forEach(clearTimeout);
    };
  }, [router]);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border-light shadow-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <a
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 group"
          >
            <Image
              src="/logo.webp"
              alt="Rajluck Game Logo"
              width={36}
              height={36}
              className="w-9 h-9 rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
              priority
            />
            <span className="text-lg font-bold text-text-primary tracking-tight">
              Rajluck<span className="text-primary">Game</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-text-secondary hover:text-primary hover:bg-primary-50 transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
            <a
              href={CTA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 btn-cta !py-2.5 !px-5 !text-sm !rounded-lg"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download APK
            </a>
          </nav>

          {/* Mobile Menu (client component) */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
