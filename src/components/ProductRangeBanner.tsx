'use client';

import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProductRangeBanner() {
  return (
    <section
      id="range"
      className="relative w-full bg-[#082b45] min-h-[85vh] md:min-h-0 py-16 sm:py-20 md:py-20 lg:py-24 overflow-hidden flex items-center justify-center"
    >
      {/* Repeating Diagonal Capsule Pattern Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-90"
        style={{
          backgroundImage: "url('/capsule-pattern.svg')",
          backgroundRepeat: 'repeat',
          backgroundSize: '84px 64px',
        }}
        aria-hidden="true"
      />

      {/* Content Container */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 md:gap-8 lg:gap-12">
          {/* Left Block: Heading & Subtitle (Centered on mobile, left-aligned on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="max-w-2xl mx-auto md:mx-0 flex flex-col items-center md:items-start text-center md:text-left"
          >
            <h2 className="text-white text-[42px] sm:text-[48px] md:text-[34px] lg:text-[36px] font-medium tracking-tight leading-[1.1] text-center md:text-left">
              Our Pharmaceutical Range.
            </h2>
            <p className="mt-3 sm:mt-2.5 text-[#95abba] text-[15px] md:text-[15px] font-normal leading-relaxed text-center md:text-left max-w-md md:max-w-xl">
              Review BRIPHA&apos;s formulations across tablets, capsules, liquid orals and semisolids.
            </p>
          </motion.div>

          {/* Right Block: Direct Download CTA & Dosage Categories (Centered on mobile, right-aligned on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="flex flex-col items-center md:items-end flex-shrink-0 w-full md:w-auto"
          >
            {/* Download CTA Button */}
            <a
              href="/BRIPHA_Product_Catalogue.pdf"
              download="BRIPHA_Product_Catalogue.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-50 text-[#092B45] text-[14px] font-medium px-6 py-3.5 shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.98] group w-full sm:w-auto max-w-xs sm:max-w-none text-center"
            >
              <span>Download Product Catalogue</span>
              <ArrowDown className="w-4 h-4 text-[#0066B3] transition-transform duration-200 group-hover:translate-y-0.5" />
            </a>

            {/* Dosage Categories Line */}
            <p className="mt-4 text-[#7A95A7] text-[10px] sm:text-[11px] font-normal tracking-[0.16em] uppercase select-none text-center md:text-right">
              TABLETS &nbsp;·&nbsp; CAPSULES &nbsp;·&nbsp; LIQUID ORALS &nbsp;·&nbsp; SEMISOLIDS
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
