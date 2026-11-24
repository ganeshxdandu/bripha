'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const DOSAGE_FORMS = [
  {
    number: '01',
    category: 'TABLETS',
    iconSrc: '/icons/tablets.svg',
    iconWidth: 155,
    iconHeight: 103,
    amount: '74.3M',
    unit: 'TABLETS / MONTH',
  },
  {
    number: '02',
    category: 'CAPSULES',
    iconSrc: '/icons/capsules.svg',
    iconWidth: 155,
    iconHeight: 103,
    amount: '8.3M',
    unit: 'CAPSULES / MONTH',
  },
  {
    number: '03',
    category: 'LIQUID ORALS',
    iconSrc: '/icons/liquid-orals.svg',
    iconWidth: 165,
    iconHeight: 110,
    amount: '1.4M',
    unit: 'BOTTLES / MONTH',
  },
  {
    number: '04',
    category: 'SEMISOLIDS',
    iconSrc: '/icons/semisolids.svg',
    iconWidth: 206,
    iconHeight: 138,
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
              Four Dosage Forms.
              <br />
              Dedicated <span className="tracking-tight text-[#1474B8]">Manufacturing Sections.</span>
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
            <p className="text-[15px] sm:text-[16px] max-w-[475px] text-neutral-600 font-normal leading-relaxed">
              Dedicated sections for tablets, capsules, oral liquids and semisolids support different formulation, batch-size, production and packaging requirements.
            </p>
          </motion.div>
        </div>

        {/* 4 Cards Grid - 4:5 Aspect Ratio Brushed Metal Texture on #1474B8 Brand Blue */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-5">
          {DOSAGE_FORMS.map((item, index) => (
            <motion.div
              key={item.category + item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="relative bg-[#1474B8] text-white p-5 sm:p-5 lg:p-6 flex flex-col justify-between aspect-[4/5] rounded-none shadow-xl shadow-brand-500/10 overflow-hidden group select-none transition-transform duration-300"
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

              {/* Top Row: Number & Category (Extra Light) */}
              <div className="relative z-10 flex items-center justify-between text-white/90">
                <span className="font-outfit font-extralight text-sm sm:text-[15px] tracking-wide">
                  {item.number}
                </span>
                <span className="font-outfit font-extralight text-xs sm:text-[13px] tracking-wider uppercase">
                  {item.category}
                </span>
              </div>

              {/* Center Icon: Relevant SVG from public/icons folder */}
              <div className="relative z-10 my-auto py-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <div className="relative h-32 sm:h-28 lg:h-32 w-56 sm:w-52 lg:w-56 flex items-center justify-center">
                  <Image
                    src={item.iconSrc}
                    alt={item.category}
                    width={item.iconWidth}
                    height={item.iconHeight}
                    unoptimized
                    className="max-h-32 sm:max-h-28 lg:max-h-32 w-auto object-contain filter drop-shadow-sm brightness-105"
                  />
                </div>
              </div>

              {/* Bottom Capacity Metric: Bold & Large on Mobile */}
              <div className="relative z-10">
                <div className="font-outfit font-medium text-[54px] sm:text-5xl lg:text-[46px] leading-none text-white tracking-tight">
                  {item.amount}
                </div>
                <div className="font-outfit font-medium text-xs sm:text-[13px] tracking-wider text-white/90 uppercase mt-2 sm:mt-2.5">
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
