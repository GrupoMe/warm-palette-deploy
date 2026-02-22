import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import BenefitsSection from "@/components/BenefitsSection";
import ContentSection from "@/components/ContentSection";
import EbookSection from "@/components/EbookSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <div id="formulario">
        <HeroSection />
      </div>
      <VideoSection />
      <BenefitsSection />
      <ContentSection />
      <EbookSection />
      <AboutSection />
      <FAQSection />

      <footer className="section-dark py-6 border-t border-secondary/20">
        <div className="container text-center">
          <p className="text-cream/60 text-sm">
            © 2025 Com Propósito — Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
