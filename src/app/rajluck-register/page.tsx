import type { Metadata } from "next";
import SeoLandingPage from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Rajluck Register – Create Your Free Account 2026",
  description: "Rajluck Register — create your Rajluck account for free. Quick registration with mobile verification. rajluck register, rajluck sign up, rajluck game register.",
  keywords: ["Rajluck Register", "Rajluck sign up", "create Rajluck account", "Rajluck registration", "Rajluck Game Register", "Rajluck Game", "Rajluck", "Raj Luck Register", "RajluckGamers"],
  openGraph: { title: "Rajluck Register – Create Free Account 2026", description: "Register your Rajluck account free at rajluckgamers.com.", url: "https://rajluckgamers.com/rajluck-register", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Rajluck Register" }] },
  twitter: { card: "summary_large_image", title: "Rajluck Register", images: ["/og-image.png"] },
  alternates: { canonical: "https://rajluckgamers.com/rajluck-register" },
};

export default function Page() {
  return <SeoLandingPage keyword="Rajluck Register" heading="Rajluck Register – Create Your Free Account" subheading="Rajluck Register • Free • Quick Setup" description="Register your Rajluck account in minutes. Free sign-up with mobile number verification — start gaming today." />;
}
