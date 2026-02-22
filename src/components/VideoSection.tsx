const VideoSection = () => {
  return (
    <section className="section-dark py-16">
      <div className="container">
        <div className="max-w-lg mx-auto">
          <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden shadow-2xl">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/XI1GuvYC-KQ?rel=0"
              title="Venda com Propósito"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <h2 className="font-heading text-2xl md:text-3xl text-center mt-16 mb-4">
          <span className="text-cream">Para quem é o </span>
          <strong className="text-highlight">E-book Venda com Propósito</strong>
          <span className="text-cream">?</span>
        </h2>

        <p className="text-cream text-center max-w-2xl mx-auto text-base md:text-lg mb-10">
          Esse material é para quem tem um produto ou serviço incrível, mas{" "}
          <strong className="text-highlight">trava na hora de vender</strong>. Se você quer crescer com integridade, sem perder sua essência, esse e-book é para você.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {["Empreendedoras", "Autônomas e Profissionais Liberais", "Mulheres que têm um produto incrível mas travam na hora de vender"].map((item) => (
            <div key={item} className="text-center">
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-secondary/20 flex items-center justify-center">
                <span className="text-highlight text-lg">✔</span>
              </div>
              <p className="text-cream text-base">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
