/**
 * ABOUT / TEXTO INSTITUCIONAL COMPONENT
 * 
 * Seção que apresenta a filosofia de trabalho da arquiteta.
 * 
 * POR QUÊ SEPARAR DO PORTFÓLIO?
 * - Estabelece credibilidade antes de mostrar trabalhos
 * - Permite ao visitante entender a abordagem profissional
 * - Cria conexão emocional/conceitual antes do visual
 * - Arquitetura é sobre conceito, não apenas estética
 * 
 * LAYOUT EM DUAS COLUNAS:
 * - Desktop: texto à esquerda, elemento visual à direita
 * - Mobile: empilhado verticalmente
 * - Respiro visual generoso (arquitetura = espaço)
 * 
 * PALETA MARROM USADA COM MODERAÇÃO:
 * - Títulos em marrom para destaque sutil
 * - Fundo bege claro para separação visual
 * - Blocos de cor marrom como acento visual
 * - Nunca domina, apenas pontua
 * 
 * Este é um Server Component (sem interatividade).
 */

export default function About() {
  return (
    <section className="py-24 bg-[var(--background-alt)]">
      <div className="max-w-full mx-auto px-4 md:px-6">
        
        {/* PRIMEIRO GRID: Foto à esquerda, texto à direita */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          
          {/* COLUNA 1: Foto */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-sm overflow-hidden bg-[var(--gray-light)]">
              <img
                src="/images/foto-mariana.png"
                alt="Mariana Borges Arquiteta"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* COLUNA 2: Texto */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-[var(--accent-brown)]">
              Sobre o escritório
            </h2>
            <p className="text-lg font-light leading-relaxed text-[var(--foreground)]">
              Me chamo Mariana, sou arquiteta e fundadora
              deste escritório, que foi criado a partir do desejo
              de unir sensibilidade estética e pensamento
              estratégico em cada projeto. Acredito que a
              arquitetura vai muito além de compor formas e
              materiais, ela tem o poder de transformar a forma
              como as pessoas se conectam com os espaços.
            </p>

          </div>

        </div>

        {/* SEGUNDO GRID: Texto à esquerda, foto à direita (original) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center mt-24">
          
          {/* COLUNA 1: Texto institucional */}
          <div className="space-y-8">
            
            {/* Título da seção */}
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-[var(--accent-brown)]">
              Arquitetura que transforma espaços em experiências
            </h2>

            {/* Filosofia de trabalho */}
            <div className="space-y-6 text-[var(--foreground)]">
              <p className="text-lg font-light leading-relaxed">
                Cada projeto nasce da escuta atenta às necessidades do cliente e do diálogo 
                respeitoso com o entorno. Acredito que a arquitetura deve ser funcional, 
                esteticamente coerente e emocionalmente significativa.
              </p>

              <p className="text-lg font-light leading-relaxed">
                Minha abordagem combina <strong className="text-[var(--accent-brown-dark)] font-medium">
                minimalismo elegante</strong> com <strong className="text-[var(--accent-brown-dark)] font-medium">
                atenção aos detalhes</strong>. Valorizo materiais naturais, iluminação 
                estratégica e a integração harmoniosa entre ambientes internos e externos.
              </p>

              <p className="text-lg font-light leading-relaxed text-[var(--text-muted)]">
                Cada linha desenhada busca equilibrar forma e função, criando espaços que 
                inspiram, acolhem e perduram no tempo.
              </p>
            </div>

            {/* Valores em lista */}
            <div className="pt-6 border-t border-[var(--gray-light)]">
              <h3 className="text-sm uppercase tracking-wider text-[var(--text-muted)] mb-4">
                Princípios de atuação
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--accent-brown)] mt-1">→</span>
                  <span className="text-[var(--foreground)] font-light">
                    Design atemporal e funcional
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--accent-brown)] mt-1">→</span>
                  <span className="text-[var(--foreground)] font-light">
                    Sustentabilidade e materiais naturais
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--accent-brown)] mt-1">→</span>
                  <span className="text-[var(--foreground)] font-light">
                    Respeito à identidade de cada cliente
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* COLUNA 2: Elemento visual - Foto */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-sm overflow-hidden bg-[var(--gray-light)]">
              <img
                src="/images/foto-mariana.png"
                alt="Mariana Borges Arquiteta"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
