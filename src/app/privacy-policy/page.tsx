import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – Rajluck Game",
  description:
    "Read the privacy policy for rajluckgamers.com — your trusted source for Rajluck Game guides, Rajluck APK download information, and Rajluck App resources. Learn how we collect, use, and protect your data.",
  keywords: [
    "Rajluck Game privacy policy",
    "rajluckgamers privacy",
    "Rajluck App privacy",
    "Rajluck APK website policy",
    "RajluckGamers",
    "Raj Luck",
    "Raj Luck Game",
    "Raj Luck Gamers",
  ],
  openGraph: {
    title: "Privacy Policy – Rajluck Game",
    description: "Read the privacy policy for rajluckgamers.com — your trusted source for Rajluck Game and Rajluck APK guides.",
    url: "https://rajluckgamers.com/privacy-policy",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rajluck Game Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy – Rajluck Game",
    description: "Read the privacy policy for rajluckgamers.com — your trusted source for Rajluck Game and Rajluck APK guides.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://rajluckgamers.com/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary text-xs font-semibold mb-4">
            Legal
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-text-primary leading-tight mb-3">
            Privacy Policy
          </h1>
          <p className="text-text-secondary text-base sm:text-lg">
            Effective Date: June 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-custom space-y-8">
            <p className="text-text-secondary leading-relaxed">
              Welcome to our website. Your privacy is important to us, and we are committed to protecting the information you share while using this website. This Privacy Policy explains how we collect, use, store, and safeguard your information when you visit our website for information related to Rajluck APK. By accessing or using this website, you agree to the terms of this Privacy Policy.
            </p>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-4">Information We Collect</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We may collect both personal and non-personal information to improve your browsing experience.
              </p>

              <h3 className="text-lg font-semibold text-text-primary mb-3">Personal Information</h3>
              <ul className="space-y-2 mb-5">
                {["Name (if voluntarily submitted)", "Email address", "Contact information provided through our contact form"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-text-secondary">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold text-text-primary mb-3">Non-Personal Information</h3>
              <ul className="space-y-2">
                {[
                  "IP address",
                  "Browser type and version",
                  "Device information",
                  "Operating system",
                  "Pages visited",
                  "Date and time of your visit",
                  "Referral source",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-text-secondary">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-text-muted text-sm mt-3">
                This information helps us improve our content and provide a better experience for visitors interested in Rajluck APK.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-4">How We Use Your Information</h2>
              <p className="text-text-secondary leading-relaxed mb-4">The information we collect may be used to:</p>
              <ul className="space-y-2">
                {[
                  "Improve website performance and user experience.",
                  "Respond to your questions and support requests.",
                  "Provide updates and guides related to Rajluck APK.",
                  "Analyze website traffic and visitor behavior.",
                  "Maintain website security.",
                  "Prevent spam, fraud, and unauthorized access.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-text-secondary">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4 font-medium">
                We do not sell, rent, or trade your personal information to third parties.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-4">Cookies</h2>
              <p className="text-text-secondary leading-relaxed">
                Our website may use cookies to remember user preferences, analyze website traffic, and improve performance. You may disable cookies through your browser settings, although some website features may not function correctly after doing so.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-4">Third-Party Services</h2>
              <p className="text-text-secondary leading-relaxed">
                We may use trusted third-party services such as analytics providers or advertising partners. These services may collect limited technical information according to their own privacy policies. We encourage users to review the privacy policies of any third-party services they interact with.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-4">External Links</h2>
              <p className="text-text-secondary leading-relaxed">
                This website may contain links to external websites for additional information about Rajluck APK. We are not responsible for the content, privacy practices, or security of third-party websites. Users should review the privacy policies of any external sites they visit.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-4">Data Security</h2>
              <p className="text-text-secondary leading-relaxed">
                We use reasonable administrative and technical measures to help protect your information from unauthorized access, misuse, or disclosure. However, no online transmission or storage method can be guaranteed to be completely secure.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-4">Children&apos;s Privacy</h2>
              <p className="text-text-secondary leading-relaxed">
                This website is intended for users who meet the legal age requirements in their jurisdiction. We do not knowingly collect personal information from children. If such information is identified, we will take appropriate steps to remove it.
              </p>
            </div>

            <div className="card-static p-5 sm:p-6 bg-primary-50 border-primary-100">
              <h2 className="text-xl font-bold text-text-primary mb-3">Independent Website Notice</h2>
              <p className="text-text-secondary leading-relaxed text-sm">
                This website is an independent informational platform created to provide guides and resources related to Rajluck APK. We are not the official website, official application, developer, owner, or operator of Rajluck APK. All trademarks, logos, and brand names belong to their respective owners and are used solely for identification and informational purposes.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-4">Your Rights</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Depending on the laws in your region, you may have the right to:
              </p>
              <ul className="space-y-2">
                {[
                  "Request access to your personal information.",
                  "Request correction of inaccurate information.",
                  "Request deletion of your personal data.",
                  "Withdraw consent where applicable.",
                  "Contact us regarding privacy-related concerns.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-text-secondary">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-4">Changes to This Privacy Policy</h2>
              <p className="text-text-secondary leading-relaxed">
                We may update this Privacy Policy periodically to reflect changes in our website, legal requirements, or services. Any revisions will be posted on this page with an updated effective date.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-4">Contact Us</h2>
              <p className="text-text-secondary leading-relaxed">
                If you have any questions regarding this Privacy Policy or our website, please contact us through our Contact Us page. We will make reasonable efforts to respond as soon as possible.
              </p>
            </div>

            <p className="text-text-muted text-sm italic border-t border-border pt-6">
              By continuing to use this website, you acknowledge that you have read, understood, and agreed to this Privacy Policy.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
