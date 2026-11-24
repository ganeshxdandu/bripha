'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface FeatureItem {
  number: string;
  category: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const FEATURES: FeatureItem[] = [
  {
    number: '01',
    category: 'INFRASTRUCTURE',
    title: 'Dedicated Manufacturing Sections',
    description: 'Facilities for oral solids, liquid orals, and semisolid dosage forms.',
    image: '/images/bripha-dedicated-manufacturing-sections.png',
    alt: 'Dedicated pharmaceutical manufacturing facility with automated cleanroom production lines at BRIPHA',
  },
  {
    number: '02',
    category: 'QUALITY',
    title: 'Quality-Focused Operations',
    description: 'Documented procedures, quality oversight, and continuous improvement.',
    image: '/images/bripha-quality-focused-operations.png',
    alt: 'Pharmaceutical quality control laboratory testing with HPLC analysis equipment at BRIPHA',
  },
  {
    number: '03',
    category: 'EXPERTISE',
    title: 'Experienced Team',
    description: 'Leadership with experience in pharmaceutical operations and business management.',
    image: '/images/bripha-experienced-pharmaceutical-team.png',
    alt: 'Experienced pharmaceutical manufacturing leadership and scientific operations team at BRIPHA',
  },
  {
    number: '04',
    category: 'PARTNERSHIP',
    title: 'Collaborative Partnerships',
    description: 'An approach focused on long-term manufacturing and business relationships.',
    image: '/images/bripha-collaborative-partnerships.png',
    alt: 'Collaborative contract manufacturing partnerships for long-term pharmaceutical supply at BRIPHA',
  },
];

export default function WhyChooseSection() {
  return (
    <section id="why-us" className="py-20 sm:py-24 lg:py-32 bg-white text-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 lg:mb-28"
        >
          <h2 className="font-outfit font-medium text-3xl sm:text-4xl lg:text-[42px] text-heading tracking-tight leading-tight">
            Why Partner <span className="text-[#1474B8]">With Us?</span>
          </h2>
          <p className="mt-3.5 sm:mt-4 text-[#5A6B82] text-[15px] sm:text-[16px] leading-relaxed font-normal">
            Licensing, in-house testing, dedicated production sections and group manufacturing experience support each engagement.
          </p>
        </motion.div>

        {/* Alternating Feature Rows */}
        <div className="space-y-16 sm:space-y-24 lg:space-y-32">
          {FEATURES.map((item, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={item.number}
                className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-center"
              >
                {/* Text Block */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 24 : -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className={`flex flex-col justify-center ${
                    isEven ? 'md:order-2 md:pl-4 lg:pl-8' : 'md:order-1 md:pr-4 lg:pr-8'
                  }`}
                >
                  {/* Eyebrow Label */}
                  <span className="text-[#1474B8] text-[11px] sm:text-[12px] font-semibold tracking-[0.18em] uppercase mb-2.5">
                    {item.number} / {item.category}
                  </span>

                  {/* Feature Title */}
                  <h3 className="font-outfit font-medium text-2xl sm:text-3xl lg:text-[32px] text-heading tracking-tight leading-snug mb-3 sm:mb-4">
                    {item.title}
                  </h3>

                  {/* Feature Description */}
                  <p className="text-[#5A6B82] text-[15px] sm:text-[16px] leading-relaxed font-normal max-w-lg">
                    {item.description}
                  </p>
                </motion.div>

                {/* Image Block */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className={`relative ${isEven ? 'md:order-1' : 'md:order-2'}`}
                >
                  <div className="relative aspect-[4/3] sm:aspect-[1.18/1] w-full rounded-none overflow-hidden group">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      unoptimized
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      priority={index < 2}
                    />
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
