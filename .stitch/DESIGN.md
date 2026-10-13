# FEERLESS — Design System & Visual Specification (.stitch/DESIGN.md)

> **Documento Oficial de Arquitetura de Design & UX/UI**  
> Criado via `stitch::extract-design-md` e enriquecido com os padrões de alta densidade estética do `taste-design`.

---

## 1. 🌌 Atmosfera & Filosofia Visual

A identidade visual da **FEERLESS** é minimalista, precisa e de alto contraste. Inspirada no design contemporâneo internacional e no movimento dark-mode editorial, ela elimina poluição visual e adota uma hierarquia monocromática rigorosa (Preto & Branco) com acentos intencionais em **Volt Lime** (`#D4FF32`) e **Emerald** (`#10B981`).

- **Densidade:** 6/10 (Equilibrada, respiro generoso, blocos limpos, sem amontoamento).
- **Contraste:** 9.5/10 (Pretos ultra-profundos combinados com Branco puro `#FFFFFF` e toques elétricos).
- **Tipografia:** Arquitetura tripla — Display de impacto, Corpo geométrico ultra-legível e Tags técnicas mono/grotescas.
- **Acabamento:** Superfícies translúcidas em *Glassmorphism* escuro com bordas de luz sutil (`inset 0 1px 0 rgba(255,255,255,0.2)`).

---

## 2. 🎨 Paleta de Cores Calibrada

### A. Cores Primárias (Base Monocromática com Destaque para o Branco)
| Token | Hex / Valor | Função & Aplicação |
| :--- | :--- | :--- |
| `--color-pure-white` | `#FFFFFF` | Títulos de alto impacto, botões primários de conversão, ícones em destaque e linhas de contraste. |
| `--color-off-white` | `#F4F5F0` | Textos principais, subtítulos claros e bordas ativas. |
| `--color-muted-white` | `rgba(244, 245, 240, 0.72)` | Parágrafos de apoio, descrições secundárias e legendas. |
| `--color-obsidian` | `#080B08` | Fundo principal ultra-escuro com undertone sutil de floresta noturna. |
| `--color-dark-surface` | `#111A12` | Superfície de cartões, modais, painéis e contêineres de alta hierarquia. |
| `--color-glass-card` | `rgba(17, 26, 18, 0.78)` | Cartões com `backdrop-filter: blur(18px)`. |

### B. Acentos de Identidade (Referência Visual Feerless)
| Token | Hex / Valor | Função & Aplicação |
| :--- | :--- | :--- |
| `--color-volt-lime` | `#D4FF32` | **Acento Primário de Destaque**: Badges chave, highlights de texto, cursor indicators, micro-interações. |
| `--color-emerald` | `#10B981` | **Acento Secundário**: Bot Financeiro, status online, métricas positivas de faturamento, validações. |
| `--color-soft-lime` | `#E4FF66` | **Acento Terciário**: Brilhos sutis (*glow*), barras de progresso secundárias e hovers refinados. |
| `--color-volt-tint` | `rgba(212, 255, 50, 0.12)` | Fundos de badges elétricas e contornos ativos. |
| `--color-border-subtle` | `rgba(255, 255, 255, 0.12)` | Divisores e bordas de cards minimalistas. |
| `--color-border-glow` | `rgba(255, 255, 255, 0.28)` | Estado de foco e hover em elementos interativos. |

---

## 3. ✍️ Arquitetura Tipográfica

A tipografia combina legibilidade corporativa com a energia visual de marcas esportivas e tecnológicas:

| Nível | Família Tipográfica | Peso | Propósito |
| :--- | :--- | :--- | :--- |
| **Display / Punch** | `Anton`, sans-serif | 700 (Condensed) | Números de passos (`01`, `02`), métricas numéricas expressivas e palavras de alto impacto. |
| **Headlines** | `Instrument Sans`, sans-serif | 700 / 600 | Títulos principais de páginas (`h1`), seções (`h2`) com tracking apertado (`-0.035em`). |
| **Body / Leitura** | `Plus Jakarta Sans`, sans-serif | 400 / 500 | Parágrafos longos, tópicos de metodologia, itens de FAQ e descrições detalhadas. |
| **Technical Labels** | `Space Grotesk`, sans-serif | 600 / 700 | Badges, kickers acima de títulos, tags de categoria, pills de navegação (`letter-spacing: 0.16em`). |

---

## 4. 🔘 Componentes & Interações

### A. Botões Pílula (Pill Buttons)
- **Primary White Pill:**
  - `background: #FFFFFF; color: #080B08; font-weight: 700; border-radius: 9999px; padding: 16px 36px;`
  - Sombras elegantes: `box-shadow: 0 12px 30px rgba(255,255,255,0.18);`
  - Hover: `transform: translateY(-2px); box-shadow: 0 16px 40px rgba(255,255,255,0.28);`
- **Primary Volt Lime Pill:**
  - `background: #D4FF32; color: #080B08; font-weight: 700; border-radius: 9999px;`
  - Hover: `background: #E4FF66; transform: translateY(-2px);`
- **Inverted Glass Pill (Ghost 2.0):**
  - `background: rgba(255, 255, 255, 0.06); color: #FFFFFF; border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 9999px;`
  - Hover: `background: rgba(255, 255, 255, 0.15); border-color: #FFFFFF;`

### B. Cards com Borda de Luz (Light-Border Glass Cards)
- Fundo: `rgba(17, 26, 18, 0.75)` com desfoque de `16px`.
- Borda: `1px solid rgba(255, 255, 255, 0.10)`.
- Borda interna superior de luz: `box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.18), 0 20px 45px rgba(0,0,0,0.6)`.
- Raio de canto: `20px` a `24px` para suavidade escultural.

### C. Badges e Tags Técnicas
- Formato pílula ultra-lapidada com `display: inline-flex; align-items: center; gap: 8px;`.
- Ponto pulsante com box-shadow proporcional (`box-shadow: 0 0 10px currentColor`).
- Tipografia em `Space Grotesk` com caixa alta controlada.

---

## 5. 📸 Tratamento de Mídia & Imagens

Todas as fotografias e mídias do portfólio (`foto-hero.jpeg`, `bot-chat.jpg`, miniaturas de vídeo, mockups de sites e anúncios) seguem diretrizes rígidas:
- **Moldura:** Confinadas em contêineres com proporções fixas (16:9, 9:16 ou 4:3) para evitar trepidação de layout.
- **Zoom Suave:** No hover, escala suave de `scale(1.04)` com transição cúbica de 600ms (`cubic-bezier(0.16, 1, 0.3, 1)`).
- **Overlay Dinâmico:** Gradiente escuro sutil que realça títulos e ícones de play/zoom sem lavar a imagem original.
- **Lightbox em Tela Cheia:** Modal nativo com fundo escurecido a 85% e fechamento rápido via tecla `Escape`.

---

## 6. 🚫 Anti-Patterns Proibidos (Regras Anti-Slop)

1. ❌ **Sem Cinza Chumbo Opaco:** Nunca use gradientes cinzentos sem personalidade (`#333333` plano). Use preto obsidiana profundo com contraste limpo em branco.
2. ❌ **Sem Letras Azuis Neon Aleatórias:** Cores respeitam o propósito de conversão (Branco puro, Volt Lime e Emerald).
3. ❌ **Sem Falta de Contraste:** Textos secundários devem ter no mínimo 70% de opacidade sobre fundos escuros para acessibilidade WCAG AAA.
4. ❌ **Sem Saltos de Layout (CLS Zero):** Elementos em rotação ou hover nunca empurram o conteúdo vizinho.
