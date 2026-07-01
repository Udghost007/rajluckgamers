import type { Metadata } from "next";
import SeoLandingPage from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Rajluck Game Free – Free Download & Registration 2026",
  description: "Rajluck Game Free — download Rajluck Game for free, register without charges, and enjoy free gaming features. rajluck game free, rajluck free, rajluck game free download.",
  keywords: ["Rajluck Game Free", "Rajluck Free", "Rajluck Game free download", "Rajluck free registration", "is Rajluck Game free", "Rajluck Game", "Rajluck", "Raj Luck Game Free", "RajluckGamers"],
  openGraph: { title: "Rajluck Game Free – Free Download & Play 2026", description: "Rajluck Game is free to download and play. Get it at rajluckgamers.com.", url: "https://rajluckgamers.com/rajluck-game-free", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Rajluck Game Free" }] },
  twitter: { card: "summary_large_image", title: "Rajluck Game Free", images: ["/og-image.png"] },
  alternates: { canonical: "https://rajluckgamers.com/rajluck-game-free" },
};

export default function Page() {
  return <SeoLandingPage keyword="Rajluck Game Free" heading="Rajluck Game Free – Download & Play for Free" subheading="Rajluck Game Free • No Charges • Free APK" description="Rajluck Game is completely free to download, register, and play. Get the latest APK for Android with no hidden fees." />;
}
