'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface CompanyItem {
  name: string;
  est: string;
  logo: string;
  role: string;
  logoWidth: number;
  logoHeight: number;
  containerWidth?: string;
}

interface VerticalItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  capabilities: string[];
  companies: CompanyItem[];
}

const VERTICALS: VerticalItem[] = [
  {
    id: '01',
    name: 'Animal Nutrition',
    tagline: 'Pioneered Rock-Based DCP in India',
    description:
      'Over 32 years of formulating specialized feed supplements, mineral nutrition, and veterinary healthcare. Instrumental in shifting the Indian market from bone-based to inorganic rock-based Di-Calcium Phosphate (DCP).',
    capabilities: [
      'Pioneer in inorganic rock-based DCP technology',
      'Advanced formulations & dedicated animal nutrition R&D',
      'Large-scale continuous manufacturing operations',
    ],
    companies: [
      {
        name: 'Brindavan Phosphates Pvt. Ltd.',
        est: 'Est. 1993',
        logo: '/images/group/bpl-phosphates.png',
        role: 'Pioneering DCP & mineral feed manufacturing',
        logoWidth: 64,
        logoHeight: 44,
      },
      {
        name: 'Cauvery Aqua',
        est: 'Est. 1994',
        logo: '/images/group/cauvery-aqua.png',
        role: 'Aquaculture formulations & water supplements',
        logoWidth: 60,
        logoHeight: 32,
      },
      {
        name: 'Kamadhenu Nutrients',
        est: 'Est. 1999',
        logo: '/images/group/kamadhenu-nutrients.png',
        role: 'Veterinary nutrition & feed premixes',
        logoWidth: 58,
        logoHeight: 42,
      },
    ],
  },
  {
    id: '02',
    name: 'Pharmaceutical Manufacturing',
    tagline: 'cGMP Finished Dosage Formulations',
    description:
      'Purpose-built contract formulation facility engineered to cGMP standards, delivering reliable oral solids, oral liquids, ointments, and creams for leading pharmaceutical brand owners.',
    capabilities: [
      'Comprehensive cGMP contract manufacturing',
      'Dedicated lines for oral liquids, tablets, ointments & creams',
      'Fully equipped in-house chemical & microbiological QC testing',
    ],
    companies: [
      {
        name: 'Brindavan Phosphates Pharma (BRIPHA)',
        est: 'Est. 2024',
        logo: '/logo.svg',
        role: 'Pharmaceutical formulations & cGMP contract manufacturing',
        logoWidth: 84,
        logoHeight: 28,
        containerWidth: 'w-24',
      },
    ],
  },
  {
    id: '03',
    name: 'Bio-Fertilizers & Bio-Pesticides',
    tagline: 'Sustainable Agricultural Biotechnology',
    description:
      'Developing and manufacturing biologically derived agricultural inputs, microbial bio-fertilizers, and sustainable bio-pesticides with an emphasis on soil health and green farming.',
    capabilities: [
      'Specialized agricultural biotechnology manufacturing',
      'Dedicated R&D research & formulation facility in Gujarat',
      'Eco-friendly microbial & biological plant nutrition',
    ],
    companies: [
      {
        name: 'Arizona Biotech',
        est: 'Est. 2020',
        logo: '/images/group/arizona-biotech.png',
        role: 'Agricultural biotechnology R&D & manufacturing',
        logoWidth: 66,
        logoHeight: 42,
      },
    ],
  },
  {
    id: '04',
    name: 'Plastic Manufacturing',
    tagline: 'B2B Industrial Polymer Packaging',
    description:
      'Precision manufacturing of rigid plastic containers, bottles, and specialized closure systems for pharmaceutical, veterinary, and agrochemical packaging across two dedicated plants.',
    capabilities: [
      'Two dedicated B2B manufacturing plants',
      'Strategic facilities in Uttarakhand and Gujarat',
      'Cleanroom-compatible HDPE, PP, and PET polymer containers',
    ],
    companies: [
      {
        name: 'V.N. Plastic (VNPL)',
        est: 'Est. 2008',
        logo: '/images/group/vnpl-plastic.png',
        role: 'Industrial plastic blow-molding & container manufacturing',
        logoWidth: 48,
        logoHeight: 48,
      },
      {
        name: 'NihaPak',
        est: 'Est. 2018',
        logo: '/images/group/nihapak.png',
        role: 'Precision polymer packaging & specialty closures',
        logoWidth: 46,
        logoHeight: 46,
      },
    ],
  },
];

