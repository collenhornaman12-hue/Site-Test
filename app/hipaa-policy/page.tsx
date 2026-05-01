import Link from "next/link";

export const metadata = {
  title: "HIPAA Privacy Policy | Hornaman Chiropractic Center",
  description: "HIPAA Notice of Privacy Practices for Hornaman Chiropractic Center, Union City, PA.",
};

export default function HipaaPolicyPage() {
  return (
    <main className="min-h-screen bg-white py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-sm text-yellow-green font-semibold hover:underline mb-8 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-navy mb-2">HIPAA Notice of Privacy Practices</h1>
        <p className="text-gray-400 text-sm mb-2">Last updated: May 1, 2026</p>
        <div className="bg-navy/5 border-l-4 border-yellow-green rounded p-4 mb-10">
          <p className="text-sm text-gray-700 font-medium">THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY.</p>
        </div>
        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-navy mb-3">Our Commitment to Your Privacy</h2>
            <p>Hornaman Chiropractic Center is committed to protecting the privacy of your health information. We are required by law to maintain the privacy of your Protected Health Information (PHI), provide you with this Notice of Privacy Practices, and follow the terms of the notice currently in effect.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-navy mb-3">How We May Use and Disclose Your Health Information</h2>
            <h3 className="text-base font-semibold text-navy mt-4 mb-2">Treatment</h3>
            <p>We may use your health information to provide, coordinate, or manage your chiropractic care and related services.</p>
            <h3 className="text-base font-semibold text-navy mt-4 mb-2">Payment</h3>
            <p>We may use or disclose your health information to obtain payment for services provided, including submitting claims to your insurance company.</p>
            <h3 className="text-base font-semibold text-navy mt-4 mb-2">Healthcare Operations</h3>
            <p>We may use or disclose your health information in connection with our practice operations, including quality assessment, staff training, and business management activities.</p>
            <h3 className="text-base font-semibold text-navy mt-4 mb-2">Appointment Reminders</h3>
            <p>We may contact you to remind you of upcoming appointments via phone, text message, or email. You may request a different method of contact at any time.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-navy mb-3">Uses and Disclosures Requiring Your Authorization</h2>
            <p>Other uses and disclosures of your health information not described in this notice will be made only with your written authorization. We will not use or disclose your PHI for marketing purposes or sell your PHI without your written authorization.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-navy mb-3">Your Rights Regarding Your Health Information</h2>
            <h3 className="text-base font-semibold text-navy mt-4 mb-2">Right to Access</h3>
            <p>You have the right to inspect and obtain a copy of your health information maintained in our records.</p>
            <h3 className="text-base font-semibold text-navy mt-4 mb-2">Right to Amend</h3>
            <p>You have the right to request that we amend your health information if you believe it is incorrect or incomplete.</p>
            <h3 className="text-base font-semibold text-navy mt-4 mb-2">Right to Request Restrictions</h3>
            <p>You have the right to request restrictions on certain uses and disclosures of your health information.</p>
            <h3 className="text-base font-semibold text-navy mt-4 mb-2">Right to a Paper Copy of This Notice</h3>
            <p>You have the right to receive a paper copy of this notice at any time, even if you have agreed to receive it electronically.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-navy mb-3">Complaints</h2>
            <p>If you believe your privacy rights have been violated, you may file a complaint with our office or with the U.S. Department of Health and Human Services Office for Civil Rights. You will not be retaliated against for filing a complaint.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-navy mb-3">Contact Our Privacy Officer</h2>
            <address className="not-italic mt-2">
              <strong>Hornaman Chiropractic Center</strong><br />
              Attn: Privacy Officer<br />
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
