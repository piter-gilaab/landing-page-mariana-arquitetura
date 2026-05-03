/**
 * HOME PAGE - LANDING PAGE COM SCROLL SUAVE
 * 
 * Esta é a página inicial (rota "/").
 * É um Server Component - pode importar Client Components.
 * 
 * ESTRUTURA DE LANDING PAGE:
 * - Seção Home (Hero)
 * - Seção Projetos (Projects)
 * - Seção Contato (Contact)
 * 
 * SCROLL SUAVE:
 * - Cada seção tem um id único para navegação
 * - A Navbar usa esses ids para fazer scroll suave
 * - CSS global define scroll-behavior: smooth
 * 
 * SEMÂNTICA HTML:
 * - <main>: conteúdo principal da página
 * - <section>: cada seção semântica com id
 */

import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectCard from "@/components/ProjectCard";

// Dados mockados dos projetos
const projects = [
  {
    id: 1,
    title: "Residência Minimalista",
    description: "Casa moderna com integração entre ambientes internos e externos.",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    category: "Residencial",
  },
  {
    id: 2,
    title: "Loft Industrial",
    description: "Conversão de espaço comercial em residência urbana contemporânea.",
    imageUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
    category: "Residencial",
  },
  {
    id: 3,
    title: "Escritório Corporativo",
    description: "Ambiente de trabalho moderno com foco em bem-estar e produtividade.",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    category: "Comercial",
  },
  {
    id: 4,
    title: "Café Boutique",
    description: "Espaço aconchegante que combina funcionalidade e design.",
    imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop",
    category: "Comercial",
  },
  {
    id: 5,
    title: "Apartamento Moderno",
    description: "Reforma completa priorizando luminosidade e amplitude.",
    imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
    category: "Residencial",
  },
  {
    id: 6,
    title: "Casa de Campo",
    description: "Arquitetura que dialoga com a natureza local.",
    imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
    category: "Residencial",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* SEÇÃO HOME - Hero com impacto visual */}
      <section id="home">
        <Hero />
        <About />
      </section>

      {/* SEÇÃO PROJETOS - Grid de projetos */}
      <section id="projects" className="py-20 bg-[var(--background)]">
        <div className="max-w-full mx-auto px-4 md:px-6">
          {/* Cabeçalho da seção */}
          <header className="mb-16 text-center">
            <h2 className="text-5xl font-light tracking-tight text-[var(--accent-brown)] mb-4">
              Projetos
            </h2>
            <p className="text-lg text-[var(--text-muted)] font-light max-w-2xl mx-auto">
              Uma seleção de trabalhos que refletem nossa abordagem de design centrado no usuário e atenção aos detalhes.
            </p>
          </header>

          {/* Grid de projetos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO CONTATO - Formulário */}
      <section id="contact" className="py-20 bg-[var(--background-alt)]">
        <div className="max-w-2xl mx-auto px-6">
          {/* Cabeçalho */}
          <header className="mb-12 text-center">
            <h2 className="text-5xl font-light tracking-tight text-[var(--accent-brown)] mb-4">
              Contato
            </h2>
            <p className="text-lg text-[var(--text-muted)] font-light">
              Vamos conversar sobre o seu próximo projeto?
            </p>
          </header>

          {/* Formulário de contato */}
          <form className="space-y-6">
            {/* Nome */}
            <div>
              <label 
                htmlFor="name" 
                className="block text-sm uppercase tracking-wider text-[var(--text-muted)] mb-2"
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 bg-white border border-[var(--gray-light)] rounded-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--accent-brown)] transition-colors"
                placeholder="Seu nome completo"
              />
            </div>

            {/* Email */}
            <div>
              <label 
                htmlFor="email" 
                className="block text-sm uppercase tracking-wider text-[var(--text-muted)] mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 bg-white border border-[var(--gray-light)] rounded-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--accent-brown)] transition-colors"
                placeholder="seu@email.com"
              />
            </div>

            {/* Telefone */}
            <div>
              <label 
                htmlFor="phone" 
                className="block text-sm uppercase tracking-wider text-[var(--text-muted)] mb-2"
              >
                Telefone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 bg-white border border-[var(--gray-light)] rounded-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--accent-brown)] transition-colors"
                placeholder="(00) 00000-0000"
              />
            </div>

            {/* Mensagem */}
            <div>
              <label 
                htmlFor="message" 
                className="block text-sm uppercase tracking-wider text-[var(--text-muted)] mb-2"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-3 bg-white border border-[var(--gray-light)] rounded-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--accent-brown)] transition-colors resize-none"
                placeholder="Conte-nos sobre seu projeto..."
              />
            </div>

            {/* Botão de envio */}
            <button
              type="submit"
              className="w-full py-4 bg-[var(--accent-brown)] text-white uppercase tracking-wider text-sm font-medium rounded-sm hover:bg-[var(--accent-brown-dark)] transition-colors"
            >
              Enviar mensagem
            </button>
          </form>

          {/* Informações de contato alternativas */}
          <div className="mt-12 pt-12 border-t border-[var(--gray-light)] text-center space-y-4">
            <p className="text-[var(--text-muted)]">
              <span className="block text-sm uppercase tracking-wider mb-1">Email</span>
              <a href="mailto:contato@marianaborges.com" className="text-[var(--accent-brown)] hover:underline">
                contato@marianaborges.com
              </a>
            </p>
            <p className="text-[var(--text-muted)]">
              <span className="block text-sm uppercase tracking-wider mb-1">Telefone</span>
              <a href="tel:+5511999999999" className="text-[var(--accent-brown)] hover:underline">
                (11) 99999-9999
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
