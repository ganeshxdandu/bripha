'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const VERTICALS = [
  {
    title: 'Animal Nutrition',
    subtitle: 'Mineral feeds, veterinary formulations & supplements',
  },
  {
    title: 'Pharmaceutical Manufacturing',
    subtitle: 'BRIPHA oral solids, liquids & topical dosage forms',
  },
  {
    title: 'Bio-fertilisers & Bio-pesticides',
    subtitle: 'Sustainable agro-biotech & biological plant nutrition',
  },
  {
    title: 'Plastics Manufacturing',
    subtitle: 'Specialized industrial containers & polymer packaging',
  },
];

const CERTIFICATIONS = [
  { name: 'FAMI-QS', src: '/images/famiqs.png', alt: 'FAMI-QS Quality Certification' },
  { name: 'Indocert', src: '/images/indocert.png', alt: 'Indocert Organic & Standards Certification' },
  { name: 'ISO 9001', src: '/images/iso.png', alt: 'ISO 9001 Quality Management Certification' },
  { name: 'BIS', src: '/images/bis.svg', alt: 'Bureau of Indian Standards (BIS) Certification' },
];

export default function GroupSection() {
  return (
    <section
      id="group"
      className="relative w-full bg-[#082B45] text-white py-20 sm:py-24 lg:py-28 overflow-hidden select-none"
    >
      {/* Subtle Polka-Dot Texture for Architectural Restraint */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* UPPER PORTION: Asymmetric Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-16 sm:pb-20 border-b border-white/10">
          {/* Left Column: Eyebrow, Main Headline & Description */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1474B8]" />
              <span className="text-[#1474B8] text-[11px] sm:text-[12px] font-semibold tracking-tight uppercase">
                THE KAMADHENU–BRINDAVAN GROUP
              </span>
            </div>

            <h2 className="font-outfit font-medium text-3xl sm:text-4xl lg:text-[42px] text-white tracking-tight leading-[1.25] sm:leading-[1.3] lg:leading-[1.3]">
              Over 32 Years of{' '} <br/>
              <span className="text-[#1474B8]">Manufacturing Excellence.</span>
            </h2>

            <p className="mt-5 text-[#95ABBA] text-[15px] sm:text-[16px] leading-relaxed font-normal max-w-xl">
              BRIPHA is part of the Kamadhenu–Brindavan Group, a diversified
              manufacturing group with established operations across animal
              nutrition, pharmaceuticals, bio-fertilisers and plastics, and
              longstanding relationships with leading multinational companies.
            </p>
          </motion.div>

          {/* Right Column: Numerical Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col justify-between h-full pt-2 lg:pt-0"
          >
            {/* Primary Visual Anchor: 32+ Years */}
            <div>
              <div className="font-outfit font-semibold text-6xl sm:text-7xl lg:text-[84px] text-white tracking-tight leading-none flex items-baseline gap-1">
                <span>32</span>
                <span className="text-[#1474B8] font-semibold text-5xl sm:text-6xl lg:text-[72px]">+</span>
              </div>
              <div className="text-xs sm:text-[13px] text-[#BACBD7] uppercase tracking-[0.16em] font-medium mt-3">
                Years of Manufacturing Expertise
              </div>
            </div>

            {/* Secondary Statistics Grid */}
            <div className="border-t border-white/10 mt-8 pt-8 grid grid-cols-2 gap-6 sm:gap-8">
              <div>
                <div className="font-outfit font-semibold text-4xl sm:text-5xl text-white tracking-tight leading-none">
                  04
                </div>
                <div className="text-[11px] sm:text-xs text-[#8EA2B1] uppercase tracking-[0.14em] font-normal mt-2">
                  Industry Verticals
                </div>
              </div>

              <div>
                <div className="font-outfit font-semibold text-4xl sm:text-5xl text-white tracking-tight leading-none">
                  04
                </div>
                <div className="text-[11px] sm:text-xs text-[#8EA2B1] uppercase tracking-[0.14em] font-normal mt-2">
                  States Across India
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* MIDDLE PORTION: Four Business Verticals with Clean Top Borders */}
        <div className="py-12 sm:py-16 border-b border-white/10">
          <div className="text-[11px] sm:text-[12px] font-semibold tracking-[0.18em] text-[#7A95A7] uppercase mb-8">
            GROUP BUSINESS VERTICALS
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {VERTICALS.map((item, idx) => (
              <div
                key={item.title}
                className="relative pt-5 border-t border-white/15 flex flex-col justify-start group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-[#1474B8] font-semibold tracking-wider">
                    0{idx + 1}
                  </span>
                  <span className="w-4 h-px bg-white/10 group-hover:bg-[#1474B8] transition-colors" />
                </div>
                <h3 className="font-outfit font-medium text-[16px] sm:text-[17px] text-white tracking-tight leading-snug group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-[#8EA2B1] mt-2 font-normal leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* LOWER PORTION: Partnerships & Certifications */}
        <div className="pt-12 sm:pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Established Group Partnerships */}
          <div className="lg:col-span-7">
            <div className="text-[11px] sm:text-[12px] font-semibold tracking-[0.18em] text-[#7A95A7] uppercase mb-6">
              ESTABLISHED RELATIONSHIPS ACROSS THE GROUP
            </div>

            {/* Authentic Brand SVGs in a sleek horizontal row with slashes */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 py-2">
              {/* Virbac */}
              <div className="relative h-6 sm:h-7 w-28 sm:w-32 opacity-90 hover:opacity-100 transition-opacity">
                <Image
                  src="/images/Virbac.svg"
                  alt="Virbac Logo"
                  fill
                  unoptimized
                  className="object-contain object-left"
                />
              </div>

              <span className="text-white/20 text-lg font-light select-none" aria-hidden="true">
                /
              </span>

              {/* GSK */}
              <div className="relative h-5 sm:h-6 w-16 sm:w-20 opacity-90 hover:opacity-100 transition-opacity">
                <Image
                  src="/images/gsk.svg"
                  alt="GlaxoSmithKline (GSK) Logo"
                  fill
                  unoptimized
                  className="object-contain object-left"
                />
              </div>

              <span className="text-white/20 text-lg font-light select-none" aria-hidden="true">
                /
              </span>

              {/* DeHaat */}
              <div className="relative h-7 sm:h-8 w-24 sm:w-28 opacity-90 hover:opacity-100 transition-opacity">
                <Image
                  src="/images/dehaat.svg"
                  alt="DeHaat Logo"
                  fill
                  unoptimized
                  className="object-contain object-left"
                />
              </div>
            </div>

            {/* Supporting Statement */}
            <p className="mt-6 text-[13px] sm:text-[14px] text-[#BACBD7] font-normal leading-relaxed">
              The group is the largest contract manufacturer for Virbac in India.
            </p>

            {/* Clear Group Attribution Note */}
            <p className="mt-2 text-[11px] sm:text-[12px] text-[#7A95A7] leading-relaxed font-normal">
              * These established relationships belong to the wider Kamadhenu–Brindavan Group across its allied manufacturing divisions.
            </p>
          </div>

          {/* Right Column: Certifications with Actual Logos in Framed Badges */}
          <div className="lg:col-span-5">
            <div className="text-[11px] sm:text-[12px] font-semibold tracking-[0.18em] text-[#7A95A7] uppercase mb-6">
              CERTIFICATIONS ACROSS GROUP COMPANIES
            </div>

            {/* Actual Certification Logos in Understated Hairline Frames */}
            <div className="grid grid-cols-4 gap-3 sm:gap-4 max-w-sm">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.name} className="flex flex-col items-center text-center group">
                  <div
                    className="relative h-12 w-12 sm:h-14 sm:w-14 border border-white/15 bg-white/[0.02] p-2 hover:border-white/35 hover:bg-white/[0.04] transition-all duration-200"
                    title={cert.name}
                  >
                    <Image
                      src={cert.src}
                      alt={cert.alt}
                      fill
                      unoptimized
                      className="object-contain p-1"
                    />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-mono text-[#8EA2B1] uppercase tracking-wider mt-2 group-hover:text-white transition-colors">
                    {cert.name}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-4 text-[11px] sm:text-[12px] text-[#7A95A7] leading-relaxed font-normal">
              Audited &amp; maintained across group industrial manufacturing operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
