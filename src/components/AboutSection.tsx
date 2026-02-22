import lucianaImg from "@/assets/luciana-rosa.jpg";

const AboutSection = () => {
  return (
    <section className="section-dark py-16">
      <div className="container">
        <h2 className="font-heading text-2xl md:text-3xl text-center mb-10">
          <span className="text-cream">Oi, eu sou a </span>
          <strong className="text-highlight">Luciana Rosa!</strong>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-4xl mx-auto">
          <div className="space-y-4">
            <p className="text-cream text-base leading-relaxed">
              <strong className="text-highlight">Mais de 20 anos no setor comercial.</strong>{" "}
              Liderei equipes com mais de 100 vendedoras e aprendi na prática que técnica sem mentalidade não gera resultado.
            </p>
            <p className="text-cream text-base leading-relaxed">
              Sou formada em Marketing, com MBA em Gestão de Pessoas, Pós-graduação em Psicologia Positiva, Mindfulness e Neurociência, além de formações em Yoga, Meditação e Desenvolvimento Humano.
            </p>
            <p className="text-cream text-base leading-relaxed">
              Integrei vendas com autoconhecimento e criei uma metodologia que une{" "}
              <strong className="text-highlight">MENTALIDADE + PROPÓSITO + PROCESSO</strong>. Porque técnica sem comportamento alinhado não gera resultado.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src={lucianaImg}
              alt="Luciana Rosa"
              className="rounded-xl w-72 md:w-80 object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
