import type { Metadata } from "next";
import SeoLandingPage from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Rajluck Game Login – How to Login to Your Rajluck Account 2026",
  description: "Rajluck Game Login guide — learn how to login to your Rajluck Game account step by step. Secure login with mobile number, password reset help, and troubleshooting tips. rajluck game login, rajluck login.",
  keywords: ["Rajluck Game Login", "Rajluck Login", "Rajluck Game sign in", "login Rajluck", "Rajluck account login", "Rajluck Game", "Rajluck", "Raj Luck Login", "Raj Luck Game Login", "RajluckGamers"],
  openGraph: { title: "Rajluck Game Login – Access Your Account 2026", description: "Login to your Rajluck Game account securely. Guide at rajluckgamers.com.", url: "https://rajluckgamers.com/rajluck-game-login", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Rajluck Game Login" }] },
  twitter: { card: "summary_large_image", title: "Rajluck Game Login", images: ["/og-image.png"] },
  alternates: { canonical: "https://rajluckgamers.com/rajluck-game-login" },
};

export default function Page() {
  return <SeoLandingPage keyword="Rajluck Game Login" heading="Rajluck Game Login – Access Your Account" subheading="Rajluck Game Login • Secure Access • Mobile Number" description="Login to your Rajluck Game account securely using your mobile number. Follow our step-by-step guide for quick and safe access." />;
}
