/**
 * PROJECT CARD COMPONENT
 * 
 * Este é um CLIENT COMPONENT porque usa Framer Motion para animação ao passar o mouse.
 * 
 * FRAMER MOTION:
 * - whileHover: estado da animação quando o mouse está sobre o elemento
 * - transition: controla a suavidade da animação
 * 
 * NEXT/IMAGE:
 * - Componente otimizado do Next.js para imagens
 * - Lazy loading automático
 * - Otimização de tamanho e formato
 * - fill: preenche o container pai (precisa de position: relative no pai)
 * - object-fit: como a imagem se ajusta (cover = preenche sem distorcer)
 * 
 * TYPESCRIPT:
 * - Define a interface Project com os tipos dos dados
 */

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// Interface TypeScript define a estrutura de dados de um projeto
interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

// Props que o componente recebe
interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      // Animação sutil ao passar o mouse: leve movimento pra cima
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group cursor-pointer"
    >
      {/* Container da imagem com aspect ratio fixo */}
      <div className="relative aspect-4/3 overflow-hidden bg-[var(--gray-light)] mb-4">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill // Preenche o container pai
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Informações do projeto */}
      <div className="space-y-2">
        {/* Categoria em texto pequeno */}
        <p className="text-xs uppercase tracking-wider text-[var(--accent-brown)]">
          {project.category}
        </p>

        {/* Título do projeto */}
        <h3 className="text-xl font-light text-[var(--foreground)] group-hover:text-[var(--accent-brown)] transition-colors">
          {project.title}
        </h3>

        {/* Descrição */}
        <p className="text-sm text-[var(--text-muted)] font-light">
          {project.description}
        </p>
      </div>
    </motion.article>
  );
}
