const contentBlocks = [
  {
    title: "Mentalidade & Autoconhecimento:",
    items: [
      "Autoconhecimento e clareza de propósito",
      "Autoconfiança e crenças limitantes",
      "Ressignificação da relação com vendas",
      "Estruturação do seu produto ou serviço",
      "Precificação consciente",
    ],
  },
  {
    title: "Estratégia & Processo:",
    items: [
      "Prospecção estratégica",
      "Comunicação empática e perguntas estratégicas",
      "Negociação e fechamento",
      "Gatilhos mentais aplicados",
      "Pós-venda e fidelização",
      'Criação do seu "Mapa da Mina" — seu roteiro personalizado de vendas',
    ],
  },
];

const ContentSection = () => {
  return (
    <section className="section-dark py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {contentBlocks.map((block) => (
            <div key={block.title} className="benefit-card">
              <h3 className="font-heading font-bold text-xl text-highlight mb-4">
                {block.title}
              </h3>
              <ul className="space-y-2">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-primary text-base">
                    <span className="text-highlight mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
