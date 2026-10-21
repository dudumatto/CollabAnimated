# CollabResearch: landing (pitch comercial)

Vite + JS puro, GSAP/ScrollTrigger, Lenis e three.js (só no núcleo da Lumen, carregado sob demanda).

```bash
npm install
npm run dev      # http://localhost:5190
npm run build    # dist/
```

Movimento reduzido do sistema é respeitado. Para ver as animações mesmo assim: `?motion` na URL (fica salvo no navegador) ou o botão no canto da página; `?motion=0` volta ao padrão.

## Narrativa
Hero (UI real + cards entrando pelas laterais) → Problema (texto que se preenche; fragmentos dispersos convergem num hub) → Solução (máscara; ciclo de 7 etapas; ganhos por público) → Lumen (máscara a partir do núcleo; ato do aluno e ato do orientador) → IA justa (cards escuros com luz no cursor) → Demonstração (sequência de quadros do app) → Menos burocracia, mais pesquisa.

## Arquivos
- `src/core.js`: núcleo líquido da Lumen (raymarching SDF, gotas com smooth-min, espectro do botão real), partículas de fluxo e poeira.
- `src/lumen.js`: capítulo da Lumen; `apply(p)` deriva tudo do progresso da rolagem. Dados de exemplo seguem os 5 critérios e pesos do `LumenService`.
- `src/main.js`: rolagem, máscaras, preenchimento, entradas laterais, ciclo, scramble, filme, luz no cursor, botões magnéticos.
- `src/frames.js` + `public/frames/`: demonstração existente (motion/landing), reaproveitada.
- `PRODUCT.md`, `DESIGN.md`, `.impeccable/`: contexto e sistema visual (Impeccable).

Técnicas da vitrine naocodei.com/free-code: 03 quadros, 04 texto que se preenche, 05 máscara, 07 linha do tempo, 10 inércia, 12 luz no cursor, 14 botão elástico, 15 embaralhar letras, 16 revelar palavras.
