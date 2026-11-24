'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const [showFloatingTop, setShowFloatingTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#082b45] text-white overflow-hidden pt-16 sm:pt-20 pb-10 sm:pb-12 border-t border-white/10 select-none">
      {/* Massive Background Watermark Graphic SVG "BRIPHA" - Raised Upward from Bottom */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[28%] sm:translate-y-[26%] w-full max-w-[1440px] px-2 sm:px-4 pointer-events-none select-none z-0 overflow-hidden flex justify-center"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1400 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto select-none pointer-events-none"
          preserveAspectRatio="xMidYMid meet"
        >
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="central"
            fill="white"
            fillOpacity="0.04"
            fontFamily="var(--font-outfit), 'Outfit', sans-serif"
            fontSize="270"
            fontWeight="900"
            letterSpacing="0.08em"
            className="font-outfit font-black"
          >
            BRIPHA
          </text>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Grid: Brand & Facility Addresses */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-start pb-12 sm:pb-16 border-b border-white/10">
          {/* Brand Column (Left) */}
          <div className="md:col-span-6 lg:col-span-6">
            <Link href="#hero" className="inline-block group">
              <div className="relative h-8 sm:h-9 w-36 sm:w-40 transition-transform duration-200 group-hover:scale-105">
                <Image
                  src="/logo.svg"
                  alt="BRIPHA Logo"
                  fill
                  sizes="160px"
                  className="object-contain object-left brightness-0 invert"
                />
              </div>
            </Link>
            <p className="mt-4 text-[#95abba] text-[13.5px] sm:text-[14px] leading-relaxed max-w-sm font-normal">
              Pharmaceutical manufacturing built on quality, operational excellence, and lasting partnerships.
            </p>
          </div>

          {/* Manufacturing Facility Column (Middle) */}
          <div className="md:col-span-3 lg:col-span-3">
            <div className="text-[#7A95A7] text-[11px] font-semibold tracking-[0.16em] uppercase mb-3">
              MANUFACTURING FACILITY
            </div>
            <address className="not-italic text-[#BACBD7] text-[13.5px] sm:text-[14px] leading-relaxed font-normal">
              Plot 209/210, GIDC Panoli,
              <br />
              Ankleshwar, Bharuch, Gujarat
              <br />
              394116, India
            </address>
          </div>

          {/* Registered Office Column (Right) */}
          <div className="md:col-span-3 lg:col-span-3">
            <div className="text-[#7A95A7] text-[11px] font-semibold tracking-[0.16em] uppercase mb-3">
              REGISTERED OFFICE
            </div>
            <address className="not-italic text-[#BACBD7] text-[13.5px] sm:text-[14px] leading-relaxed font-normal">
              Bengaluru, Karnataka, India
            </address>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal Policies & Back to Top */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-[13px]">
          <p className="text-[#7A95A7] text-center sm:text-left font-normal">
            &copy; {new Date().getFullYear()} Brindavan Phosphates Private Limited. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6 text-[#8EA2B1] font-normal">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors duration-150"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="hover:text-white transition-colors duration-150"
            >
              Terms &amp; Conditions
            </Link>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#BACBD7] hover:text-white transition-colors duration-150 cursor-pointer group"
              aria-label="Back to top of page"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        className={`fixed bottom-6 right-6 z-40 p-3 bg-[#082b45]/90 hover:bg-[#1474B8] text-white border border-white/20 shadow-xl backdrop-blur-md transition-all duration-300 rounded-none cursor-pointer flex items-center justify-center ${
          showFloatingTop
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </footer>
  );
}
