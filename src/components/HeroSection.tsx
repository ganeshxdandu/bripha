'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full h-auto lg:h-[100dvh] lg:min-h-[660px] overflow-hidden bg-white select-none"
    >
      {/* Background Hexagonal Tile Polka Dot Pattern with Subtle Wave Motion */}
      <motion.div
        animate={{
          x: [0, 5, -3, 0],
          y: [0, -7, 3, 0],
          opacity: [0.8, 1, 0.85, 0.8],
        }}
        transition={{
          duration: 12,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
        className="absolute -inset-6 pointer-events-none z-0 will-change-transform"
        style={{
          backgroundImage:
            'radial-gradient(rgba(0, 0, 0, 0.08) 1.5px, transparent 1.5px), radial-gradient(rgba(0, 0, 0, 0.08) 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
          backgroundPosition: '0 0, 14px 14px',
        }}
      />

      {/* Subtle Luminous Wave Sheen: Gives a soft breathing ripple across the pattern */}
      <motion.div
        animate={{
          opacity: [0.15, 0.45, 0.15],
          scale: [0.98, 1.02, 0.98],
        }}
        transition={{
          duration: 10,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
        className="absolute inset-0 pointer-events-none z-0 will-change-transform"
        style={{
          background:
            'radial-gradient(ellipse 70% 45% at 50% 42%, rgba(11, 99, 182, 0.06), transparent 75%)',
        }}
      />

      {/* Content: Balanced on mobile, calibrated on desktop */}
      <div className="relative z-20 max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center pt-44 sm:pt-48 lg:pt-36 xl:pt-40 flex flex-col items-center">
        {/* Main Headline: 52px on desktop (medium, -3% tracking, 100% line height); tuned for mobile */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-outfit font-medium text-[28px] sm:text-[38px] md:text-[46px] lg:text-[52px] text-heading tracking-tight lg:tracking-[-0.03em] leading-[1.16] lg:leading-[1.0]"
        >
          <span className="block">Global Trust Through</span>
          <span className="block mt-0.5 lg:mt-0">Local Excellence</span>
        </motion.h1>

        {/* Subtitle: Perfectly bounded for mobile reading */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-3.5 sm:mt-5 text-[14px] sm:text-[15px] lg:text-[16px] text-[#5A6B82] font-normal max-w-[310px] sm:max-w-md lg:max-w-lg mx-auto leading-relaxed tracking-tight"
        >
          Precision contract manufacturing built on 30+ years of industrial
          legacy, regulatory compliance, and uncompromising quality.
        </motion.p>

        {/* Primary CTA Button: Clean, perfectly proportioned for mobile screens */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 sm:mt-7"
        >
          <Link
            href="#contact"
            className="group relative overflow-hidden inline-flex items-center justify-center gap-1.5 bg-[#0B63B6] hover:bg-[#094F92] text-white text-[13px] sm:text-[15px] font-normal tracking-tight px-5 py-2.5 sm:px-7 sm:py-3.5 cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-blue-900/15 active:scale-[0.98]"
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
            <ChevronRight className="w-4 h-4 ml-0.5 transition-transform duration-200 group-hover:translate-x-0.5 relative z-10" />
          </Link>
        </motion.div>
      </div>

      {/* Bottom 3D Dosage Forms Packaging Render (Substantial frame on mobile, Pinned Absolute on desktop) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative mt-16 sm:mt-20 lg:mt-0 lg:absolute lg:bottom-0 lg:left-0 lg:right-0 w-full z-10 leading-none select-none pointer-events-none overflow-hidden"
      >
        <Image
          src="/hero.png"
          alt="Pharmaceutical Manufacturing Packaging, Bottles, Tablets & Capsules"
          width={2880}
          height={806}
          priority
          quality={100}
          sizes="100vw"
          className="w-full h-44 sm:h-56 lg:h-auto object-cover object-bottom block"
        />
      </motion.div>
    </section>
  );
}
