# PRODUCT

> Inferido do brief do usuário, de `CollabResearch/PITCH.md`, `README.md` e do código real (`web/`, `backend/LumenService.java`). Suposições marcadas com *(suposição)*.

## Produto
CollabResearch: plataforma que centraliza o ciclo da iniciação científica (publicar, descobrir, inscrever-se, selecionar, acompanhar, entregar, avaliar), conectando alunos e orientadores. Web (React), mobile (Flutter), desktop admin (Electron), API Spring Boot.

Lumen AI, a IA da plataforma:
- Aluno: compara perfil (biografia, curso, documentos) com projetos abertos e recomenda até 3, com classificação A–D e justificativa escrita para o aluno. Se nada combina, sugere criar o próprio projeto.
- Orientador: avalia inscrições com nota de 0 a 10 ponderada por 5 critérios (motivação específica 25%, alinhamento com o projeto 25%, capacidade de reflexão 20%, curiosidade e iniciativa 20%, evidências complementares 10%), justificativa por critério, pontos fortes, pontos de atenção, confiança (alta/média/baixa) e ranking.
- Justa por design: avalia potencial, certificado não compra nota, contradições sinalizadas, anti prompt injection em duas camadas. A IA sugere, o professor decide.

## Público
Alunos de graduação procurando iniciação científica; professores orientadores; coordenação de curso/instituição (comprador do piloto) *(suposição: coordenação é quem decide adotar)*.

## Superfície
Landing page, modo **Persuade**. Pitch comercial: problema, solução, benefícios por público, Lumen (aluno e orientador), demonstração, fechamento "Menos burocracia, mais pesquisa.".

## Compromissos de marca
- Cores da plataforma: verde `#1f7a5a`, musgo `#557c55`, sálvia `#7ea06a`, fundo `#f6f8f5`, escuro `#101a14`.
- Identidade da Lumen: espectro do botão real (`#ef4444`, `#facc15`, `#3b82f6`). Núcleo da IA nunca verde.
- Logo `collab` (web/public/brand).
- Interface mostrada = interface real (Nunito, raios 12–16px, pílulas de status).

## Claims
Sem números inventados (usuários, projetos, instituições). Exemplos de candidatos/projetos são ilustrativos e rotulados como exemplo.

## Anti-referências
Hero + faixa de estatísticas + grade de cards iguais + depoimentos; IA com verde neon "hacker"; números fake.
