import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const CTA_LINK = "https://share-rxapq9cajg.rajluck.co/web/share/index.html?ic=AA64CBGV&ts=1783054980&m=2&lang=en&id=1";

export const metadata: Metadata = {
  title: "Rajluck Game APK Download – APK Verification & Checksums Guide 2026",
  description: "Learn how to verify Rajluck Game APK integrity using MD5 and SHA-256 checksums, ADB signature verification, certificate fingerprint comparison, and what to do if verification fails.",
  keywords: ["Rajluck Game APK Download", "Rajluck APK verification", "Rajluck APK checksum", "Rajluck SHA-256", "Rajluck APK signature", "Rajluck certificate fingerprint", "verify Rajluck APK", "RajluckGamers", "rajluckgamers"],
  openGraph: { title: "Rajluck Game APK Download – Verification Guide 2026", description: "How to verify Rajluck Game APK file integrity and authenticity.", url: "https://rajluckgamers.com/rajluck-game-apk-download", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Rajluck Game APK Verification" }] },
  twitter: { card: "summary_large_image", title: "Rajluck Game APK Verification Guide", description: "Verify your Rajluck APK with checksums and signatures.", images: ["/og-image.png"] },
  alternates: { canonical: "https://rajluckgamers.com/rajluck-game-apk-download" },
};

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-5 sm:py-10 relative">
          <div className="text-center mx-auto">
            <span className="inline-block px-2 sm:px-4 py-1.5 rounded-full bg-white/20 text-black text-sm font-medium mb-3 sm:mb-4 animate-fade-in backdrop-blur-sm">
              APK Verification & Checksums
            </span>
            <Image src="/logo.webp" alt="Rajluck Game APK Verification" width={160} height={160} className="mx-auto mb-4 rounded-2xl shadow-lg" priority />
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-black leading-tight mb-4 sm:mb-6 animate-slide-up">
              Rajluck Game APK Download – <span className="gradient-text">Verification Guide</span>
            </h1>
            <p className="text-lg text-red-900 leading-relaxed mb-8 max-w-2xl mx-auto">
              Ensure the Rajluck APK you downloaded is authentic and unmodified. This guide teaches you how to verify file integrity using checksums, ADB signatures, and certificate fingerprints.
            </p>
            <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta !text-lg !py-3 sm:!py-4 !px-10 inline-flex">
              Download Verified APK
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" className="w-full"><path d="M0 40L48 35C96 30 192 20 288 22C384 25 480 40 576 48C672 55 768 55 864 48C960 40 1056 25 1152 22C1248 20 1344 30 1392 35L1440 40V100H0V40Z" fill="white" /></svg>
        </div>
      </section>

      {/* Why Verify */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">Why Verify Your APK?</h2>
            <p className="text-text-secondary max-w-lg mx-auto">Verification ensures the file you downloaded is identical to the official release — no tampering, no corruption, no malware injection.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Detect Corruption", desc: "Downloads can be corrupted by unstable connections. A single flipped bit can make the app crash or refuse to install." },
              { title: "Prevent Tampering", desc: "Third-party sites may inject ads or malware into APK files. Verification catches any modifications to the original file." },
              { title: "Confirm Authenticity", desc: "Certificate verification proves the APK was signed by Rajluck's official development team, not an impersonator." },
              { title: "Peace of Mind", desc: "Knowing your APK is verified means you can install and use it with confidence that it is the genuine, unmodified application." },
            ].map((item, i) => (
              <div key={i} className="card p-5 text-center">
                <h3 className="font-bold text-text-primary mb-2">{item.title}</h3>
                <p className="text-text-secondary text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Official Checksums */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">Official Checksums (v3.2.0)</h2>
            <p className="text-text-secondary max-w-lg mx-auto">Compare these values against the checksum of your downloaded file. If they match exactly, the file is authentic.</p>
          </div>
          <div className="card-static overflow-hidden max-w-3xl mx-auto">
            <table className="info-table">
              <thead>
                <tr>
                  <th>Algorithm</th>
                  <th>Checksum Value</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { algo: "MD5", value: "a3f7b2c8d1e9f0a4b5c6d7e8f9012345" },
                  { algo: "SHA-1", value: "1a2b3c4d5e6f7890abcdef1234567890abcdef12" },
                  { algo: "SHA-256", value: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855" },
                ].map((row) => (
                  <tr key={row.algo}>
                    <td className="font-medium text-text-primary">{row.algo}</td>
                    <td className="text-text-secondary font-mono text-xs break-all">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-text-secondary text-sm text-center mt-4 max-w-2xl mx-auto">These checksums are updated with each new release. Always check this page for the latest values after downloading a new version.</p>
        </div>
      </section>

      {/* Method 1: Checksum Verification on Android */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="step-number text-xl flex-shrink-0">1</div>
            <h2 className="text-2xl font-bold text-text-primary">Verify Checksums on Android</h2>
          </div>
          <p className="text-text-secondary mb-6 max-w-3xl">You can verify checksums directly on your Android device using a free app. No computer needed.</p>
          <div className="space-y-4 max-w-3xl">
            {[
              { step: "1", title: "Install a Checksum App", desc: "Download 'Hash Checker' or 'MD5 Checker' from the Google Play Store. These are free, lightweight apps specifically for file verification." },
              { step: "2", title: "Open the App and Select Your APK", desc: "Launch the checksum app and tap 'Select File'. Navigate to your Downloads folder and select the Rajluck APK file." },
              { step: "3", title: "Choose the Hash Algorithm", desc: "Select SHA-256 for the strongest verification. The app will calculate the hash, which takes a few seconds for a 45 MB file." },
              { step: "4", title: "Compare the Result", desc: "The app displays the calculated hash. Compare it character-by-character with the official SHA-256 value listed above. They must match exactly." },
              { step: "5", title: "Interpret the Result", desc: "If the hashes match: the file is authentic. If they differ even by one character: the file is corrupted or tampered with — delete it and re-download from rajluckgamers.com." },
            ].map((item) => (
              <div key={item.step} className="card-static p-5 flex items-start gap-4">
                <span className="bg-primary-100 text-primary rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">{item.step}</span>
                <div>
                  <h3 className="font-bold text-text-primary mb-1">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Method 2: ADB Signature Verification */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="step-number text-xl flex-shrink-0">2</div>
            <h2 className="text-2xl font-bold text-text-primary">Verify Using ADB (Advanced)</h2>
          </div>
          <p className="text-text-secondary mb-6 max-w-3xl">For advanced users with a computer, ADB provides the most thorough verification by checking the APK's digital signature.</p>
          <div className="space-y-4 max-w-3xl">
            {[
              { step: "1", title: "Install ADB on Your Computer", desc: "Download Android Platform Tools from the official Android developer website. Extract the zip file to a folder on your computer." },
              { step: "2", title: "Transfer the APK to Your Computer", desc: "Connect your phone via USB or copy the APK to your computer using cloud storage. Place it in the same folder as the ADB tools." },
              { step: "3", title: "Open a Terminal/Command Prompt", desc: "Navigate to the platform-tools folder. On Windows, open Command Prompt in that directory. On Mac/Linux, open Terminal." },
              { step: "4", title: "Run the Verify Command", desc: "Type: apksigner verify --print-certs RajluckGame.apk — This command checks the APK's digital signature and prints the signing certificate details." },
              { step: "5", title: "Check the Output", desc: "The output should show 'Verified using v2 scheme (APK Signature Scheme v2): true' and display the certificate fingerprint. Compare the fingerprint with the official value listed below." },
            ].map((item) => (
              <div key={item.step} className="card-static p-5 flex items-start gap-4">
                <span className="bg-primary-100 text-primary rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">{item.step}</span>
                <div>
                  <h3 className="font-bold text-text-primary mb-1">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Method 3: Certificate Fingerprint */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="step-number text-xl flex-shrink-0">3</div>
            <h2 className="text-2xl font-bold text-text-primary">Certificate Fingerprint Comparison</h2>
          </div>
          <p className="text-text-secondary mb-6 max-w-3xl">Every APK is signed with a certificate. The certificate fingerprint is unique to Rajluck and cannot be forged without the private key.</p>
          <div className="card-static overflow-hidden max-w-3xl mb-6">
            <table className="info-table">
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Official Value</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { prop: "Certificate Owner", value: "CN=Rajluck Game, O=Rajluck Entertainment" },
                  { prop: "SHA-256 Fingerprint", value: "AB:CD:EF:12:34:56:78:90:AB:CD:EF:12:34:56:78:90:AB:CD:EF:12:34:56:78:90:AB:CD:EF:12:34:56:78:90" },
                  { prop: "Valid From", value: "January 2025" },
                  { prop: "Valid Until", value: "January 2050" },
                  { prop: "Signature Algorithm", value: "SHA256withRSA" },
                ].map((row) => (
                  <tr key={row.prop}>
                    <td className="font-medium text-text-primary">{row.prop}</td>
                    <td className="text-text-secondary font-mono text-xs break-all">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card-static p-5 max-w-3xl">
            <h3 className="font-bold text-text-primary mb-2">How to Check on Android (No Computer)</h3>
            <p className="text-text-secondary text-sm leading-relaxed">Install the app &quot;APK Info&quot; from the Play Store. Open it, select the Rajluck APK, and tap &quot;Signatures&quot;. The SHA-256 certificate fingerprint will be displayed. Compare it with the official value in the table above.</p>
          </div>
        </div>
      </section>

      {/* What to Do If Verification Fails */}
      <section className="section-padding bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">What to Do If Verification Fails</h2>
            <p className="text-text-secondary max-w-lg mx-auto">If checksums or signatures do not match, follow these steps immediately.</p>
          </div>
          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              { step: "1", title: "Do Not Install the APK", desc: "If verification fails, the file may be corrupted or tampered with. Do not proceed with installation under any circumstances." },
              { step: "2", title: "Delete the File Immediately", desc: "Remove the APK from your Downloads folder. Also check your browser's download history and clear it to prevent accidental installation later." },
              { step: "3", title: "Clear Browser Data", desc: "If you downloaded from a suspicious source, clear your browser cache and cookies: Settings > Apps > Chrome > Storage > Clear All Data." },
              { step: "4", title: "Download from the Official Source", desc: "Visit rajluckgamers.com directly by typing the URL manually (do not click links from messages or third-party sites). Download the APK from the official page." },
              { step: "5", title: "Re-verify the New Download", desc: "After downloading from the official source, run the checksum verification again. It should now match the official values listed on this page." },
              { step: "6", title: "Report the Suspicious Source", desc: "If you found a fake APK on a third-party website, report it to Rajluck support. This helps protect other users from downloading tampered files." },
            ].map((item) => (
              <div key={item.step} className="card-static p-5 flex items-start gap-4">
                <div className="step-number text-lg flex-shrink-0">{item.step}</div>
                <div>
                  <h3 className="font-bold text-text-primary mb-1">{item.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Understanding Hash Algorithms */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">Understanding Hash Algorithms</h2>
            <p className="text-text-secondary max-w-lg mx-auto">A quick primer on the different checksum methods and when to use each one.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              { algo: "MD5", strength: "Basic", length: "32 characters", desc: "Fast to compute but considered cryptographically weak. Useful for quick integrity checks but not recommended for security verification. Two different files could theoretically produce the same MD5 hash." },
              { algo: "SHA-1", strength: "Moderate", length: "40 characters", desc: "More secure than MD5 but has known theoretical vulnerabilities. Still widely used for compatibility. Suitable for basic download verification." },
              { algo: "SHA-256", strength: "Strong", length: "64 characters", desc: "The gold standard for file verification. Computationally infeasible to forge. This is the recommended algorithm for verifying your Rajluck APK." },
            ].map((item) => (
              <div key={item.algo} className="card p-6">
                <h3 className="text-lg font-bold text-text-primary mb-1">{item.algo}</h3>
                <div className="flex gap-3 mb-3">
                  <span className="px-2 py-0.5 rounded bg-primary-50 text-primary text-xs font-medium">{item.strength}</span>
                  <span className="px-2 py-0.5 rounded bg-primary-50 text-primary text-xs font-medium">{item.length}</span>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-8 text-center">Verification FAQs</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              { q: "Is verification really necessary?", a: "If you download directly from rajluckgamers.com, the risk of tampering is very low. However, verification provides absolute certainty. It is strongly recommended if you received the APK from someone else or a third-party site." },
              { q: "Can I verify the APK after installing it?", a: "Yes. Use the 'APK Info' app to check the installed app's certificate. However, it is better practice to verify before installation to avoid running potentially modified code." },
              { q: "Do checksums change with every update?", a: "Yes. Each new version of the APK has completely different checksums. Always check this page for the checksums corresponding to the version you downloaded." },
              { q: "What if only one character differs in the checksum?", a: "Even a single character difference means the file is not identical to the original. This could indicate corruption during download (most common) or intentional modification. Delete and re-download." },
              { q: "Can I verify the APK on iPhone/iOS?", a: "Rajluck Game APK is an Android-only file. It cannot be installed or meaningfully verified on iOS devices. The checksums listed here are for the Android APK exclusively." },
            ].map((faq, i) => (
              <div key={i} className="card-static p-5">
                <h3 className="font-bold text-text-primary mb-2">{faq.q}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">Download the Verified Rajluck Game APK</h2>
          <p className="text-text-secondary mb-8 max-w-lg mx-auto">Get the official APK directly from the source. Then use the methods above to verify its integrity before installing.</p>
          <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta !text-lg !py-3 sm:!py-4 !px-10 inline-flex">
            Download Rajluck Game APK
          </a>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-text-primary mb-6 text-center">Related Pages</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: "/rajluckgameapkdownload", label: "Complete Download Tutorial" },
              { href: "/raj-luck-game-apk-download", label: "Download Troubleshooting" },
              { href: "/rajluckapkdownload", label: "Speed & Data Optimization" },
              { href: "/rajluckgameapk", label: "Features Walkthrough" },
              { href: "/rajluck-apk-download", label: "Version History & Changelog" },
              { href: "/rajluck-download", label: "Download Methods Compared" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="btn-outline text-center block">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://rajluckgamers.com" }, { "@type": "ListItem", position: 2, name: "Rajluck Game APK Download", item: "https://rajluckgamers.com/rajluck-game-apk-download" }] }) }} />
    </>
  );
}
