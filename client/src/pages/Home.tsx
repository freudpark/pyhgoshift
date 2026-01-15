import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import PMBOKSection from "@/components/PMBOKSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

/**
 * Home Page
 * Design: Tech Minimal + Premium Modern
 * - Complete landing page for PyhgoShift
 * - All sections integrated for smooth scrolling experience
 * - Professional layout with clear information hierarchy
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Value Proposition */}
        <ValueProposition />

        {/* PMBOK AI Section */}
        <PMBOKSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
