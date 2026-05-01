import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Hornaman Chiropractic Center",
  description: "Privacy Policy for Hornaman Chiropractic Center, Union City, PA.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-sm text-yellow-green font-semibold hover:underline mb-8 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-navy mb-2">Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-10">Last updated: May 1, 2026</p>
        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-navy mb-3">1. Introduction</h2>
            <p>Hornaman Chiropractic Center (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), located at 107 N. Main St., Union City, PA 16438, is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard information you provide when visiting our website at hornamanchiropracticcenter.com.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-navy mb-3">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Contact information</strong> — name, phone number, and email address when you book an appointment or contact us.</li>
              <li><strong>Appointment data</strong> — date, time, and type of appointment booked through our online scheduling system.</li>
              <li><strong>Usage data</strong> — pages visited, time spent on site, and browser/device information collected automatically.</li>
            </ul>
            <p className="mt-3">We do not collect payment information directly. Appointment scheduling is handled through Cal.com, which has its own privacy policy.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-navy mb-3">3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Confirm and manage your appointments</li>
              <li>Send appointment reminders via SMS or email (with your consent)</li>
              <li>Respond to inquiries and provide customer service</li>
              <li>Improve our website and services</li>
            </ul>
            <p className="mt-3">We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-navy mb-3">4. Medical Information</h2>
            <p>Any health or medical information you share with us is protected under HIPAA. Please review our <Link href="/hipaa-policy" className="text-yellow-green hover:underline">HIPAA Privacy Policy</Link> for full details on how we handle protected health information (PHI).</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-navy mb-3">5. Cookies and Tracking</h2>
            <p>Our website may use cookies and similar technologies to improve your browsing experience and analyze site traffic. You may disable cookies in your browser settings, though some features of the site may not function properly as a result.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-navy mb-3">6. Third-Party Services</h2>
            <p>Our website uses the following third-party services:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Cal.com</strong> — online appointment scheduling</li>
              <li><strong>Google Maps</strong> — embedded map for location</li>
              <li><strong>Cloudflare</strong> — website hosting and security</li>
            </ul>
            <p className="mt-3">Each of these services has its own privacy policy governing data they collect.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-navy mb-3">7. Data Security</h2>
            <p>We implement reasonable technical and administrative measures to protect your personal information. Our website is served over HTTPS with SSL/TLS encryption. However, no method of transmission over the internet is 100% secure.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-navy mb-3">8. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of appointment reminder communications at any time</li>
            </ul>
            <p className="mt-3">To exercise these rights, contact us at (814) 438-7242 or visit our office.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-navy mb-3">9. Children&apos;s Privacy</h2>
            <p>Our website is not directed to children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us immediately.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-navy mb-3">10. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Continued use of our website constitutes acceptance of the updated policy.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-navy mb-3">11. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, contact us at:</p>
            <address className="not-italic mt-2">
              <strong>Hornaman Chiropractic Center</strong><br />
              107 N. Main St.<br />
              Union City, PA 16438<br />
              <a href="tel:+18144387242" className="text-yellow-green hover:underline">(814) 438-7242</a>
            </address>
          </section>
        </div>
      </div>
    </main>
  );
}
