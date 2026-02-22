import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-primary/60" />
      <div className="container relative z-10 py-16">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h1 className="font-heading font-bold text-3xl md:text-4xl leading-tight text-highlight">
            Você sente dificuldade em vender mesmo sabendo que seu produto é bom?
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-cream">
            Ressignifique sua relação com vendas e aprenda a vender com confiança, propósito e estratégia — sem manipulação, sem culpa e sem forçar ninguém.
          </p>
          <p className="text-highlight italic text-lg font-heading font-medium">
            VENDA É COLOCAR PROPÓSITO EM MOVIMENTO.
          </p>
          <a href="#formulario" className="btn-cta inline-block">
            Quero vender com propósito
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
