import Link from "next/link";

export const metadata = {
  title: "Healthcare Disclaimer | Hornaman Chiropractic Center",
  description: "Healthcare disclaimer for Hornaman Chiropractic Center, Union City, PA.",
};

export default function HealthcareDisclaimerPage() {
  return (
    <main className="min-h-screen bg-white py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-sm text-yellow-green font-semibold hover:underline mb-8 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-navy mb-2">Healthcare Disclaimer</h1>
        <p className="text-gray-400 text-sm mb-10">Last updated: May 1, 2026</p>
        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-navy mb-3">Not a Substitute for Professional Medical Advice</h2>
            <p>The information provided on the Hornaman Chiropractic Center website is intended for general informational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment.</p>
            <p className="mt-3">Always seek the advice of Dr. Hornaman or another qualified healthcare provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay seeking it because of something you have read on this website.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-navy mb-3">No Doctor-Patient Relationship</h2>
            <p>Use of this website does not create a doctor-patient relationship between you and Hornaman Chiropractic Center or Dr. Thomas J. Hornaman. A doctor-patient relationship is only established upon an in-person consultation and examination.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-navy mb-3">Emergency Situations</h2>
            <p>If you are experiencing a medical emergency, call 911 or go to the nearest emergency room immediately. Do not use this website to seek emergency assistance.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-navy mb-3">Accuracy of Information</h2>
            <p>While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind about the completeness, accuracy, or reliability of the information contained on this website. Any reliance you place on such information is strictly at your own risk.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-navy mb-3">Results Not Guaranteed</h2>
            <p>Patient testimonials and results described on this website reflect individual experiences. Chiropractic results vary from patient to patient. We do not claim that any particular outcome will be achieved.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-navy mb-3">Contact Us</h2>
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
