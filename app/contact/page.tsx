/**
 * CONTACT PAGE
 * 
 * Página de contato (rota "/contact").
 * É um Server Component simples.
 * 
 * FORMULÁRIO:
 * - Por enquanto, apenas HTML estático
 * - Em produção, você adicionaria:
 *   1. "use client" para capturar eventos
 *   2. useState para controlar inputs
 *   3. Server Action ou API Route para enviar dados
 * 
 * LAYOUT COM TAILWIND:
 * - max-w-2xl: largura máxima do formulário
 * - space-y-6: espaçamento vertical entre elementos
 * - Inputs com styling consistente
 * 
 * DIDÁTICA:
 * - Este exemplo mostra a estrutura básica
 * - Não implementa funcionalidade real (fora do escopo)
 * - Foco em layout e organização
 */

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-[var(--background)] to-[var(--background-alt)] py-20">
      <div className="max-w-2xl mx-auto px-6">
        
        {/* Cabeçalho */}
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-light tracking-tight text-[var(--accent-brown)] mb-4">
            Contato
          </h1>
          <p className="text-lg text-[var(--text-muted)] font-light">
            Vamos conversar sobre o seu próximo projeto?
          </p>
        </header>

        {/* Formulário de contato */}
        <form className="space-y-6">
          
          {/* Nome */}
          <div>
            <label 
              htmlFor="name" 
              className="block text-sm uppercase tracking-wider text-[var(--text-muted)] mb-2"
            >
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 border border-[var(--gray-medium)] bg-[var(--background)] focus:outline-none focus:border-[var(--accent-brown)] transition-colors text-[var(--foreground)]"
              placeholder="Seu nome completo"
            />
          </div>

          {/* Email */}
          <div>
            <label 
              htmlFor="email" 
              className="block text-sm uppercase tracking-wider text-[var(--text-muted)] mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 border border-[var(--gray-medium)] bg-[var(--background)] focus:outline-none focus:border-[var(--accent-brown)] transition-colors text-[var(--foreground)]"
              placeholder="seu@email.com"
            />
          </div>

          {/* Tipo de Projeto */}
          <div>
            <label 
              htmlFor="projectType" 
              className="block text-sm uppercase tracking-wider text-[var(--text-muted)] mb-2"
            >
              Tipo de Projeto
            </label>
            <select
              id="projectType"
              name="projectType"
              className="w-full px-4 py-3 border border-[var(--gray-medium)] bg-[var(--background)] focus:outline-none focus:border-[var(--accent-brown)] transition-colors text-[var(--foreground)]"
            >
              <option value="">Selecione...</option>
              <option value="residencial">Residencial</option>
              <option value="comercial">Comercial</option>
              <option value="reforma">Reforma</option>
              <option value="consultoria">Consultoria</option>
            </select>
          </div>

          {/* Mensagem */}
          <div>
            <label 
              htmlFor="message" 
              className="block text-sm uppercase tracking-wider text-[var(--text-muted)] mb-2"
            >
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="w-full px-4 py-3 border border-[var(--gray-medium)] bg-[var(--background)] focus:outline-none focus:border-[var(--accent-brown)] transition-colors resize-none text-[var(--foreground)]"
              placeholder="Conte-nos sobre seu projeto..."
            />
          </div>

          {/* Botão de envio */}
          <button
            type="submit"
            className="w-full px-8 py-4 bg-[var(--accent-brown)] text-white text-sm uppercase tracking-wider hover:bg-[var(--accent-brown-dark)] transition-colors"
          >
            Enviar Mensagem
          </button>
        </form>

        {/* Informações de contato adicionais */}
        <div className="mt-16 pt-16 border-t border-[var(--gray-light)] text-center">
          <h2 className="text-2xl font-light text-[var(--accent-brown)] mb-6">
            Outras formas de contato
          </h2>
          <div className="space-y-2 text-[var(--text-muted)]">
            <p>Email: marianagila@gmail.com</p>
            <p>Telefone: (83) 99185-7266</p> 
            <p>Instagram: @marigbss</p>
          </div>
        </div>
      </div>
    </div>
  );
}
