'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const DOSAGE_FORMS = [
  {
    number: '01',
    category: 'TABLETS',
    iconSrc: '/icons/tablets.svg',
    iconWidth: 105,
    iconHeight: 70,
    amount: '74.3M',
    unit: 'TABLETS / MONTH',
  },
  {
    number: '02',
    category: 'CAPSULES',
    iconSrc: '/icons/capsules.svg',
    iconWidth: 105,
    iconHeight: 70,
    amount: '8.3M',
    unit: 'CAPSULES / MONTH',
  },
  {
    number: '03',
    category: 'LIQUID ORALS',
    iconSrc: '/icons/liquid-orals.svg',
    iconWidth: 85,
    iconHeight: 75,
    amount: '1.4M',
    unit: 'BOTTLES / MONTH',
  },
  {
    number: '04',
    category: 'SEMISOLIDS',
    iconSrc: '/icons/semisolids.svg',
    iconWidth: 110,
    iconHeight: 75,
    amount: '3.7M',
    unit: 'TUBES / MONTH',
  },
];

export default function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      className="py-20 lg:py-28 bg-[#F8FAFC] text-neutral-800 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header: Left 36px Heading, Right 16px Subtitle */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-12 sm:mb-16 gap-6 lg:gap-12">
          {/* Left Heading: 36px on desktop, Medium weight 500 */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <h2 className="font-outfit font-medium text-2xl sm:text-3xl lg:text-[36px] lg:leading-[1.2] text-heading tracking-tight">
              Diverse Capabilities.
              <br />
              Consistent <span className="tracking-tight text-[#1474B8]">Commitment to Quality.</span>
            </h2>
          </motion.div>

          {/* Right Subtitle: 16px body size, Regular weight 400 */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-lg"
          >
            <p className="text-[15px] sm:text-[16px] text-neutral-600 font-normal leading-relaxed">
              From tablets and capsules to liquid orals and semisolid formulations,
              BRIPHA supports pharmaceutical businesses across a range of dosage
              forms and manufacturing requirements.
            </p>
          </motion.div>
        </div>

        {/* 4 Cards Grid - Brushed Metal Texture on #1474B8 Brand Blue using exact uploaded SVGs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {DOSAGE_FORMS.map((item, index) => (
            <motion.div
              key={item.category + item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="relative bg-[#1474B8] text-white p-7 sm:p-8 flex flex-col justify-between min-h-[420px] lg:min-h-[440px] rounded-none shadow-xl shadow-brand-500/10 overflow-hidden group select-none transition-transform duration-300"
            >
              {/* Brushed Metal Texture Overlay from uploaded root asset */}
              <div
                className="absolute inset-0 opacity-35 mix-blend-overlay pointer-events-none transition-opacity duration-300 group-hover:opacity-45"
                style={{
                  backgroundImage: "url('/brushed_metal_texture.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />

              {/* Top Row: Number & Category */}
              <div className="relative z-10 flex items-center justify-between text-white/90">
                <span className="font-outfit font-normal text-xs sm:text-[13px] tracking-wide">
                  {item.number}
                </span>
                <span className="font-outfit font-normal text-[11px] sm:text-xs tracking-wider uppercase">
                  {item.category}
                </span>
              </div>

              {/* Center Icon: Using the exact SVG uploaded in root folder */}
              <div className="relative z-10 my-auto py-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <div className="relative h-20 w-28 flex items-center justify-center">
                  <Image
                    src={item.iconSrc}
                    alt={item.category}
                    width={item.iconWidth}
                    height={item.iconHeight}
                    className="object-contain filter drop-shadow-sm brightness-105"
                  />
                </div>
              </div>

              {/* Bottom Capacity Metric */}
              <div className="relative z-10">
                <div className="font-outfit font-medium text-4xl sm:text-[42px] leading-none text-white tracking-tight">
                  {item.amount}
                </div>
                <div className="font-outfit font-normal text-[11px] sm:text-xs tracking-wider text-white/80 uppercase mt-2">
                  {item.unit}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
