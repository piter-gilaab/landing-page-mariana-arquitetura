import Image from "next/image";
import SectionReveal from "@/components/SectionReveal";

export default function About() {
  return (
    <section id="sobre" className="bg-[var(--background-alt)] py-24 md:py-32 lg:py-40">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="space-y-16 md:space-y-20 lg:space-y-24">
          <SectionReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="flex justify-center">
                <div className="relative w-full max-w-sm overflow-hidden rounded-sm bg-[var(--gray-light)] aspect-[3/4] sm:max-w-md">
                  <Image
                    src="/images/foto-mariana.png"
                    alt="Mariana Borges Arquiteta"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 28rem"
                  />
                </div>
              </div>

              <div className="max-w-xl mx-auto text-center space-y-8 lg:mx-0 lg:text-left lg:space-y-10">
                <h2 className="text-3xl font-light tracking-tight text-[var(--accent-brown)] sm:text-4xl lg:text-5xl">
                  Sobre o escritório
                </h2>
                <p className="text-base font-light leading-relaxed text-[var(--foreground)] sm:text-lg md:leading-8">
                  Me chamo Mariana, sou arquiteta e fundadora deste escritório,
                  que foi criado a partir do desejo de unir sensibilidade
                  estética e pensamento estratégico em cada projeto. Acredito
                  que a arquitetura vai muito além de compor formas e materiais,
                  ela tem o poder de transformar a forma como as pessoas se
                  conectam com os espaços.
                </p>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="max-w-xl mx-auto text-center space-y-8 lg:mx-0 lg:text-left lg:space-y-10">
                <div className="space-y-4 md:space-y-6">
                  <h2 className="text-3xl font-light tracking-tight text-[var(--accent-brown)] sm:text-4xl lg:text-5xl">
                    Arquitetura que transforma espaços em experiências
                  </h2>

                  <div className="space-y-4 md:space-y-6 text-[var(--foreground)]">
                    <p className="text-base font-light leading-relaxed sm:text-lg md:leading-8">
                      Cada projeto nasce da escuta atenta às necessidades do
                      cliente e do diálogo respeitoso com o entorno. Acredito
                      que a arquitetura deve ser funcional, esteticamente
                      coerente e emocionalmente significativa.
                    </p>

                    <p className="text-base font-light leading-relaxed sm:text-lg md:leading-8">
                      Minha abordagem combina{" "}
                      <strong className="font-medium text-[var(--accent-brown-dark)]">
                        minimalismo elegante
                      </strong>{" "}
                      com{" "}
                      <strong className="font-medium text-[var(--accent-brown-dark)]">
                        atenção aos detalhes
                      </strong>
                      . Valorizo materiais naturais, iluminação estratégica e a
                      integração harmoniosa entre ambientes internos e externos.
                    </p>

                    <p className="text-base font-light leading-relaxed text-[var(--text-muted)] sm:text-lg md:leading-8">
                      Cada linha desenhada busca equilibrar forma e função,
                      criando espaços que inspiram, acolhem e perduram no tempo.
                    </p>
                  </div>
                </div>

                <div className="border-t border-[var(--gray-light)] pt-6 md:pt-8">
                  <h3 className="mb-4 text-sm uppercase tracking-wider text-[var(--text-muted)]">
                    Princípios de atuação
                  </h3>
                  <ul className="space-y-4 mx-auto w-fit lg:mx-0">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-[var(--accent-brown)]">→</span>
                      <span className="font-light text-[var(--foreground)]">
                        Design atemporal e funcional
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-[var(--accent-brown)]">→</span>
                      <span className="font-light text-[var(--foreground)]">
                        Sustentabilidade e materiais naturais
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-[var(--accent-brown)]">→</span>
                      <span className="font-light text-[var(--foreground)]">
                        Respeito à identidade de cada cliente
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative w-full max-w-sm overflow-hidden rounded-sm bg-[var(--gray-light)] aspect-[3/4] sm:max-w-md">
                  <Image
                    src="/images/foto-mariana.png"
                    alt="Mariana Borges Arquiteta"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 28rem"
                  />
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
