import type { Metadata } from "next";
import SeoLandingPage from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Rajluck Game App – Download the Official App for Android 2026",
  description: "Rajluck Game App — the official mobile application for Android. Download Rajluck Game App, explore features, register, login, and enjoy gaming. Also known as Rajluck App, Raj Luck App, Rajluck Game.",
  keywords: ["Rajluck Game App", "Rajluck App", "Rajluck Game application", "Rajluck mobile app", "Rajluck Game Android app", "Rajluck Game", "Rajluck", "Raj Luck App", "Raj Luck Game App", "RajluckGamers"],
  openGraph: { title: "Rajluck Game App – Official App for Android 2026", description: "Download Rajluck Game App for Android at rajluckgamers.com.", url: "https://rajluckgamers.com/rajluck-game-app", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Rajluck Game App" }] },
  twitter: { card: "summary_large_image", title: "Rajluck Game App", images: ["/og-image.png"] },
  alternates: { canonical: "https://rajluckgamers.com/rajluck-game-app" },
};

export default function Page() {
  return <SeoLandingPage keyword="Rajluck Game App" heading="Rajluck Game App – Official Mobile Application" subheading="Rajluck Game App • Android • Free Download" description="Download the official Rajluck Game App for Android. Enjoy fast performance, secure login, easy registration, and exciting features." />;
}
