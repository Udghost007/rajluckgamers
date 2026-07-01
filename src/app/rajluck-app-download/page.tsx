import type { Metadata } from "next";
import SeoApkPage from "@/components/SeoApkPage";

export const metadata: Metadata = {
  title: "Rajluck App Download – Free APK Download for Android 2026",
  description: "Rajluck App Download — download the Rajluck App APK free for Android. Also known as Rajluck Game App Download, Raj Luck App Download. Official guide at rajluckgamers.com.",
  keywords: ["Rajluck App Download", "Rajluck App", "download Rajluck App", "Rajluck App APK", "Rajluck Game App Download", "Rajluck Game", "Rajluck", "Raj Luck App Download", "RajluckGamers"],
  openGraph: { title: "Rajluck App Download – Free for Android 2026", description: "Download Rajluck App free at rajluckgamers.com.", url: "https://rajluckgamers.com/rajluck-app-download", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Rajluck App Download" }] },
  twitter: { card: "summary_large_image", title: "Rajluck App Download", images: ["/og-image.png"] },
  alternates: { canonical: "https://rajluckgamers.com/rajluck-app-download" },
};

export default function Page() {
  return <SeoApkPage keyword="Rajluck App" heading="Rajluck App Download – Free for Android" subheading="Rajluck App Download • Free APK • Android" description="Download the Rajluck App free for Android. Quick and secure installation from rajluckgamers.com." />;
}