const GROUP_STATES = [
  {
    state: 'Gujarat',
    badge: 'Agri-Biotech & Plastics',
    highlight: 'Arizona Biotech dedicated R&D unit & biological manufacturing plant; high-capacity B2B plastic container facility.',
  },
  {
    state: 'Karnataka',
    badge: 'Animal Nutrition & Pharma',
    highlight: 'Flagship animal nutrition & mineral feed plants; BRIPHA advanced cGMP pharmaceutical manufacturing complex.',
  },
  {
    state: 'Uttar Pradesh',
    badge: 'Industrial Operations',
    highlight: 'Core group manufacturing operations, strategic sourcing & comprehensive North India distribution infrastructure.',
  },
  {
    state: 'Uttarakhand',
    badge: 'Polymer Manufacturing',
    highlight: 'Specialized B2B industrial polymer packaging plant supplying high-integrity containers to pharma & agrochem.',
  },
];

const CERTIFICATIONS = [
  {
    name: 'FAMI-QS',
    title: 'European Specialty Feed Quality System',
    src: '/images/group/famiqs-original.png',
    alt: 'FAMI-QS Official Certification Logo',
    scope: 'Feed safety management system compliance across animal nutrition lines',
  },
  {
    name: 'INDOCERT',
    title: 'Organic Standards Certification',
    src: '/images/group/indocert-original.png',
    alt: 'INDOCERT Official Certification Logo',
    scope: 'Accredited organic & biological input certification for agriculture',
  },
  {
    name: 'ISO 9001:2015',
    title: 'Quality Management Systems',
    src: '/images/group/iso-original.png',
    alt: 'ISO 9001:2015 Official Certification Seal',
    scope: 'Certified quality management across multi-site manufacturing facilities',
  },
  {
    name: 'BIS CERTIFICATION',
    title: 'Bureau of Indian Standards',
    src: '/images/group/bis-original.png',
    alt: 'BIS ISI Official Mark Certification',
    scope: 'Mandatory Indian standards ISI compliance for mineral feed ingredients',
  },
];

