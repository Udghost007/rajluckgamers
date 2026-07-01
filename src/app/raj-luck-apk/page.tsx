import type { Metadata } from "next";
import SeoApkPage from "@/components/SeoApkPage";

export const metadata: Metadata = {
  title: "Raj Luck APK – Download Game for Android 2026",
  description: "Download Raj Luck APK for Android. Get the latest Raj Luck Game APK file, install and start playing. Also known as Rajluck APK, Rajluck Game APK, RajluckGame. Free at rajluckgamers.com.",
  keywords: ["Raj Luck APK", "Raj Luck APK download", "Raj Luck Game APK", "Rajluck APK", "Rajluck Game APK", "Rajluck", "Rajluck Game", "Raj Luck", "Raj Luck Game", "RajluckGamers", "rajluckgamers"],
  openGraph: { title: "Raj Luck APK – Download Game for Android 2026", description: "Download Raj Luck APK for Android at rajluckgamers.com.", url: "https://rajluckgamers.com/raj-luck-apk", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Raj Luck APK" }] },
  twitter: { card: "summary_large_image", title: "Raj Luck APK Download", description: "Download Raj Luck APK at rajluckgamers.com.", images: ["/og-image.png"] },
  alternates: { canonical: "https://rajluckgamers.com/raj-luck-apk" },
};

export default function Page() {
  return <SeoApkPage keyword="Raj Luck APK" heading="Raj Luck APK – Free Download for Android" subheading="Raj Luck APK • Rajluck APK • Free Download" description="Get the latest Raj Luck APK for Android. Download, install, register, and enjoy the Raj Luck gaming experience." />;
}
