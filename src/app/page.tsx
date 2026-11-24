import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CapabilitiesSection from '@/components/CapabilitiesSection';

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
      </main>
    </div>
  );
}
