'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Play, MapPin, X } from 'lucide-react';

const YOUTUBE_VIDEO_ID = 'p_rSEhaeAJM';

export default function FacilitySection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="facility" className="py-20 lg:py-28 bg-[#F7F8FA] text-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Centered Heading & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-outfit font-medium text-2xl sm:text-3xl lg:text-[36px] lg:leading-[1.2] text-heading tracking-tight"
          >
            A Facility Built Around <span className="text-[#1474B8]">Manufacturing.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3.5 sm:mt-4 text-[15px] sm:text-[16px] text-neutral-500 font-normal leading-relaxed max-w-2xl mx-auto tracking-tight"
          >
            Explore the production areas, equipment, quality control laboratories
            and utility systems supporting pharmaceutical manufacturing.
          </motion.p>
        </div>

        {/* Video Card: 16:9 Aspect Ratio with Play Button and Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="w-full"
        >
          <div className="relative aspect-[16/9] w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/10 border border-slate-200/70 bg-slate-900 group">
            {isPlaying ? (
              <div className="relative w-full h-full">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                  title="BRIPHA Pharmaceutical Manufacturing Facility Video"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                {/* Close / Return to Preview button */}
                <button
                  type="button"
                  onClick={() => setIsPlaying(false)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-sm transition-all shadow-md focus:outline-none"
                  aria-label="Close Video"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <div
                onClick={() => setIsPlaying(true)}
                className="relative w-full h-full cursor-pointer select-none"
              >
                {/* Exterior Facility Photo Thumbnail */}
                <Image
                  src="/images/03.png"
                  alt="BRIPHA Manufacturing Facility in Panoli, Gujarat"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />

                {/* Subtle Cinematic Vignette / Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-black/25 transition-opacity duration-300 group-hover:from-black/50" />

                {/* Center Play Button */}
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                  <div className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white text-[#1474B8] shadow-2xl shadow-black/40 transition-all duration-300 group-hover:scale-110 active:scale-95">
                    {/* Pulsing ring animation */}
                    <div className="absolute inset-0 rounded-full bg-white/40 animate-ping opacity-30" />
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-[#1474B8] text-[#1474B8] translate-x-0.5 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </div>

                {/* Bottom-Right Location Badge */}
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-7 z-10 flex items-center gap-1.5 text-white/95 text-[11px] sm:text-[12px] font-medium tracking-wider uppercase drop-shadow-md">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white shrink-0" />
                  <span>PANOLI, GUJARAT &bull; INDIA</span>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
