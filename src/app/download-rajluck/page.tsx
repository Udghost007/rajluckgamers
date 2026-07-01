import type { Metadata } from "next";
import SeoApkPage from "@/components/SeoApkPage";

export const metadata: Metadata = {
  title: "Download Rajluck – Get Rajluck Game APK Free 2026",
  description: "Download Rajluck — get the official Rajluck Game APK free for Android. Secure download, easy installation. Also search: download rajluck, download rajluck game, download rajluck apk.",
  keywords: ["Download Rajluck", "Download Rajluck Game", "Download Rajluck APK", "get Rajluck", "Rajluck free download", "Rajluck Game", "Rajluck", "Rajluck APK", "Raj Luck Download", "RajluckGamers"],
  openGraph: { title: "Download Rajluck – Free APK for Android 2026", description: "Download Rajluck Game APK free at rajluckgamers.com.", url: "https://rajluckgamers.com/download-rajluck", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Download Rajluck" }] },
  twitter: { card: "summary_large_image", title: "Download Rajluck", images: ["/og-image.png"] },
  alternates: { canonical: "https://rajluckgamers.com/download-rajluck" },
};

export default function Page() {
  return <SeoApkPage keyword="Rajluck" heading="Download Rajluck – Official APK Free" subheading="Download Rajluck • Free APK • Android 2026" description="Download the official Rajluck Game APK for free. Fast, secure installation on any Android device from rajluckgamers.com." />;
}
