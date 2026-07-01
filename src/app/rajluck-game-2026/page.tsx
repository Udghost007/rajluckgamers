import type { Metadata } from "next";
import SeoLandingPage from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Rajluck Game 2026 – Latest Version, Features & Download Guide",
  description: "Rajluck Game 2026 — the latest version with new features, improved performance, and enhanced security. Download Rajluck Game 2026 APK for Android. Complete guide at rajluckgamers.com.",
  keywords: ["Rajluck Game 2026", "Rajluck 2026", "Rajluck Game latest version", "Rajluck Game new version", "Rajluck APK 2026", "Rajluck Game", "Rajluck", "Raj Luck Game 2026", "RajluckGamers"],
  openGraph: { title: "Rajluck Game 2026 – Latest Version & Download", description: "Get Rajluck Game 2026 latest version at rajluckgamers.com.", url: "https://rajluckgamers.com/rajluck-game-2026", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Rajluck Game 2026" }] },
  twitter: { card: "summary_large_image", title: "Rajluck Game 2026", images: ["/og-image.png"] },
  alternates: { canonical: "https://rajluckgamers.com/rajluck-game-2026" },
};

export default function Page() {
  return <SeoLandingPage keyword="Rajluck Game 2026" heading="Rajluck Game 2026 – Latest Version" subheading="Rajluck Game 2026 • New Features • Updated APK" description="Explore Rajluck Game 2026 with the latest features, improved performance, and enhanced security. Download the newest version for Android." />;
}
