import About from "@/components/About";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import SectionReveal from "@/components/SectionReveal";

const projects = [
  {
    id: 1,
    title: "Residência Minimalista",
    description: "Casa moderna com integração entre ambientes internos e externos.",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    category: "Residencial",
  },
  {
    id: 2,
    title: "Loft Industrial",
    description: "Conversão de espaço comercial em residência urbana contemporânea.",
    imageUrl:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
    category: "Residencial",
  },
  {
    id: 3,
    title: "Escritório Corporativo",
    description: "Ambiente de trabalho moderno com foco em bem-estar e produtividade.",
    imageUrl:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    category: "Comercial",
  },
  {
    id: 4,
    title: "Café Boutique",
    description: "Espaço aconchegante que combina funcionalidade e design.",
    imageUrl:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop",
    category: "Comercial",
  },
  {
    id: 5,
    title: "Apartamento Moderno",
    description: "Reforma completa priorizando luminosidade e amplitude.",
    imageUrl:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
    category: "Residencial",
  },
  {
    id: 6,
    title: "Casa de Campo",
    description: "Arquitetura que dialoga com a natureza local.",
    imageUrl:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
    category: "Residencial",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <About />

      <section id="projetos" className="bg-[var(--background)] py-24 md:py-32 lg:py-40">
        <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionReveal className="w-full">
            <header className="space-y-8 text-center md:space-y-10">
              <h2 className="text-3xl font-light tracking-tight text-[var(--accent-brown)] sm:text-4xl lg:text-5xl">
                Projetos
              </h2>
              <p className="max-w-3xl mx-auto text-base font-light leading-relaxed text-[var(--text-muted)] sm:text-lg">
                Uma seleção de trabalhos que refletem nossa abordagem de design
                centrado no usuário e atenção aos detalhes.
              </p>
            </header>

            <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-16 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <section id="contato" className="bg-[var(--background-alt)] py-24 md:py-32 lg:py-40">
        <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionReveal className="max-w-3xl mx-auto space-y-8 md:space-y-10">
            <header className="space-y-8 text-center md:space-y-10">
              <h2 className="text-3xl font-light tracking-tight text-[var(--accent-brown)] sm:text-4xl lg:text-5xl">
                Contato
              </h2>
              <p className="text-base font-light leading-relaxed text-[var(--text-muted)] sm:text-lg">
                Vamos conversar sobre o seu próximo projeto?
              </p>
            </header>

            <div className="mt-12 md:mt-16">
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm uppercase tracking-wider text-[var(--text-muted)]"
                    >
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full rounded-sm border border-[var(--gray-light)] bg-white px-4 py-3.5 text-[var(--foreground)] transition-colors focus:border-[var(--accent-brown)] focus:outline-none"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm uppercase tracking-wider text-[var(--text-muted)]"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full rounded-sm border border-[var(--gray-light)] bg-white px-4 py-3.5 text-[var(--foreground)] transition-colors focus:border-[var(--accent-brown)] focus:outline-none"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm uppercase tracking-wider text-[var(--text-muted)]"
                  >
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full rounded-sm border border-[var(--gray-light)] bg-white px-4 py-3.5 text-[var(--foreground)] transition-colors focus:border-[var(--accent-brown)] focus:outline-none"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm uppercase tracking-wider text-[var(--text-muted)]"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full resize-none rounded-sm border border-[var(--gray-light)] bg-white px-4 py-3.5 text-[var(--foreground)] transition-colors focus:border-[var(--accent-brown)] focus:outline-none"
                    placeholder="Conte-nos sobre seu projeto..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-sm bg-[var(--accent-brown)] py-4 text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-[var(--accent-brown-dark)]"
                >
                  Enviar mensagem
                </button>
              </form>
            </div>

            <div className="border-t border-[var(--gray-light)] pt-10 text-center md:pt-12">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
                <p className="text-[var(--text-muted)]">
                  <span className="mb-1 block text-sm uppercase tracking-wider">
                    Email
                  </span>
                  <a
                    href="mailto:marianagila@gmail.com"
                    className="text-[var(--accent-brown)] hover:underline"
                  >
                    marianagila@gmail.com
                  </a>
                </p>
                <p className="text-[var(--text-muted)]">
                  <span className="mb-1 block text-sm uppercase tracking-wider">
                    Telefone
                  </span>
                  <a
                    href="tel:+5583991857266"
                    className="text-[var(--accent-brown)] hover:underline"
                  >
                    (83) 99185-7266
                  </a>
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
