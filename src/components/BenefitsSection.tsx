const benefits = [
  {
    title: "Ressignificar vendas",
    text: "Você vai identificar e dissolver as crenças que te impedem de vender com confiança e naturalidade.",
  },
  {
    title: "Desenvolver autoconfiança real",
    text: "Construa a segurança interna para falar de preço, apresentar seu produto e conduzir uma negociação sem travar.",
  },
  {
    title: 'Aprender a lidar com o "não" sem medo',
    text: 'Entenda que o "não" faz parte do processo e aprenda a transformá-lo em aprendizado e oportunidade.',
  },
  {
    title: "Precificar com segurança",
    text: "Aprenda a precificar seu produto ou serviço com consciência, valorizando o que você entrega sem medo de cobrar.",
  },
  {
    title: "Criar seu script de vendas",
    text: "Estruture seu roteiro de vendas com perguntas estratégicas, abordagem empática e fechamento natural.",
  },
  {
    title: "Dominar o funil completo",
    text: "Prospecção → Abordagem → Fechamento → Pós-venda. Domine cada etapa e pare de perder clientes no meio do caminho.",
  },
  {
    title: "Parar de sentir culpa por vender",
    text: "Ressignifique sua relação com vendas e entenda que vender é servir — é colocar seu propósito em movimento.",
  },
  {
    title: "Estruturar melhor seu produto ou serviço",
    text: "Organize sua oferta de forma clara e atraente, facilitando a decisão de compra do seu cliente.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="section-dark py-16">
      <div className="container">
        <h2 className="font-heading text-2xl md:text-3xl text-center mb-4">
          <span className="text-cream">O que você vai </span>
          <strong className="text-highlight">aprender</strong>
          <span className="text-cream">?</span>
        </h2>
        <p className="text-cream text-center mb-10 text-lg">
          Com o Curso Venda com Propósito, você vai:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {benefits.map((b) => (
            <div key={b.title} className="benefit-card">
              <p className="benefit-card-title">{b.title}</p>
              <p className="benefit-card-text">{b.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="https://chk.eduzz.com/cunqlgkg" className="btn-cta">
            Quero vender com propósito
          </a>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
