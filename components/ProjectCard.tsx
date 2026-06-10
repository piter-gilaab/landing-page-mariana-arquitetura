'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="group flex h-full cursor-pointer flex-col space-y-4"
    >
      <div className="relative overflow-hidden rounded-sm bg-[var(--gray-light)] aspect-[4/3]">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="space-y-3 md:space-y-4">
        <p className="text-xs uppercase tracking-wider text-[var(--accent-brown)]">
          {project.category}
        </p>

        <h3 className="text-xl font-light text-[var(--foreground)] transition-colors group-hover:text-[var(--accent-brown)] md:text-2xl">
          {project.title}
        </h3>

        <p className="text-sm font-light leading-relaxed text-[var(--text-muted)] md:text-base">
          {project.description}
        </p>
      </div>
    </motion.article>
  );
}
