## Objetivo

Criar uma nova seção logo abaixo da Hero, contendo o card "Radar de Lançamentos" (conforme print enviado), com um radar animado ao fundo que transborda livremente sobre a Hero acima, criando continuidade visual entre as duas seções.

## O que será construído

### 1. Novo componente `RadarShowcaseSection.tsx`

Bloco visual centralizado com:

- **Fundo animado de radar** (SVG/CSS puro, sem libs novas):
  - Círculos concêntricos vermelhos suaves (rings do radar)
  - Linha de varredura giratória (sweep) em rotação contínua (animação CSS `@keyframes spin`, ~6s loop)
  - Pontos pulsantes ("blips") posicionados aleatoriamente nos anéis
  - Glow vermelho radial ao centro, alinhado ao design system
- **Overflow para cima:** o radar é maior que a seção (ex.: `h-[140%]`, posicionado com `top: -40%`) e o container usa `overflow-visible`, fazendo o anel superior se sobrepor à parte inferior da Hero. A Hero permanece com `overflow-hidden` apenas no que precisa; ajustaremos para `overflow-visible` no wrapper inferior se necessário.
- **Card central** replicando o print:
  - Header: ícone circular vermelho + título "Radar de **Lançamentos**" (palavra em vermelho)
  - Abas: `Próximos` (ativa), `Ao Vivo` (com dot pulsante), `Anteriores`
  - Linha de busca: input "Palavras-chave (ex: aulão, lançamento...)" + select "Português" + botão vermelho "Buscar Lançamentos"
  - 3 mini-cards de feature:
    1. **Encontre antes da concorrência** — "Detecte lançamentos e estreias em tempo real antes que outros afiliados descubram."
    2. **Monitore por idioma** — "Filtre por idioma e palavras-chave para encontrar oportunidades relevantes."
    3. **Identifique oportunidades** — "Descubra vídeos em estreia com alto potencial de afiliação e posicione-se primeiro."
  - Estilo: borda suave, leve sombra, fundo escuro translúcido, glow vermelho sutil — coerente com o resto do site.

### 2. Integração

- Importar e renderizar `<RadarShowcaseSection />` em `src/pages/Index.tsx` logo após `<HeroSection />`.
- Garantir que o radar "vaze" para cima sem quebrar layout em mobile (no mobile reduzimos o overflow para evitar conflito com o conteúdo da Hero).

### 3. Detalhes técnicos

- **Animação:** CSS `@keyframes` para o sweep (rotação 360°) e para os blips (pulse/fade). Sem JS, sem novas dependências.
- **Design tokens:** usa `radar-red`, `radar-dark`, `radar-gray` e utilitários `glow-red`/`glow-red-sm` já existentes em `index.css` e `tailwind.config.ts`. Nenhuma cor hardcoded.
- **Responsivo:** card com `max-w-3xl`, grid de features `grid-cols-1 md:grid-cols-3`. Radar redimensiona via `vw` units.
- **Acessibilidade/SEO:** H2 "Radar de Lançamentos", inputs com `aria-label`, ícones decorativos com `aria-hidden`.
- **Performance:** SVG inline leve; animações via `transform` (GPU).

## Arquivos

- **Novo:** `src/components/landing/RadarShowcaseSection.tsx`
- **Editado:** `src/pages/Index.tsx` (1 import + 1 linha JSX)

## Fora de escopo

- Funcionalidade real de busca (apenas visual/decorativa, como no print).
- Alterações nas demais seções existentes.