export default function GroupSection() {
  return (
    <section
      id="group"
      className="relative w-full bg-[#082B45] text-white py-20 sm:py-24 lg:py-28 overflow-hidden select-none"
    >
      {/* Subtle Polka-Dot Texture for Architectural Restraint */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* UPPER PORTION: Asymmetric Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pb-10 sm:pb-12 border-b border-white/10">
          {/* Left Column: Eyebrow, Main Headline & Description */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 mb-3.5">
              <span className="w-1.5 h-1.5 bg-[#1474B8]" />
              <span className="text-[#1474B8] text-[11px] sm:text-[12px] font-semibold tracking-tight uppercase">
                THE KAMADHENU–BRINDAVAN GROUP
              </span>
            </div>

            <h2 className="font-outfit font-medium text-3xl sm:text-4xl lg:text-[42px] text-white tracking-tight leading-[1.25] sm:leading-[1.3] lg:leading-[1.3]">
              Over 32 Years of{' '}
              <br className="hidden sm:inline" />
              <span className="text-[#1474B8]">Manufacturing Excellence.</span>
            </h2>

            <p className="mt-5 text-[#95ABBA] text-[15px] sm:text-[16px] leading-relaxed font-normal max-w-xl">
              <strong className="text-white font-medium">BRIPHA</strong> is the dedicated
              pharmaceutical manufacturing arm of the{' '}
              <strong className="text-white font-medium">Kamadhenu–Brindavan Group</strong>
              —a diversified industrial conglomerate operating across animal nutrition,
              pharmaceutical formulations, bio-fertilisers, and polymer packaging. With over
              three decades of technical expertise, the group pioneered inorganic rock-based
              DCP in India and stands as the largest contract manufacturer for Virbac in India.
            </p>
          </motion.div>

          {/* Right Column: Numerical Statistics - Vertically Centered */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col justify-center self-center"
          >
            {/* Primary Visual Anchor: 32+ Years */}
            <div>
              <div className="font-outfit font-semibold text-6xl sm:text-7xl lg:text-[76px] text-white tracking-tight leading-none flex items-baseline gap-1">
                <span>32</span>
                <span className="text-[#1474B8] font-semibold text-5xl sm:text-6xl lg:text-[64px]">
                  +
                </span>
              </div>
              <div className="text-xs sm:text-[13px] text-[#BACBD7] uppercase tracking-[0.16em] font-medium mt-3">
                Years of Industrial Heritage (Since 1993)
              </div>
            </div>

            {/* Secondary Statistics Grid: Snug & Compact under 32+ */}
            <div className="border-t border-white/10 mt-6 pt-6 grid grid-cols-3 gap-3 sm:gap-6">
              <div>
                <div className="font-outfit font-semibold text-2xl sm:text-3xl text-white tracking-tight leading-none">
                  04
                </div>
                <div className="text-[11px] text-[#8EA2B1] uppercase tracking-[0.14em] font-normal mt-2 leading-tight">
                  Industry Verticals
                </div>
              </div>

              <div>
                <div className="font-outfit font-semibold text-2xl sm:text-3xl text-white tracking-tight leading-none">
                  04
                </div>
                <div className="text-[11px] text-[#8EA2B1] uppercase tracking-[0.14em] font-normal mt-2 leading-tight">
                  States in India
                </div>
              </div>

              <div>
                <div className="font-outfit font-semibold text-2xl sm:text-3xl text-white tracking-tight leading-none">
                  03
                </div>
                <div className="text-[11px] text-[#8EA2B1] uppercase tracking-[0.14em] font-normal mt-2 leading-tight">
                  Manufacturing Units
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Strategic Conglomerate Affiliation Banner: Full-Width Prestigious Strip */}
        <div className="py-5 sm:py-6 border-b border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 bg-white/[0.015] px-5 sm:px-6 border border-white/10 mt-6">
          <div className="flex items-center gap-4 sm:gap-5 shrink-0">
            <div className="bg-white px-3.5 py-2 shrink-0 flex items-center justify-center shadow-sm border border-white/10">
              <div className="relative h-6 w-24">
                <Image
                  src="/images/group/coca-cola.png"
                  alt="Coca-Cola Logo"
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>
            </div>
            <div className="h-8 w-px bg-white/10 hidden sm:block" />
            <div>
              <span className="text-[10px] font-mono text-[#1474B8] tracking-widest uppercase block font-semibold">
                CONGLOMERATE STRATEGIC AFFILIATION
              </span>
              <span className="text-white font-medium text-sm sm:text-[15px] tracking-tight block">
                Ladhani Group (SLMG Beverages)
              </span>
            </div>
          </div>
          <div className="text-xs text-[#BACBD7] leading-relaxed max-w-xl md:text-right">
            India&apos;s largest independent bottling partner for The Coca-Cola Company,
            anchoring the group&apos;s operational resilience, supply chain strength, and institutional governance.
          </div>
        </div>

        {/* MIDDLE PORTION: Four Business Verticals with Company Names, Logos & Establishment Years */}
        <div className="py-16 sm:py-20 border-b border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-[11px] sm:text-[12px] font-semibold tracking-[0.18em] text-[#7A95A7] uppercase mb-2">
                FOUR DIVERSIFIED INDUSTRIAL VERTICALS
              </div>
              <h3 className="font-outfit font-medium text-2xl sm:text-3xl text-white tracking-tight">
                Operating Entities &amp; Core Capabilities
              </h3>
            </div>
            <p className="text-xs sm:text-[13px] text-[#8EA2B1] max-w-md">
              Each vertical operates dedicated infrastructure, specialized R&amp;D teams, and independent regulatory certifications under the group umbrella.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {VERTICALS.map((vertical) => (
              <motion.div
                key={vertical.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="relative bg-white/[0.02] border border-white/10 hover:border-white/25 p-6 sm:p-7 flex flex-col justify-between transition-colors group"
              >
                <div>
                  {/* Top Header Row */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <span className="font-mono text-xs text-[#1474B8] font-semibold tracking-wider">
                      VERTICAL // {vertical.id}
                    </span>
                    <span className="text-[11px] font-mono text-[#BACBD7] bg-white/[0.05] px-2.5 py-1 border border-white/10">
                      {vertical.tagline}
                    </span>
                  </div>

                  {/* Vertical Title & Narrative */}
                  <h4 className="font-outfit font-medium text-xl sm:text-[22px] text-white tracking-tight mt-4 group-hover:text-white transition-colors">
                    {vertical.name}
                  </h4>
                  <p className="text-xs sm:text-[13px] text-[#8EA2B1] mt-2.5 leading-relaxed">
                    {vertical.description}
                  </p>

                  {/* Capabilities Bullet List */}
                  <ul className="mt-4 space-y-1.5 pt-3 border-t border-white/5">
                    {vertical.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-2 text-[12px] sm:text-[13px] text-[#BACBD7]">
                        <span className="text-[#1474B8] font-bold mt-0.5">•</span>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Operating Companies with Authentic Logos */}
                <div className="mt-6 pt-5 border-t border-white/10">
                  <div className="text-[10px] font-mono tracking-[0.14em] text-[#7A95A7] uppercase mb-3">
                    Operating Group {vertical.companies.length > 1 ? 'Companies' : 'Company'} &amp; Establishment
                  </div>
                  <div className="space-y-2.5">
                    {vertical.companies.map((comp) => (
                      <div
                        key={comp.name}
                        className="flex items-center gap-3.5 bg-[#0B3554]/60 hover:bg-[#0B3554] border border-white/10 p-2.5 transition-colors"
                      >
                        {/* Crisp White Logo Container to Preserve Original Colors */}
                        <div className={`bg-white p-1.5 h-12 ${comp.containerWidth || 'w-16'} shrink-0 flex items-center justify-center shadow-sm border border-white/10`}>
                          <div className="relative w-full h-full">
                            <Image
                              src={comp.logo}
                              alt={`${comp.name} Logo`}
                              fill
                              unoptimized
                              className="object-contain p-0.5"
                            />
                          </div>
                        </div>

                        {/* Company Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-outfit text-[13px] sm:text-[14px] font-medium text-white truncate">
                              {comp.name}
                            </span>
                            <span className="font-mono text-[11px] text-[#1474B8] font-semibold shrink-0">
                              {comp.est}
                            </span>
                          </div>
                          <p className="text-[11px] sm:text-[12px] text-[#8EA2B1] truncate mt-0.5">
                            {comp.role}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* PAN-INDIA MANUFACTURING FOOTPRINT (4 STATES) */}
        <div className="py-14 sm:py-16 border-b border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-[11px] sm:text-[12px] font-semibold tracking-[0.18em] text-[#7A95A7] uppercase mb-2">
                PAN-INDIA MANUFACTURING REACH
              </div>
              <h3 className="font-outfit font-medium text-2xl sm:text-3xl text-white tracking-tight">
                Presence Across 4 Key Industrial States
              </h3>
            </div>
            <p className="text-xs sm:text-[13px] text-[#8EA2B1] max-w-sm">
              Strategic manufacturing footprint across Western, Northern, and Southern India providing seamless national logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {GROUP_STATES.map((item, idx) => (
              <div
                key={item.state}
                className="bg-white/[0.02] border border-white/10 hover:border-white/20 p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-[#1474B8] font-semibold">
                      STATE // 0{idx + 1}
                    </span>
                    <span className="w-1.5 h-1.5 bg-[#1474B8]" />
                  </div>
                  <h4 className="font-outfit font-medium text-lg text-white">
                    {item.state}
                  </h4>
                  <div className="text-[11px] font-mono text-[#BACBD7] mt-1 mb-3">
                    {item.badge}
                  </div>
                  <p className="text-xs text-[#8EA2B1] leading-relaxed">
                    {item.highlight}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LOWER PORTION: Partnerships & Official Certifications */}
        <div className="pt-14 sm:pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Established Group Partnerships */}
          <div className="lg:col-span-6">
            <div className="text-[11px] sm:text-[12px] font-semibold tracking-[0.18em] text-[#7A95A7] uppercase mb-4">
              ESTABLISHED RELATIONSHIPS ACROSS THE GROUP
            </div>
            <h4 className="font-outfit font-medium text-2xl text-white tracking-tight mb-3">
              Trusted by Leading Global Multinationals
            </h4>
            <p className="text-[13px] sm:text-[14px] text-[#BACBD7] font-normal leading-relaxed mb-6">
              The group is the <strong className="text-white font-medium">largest contract manufacturer for Virbac in India</strong>,
              manufacturing veterinary powder, liquid, bolus, and gel formulations across 3 dedicated manufacturing units, alongside long-term supply partnerships with GlaxoSmithKline (GSK) and DeHaat.
            </p>

            {/* Authentic Brand SVGs in a sleek horizontal row with slashes */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 py-3 px-4 bg-white/[0.02] border border-white/10 max-w-lg">
              {/* Virbac */}
              <div className="relative h-7 w-28 opacity-95 hover:opacity-100 transition-opacity">
                <Image
                  src="/images/Virbac.svg"
                  alt="Virbac Logo"
                  fill
                  unoptimized
                  className="object-contain object-left"
                />
              </div>

              <span className="text-white/20 text-lg font-light select-none" aria-hidden="true">
                /
              </span>

              {/* GSK */}
              <div className="relative h-6 w-16 opacity-95 hover:opacity-100 transition-opacity">
                <Image
                  src="/images/gsk.svg"
                  alt="GlaxoSmithKline (GSK) Logo"
                  fill
                  unoptimized
                  className="object-contain object-left"
                />
              </div>

              <span className="text-white/20 text-lg font-light select-none" aria-hidden="true">
                /
              </span>

              {/* DeHaat */}
              <div className="relative h-7 w-24 opacity-95 hover:opacity-100 transition-opacity">
                <Image
                  src="/images/dehaat.svg"
                  alt="DeHaat Logo"
                  fill
                  unoptimized
                  className="object-contain object-left"
                />
              </div>
            </div>

            {/* Group Attribution Note */}
            <p className="mt-4 text-[11px] sm:text-[12px] text-[#7A95A7] leading-relaxed font-normal">
              * These established multinational partnerships belong to the wider Kamadhenu–Brindavan Group across its allied manufacturing divisions.
            </p>
          </div>

          {/* Right Column: Original Certifications with Original Logos */}
          <div className="lg:col-span-6">
            <div className="text-[11px] sm:text-[12px] font-semibold tracking-[0.18em] text-[#7A95A7] uppercase mb-4">
              ORIGINAL CERTIFICATIONS ACROSS GROUP COMPANIES
            </div>
            <h4 className="font-outfit font-medium text-2xl text-white tracking-tight mb-3">
              Rigorous National &amp; International Accreditations
            </h4>
            <p className="text-[13px] sm:text-[14px] text-[#BACBD7] font-normal leading-relaxed mb-6">
              Operations across the group conform to stringent global safety, quality management, and product integrity protocols.
            </p>

            {/* 4 Original Certification Cards with Authentic White Backing */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.name}
                  className="bg-white/[0.02] border border-white/10 hover:border-white/25 p-3 sm:p-3.5 flex flex-col justify-between transition-colors group"
                >
                  {/* Clean White Card for Full-Color Logo Authenticity */}
                  <div className="bg-white p-2 h-16 sm:h-20 w-full flex items-center justify-center shadow-sm mb-2.5 border border-white/10">
                    <div className="relative w-full h-full">
                      <Image
                        src={cert.src}
                        alt={cert.alt}
                        fill
                        unoptimized
                        className="object-contain p-1"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="text-[11px] sm:text-[12px] font-mono font-semibold text-white tracking-tight group-hover:text-[#1474B8] transition-colors">
                      {cert.name}
                    </div>
                    <div className="text-[10px] text-[#8EA2B1] leading-tight mt-1 line-clamp-2">
                      {cert.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-4 text-[11px] sm:text-[12px] text-[#7A95A7] leading-relaxed font-normal">
              Audited &amp; maintained across group industrial manufacturing operations in India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
