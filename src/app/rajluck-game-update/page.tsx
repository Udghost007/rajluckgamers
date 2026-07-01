import type { Metadata } from "next";
import SeoApkPage from "@/components/SeoApkPage";

export const metadata: Metadata = {
  title: "Rajluck Game Update – How to Update Rajluck APK 2026",
  description: "Rajluck Game Update — learn how to update your Rajluck Game APK to the latest version. Step-by-step update guide for Android. rajluck game update, rajluck update, update rajluck apk.",
  keywords: ["Rajluck Game Update", "Rajluck update", "update Rajluck APK", "Rajluck Game new update", "how to update Rajluck", "Rajluck Game", "Rajluck", "Raj Luck Game Update", "RajluckGamers"],
  openGraph: { title: "Rajluck Game Update – Update APK Guide 2026", description: "Update your Rajluck Game APK. Guide at rajluckgamers.com.", url: "https://rajluckgamers.com/rajluck-game-update", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Rajluck Game Update" }] },
  twitter: { card: "summary_large_image", title: "Rajluck Game Update", images: ["/og-image.png"] },
  alternates: { canonical: "https://rajluckgamers.com/rajluck-game-update" },
};

export default function Page() {
  return <SeoApkPage keyword="Rajluck Game" heading="Rajluck Game Update – Get the Latest Version" subheading="Rajluck Game Update • Latest APK • Android" description="Update your Rajluck Game to the latest version. Download the newest APK for improved performance, new features, and security." />;
}
