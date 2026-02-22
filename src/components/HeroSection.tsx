import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-primary/60" />
      <div className="container relative z-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left - Text */}
          <div className="space-y-6">
            <h1 className="font-heading font-bold text-3xl md:text-4xl leading-tight text-highlight">
              Você sente dificuldade em vender mesmo sabendo que seu produto é bom?
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-cream">
              Ressignifique sua relação com vendas e aprenda a vender com confiança, propósito e estratégia — sem manipulação, sem culpa e sem forçar ninguém.
            </p>
            <p className="text-highlight italic text-lg font-heading font-medium">
              VENDA É COLOCAR PROPÓSITO EM MOVIMENTO.
            </p>
          </div>

          {/* Right - Lead Form */}
          <div className="bg-background rounded-lg border border-primary/30 p-6 md:p-8 max-w-md mx-auto w-full">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary text-center mb-2">
              Quero o E-book!
            </h2>
            <p className="text-primary text-center text-lg mb-6 font-body">
              Preencha os dados para garantir seu acesso:
            </p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">Nome*</label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full px-4 py-2.5 rounded-md bg-muted border-none text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring shadow-inner"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">Email*</label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full px-4 py-2.5 rounded-md bg-muted border-none text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring shadow-inner"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">Telefone*</label>
                <input
                  type="tel"
                  placeholder="(00) 00000-0000"
                  className="w-full px-4 py-2.5 rounded-md bg-muted border-none text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring shadow-inner"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">Empresa*</label>
                <input
                  type="text"
                  placeholder="Sua empresa"
                  className="w-full px-4 py-2.5 rounded-md bg-muted border-none text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring shadow-inner"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">Cargo*</label>
                <input
                  type="text"
                  placeholder="Seu cargo"
                  className="w-full px-4 py-2.5 rounded-md bg-muted border-none text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring shadow-inner"
                  required
                />
              </div>
              <button type="submit" className="btn-cta w-full text-center mt-2">
                Quero vender com propósito
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
