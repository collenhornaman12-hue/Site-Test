import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ConditionsSection from "@/components/ConditionsSection";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <ServicesSection />
        <ConditionsSection />
        <AboutSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
