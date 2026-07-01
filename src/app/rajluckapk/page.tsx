import type { Metadata } from "next";
import SeoApkPage from "@/components/SeoApkPage";

export const metadata: Metadata = {
  title: "Rajluck APK – Download Latest Version for Android 2026",
  description: "Download Rajluck APK for Android. Get the latest Rajluck Game APK, install it on your device, register, and login. Also known as Raj Luck APK, Rajluck Game APK, RajluckGame APK. Free download at rajluckgamers.com.",
  keywords: ["Rajluck APK", "Rajluck APK download", "Rajluck Game APK", "Raj Luck APK", "RajluckGame APK", "Rajluck", "Rajluck Game", "Raj Luck", "Raj Luck Game", "RajluckGamers", "rajluckgamers"],
  openGraph: { title: "Rajluck APK – Download Latest Version for Android 2026", description: "Download Rajluck APK for Android. Free at rajluckgamers.com.", url: "https://rajluckgamers.com/rajluckapk", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Rajluck APK" }] },
  twitter: { card: "summary_large_image", title: "Rajluck APK Download", description: "Download Rajluck APK for Android at rajluckgamers.com.", images: ["/og-image.png"] },
  alternates: { canonical: "https://rajluckgamers.com/rajluckapk" },
};

export default function Page() {
  return <SeoApkPage keyword="Rajluck APK" heading="Rajluck APK – Download for Android" subheading="Rajluck APK • Rajluck Game APK • Free Download" description="Download the latest Rajluck APK for your Android device. Free, fast, and secure installation from rajluckgamers.com." />;
}
