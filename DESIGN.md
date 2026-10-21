---
name: CollabResearch Landing
description: Pitch comercial do CollabResearch. Menos burocracia, mais pesquisa.
colors:
  green: "#1f7a5a"
  green-deep: "#185e46"
  green-wash: "#eff5ec"
  moss: "#557c55"
  sage: "#7ea06a"
  sage-wash: "#e0e7d2"
  lichen-paper: "#f6f8f5"
  lichen-paper-2: "#edf3e9"
  ink: "#17251d"
  ink-3: "#4d5f53"
  ink-4: "#66736a"
  line: "#dde5da"
  forest-night: "#07110c"
  forest-night-3: "#112018"
  on-night: "#eef4ec"
  on-night-2: "#bccabe"
  navy-film: "#1a1f31"
  lumen-blue: "#3b82f6"
  lumen-violet: "#8b5cf6"
  lumen-red: "#ef4444"
  lumen-yellow: "#facc15"
typography:
  display:
    fontFamily: "Bricolage Grotesque Variable, Nunito Variable, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 1.15rem + 4.5vw, 5.4rem)"
    fontWeight: 750
    lineHeight: 0.97
    letterSpacing: "-0.035em"
    fontVariation: "wdth 90"
  headline:
    fontFamily: "Bricolage Grotesque Variable, Nunito Variable, system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 1.05rem + 3.1vw, 4.1rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.032em"
    fontVariation: "wdth 92"
  title:
    fontFamily: "Bricolage Grotesque Variable, Nunito Variable, system-ui, sans-serif"
    fontSize: "clamp(1.3rem, 1.05rem + 0.8vw, 1.8rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Nunito Variable, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 450
    lineHeight: 1.6
  label:
    fontFamily: "Nunito Variable, system-ui, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 650
    lineHeight: 1.3
rounded:
  ctl: "12px"
  card: "16px"
  window: "18px"
  pill: "999px"
spacing:
  gutter: "clamp(20px, 4vw, 56px)"
  container: "1240px"
  section: "clamp(96px, 16vh, 200px)"
components:
  button-primary:
    backgroundColor: "{colors.green}"
    textColor: "#ffffff"
    rounded: "{rounded.ctl}"
    height: "48px"
    padding: "0 20px"
  button-primary-hover:
    backgroundColor: "{colors.green-deep}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.ctl}"
    height: "48px"
    padding: "0 20px"
  tag-ok:
    backgroundColor: "{colors.green-wash}"
    textColor: "#0d7a4c"
    rounded: "{rounded.pill}"
    typography: "{typography.label}"
  ui-card:
    backgroundColor: "#ffffff"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
  night-tile:
    backgroundColor: "{colors.forest-night-3}"
    textColor: "{colors.on-night}"
    rounded: "{rounded.card}"
    padding: "32px"
---

# Design System: CollabResearch Landing

## Overview

**Creative North Star: "A Bancada e a Lumen"**

A bancada é a pesquisa: chão claro de líquen, verdes da própria plataforma, interface real como ilustração. A Lumen é a luz: um núcleo líquido e iridescente que só aparece no escuro, no espectro do botão real da IA. A página alterna entre bancada (claro) e laboratório noturno (escuro), e cada troca de cor acontece por uma máscara circular que nasce de onde a próxima cena vai começar.

O movimento é o argumento. O que está disperso converge: fragmentos de e-mail, planilha e mural viram um hub; inscrições espalhadas atravessam o núcleo e saem como grade ordenada. Tudo é preso à rolagem (sem atraso), e a interface mostrada é a do produto, com as mesmas pílulas, raios e textos.

**Key Characteristics:**
- Fragmentos reais da UI (Nunito, raios 12–16px) como única ilustração.
- Display condensado e pesado (Bricolage a 90–92% de largura) contra corpo arredondado (Nunito).
- Espectro da Lumen restrito à IA; o resto é verde.
- Máscara circular em toda mudança de cor de seção.
- Cards escuros acendem com luz que segue o cursor.

## Colors

Verdes de bancada sobre líquen, uma noite de floresta para a IA e um espectro de luz que pertence só à Lumen.

### Primary
- **Verde Bancada** (green): ação principal, etapas acesas no ciclo, destaques de palavra-chave, borda do 1º colocado.
- **Verde Fundo de Copo** (green-deep): hover do primário e texto sobre lavagem verde.

### Secondary
- **Musgo** (moss) e **Sálvia** (sage): fim de gradientes de avatar e barras de progresso; nunca como ação.

### Tertiary
- **Espectro Lumen** (lumen-blue, lumen-violet, lumen-red, lumen-yellow): núcleo líquido, anel cônico do botão e do orbe, barras de peso dos critérios. Só onde a IA está agindo.

### Neutral
- **Líquen** (lichen-paper): chão das seções claras. **Líquen Fundo** (lichen-paper-2): seção Solução, revelada por máscara.
- **Tinta** (ink, ink-3, ink-4): texto principal, secundário e metadado.
- **Linha** (line): divisores e bordas de controles.
- **Floresta Noturna** (forest-night, forest-night-3): capítulo Lumen e IA justa; tiles escuros.
- **Navy de Filme** (navy-film): seção da demonstração, casada com o fundo dos quadros do vídeo.

### Named Rules
**The Luz Só da Lumen Rule.** Azul, violeta, coral e âmbar aparecem apenas em elementos da IA. O núcleo da Lumen nunca é verde.

**The Uma Cor por Campo Rule.** Cada seção é um campo de uma cor só; troca de campo sempre por máscara circular, nunca por corte seco.

## Typography

