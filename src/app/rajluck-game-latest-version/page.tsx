import type { Metadata } from "next";
import SeoApkPage from "@/components/SeoApkPage";

export const metadata: Metadata = {
  title: "Rajluck Game Latest Version – Download Newest APK 2026",
  description: "Rajluck Game Latest Version — download the newest Rajluck Game APK with all the latest features and updates. rajluck game latest version, rajluck latest version, rajluck new version.",
  keywords: ["Rajluck Game Latest Version", "Rajluck latest version", "Rajluck new version", "Rajluck Game update", "Rajluck APK latest", "Rajluck Game newest", "Rajluck Game", "Rajluck", "Raj Luck Game Latest Version", "RajluckGamers"],
  openGraph: { title: "Rajluck Game Latest Version – Newest APK 2026", description: "Download Rajluck Game latest version at rajluckgamers.com.", url: "https://rajluckgamers.com/rajluck-game-latest-version", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Rajluck Game Latest Version" }] },
  twitter: { card: "summary_large_image", title: "Rajluck Game Latest Version", images: ["/og-image.png"] },
  alternates: { canonical: "https://rajluckgamers.com/rajluck-game-latest-version" },
};

export default function Page() {
  return <SeoApkPage keyword="Rajluck Game" heading="Rajluck Game Latest Version – Download Now" subheading="Rajluck Game Latest Version • Newest APK • 2026" description="Download the latest version of Rajluck Game APK with all new features, bug fixes, and performance improvements." />;
}
