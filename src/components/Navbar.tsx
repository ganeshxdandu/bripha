'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Capabilities', href: '#capabilities' },
  { name: 'Quality', href: '#quality' },
  { name: 'Facility', href: '#facility' },
  { name: 'Our Group', href: '#group' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 py-3 shadow-sm'
          : 'bg-transparent py-4 sm:py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#hero" className="flex items-center space-x-2 group">
            <div className="relative h-8 sm:h-9 w-36 sm:w-40 transition-transform duration-200 group-hover:scale-105">
              <Image
                src="/logo.svg"
                alt="BRIPHA Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[14px] font-normal text-slate-700 hover:text-[#0B63B6] transition-colors duration-200 relative tracking-tight py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#0B63B6] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="#contact"
              className="relative overflow-hidden inline-flex items-center gap-1.5 bg-[#0B63B6] hover:bg-[#094F92] text-white text-[14px] font-normal tracking-tight px-5 py-2.5 cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-blue-900/15 active:scale-[0.98] group"
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
              <span className="relative z-10">Partner With Us</span>
              <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 relative z-10" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white/95 border-b border-slate-200 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 shadow-lg"
          >
            <div className="flex flex-col space-y-1.5">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[15px] font-normal text-slate-700 hover:text-[#0B63B6] hover:bg-slate-50 px-3 py-2.5 rounded-md transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-3">
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="relative overflow-hidden w-full flex items-center justify-center gap-1.5 bg-[#0B63B6] hover:bg-[#094F92] text-white text-[14px] font-normal tracking-tight px-5 py-3 rounded-[3px] transition-all shadow-sm active:scale-[0.98] group"
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
                  <span className="relative z-10">Partner With Us</span>
                  <ChevronRight className="w-4 h-4 relative z-10" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
