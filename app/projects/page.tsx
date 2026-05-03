/**
 * PROJECTS PAGE
 * 
 * Página de projetos (rota "/projects").
 * É um Server Component - renderizado no servidor.
 * 
 * DADOS MOCKADOS:
 * - Array de projetos com dados fictícios
 * - Em produção, isso viria de um CMS ou banco de dados
 * - Por enquanto, hardcoded para fins didáticos
 * 
 * GRID RESPONSIVO COM TAILWIND:
 * - grid: define um container grid
 * - grid-cols-1: 1 coluna no mobile
 * - md:grid-cols-2: 2 colunas em tablets (768px+)
 * - lg:grid-cols-3: 3 colunas em desktops (1024px+)
 * - gap-8: espaçamento entre os cards
 * 
 * COMPONENTIZAÇÃO:
 * - ProjectCard é um Client Component (tem animação)
 * - Mas podemos usar ele aqui porque o Next.js é inteligente:
 *   Server Component pode renderizar Client Components como filhos
 */

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
    title: "Casa de Campo",
    description: "Projeto sustentável integrado à natureza com materiais locais.",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
    category: "Residencial",
  },
  {
    id: 5,
    title: "Cafeteria Urbana",
    description: "Espaço acolhedor com design escandinavo e iluminação natural.",
    imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop",
    category: "Comercial",
  },
  {
    id: 6,
    title: "Cobertura Contemporânea",
    description: "Apartamento de alto padrão com vista panorâmica da cidade.",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    category: "Residencial",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Cabeçalho da página */}
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-light tracking-tight text-[var(--accent-brown)] mb-4">
            Projetos
          </h1>
          <p className="text-lg text-[var(--text-muted)] font-light max-w-2xl mx-auto">
            Uma seleção de trabalhos que refletem nossa abordagem minimalista
            e atenção aos detalhes.
          </p>
        </header>

        {/* Grid de projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
