import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | BRIPHA',
  description:
    'Terms and Conditions for Bripha, a unit of Brindavan Phosphates Pvt Ltd.',
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-neutral-800 font-outfit antialiased selection:bg-[#1474B8] selection:text-white">
      {/* Header Bar */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-4 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative h-8 w-36">
              <Image
                src="/logo.svg"
                alt="BRIPHA Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1474B8] hover:text-[#0b5488] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main Document Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <article className="bg-white border border-slate-200 rounded-none p-6 sm:p-10 lg:p-12 shadow-sm">
          <header className="border-b border-slate-200 pb-6 mb-8">
            <span className="text-xs font-semibold text-[#1474B8] tracking-widest uppercase block mb-1">
              Legal &amp; Compliance
            </span>
            <h1 className="text-3xl sm:text-4xl font-medium text-heading tracking-tight">
              Terms &amp; Conditions
            </h1>
            <p className="mt-2 text-sm text-neutral-500 font-normal">
              Effective Date: November 24, 2026
            </p>
          </header>

          <div className="prose prose-slate max-w-none text-neutral-700 leading-relaxed space-y-8 text-[15px]">
            {/* Section 1 */}
            <section>
              <h2 className="text-xl font-medium text-heading tracking-tight mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using this website, you accept and agree to be
                bound by these Terms and Conditions. If you do not agree to these
                terms, please do not use our website.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl font-medium text-heading tracking-tight mb-3">
                2. Purpose of the Website
              </h2>
              <p>
                This website is for general informational purposes only. It is
                designed to provide information about Bripha, Brindavan Phosphates
                Pvt Ltd, and our pharmaceutical contract manufacturing services.
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-2">
                <li>
                  <strong>No Medical Advice:</strong> Nothing on this website
                  constitutes medical, pharmaceutical, or professional healthcare
                  advice.
                </li>
                <li>
                  <strong>No Commercial Transactions:</strong> This website does
                  not facilitate online sales, e-commerce, or the direct purchase
                  of pharmaceutical products.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl font-medium text-heading tracking-tight mb-3">
                3. Inquiries and Contract Manufacturing Services
              </h2>
              <p>
                Submitting an inquiry through our &quot;Contact Us&quot; form does
                not create a binding contract, client relationship, or
                manufacturing agreement between you and Bripha. All contract
                manufacturing services, agreements, pricing, and specific terms of
                service are negotiated and executed offline through formal written
                contracts.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl font-medium text-heading tracking-tight mb-3">
                4. Intellectual Property Rights
              </h2>
              <p>
                All content on this website, including text, graphics, logos,
                images, and software, is the property of Brindavan Phosphates Pvt
                Ltd or its content suppliers and is protected by Indian and
                international copyright and trademark laws. You may not reproduce,
                distribute, or modify any part of this website without our prior
                written consent.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl font-medium text-heading tracking-tight mb-3">
                5. Disclaimer of Warranties
              </h2>
              <p>
                While we strive to keep the information on this website accurate
                and up-to-date, Bripha makes no representations or warranties of
                any kind, express or implied, about the completeness, accuracy,
                reliability, suitability, or availability of the website or the
                information, products, or services contained on the website. Your
                use of this website is at your own risk.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-xl font-medium text-heading tracking-tight mb-3">
                6. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, Bripha and Brindavan
                Phosphates Pvt Ltd shall not be liable for any direct, indirect,
                incidental, consequential, or punitive damages arising out of your
                access to, use of, or inability to use this website, or any errors
                or omissions in the content thereof.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-xl font-medium text-heading tracking-tight mb-3">
                7. Third-Party Links
              </h2>
              <p>
                Our website may contain links to external websites that are not
                provided or maintained by Bripha. We do not guarantee the
                accuracy, relevance, timeliness, or completeness of any
                information on these external websites and are not responsible for
                their content or privacy practices.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-xl font-medium text-heading tracking-tight mb-3">
                8. Governing Law and Jurisdiction
              </h2>
              <p>
                These Terms and Conditions shall be governed by and construed in
                accordance with the laws of India. Any disputes relating to these
                terms and conditions shall be subject to the exclusive
                jurisdiction of the courts located in Ankleshwar, Gujarat, India.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-xl font-medium text-heading tracking-tight mb-3">
                9. Changes to These Terms
              </h2>
              <p>
                We reserve the right to modify or replace these Terms and
                Conditions at any time without prior notice. Any changes will be
                posted on this page with an updated Effective Date. Your continued
                use of the website after any changes constitutes acceptance of the
                new terms.
              </p>
            </section>

            {/* Section 10 */}
            <section className="bg-slate-50 border border-slate-200 p-6 rounded-none mt-8">
              <h2 className="text-xl font-medium text-heading tracking-tight mb-3">
                10. Contact Information
              </h2>
              <p className="mb-4">
                For any questions regarding these Terms and Conditions, please
                contact us at:
              </p>
              <div className="space-y-1 text-sm text-neutral-800">
                <p>
                  <strong>Company:</strong> Bripha (A Unit of Brindavan
                  Phosphates Pvt Ltd)
                </p>
                <p>
                  <strong>Address:</strong> 3531/2, GIDC Estate, Panoli,
                  Ankleshwar, Gujarat 394116, India
                </p>
                <p>
                  <strong>Email:</strong>{' '}
                  <a
                    href="mailto:legal@bripha.in"
                    className="text-[#1474B8] hover:underline"
                  >
                    legal@bripha.in
                  </a>
                </p>
              </div>
            </section>
          </div>
        </article>
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-neutral-500">
        <p>
          &copy; {new Date().getFullYear()} Brindavan Phosphates Private Limited.
          All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
