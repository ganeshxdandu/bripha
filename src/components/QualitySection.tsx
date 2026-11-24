'use client';

import { motion } from 'framer-motion';
import { FlaskConical, FileCheck, Cog, Box } from 'lucide-react';

const QUALITY_PILLARS = [
  {
    id: 'qc',
    icon: FlaskConical,
    title: 'Quality Control',
    description:
      'In-house testing of raw materials, packaging materials, in-process materials and finished products through established procedures.',
    borderClasses: 'md:border-r md:border-b border-b border-[#DCE3E8]',
  },
  {
    id: 'batch',
    icon: FileCheck,
    title: 'Batch Documentation',
    description:
      'Controlled records, batch review and data-integrity practices support manufacturing documentation and product traceability.',
    borderClasses: 'md:border-b border-b border-[#DCE3E8]',
  },
  {
    id: 'process',
    icon: Cog,
    title: 'Process Control',
    description:
      'Deviation investigations, corrective and preventive actions (CAPA), and change control are managed through documented procedures.',
    borderClasses: 'md:border-r border-b md:border-b-0 border-[#DCE3E8]',
  },
  {
    id: 'production',
    icon: Box,
    title: 'Controlled Production',
    description:
      'Dedicated production areas, QC and microbiology facilities, and supporting utility systems are integrated into the manufacturing site.',
    borderClasses: '',
  },
];

export default function QualitySection() {
  return (
    <section id="quality" className="py-20 lg:py-28 bg-[#F6F8F9] text-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Centered Heading & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-outfit font-medium text-2xl sm:text-3xl lg:text-[36px] lg:leading-[1.2] text-heading tracking-tight"
          >
            Quality Control Across <span className="text-[#1474B8]">Every Stage.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3.5 sm:mt-4 text-[15px] sm:text-[16px] text-neutral-500 font-normal leading-relaxed max-w-[550px] mx-auto tracking-tight"
          >
            Material testing, batch documentation and process controls support
            manufacturing from incoming materials through finished-product review.
          </motion.p>
        </div>

        {/* 2x2 Grid Container: #F3F5F7 Background with 1px #DCE3E8 Grid Dividers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-[960px] mx-auto bg-[#F3F5F7] border border-[#DCE3E8] rounded-xl sm:rounded-2xl overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {QUALITY_PILLARS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className={`p-7 sm:p-9 lg:p-10 flex flex-col justify-between min-h-[220px] sm:min-h-[240px] lg:min-h-[250px] transition-colors duration-200 hover:bg-[#EEF1F4]/70 ${item.borderClasses}`}
                >
                  {/* Top: Icon in Brand Blue #1474B8 */}
                  <div className="text-[#1474B8]">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.75} />
                  </div>

                  {/* Bottom: Title & Description */}
                  <div className="mt-8 sm:mt-10 lg:mt-12">
                    <h3 className="font-outfit font-medium text-lg sm:text-[19px] text-heading tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[13.5px] sm:text-[14px] text-neutral-500 leading-relaxed font-normal tracking-tight">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
