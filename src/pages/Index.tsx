import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <SEO
        title="InfluencersKit — Build, Grow & Monetize Your Email Community"
        description="Build, grow, manage, and monetize your email community. Own your audience and revenue with InfluencersKit."
        path="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "InfluencersKit",
          url: "/"
        }}
      />
      <main>
        <HeroSection />
        <BenefitsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
