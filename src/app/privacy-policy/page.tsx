import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | BRIPHA',
  description: 'Privacy Policy for Bripha, a unit of Brindavan Phosphates Pvt Ltd.',
};

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-neutral-500 font-normal">
              Effective Date: November 24, 2026
            </p>
          </header>

          <div className="prose prose-slate max-w-none text-neutral-700 leading-relaxed space-y-8 text-[15px]">
            {/* Section 1 */}
            <section>
              <h2 className="text-xl font-medium text-heading tracking-tight mb-3">
                1. Introduction
              </h2>
              <p>
                Welcome to the website of Bripha, a unit of Brindavan Phosphates
                Pvt Ltd (&quot;Bripha,&quot; &quot;we,&quot; &quot;us,&quot; or
                &quot;our&quot;). We are committed to protecting your privacy and
                ensuring that your personal information is handled in a safe and
                responsible manner. This Privacy Policy outlines how we collect,
                use, and protect the information you provide when visiting our
                informational website.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl font-medium text-heading tracking-tight mb-3">
                2. Information We Collect
              </h2>
              <p>
                As our website is primarily informational, we limit the collection
                of personal data. We only collect information through the following
                channels:
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-2">
                <li>
                  <strong>Information You Provide Directly:</strong> When you use
                  our &quot;Contact Us&quot; or manufacturing enquiry form, we may
                  collect personal details such as your name, email address,
                  company name, phone number, and any other information you choose
                  to include in your message.
                </li>
                <li>
                  <strong>Information Collected Automatically (Cookies):</strong> We
                  use standard cookies and similar tracking technologies to
                  collect non-personal information about your visit. This may include
                  your IP address, browser type, operating system, pages viewed,
                  and the date and time of your visit.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl font-medium text-heading tracking-tight mb-3">
                3. How We Use Your Information
              </h2>
              <p>
                We use the information we collect solely for legitimate business
                purposes, including:
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-2">
                <li>
                  To respond to your inquiries regarding our contract
                  manufacturing services.
                </li>
                <li>
                  To analyze website traffic and user behavior to improve our
                  website&apos;s functionality and user experience.
                </li>
                <li>
                  To ensure the security and proper functioning of our website.
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl font-medium text-heading tracking-tight mb-3">
                4. Data Sharing and Disclosure
              </h2>
              <p>
                We do not sell, rent, or trade your personal information to third
                parties. We may share your information only in the following
                circumstances:
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-2">
                <li>
                  <strong>Service Providers:</strong> With trusted third-party
                  vendors who assist us in operating our website or conducting our
                  business (e.g., website hosting, form delivery), provided they
                  agree to keep this information confidential.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law,
                  regulation, or legal process to protect the rights, property, or
                  safety of Bripha, our users, or others.
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl font-medium text-heading tracking-tight mb-3">
                5. International Users
              </h2>
              <p>
                Bripha is based in India. If you are accessing our website from
                outside India, please be aware that your information may be
                transferred to, stored, and processed in India. By using our
                website and providing your information, you consent to this transfer
                and processing in accordance with Indian laws.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-xl font-medium text-heading tracking-tight mb-3">
                6. Data Security
              </h2>
              <p>
                We implement industry-standard security measures to protect your
                personal information from unauthorized access, alteration,
                disclosure, or destruction. However, please note that no method of
                transmission over the Internet or electronic storage is 100% secure.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-xl font-medium text-heading tracking-tight mb-3">
                7. Your Rights
              </h2>
              <p>
                Depending on your jurisdiction, you may have the right to request
                access to, correction of, or deletion of the personal information
                you have submitted to us via our contact form. To exercise these
                rights, please contact us using the details provided below.
              </p>
            </section>

            {/* Section 8 */}
            <section className="bg-slate-50 border border-slate-200 p-6 rounded-none mt-8">
              <h2 className="text-xl font-medium text-heading tracking-tight mb-3">
                8. Contact Us
              </h2>
              <p className="mb-4">
                If you have any questions or concerns about this Privacy Policy,
                please contact us at:
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
