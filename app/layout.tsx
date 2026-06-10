import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

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
        className={`${inter.variable} ${playfair.variable} overflow-x-hidden font-sans antialiased`}
      >
        <Navbar />

        <main>{children}</main>

        <footer className="mt-16 bg-[var(--accent-brown-dark)] py-8 text-white md:mt-24">
          <div className="w-full max-w-6xl mx-auto px-6 text-center sm:px-8 lg:px-12">
            <p className="text-sm font-light tracking-wider opacity-90">
              © 2026 Mariana Borges Arquitetura. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
