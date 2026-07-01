import type { Metadata } from "next";
import SeoLandingPage from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Rajluck Game Online – Play Rajluck Online on Android 2026",
  description: "Rajluck Game Online — play Rajluck Game on your Android device. Download the app, register, login, and enjoy online gaming. rajluck game online, rajluck online, play rajluck.",
  keywords: ["Rajluck Game Online", "Rajluck Online", "play Rajluck Game", "Rajluck Game play online", "Rajluck Game", "Rajluck", "Raj Luck Game Online", "RajluckGamers"],
  openGraph: { title: "Rajluck Game Online – Play on Android 2026", description: "Play Rajluck Game online. Guide at rajluckgamers.com.", url: "https://rajluckgamers.com/rajluck-game-online", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Rajluck Game Online" }] },
  twitter: { card: "summary_large_image", title: "Rajluck Game Online", images: ["/og-image.png"] },
  alternates: { canonical: "https://rajluckgamers.com/rajluck-game-online" },
};

export default function Page() {
  return <SeoLandingPage keyword="Rajluck Game Online" heading="Rajluck Game Online – Play Anytime, Anywhere" subheading="Rajluck Game Online • Android • Play Now" description="Play Rajluck Game online on your Android device. Download the app, create your account, and start enjoying the gaming experience." />;
}
