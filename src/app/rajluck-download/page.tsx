import type { Metadata } from "next";
import SeoApkPage from "@/components/SeoApkPage";

export const metadata: Metadata = {
  title: "Rajluck Download – Get Rajluck APK Free for Android 2026",
  description: "Rajluck Download — download Rajluck APK free for Android. Official download guide for the latest Rajluck Game. rajluck download, download rajluck, rajluck apk download.",
  keywords: ["Rajluck Download", "download Rajluck", "Rajluck APK download", "Rajluck free download", "get Rajluck", "Rajluck Game Download", "Rajluck Game", "Rajluck", "Raj Luck Download", "RajluckGamers"],
  openGraph: { title: "Rajluck Download – Free APK for Android 2026", description: "Download Rajluck APK free at rajluckgamers.com.", url: "https://rajluckgamers.com/rajluck-download", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Rajluck Download" }] },
  twitter: { card: "summary_large_image", title: "Rajluck Download", images: ["/og-image.png"] },
  alternates: { canonical: "https://rajluckgamers.com/rajluck-download" },
};

export default function Page() {
  return <SeoApkPage keyword="Rajluck" heading="Rajluck Download – Free APK for Android" subheading="Rajluck Download • Free • Latest Version" description="Download the latest Rajluck APK for free on Android. Secure, fast download from the official guide at rajluckgamers.com." />;
}
