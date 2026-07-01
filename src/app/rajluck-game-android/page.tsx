import type { Metadata } from "next";
import SeoLandingPage from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Rajluck Game Android – Download APK for Android Devices 2026",
  description: "Rajluck Game Android — the best gaming platform for Android devices. Download Rajluck Game APK, compatible with all Android phones and tablets. rajluck game android, rajluck android.",
  keywords: ["Rajluck Game Android", "Rajluck Android", "Rajluck Game for Android", "Rajluck APK Android", "Rajluck Game mobile", "Rajluck Game", "Rajluck", "Raj Luck Game Android", "RajluckGamers"],
  openGraph: { title: "Rajluck Game Android – APK for Android 2026", description: "Rajluck Game for Android devices. Download at rajluckgamers.com.", url: "https://rajluckgamers.com/rajluck-game-android", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Rajluck Game Android" }] },
  twitter: { card: "summary_large_image", title: "Rajluck Game Android", images: ["/og-image.png"] },
  alternates: { canonical: "https://rajluckgamers.com/rajluck-game-android" },
};

export default function Page() {
  return <SeoLandingPage keyword="Rajluck Game Android" heading="Rajluck Game Android – Play on Any Android Device" subheading="Rajluck Game Android • Compatible • Optimized" description="Rajluck Game is fully optimized for Android devices. Download the APK and enjoy smooth gaming on any Android phone or tablet." />;
}
