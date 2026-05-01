import Link from "next/link";

export const metadata = {
  title: "Accessibility | Hornaman Chiropractic Center",
  description: "Accessibility statement for Hornaman Chiropractic Center, Union City, PA.",
};

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen bg-white py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-sm text-yellow-green font-semibold hover:underline mb-8 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-navy mb-2">Accessibility Statement</h1>
        <p className="text-gray-400 text-sm mb-10">Last updated: May 1, 2026</p>
        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-navy mb-3">Our Commitment</h2>
            <p>Hornaman Chiropractic Center is committed to ensuring that our website is accessible to all people, including individuals with disabilities. We strive to meet or exceed the requirements of the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-navy mb-3">Measures We Take</h2>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Semantic HTML structure for compatibility with screen readers</li>
              <li>Sufficient color contrast between text and backgrounds</li>
              <li>Descriptive alt text on images</li>
              <li>Keyboard-navigable interface</li>
              <li>Responsive design that works across all screen sizes and devices</li>
              <li>Clear, readable typography</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold text-navy mb-3">Physical Office Accessibility</h2>
            <p>Our office at 107 N. Main St., Union City, PA is committed to providing accessible care to all patients. If you have specific accessibility needs or require accommodations for your visit, please call us in advance at (814) 438-7242 and we will do our best to accommodate you.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-navy mb-3">Feedback and Contact</h2>
            <p>We welcome your feedback on the accessibility of our website. If you experience any barriers, please contact us:</p>
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
