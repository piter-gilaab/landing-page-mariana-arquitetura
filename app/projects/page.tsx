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
    title: "Casa de Campo",
    description: "Projeto sustentável integrado à natureza com materiais locais.",
    imageUrl:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
    category: "Residencial",
  },
  {
    id: 5,
    title: "Cafeteria Urbana",
    description: "Espaço acolhedor com design escandinavo e iluminação natural.",
    imageUrl:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop",
    category: "Comercial",
  },
  {
    id: 6,
    title: "Cobertura Contemporânea",
    description: "Apartamento de alto padrão com vista panorâmica da cidade.",
    imageUrl:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    category: "Residencial",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] pt-28 pb-24 md:pt-32 md:pb-32 lg:pb-40">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionReveal className="w-full">
          <header className="space-y-8 text-center md:space-y-10">
            <h1 className="text-3xl font-light tracking-tight text-[var(--accent-brown)] sm:text-4xl lg:text-5xl">
              Projetos
            </h1>
            <p className="max-w-3xl mx-auto text-base font-light leading-relaxed text-[var(--text-muted)] sm:text-lg">
              Uma seleção de trabalhos que refletem nossa abordagem minimalista e
              atenção aos detalhes.
            </p>
          </header>

          <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-16 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}
