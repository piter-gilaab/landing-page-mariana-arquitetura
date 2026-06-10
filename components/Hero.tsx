'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center bg-linear-to-b from-[var(--background)] to-[var(--background-alt)]"
    >
      <div className="w-full max-w-6xl mx-auto px-6 pt-28 pb-20 text-center sm:px-8 md:pt-32 md:pb-28 lg:px-12 lg:pb-32">
        <div className="space-y-6 md:space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-5xl font-light tracking-tight text-[var(--foreground)] sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Mariana Borges
            <br />
            <span className="font-normal text-[var(--accent-brown)]">
              Arquitetura
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="max-w-3xl mx-auto text-base font-light leading-relaxed text-[var(--text-muted)] sm:text-lg md:text-xl"
          >
            Muito além de compor formas e materiais, ela tem o poder de
            transformar a forma estética minimalista e sustentabilidade.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
            className="pt-2 md:pt-4"
          >
            <a
              href="#projetos"
               className="inline-flex w-full items-center justify-center rounded-sm bg-[var(--accent-brown)] px-6 py-4 text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-[var(--accent-brown-dark)] sm:w-auto sm:px-8"
            >
              Ver Projetos
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
