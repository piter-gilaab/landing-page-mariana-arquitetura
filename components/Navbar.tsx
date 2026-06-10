'use client';

import Image from 'next/image';

export default function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      return;
    }

    const target = sectionId === 'home' ? '/' : `/#${sectionId}`;
    window.location.href = target;
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[var(--gray-light)] bg-[var(--background)]/95 backdrop-blur-sm">
      <div className="w-full max-w-9xl mx-auto px-6 py-4 sm:px-8 md:py-5 lg:px-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center justify-center gap-3 self-center transition-opacity hover:opacity-80 sm:self-auto"
          >
            <div className="relative h-10 w-10 overflow-hidden rounded-full bg-[var(--gray-light)]">
              <Image
                src="/images/logo-navbar.png"
                alt="Logo Arquitetura"
                fill
                className="object-cover"
                sizes="40px"
                priority
              />
            </div>

            <h2 className="text-lg font-medium tracking-[0.18em] text-[var(--foreground)] sm:text-xl lg:text-2xl">
              Mariana Borges
            </h2>
          </button>

          <div aria-label="Navegação primária" className="w-full sm:w-auto">
            <ul className="flex flex-wrap items-center justify-center gap-4 sm:justify-end md:gap-6">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] transition-colors hover:text-[var(--accent-brown)] sm:text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projetos')}
                  className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] transition-colors hover:text-[var(--accent-brown)] sm:text-sm"
                >
                  Projetos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contato')}
                  className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] transition-colors hover:text-[var(--accent-brown)] sm:text-sm"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
