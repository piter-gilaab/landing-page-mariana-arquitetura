# 🎨 Guia de Estilo - Paleta de Cores Marrom/Bege

## Paleta de Cores

Este portfólio utiliza uma paleta terrosa e elegante inspirada em arquitetura e materiais naturais.

### Variáveis CSS Disponíveis

Todas as cores estão centralizadas em `app/globals.css` para facilitar manutenção:

```css
/* Fundos claros (bege/off-white) */
--background: #faf8f5;           /* Off-white quente */
--background-alt: #f5f1eb;       /* Bege muito claro */

/* Textos */
--foreground: #2d2520;           /* Marrom escuro (quase preto) */
--text-muted: #7d7268;           /* Marrom médio para textos secundários */

/* Destaque marrom */
--accent-brown: #8b6f47;         /* Marrom médio (destaque principal) */
--accent-brown-dark: #6b5438;    /* Marrom escuro (hover) */
--accent-brown-light: #b8956a;   /* Marrom claro (detalhes) */

/* Neutros */
--gray-light: #e5dfd8;           /* Cinza bege claro */
--gray-medium: #c4b9ad;          /* Cinza bege médio */
```

## Como Usar as Cores no Tailwind

### Classes Utilitárias Customizadas

No `globals.css`, há classes prontas:

```css
.text-brown          → cor de texto marrom
.text-brown-dark     → cor de texto marrom escuro
.bg-brown            → fundo marrom
.bg-brown-dark       → fundo marrom escuro
.bg-beige            → fundo bege claro
.border-brown        → borda marrom
```

### Usando Variáveis CSS Diretamente

Você pode usar as variáveis diretamente com `var()`:

```tsx
className="bg-[var(--accent-brown)]"           // Fundo marrom
className="text-[var(--text-muted)]"          // Texto marrom médio
className="border-[var(--gray-light)]"        // Borda bege clara
className="hover:text-[var(--accent-brown)]"  // Hover marrom
```

## Filosofia de Uso das Cores

### ✅ Boas Práticas

1. **Marrom como DESTAQUE, não dominante**
   - Títulos importantes
   - Elementos hover
   - CTAs (Call to Actions)
   - Detalhes visuais

2. **Bege/Off-white como BASE**
   - Fundos principais
   - Áreas de respiro visual
   - Separação de seções

3. **Tons terrosos para HIERARQUIA**
   - `--foreground`: textos principais
   - `--text-muted`: textos secundários
   - `--accent-brown`: destaque

### ❌ Evitar

- Saturar a página com marrom
- Usar preto puro (#000000)
- Cores muito vibrantes ou saturadas
- Degradês agressivos

## Exemplos Práticos

### Botão Primário

```tsx
<button className="px-8 py-3 bg-[var(--accent-brown)] text-white hover:bg-[var(--accent-brown-dark)] transition-colors">
  Ver Projetos
</button>
```

### Título com Destaque

```tsx
<h1 className="text-5xl text-[var(--accent-brown)]">
  Mariana Borges Arquitetura
</h1>
```

### Card com Fundo Sutil

```tsx
<div className="bg-[var(--background-alt)] p-6">
  <p className="text-[var(--text-muted)]">Conteúdo...</p>
</div>
```

### Input com Borda Marrom no Focus

```tsx
<input 
  className="border border-[var(--gray-medium)] focus:border-[var(--accent-brown)]"
/>
```

## Alterando a Paleta

Para mudar as cores do site inteiro:

1. Abra `app/globals.css`
2. Modifique os valores hexadecimais nas variáveis CSS
3. Salve o arquivo
4. As mudanças serão aplicadas automaticamente em todo o site!

### Sugestões de Paletas Alternativas

**Tons de Cinza Modernos:**
```css
--accent-brown: #5a6169;         /* Cinza azulado */
--accent-brown-dark: #3d4349;
```

**Tons de Verde Sóbrios:**
```css
--accent-brown: #6b7c5d;         /* Verde musgo */
--accent-brown-dark: #4f5a45;
```

**Tons de Azul Discretos:**
```css
--accent-brown: #5d7a8f;         /* Azul acinzentado */
--accent-brown-dark: #455a6a;
```

## Sobre a Escolha da Paleta

**Por que marrom/bege?**
- Remete a materiais naturais (madeira, argila, terra)
- Transmite elegância e sobriedade
- É atemporal e profissional
- Não cansa a vista
- Combina com fotografia de arquitetura

**Por que não preto/branco puro?**
- Tons terrosos são mais suaves
- Criam uma identidade visual única
- Refletem a natureza e sustentabilidade
- Diferenciam de portfolios genéricos
