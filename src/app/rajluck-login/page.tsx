import type { Metadata } from "next";
import SeoLandingPage from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Rajluck Login – Sign In to Your Rajluck Account 2026",
  description: "Rajluck Login — access your Rajluck account securely. Step-by-step login guide using mobile number and password. rajluck login, rajluck sign in, rajluck game login.",
  keywords: ["Rajluck Login", "Rajluck sign in", "Rajluck account login", "login to Rajluck", "Rajluck Game Login", "Rajluck Game", "Rajluck", "Raj Luck Login", "RajluckGamers"],
  openGraph: { title: "Rajluck Login – Sign In to Your Account 2026", description: "Login to your Rajluck account at rajluckgamers.com.", url: "https://rajluckgamers.com/rajluck-login", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Rajluck Login" }] },
  twitter: { card: "summary_large_image", title: "Rajluck Login", images: ["/og-image.png"] },
  alternates: { canonical: "https://rajluckgamers.com/rajluck-login" },
};

export default function Page() {
  return <SeoLandingPage keyword="Rajluck Login" heading="Rajluck Login – Access Your Account" subheading="Rajluck Login • Secure Sign In • Mobile Number" description="Sign in to your Rajluck account securely. Use your registered mobile number and password for quick access to your dashboard." />;
}
