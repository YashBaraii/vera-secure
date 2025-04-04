
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Partners from "@/components/Partners";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import SlideshowFeatures from "@/components/SlideshowFeatures";
import FlipCardFeatures from "@/components/FlipCardFeatures";
import ParallaxSection from "@/components/ParallaxSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgressBar />
      <Navbar />
      <Hero />
      <SlideshowFeatures />
      <Features />
      <FlipCardFeatures />
      <HowItWorks />
      <ParallaxSection />
      <Partners />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
