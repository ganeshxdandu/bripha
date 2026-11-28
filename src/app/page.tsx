import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CapabilitiesSection from '@/components/CapabilitiesSection';
import QualitySection from '@/components/QualitySection';
import FacilitySection from '@/components/FacilitySection';
import GallerySection from '@/components/GallerySection';
import GroupSection from '@/components/GroupSection';
import ArrangementsSection from '@/components/ArrangementsSection';
import ProductRangeBanner from '@/components/ProductRangeBanner';
import WhyChooseSection from '@/components/WhyChooseSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-neutral-800 font-outfit antialiased tracking-tight selection:bg-[#1474B8] selection:text-white">
      {/* Sticky / Transparent Navigation Bar */}
      <Navbar />

      <main>
        {/* Section 1: Hero Section */}
        <HeroSection />

        {/* Section 2: Guided By Quality. Built On Trust. */}
        <AboutSection />

        {/* Section 3: Different Dosage Forms. One Manufacturing Partner. */}
        <CapabilitiesSection />

        {/* Section 4: Quality Control Across Every Stage. */}
        <QualitySection />

        {/* Section 5: A Facility Built Around Manufacturing. */}
        <FacilitySection />

        {/* Section 6: Facility Infrastructure & Cleanrooms Gallery */}
        <GallerySection />

        {/* Section 7: The Kamadhenu–Brindavan Group */}
        <GroupSection />

        {/* Section 7: Contract Manufacturing Arrangements. */}
        <ArrangementsSection />

        {/* Section 7: Our Pharmaceutical Range. */}
        <ProductRangeBanner />

        {/* Section 8: Why Partner With Us? */}
        <WhyChooseSection />

        {/* Section 9: Discuss Your Manufacturing Requirement & Facility Map */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

