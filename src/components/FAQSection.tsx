const faqs = [
  {
    q: "O e-book é para quem está começando?",
    a: "Sim! O e-book foi criado para quem quer ressignificar sua relação com vendas — seja você iniciante ou alguém que já vende mas ainda sente resistência. O conteúdo é prático, acessível e direto ao ponto.",
  },
  {
    q: "Como funciona o acesso ao e-book?",
    a: "Após a confirmação do pagamento, você recebe o acesso imediato por e-mail. O e-book está disponível em formato digital (PDF) para leitura em qualquer dispositivo — celular, tablet ou computador.",
  },
  {
    q: "O e-book tem exercícios práticos?",
    a: 'Sim! Além do conteúdo teórico, o e-book inclui exercícios práticos e um plano de ação. Ao final, você terá construído o seu próprio "Mapa da Mina" — seu roteiro personalizado de vendas.',
  },
  {
    q: "Serve para quem vende produtos físicos ou serviços?",
    a: "Sim! A metodologia se aplica tanto para produtos quanto para serviços. Se você tem algo de valor para oferecer e sente dificuldade em vender, este e-book é para você.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-dark py-16">
      <div className="container max-w-2xl">
        <div className="border border-secondary rounded-2xl p-6 md:p-8 mb-10">
          <h2 className="font-heading text-2xl md:text-3xl text-center">
            <strong className="text-cream">Perguntas</strong>
            <span className="text-cream"> & </span>
            <strong className="text-cream">respostas</strong>
          </h2>
        </div>

        <div className="space-y-8">
          {faqs.map((faq) => (
            <div key={faq.q}>
              <p className="faq-question">{faq.q}</p>
              <p className="faq-answer">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#formulario" className="btn-cta">
            Quero vender com propósito
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
