'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    workEmail: '',
    phoneNumber: '',
    manufacturingRequirement: '',
    dosageForm: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://formspree.io/f/mqpqwynn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          'Full Name': formData.fullName,
          'Company Name': formData.companyName,
          email: formData.workEmail,
          'Work Email': formData.workEmail,
          'Phone Number': formData.phoneNumber,
          'Manufacturing Requirement':
            formData.manufacturingRequirement || 'Not Specified',
          'Product / Dosage Form': formData.dosageForm || 'Not Specified',
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          fullName: '',
          companyName: '',
          workEmail: '',
          phoneNumber: '',
          manufacturingRequirement: '',
          dosageForm: '',
          message: '',
        });
      } else {
        const data = await response.json().catch(() => null);
        const errorText =
          data?.errors?.map((err: { message: string }) => err.message).join(', ') ||
          'Failed to send enquiry. Please check your entries and try again.';
        setErrorMessage(errorText);
      }
    } catch {
      setErrorMessage(
        'Unable to connect to the server. Please check your connection and try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-white pt-6 pb-16 sm:pt-10 sm:pb-24 lg:pt-12 lg:pb-32 text-white select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full bg-[#082a44] p-6 sm:p-10 lg:p-14 overflow-hidden border border-white/10 shadow-2xl">
          {/* Subtle Brushed Metal Texture Overlay */}
          <div
            className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage: "url('/brushed_metal_texture.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Heading, Subtitle & Interactive Google Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col justify-between h-full"
          >
            <div>
              <h2 className="font-outfit font-medium text-3xl sm:text-4xl lg:text-[40px] text-white tracking-tight leading-[1.15]">
                Looking For The Right <br className="hidden sm:inline" />
                Manufacturing Partner?
              </h2>
              <p className="mt-4 sm:mt-5 text-[#9cb2c2] text-[14px] sm:text-[15px] leading-relaxed font-normal max-w-lg">
                Tell us about your pharmaceutical manufacturing requirements. Our team will review your enquiry and explore how BRIPHA can support your product needs.
              </p>
            </div>

            {/* Embedded Google Map (Panoli, Gujarat) */}
            <div className="mt-8 sm:mt-10 lg:mt-12 w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] max-h-[300px] overflow-hidden border border-white/10 shadow-lg bg-slate-900 rounded-none">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.6140759165696!2d72.9992829!3d21.561940500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0230068cfd289%3A0xd670f8953f43a3fd!2sBrindavan%20Phosphates%20Pvt%20Ltd%20(BRIPHA)!5e0!3m2!1sen!2sin!4v1795536132540!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="BRIPHA Facility Map"
                className="w-full h-full filter saturate-95 contrast-105"
              />
            </div>
          </motion.div>

          {/* Right Column: Manufacturing Requirement Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <div className="bg-[#16374f]/70 backdrop-blur-sm border border-white/10 p-6 sm:p-8 lg:p-10 shadow-2xl rounded-none">
              <h3 className="text-center text-white text-[15px] sm:text-[16px] font-medium tracking-tight border-b border-white/10 pb-4 sm:pb-5 mb-6 sm:mb-7">
                Discuss Your Manufacturing Requirement
              </h3>

              {submitted ? (
                <div className="py-16 text-center flex flex-col items-center justify-center space-y-4">
                  <CheckCircle2 className="w-14 h-14 text-[#1474B8] animate-bounce" />
                  <h4 className="text-xl font-medium text-white tracking-tight">
                    Enquiry Received
                  </h4>
                  <p className="text-sm text-[#9cb2c2] max-w-md leading-relaxed">
                    Thank you for reaching out. Our technical and business development team will review your specifications and contact you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-medium text-[#1474B8] hover:underline uppercase tracking-wider"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {/* Row 1: Full Name & Company Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-white text-[12px] sm:text-[13px] font-normal mb-1.5"
                      >
                        Full Name
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="w-full bg-[#1b4260]/60 border border-white/10 focus:border-[#1474B8] focus:ring-1 focus:ring-[#1474B8] text-white text-[13.5px] px-3.5 py-2.5 rounded-none outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="companyName"
                        className="block text-white text-[12px] sm:text-[13px] font-normal mb-1.5"
                      >
                        Company Name
                      </label>
                      <input
                        id="companyName"
                        name="companyName"
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) =>
                          setFormData({ ...formData, companyName: e.target.value })
                        }
                        className="w-full bg-[#1b4260]/60 border border-white/10 focus:border-[#1474B8] focus:ring-1 focus:ring-[#1474B8] text-white text-[13.5px] px-3.5 py-2.5 rounded-none outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Work Email & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label
                        htmlFor="workEmail"
                        className="block text-white text-[12px] sm:text-[13px] font-normal mb-1.5"
                      >
                        Work Email
                      </label>
                      <input
                        id="workEmail"
                        name="email"
                        type="email"
                        required
                        value={formData.workEmail}
                        onChange={(e) =>
                          setFormData({ ...formData, workEmail: e.target.value })
                        }
                        className="w-full bg-[#1b4260]/60 border border-white/10 focus:border-[#1474B8] focus:ring-1 focus:ring-[#1474B8] text-white text-[13.5px] px-3.5 py-2.5 rounded-none outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phoneNumber"
                        className="block text-white text-[12px] sm:text-[13px] font-normal mb-1.5"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        required
                        value={formData.phoneNumber}
                        onChange={(e) =>
                          setFormData({ ...formData, phoneNumber: e.target.value })
                        }
                        className="w-full bg-[#1b4260]/60 border border-white/10 focus:border-[#1474B8] focus:ring-1 focus:ring-[#1474B8] text-white text-[13.5px] px-3.5 py-2.5 rounded-none outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 3: Manufacturing Requirement & Product / Dosage Form */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label
                        htmlFor="manufacturingRequirement"
                        className="block text-white text-[12px] sm:text-[13px] font-normal mb-1.5"
                      >
                        Manufacturing Requirement
                      </label>
                      <select
                        id="manufacturingRequirement"
                        name="manufacturingRequirement"
                        value={formData.manufacturingRequirement}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            manufacturingRequirement: e.target.value,
                          })
                        }
                        className="w-full bg-[#1b4260]/60 border border-white/10 focus:border-[#1474B8] focus:ring-1 focus:ring-[#1474B8] text-white text-[13.5px] px-3.5 py-2.5 rounded-none outline-none transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-[#16374f] text-white">
                          Select requirement
                        </option>
                        <option
                          value="Contract Manufacturing"
                          className="bg-[#16374f] text-white"
                        >
                          Contract Manufacturing (P2P)
                        </option>
                        <option
                          value="Loan Licence Manufacturing"
                          className="bg-[#16374f] text-white"
                        >
                          Loan Licence Manufacturing
                        </option>
                        <option
                          value="Product Development & Manufacturing"
                          className="bg-[#16374f] text-white"
                        >
                          Product Development &amp; Manufacturing
                        </option>
                        <option
                          value="Other Manufacturing Inquiry"
                          className="bg-[#16374f] text-white"
                        >
                          Other Manufacturing Inquiry
                        </option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="dosageForm"
                        className="block text-white text-[12px] sm:text-[13px] font-normal mb-1.5"
                      >
                        Product / Dosage Form
                      </label>
                      <select
                        id="dosageForm"
                        name="dosageForm"
                        value={formData.dosageForm}
                        onChange={(e) =>
                          setFormData({ ...formData, dosageForm: e.target.value })
                        }
                        className="w-full bg-[#1b4260]/60 border border-white/10 focus:border-[#1474B8] focus:ring-1 focus:ring-[#1474B8] text-white text-[13.5px] px-3.5 py-2.5 rounded-none outline-none transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-[#16374f] text-white">
                          Select dosage form
                        </option>
                        <option value="Tablets" className="bg-[#16374f] text-white">
                          Tablets (Uncoated / Coated / Dispersible)
                        </option>
                        <option value="Capsules" className="bg-[#16374f] text-white">
                          Capsules (Hard Gelatin / HPMC)
                        </option>
                        <option
                          value="Liquid Orals"
                          className="bg-[#16374f] text-white"
                        >
                          Liquid Orals (Syrups &amp; Suspensions)
                        </option>
                        <option
                          value="Semisolids"
                          className="bg-[#16374f] text-white"
                        >
                          Semisolids (Ointments &amp; Creams)
                        </option>
                        <option
                          value="Multiple Dosage Forms"
                          className="bg-[#16374f] text-white"
                        >
                          Multiple Dosage Forms
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Tell Us About Your Requirements */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-white text-[12px] sm:text-[13px] font-normal mb-1.5"
                    >
                      Tell Us About Your Requirements
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-[#1b4260]/60 border border-white/10 focus:border-[#1474B8] focus:ring-1 focus:ring-[#1474B8] text-white text-[13.5px] px-3.5 py-2.5 rounded-none outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Error Notification */}
                  {errorMessage && (
                    <div className="p-3 bg-red-950/70 border border-red-500/40 text-red-200 text-xs sm:text-[13px] rounded-none">
                      {errorMessage}
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="relative overflow-hidden w-full inline-flex items-center justify-center gap-2 bg-[#1474B8] hover:bg-[#11629c] text-white text-[14px] sm:text-[15px] font-normal tracking-tight py-3 sm:py-3.5 transition-all duration-200 shadow-md active:scale-[0.99] cursor-pointer group disabled:opacity-70 rounded-none"
                    >
                      {/* Brushed Metal Texture Overlay matching all primary CTAs */}
                      <div
                        className="absolute inset-0 opacity-35 mix-blend-overlay pointer-events-none transition-opacity duration-300 group-hover:opacity-50"
                        style={{
                          backgroundImage: "url('/brushed_metal_texture.png')",
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      />
                      <span className="relative z-10 font-normal">
                        {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                      </span>
                      <ChevronRight className="w-4 h-4 ml-0.5 transition-transform duration-200 group-hover:translate-x-0.5 relative z-10" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
  );
}
