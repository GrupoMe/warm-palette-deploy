import ebookCover from "@/assets/ebook-cover.png";

const EbookSection = () => {
  return (
    <section className="section-dark py-16">
      <div className="container">
        <h2 className="font-heading text-2xl md:text-3xl text-center mb-10">
          <span className="text-cream">O que está incluído no </span>
          <strong className="text-highlight">E-book Venda com Propósito</strong>
          <span className="text-cream">?</span>
        </h2>

        <div className="flex flex-col items-center">
          <img
            src={ebookCover}
            alt="E-book Venda com Propósito"
            className="w-72 md:w-80 mb-8 drop-shadow-2xl"
          />

          <div className="text-center space-y-2 mb-8">
            <p className="text-cream text-lg">📘 67 páginas estruturadas</p>
            <p className="text-cream text-lg">
              ✔ Exercícios práticos &nbsp;|&nbsp; ✔ Roteiro de vendas
            </p>
            <p className="text-cream text-lg">
              ✔ Estratégia de prospecção &nbsp;|&nbsp; ✔ Técnicas de fechamento
            </p>
            <p className="text-cream text-lg">
              ✔ Gatilhos mentais aplicados &nbsp;|&nbsp; ✔ Pós-venda estratégico
            </p>
          </div>

          <p className="text-highlight font-bold text-xl mb-8">Acesso imediato. 🔥</p>

          <div className="bg-muted rounded-lg p-6 max-w-xl text-center">
            <p className="text-primary font-bold text-lg leading-relaxed">
              Aprenda com quem integrou vendas com autoconhecimento e criou uma metodologia que une estratégia e propósito!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EbookSection;
