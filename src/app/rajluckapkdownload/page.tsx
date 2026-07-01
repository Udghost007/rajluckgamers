import type { Metadata } from "next";
import SeoApkPage from "@/components/SeoApkPage";

export const metadata: Metadata = {
  title: "Rajluck APK Download – Free Latest Version Android 2026",
  description: "Rajluck APK Download — get the latest Rajluck APK free for Android. Also known as Rajluck Game APK Download, Raj Luck APK Download, Raj Luck Game APK. Official source: rajluckgamers.com.",
  keywords: ["Rajluck APK Download", "Rajluck APK", "Rajluck Game APK Download", "Raj Luck APK Download", "Rajluck Game APK", "Rajluck", "Rajluck Game", "Raj Luck", "Raj Luck Game", "RajluckGamers", "rajluckgamers"],
  openGraph: { title: "Rajluck APK Download – Free for Android 2026", description: "Free Rajluck APK download at rajluckgamers.com.", url: "https://rajluckgamers.com/rajluckapkdownload", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Rajluck APK Download" }] },
  twitter: { card: "summary_large_image", title: "Rajluck APK Download", description: "Free Rajluck APK download at rajluckgamers.com.", images: ["/og-image.png"] },
  alternates: { canonical: "https://rajluckgamers.com/rajluckapkdownload" },
};

export default function Page() {
  return <SeoApkPage keyword="Rajluck APK" heading="Rajluck APK Download – Latest Version Free" subheading="Rajluck APK Download • Free • Android" description="Download the latest Rajluck APK free for Android. Secure, fast download from rajluckgamers.com." />;
}
