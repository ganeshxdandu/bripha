'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const MISSION_POINTS = [
  {
    number: '01',
    text: 'To manufacture pharmaceutical formulations with consistent quality.',
  },
  {
    number: '02',
    text: 'To maintain a strong quality culture and GMP-oriented working practices.',
  },
  {
    number: '03',
    text: 'To build lasting partnerships with pharmaceutical companies.',
  },
  {
    number: '04',
    text: 'To continually improve manufacturing capabilities, systems, and processes.',
  },
  {
    number: '05',
    text: 'To support business growth through dependable and collaborative solutions.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F8FAFC] text-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid with items-stretch so both columns are identical in height */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div>
              {/* Section Heading: Exactly 36px on desktop, Medium weight 500 */}
              <h2 className="font-outfit font-medium text-2xl sm:text-3xl lg:text-[36px] lg:leading-[1.2] text-heading tracking-tight">
                Manufacturing Backed by <br/>
                <span className="text-[#1474B8]">Group Experience.</span>
              </h2>

              {/* Intro Paragraph: Exactly 16px body size, Regular weight 400 */}
              <p className="mt-4 sm:mt-5 text-[15px] sm:text-[16px] text-neutral-600 font-normal leading-relaxed tracking-tight">
                Brindavan Phosphates Private Limited is a pharmaceutical manufacturing company established as Unit II in 2016. The company operates from Panoli GIDC Industrial Area, Ankleshwar, Gujarat, with its registered office in Bengaluru, Karnataka.
              </p>

              {/* OUR MISSION Section */}
              <div className="mt-7 sm:mt-8">
                <div className="text-[12px] sm:text-[13px] font-medium tracking-wider text-[#1474B8] uppercase mb-4">
                  Our Mission
                </div>

                {/* Numbered Mission List: 01 | to 05 | */}
                <div className="space-y-3 sm:space-y-3.5">
                  {MISSION_POINTS.map((item) => (
                    <div key={item.number} className="flex items-start gap-2.5 sm:gap-3">
                      <span className="font-outfit font-medium text-[15px] sm:text-[16px] text-[#1474B8] shrink-0">
                        {item.number}&nbsp;&nbsp;|
                      </span>
                      <span className="text-[15px] sm:text-[16px] text-neutral-600 font-normal leading-snug">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* OUR VISION Box: Monochromatic tint #1474B8 (bg-[#EAF3FA]) with blue left border */}
            <div className="mt-8 p-5 sm:p-6 rounded-none bg-[#EAF3FA] relative overflow-hidden">
              <div className="flex items-start gap-4">
                {/* Left accent vertical line */}
                <div className="w-[3px] self-stretch bg-[#1474B8] shrink-0 rounded-full" />
                <div>
                  <div className="text-[12px] sm:text-[13px] font-medium tracking-wider text-[#1474B8] uppercase">
                    Our Vision
                  </div>
                  <p className="mt-2 text-[14px] sm:text-[15px] text-neutral-600 font-normal leading-relaxed">
                    Brindavan Phosphates Private Limited is a pharmaceutical
                    manufacturing company established as Unit II in 2016. The company
                    operates from Panoli GIDC Industrial Area, Ankleshwar, Gujarat,
                    with its registered office in Bengaluru, Karnataka.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Image - Exactly the same height as the content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 flex flex-col h-full"
          >
            {/* Image Container: Stretches to 100% height of the left column */}
            <div className="relative w-full h-full min-h-[480px] lg:min-h-full rounded-none overflow-hidden shadow-2xl shadow-neutral-900/10 border border-neutral-200/60 bg-neutral-100 group">
              <Image
                src="/about.png"
                alt="BRIPHA Advanced Pharmaceutical Formulations & Manufacturing Processing Plant"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
