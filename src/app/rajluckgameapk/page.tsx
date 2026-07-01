import type { Metadata } from "next";
import SeoApkPage from "@/components/SeoApkPage";

export const metadata: Metadata = {
  title: "RajluckGameAPK – Download Rajluck Game APK for Android 2026",
  description: "Download RajluckGameAPK — the official Rajluck Game APK for Android devices. Also known as Rajluck APK, Raj Luck Game APK, Rajluck Game APK Download. Free at rajluckgamers.com.",
  keywords: ["RajluckGameAPK", "Rajluck Game APK", "Rajluck APK", "Raj Luck Game APK", "Raj Luck APK", "Rajluck", "Rajluck Game", "Raj Luck", "Raj Luck Game", "RajluckGamers", "rajluckgamers"],
  openGraph: { title: "RajluckGameAPK – Download for Android 2026", description: "Download RajluckGameAPK at rajluckgamers.com.", url: "https://rajluckgamers.com/rajluckgameapk", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "RajluckGameAPK" }] },
  twitter: { card: "summary_large_image", title: "RajluckGameAPK Download", description: "Download RajluckGameAPK at rajluckgamers.com.", images: ["/og-image.png"] },
  alternates: { canonical: "https://rajluckgamers.com/rajluckgameapk" },
};

export default function Page() {
  return <SeoApkPage keyword="Rajluck Game APK" heading="Rajluck Game APK – Official Download" subheading="RajluckGameAPK • Rajluck APK • Free Android Download" description="Get the official Rajluck Game APK for Android. Download, install, and enjoy all features of Rajluck Game." />;
}
