/**
 * ROOT LAYOUT
 * 
 * Este é o layout raiz da aplicação Next.js.
 * É um Server Component por padrão - renderizado no servidor.
 * 
 * NEXT/FONT:
 * - Importa fontes do Google Fonts de forma otimizada
 * - Inter: fonte sans-serif moderna e legível
 * - Playfair Display: fonte serifada elegante para títulos
 * - O Next.js baixa e otimiza as fontes automaticamente
 * 
 * ESTRUTURA:
 * - Navbar aparece em todas as páginas (está no layout)
 * - {children} é onde o conteúdo de cada página é inserido
 * - Footer também aparece em todas as páginas
 */

import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// Fonte principal (corpo de texto)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap", // Otimização de carregamento
});

// Fonte elegante para títulos
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mariana Borges | Arquitetura",
  description: "Portfólio de projetos arquitetônicos residenciais e comerciais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        {/* Navbar fixo no topo */}
        <Navbar />
        
        {/* Conteúdo da página atual */}
        <main className="pt-16">
          {children}
        </main>

        {/* Footer simples */}
        <footer className="bg-[var(--accent-brown-dark)] text-white py-12 mt-20">
          <div className="max-w-full mx-auto px-4 md:px-6 text-center">
            <p className="text-sm font-light tracking-wider opacity-90">
              © 2026 Mariana Borges Arquitetura. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
