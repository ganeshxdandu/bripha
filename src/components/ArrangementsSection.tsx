'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Info } from 'lucide-react';

const ARRANGEMENTS = [
  {
    number: '01',
    title: 'Contract Manufacturing',
    description:
      'Manufacturing support for pharmaceutical companies seeking an external production partner.',
    details: {
      headline: 'Principal-to-Principal (P2P)',
      highlights: [
        'Turnkey (Full material procurement) or job-work models',
        'cGMP & WHO-GMP compliant batch processing',
        'Complete analytical testing & Certificate of Analysis (CoA)',
        'Full regulatory documentation & technical file support',
      ],
      scope:
        'Ideal for pharmaceutical companies seeking scalable commercial supply without capital facility investment.',
    },
  },
  {
    number: '02',
    title: 'Loan Licence Manufacturing',
    description:
      'Manufacturing under a loan licence arrangement, subject to applicable regulatory requirements.',
    details: {
      headline: 'Licensed Batch Production',
      highlights: [
        'Manufacture under client’s drug licence using BRIPHA approved facility',
        'State FDA regulatory documentation and joint technical filings',
        'Client-supervised quality audits and batch manufacturing inspection',
        'Complete batch records and data-integrity traceability',
      ],
      scope:
        'Ideal for brand holders looking to utilize established, licensed infrastructure while maintaining direct licence ownership.',
    },
  },
  {
    number: '03',
    title: 'Product Development & Manufacturing',
    description:
      'Collaborate on new pharmaceutical products and their manufacturing requirements.',
    details: {
      headline: 'Formulation, Scale-up & Supply',
      highlights: [
        'Pre-formulation studies, trial batch runs & method transfer',
        'Packaging design: Alu-Alu, blister, bottle, strip & specialized tubes',
        'Stability studies and shelf-life testing support',
        'Seamless pilot-to-commercial scale-up protocols',
      ],
      scope:
        'Ideal for enterprises developing new dosage formulations, line extensions, or specialized delivery systems.',
    },
  },
];

export default function ArrangementsSection() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  return (
    <section
      id="arrangements"
      className="py-20 lg:py-28 bg-[#F6F8F9] text-neutral-800 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header: Left Title & Subtitle, Right CTA Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <h2 className="font-outfit font-medium text-2xl sm:text-3xl lg:text-[36px] lg:leading-[1.2] text-heading tracking-tight">
              Contract Manufacturing <span className="text-[#1474B8]">Arrangements.</span>
            </h2>
            <p className="mt-2.5 sm:mt-3.5 text-[14.5px] sm:text-[16px] text-neutral-500 font-normal leading-relaxed tracking-tight max-w-md">
              BRIPHA supports different manufacturing arrangements across its
              tablet, capsule, oral-liquid and semisolid capabilities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full sm:w-auto shrink-0"
          >
            <Link
              href="#capabilities"
              className="relative overflow-hidden w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0B63B6] hover:bg-[#094F92] text-white text-[13.5px] sm:text-[14px] font-normal tracking-tight px-5 sm:px-6 py-3 transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98] group"
            >
              {/* Brushed Metal Texture Overlay */}
              <div
                className="absolute inset-0 opacity-35 mix-blend-overlay pointer-events-none transition-opacity duration-300 group-hover:opacity-50"
                style={{
                  backgroundImage: "url('/brushed_metal_texture.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <span className="relative z-10">Discuss Your Manufacturing Requirement</span>
              <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 relative z-10 shrink-0" />
            </Link>
          </motion.div>
        </div>

        {/* 3 Rows with Top and Bottom Dividers */}
        <div className="border-t border-[#E2E4E5]">
          {ARRANGEMENTS.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-b border-[#E2E4E5] py-7 sm:py-9 lg:py-11 flex items-center justify-between gap-4 sm:gap-8 lg:gap-10 transition-colors duration-200 group hover:bg-white/40 px-2 sm:px-4 relative"
            >
              {/* Left Column: Number + Text Block */}
              <div className="flex items-center gap-4 sm:gap-8 lg:gap-14 min-w-0">
                {/* Large Muted Number: 01, 02, 03 - Semibold as designed */}
                <span className="font-outfit font-semibold text-5xl sm:text-6xl lg:text-[72px] text-[#CBD5E1] shrink-0 leading-none select-none transition-colors duration-200 group-hover:text-[#94A3B8] w-[70px] sm:w-[90px] lg:w-[100px]">
                  {item.number}
                </span>

                {/* Text Block: Title & Description */}
                <div className="min-w-0 pr-1">
                  <h3 className="font-outfit font-medium text-[17px] sm:text-xl lg:text-[22px] text-heading tracking-tight transition-colors duration-200 group-hover:text-[#1474B8] leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1 sm:mt-1.5 text-[13px] sm:text-[14px] lg:text-[15px] text-neutral-500 font-normal leading-relaxed tracking-tight max-w-md sm:max-w-full">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Right Column: Interactive Info Icon with Floating Tooltip */}
              <div
                className="relative shrink-0"
                onMouseEnter={() => setActiveTooltip(item.number)}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                <button
                  type="button"
                  onClick={() =>
                    setActiveTooltip(activeTooltip === item.number ? null : item.number)
                  }
                  className="p-1.5 sm:p-2 rounded-full text-neutral-400 hover:text-[#1474B8] hover:bg-blue-50/80 active:bg-blue-100 transition-all cursor-pointer focus:outline-none"
                  aria-label={`More information about ${item.title}`}
                >
                  <Info className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
                </button>

                {/* Animated Tooltip Popover with Safe Mobile Width */}
                <AnimatePresence>
                  {activeTooltip === item.number && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.96, y: 6 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.96, y: 6 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                      className="absolute right-0 bottom-full mb-3 w-[calc(100vw-2.5rem)] max-w-[340px] sm:w-[360px] bg-white rounded-xl shadow-2xl shadow-slate-900/15 border border-slate-200/90 p-4 sm:p-5 z-40 text-left pointer-events-auto"
                    >
                      {/* Header pill */}
                      <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-slate-100">
                        <span className="text-[11px] font-medium tracking-wider uppercase text-[#1474B8]">
                          {item.details.headline}
                        </span>
                        <span className="text-[10px] text-neutral-400 uppercase tracking-wider">
                          Key Details
                        </span>
                      </div>

                      {/* Highlights bullet list */}
                      <ul className="space-y-2 mb-3">
                        {item.details.highlights.map((point, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-[12px] sm:text-[12.5px] text-neutral-600 leading-snug"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1474B8] mt-1.5 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Scope box */}
                      <div className="bg-[#F8FAFC] rounded-lg p-2.5 text-[11px] sm:text-[11.5px] text-neutral-500 leading-normal border border-slate-100">
                        <strong className="text-neutral-700 font-medium">Scope:</strong>{' '}
                        {item.details.scope}
                      </div>

                      {/* Tooltip caret pointing down to info icon */}
                      <div className="absolute right-3.5 -bottom-1.5 w-3 h-3 bg-white border-r border-b border-slate-200/90 rotate-45" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