**Display Font:** Bricolage Grotesque Variable (com Nunito Variable)
**Body Font:** Nunito Variable (com system-ui)

**Character:** grotesca condensada com tinta pesada para afirmar; Nunito, a fonte da própria plataforma, para explicar e para toda UI mostrada.

### Hierarchy
- **Display** (750, clamp 2.6–5.4rem, 0.97): H1 do hero e fechamento (fechamento até 6rem).
- **Headline** (700, clamp 2.1–4.1rem, 1.0): títulos de seção e o texto que se preenche.
- **Title** (700, clamp 1.3–1.8rem, 1.1): dores, tiles, atos da Lumen.
- **Body** (450, 1rem, 1.6): parágrafos até 46–58ch.
- **Label** (650, 0.72rem): pílulas de status e notas, com algarismos tabulares.

### Named Rules
**The UI Fala Nunito Rule.** Todo pedaço de interface do produto usa Nunito nos tamanhos reais do app (11–15px); a Bricolage nunca entra numa tela de produto, exceto na nota da Lumen.

## Layout

Contêiner de 1240px com calha fluida (20–56px). Seções com respiro vertical de 96–200px. Cenas longas usam palco `sticky` de 100svh dentro de seções altas (Lumen 860vh, filme 420vh), com o progresso da rolagem dirigindo uma função determinística. Grades: hero 1.05/1fr; problema 1/1 com colagem fixa; ciclo em 7 colunas (4 até 1100px, vertical no mobile); públicos 0.8/1.4/0.95; bento de 12 colunas. Abaixo de 768px tudo empilha e as cenas da Lumen ancoram os cartões de UI na base da tela.

## Elevation & Depth

Híbrido. No claro, profundidade por sombra suave com deslocamento; no escuro, tiles planos com borda de 1px e luz de cursor no lugar de sombra. Cartões de UI sobre a noite usam uma sombra longa e escura.

### Shadow Vocabulary
- **UI em repouso** (`0 1px 2px rgba(23,37,29,.05), 0 18px 40px -18px rgba(23,37,29,.3)`): fragmentos, mini-cards, tokens do ciclo.
- **UI em destaque** (`0 2px 4px rgba(23,37,29,.06), 0 30px 60px -24px rgba(23,37,29,.42)`): janela do app, cards flutuantes, hub.
- **UI na noite** (`0 2px 6px rgba(0,0,0,.3), 0 36px 70px -26px rgba(0,0,0,.75)`): cartões do capítulo Lumen.

### Named Rules
**The Borda ou Sombra Rule.** Cada superfície declara elevação uma vez: sombra no claro, borda de 1px no escuro.

## Shapes

Raios de produto: 12px em controles, 16px em cartões, 18px na janela do app; pílulas só em tags, status e botões da Lumen. Círculos para avatares, nós do ciclo e orbes. O núcleo é a única forma orgânica: SDF líquido com gotas que se fundem.

## Components

### Buttons
- **Shape:** cantos de controle (12px), alturas 40/48/56px.
- **Primary:** verde bancada, texto branco, sombra verde curta; ícone de seta num quadrado translúcido que desliza no hover.
- **Hover / Focus:** verde fundo de copo; foco com contorno de 2px e deslocamento de 3px. Botões principais são magnéticos com mouse.
- **Ghost:** transparente com borda linha; na noite, borda branca a 18%.

### Chips
- **Style:** pílulas de 0.72rem nas lavagens de status reais (verde, amarelo, vermelho, cinza), algarismos tabulares.
- **State:** notas ≥7 verde, ≥4 amarelo, abaixo disso vermelho (mesma regra do app).

### Cards / Containers
- **Corner Style:** 16px.
- **Background:** branco no claro e sobre a noite; floresta noturna 3 nos tiles escuros.
- **Shadow Strategy:** ver Elevation.
- **Internal Padding:** 12–20px em UI, 22–32px em tiles.

### Navigation
Pílula fixa de 56px; transparente no topo, vidro claro ao rolar e vidro escuro sobre seções noturnas (troca por gatilho de rolagem). Links somem abaixo de 900px; "Entrar" some abaixo de 768px.

### Núcleo da Lumen (signature)
Raymarching de SDF: esfera com ondas cruzadas, até 8 gotas unidas por smooth-min, ponteiro que estica o líquido, halo no espectro. Câmera ortográfica em pixels, alinhada ao DOM, para que cartões HTML entrem nele de verdade. Ato do aluno: gotas-projeto orbitam e três se destacam. Ato do orientador: cada inscrição vira gota ao tocar o núcleo; o processamento agita e ilumina o líquido; o núcleo encolhe até o orbe do cabeçalho do ranking.

### Botão e orbe da Lumen
Réplicas do app: borda cônica vermelho/amarelo/azul girando (2.5s) sob preenchimento branco; orbe com anel cônico e faísca verde pulsando.

## Do's and Don'ts

### Do:
- **Do** prender texto que se preenche, máscaras e entradas laterais ao progresso exato da rolagem (scrub sem suavização).
- **Do** usar interface real do CollabResearch como ilustração e rotular dados de exemplo.
- **Do** revelar cada mudança de cor de seção com máscara circular.
- **Do** respeitar movimento reduzido por padrão e oferecer o botão para ligar as animações.

### Don't:
- **Don't** pintar o núcleo da Lumen de verde nem usar o espectro fora da IA.
- **Don't** inventar números de uso (projetos, alunos, instituições).
- **Don't** usar rótulo acima de título (kicker/eyebrow) nem texto em gradiente.
- **Don't** trocar a Nunito da UI por outra fonte nas telas de produto.
