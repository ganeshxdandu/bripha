'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  ChevronDown,
  Layers,
} from 'lucide-react';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'solids' | 'liquids' | 'semisolids' | 'packaging';
  categoryLabel: string;
  image: string;
  alt: string;
  description: string;
}

const CATEGORIES = [
  { key: 'all', label: 'All Infrastructure', count: 20 },
  { key: 'solids', label: 'Oral Solids & Cleanrooms', count: 7 },
  { key: 'liquids', label: 'Liquid Orals', count: 3 },
  { key: 'semisolids', label: 'Semisolids & Topicals', count: 4 },
  { key: 'packaging', label: 'Packaging & Utilities', count: 6 },
] as const;

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'tablet-press-01',
    title: 'Rimek Rotary Tablet Press 01',
    category: 'solids',
    categoryLabel: 'Oral Solids',
    image: '/gallery/bripha-tablet-compression-machine-press-01.png',
    alt: 'Rimek rotary tablet compression press with dust collection system at BRIPHA cleanroom',
    description:
      'High-speed rotary tablet compression machine with integrated dust extraction, multi-station turret, and precise weight control.',
  },
  {
    id: 'tablet-press-02',
    title: 'Rimek Rotary Tablet Press 02',
    category: 'solids',
    categoryLabel: 'Oral Solids',
    image: '/gallery/bripha-tablet-compression-machine-press-02.png',
    alt: 'Secondary Rimek rotary tablet press in dedicated cleanroom suite at BRIPHA',
    description:
      'Dedicated compression press for large-batch commercial tablet production with quick-change tooling versatility.',
  },
  {
    id: 'tablet-coating',
    title: 'Gansons GansCoater 75+',
    category: 'solids',
    categoryLabel: 'Oral Solids',
    image: '/gallery/bripha-automated-tablet-coating-ganscoater.png',
    alt: 'Gansons GansCoater 75+ automated tablet coating system at BRIPHA',
    description:
      'Fully automated perforated pan tablet coating system with PLC touchscreen recipe management and high-precision spray nozzles.',
  },
  {
    id: 'coating-ducting',
    title: 'Auto-Coater Cleanroom Ducting',
    category: 'solids',
    categoryLabel: 'Oral Solids',
    image: '/gallery/bripha-tablet-auto-coater-ducting-system.png',
    alt: 'Tablet auto-coater air handling and exhaust filtration ducting system at BRIPHA',
    description:
      'Dedicated air handling, dehumidification, and exhaust filtration ducting maintaining negative pressure cascades.',
  },
  {
    id: 'granulation-suite',
    title: 'Granulation & Fluid Bed Suite',
    category: 'solids',
    categoryLabel: 'Oral Solids',
    image: '/gallery/bripha-fluid-bed-granulation-processing-suite.png',
    alt: 'Rapid mixer granulator and fluid bed dryer suite at BRIPHA',
    description:
      'Closed-system fluid bed processing system for uniform particle drying, controlled granulation, and rapid batch turnover.',
  },
  {
    id: 'capsule-filler',
    title: 'ACG AF 40T Capsule Filler',
    category: 'solids',
    categoryLabel: 'Oral Solids',
    image: '/gallery/bripha-automatic-capsule-filling-machine.png',
    alt: 'ACG AF 40T automatic capsule filling machine line at BRIPHA',
    description:
      'Precision automated capsule filling line equipped with vacuum transfer, pellet/powder dosing, and de-dusting system.',
  },
  {
    id: 'capsule-blender',
    title: 'Octagonal Powder Blender',
    category: 'solids',
    categoryLabel: 'Oral Solids',
    image: '/gallery/bripha-capsule-powder-blending-machine.png',
    alt: 'Octagonal powder blending machine in oral solids processing cleanroom at BRIPHA',
    description:
      'Closed-loop octagonal blender ensuring homogeneous active pharmaceutical ingredient (API) and excipient blending.',
  },
  {
    id: 'liquid-mfg',
    title: 'Liquid Manufacturing Vessels',
    category: 'liquids',
    categoryLabel: 'Liquid Orals',
    image: '/gallery/bripha-liquid-oral-manufacturing-plant.png',
    alt: 'Jacketed stainless steel liquid manufacturing tanks and mixing vessels at BRIPHA',
    description:
      'SS316L jacketed manufacturing vessels with bottom homogenizers and load-cell weighing for oral syrups and suspensions.',
  },
  {
    id: 'bottle-washing',
    title: 'Rotary Bottle Washing Line',
    category: 'liquids',
    categoryLabel: 'Liquid Orals',
    image: '/gallery/bripha-rotary-bottle-washing-machine.png',
    alt: 'Automatic rotary bottle washing machine line for liquid oral containers at BRIPHA',
    description:
      'Multi-cycle inverted water and filtered air jet washing for pharmaceutical liquid bottles before dosing.',
  },
  {
    id: 'liquid-filling',
    title: 'Liquid Filling & Capping Line',
    category: 'liquids',
    categoryLabel: 'Liquid Orals',
    image: '/gallery/bripha-liquid-oral-bottle-filling-sealing.png',
    alt: 'Automated liquid oral bottle filling and rotary capping line at BRIPHA',
    description:
      'Volumetric piston filling with anti-drip nozzles and rotary pick-and-place capping under laminar airflow.',
  },
  {
    id: 'ointment-mfg-01',
    title: 'Ointment Plant Suite 01',
    category: 'semisolids',
    categoryLabel: 'Semisolids & Topicals',
    image: '/gallery/bripha-ointment-manufacturing-plant-01.png',
    alt: 'Stainless steel ointment and cream manufacturing plant vessels at BRIPHA',
    description:
      'Integrated wax and water phase vessels with vacuum emulsifier homogenizer for creams, ointments, and dermal gels.',
  },
  {
    id: 'ointment-mfg-02',
    title: 'Ointment Plant Suite 02',
    category: 'semisolids',
    categoryLabel: 'Semisolids & Topicals',
    image: '/gallery/bripha-ointment-manufacturing-plant-02.png',
    alt: 'Secondary ointment and emulsion manufacturing suite at BRIPHA',
    description:
      'High-shear planetary mixing tanks for viscous pharmaceutical ointments with temperature-controlled jackets.',
  },
  {
    id: 'ointment-filling-01',
    title: 'PACMAC Tube Filling Line 01',
    category: 'semisolids',
    categoryLabel: 'Semisolids & Topicals',
    image: '/gallery/bripha-ointment-tube-filling-machine-01.png',
    alt: 'PACMAC automatic ointment tube filling and sealing machine at BRIPHA',
    description:
      'High-speed automatic tube filling machine with hot air and ultrasonic sealing for laminated and aluminium tubes.',
  },
  {
    id: 'ointment-filling-02',
    title: 'PACMAC Tube Filling Line 02',
    category: 'semisolids',
    categoryLabel: 'Semisolids & Topicals',
    image: '/gallery/bripha-ointment-tube-filling-machine-02.png',
    alt: 'PACMAC automatic ointment tube filling and batch coding line at BRIPHA',
    description:
      'Automated tube feeding cassette, volumetric dosing, sealing, and orientation station with batch code embossing.',
  },
  {
    id: 'blister-line-01',
    title: 'Elmac Pack Blister Line 01',
    category: 'packaging',
    categoryLabel: 'Packaging & Utilities',
    image: '/gallery/bripha-blister-packaging-machine-line-01.png',
    alt: 'Elmac Pack 3015 automatic blister packaging machine line at BRIPHA',
    description:
      'High-speed Alu-Alu and PVC-Alu blister thermoforming machine with online camera inspection and pinhole detection.',
  },
  {
    id: 'blister-line-02',
    title: 'Elmac Pack Blister Line 02',
    category: 'packaging',
    categoryLabel: 'Packaging & Utilities',
    image: '/gallery/bripha-blister-packaging-machine-line-02.png',
    alt: 'Elmac Pack automatic blister packaging line in cleanroom packaging suite at BRIPHA',
    description:
      'Secondary automated blister packaging line dedicated to high-volume commercial tablet and capsule blister packs.',
  },
  {
    id: 'strip-packing',
    title: 'Automatic Strip Pack Machine',
    category: 'packaging',
    categoryLabel: 'Packaging & Utilities',
    image: '/gallery/bripha-tablet-strip-packaging-machine.png',
    alt: 'High-speed automatic strip packaging machine for pharmaceutical tablets at BRIPHA',
    description:
      'Continuous rotary sealing for moisture-sensitive oral solid doses in high-barrier aluminium and cellophane strip packs.',
  },
  {
    id: 'batch-coding',
    title: 'Batch Coding Conveyor Line',
    category: 'packaging',
    categoryLabel: 'Packaging & Utilities',
    image: '/gallery/bripha-batch-coding-conveyor-packaging.png',
    alt: 'Ramatech conveyor with online inkjet batch coding and serialization system at BRIPHA',
    description:
      'Motorized inspection conveyor equipped with continuous inkjet printing for batch numbers, manufacturing dates, and 2D barcodes.',
  },
  {
    id: 'carton-strapping',
    title: 'Signode Secondary Packaging Line',
    category: 'packaging',
    categoryLabel: 'Packaging & Utilities',
    image: '/gallery/bripha-carton-strapping-packaging-machine.png',
    alt: 'Signode automated carton taping and strapping packaging line at BRIPHA',
    description:
      'Semi-automated corrugated carton taping and heat-seal strapping system for transit-ready shipping cases.',
  },
  {
    id: 'storage-tanks',
    title: 'SS316L Storage & Buffer Tanks',
    category: 'packaging',
    categoryLabel: 'Packaging & Utilities',
    image: '/gallery/bripha-pharmaceutical-storage-tanks.png',
    alt: 'Pharmaceutical grade SS316L storage and buffer vessels at BRIPHA',
    description:
      'Electro-polished sanitary buffer and holding tanks equipped with rotary CIP spray balls and electronic level sensors.',
  },
];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // Filter items based on active category
  const filteredItems =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  // In 'all' category, default to 8 curated photos unless user clicked Expand
  const visibleItems =
    activeCategory === 'all' && !isExpanded
      ? filteredItems.slice(0, 8)
      : filteredItems;

  const openLightbox = (indexInFiltered: number) => {
    setLightboxIndex(indexInFiltered);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev === null ? null : (prev + 1) % filteredItems.length
      );
    }
  }, [lightboxIndex, filteredItems.length]);

  const prevImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev === null
          ? null
          : (prev - 1 + filteredItems.length) % filteredItems.length
      );
    }
  }, [lightboxIndex, filteredItems.length]);

  // Handle keyboard events for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [lightboxIndex, nextImage, prevImage]);

  return (
    <section
      id="gallery"
      className="relative w-full bg-[#f8fafc] text-neutral-800 py-20 sm:py-24 lg:py-32 border-t border-slate-200/80 overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1474B8]" />
            <span className="text-[#1474B8] text-[11px] sm:text-[12px] font-semibold tracking-[0.2em] uppercase">
              FACILITY INFRASTRUCTURE &amp; CLEANROOMS
            </span>
          </div>

          <h2 className="font-outfit font-medium text-3xl sm:text-4xl lg:text-[42px] text-heading tracking-tight leading-[1.18]">
            Inside Our cGMP-Compliant{' '}
            <span className="text-[#1474B8]">Manufacturing Facility.</span>
          </h2>

          <p className="mt-4 text-[#5A6B82] text-[15px] sm:text-[16px] leading-relaxed font-normal">
            Automated production suites, segregated cleanroom corridors, and high-speed packaging lines supporting tablets, liquid orals, and semisolids at Panoli, Gujarat.
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10 sm:mb-12">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.key);
                  setIsExpanded(false);
                }}
                className={`text-[12px] sm:text-[13px] font-medium tracking-tight px-3.5 sm:px-4 py-2 transition-all duration-200 cursor-pointer rounded-none border ${
                  isActive
                    ? 'bg-[#082B45] text-white border-[#082B45] shadow-sm'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`ml-1.5 text-[11px] font-mono ${
                    isActive ? 'text-[#4BA1DC]' : 'text-slate-400'
                  }`}
                >
                  ({cat.count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid: Uniform 4:3 Aspect Ratio Cards */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6"
        >
          <AnimatePresence>
            {visibleItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                onClick={() => openLightbox(index)}
                className="group relative bg-white border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col"
              >
                {/* 4:3 Landscape Image Container */}
                <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-106"
                  />

                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#082B45]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-xs font-medium inline-flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-[#4BA1DC]" />
                      <span>View High-Res Photo</span>
                    </span>
                  </div>

                  {/* Category Pill Tag */}
                  <div className="absolute top-2.5 left-2.5 z-10">
                    <span className="bg-[#082B45]/85 backdrop-blur-xs text-white text-[10px] font-semibold tracking-wider uppercase px-2 py-1 border border-white/10">
                      {item.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Card Caption Information */}
                <div className="p-3.5 sm:p-4 flex flex-col justify-between flex-1 border-t border-slate-100">
                  <h3 className="font-outfit font-medium text-[15px] sm:text-[16px] text-slate-900 tracking-tight leading-snug group-hover:text-[#1474B8] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-slate-500 text-xs leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Expand / View All Photos Button in 'All' category */}
        {activeCategory === 'all' && (
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 bg-[#082B45] hover:bg-[#0B3A5E] text-white text-[14px] font-medium tracking-tight px-6 py-3 transition-all duration-200 shadow-sm cursor-pointer group"
            >
              <Layers className="w-4 h-4 text-[#4BA1DC]" />
              <span>
                {isExpanded
                  ? 'Show Curated Overview (8 Photos)'
                  : 'View All 20 Facility & Cleanroom Photos'}
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  isExpanded ? 'rotate-180' : ''
                }`}
              />
            </button>
          </div>
        )}
      </div>

      {/* Full-Screen Interactive Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#061D2E]/95 backdrop-blur-md flex flex-col justify-between select-none"
            onClick={closeLightbox}
          >
            {/* Top Bar: Title, Category & Close Button */}
            <div
              className="w-full px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between border-b border-white/10 relative z-20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="bg-[#1474B8] text-white text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1">
                  {filteredItems[lightboxIndex].categoryLabel}
                </span>
                <span className="text-white text-sm sm:text-base font-medium tracking-tight">
                  {filteredItems[lightboxIndex].title}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-xs font-mono text-[#8EA2B1]">
                  {lightboxIndex + 1} / {filteredItems.length}
                </span>
                <button
                  type="button"
                  onClick={closeLightbox}
                  className="p-2 text-white/70 hover:text-white hover:bg-white/10 transition-colors rounded-none cursor-pointer"
                  aria-label="Close Lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Middle: Main Image Container with Next / Prev Controls */}
            <div
              className="relative flex-1 w-full max-w-6xl mx-auto px-4 sm:px-8 flex items-center justify-center my-auto overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev Button */}
              <button
                type="button"
                onClick={prevImage}
                className="absolute left-2 sm:left-4 z-30 p-2.5 sm:p-3 bg-black/60 hover:bg-[#1474B8] text-white transition-colors duration-200 border border-white/20 cursor-pointer shadow-lg"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Displayed Image */}
              <div className="relative w-full aspect-[4/3] max-h-[75vh] max-w-4xl shadow-2xl border border-white/15 bg-black/40 overflow-hidden">
                <Image
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].alt}
                  fill
                  unoptimized
                  priority
                  className="object-contain"
                />
              </div>

              {/* Next Button */}
              <button
                type="button"
                onClick={nextImage}
                className="absolute right-2 sm:right-4 z-30 p-2.5 sm:p-3 bg-black/60 hover:bg-[#1474B8] text-white transition-colors duration-200 border border-white/20 cursor-pointer shadow-lg"
                aria-label="Next Image"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Bottom Bar: Detailed Description & Keyboard Navigation Hints */}
            <div
              className="w-full px-4 sm:px-6 lg:px-8 py-3.5 bg-black/40 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs relative z-20"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-[#BACBD7] max-w-3xl text-center sm:text-left font-normal leading-relaxed">
                {filteredItems[lightboxIndex].description}
              </p>
              <span className="text-[#7A95A7] font-mono text-[11px] shrink-0 hidden sm:inline">
                Use ← → arrow keys to navigate • Esc to exit
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
