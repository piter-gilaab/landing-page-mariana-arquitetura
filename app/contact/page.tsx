import SectionReveal from "@/components/SectionReveal";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-[var(--background)] to-[var(--background-alt)] pt-28 pb-24 md:pt-32 md:pb-32 lg:pb-40">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionReveal className="max-w-3xl mx-auto space-y-8 md:space-y-10">
          <header className="space-y-8 text-center md:space-y-10">
            <h1 className="text-3xl font-light tracking-tight text-[var(--accent-brown)] sm:text-4xl lg:text-5xl">
              Contato
            </h1>
            <p className="text-base font-light leading-relaxed text-[var(--text-muted)] sm:text-lg">
              Vamos conversar sobre o seu próximo projeto?
            </p>
          </header>

          <div className="mt-12 md:mt-16">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm uppercase tracking-wider text-[var(--text-muted)]"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full border border-[var(--gray-medium)] bg-[var(--background)] px-4 py-3.5 text-[var(--foreground)] transition-colors focus:border-[var(--accent-brown)] focus:outline-none"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm uppercase tracking-wider text-[var(--text-muted)]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border border-[var(--gray-medium)] bg-[var(--background)] px-4 py-3.5 text-[var(--foreground)] transition-colors focus:border-[var(--accent-brown)] focus:outline-none"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="projectType"
                  className="mb-2 block text-sm uppercase tracking-wider text-[var(--text-muted)]"
                >
                  Tipo de Projeto
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  className="w-full border border-[var(--gray-medium)] bg-[var(--background)] px-4 py-3.5 text-[var(--foreground)] transition-colors focus:border-[var(--accent-brown)] focus:outline-none"
                >
                  <option value="">Selecione...</option>
                  <option value="residencial">Residencial</option>
                  <option value="comercial">Comercial</option>
                  <option value="reforma">Reforma</option>
                  <option value="consultoria">Consultoria</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm uppercase tracking-wider text-[var(--text-muted)]"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full resize-none border border-[var(--gray-medium)] bg-[var(--background)] px-4 py-3.5 text-[var(--foreground)] transition-colors focus:border-[var(--accent-brown)] focus:outline-none"
                  placeholder="Conte-nos sobre seu projeto..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[var(--accent-brown)] px-8 py-4 text-sm uppercase tracking-wider text-white transition-colors hover:bg-[var(--accent-brown-dark)]"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          <div className="border-t border-[var(--gray-light)] pt-10 text-center md:pt-12">
            <h2 className="mb-6 text-2xl font-light text-[var(--accent-brown)]">
              Outras formas de contato
            </h2>
            <div className="space-y-3 text-[var(--text-muted)]">
              <p>Email: marianagila@gmail.com</p>
              <p>Telefone: (83) 99185-7266</p>
              <p>Instagram: @marigbss</p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}
