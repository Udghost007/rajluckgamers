import type { Metadata } from "next";
import SeoApkPage from "@/components/SeoApkPage";

export const metadata: Metadata = {
  title: "Rajluck APK Download – Free Download for Android 2026",
  description: "Rajluck APK Download — free for Android devices. Download the official Rajluck Game APK, also known as Raj Luck APK Download, Raj Luck Game APK Download. Complete guide at rajluckgamers.com.",
  keywords: ["Rajluck APK Download", "Rajluck APK", "Rajluck Game APK Download", "Raj Luck APK Download", "Raj Luck Game APK Download", "Rajluck", "Rajluck Game", "Raj Luck", "Raj Luck Game", "RajluckGamers", "rajluckgamers"],
  openGraph: { title: "Rajluck APK Download – Free for Android 2026", description: "Download Rajluck APK free at rajluckgamers.com.", url: "https://rajluckgamers.com/rajluck-apk-download", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Rajluck APK Download" }] },
  twitter: { card: "summary_large_image", title: "Rajluck APK Download", description: "Free Rajluck APK download at rajluckgamers.com.", images: ["/og-image.png"] },
  alternates: { canonical: "https://rajluckgamers.com/rajluck-apk-download" },
};

export default function Page() {
  return <SeoApkPage keyword="Rajluck APK" heading="Rajluck APK Download – Official Free Download" subheading="Rajluck APK Download • Rajluck Game • Android" description="Download the official Rajluck APK for free. Step-by-step installation guide for Android at rajluckgamers.com." />;
}
