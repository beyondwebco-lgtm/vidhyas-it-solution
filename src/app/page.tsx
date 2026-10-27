import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CoursesSection from "@/components/CoursesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutUs from "@/components/AboutUs";
import LearningModes from "@/components/LearningModes";
import HowToStart from "@/components/HowToStart";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";
import { CURRENT_YEAR } from "@/data/siteConfig";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <CoursesSection />
        <WhyChooseUs />
        <AboutUs />
        <LearningModes />
        <HowToStart />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer currentYear={CURRENT_YEAR} />
      <FloatingWidgets />
    </>
  );
}
