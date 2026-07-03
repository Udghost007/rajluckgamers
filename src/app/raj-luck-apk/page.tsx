import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Raj Luck APK – Download Game for Android 2026",
  description: "Download Raj Luck APK for Android. Get the latest Raj Luck Game APK file, install and start playing. Also known as Rajluck APK, Rajluck Game APK, RajluckGame. Free at rajluckgamers.com.",
  keywords: ["Raj Luck APK", "Raj Luck APK download", "Raj Luck Game APK", "Rajluck APK", "Rajluck Game APK", "Rajluck", "Rajluck Game", "Raj Luck", "Raj Luck Game", "RajluckGamers", "rajluckgamers"],
  openGraph: { title: "Raj Luck APK – Download Game for Android 2026", description: "Download Raj Luck APK for Android at rajluckgamers.com.", url: "https://rajluckgamers.com/raj-luck-apk", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Raj Luck APK" }] },
  twitter: { card: "summary_large_image", title: "Raj Luck APK Download", description: "Download Raj Luck APK at rajluckgamers.com.", images: ["/og-image.png"] },
  alternates: { canonical: "https://rajluckgamers.com/raj-luck-apk" },
};

const CTA_LINK =
  "https://share-rxapq9cajg.rajluck.co/web/share/index.html?ic=AA64CBGV&ts=1783054980&m=2&lang=en&id=1";

