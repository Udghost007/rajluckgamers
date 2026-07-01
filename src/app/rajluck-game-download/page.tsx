import type { Metadata } from "next";
import SeoApkPage from "@/components/SeoApkPage";

export const metadata: Metadata = {
  title: "Rajluck Game Download – Free APK for Android 2026",
  description: "Rajluck Game Download — get the latest Rajluck Game APK free for Android. Step-by-step download guide, device requirements, and installation tips. Also search: rajluck game download, rajluck download, download rajluck game.",
  keywords: ["Rajluck Game Download", "Rajluck Game Download APK", "download Rajluck Game", "Rajluck download", "Rajluck Game free download", "Rajluck APK", "Rajluck Game", "Rajluck", "Raj Luck Game Download", "RajluckGamers"],
  openGraph: { title: "Rajluck Game Download – Free APK for Android 2026", description: "Download Rajluck Game APK free for Android at rajluckgamers.com.", url: "https://rajluckgamers.com/rajluck-game-download", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Rajluck Game Download" }] },
  twitter: { card: "summary_large_image", title: "Rajluck Game Download", images: ["/og-image.png"] },
  alternates: { canonical: "https://rajluckgamers.com/rajluck-game-download" },
};

export default function Page() {
  return <SeoApkPage keyword="Rajluck Game" heading="Rajluck Game Download – Free APK for Android" subheading="Rajluck Game Download • Free APK • Android 2026" description="Download the latest Rajluck Game APK for your Android device. Free, secure, and fast download from rajluckgamers.com." />;
}
