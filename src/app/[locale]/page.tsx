import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Newsletter from "@/components/Newsletter";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <Features />
      <Pricing />
      <Newsletter />
      <Stats />
      <HowItWorks />
      <WhyChooseUs />
      <Reviews />
      <Contact />
      <FAQ />
      <Footer />
    </>
  );
}