export default function Page() {
  return (
    <main className="min-h-screen bg-surface">
      {/* Hero */}
      <section className="hero-gradient section-padding text-center">
        <Image
          src="/logo.webp"
          alt="Raj Luck APK Compatibility"
          width={160}
          height={160}
          className="w-[100px] sm:w-[180px] mx-auto mb-6 drop-shadow-2xl animate-fade-in"
          priority
        />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-black mb-4 animate-slide-up">
          Raj Luck APK Compatibility Guide
        </h1>
        <p className="text-lg sm:text-xl text-black/80 max-w-2xl mx-auto mb-8 animate-slide-up">
          Find out whether your Android device can run Raj Luck APK. Covers
          Android version requirements, RAM, storage, chipset support, and
          how to fix common compatibility problems.
        </p>
        <a
          href={CTA_LINK}
          className="btn-cta inline-block text-lg px-8 py-4 animate-fade-in"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Raj Luck APK
        </a>
      </section>

      {/* Minimum Requirements */}
      <section className="section-padding max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-text-primary mb-6">
          Minimum Device Requirements
        </h2>
        <p className="text-text-secondary mb-6">
          Before downloading the Raj Luck APK, confirm your device meets the
          minimum requirements below. Installing on an under-spec device can
          lead to crashes, slow loading, or a degraded gaming experience.
        </p>
        <div className="overflow-x-auto">
          <table className="info-table w-full text-sm">
            <thead>
              <tr>
                <th className="text-left p-3">Component</th>
                <th className="text-left p-3">Minimum</th>
                <th className="text-left p-3">Recommended</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3">Android Version</td>
                <td className="p-3">Android 6.0 (Marshmallow)</td>
                <td className="p-3">Android 10.0 or newer</td>
              </tr>
              <tr>
                <td className="p-3">RAM</td>
                <td className="p-3">2 GB</td>
                <td className="p-3">4 GB or more</td>
              </tr>
              <tr>
                <td className="p-3">Free Storage</td>
                <td className="p-3">150 MB</td>
                <td className="p-3">500 MB (for cache &amp; updates)</td>
              </tr>
              <tr>
                <td className="p-3">Processor</td>
                <td className="p-3">Quad-core 1.4 GHz</td>
                <td className="p-3">Octa-core 2.0 GHz+</td>
              </tr>
              <tr>
                <td className="p-3">Internet</td>
                <td className="p-3">3G / Mobile Data</td>
                <td className="p-3">4G LTE or Wi-Fi</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Supported Devices */}
      <section className="section-padding bg-primary-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-6">
            Supported Brands &amp; Device Types
          </h2>
          <p className="text-text-secondary mb-4">
            The Raj Luck APK is compatible with Android devices from all major
            manufacturers. The following brands have been tested and confirmed
            to run the app without issues:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
            {["Samsung", "Xiaomi / Redmi", "OPPO / OnePlus", "Realme", "Vivo", "Huawei / Honor", "Google Pixel", "Motorola", "Nokia"].map(
              (brand) => (
                <div key={brand} className="card-static p-4 text-center">
                  <span className="text-text-primary font-medium text-sm">{brand}</span>
                </div>
              )
            )}
          </div>
          <p className="text-text-muted text-sm mt-4">
            Tablets running Android 6.0+ are also supported. iOS devices are
            not compatible with APK files.
          </p>
        </div>
      </section>

      {/* Android Version Details */}
      <section className="section-padding max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-text-primary mb-6">
          Android Version Compatibility in Detail
        </h2>
        <div className="space-y-4">
          <div className="card p-5">
            <h3 className="font-semibold text-text-primary mb-1">Android 6.0 – 7.1 (Marshmallow / Nougat)</h3>
            <p className="text-text-secondary text-sm">
              Runs the app but some visual effects are reduced. Expect slightly
              longer load times. Ensure at least 2 GB RAM and close background
              apps before playing.
            </p>
          </div>
          <div className="card p-5">
            <h3 className="font-semibold text-text-primary mb-1">Android 8.0 – 9.0 (Oreo / Pie)</h3>
            <p className="text-text-secondary text-sm">
              Good compatibility. All core features work correctly. The
              &quot;Install Unknown Apps&quot; permission system introduced in
              Oreo applies — grant it to your browser once during setup.
            </p>
          </div>
          <div className="card p-5">
            <h3 className="font-semibold text-text-primary mb-1">Android 10 – 12 (Q / R / S)</h3>
            <p className="text-text-secondary text-sm">
              Full compatibility with all features. Smooth animations, fast
              launch times, and stable background operation. Recommended range
              for the best Raj Luck APK experience.
            </p>
          </div>
          <div className="card p-5">
            <h3 className="font-semibold text-text-primary mb-1">Android 13 &amp; 14 (T / U)</h3>
            <p className="text-text-secondary text-sm">
              Fully supported. The APK takes advantage of scoped storage and
              fine-grained permission controls introduced in Android 13,
              providing enhanced privacy on newer devices.
            </p>
          </div>
        </div>
      </section>

      {/* Storage & RAM Tips */}
      <section className="section-padding bg-primary-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-6">
            Managing Storage &amp; RAM for Best Performance
          </h2>
          <p className="text-text-secondary mb-4">
            Even on a compatible device, poor storage hygiene or RAM pressure
            can hurt performance. Follow these tips to keep Raj Luck running
            smoothly:
          </p>
          <ul className="space-y-3 text-text-secondary">
            <li className="flex items-start gap-3">
              <span className="step-number">1</span>
              <span>
                Keep at least <strong>200 MB of free internal storage</strong>
                at all times. The app caches game assets locally for faster
                loading; without free space, it falls back to slower on-demand
                fetching.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="step-number">2</span>
              <span>
                <strong>Close unused background apps</strong> before launching
                Raj Luck if your device has 2 GB or less RAM. Android&apos;s
                memory manager may kill the game session to free memory for
                other apps.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="step-number">3</span>
              <span>
                <strong>Clear the app cache</strong> periodically via Settings
                &rarr; Apps &rarr; Raj Luck &rarr; Storage &rarr; Clear Cache.
                This does not delete your account data and can resolve sluggish
                performance.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="step-number">4</span>
              <span>
                If your device supports a <strong>microSD card</strong>, use it
                for photos and media to free up internal storage for app data.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="section-padding max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-text-primary mb-6">
          Troubleshooting Compatibility Issues
        </h2>
        <div className="space-y-4">
          <div className="card p-5">
            <h3 className="font-semibold text-text-primary mb-1">
              &quot;App not compatible with your device&quot;
            </h3>
            <p className="text-text-secondary text-sm">
              This usually means your Android version is below 6.0. Check your
              version in Settings &rarr; About Phone &rarr; Android Version. If
              you are on 6.0+ and still see this, try clearing your browser
              cache and re-downloading the APK.
            </p>
          </div>
          <div className="card p-5">
            <h3 className="font-semibold text-text-primary mb-1">
              App installs but crashes on launch
            </h3>
            <p className="text-text-secondary text-sm">
              Force-stop the app, clear its cache, and re-launch. If the issue
              persists, uninstall and reinstall from a fresh APK download. Check
              that your device has at least 150 MB of free space.
            </p>
          </div>
          <div className="card p-5">
            <h3 className="font-semibold text-text-primary mb-1">
              Slow performance or lag during gameplay
            </h3>
            <p className="text-text-secondary text-sm">
              Enable the in-app &quot;Data Saver&quot; mode in Settings to
              reduce animation complexity. Also check that you are on a stable
              network connection — packet loss causes visual stutters that
              resemble hardware lag.
            </p>
          </div>
          <div className="card p-5">
            <h3 className="font-semibold text-text-primary mb-1">
              Installation fails on MIUI (Xiaomi) devices
            </h3>
            <p className="text-text-secondary text-sm">
              MIUI has an extra security layer. Go to Settings &rarr; Privacy
              &rarr; Special Permissions &rarr; Install Unknown Apps and enable
              it for your browser. Additionally, disable MIUI Optimization in
              Developer Options if prompted.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <a
            href={CTA_LINK}
            className="btn-primary inline-block px-8 py-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Raj Luck APK Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-surface max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-text-primary mb-8">
          Compatibility FAQs
        </h2>
        <div className="space-y-5">
          <div className="card p-6">
            <h3 className="font-semibold text-text-primary mb-2">
              Does Raj Luck APK work on Android tablets?
            </h3>
            <p className="text-text-secondary text-sm">
              Yes. The UI scales to larger screens and tablet mode is fully
              supported on devices running Android 6.0 or later with sufficient
              RAM and storage.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold text-text-primary mb-2">
              Is the APK compatible with Android emulators?
            </h3>
            <p className="text-text-secondary text-sm">
              For security reasons, the Raj Luck APK includes emulator
              detection and may restrict certain features when running on
              BlueStacks, LDPlayer, or similar. Use a real Android device for
              the full experience.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold text-text-primary mb-2">
              How much mobile data does the app use?
            </h3>
            <p className="text-text-secondary text-sm">
              A typical gaming session uses approximately 5–15 MB of data per
              hour depending on game type. Enabling Data Saver mode in the app
              settings can reduce this by up to 40%.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold text-text-primary mb-2">
              Can I move the Raj Luck APK to an SD card after installing?
            </h3>
            <p className="text-text-secondary text-sm">
              This depends on your device manufacturer&apos;s policy. Some
              brands allow app migration to SD card in Settings &rarr; Apps.
              However, we recommend keeping the app on internal storage for
              faster load times.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding hero-gradient-soft text-center">
        <h2 className="text-3xl font-bold text-text-primary mb-4">
          Your Device Is Compatible — Download Now
        </h2>
        <p className="text-text-secondary mb-8 max-w-xl mx-auto">
          If your device meets the requirements above, you are ready to go.
          Download the Raj Luck APK from the official source and start playing
          within minutes.
        </p>
        <a
          href={CTA_LINK}
          className="btn-cta inline-block text-lg px-10 py-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Raj Luck APK Free
        </a>
      </section>

      {/* Internal Links */}
      <section className="section-padding max-w-4xl mx-auto">
        <h2 className="text-xl font-bold text-text-primary mb-4">
          Related Raj Luck APK Guides
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link href="/rajluckapk" className="btn-outline text-center block py-3">
            Understanding APK Files
          </Link>
          <Link href="/raj-luck-game-apk" className="btn-outline text-center block py-3">
            APK Security &amp; Safety
          </Link>
          <Link href="/rajluck-apk-download" className="btn-outline text-center block py-3">
            Version History &amp; Changelogs
          </Link>
          <Link href="/raj-luck-game-apk-download" className="btn-outline text-center block py-3">
            Troubleshooting Download Errors
          </Link>
        </div>
      </section>
    </main>
  );
}
