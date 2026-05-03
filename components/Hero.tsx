/**
 * HERO COMPONENT
 * 
 * Este é um CLIENT COMPONENT (precisa do "use client").
 * 
 * Por quê? Porque usamos Framer Motion, que precisa de JavaScript no browser
 * para executar as animações. Animações são interativas e dependem do estado
 * do DOM, então não podem ser Server Components.
 * 
 * FRAMER MOTION:
 * - motion.div: versão animável de uma div
 * - initial: estado inicial da animação
 * - animate: estado final da animação
 * - transition: como a animação acontece (duração, easing, delay)
 * 
 * TAILWIND CSS:
 * - min-h-screen: altura mínima da tela
 * - flex items-center justify-center: centraliza conteúdo
 * - text-center: texto centralizado
 */

'use client'; // Marca como Client Component

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-b from-[var(--background)] to-[var(--background-alt)] px-6">
      <div className="max-w-4xl text-center">
        
        {/* Título principal com animação de fade-in e movimento vertical */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }} // Começa invisível e 30px abaixo
          animate={{ opacity: 1, y: 0 }}   // Termina visível e na posição original
          transition={{ 
            duration: 0.8,              // Duração de 0.8 segundos
            ease: "easeOut"             // Aceleração suave
          }}
          className="text-6xl md:text-7xl font-light tracking-tight text-[var(--foreground)] mb-11"
        >
          Mariana Borges<br />
          <span className="font-normal text-[var(--accent-brown)]">Arquitetura</span>
        </motion.h1>

        {/* Subtítulo com animação atrasada (delay) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.9,                 // Espera 0.3s antes de começar
            ease: "easeOut" 
          }}
          className="text-lg md:text-xl text-[var(--text-muted)] font-light max-w-2xl mx-auto mb-12"
        >
          Muito além de compor formas e
          materiais, ela tem o poder de transformar a forma
          estética minimalista e sustentabilidade.
        </motion.p>

        {/* Botão CTA com animação ainda mais atrasada */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.6,                 // Espera 0.6s
            ease: "easeOut" 
          }}
        >
          <a 
            href="/projects"
            className="inline-block px-8 py-3 bg-[var(--accent-brown)] text-white text-sm uppercase tracking-wider hover:bg-[var(--accent-brown-dark)] transition-colors"
          >
            Ver Projetos
          </a>
        </motion.div>
      </div>
    </section>
  );
}
