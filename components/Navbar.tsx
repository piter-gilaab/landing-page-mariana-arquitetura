/**
 * NAVBAR COMPONENT - COM SCROLL SUAVE
 * 
 * Este é um CLIENT COMPONENT (precisa de "use client").
 * Por quê? Porque usamos JavaScript do navegador para scroll suave.
 * 
 * SCROLL SUAVE:
 * - Usa scrollIntoView() nativo do navegador
 * - Não precisa de bibliotecas externas
 * - Funciona perfeitamente com Next.js App Router
 * 
 * COMPORTAMENTO:
 * - Ao clicar em Home/Projetos/Contato, rola suavemente até a seção
 * - Não muda de rota (tudo está na mesma página)
 * - Usa event.preventDefault() para evitar navegação
 * 
 * NAVBAR FIXA:
 * - fixed: fica fixada no topo ao rolar
 * - backdrop-blur: efeito de vidro fosco
 * - z-50: fica acima de outros elementos
 */

'use client'; // Client Component para usar eventos do navegador

import Image from 'next/image';

export default function Navbar() {
  /**
   * Função que faz scroll suave até uma seção específica
   * 
   * @param sectionId - id da seção (home, projects, contact)
   * 
   * COMO FUNCIONA:
   * 1. document.getElementById() encontra o elemento pela id
   * 2. scrollIntoView() rola até o elemento
   * 3. behavior: 'smooth' faz a rolagem ser suave
   * 4. block: 'start' alinha o topo da seção com o topo da viewport
   */
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', // Scroll suave
        block: 'start'      // Alinha ao topo
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/90 backdrop-blur-sm border-b border-[var(--gray-light)]">
      {/* Container centralizado com padding responsivo */}
      <div className="max-w-full mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo + Nome - clicável para voltar ao topo */}
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            {/* Logo da arquiteta */}
            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-[var(--gray-light)]">
              <Image
                src="/images/foto-mariana.png"
                alt="Logo Arquitetura"
                fill
                className="object-cover"
                sizes="40px"
                priority
              />
            </div>
            
            {/* Nome */}
            <span className="text-2xl font-light tracking-wider text-[var(--foreground)]">
              Mariana Borges
            </span>
          </button>

          {/* Menu de navegação com scroll suave */}
          <nav>
            <ul className="flex gap-8">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-sm uppercase tracking-wider text-[var(--text-muted)] hover:text-[var(--accent-brown)] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-sm uppercase tracking-wider text-[var(--text-muted)] hover:text-[var(--accent-brown)] transition-colors"
                >
                  Projetos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-sm uppercase tracking-wider text-[var(--text-muted)] hover:text-[var(--accent-brown)] transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  );
}
