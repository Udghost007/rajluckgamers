import type { Metadata } from "next";
import SeoApkPage from "@/components/SeoApkPage";

export const metadata: Metadata = {
  title: "Rajluck Game APK Download – Free Download for Android 2026",
  description: "Rajluck Game APK Download — get the official Rajluck Game APK free for Android. Step-by-step download and install guide. rajluck game apk download, rajluck apk download, download rajluck game apk.",
  keywords: ["Rajluck Game APK Download", "Rajluck APK Download", "download Rajluck Game APK", "Rajluck Game APK free", "Rajluck Game APK Android", "Rajluck Game", "Rajluck", "Rajluck APK", "Raj Luck Game APK Download", "RajluckGamers"],
  openGraph: { title: "Rajluck Game APK Download – Free for Android 2026", description: "Download Rajluck Game APK free at rajluckgamers.com.", url: "https://rajluckgamers.com/rajluck-game-apk-download", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Rajluck Game APK Download" }] },
  twitter: { card: "summary_large_image", title: "Rajluck Game APK Download", images: ["/og-image.png"] },
  alternates: { canonical: "https://rajluckgamers.com/rajluck-game-apk-download" },
};

export default function Page() {
  return <SeoApkPage keyword="Rajluck Game APK" heading="Rajluck Game APK Download – Official Free Download" subheading="Rajluck Game APK Download • Free • Android 2026" description="Download the official Rajluck Game APK for free. Secure download with step-by-step installation guide for Android." />;
}
