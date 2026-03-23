import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DoctorsSection from "@/components/DoctorsSection";
import ServicesSection from "@/components/ServicesSection";
import AchievementsSection from "@/components/AchievementsSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TimingSection from "@/components/TimingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <DoctorsSection />
      <ServicesSection />
      <AchievementsSection />
      <GallerySection />
      <TestimonialsSection />
      <TimingSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
