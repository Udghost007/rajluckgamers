import type { Metadata } from "next";
import SeoApkPage from "@/components/SeoApkPage";

export const metadata: Metadata = {
  title: "Rajluck Game APK Download – Free Android Download 2026",
  description: "Rajluck Game APK Download — get the latest version free for Android. Step-by-step download guide for Rajluck APK, Raj Luck Game APK, Raj Luck APK Download. Official source: rajluckgamers.com.",
  keywords: ["Rajluck Game APK Download", "Rajluck APK Download", "Raj Luck Game APK Download", "Raj Luck APK Download", "Rajluck APK", "Rajluck Game APK", "Rajluck", "Rajluck Game", "Raj Luck", "RajluckGamers", "rajluckgamers"],
  openGraph: { title: "Rajluck Game APK Download – Free for Android 2026", description: "Download Rajluck Game APK free at rajluckgamers.com.", url: "https://rajluckgamers.com/rajluckgameapkdownload", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Rajluck Game APK Download" }] },
  twitter: { card: "summary_large_image", title: "Rajluck Game APK Download", description: "Free Rajluck Game APK download at rajluckgamers.com.", images: ["/og-image.png"] },
  alternates: { canonical: "https://rajluckgamers.com/rajluckgameapkdownload" },
};

export default function Page() {
  return <SeoApkPage keyword="Rajluck Game APK" heading="Rajluck Game APK Download – Free for Android" subheading="Rajluck Game APK Download • Free • Latest Version" description="Download the latest Rajluck Game APK for free. Quick installation guide, secure download from rajluckgamers.com." />;
}
